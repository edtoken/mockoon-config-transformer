import { Environment } from '@mockoon/commons';
import { JsonTransformerValue } from './types.js';

type EnvironmentFoldersKey = Pick<Environment, 'folders'>['folders'];

const folders = (folders: EnvironmentFoldersKey): JsonTransformerValue[] => {
  return [
    {
      key: 'index',
      value: folders
    }
  ];
};

export default folders;
