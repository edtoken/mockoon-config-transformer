import { Environment } from '@mockoon/commons';
import * as fs from 'fs';
import { fetchRemoteJSON, logger } from '../common/utils.js';
import {
  METHOD_DIR_TEMPLATE,
  RESPONSES_DIR_NAME,
  SUPPORTED_MIGRATION,
  name
} from '../config.js';
import { JsonConverter } from '../json-converter.js';
import { cliArgOptions, cliResolver } from './utils.js';

const extract = async (options: cliArgOptions): Promise<null | boolean> => {
  let parsed = null;
  let files = null;

  const rootPath = process.cwd();
  const params = cliResolver(rootPath, true, options);
  const generateDocs = !!options.doc;

  let environment;

  if (params.isInputUrl) {
    logger(
      params.verbose,
      `Starting fetching remote environment`,
      params.inputPath
    );
    const response = await fetchRemoteJSON<Environment>(params.inputPath);
    if (response) {
      environment = response;
    } else {
      logger(params.verbose, `Empty remote environment`);
    }
  } else {
    logger(params.verbose, `Read environment file`, params.inputPath);
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

  logger(params.verbose, `Starting parsing environment file`);

  parsed = JsonConverter.convertTo(environment, {
    verbose: params.verbose,
    methodDirectoryTemplate: METHOD_DIR_TEMPLATE,
    responsesDirectoryName: RESPONSES_DIR_NAME,
    generateDocs
  });

  if (parsed) {
    logger(params.verbose, `Successfully parse environment file`);
    files = JsonConverter.filePathsProcessor(parsed, {
      verbose: params.verbose
    });
    logger(params.verbose, `Successfully generated files list`);
  } else {
    logger(params.verbose, `Failed to parse environment file`);
  }

  if (files) {
    logger(params.verbose, `Starting writing files`);
    await JsonConverter.filesCreateProcessor(files, {
      verbose: params.verbose,
      isForce: params.isForce,
      outputPath: params.outputPath
    });
    logger(params.verbose, `Successfully wrote files`);
    logger(params.verbose, `Completed`);
    return true;
  }

  return null;
};

export default extract;
