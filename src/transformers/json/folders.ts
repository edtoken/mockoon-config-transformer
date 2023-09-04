import { Environment } from '@mockoon/commons';
import { JsonTransformerResponseItem } from './types';

export type ProcessEnvironment = Pick<Environment, 'folders'>['folders'];
const folders = (
  folders: ProcessEnvironment
): JsonTransformerResponseItem[] => {
  return [
    {
      key: 'index',
      value: []
    },
    {
      key: 'includes',
      value: []
    }
  ];
};

export default folders;
