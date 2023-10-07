import { exec } from 'child_process';
import fsP from 'node:fs/promises';
import * as path from 'path';

import '../env.js';
const pkg = JSON.parse(await fsP.readFile('./package.json', 'utf8'));

import { fetchRemoteJSON } from '../dist/src/common/utils.js';

export const TEST_ENVIRONMENT_NAMES = (
  process.env.MOCKOON_IMPORT_EXPORTS_TEST_ENVIRONMENT_NAMES || ''
)
  .trim()
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

export const ignoreFilePath = path.normalize('./.tmp/ignore.json');
export const listFilePath = path.normalize('./.tmp/api-all.json');

export const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const remoteExampleFileTemplate = `https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/[SLUG].json`;

export const promiseQ = (size, tasks) => {
  const chunks = [];

  for (let i = 0; i < tasks.length; i += size) {
    const chunk = tasks.slice(i, i + size);
    chunks.push(() => Promise.all(chunk.map((c) => c())));
  }

  return new Promise((res, rej) => {
    const dequeue = (lastResults = []) => {
      if (!chunks.length) {
        return Promise.resolve(lastResults);
      }

      const step = chunks.shift();

      return step()
        .then((resp) => {
          return dequeue([...lastResults, ...resp]);
        })
        .catch(rej);
    };

    dequeue().then(res).catch(rej);
  });
};

const cwd = process.cwd();
const cliFile = path.normalize(path.join(cwd, './dist', pkg.exports));

const verbose = process.argv.some(
  (s) => s.includes('verbose') || s.includes('worker')
);

export const pathJoin = (a, b) => path.normalize(path.join(a, b));

export const runCli = (args) => {
  return new Promise((resolve) => {
    const command = `node ${cliFile} ${(args || [])
      .map((s) => s.trim())
      .join(' ')
      .trim()}`;

    exec(command, { cwd }, (error, stdout, stderr) => {
      if (verbose) {
        console.debug('>>>>> command <<<<<');
        console.debug(command);
        console.debug('>>>>> stdout <<<<<');
        console.debug(stdout);
        console.debug('>>>>> error <<<<<');
        console.debug(error);
        console.debug('>>>>> stderr <<<<<');
        console.debug(stderr);
      }
      resolve({
        code: error && error.code ? error.code : 0,
        error,
        stdout,
        stderr
      });
    });
  });
};

export const processList = (queueSize, list, ignore) => {
  const total = list.length;

  return promiseQ(
    queueSize,
    list.map((slug, i) => {
      return async () => {
        console.log(`Starting ${i} of ${total} ${slug}`);

        if (ignore.includes(slug)) {
          console.log(`Ignore: ${slug}`);
          return null;
        }
        try {
          const remoteUrl = remoteExampleFileTemplate.replace('[SLUG]', slug);
          const environment = await fetchRemoteJSON(remoteUrl);
          console.log(`Ready ${i} of ${total} ${slug}`);
          return {
            slug,
            environment
          };
        } catch {
          console.log(`Ignore ${i} ${slug}`);
          ignore.push(slug);
          return null;
        }
      };
    })
  );
};
