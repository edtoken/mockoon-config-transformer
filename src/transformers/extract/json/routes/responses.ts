import { RouteResponse } from '@mockoon/commons';
import { escapePath, prepareBaseKeys } from '../../../../common/utils.js';
import { TransformerSettings } from '../../../../typse.js';
import { docSectionItem } from '../../documentation.js';
import { JsonTransformerValue } from '../types.js';

const processResponses = (
  baseKey: string,
  responsesSource: RouteResponse[],
  settings: TransformerSettings
) => {
  const responsesDocSections: docSectionItem[] = [];
  const common: JsonTransformerValue[] = [];

  const responsesBaseKey = escapePath(baseKey, settings.responsesDirectoryName);

  const index: JsonTransformerValue = {
    key: `${escapePath(responsesBaseKey, `index`)}`,
    value: []
  };

  const includes: JsonTransformerValue = {
    key: `${escapePath(responsesBaseKey, `includes`)}`,
    value: []
  };

  const responsesList = prepareBaseKeys<RouteResponse>(
    responsesSource,
    (resp) => `${resp.statusCode}`,
    (resp) => `${resp.label || ''}`,
    (resp) => resp.uuid
  );

  responsesList.forEach(({ model, key }) => {
    const { body, ...other } = model;

    const responseItemBaseKey = escapePath(responsesBaseKey, key);

    const responseIndex = {
      key: `${escapePath(responseItemBaseKey, 'index')}`,
      value: {
        ...other
      }
    };

    const responseBodyIndex = {
      key: `${escapePath(responseItemBaseKey, 'body', 'index')}`,
      format: 'hbs',
      value: body
    };

    const responseIncludes = {
      key: `${escapePath(responseItemBaseKey, 'includes')}`,
      value: {
        body: escapePath(
          `./${responseBodyIndex.key.replace(responseItemBaseKey, '')}`
        )
      }
    };

    // @ts-expect-error false positive
    includes.value.push(
      escapePath(responseIndex.key.replace(responsesBaseKey + '/', './'))
    );

    common.push(responseIndex);
    common.push(responseIncludes);

    // @ts-expect-error false positive
    common.push(responseBodyIndex);

    responsesDocSections.push({
      title: `${other.statusCode} ${other.default ? ' (default)' : ''}`.trim(),
      details: other.label,
      links: [
        { label: 'See details  ', path: './' + responseItemBaseKey },
        {
          label: 'See body  ',
          path: './' + responseBodyIndex.key + `.${responseBodyIndex.format}`
        }
      ],
      code: JSON.stringify(other.rules, null, 2)
    });
  });

  return {
    responsesDocs: responsesDocSections,
    index,
    common: [includes, ...common]
  };
};

export default processResponses;
