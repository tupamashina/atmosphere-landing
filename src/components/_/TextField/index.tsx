import { useMaskito } from '@maskito/react';
import { assignVars, StyleRule } from '@vanilla-extract/css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';
import {
  createElement,
  forwardRef,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
} from 'react';

import { useComposedRef } from '@/hooks/useComposedRef';
import { useId } from '@/hooks/useId';
import { icons } from '@/icons';
import { Icon } from '@/icons/create';
import { themeVars } from '@/styles/theme.css';
import { composeEventHandlers } from '@/utils/composeEventHandlers';
import * as styles from './styles.css';

import type { MaskitoOptions } from '@maskito/core';
import type { Except } from 'type-fest';

type HTMLTextFieldProps = Except<
  InputHTMLAttributes<HTMLInputElement>,
  | 'accept'
  | 'alt'
  | 'capture'
  | 'checked'
  | 'defaultChecked'
  | 'formAction'
  | 'formEncType'
  | 'formMethod'
  | 'formNoValidate'
  | 'formTarget'
  | 'height'
  | 'src'
  | 'width'
>;

type TextFieldAutoCapitalize =
  | 'none'
  | 'off'
  | 'sentences'
  | 'on'
  | 'words'
  | 'characters';

type TextFieldAutoComplete =
  | 'off'
  | 'on'
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'email'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'tel-extension'
  | 'impp'
  | 'url'
  | 'photo';

type TextFieldType = Extract<
  HTMLInputTypeAttribute,
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
>;

export interface TextFieldProps extends HTMLTextFieldProps {
  label: string;

  autoCapitalize?: TextFieldAutoCapitalize;
  autoComplete?: TextFieldAutoComplete;
  type?: TextFieldType;

  error?: boolean;
  errorText?: string;
  leadingIcon?: Icon;
  maskOptions?: MaskitoOptions;
  backgroundColor?: Exclude<StyleRule['backgroundColor'], unknown[]>;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id: idProp,
      label,
      onInput,
      onChange,
      maskOptions,
      error,
      errorText,
      leadingIcon,
      backgroundColor,
      className,
      style,
      ...props
    },
    forwardedRef,
  ) => {
    const id = useId(idProp);

    const ref = useComposedRef<HTMLInputElement>(
      forwardedRef,
      useMaskito({ options: maskOptions }),
    );

    return (
      <div role="presentation" className={styles.textFieldContainerClass}>
        <input
          id={id}
          ref={ref}
          aria-invalid={error}
          onInput={composeEventHandlers(onInput, onChange, true)}
          className={clsx(styles.textFieldInputClass, className)}
          style={{ paddingLeft: leadingIcon ? '3rem' : undefined, ...style }}
          {...props}
        />

        <label
          htmlFor={id}
          className={styles.textFieldLabelClass}
          style={assignInlineVars({
            [styles.textFieldLabelBackgroundColorVar]: backgroundColor,
          })}
        >
          {label}
        </label>

        {leadingIcon &&
          createElement(leadingIcon, {
            size: '1.5rem',
            'aria-hidden': true,
            onClick: () => ref.current?.focus(),
            color: themeVars.colors.onSurfaceVariant,
            className: styles.textFieldLeadingIconClass,
          })}

        {error && !!errorText && (
          <p className={styles.textFieldErrorTextClass}>
            <icons.WarningCircleFill size="1.25rem" />
            {errorText}
          </p>
        )}

        {/* {!!supportingText && (
          <p className={styles.textFieldSupportingTextClass}>
            {supportingText}
          </p>
        )} */}
      </div>
    );
  },
);

TextField.displayName = 'TextField';
