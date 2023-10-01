import { escapePath } from '../../../dist/src/common/utils';

describe('escapePath', () => {
  test(`Should return empty string by default`, async () => {
    expect(escapePath()).toEqual('');
  });
  test(`Should return empty string with null arg`, async () => {
    expect(escapePath(null)).toEqual('');
  });
  test(`Should return _ with only special chars in the path`, async () => {
    expect(escapePath('###$$$%%%{{{')).toEqual('_');
  });
  test(`Should return _/_ with splitted special chars by /`, async () => {
    expect(escapePath('###$$$%/%%{{{')).toEqual('_/_');
  });
  test(`Should remove / at the end`, async () => {
    expect(escapePath('a/b/c/')).toEqual('a/b/c');
  });
  test(`Should transform to lowercase`, async () => {
    expect(escapePath('A/B/cCCC/')).toEqual('a/b/cccc');
  });
  test(`Should remove double slash`, async () => {
    expect(escapePath('A/B//CC////d////')).toEqual('a/b/cc/d');
  });
  test(`Should replace spaces with _`, async () => {
    expect(escapePath('a/b b1/c c1/')).toEqual('a/b_b1/c_c1');
  });
  test(`Should replace multiple spaces with single _`, async () => {
    expect(escapePath('a/b     b1/c      c1/')).toEqual('a/b_b1/c_c1');
  });
  test(`Should delete multiple spaces at the end`, async () => {
    expect(escapePath('a/b/c/d       ')).toEqual('a/b/c/d');
  });
  test(`Should remove dot at the end`, async () => {
    expect(escapePath('a/b/c/d.')).toEqual('a/b/c/d');
  });
  test(`Should delete dots in the middle`, async () => {
    expect(escapePath('a/b/c/../d')).toEqual('a/b/c/_.._/d');
  });
  test(`Should remove special chars in the middle`, async () => {
    expect(escapePath('a/b$$$/c###/ddd')).toEqual('a/b/c/ddd');
  });
  test(`Should remove special chars at the end`, async () => {
    expect(escapePath('a/b/c/###')).toEqual('a/b/c/_');
  });
  test(`Should override system folder name`, async () => {
    expect(escapePath('com1')).toEqual('_com1_');
  });
});
