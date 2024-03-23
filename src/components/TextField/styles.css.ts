import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { themeVars } from '@/styles/theme.css';
import { bodyTypographyClass, lhVar } from '@/styles/typography.css';

export const textFiledContainerClass = style([{ position: 'relative' }]);

export const textFieldInputClass = style([
  bodyTypographyClass.lg,
  {
    width: '100%',
    padding: '1rem',
    border: 'none',
    borderRadius: '0.25rem',
    boxShadow: `inset 0 0 0 1px ${themeVars.colors.outline}`,
    background: 'none',
    color: themeVars.colors.onSurface,
    transition: 'box-shadow 150ms',

    ':hover': { boxShadow: `inset 0 0 0 1px ${themeVars.colors.onSurface}` },

    ':focus': {
      outline: 'none',
      caretColor: themeVars.colors.primary,
      boxShadow: `inset 0 0 0 2px ${themeVars.colors.primary}`,
    },
  },
]);

export const textFieldLabelClass = style([
  bodyTypographyClass.sm,
  {
    position: 'absolute',
    left: '0.75rem',
    top: calc(lhVar).divide(2).negate().toString(),
    padding: '0 0.25rem',
    backgroundColor: themeVars.colors.surface,
    color: themeVars.colors.onSurfaceVariant,
    transition: 'color 150ms',

    selectors: {
      [`${textFieldInputClass}:hover + &`]: {
        color: themeVars.colors.onSurface,
      },

      [`${textFieldInputClass}:focus + &`]: {
        color: themeVars.colors.primary,
      },
    },
  },
]);

export const textFieldTooltipTriggerClass = style({
  position: 'absolute',
  right: '0.75rem',
  top: 'calc(50% - 0.625rem)',
  cursor: 'pointer',
});

export const textFieldTooltipContentClass = style([
  bodyTypographyClass.sm,
  {
    maxWidth: '16rem',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    backgroundColor: themeVars.colors.inverseSurface,
    color: themeVars.colors.inverseOnSurface,
  },
]);
