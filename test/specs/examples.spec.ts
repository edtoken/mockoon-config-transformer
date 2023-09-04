import fs from 'fs';
import path from 'path';

const examplesBasePath = './examples/environments';
const edgeCasesBasePath = './examples/edge-cases';
const tmpBasePath = './examples/.tmp';

const allExamples = [
  ...fs
    .readdirSync(examplesBasePath)
    .filter((exampleName) => !exampleName.includes('.json'))
    .map((name) => ({ name, dir: examplesBasePath })),
  ...fs
    .readdirSync(edgeCasesBasePath)
    .filter((exampleName) => !exampleName.includes('.json'))
    .map((name) => ({ name, dir: edgeCasesBasePath })),
  ...(!fs.existsSync(tmpBasePath)
    ? []
    : fs
        .readdirSync(tmpBasePath)
        .filter((exampleName) => !exampleName.includes('.json'))
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
