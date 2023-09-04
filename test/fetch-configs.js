const fs = require('fs');
const path = require('path');
const { fetchRemoteJSON } = require('../dist/src/common/utils');
const { promiseQ, mockSamplesDir, mockIgnoreFile } = require('./js-utils');

if (!fs.existsSync(mockSamplesDir)) {
  fs.mkdirSync(mockSamplesDir, { recursive: true, force: true });
}
if (!fs.existsSync(mockIgnoreFile)) {
  fs.writeFileSync(mockIgnoreFile, '[]');
}

const mockIgnoreList = JSON.parse(fs.readFileSync(mockIgnoreFile, 'utf8'));

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

let configs = [];

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

    const envFile = path.normalize(path.join(mockSamplesDir, `${slug}.json`));
    const remoteUrl = `https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/${slug}.json`;

    if (fs.existsSync(envFile)) {
      continue;
    }
    if (mockIgnoreList.includes(remoteUrl)) {
      continue;
    }

    configs.push({
      remoteUrl,
      envFile,
      name: slug
    });
  }

  const total = configs.length;
  let counter = configs.length;

  promiseQ(
    15,
    configs.map(({ name, envFile, remoteUrl }, i) => {
      return async () => {
        console.log(`Starting  ${total - counter} of ${total}`);
        try {
          const environment = await fetchRemoteJSON(remoteUrl);
          fs.writeFileSync(envFile, JSON.stringify(environment, null, 2));
          counter -= 1;
          console.log(`Completed ${total - counter} of ${total}`, name);
          return { name, environment };
        } catch (err) {
          counter -= 1;
          mockIgnoreList.push(remoteUrl);
          console.log(`Processed  ${total - counter} of ${total}`, name);
          return null;
        }
      };
    })
  ).then(() => {
    fs.writeFileSync(mockIgnoreFile, JSON.stringify(mockIgnoreList, null, 2));
    console.log('DONE, processed', total);
  });
});
