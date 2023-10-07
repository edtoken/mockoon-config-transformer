import { Environment } from '@mockoon/commons';
import { TransformerSettings } from '../../../typse.js';
import { JsonTransformerValue } from './types.js';

type EnvironmentFoldersKey = Pick<Environment, 'folders'>['folders'];

const folders = (
  folders: EnvironmentFoldersKey,
  settings: TransformerSettings
): JsonTransformerValue[] => {
  return [
    {
      key: 'index',
      value: folders
    }
  ];
};

export default folders;
