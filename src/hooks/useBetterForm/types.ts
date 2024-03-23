import type { RefCallback } from 'react';
import type {
  Path,
  RegisterOptions,
  UseFormProps,
  UseFormRegisterReturn,
  UseFormReturn,
} from 'react-hook-form';
import type { Struct, validate } from 'superstruct';
import type { Except } from 'type-fest';

export type FormValues = Record<string, unknown>;

export interface UseBetterFormRegisterOptions<
  V extends FormValues,
  N extends Path<V>,
> extends Pick<
    RegisterOptions<V, N>,
    'disabled' | 'value' | 'deps' | 'shouldUnregister'
  > {
  onBlur?(event: unknown): void;
  onChange?(event: unknown): void;
  setValueAs?(value: unknown): unknown;
}

type ChangeHandler = (event: {
  target: unknown;
  type?: unknown;
}) => Promise<boolean | undefined>;

export interface UseBetterFormRegisterReturn<N extends string>
  extends Pick<UseFormRegisterReturn<N>, 'name' | 'disabled'> {
  onBlur: ChangeHandler;
  onChange: ChangeHandler;
  ref: RefCallback<unknown>;
}

export type UseBetterFormRegister<V extends FormValues> = <N extends Path<V>>(
  name: N,
  options?: UseBetterFormRegisterOptions<V, N>,
) => UseBetterFormRegisterReturn<N>;

export interface UseBetterFormReturn<V extends FormValues>
  extends UseFormReturn<V> {
  register: UseBetterFormRegister<V>;
}

export type BetterFormValidationOptions = Parameters<typeof validate>[2];

export interface UseBetterFormParams<V extends FormValues>
  extends Except<
    UseFormProps<V>,
    | 'mode'
    | 'reValidateMode'
    | 'resolver'
    | 'context'
    | 'shouldUseNativeValidation'
    | 'progressive'
  > {
  struct: Struct<V>;
  validationOptions?: BetterFormValidationOptions;
}
