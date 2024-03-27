/* eslint-disable unicorn/prefer-spread */
/* eslint-disable unicorn/no-array-reduce */

import {
  get,
  type FieldError,
  type FieldErrors,
  type ResolverOptions,
  type ResolverResult,
  type Field,
  set,
} from 'react-hook-form';
import { validate, type StructError, type Struct } from 'superstruct';

import type { BetterFormValidationOptions, FormValues } from './types';

const parseError = (error: StructError) =>
  error
    .failures()
    .reduce<
      Record<string, FieldError | undefined>
    >((errors, { path: pathSegments, type: failureType, message, refinement }) => {
      const path = pathSegments.join('.');
      const type = refinement || failureType;

      const prevError = errors[path];
      const prevTypes = prevError?.types || {};

      const types = {
        ...prevTypes,
        [type]:
          prevTypes[type] ?
            (prevTypes[type] as string[]).concat(message)
          : [message],
      };

      return {
        ...errors,
        [path]: { ...(prevError || { type, message }), types },
      };
    }, {});

const toNestErrors = <V extends FormValues>(
  errors: FieldErrors,
  options: ResolverOptions<V>,
) =>
  Object.entries(errors).reduce<FieldErrors<V>>(
    (fieldErrors, [path, error]) => {
      const { ref } = (get(options.fields, path) || {}) as Partial<Field['_f']>;
      set(fieldErrors, path, { ...error, ref });

      return fieldErrors;
    },
    {},
  );

export function betterFormResolver<V extends FormValues>(
  struct: Struct<V>,
  validationOptions: BetterFormValidationOptions,
) {
  return (
    formValues: V,
    _: unknown,
    resolverOptions: ResolverOptions<V>,
  ): ResolverResult<V> => {
    const [error, values] = validate(formValues, struct, validationOptions);
    if (!error) return { values, errors: {} };

    return {
      values: {},
      errors: toNestErrors(parseError(error), resolverOptions),
    };
  };
}
