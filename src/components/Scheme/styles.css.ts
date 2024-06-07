import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { layoutPaddingInlineVar } from '@/styles/global.css';
import { themeVars } from '@/styles/theme.css';
import {
  bodyTypographyClass,
  headlineTypographyClass,
} from '@/styles/typography.css';

export const schemeClass = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1.25rem',

  marginInline: calc.negate(layoutPaddingInlineVar),
  padding: `1.5rem ${layoutPaddingInlineVar} 2rem`,

  color: themeVars.colors.onPrimaryContainer,
  backgroundColor: themeVars.colors.primaryContainer,

  '@media': {
    [themeVars.media.minWidth.sm]: { gridTemplateColumns: 'repeat(6, 1fr)' },
    '(min-width: 1024px)': { gridTemplateColumns: 'repeat(5, 1fr)' },
  },
});

export const schemeTitleClass = style([
  headlineTypographyClass.lg,
  { gridColumn: '1 / -1', marginBottom: '0.5rem', fontWeight: 500 },
]);

export const schemeStepClass = style([
  bodyTypographyClass.lg,
  {
    position: 'relative',
    gridColumn: 'span 2',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    selectors: {
      '&:nth-child(5)': {
        '@media': { [themeVars.media.minWidth.sm]: { gridColumn: '2 / 4' } },
      },

      '&:nth-child(6)': {
        gridColumn: '2 / 4',
        '@media': { [themeVars.media.minWidth.sm]: { gridColumn: '4 / 6' } },
      },
    },

    '@media': { '(min-width: 1024px)': { gridColumn: 'auto !important' } },
  },
]);

export const schemeStepIconClass = style({
  margin: '1rem 0',
  transition: 'transform 150ms',

  ':hover': { transform: 'scale(1.15)' },
});

export const schemeStepArrowClass = style({
  position: 'absolute',
  top: '4rem',
  right: '-1.625rem',

  '@media': { 'not all and (min-width: 1024px)': { display: 'none' } },
});

globalStyle(`${schemeStepClass} span`, {
  vars: { [themeVars.lh]: '2rem' },

  width: '2.25rem',

  fontSize: '1.5rem',
  fontWeight: 700,

  border: '2px solid currentColor',
  borderRadius: '50%',
});
