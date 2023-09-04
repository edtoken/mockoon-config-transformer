export type JsonTransformerValue = {
  format?: 'hbs';
  key: string;
  value: string | number | boolean | object | null | Array<string> | undefined;
};

export type JsonTransformerNode = {
  key: string;
  children: JsonTransformerValue[];
};

type JsonTransformerPossibleResponse =
  | JsonTransformerValue
  | JsonTransformerNode;

export type JsonTransformerResponseItem =
  | JsonTransformerPossibleResponse
  | JsonTransformerValue;
