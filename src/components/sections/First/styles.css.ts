import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { layoutPaddingInlineVar } from '@/styles/global.css';
import { darkThemeClass, themeVars } from '@/styles/theme.css';
import {
  bodyTypographyClass,
  headlineTypographyClass,
} from '@/styles/typography.css';

export const firstSectionClass = style([
  darkThemeClass,
  {
    position: 'relative',
    marginInline: calc.negate(layoutPaddingInlineVar),
    paddingInline: layoutPaddingInlineVar,
    paddingTop: '7rem',

    '@media': { [themeVars.media.maxWidth.lg]: { paddingTop: '5rem' } },
  },
]);

export const firstSectionBackgroundImageClass = style({
  zIndex: -1,

  objectFit: 'cover',
  filter: 'brightness(25%)',
});

export const firstSectionSubtitleClass = style([
  headlineTypographyClass.sm,
  { marginTop: '1rem' },
]);

globalStyle(`${firstSectionSubtitleClass} > span`, {
  color: themeVars.colors.onPrimary,
  backgroundColor: themeVars.colors.primary,
});

export const firstSectionListClass = style({
  display: 'grid',
  gap: '1.5rem',

  marginBlock: '3rem 2rem',
  listStyle: 'none',

  '@media': {
    [themeVars.media.minWidth.sm]: { gridTemplateColumns: 'repeat(2, 1fr)' },

    [themeVars.media.minWidth.md]: {
      gap: '2.5rem',
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
});

export const firstSectionListItemClass = style([
  bodyTypographyClass.lg,
  {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',

    textAlign: 'left',

    '@media': {
      [themeVars.media.minWidth.sm]: {
        flexDirection: 'column',
        textAlign: 'center',
      },
    },
  },
]);

globalStyle(`${firstSectionListItemClass} > svg`, {
  flexShrink: 0,

  width: '2.5rem',
  height: '2.5rem',

  '@media': {
    [themeVars.media.minWidth.sm]: { width: '3rem', height: '3rem' },
    [themeVars.media.minWidth.md]: { width: '3.5rem', height: '3.5rem' },
  },
});
