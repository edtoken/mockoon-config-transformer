export const name = 'mockoon-config-transformer';
export const version = '0.0.6';

export const SUPPORTED_MIGRATION = 28;
export const SUPPORTED_COMMANDS = {
  bundle: 'bundle',
  extract: 'extract'
};
export const SUPPORTED_COMMANDS_LIST = Object.values(SUPPORTED_COMMANDS);

export const enum SUPPORTED_OUTPUT_TYPES {
  json = 'json'
}

export const SUPPORTED_OUTPUT_TYPES_LIST = [SUPPORTED_OUTPUT_TYPES.json];

export const METHOD_DIR_TEMPLATE = '___::[method]';
export const RESPONSES_DIR_TEMPLATE = '___::[responses]';
