/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/unbound-method */

import { deepStrictEqual } from 'assert';
import { useMemo } from 'react';
import {
  type FieldError,
  type FieldErrors,
  get,
  useForm as useReactHookForm,
} from 'react-hook-form';

import { composeEventHandlers } from '@/utils/composeEventHandlers';
import { betterFormResolver } from './resolver';
import type {
  FormValues,
  UseBetterFormParams,
  UseBetterFormRegister,
  UseBetterFormReturn,
} from './types';

const getError = (errors: FieldErrors, path: string) =>
  get(errors, path) as FieldError | undefined;

export const deepStrictEqualSafe = <T,>(
  actual: unknown,
  expected: T,
): actual is T => {
  try {
    deepStrictEqual(actual, expected);
    return true;
  } catch {
    return false;
  }
};

export const pick = <O extends object, K extends keyof O>(
  object: O,
  keys: K[],
) => {
  const newObject = {} as Pick<O, K>;

  for (const key of keys) {
    newObject[key] = object[key];
  }

  return newObject;
};

export const useBetterForm = <V extends FormValues>({
  struct,
  validationOptions,
  ...params
}: UseBetterFormParams<V>): UseBetterFormReturn<V> => {
  const {
    control,
    setError,
    formState,
    clearErrors,
    register: originalRegister,
    ...formMethods
  } = useReactHookForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: betterFormResolver(struct, {
      mask: true,
      coerce: true,
      ...validationOptions,
    }),
    ...params,
  });

  // Implementing the "reward early, punish late" pattern
  // https://www.smashingmagazine.com/2022/09/inline-validation-web-forms-ux/#4-reward-early-punish-late
  const register = useMemo(
    () =>
      new Proxy(originalRegister, {
        apply(target, thisArg, args) {
          const [path, options] = args as Parameters<UseBetterFormRegister<V>>;

          const onChange = composeEventHandlers(
            options?.onChange,
            async () => {
              const prevError = getError(formState.errors, path);

              if (prevError) {
                const { errors } = await control._executeSchema([path]);
                const newError = getError(errors, path);

                if (newError) {
                  const [prevErrorPick, newErrorPick] = [
                    prevError,
                    newError,
                  ].map((error) => pick(error, ['message', 'type', 'types']));

                  if (!deepStrictEqualSafe(prevErrorPick, newErrorPick))
                    setError(path, newError);
                } else {
                  clearErrors(path);
                }
              }
            },
            true,
          );

          return Reflect.apply(target, thisArg, [
            path,
            { ...options, onChange },
          ]);
        },
      }) as UseBetterFormRegister<V>,
    [clearErrors, control, formState.errors, originalRegister, setError],
  );

  return {
    control,
    register,
    setError,
    formState,
    clearErrors,
    ...formMethods,
  };
};
