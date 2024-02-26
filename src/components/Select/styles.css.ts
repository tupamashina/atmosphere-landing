import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { themeVars } from '@/styles/theme.css';
import { bodyTypographyClass, lhVar } from '@/styles/typography.css';

export const selectContainerClass = style({ position: 'relative' });

export const selectClass = style([
  bodyTypographyClass.lg,
  {
    height: '100%',
    width: '100%',
    padding: '1rem',
    paddingRight: '2.125rem',
    border: 'none',
    borderRadius: '0.25rem',
    boxShadow: `inset 0 0 0 1px ${themeVars.colors.outline}`,
    background: 'none',
    color: themeVars.colors.onSurface,
    appearance: 'none',
    transition: 'box-shadow 150ms',

    ':hover': { boxShadow: `inset 0 0 0 1px ${themeVars.colors.onSurface}` },

    ':focus': {
      outline: 'none',
      caretColor: themeVars.colors.primary,
      boxShadow: `inset 0 0 0 2px ${themeVars.colors.primary}`,
    },
  },
]);

export const selectLabelClass = style([
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
      [`${selectClass}:hover + &`]: {
        color: themeVars.colors.onSurface,
      },

      [`${selectClass}:focus + &`]: {
        color: themeVars.colors.primary,
      },
    },
  },
]);

export const selectIndicatorClass = style({
  position: 'absolute',
  top: 'calc(50% - 0.4375rem)',
  right: '0.75rem',
});
