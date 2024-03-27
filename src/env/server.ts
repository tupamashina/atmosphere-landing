import { object, string } from 'superstruct';

import { browserEnv } from './browser';

const serverEnvStruct = object({ GMAIL_USER: string(), GMAIL_PASS: string() });

export const serverEnv = {
  ...browserEnv,
  ...serverEnvStruct.mask(process.env),
} as const;
