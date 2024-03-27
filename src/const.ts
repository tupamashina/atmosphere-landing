import { browserEnv } from './env/browser';

export const IS_SERVER = typeof window === 'undefined';
export const IS_BROWSER = !IS_SERVER;

export const IS_TEST = browserEnv.NODE_ENV === 'test';
export const IS_PROD = browserEnv.NODE_ENV === 'production';
export const IS_DEV = browserEnv.NODE_ENV === 'development';
