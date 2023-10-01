import * as fs from 'fs';
import * as path from 'path';
import { pathJoin } from '../../test-utils';

const basePath = './.tmp/test-environments';
const examples = fs
  .readdirSync(basePath)
  .filter((name) => fs.statSync(pathJoin(basePath, name)).isDirectory());

test(`Should have examples`, async () => {
  expect(!!examples.length).toBe(true);
});

examples.forEach((name) => {
  const envFilePath = path.normalize(
    path.join(basePath, `${name}/environment.json`)
  );
  const fromJSONFilePath = path.normalize(
    path.join(basePath, `${name}/bundle/from-json.json`)
  );

  const env = JSON.parse(fs.readFileSync(envFilePath, 'utf8'));
  const fromJSON = JSON.parse(fs.readFileSync(fromJSONFilePath, 'utf8'));

  test(`Should correctly bundle mockoon example ${name} from json`, async () => {
    expect(fromJSON).toEqual(env);
  });
});
