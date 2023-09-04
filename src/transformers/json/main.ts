import { Environment } from '@mockoon/commons';
import { JsonTransformerResponseItem } from './types';

const main = (environment: Environment): JsonTransformerResponseItem[] => {
  const {
    name,
    port,
    hostname,
    proxyMode,
    proxyHost,
    lastMigration,
    ...other
  } = environment;

  return [
    {
      key: 'index',
      value: {
        name,
        hostname,
        port,
        proxyMode,
        proxyHost,
        lastMigration
      }
    },
    {
      key: 'common',
      value: other
    }
  ];
};

export default main;
