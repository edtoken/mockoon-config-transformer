import * as fs from 'fs';
import * as path from 'path';
import { name, SUPPORTED_MIGRATION, SUPPORTED_OUTPUT_TYPES } from '../config';
import CONVERTERS from '../converters';
import { cliArgOptions, cliResolver } from './utils';

const bundle = async (options: cliArgOptions) => {
  let bundled;
  const rootPath = process.cwd();
  const params = cliResolver(rootPath, false, options);

  if (params.isSingleFile) {
    let converter;
    const extname = path.extname(params.inputPath).slice(1);

    if (extname !== 'md' && extname !== 'json') {
      throw new Error(`Unsupported input extension ${extname}`);
    }
    if (extname === 'json') {
      converter = CONVERTERS[SUPPORTED_OUTPUT_TYPES.json];
    }

    if (!converter) {
      throw new Error(`Failed to resolve converted for extension ${extname}`);
    }

    bundled = await converter.convertFrom(params.inputPath);
  }

  if (!bundled) {
    throw new Error('not implemented');
  }

  if (bundled.lastMigration > SUPPORTED_MIGRATION) {
    console.warn(
      `[${name}] WARNING: Received migration: ${bundled.lastMigration}, last supported migration: ${SUPPORTED_MIGRATION}`
    );
  }

  fs.writeFileSync(params.outputPath, JSON.stringify(bundled, null, 2));
};

export default bundle;
