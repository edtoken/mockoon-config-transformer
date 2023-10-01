import * as fs from 'fs';
import { name, SUPPORTED_MIGRATION } from '../config.js';
import { JsonConverter } from '../json-converter.js';
import { cliArgOptions, cliResolver } from './utils.js';

const bundle = async (options: cliArgOptions) => {
  const rootPath = process.cwd();
  const params = cliResolver(rootPath, false, options);

  const bundled = await JsonConverter.convertFrom(params.inputPath);

  if (!bundled) {
    throw new Error(`Failed to bundle ${params.inputPath}`);
  }

  if (bundled.lastMigration > SUPPORTED_MIGRATION) {
    console.warn(
      `[${name}] WARNING: Received migration: ${bundled.lastMigration}, last supported migration: ${SUPPORTED_MIGRATION}`
    );
  }

  fs.writeFileSync(params.outputPath, JSON.stringify(bundled, null, 2));
};

export default bundle;
