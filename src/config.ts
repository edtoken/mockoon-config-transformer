const pkg = require('../package.json');

export const name = pkg.name;
export const version = pkg.version;
export const description = pkg.description;

export const SUPPORTED_MIGRATION = 28;
export const SUPPORTED_COMMANDS = {
  bundle: 'bundle',
  extract: 'extract'
};
export const SUPPORTED_COMMANDS_LIST = Object.values(SUPPORTED_COMMANDS);

export const enum SUPPORTED_OUTPUT_TYPES {
  json = 'json'
  // markdown = 'markdown'
}

export const SUPPORTED_OUTPUT_TYPES_LIST = [
  SUPPORTED_OUTPUT_TYPES.json
  // SUPPORTED_OUTPUT_TYPES.markdown
];

export const RESPONSES_DIR_NAME = '__.responses';
