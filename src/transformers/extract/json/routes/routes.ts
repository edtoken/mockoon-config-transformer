import { Route } from '@mockoon/commons/dist/cjs/models/route.model.js';
import { escapePath } from '../../../../common/utils.js';
import { METHOD_DIR_TEMPLATE } from '../../../../config.js';
import { prepareBaseKeys } from '../../../utils.js';
import {
  createDoc,
  createSections,
  docSectionItem,
  head,
  lineBreak
} from '../../documentation.js';
import { JsonTransformerValue } from '../types.js';
import processResponses from './responses.js';

const processRoutes = (routesSource: Route[]) => {
  const routes: JsonTransformerValue[] = [];
  const common: JsonTransformerValue[] = [];
  const routesDocSections: docSectionItem[] = [];

  const list = prepareBaseKeys<Route>(
    routesSource,
    (route) =>
      [
        METHOD_DIR_TEMPLATE.replace('method', route.method),
        route.endpoint || ''
      ].join('/'),
    (route) => route.documentation || '',
    (item) => item.uuid
  );

  list.forEach(({ model: route, key: baseKey }) => {
    const { type, documentation, method, endpoint, responses, ...other } =
      route;

    const routeIndex = {
      key: `${escapePath(baseKey, 'index')}`,
      value: {
        type,
        documentation,
        method,
        endpoint,
        ...other
      }
    };

    // process responses
    const {
      responsesDocs,
      index: indexResponsesData,
      common: commonResponsesData
    } = processResponses(baseKey, responses);

    const routeIncludes = {
      key: `${escapePath(baseKey, 'includes')}`,
      value: {
        responses: escapePath(
          `./${indexResponsesData.key.replace(baseKey, '')}`
        )
      }
    };

    routes.push(routeIndex);
    common.push(routeIncludes);
    common.push(indexResponsesData);
    common.push(...commonResponsesData);

    routesDocSections.push({
      title: `${method.toUpperCase()} /${endpoint}`.trim(),
      details: route.documentation,
      sections: responsesDocs
    });
  });

  const routesDoc = createDoc([
    ...head('Routes'),
    ...lineBreak(1),
    ...createSections(routesDocSections)
  ]);

  common.push({
    ...routesDoc,
    key: routesDoc.key,
    value: routesDoc.value
  });

  return {
    routes,
    common
  };
};

export default processRoutes;
