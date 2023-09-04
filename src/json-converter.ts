import * as fs from 'fs';
import * as path from 'path';

import { Environment } from '@mockoon/commons';
import { checkFileExists, readFile } from './common/utils';
import { SUPPORTED_OUTPUT_TYPES } from './config';

import jsonTransformers, {
  CustomTransformers
} from './transformers/json/index';

import {
  JsonTransformerPossibleResponse,
  JsonTransformerResponseItem,
  JsonTransformerValue
} from './transformers/json/types';

export class JsonConverter {
  public static type = SUPPORTED_OUTPUT_TYPES.json;

  public static async convertFrom(indexFilePath: string): Promise<Environment> {
    const reader = async (filePath: string) => {
      const fileExtension = path.extname(filePath);
      const jsonFilePath = path.normalize(filePath + '.json');
      const hbsFilePath = path.normalize(filePath + '.hbs');

      const fileDir = path.dirname(jsonFilePath);
      const commonsPath = path.normalize(path.join(fileDir, 'common.json'));
      const includesPath = path.normalize(path.join(fileDir, 'includes.json'));

      const [
        isBaseExists,
        isJsonExists,
        isHBSExists,
        isCommonExists,
        isIncludesExists
      ] = await Promise.all([
        checkFileExists(filePath),
        fileExtension ? false : checkFileExists(jsonFilePath),
        fileExtension ? false : checkFileExists(hbsFilePath),
        checkFileExists(commonsPath),
        checkFileExists(includesPath)
      ]);

      if (!isBaseExists && !isJsonExists && !isHBSExists) {
        throw new Error(
          `File doesn't exists: ${jsonFilePath} OR ${hbsFilePath}`
        );
      }

      let contentFilePath = filePath;
      if (isJsonExists) {
        contentFilePath = jsonFilePath;
      } else if (isHBSExists) {
        contentFilePath = hbsFilePath;
      }

      const [content, commons, includes] = await Promise.all([
        readFile(contentFilePath),
        isCommonExists ? readFile(commonsPath) : null,
        isIncludesExists ? readFile(includesPath) : null
      ]);

      const contentIsArray = Array.isArray(content);
      const isObject = typeof content === 'object';

      let payload = content;

      if (contentIsArray) {
        payload = [...(content || []), ...(commons || [])];
      } else if (isObject && content !== null) {
        payload = { ...(content || {}), ...(commons || {}) };
      }

      if (includes) {
        if (!contentIsArray) {
          const includeKeys = Object.keys(includes);
          const includesList = await Promise.all(
            includeKeys.map(async (k) => {
              return await reader(
                path.normalize(path.join(fileDir, includes[k]))
              );
            })
          );
          includesList.forEach((data, index) => {
            payload[includeKeys[index]] = data;
          });
        } else if (includes.length) {
          const arrayExtends = await Promise.all(
            includes.map(async (k: string) => {
              return await reader(path.normalize(path.join(fileDir, k)));
            })
          );
          payload = [...payload, ...arrayExtends];
        }
      }

      return payload;
    };

    return (await reader(indexFilePath)) as Environment;
  }

  public static convertTo(
    environment: Environment
  ): JsonTransformerResponseItem[] {
    const { main, ...other } = jsonTransformers;
    const customTransformers: CustomTransformers[] = Object.keys(other);

    const environmentKeys: Array<keyof Environment> = Object.keys(
      environment
    ) as Array<keyof Environment>;

    const mainKeys = environmentKeys.filter(
      (k) => !customTransformers.includes(k)
    );

    const customKeys = customTransformers.filter((k) =>
      environmentKeys.includes(k)
    );

    // @ts-expect-error todo fix
    const mainParams: Environment = mainKeys.reduce(
      (memo, key) => ({
        ...memo,
        [key]: environment[key]
      }),
      {}
    );

    const result = [
      ...main(mainParams),
      {
        key: 'includes',
        value: customKeys.reduce(
          (memo, k) => ({
            ...memo,
            [`${k}`]: `./${k}/index`
          }),
          {}
        )
      }
    ];

    customKeys.forEach((transformerName) => {
      result.push({
        key: `${transformerName}`,
        // @ts-expect-error todo fix
        children: other[transformerName](environment[transformerName])
      });
    });
    return result;
  }

  public static filePathsProcessor(data: JsonTransformerPossibleResponse) {
    const files: JsonTransformerValue[] = [];

    data.forEach((item) => {
      if (item?.children) {
        item.children.forEach((child: JsonTransformerValue) => {
          files.push({
            format: child.format,
            value: child.value,
            key: `${item.key}/${child.key}`
          });
        });
        return;
      }
      // todo
      files.push(item as JsonTransformerValue);
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

        const payload =
          fileFormat === 'json'
            ? JSON.stringify(item.value, null, 2)
            : item.value;

        fs.writeFileSync(filePath, payload);
      })
    );
  }
}
