import { Environment } from '@mockoon/commons';
import { JsonTransformerValue } from './types.js';

type EnvironmentTSLOptionsKey = Pick<Environment, 'tlsOptions'>['tlsOptions'];

const tlsOptions = (
  tlsOptions: EnvironmentTSLOptionsKey
): JsonTransformerValue[] => {
  return [
    {
      key: 'index',
      value: tlsOptions
    }
  ];
};

export default tlsOptions;
