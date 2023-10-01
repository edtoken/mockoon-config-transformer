import { Environment } from '@mockoon/commons';
import { TransformerSettings } from '../../../../typse.js';
import { JsonTransformerValue } from '../types.js';
import processRoutes from './routes.js';

type EnvironmentRoutesKey = Pick<Environment, 'routes'>['routes'];

const routes = (
  routesSource: EnvironmentRoutesKey,
  settings: TransformerSettings
): JsonTransformerValue[] => {
  const includes: string[] = [];
  const { routes, common } = processRoutes(routesSource, settings);

  includes.push(...routes.map((route) => route.key + '.json'));

  return [
    {
      key: 'index',
      value: []
    },
    {
      key: 'includes',
      value: includes
    },
    ...routes,
    ...common
  ];
};

export default routes;
