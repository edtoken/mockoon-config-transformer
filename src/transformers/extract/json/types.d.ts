import { Nodes } from 'mdast';

export type SupportedOutputFormat = 'hbs' | 'json' | 'md';
export type SupportedOutputValue =
  | string
  | number
  | boolean
  | object
  | null
  | Array<string>
  | undefined
  | Nodes;

export type JsonTransformerValue = {
  format?: SupportedOutputFormat;
  key: string;
  value: SupportedOutputValue;
};

export type JsonTransformerNode = {
  key: string;
  children: JsonTransformerValue[];
};
