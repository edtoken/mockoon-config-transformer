import { RouteResponse } from '@mockoon/commons';
import { Route } from '@mockoon/commons/dist/cjs/models/route.model';
import { RESPONSES_DIR_NAME } from '../../config';
import { JsonTransformerResponseItem, JsonTransformerValue } from './types';

const escapeEndpoint = (endpoint: string): string => {
  return endpoint;
};
const makeKey = (r: Route, postfix: string): string => {
  const endpoint = escapeEndpoint(r.endpoint);
  const k = [r.method, endpoint, postfix]
    .join('/')
    .replace(/([^:]\/)\/+/g, '$1')
    .trim();

  if (k.endsWith('/')) {
    return k.slice(0, k.length - 1);
  }
  return k;
};

const joinKey = (baseKey: string, postfix: string) =>
  `${baseKey}/${postfix}`.replace(/\/\//g, '/').trim();

const processResponses = (
  baseKey: string,
  route: Route,
  response: RouteResponse,
  i: number
): JsonTransformerValue[] => {
  const { statusCode, label, body, rules, ...other } = response;

  return [
    {
      key: `${joinKey(
        baseKey,
        `${RESPONSES_DIR_NAME}/${response.statusCode}/${i}/index`
      )}`,
      value: { statusCode, label }
    },
    {
      key: `${joinKey(
        baseKey,
        `${RESPONSES_DIR_NAME}/${response.statusCode}/${i}/body/index`
      )}`,
      format: 'hbs',
      value: body
    },
    {
      key: `${joinKey(
        baseKey,
        `${RESPONSES_DIR_NAME}/${response.statusCode}/${i}/rules/index`
      )}`,
      value: rules
    },
    {
      key: `${joinKey(
        baseKey,
        `${RESPONSES_DIR_NAME}/${response.statusCode}/${i}/common`
      )}`,
      value: other
    },
    {
      key: `${joinKey(
        baseKey,
        `${RESPONSES_DIR_NAME}/${response.statusCode}/${i}/includes`
      )}`,
      value: {
        body: `./body/index`,
        rules: './rules/index'
      }
    }
  ];
};
const routes = (routes: Route[]): JsonTransformerResponseItem[] => {
  const includes: string[] = [];
  const children: JsonTransformerResponseItem[] = [];
  const routeKeysCount: { [key: string]: number } = {};

  const resolveBaseKey = (baseKey: string) => {
    if (routeKeysCount[baseKey]) {
      const result = `${baseKey}__${routeKeysCount[baseKey]}`;
      routeKeysCount[baseKey] += 1;
      return result;
    }
    routeKeysCount[baseKey] = 1;
    return baseKey;
  };

  routes.forEach((route, i) => {
    if (route.endpoint.includes(`/${RESPONSES_DIR_NAME}`)) {
      throw new Error(
        `"/${RESPONSES_DIR_NAME}..." unsupported in the endpoint path, make and issue`
      );
    }

    const baseKey = resolveBaseKey(makeKey(route, ''));

    const routeResponsesKeyPath = joinKey(baseKey, RESPONSES_DIR_NAME);

    const { type, documentation, method, endpoint, responses, ...other } =
      route;

    const index = {
      key: `${joinKey(baseKey, 'index')}`,
      value: {
        type,
        documentation,
        method,
        endpoint
      }
    };

    const common = {
      key: `${joinKey(baseKey, 'common')}`,
      value: other
    };

    children.push(index);
    children.push(common);
    includes.push(`${index.key}`);

    const responsesIndex = {
      key: `${joinKey(baseKey, `${RESPONSES_DIR_NAME}/index`)}`,
      value: []
    };
    const responseIncludes = {
      key: `${joinKey(baseKey, `${RESPONSES_DIR_NAME}/includes`)}`,
      value: []
    };

    const routeIncludes = {
      key: `${joinKey(baseKey, 'includes')}`,
      value: {
        responses: `./${RESPONSES_DIR_NAME}/index`
      }
    };

    const responsesByStatusCount: {
      [key: RouteResponse['statusCode']]: number;
    } = responses.reduce((memo, resp) => {
      // @ts-expect-error todo
      memo[resp.statusCode] = memo[resp.statusCode] || 0;
      return memo;
    }, {});

    responses.forEach((resp, i) => {
      let responseNum = responsesByStatusCount[resp.statusCode] || 0;
      responsesByStatusCount[resp.statusCode] += 1;

      const responsesData = processResponses(baseKey, route, resp, responseNum);
      const responseKey = responsesData[0].key.replace(
        routeResponsesKeyPath,
        ''
      );
      // @ts-expect-error todo
      responseIncludes.value.push(`.${responseKey}`);

      responsesData.forEach((item) => {
        children.push(item);
      });
    });
    children.push(routeIncludes);
    children.push(responsesIndex);
    children.push(responseIncludes);
  });

  return [
    ...children,
    {
      key: 'index',
      value: []
    },
    {
      key: 'includes',
      value: includes
    }
  ];
};

export default routes;
