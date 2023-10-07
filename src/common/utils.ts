import * as fs from 'fs';
import * as https from 'https';
import * as path from 'path';
import {
  MAX_DIRECTORY_NAME_LENGTH,
  MAX_DOCUMENTATION_DIRECTORY_LENGTH,
  name
} from '../config.js';

const NOT_ALLOWED_CHARS: { [key: string]: string } = {
  '#': '',
  '%': '',
  '&': '',
  '{': '',
  '}': '',
  '\\': '',
  '<': '',
  '>': '',
  '*': '',
  '?': '',
  $: '',
  '!': '',
  "'": '',
  '"': '',
  ':': '',
  ';': '',
  '@': '',
  '+': '',
  '`': '',
  '|': '',
  '¦': '',
  '=': '',
  '~': '',
  ' ': '_'
};

const NOT_ALLOWED_NAMES: { [key: string]: string } = {
  lpt1: '_lpt1_',
  lpt2: '_lpt2_',
  lpt3: '_lpt3_',
  lpt4: '_lpt4_',
  lpt5: '_lpt5_',
  lpt6: '_lpt6_',
  lpt7: '_lpt7_',
  lpt8: '_lpt8_',
  lpt9: '_lpt9_',
  com1: '_com1_',
  com2: '_com2_',
  com3: '_com3_',
  com4: '_com4_',
  com5: '_com5_',
  com6: '_com6_',
  com7: '_com7_',
  com8: '_com8_',
  com9: '_com9_',
  prn: '_prn_',
  aux: '_aux_',
  nul: '_nul_',
  con: '_con_',
  clock: '_clock_',
  '..': '_.._',
  '...': '_..._'
};

const trimChar = (str: string, char: string, endsWith: boolean): string => {
  if (endsWith) {
    if (str.endsWith(char)) {
      return trimChar(str.slice(0, str.length - 1), char, endsWith);
    }
    return str;
  }

  if (str.startsWith(char)) {
    return trimChar(str.slice(1, str.length), char, endsWith);
  }
  return str;
};

export const escapePath = (...chunks: Array<string | number | null>) => {
  let merged = chunks
    .map((c) => (c === null ? '' : String(c).trim()))
    .join('/')
    .trim()
    .toLowerCase();

  merged = trimChar(merged, '/', true);
  merged = trimChar(merged, '/', false);

  if (!merged.length) {
    return '';
  }

  let output = '';
  let chunk = '';
  let last = '';
  let lastResolved = '';
  let chunkSaved = false;
  let firstCompleted = false;

  for (let i = 0; i < merged.length; i++) {
    chunkSaved = false;

    const char = merged[i];

    if (last === '/' && char === '/') {
      continue;
    }
    if (last === ' ' && char === ' ') {
      continue;
    }

    last = char;

    let resolved = char;

    if (NOT_ALLOWED_CHARS[char] !== undefined) {
      resolved = NOT_ALLOWED_CHARS[char];
    }

    lastResolved = resolved;

    if (char === '/') {
      chunkSaved = true;
      if (firstCompleted) {
        output += '/';
      }
      if (chunk === '') {
        // only special chars last chunk
        chunk += '_';
      }
      firstCompleted = true;
      output +=
        NOT_ALLOWED_NAMES[chunk] === undefined
          ? chunk
          : NOT_ALLOWED_NAMES[chunk];
      chunk = '';
    } else {
      chunk += resolved;
    }
  }

  if (!chunkSaved) {
    if (firstCompleted) {
      output += '/';
    }
    if (chunk === '') {
      chunk += '_';
    }
    output +=
      NOT_ALLOWED_NAMES[chunk] === undefined ? chunk : NOT_ALLOWED_NAMES[chunk];
  }

  output = trimChar(output, '/', true);
  output = trimChar(output, '/', false);
  output = trimChar(output, '.', true);
  return output.trim();
};

export const fetchRemoteJSON = <T>(url: string): Promise<T | null> => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });

        res.on('end', () => {
          try {
            resolve(JSON.parse(body));
          } catch (error) {
            console.log(error);
            reject(null);
          }
        });
      })
      .on('error', (error) => {
        reject(null);
      });
  });
};

export const checkFileExists = (filePath: string) => {
  return fs.promises
    .access(filePath, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
};

export const readFile = (filePath: string) => {
  const isJSON = path.extname(filePath) === '.json';

  return fs.promises
    .readFile(filePath)
    .then((buffer) => {
      const content = buffer.toString();
      if (isJSON) {
        return JSON.parse(content);
      }
      return content;
    })
    .catch(() => new Error(`Failed to read file`));
};

export const logger = (verbose: boolean, ...messages: any[]) => {
  if (verbose) {
    console.log(
      `[${name}]`,
      ...messages.map((payload) =>
        typeof payload === 'object' ? JSON.stringify(payload, null, 2) : payload
      )
    );
  }
};

type KeyModel<Model> = { model: Model; key: string };

export const prepareBaseKeys = <Model>(
  list: Model[],
  makeKey: (item: Model) => string,
  makeKeyComment: (item: Model) => string,
  makeUniqKey: (item: Model) => string
): KeyModel<Model>[] => {
  const basic = list.map((model) => {
    return {
      model,
      key: escapePath(makeKey(model))
    };
  });

  const prepareKey = (key: string, model: Model) =>
    key.length > MAX_DIRECTORY_NAME_LENGTH
      ? escapePath(
          `${key.slice(0, MAX_DIRECTORY_NAME_LENGTH)}/${makeUniqKey(model)}`
        )
      : escapePath(key);

  const keysCounter: {
    [key: string]: { index: number; total: number };
  } = basic.reduce((memo, { key }) => {
    // @ts-expect-error false positive
    memo[key] = memo[key] || { index: 0, total: 0 };
    // @ts-expect-error false positive
    memo[key].total += 1;
    return memo;
  }, {});

  const results = basic.map((data) => {
    if (keysCounter[data.key].total > 1) {
      const postKey = escapePath(makeKeyComment(data.model)).slice(
        0,
        MAX_DOCUMENTATION_DIRECTORY_LENGTH
      );

      const result = {
        ...data,
        key: prepareKey(
          `${data.key}/${keysCounter[data.key].index}${
            postKey ? '--' + postKey : ''
          }`,
          data.model
        )
      };
      keysCounter[data.key].index += 1;

      return result;
    }

    return {
      ...data,
      key: prepareKey(data.key, data.model)
    };
  });

  const makeUniqKeys = (items: KeyModel<Model>[]): KeyModel<Model>[] => {
    const uniqKeysCounter: {
      [key: string]: { index: number; total: number };
    } = items.reduce((memo, { key }) => {
      // @ts-expect-error false positive
      memo[key] = memo[key] || { index: 0, total: 0 };
      // @ts-expect-error false positive
      memo[key].total += 1;
      return memo;
    }, {});

    return items.map((item) => {
      if (uniqKeysCounter[item.key].total > 1) {
        const output = {
          ...item,
          key: escapePath(item.key, uniqKeysCounter[item.key].index)
        };
        uniqKeysCounter[item.key].index += 1;
        return output;
      }

      return item;
    });
  };

  return makeUniqKeys(results);
};
