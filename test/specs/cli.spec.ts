import * as fs from 'fs';
import * as path from 'path';

import { cli } from '../test-utils';
const pkg = JSON.parse(
  fs.readFileSync(
    path.normalize(path.join(process.cwd(), './package.json')),
    'utf8'
  )
);

test(`Should correctly export CLI name: ${pkg.name}`, async () => {
  const resp = await cli(['--help']);

  expect(resp.stdout.includes(`Usage: ${pkg.name} [options]`)).toBe(true);
});

test(`Should correctly export CLI version: ${pkg.version}`, async () => {
  const resp = await cli(['--version']);

  expect(pkg.version).not.toEqual(undefined);
  expect(resp.stdout.trim()).toBe(pkg.version);
});
