import * as fs from 'fs';
import * as path from 'path';

import { Environment } from '@mockoon/commons';
import { toMarkdown } from 'mdast-util-to-markdown';
import { SUPPORTED_OUTPUT_TYPES } from './config.js';

import {
  customTransformerNames,
  customTransformers,
  mainTransformer
} from './transformers/extract/json/index.js';

import { Nodes } from 'mdast';
import { escapePath } from './common/utils.js';
import commonJSONBundler from './transformers/bundle/json/index.js';
import {
  createDoc,
  heading,
  lineBreak,
  relatedItems
} from './transformers/extract/documentation.js';
import {
  JsonTransformerNode,
  JsonTransformerValue,
  SupportedOutputFormat,
  SupportedOutputValue
} from './transformers/extract/json/types.js';
import { EnvironmentKeysList } from './typse.js';

export class JsonConverter {
  constructor() {}

  public static type = SUPPORTED_OUTPUT_TYPES.json;

  public static async convertFrom(indexFilePath: string): Promise<Environment> {
    return (await commonJSONBundler(indexFilePath)) as Environment;
  }

  public static convertTo(
    environment: Environment
  ): Array<JsonTransformerValue | JsonTransformerNode> {
    const envKeys = Object.keys(environment) as EnvironmentKeysList;

    const mainKeys = envKeys.filter(
      // @ts-expect-error false positive
      (key) => !customTransformerNames.includes(key)
    );

    const customKeys = envKeys.filter(
      (key) =>
        // @ts-expect-error false positive
        customTransformerNames.includes(key) && environment[key] !== undefined
    );

    const mainEnv = mainKeys.reduce((memo: object, key) => {
      // @ts-expect-error false positive
      memo[key] = environment[key];
      return memo;
    }, {}) as Environment;

    const mainIncludes = {
      key: 'includes',
      value: customKeys.reduce(
        (memo, k) => ({
          ...memo,
          [`${k}`]: escapePath(`./${k}/index.json`)
        }),
        {}
      )
    };

    const docSections = ['data', 'routes'];
    const relatedDocs = Object.keys(mainIncludes.value)
      .filter((name) => docSections.includes(name))
      .map((label) => ({
        label,
        // @ts-expect-error todo
        link: mainIncludes.value[label].replace(
          '/index.json',
          '/documentation.md'
        )
      }));

    return [
      ...mainTransformer(mainEnv),
      mainIncludes,
      createDoc([
        ...heading(environment.name),
        ...lineBreak(3),
        ...relatedItems(relatedDocs)
      ]),
      ...customKeys.map((key) => ({
        key,
        // @ts-expect-error false positive
        children: customTransformers[key](environment[key])
      }))
    ];
  }

  public static filePathsProcessor(
    data: Array<JsonTransformerValue | JsonTransformerNode>
  ): JsonTransformerValue[] {
    const files: JsonTransformerValue[] = [];

    data.forEach((item) => {
      if ('children' in item) {
        item.children.forEach((child: JsonTransformerValue) => {
          files.push({
            format: child.format,
            value: child.value,
            key: escapePath(`${item.key}/${child.key}`)
          });
        });
      } else {
        files.push(item as JsonTransformerValue);
      }
    });
    return files;
  }

  public static async filesCreateProcessor(
    { isForce, outputPath }: { isForce: boolean; outputPath: string },
    data: JsonTransformerValue[]
  ) {
    await Promise.all(
      data.map(async (item) => {
        const fileFormat = item.format || 'json';
        const filePath = path.normalize(
          path.join(outputPath, `${item.key}.${fileFormat}`)
        );

        if (fs.existsSync(filePath) && !isForce) {
          throw new Error(
            `The output file path already exists, use -f, --force to remove it or remove manually ${filePath}`
          );
        }

        const itemOutputDirPath = path.dirname(filePath);

        if (!fs.existsSync(itemOutputDirPath)) {
          fs.mkdirSync(itemOutputDirPath, { recursive: true });
        }

        const resolvePayload = (
          format: SupportedOutputFormat,
          value: SupportedOutputValue
        ): string => {
          if (format === 'json') {
            return JSON.stringify(value, null, 2);
          }
          if (format === 'md') {
            return toMarkdown(value as Nodes);
          }
          return String(value);
        };

        fs.writeFileSync(filePath, resolvePayload(fileFormat, item.value));
      })
    );
  }
}
