import * as fs from 'fs';
import * as path from 'path';

import { SUPPORTED_OUTPUT_TYPES } from '../config.js';

export type cliArgOptions = {
  readonly input: string;
  readonly output: string;
  readonly force?: boolean;
  readonly verbose?: boolean;
};

export type resolvedOutput = {
  readonly cwd: string;
  readonly type: SUPPORTED_OUTPUT_TYPES.json;
  readonly debug: string | boolean;
  readonly isInputUrl: boolean;
  readonly isForce: boolean;
  readonly inputPath: string;
  readonly outputPath: string;
};

export const cliResolver = (
  rootPath: string,
  isExtract: boolean,
  options: cliArgOptions
): resolvedOutput => {
  const isInputUrl = options.input.startsWith('http');
  const type = SUPPORTED_OUTPUT_TYPES.json;

  let inputPath: string = '';

  if (isInputUrl) {
    inputPath = options.input;
  } else {
    inputPath = path.isAbsolute(options.input)
      ? path.normalize(options.input.trim())
      : path.normalize(path.join(rootPath, options.input));
  }

  const outputDirOrPath = path.isAbsolute(options.output)
    ? path.normalize(options.output.trim())
    : path.normalize(path.join(rootPath, options.output));

  const isForce = !!options.force;
  const debug = options.verbose ? '*' : false;

  if (
    !isExtract &&
    !isInputUrl &&
    fs.existsSync(inputPath) &&
    fs.statSync(inputPath).isDirectory()
  ) {
    // bundle flow when directory passed
    inputPath = path.normalize(path.join(inputPath, './index.json'));
  }
  if (!isInputUrl && !fs.existsSync(inputPath)) {
    throw new Error(`Failed to resolve input path ${inputPath}`);
  }

  if (!isInputUrl && fs.statSync(inputPath).isDirectory()) {
    throw new Error('Input should be file path or URL');
  }
  if (!isExtract) {
    // output path should be a file
    if (fs.existsSync(outputDirOrPath)) {
      if (fs.statSync(outputDirOrPath).isDirectory()) {
        throw new Error('Bundle output should be file path');
      }
      if (!isForce) {
        throw new Error(
          `Output file already exists, please use -f --force to override ${outputDirOrPath}`
        );
      }
    } else {
      fs.mkdirSync(path.dirname(outputDirOrPath), { recursive: true });
    }
  }
  if (
    isExtract &&
    fs.existsSync(outputDirOrPath) &&
    fs.statSync(outputDirOrPath).isDirectory()
  ) {
    if (!isForce) {
      throw new Error(
        `Output dir already exists, please use -f --force to override ${outputDirOrPath}`
      );
    }
    fs.rmSync(outputDirOrPath, { recursive: true, force: true });
  }

  return {
    cwd: rootPath,
    type,
    debug,
    isInputUrl,
    isForce,
    inputPath,
    outputPath: outputDirOrPath
  };
};
