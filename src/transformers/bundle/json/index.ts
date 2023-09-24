import path from 'path';
import { checkFileExists, readFile } from '../../../common/utils.js';

const commonJSONBundler = async (filePath: string) => {
  const fileExtension = path.extname(filePath);
  const jsonFilePath = path.normalize(filePath + '.json');
  const hbsFilePath = path.normalize(filePath + '.hbs');

  const fileDir = path.dirname(jsonFilePath);
  const commonsPath = path.normalize(path.join(fileDir, 'common.json'));
  const includesPath = path.normalize(path.join(fileDir, 'includes.json'));

  const [
    isBaseExists,
    isJsonExists,
    isHBSExists,
    isCommonExists,
    isIncludesExists
  ] = await Promise.all([
    checkFileExists(filePath),
    fileExtension ? false : checkFileExists(jsonFilePath),
    fileExtension ? false : checkFileExists(hbsFilePath),
    checkFileExists(commonsPath),
    checkFileExists(includesPath)
  ]);

  const files = [
    { isExists: isBaseExists, filePath },
    { isExists: isJsonExists, filePath: jsonFilePath },
    { isExists: isHBSExists, filePath: hbsFilePath }
  ];

  if (files.every((p) => p.isExists === false)) {
    throw new Error(`File doesn't exists: ${files}`);
  }

  let contentFileData = files.find((p) => p.isExists);

  if (!contentFileData) {
    throw new Error(`File doesn't exists: ${files}`);
  }

  const [content, commons, includes] = await Promise.all([
    readFile(contentFileData.filePath),
    isCommonExists ? readFile(commonsPath) : null,
    isIncludesExists ? readFile(includesPath) : null
  ]);

  const contentIsArray = Array.isArray(content);
  const isObject = typeof content === 'object';

  let payload = content;

  if (contentIsArray) {
    payload = [...(content || []), ...(commons || [])];
  } else if (isObject && content !== null) {
    payload = { ...(content || {}), ...(commons || {}) };
  }

  if (includes) {
    if (!contentIsArray) {
      const includeKeys = Object.keys(includes);
      const includesList = await Promise.all(
        includeKeys.map(async (k) => {
          return await commonJSONBundler(
            path.normalize(path.join(fileDir, includes[k]))
          );
        })
      );
      includesList.forEach((data, index) => {
        payload[includeKeys[index]] = data;
      });
    } else if (includes.length) {
      const arrayExtends = await Promise.all(
        includes.map(async (k: string) => {
          return await commonJSONBundler(path.normalize(path.join(fileDir, k)));
        })
      );
      payload = [...payload, ...arrayExtends];
    }
  }

  return payload;
};

export default commonJSONBundler;
