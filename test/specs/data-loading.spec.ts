import * as fs from 'fs';
import { cli, makeTMPDirPath } from '../test-utils';

test('Should process uri', async () => {
  const outputDir = makeTMPDirPath();
  const remoteConfig =
    'https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/1forgecom.json';

  const resp = await cli([
    'extract',
    `-i ${remoteConfig}`,
    `-o ${outputDir}`,
    '-f'
  ]);

  fs.rmSync(outputDir, { recursive: true, force: true });
  expect(resp.error).toBe(null);
});
