import { Route } from '@mockoon/commons/dist/cjs/models/route.model.js';
import {
  escapePath,
  logger,
  prepareBaseKeys
} from '../../../../common/utils.js';
import { TransformerSettings } from '../../../../typse.js';
import {
  createDoc,
  createSections,
  docSectionItem,
  heading,
  lineBreak
} from '../../documentation.js';
import { JsonTransformerValue } from '../types.js';
import processResponses from './responses.js';

const processRoutes = (
  routesSource: Route[],
  settings: TransformerSettings
) => {
  const routes: JsonTransformerValue[] = [];
  const common: JsonTransformerValue[] = [];
  const routesDocSections: docSectionItem[] = [];

  const list = prepareBaseKeys<Route>(
    routesSource,
    (route) =>
      [
        settings.methodDirectoryTemplate.replace('method', route.method),
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

    logger(settings.verbose, `routes prepare route`, {
      method,
      endpoint,
      file: routeIndex.key
    });

    // process responses
    const {
      responsesDocs,
      index: indexResponsesData,
      common: commonResponsesData
    } = processResponses(baseKey, responses, settings);

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

    if (settings.generateDocs) {
      routesDocSections.push({
        title: `${method.toUpperCase()} /${endpoint}`.trim(),
        details: route.documentation,
        sections: responsesDocs
      });
    }
  });

  if (settings.generateDocs) {
    const routesDoc = createDoc([
      ...heading('Routes'),
      ...lineBreak(1),
      ...createSections(routesDocSections)
    ]);

    common.push({
      ...routesDoc,
      key: routesDoc.key,
      value: routesDoc.value
    });
  }

  return {
    routes,
    common
  };
};

export default processRoutes;
