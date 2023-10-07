import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

const cwd = process.cwd();
const cliFile = path.normalize(path.join(cwd, './dist/src/cli/index.js'));

type cliResult = {
  code: number | any;
  error: any;
  stdout: any;
  stderr: any;
};

export const pathJoin = (a: string, b: string): string =>
  path.normalize(path.join(a, b));

export const genTMPDirPath = (prefix?: string) =>
  `./.tmp/jest/${prefix ? prefix + '/' : ''}${uuidv4()}`;

export const grepByExt = (
  base: string,
  ext: string,
  files?: string[],
  parent?: string[]
): string[] => {
  const list = files || fs.readdirSync(base);
  let output = [...(parent || [])];

  list.forEach(function (file) {
    const newbase = path.normalize(path.join(base, file));

    if (fs.statSync(newbase).isDirectory()) {
      output = [
        ...output,
        ...grepByExt(newbase, ext, fs.readdirSync(newbase), [])
      ];
    } else {
      if (path.extname(newbase) === ext) {
        output.push(newbase);
      }
    }
  });
  return output;
};

export const cli = (args: Array<string>): Promise<cliResult> => {
  return new Promise((resolve) => {
    const command = `node ${cliFile} ${args.join(' ')}`;

    exec(command, { cwd }, (error: any, stdout: any, stderr: any) => {
      if (command.includes('verbose')) {
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
