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
  { gridColumn: '1 / -1', marginBottom: '1rem', fontWeight: 500 },
]);

export const schemeStepClass = style([
  bodyTypographyClass.lg,
  {
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

globalStyle(`${schemeStepClass} svg`, { margin: '1rem 0' });

globalStyle(`${schemeStepClass} span`, {
  vars: { [themeVars.lh]: '2rem' },
  fontSize: '1.5rem',
  fontWeight: 700,
});
