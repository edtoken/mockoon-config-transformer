import * as fs from 'fs';
import * as path from 'path';

import { SUPPORTED_OUTPUT_TYPES, SUPPORTED_OUTPUT_TYPES_LIST } from '../config';

export type cliArgOptions = {
  input: string;
  output: string;
  type?: string;
  force?: boolean;
  verbose?: boolean;
};

export type resolvedOutput = {
  cwd: string;
  type?: 'json';
  debug: string | boolean;
  isInputUrl: boolean;
  isSingleFile: boolean;
  isForce: boolean;
  inputPath: string;
  outputPath: string;
};

export const cliResolver = (
  rootPath: string,
  isExtract: boolean,
  options: cliArgOptions
): resolvedOutput => {
  const isInputUrl = options.input.startsWith('http');

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

  if (!isInputUrl && !fs.existsSync(inputPath)) {
    throw new Error(`Failed to resolve input path ${inputPath}`);
  }

  // input is directory means 2 options
  // 1 option - extract input directory of environments
  // 2 option - bundle input directory into a file
  const inputPathIsDirectory = isInputUrl
    ? false
    : fs.statSync(inputPath).isDirectory();

  const isSingleFile = !!inputPathIsDirectory === false;

  if (!isSingleFile) {
    if (fs.existsSync(outputDirOrPath)) {
      if (!isForce) {
        throw new Error(
          `The output path already exists, use -f, --force to remove it or remove manually ${outputDirOrPath}`
        );
      }
      fs.rmSync(outputDirOrPath, { recursive: true, force: true });
    }
    fs.mkdirSync(outputDirOrPath, { recursive: true });
  } else {
    if (fs.existsSync(outputDirOrPath)) {
      if (!isForce) {
        throw new Error(
          `The output path already exists, use -f, --force to remove it or remove manually ${outputDirOrPath}`
        );
      }
      fs.rmSync(outputDirOrPath, { recursive: true, force: true });
    } else {
      if (fs.existsSync(outputDirOrPath)) {
        if (!outputDirOrPath) {
          throw new Error(
            `The output path already exists, use -f, --force to remove it or remove manually ${outputDirOrPath}`
          );
        }
      }
      fs.mkdirSync(path.dirname(outputDirOrPath), { recursive: true });
    }
  }

  let type = options.type;

  if (isExtract) {
    if (!type && !isSingleFile) {
      throw new Error(
        `When the output is directory the -t, --type required, supported: ${SUPPORTED_OUTPUT_TYPES_LIST}`
      );
    } else if (!type) {
      const fileExt = path.extname(outputDirOrPath);
      if (fileExt === '.json') {
        type = SUPPORTED_OUTPUT_TYPES.json;
      } else {
        throw new Error(
          `Unsupported output extension, supported: .json, .md change the output file extension or use -t, --type with value supported: ${SUPPORTED_OUTPUT_TYPES_LIST}`
        );
      }
    }
  }
  if (type && type !== SUPPORTED_OUTPUT_TYPES.json) {
    throw new Error(
      `Failed to resolve type [${type}], use -t, --type with value supported: ${SUPPORTED_OUTPUT_TYPES_LIST}`
    );
  }

  const resolvedType = type as SUPPORTED_OUTPUT_TYPES;

  return {
    cwd: rootPath,
    type: resolvedType,
    debug,
    isInputUrl,
    isSingleFile,
    isForce,
    inputPath,
    outputPath: outputDirOrPath
  };
};
