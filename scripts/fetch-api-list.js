import * as fs from 'fs';

import { fetchRemoteJSON } from '../dist/src/common/utils.js';
import '../env.js';
import { listFilePath, slugify } from './script-utils.js';

let configs = [];

if (!fs.existsSync('./.tmp')) {
  fs.mkdirSync('./.tmp');
}
fetchRemoteJSON('https://api.apis.guru/v2/list.json').then(async (apiItems) => {
  for (const apiName in apiItems) {
    const versionName = Object.keys(apiItems[apiName].versions)[0];
    const version = apiItems[apiName].versions[versionName];
    const apiInfo = version.info;
    let slug = '';

    try {
      slug = slugify(
        apiInfo['x-providerName'] +
          (apiInfo['x-serviceName'] ? '-' + apiInfo['x-serviceName'] : '')
      );
    } catch {}
    if (!slug) {
      continue;
    }

    configs.push(slug);
  }

  console.log(`Save apis list: ${configs.length}`);
  fs.writeFileSync(listFilePath, JSON.stringify(configs, null, 2));
});
