import { Environment } from '@mockoon/commons';

export type EnvironmentKeys = keyof Environment;

export type EnvironmentKeysList = EnvironmentKeys[];

export type TransformerSettings = {
  generateDocs: boolean;
  verbose: boolean;
  methodDirectoryTemplate: string;
  responsesDirectoryName: string;
};
