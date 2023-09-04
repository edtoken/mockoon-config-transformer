import {
  escapePath,
  MAX_DIRECTORY_NAME_LENGTH,
  MAX_DOCUMENTATION_DIRECTORY_LENGTH
} from '../common/utils.js';

type KeyModel<Model> = { model: Model; key: string };

export const prepareBaseKeys = <Model>(
  list: Model[],
  makeKey: (item: Model) => string,
  makeKeyComment: (item: Model) => string,
  makeUniqKey: (item: Model) => string
): KeyModel<Model>[] => {
  const basic = list.map((model) => {
    return {
      model,
      key: escapePath(makeKey(model))
    };
  });

  const prepareKey = (key: string, model: Model) =>
    key.length > MAX_DIRECTORY_NAME_LENGTH
      ? escapePath(
          `${key.slice(0, MAX_DIRECTORY_NAME_LENGTH)}/${makeUniqKey(model)}`
        )
      : escapePath(key);

  const keysCounter: {
    [key: string]: { index: number; total: number };
  } = basic.reduce((memo, { key }) => {
    // @ts-expect-error false positive
    memo[key] = memo[key] || { index: 0, total: 0 };
    // @ts-expect-error false positive
    memo[key].total += 1;
    return memo;
  }, {});

  const results = basic.map((data) => {
    if (keysCounter[data.key].total > 1) {
      const postKey = escapePath(makeKeyComment(data.model))
        .slice(0, MAX_DOCUMENTATION_DIRECTORY_LENGTH)
        .replace(/[;:\.,><]/g, '');

      const result = {
        ...data,
        key: prepareKey(
          `${data.key}/${keysCounter[data.key].index}${
            postKey ? '--' + postKey : ''
          }`,
          data.model
        )
      };
      keysCounter[data.key].index += 1;

      return result;
    }

    return {
      ...data,
      key: prepareKey(data.key, data.model)
    };
  });

  const makeUniqKeys = (items: KeyModel<Model>[]): KeyModel<Model>[] => {
    const uniqKeysCounter: {
      [key: string]: { index: number; total: number };
    } = items.reduce((memo, { key }) => {
      // @ts-expect-error false positive
      memo[key] = memo[key] || { index: 0, total: 0 };
      // @ts-expect-error false positive
      memo[key].total += 1;
      return memo;
    }, {});

    return items.map((item) => {
      if (uniqKeysCounter[item.key].total > 1) {
        const output = {
          ...item,
          key: escapePath(item.key, uniqKeysCounter[item.key].index)
        };
        uniqKeysCounter[item.key].index += 1;
        return output;
      }

      return item;
    });
  };

  return makeUniqKeys(results);
};
