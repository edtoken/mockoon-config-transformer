import * as fs from 'fs';
import * as path from 'path';

import '../env.js';
import { promiseQ, runCli } from './script-utils.js';

if (!fs.existsSync('./.tmp')) {
  fs.mkdirSync('./.tmp');
}

const examplesDir = path.normalize('./.tmp/test-environments');

const examples = fs
  .readdirSync(examplesDir)
  .filter((exampleName) => !exampleName.includes('.json'))
  .map((exampleName) => {
    const exampleDirPath = path.normalize(
      path.join(examplesDir, `${exampleName}/`)
    );

    const inputEnvironmentFilePath = path.normalize(
      path.join(exampleDirPath, `environment.json`)
    );

    const outputExtractJSONDirPath = path.normalize(
      path.join(exampleDirPath, `extract/json`)
    );
    const outputExtractMarkdownDirPath = path.normalize(
      path.join(exampleDirPath, `extract/markdown`)
    );

    const outputBundleJSONFilePath = path.normalize(
      path.join(exampleDirPath, `bundle/from-json.json`)
    );
    const outputBundleMarkdownFilePath = path.normalize(
      path.join(exampleDirPath, `bundle/from-markdown.json`)
    );

    return {
      exampleName,
      exampleDirPath,
      inputEnvironmentFilePath,
      outputExtractJSONDirPath,
      outputBundleJSONFilePath,
      outputExtractMarkdownDirPath,
      outputBundleMarkdownFilePath
    };
  });

console.log(`Build examples list: ${examples.length}`);

promiseQ(
  2,
  examples.map(
    ({
      exampleName,
      exampleDirPath,
      inputEnvironmentFilePath,
      outputExtractJSONDirPath,
      outputBundleJSONFilePath,
      outputExtractMarkdownDirPath,
      outputBundleMarkdownFilePath
    }) => {
      return async () => {
        console.log(`Starting ${exampleName}`);

        fs.rmSync(path.normalize(`${exampleDirPath}/bundle`), {
          recursive: true,
          force: true
        });
        fs.rmSync(path.normalize(`${exampleDirPath}/extract`), {
          recursive: true,
          force: true
        });

        // extract json
        const extractJSONArgs = [
          'extract',
          `-i ${inputEnvironmentFilePath}`,
          `-o ${outputExtractJSONDirPath}`,
          '-f'
        ];
        const extractJSON = await runCli(extractJSONArgs);
        if (extractJSON?.error) {
          console.log('extractJSON');
          console.log(extractJSON);
          process.exit(1);
        }

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

        console.log(`Completed ${exampleName}`);
      };
    }
  )
);
