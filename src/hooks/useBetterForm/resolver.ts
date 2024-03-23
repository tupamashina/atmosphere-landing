import {
  get,
  FieldError,
  FieldErrors,
  ResolverOptions,
  ResolverResult,
  Field,
  set,
} from 'react-hook-form';
import { validate, type StructError, type Struct } from 'superstruct';

import type { BetterFormValidationOptions, FormValues } from './types';

const parseError = (error: StructError) =>
  error.failures().reduce(
    (
      errors,
      { path: pathSegments, type: failureType, message, refinement },
    ) => {
      const path = pathSegments.join('.');
      const type = refinement || failureType;

      const prevError = errors[path];
      const prevTypes = prevError?.types || {};

      const types = {
        ...prevTypes,
        [type]:
          !prevTypes[type] ?
            [message]
          : (prevTypes[type] as string[]).concat(message),
      };

      return {
        ...errors,
        [path]: { ...(prevError || { type, message }), types },
      };
    },
    {} as Record<string, FieldError | undefined>,
  );

const toNestErrors = <V extends FormValues>(
  errors: FieldErrors,
  options: ResolverOptions<V>,
) =>
  Object.entries(errors).reduce((fieldErrors, [path, error]) => {
    const { ref } = (get(options.fields, path) || {}) as Partial<Field['_f']>;
    set(fieldErrors, path, { ...error, ref });

    return fieldErrors;
  }, {} as FieldErrors<V>);

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
