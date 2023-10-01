import * as fs from 'fs';
import fsP from 'node:fs/promises';
import * as path from 'path';

import '../env.js';
import { ignoreFilePath, processList } from './script-utils.js';

const ignore = fs.existsSync(ignoreFilePath)
  ? JSON.parse(await fsP.readFile(ignoreFilePath, 'utf8'))
  : [];

const exampleEnvironments = JSON.parse(
  await fsP.readFile('./examples/mockoon-mock-samples.json', 'utf8')
);

// fetch examples
processList(3, exampleEnvironments, ignore).then((resp) => {
  fs.writeFileSync(
    ignoreFilePath,
    JSON.stringify([...new Set([...ignore])], null, 2)
  );
  resp.filter(Boolean).forEach((item) => {
    const exampleDirPath = path.normalize(
      `./examples/mockoon-mock-samples/${item.slug}`
    );
    const exampleFilePath = path.normalize(
      `./examples/mockoon-mock-samples/${item.slug}/environment.json`
    );
    fs.rmSync(exampleDirPath, { recursive: true, force: true });
    fs.mkdirSync(exampleDirPath, { recursive: true, force: true });

    fs.writeFileSync(
      exampleFilePath,
      JSON.stringify(item.environment, null, 2)
    );
  });
});
