import { Environment } from '@mockoon/commons';
import { JsonTransformerResponseItem } from './types';

export type ProcessEnvironment = Pick<Environment, 'tlsOptions'>['tlsOptions'];
const tlsOptions = (
  tlsOptions: ProcessEnvironment
): JsonTransformerResponseItem[] => {
  return [
    {
      key: 'index',
      value: tlsOptions
    },
    {
      key: 'includes',
      value: {}
    }
  ];
};

export default tlsOptions;
