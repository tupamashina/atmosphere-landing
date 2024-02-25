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
    margin: `0 ${calc.negate(layoutPaddingInlineVar)}`,
    padding: `7rem ${layoutPaddingInlineVar} 3rem`,
    textAlign: 'center',
    color: themeVars.colors.onSurface,
  },
]);

export const firstSectionBgImgClass = style({
  zIndex: -1,
  objectFit: 'cover',
  filter: 'brightness(30%)',
});

export const firstSectionSubtitleClass = style([
  headlineTypographyClass.sm,
  { margin: '1.5rem 0 3rem' },
]);

export const firstSectionListClass = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '2.5rem',
});

export const firstSectionListItemClass = style([
  bodyTypographyClass.lg,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',

    listStyleType: 'none',
    '::before': { content: '\\200B', position: 'absolute' },
  },
]);

globalStyle(`${firstSectionListItemClass} > svg`, { marginBottom: '1rem' });
