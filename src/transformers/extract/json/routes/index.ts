import { Environment } from '@mockoon/commons';
import { JsonTransformerValue } from '../types.js';
import processRoutes from './routes.js';

type EnvironmentRoutesKey = Pick<Environment, 'routes'>['routes'];

const routes = (routesSource: EnvironmentRoutesKey): JsonTransformerValue[] => {
  const includes: string[] = [];
  const { routes, common } = processRoutes(routesSource);

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
