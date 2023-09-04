import data from './data';
import folders from './folders';
import main from './main';
import routes from './routes';
import tlsOptions from './tlsOptions';

const transformers = {
  main,
  folders,
  tlsOptions,
  data,
  routes
};

export type CustomTransformers = Omit<keyof typeof transformers, 'main'>;

export default transformers;
