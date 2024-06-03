import { useMaskito } from '@maskito/react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { type StyleRule } from '@vanilla-extract/css';
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
import { Icons } from '@/icons';
import type { Icon } from '@/icons/create';
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

  tooltip?: string;
  error?: boolean;
  errorText?: string;
  leadingIcon?: Icon;
  maskOptions?: MaskitoOptions;
  backgroundColor?: Exclude<StyleRule['backgroundColor'], unknown[]>;

  supportingText?: string;
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
      tooltip,
      leadingIcon,
      supportingText,
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
          style={{
            paddingLeft: leadingIcon ? '3rem' : undefined,
            paddingRight: tooltip ? '2.75rem' : undefined,
            ...style,
          }}
          {...props}
        />

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label
          htmlFor={id}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: label }}
          className={styles.textFieldLabelClass}
          style={assignInlineVars({
            [styles.textFieldLabelBackgroundColorVar]: backgroundColor,
          })}
        />

        {!!supportingText && (
          <p className={styles.textFieldSupportingTextClass}>
            {supportingText}
          </p>
        )}

        {leadingIcon &&
          createElement(leadingIcon, {
            size: '1.5rem',
            'aria-hidden': true,
            onClick: () => ref.current?.focus(),
            color: themeVars.colors.onSurfaceVariant,
            className: styles.textFieldLeadingIconClass,
          })}

        {!!tooltip && (
          <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Icons.Help
                  size="1.25rem"
                  className={styles.textFieldTooltipTriggerClass}
                />
              </Tooltip.Trigger>

              <Tooltip.Portal>
                <Tooltip.Content
                  side="right"
                  sideOffset={4}
                  className={styles.textFieldTooltipContentClass}
                >
                  {tooltip}
                  <Tooltip.Arrow
                    width={16}
                    height={8}
                    fill={themeVars.colors.inverseSurface}
                  />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        )}
      </div>
    );
  },
);

TextField.displayName = 'TextField';
