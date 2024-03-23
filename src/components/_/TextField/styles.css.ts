import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { themeVars } from '@/styles/theme.css';
import { bodyTypographyClass, lhVar } from '@/styles/typography.css';

export const textFieldContainerClass = style({ position: 'relative' });

const inputBorderWidthVar = createVar();
const inputBorderColorVar = createVar();

export const textFieldInputClass = style([
  bodyTypographyClass.lg,
  {
    vars: {
      [inputBorderWidthVar]: '1px',
      [inputBorderColorVar]: themeVars.colors.outline,
    },

    width: '100%',
    padding: '1rem',

    border: 'none',
    borderRadius: '0.25rem',
    backgroundColor: 'transparent',
    color: themeVars.colors.onSurface,

    transition: 'box-shadow 150ms',
    caretColor: inputBorderColorVar,

    ':hover': { vars: { [inputBorderColorVar]: themeVars.colors.onSurface } },

    ':focus': {
      vars: {
        [inputBorderWidthVar]: '2px',
        [inputBorderColorVar]: themeVars.colors.primary,
      },

      outline: 'none',
    },

    selectors: {
      '&, &:invalid': {
        boxShadow: `inset 0 0 0 ${inputBorderWidthVar} ${inputBorderColorVar}`,
      },

      '&[aria-invalid="true"]': {
        vars: { [inputBorderColorVar]: themeVars.colors.error },
      },
    },
  },
]);

export const textFieldLabelBackgroundColorVar = createVar();

export const textFieldLabelClass = style([
  bodyTypographyClass.sm,
  {
    vars: { [textFieldLabelBackgroundColorVar]: themeVars.colors.surface },

    position: 'absolute',
    left: '0.75rem',
    top: `${calc(lhVar).divide(2).negate()}`,
    zIndex: 1,

    padding: '0 0.25rem',

    color: themeVars.colors.onSurfaceVariant,
    backgroundColor: textFieldLabelBackgroundColorVar,

    userSelect: 'none',
    transition: 'color 150ms',

    selectors: {
      [`${textFieldInputClass}:hover + &`]: {
        color: themeVars.colors.onSurface,
      },

      [`${textFieldInputClass}:focus + &`]: {
        color: themeVars.colors.primary,
      },

      [`${textFieldInputClass}[aria-invalid="true"] + &`]: {
        color: themeVars.colors.error,
      },

      [`${textFieldInputClass}:required + &::after`]: { content: '*' },
    },
  },
]);

export const textFieldLeadingIconClass = style({
  position: 'absolute',
  top: '1rem',
  left: '0.75rem',

  cursor: 'text',
});

export const textFieldErrorTextClass = style([
  bodyTypographyClass.sm,
  {
    display: 'flex',
    alignItems: 'center',
    padding: '0.25rem 1rem',
    color: themeVars.colors.error,
  },
]);

globalStyle(`${textFieldErrorTextClass} > svg`, {
  flexShrink: 0,
  marginRight: '0.375rem',
});
