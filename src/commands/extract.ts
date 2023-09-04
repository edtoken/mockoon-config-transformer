import { Environment } from '@mockoon/commons';
import * as fs from 'fs';
import { fetchRemoteJSON } from '../common/utils';
import { name, SUPPORTED_MIGRATION } from '../config';
import CONVERTERS from '../converters';
import { cliArgOptions, cliResolver } from './utils';

const extract = async (options: cliArgOptions): Promise<null | boolean> => {
  let parsed = null;
  let files = null;

  const rootPath = process.cwd();
  const params = cliResolver(rootPath, false, options);

  if (!params.type) {
    throw new Error(`Failed to resolve output type`);
  }

  const converter = CONVERTERS[params.type];

  if (params.isSingleFile) {
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
  }

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
