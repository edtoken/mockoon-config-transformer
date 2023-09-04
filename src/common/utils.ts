import * as fs from 'fs';
import * as https from 'https';
import * as path from 'path';

const directoryNameSpecChars = ['>', '<', '"', '\\', '|', '?', '*'];

export const escapePath = (...chunks: Array<string | number | null>) => {
  let escaped = chunks
    .map((c) => String(c))
    .join('/')
    .trim()
    .replace(/[\s,\t,\n]+/g, '_');

  if (escaped.endsWith('/')) {
    escaped = escaped.slice(0, escaped.length - 1);
  }

  directoryNameSpecChars.forEach((char) => {
    escaped = escaped.split(char).join('_');
  });

  return escaped
    .replace(/[\s,\t,\n]+/g, '_')
    .replace(/([^:]\/)\/+/g, '$1')
    .toLowerCase();
};

export const MAX_DIRECTORY_NAME_LENGTH = 180;

export const MAX_DOCUMENTATION_DIRECTORY_LENGTH = 30;

export const normalizeWordsToDirname = (str: string) => {
  return str
    .split('/')
    .join('__')
    .replace(/[^\w\s]/gi, '_')
    .trim();
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
