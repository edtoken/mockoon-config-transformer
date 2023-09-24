import { Environment } from '@mockoon/commons';
import { JsonTransformerValue } from './types.js';

const main = (environment: Environment): JsonTransformerValue[] => {
  return [
    {
      key: 'index',
      value: environment
    }
  ];
};

export default main;
