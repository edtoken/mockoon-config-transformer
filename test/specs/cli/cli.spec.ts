import * as fs from 'fs';
import * as path from 'path';
import { cli, genTMPDirPath, grepByExt, pathJoin } from '../../test-utils';

const pkg = JSON.parse(
  fs.readFileSync(
    path.normalize(path.join(process.cwd(), './package.json')),
    'utf8'
  )
);

test(`Should correctly export CLI name: ${pkg.name}`, async () => {
  const resp = await cli(['--help']);

  expect(resp.stdout.includes(`Usage: ${pkg.name} [options]`)).toEqual(true);
});

test(`Should correctly export CLI version: ${pkg.version}`, async () => {
  const resp = await cli(['--version']);

  expect(pkg.version).not.toEqual(undefined);
  expect(resp.stdout.trim()).toBe(pkg.version);
});

test('Should process extract from remote uri', async () => {
  const outputDir = genTMPDirPath();
  const remoteConfig =
    'https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/1forgecom.json';

  const resp = await cli([
    'extract',
    `-i ${remoteConfig}`,
    `-o ${outputDir}`,
    '-f'
  ]);

  expect(fs.existsSync(outputDir)).toEqual(true);
  expect(fs.existsSync(pathJoin(outputDir, 'index.json'))).toEqual(true);

  fs.rmSync(outputDir, { recursive: true, force: true });
  expect(resp.error).toBe(null);
});

test('Should not show progress logs in default mode', async () => {
  const outputDir = genTMPDirPath();
  const remoteConfig =
    'https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/1forgecom.json';

  const resp = await cli([
    'extract',
    `-i ${remoteConfig}`,
    `-o ${outputDir}`,
    '-f'
  ]);

  fs.rmSync(outputDir, { recursive: true, force: true });
  expect(resp.stdout).not.toContain('Resolve cli arguments');
});
test('Should show progress logs in verbose mode', async () => {
  const outputDir = genTMPDirPath();
  const remoteConfig =
    'https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/1forgecom.json';

  const resp = await cli([
    'extract',
    `-i ${remoteConfig}`,
    `-o ${outputDir}`,
    '-f',
    '--verbose'
  ]);

  fs.rmSync(outputDir, { recursive: true, force: true });
  expect(resp.stdout).toContain('Resolve cli arguments');
});

test('Should not generate docs by default', async () => {
  const outputDir = genTMPDirPath('no-docs');
  const remoteConfig =
    'https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/1forgecom.json';

  await cli([
    'extract',
    `-i ${remoteConfig}`,
    `-o ${outputDir}`,
    '-f',
    '--verbose'
  ]);

  expect(grepByExt(outputDir, '.md').length).toEqual(0);

  fs.rmSync(outputDir, { recursive: true, force: true });
});

test('Should generate docs with docs argument', async () => {
  const outputDir = genTMPDirPath('with-docs');
  const remoteConfig =
    'https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/1forgecom.json';

  await cli([
    'extract',
    `-i ${remoteConfig}`,
    `-o ${outputDir}`,
    '-f',
    '--doc',
    '--verbose'
  ]);

  // main docs + routes docs
  expect(grepByExt(outputDir, '.md').length).toEqual(3);

  fs.rmSync(outputDir, { recursive: true, force: true });
});
