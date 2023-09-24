import { Environment } from '@mockoon/commons';
import { DataBucket } from '@mockoon/commons/dist/cjs/models/environment.model.js';
import { escapePath } from '../../../common/utils.js';
import { prepareBaseKeys } from '../../utils.js';
import {
  createDoc,
  createSections,
  docSectionItem,
  heading,
  lineBreak
} from '../documentation.js';
import { JsonTransformerValue } from './types.js';

type EnvironmentDataKey = Pick<Environment, 'data'>['data'];

const data = (dataSource: EnvironmentDataKey): JsonTransformerValue[] => {
  const children: Array<JsonTransformerValue> = [];
  const includes: string[] = [];
  const sectionsDoc: docSectionItem[] = [];

  const data = prepareBaseKeys<DataBucket>(
    dataSource,
    (model) => model.name,
    (model) => model.documentation || '',
    (model) => model.uuid
  );

  data.forEach(({ model, key }) => {
    const { value, ...other } = model;

    const baseKey = `./${key}`;
    const indexPath = escapePath(baseKey, 'index');

    includes.push(indexPath + '.json');

    children.push({
      key: indexPath,
      value: other
    });

    const valueChildren: JsonTransformerValue = {
      format: 'hbs',
      key: escapePath(`${baseKey}/value/index`),
      value: value
    };

    children.push(valueChildren);

    children.push({
      key: escapePath(`${baseKey}/includes`),
      value: {
        value: escapePath(valueChildren.key.replace(`${baseKey}`, './'))
      }
    });

    sectionsDoc.push({
      title: other.name,
      details: other.documentation,
      links: [
        {
          path:
            valueChildren.key +
            (valueChildren.format ? `.${valueChildren.format}` : '.json'),
          label: 'See value'
        }
      ]
    });
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
    ...children,
    createDoc([
      ...heading('Data'),
      ...lineBreak(1),
      ...createSections(sectionsDoc)
    ])
  ];
};

export default data;
