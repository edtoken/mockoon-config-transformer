import { SUPPORTED_OUTPUT_TYPES } from './config.js';
import { JsonConverter } from './json-converter.js';

const CONVERTERS = {
  [SUPPORTED_OUTPUT_TYPES.json]: JsonConverter
};

export default CONVERTERS;
