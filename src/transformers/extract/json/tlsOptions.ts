import { Environment } from '@mockoon/commons';
import { TransformerSettings } from '../../../typse.js';
import { JsonTransformerValue } from './types.js';

type EnvironmentTSLOptionsKey = Pick<Environment, 'tlsOptions'>['tlsOptions'];

const tlsOptions = (
  tlsOptions: EnvironmentTSLOptionsKey,
  settings: TransformerSettings
): JsonTransformerValue[] => {
  return [
    {
      key: 'index',
      value: tlsOptions
    }
  ];
};

export default tlsOptions;
