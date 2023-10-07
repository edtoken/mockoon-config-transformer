import * as fs from 'fs';
import * as path from 'path';

import '../env.js';
import { pathJoin, promiseQ, runCli } from './script-utils.js';

const exampleEnvironmentsDir = path.normalize(
  './examples/mockoon-mock-samples'
);
const edgeCasesEnvironmentsDir = path.normalize('./examples/edge-cases');
const tmpEnvironmentsDir = path.normalize('./examples/.tmp');

const allExamples = [
  ...fs
    .readdirSync(exampleEnvironmentsDir)
    .filter((name) =>
      fs.statSync(pathJoin(exampleEnvironmentsDir, name)).isDirectory()
    )
    .map((name) => ({ name, dir: exampleEnvironmentsDir })),
  ...fs
    .readdirSync(edgeCasesEnvironmentsDir)
    .filter((name) =>
      fs.statSync(pathJoin(edgeCasesEnvironmentsDir, name)).isDirectory()
    )
    .map((name) => ({ name, dir: edgeCasesEnvironmentsDir })),
  ...(!fs.existsSync(tmpEnvironmentsDir)
    ? []
    : fs
        .readdirSync(tmpEnvironmentsDir)
        .filter((exampleName) => !exampleName.includes('.json'))
        .map((name) => ({ name, dir: tmpEnvironmentsDir })))
];

const examples = allExamples.map(({ name, dir }) => {
  const exampleDirPath = path.normalize(path.join(dir, `${name}/`));

  const inputEnvironmentFilePath = path.normalize(
    path.join(exampleDirPath, `environment.json`)
  );

  const outputExtractJSONDirPath = path.normalize(
    path.join(exampleDirPath, `extract/json`)
  );

  const outputBundleJSONFilePath = path.normalize(
    path.join(exampleDirPath, `bundle/from-json.json`)
  );

  return {
    name,
    exampleDirPath,
    inputEnvironmentFilePath,
    outputExtractJSONDirPath,
    outputBundleJSONFilePath
  };
});

promiseQ(
  2,
  examples.map(
    ({
      name,
      exampleDirPath,
      inputBaseEnvironmentFilePath,
      inputEnvironmentFilePath,
      outputExtractJSONDirPath,
      outputBundleJSONFilePath
    }) => {
      return async () => {
        console.log(`Started ${name}`);

        fs.rmSync(path.normalize(`${exampleDirPath}/bundle`), {
          recursive: true,
          force: true
        });
        fs.rmSync(path.normalize(`${exampleDirPath}/extract`), {
          recursive: true,
          force: true
        });

        const extractJSONArgs = [
          'extract',
          `-i ${inputEnvironmentFilePath}`,
          `-o ${outputExtractJSONDirPath}`,
          '-f',
          '--doc'
        ];
        const extractJSON = await runCli(extractJSONArgs);
        if (extractJSON?.error) {
          console.log('extractJSON');
          console.log(extractJSON);
          process.exit(1);
        }

        console.log(`Completed extract ${name}`, extractJSON);

        // bundle from json
        const bundleJSONArgs = [
          'bundle',
          `-i ${outputExtractJSONDirPath}/index.json`,
          `-o ${outputBundleJSONFilePath}`,
          '-f'
        ];

        const bundleJSON = await runCli(bundleJSONArgs);
        if (bundleJSON?.error) {
          console.log('bundleJSON');
          console.log(bundleJSON);
          process.exit(1);
        }
        console.log(`Completed bundle ${name}`);
        console.log(`Finished ${name}`);
      };
    }
  )
);
