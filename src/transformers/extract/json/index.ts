import data from './data.js';
import folders from './folders.js';
import main from './main.js';
import routes from './routes/index.js';
import tlsOptions from './tlsOptions.js';

export const mainTransformer = main;
export const customTransformers = {
  folders,
  tlsOptions,
  data,
  routes
};

export type CustomTransformers = keyof typeof customTransformers;

export const customTransformerNames = Object.keys(
  customTransformers
) as CustomTransformers[];
