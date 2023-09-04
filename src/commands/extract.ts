import { Environment } from '@mockoon/commons';
import * as fs from 'fs';
import { fetchRemoteJSON } from '../common/utils.js';
import { name, SUPPORTED_MIGRATION } from '../config.js';
import CONVERTERS from '../converters.js';
import { cliArgOptions, cliResolver } from './utils.js';

const extract = async (options: cliArgOptions): Promise<null | boolean> => {
  let parsed = null;
  let files = null;

  const rootPath = process.cwd();
  const params = cliResolver(rootPath, true, options);

  const converter = CONVERTERS[params.type];

  let environment;

  if (params.isInputUrl) {
    const response = await fetchRemoteJSON<Environment>(params.inputPath);
    if (response) {
      environment = response;
    }
  } else {
    environment = JSON.parse(fs.readFileSync(params.inputPath, 'utf8'));
  }

  if (!environment) {
    throw new Error(`Failed to resolve environment ${params.inputPath}`);
  }

  if (environment.lastMigration > SUPPORTED_MIGRATION) {
    console.warn(
      `[${name}] WARNING: Received migration: ${environment.lastMigration}, last supported migration: ${SUPPORTED_MIGRATION}`
    );
  }
  parsed = converter.convertTo(environment);

  if (parsed) {
    files = converter.filePathsProcessor(parsed);
  }

  if (files) {
    await converter.filesCreateProcessor(
      {
        isForce: params.isForce,
        outputPath: params.outputPath
      },
      files
    );
    return true;
  }

  return null;
};

export default extract;
