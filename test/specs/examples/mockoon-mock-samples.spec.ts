import * as fs from 'fs';
import * as path from 'path';
import { pathJoin } from '../../test-utils';

const examplesBasePath = './examples/mockoon-mock-samples';
const tmpBasePath = './examples/.tmp';

const allExamples = [
  ...fs
    .readdirSync(examplesBasePath)
    .filter((name) =>
      fs.statSync(pathJoin(examplesBasePath, name)).isDirectory()
    )
    .map((name) => ({ name, dir: examplesBasePath })),
  ...(!fs.existsSync(tmpBasePath)
    ? []
    : fs
        .readdirSync(tmpBasePath)
        .filter((name) =>
          fs.statSync(pathJoin(tmpBasePath, name)).isDirectory()
        )
        .map((name) => ({ name, dir: tmpBasePath })))
];

allExamples.forEach(({ name, dir }) => {
  const envFilePath = path.normalize(
    path.join(dir, `${name}/environment.json`)
  );
  const fromJSONFilePath = path.normalize(
    path.join(dir, `${name}/bundle/from-json.json`)
  );

  const env = JSON.parse(fs.readFileSync(envFilePath, 'utf8'));
  const fromJSON = JSON.parse(fs.readFileSync(fromJSONFilePath, 'utf8'));

  test(`Should correctly bundle example ${name} from json`, async () => {
    expect(fromJSON).toEqual(env);
  });
});
