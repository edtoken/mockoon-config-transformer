import * as fs from 'fs';
import fsP from 'node:fs/promises';
import * as path from 'path';

import '../env.js';
import {
  TEST_ENVIRONMENT_NAMES,
  ignoreFilePath,
  listFilePath,
  processList
} from './script-utils.js';

if (!fs.existsSync('./.tmp')) {
  fs.mkdirSync('./.tmp');
}

const ignore = fs.existsSync(ignoreFilePath)
  ? JSON.parse(await fsP.readFile(ignoreFilePath, 'utf8'))
  : [];

const allEnvironments = JSON.parse(await fsP.readFile(listFilePath));
const processingEnv =
  TEST_ENVIRONMENT_NAMES && TEST_ENVIRONMENT_NAMES.length
    ? allEnvironments.filter((name) => TEST_ENVIRONMENT_NAMES.includes(name))
    : allEnvironments;

console.log('TEST_ENVIRONMENTS', processingEnv.length);

if (!fs.existsSync('./.tmp')) {
  fs.mkdirSync('./.tmp');
}
fs.rmSync('./.tmp/test-environments', { recursive: true, force: true });
fs.mkdirSync('./.tmp/test-environments');

processList(5, processingEnv, ignore).then((allResp) => {
  allResp.filter(Boolean).forEach((item) => {
    const tmpTestDirPath = path.normalize(
      `./.tmp/test-environments/${item.slug}`
    );
    const tmpTestEnvPath = path.normalize(
      `./.tmp/test-environments/${item.slug}/environment.json`
    );

    fs.rmSync(tmpTestDirPath, { recursive: true, force: true });
    fs.mkdirSync(tmpTestDirPath);
    fs.writeFileSync(tmpTestEnvPath, JSON.stringify(item.environment, null, 2));
  });
});
