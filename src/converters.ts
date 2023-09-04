import { SUPPORTED_OUTPUT_TYPES } from './config';
import { JsonConverter } from './json-converter';

const CONVERTERS = {
  [SUPPORTED_OUTPUT_TYPES.json]: JsonConverter
};

export default CONVERTERS;
