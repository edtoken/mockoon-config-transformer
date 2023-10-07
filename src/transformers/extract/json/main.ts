import { Environment } from '@mockoon/commons';
import { TransformerSettings } from '../../../typse.js';
import { JsonTransformerValue } from './types.js';

const main = (
  environment: Environment,
  settings: TransformerSettings
): JsonTransformerValue[] => {
  return [
    {
      key: 'index',
      value: environment
    }
  ];
};

export default main;
