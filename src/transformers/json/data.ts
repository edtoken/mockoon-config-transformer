import { Environment } from '@mockoon/commons';
import { JsonTransformerResponseItem } from './types';

export type ProcessEnvironment = Pick<Environment, 'data'>['data'];

const data = (data: ProcessEnvironment): JsonTransformerResponseItem[] => {
  const children: Array<JsonTransformerResponseItem> = [];
  const includes: string[] = [];

  const itemsByName: { [key: string]: number } = data.reduce((memo, item) => {
    // @ts-expect-error todo fix
    memo[item.name] = memo[item.name] || 0;
    // @ts-expect-error todo fix
    memo[item.name] += 1;
    return memo;
  }, {});

  data.forEach((item) => {
    if (itemsByName[item.name] === 1) {
      const { value, ...other } = item;

      includes.push(`${item.name}/index`);

      children.push({
        key: `${item.name}/index`,
        value: other
      });

      children.push({
        format: 'hbs',
        key: `${item.name}/value/index`,
        value: value
      });

      children.push({
        key: `${item.name}/includes`,
        value: {
          value: `./value/index.hbs`
        }
      });
    } else {
      throw new Error(`Not supported yet`);
    }
  });

  return [
    {
      key: 'index',
      value: []
    },
    {
      key: 'includes',
      value: includes
    },
    {
      key: 'other',
      value: []
    },
    ...children
  ];
};

export default data;
