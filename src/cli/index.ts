import { Command } from 'commander';

import {
  description,
  name,
  SUPPORTED_COMMANDS,
  SUPPORTED_COMMANDS_LIST,
  version
} from '../config';

import bundle from '../commands/bundle';
import extract from '../commands/extract';

const program = new Command();

async function init() {
  program
    .storeOptionsAsProperties(false)
    .name(name)
    .description(description)
    .version(version, '-v, --version', 'Output the current version')
    .option('-f, --force', 'Force override directories and files if exists')
    .option('--verbose', 'Enable debugger logs')
    .requiredOption('-i, --input  <relative-path or url>', 'Input path or URL')
    .requiredOption('-o, --output  <relative-path>', 'Output path');

  return Promise.resolve();
}

const commandBundle = new Command(SUPPORTED_COMMANDS.bundle)
  .storeOptionsAsProperties(false)
  .description(
    `Bundle extracted files directory or file into Mockoon environments`
  )
  .action(async (commandOptions) => {
    const baseOptions = program.opts();
    const mergedOptions = {
      ...baseOptions,
      ...commandOptions
    };
    await bundle(mergedOptions);
  });

const commandExtract = new Command(SUPPORTED_COMMANDS.extract)
  .storeOptionsAsProperties(false)
  .description(
    `Extract Mockoon json environment files directory or file into ${SUPPORTED_COMMANDS_LIST}`
  )
  .option('-t, --type <type>', 'Output format type [markdown] [json]')
  .action(async (commandOptions) => {
    const baseOptions = program.opts();
    const mergedOptions = {
      ...baseOptions,
      ...commandOptions
    };
    await extract(mergedOptions);
  });

program.addCommand(commandBundle);
program.addCommand(commandExtract);

init().then(() => {
  program.parse(process.argv);
});
