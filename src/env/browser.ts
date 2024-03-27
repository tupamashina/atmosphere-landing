import { enums, object, type Describe } from 'superstruct';

const nodeEnvStruct: Describe<NodeJS.ProcessEnv['NODE_ENV']> = enums([
  'test',
  'production',
  'development',
]);

const browserEnvStruct = object({ NODE_ENV: nodeEnvStruct } as const);

export const browserEnv = browserEnvStruct.create({
  NODE_ENV: process.env.NODE_ENV,
});
