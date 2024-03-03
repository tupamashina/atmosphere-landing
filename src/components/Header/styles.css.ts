import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { layoutPaddingInlineVar } from '@/styles/global.css';
import { darkThemeClass, themeVars } from '@/styles/theme.css';
import {
  bodyTypographyClass,
  lhVar,
  titleTypographyClass,
} from '@/styles/typography.css';

export const headerClass = style([
  darkThemeClass,
  {
    position: 'absolute',
    inset: 0,
    bottom: 'auto',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'center',
    gap: '10rem',
    padding: `1rem ${layoutPaddingInlineVar} 0`,
    color: themeVars.colors.onSurface,
  },
]);

// 203, 203, 118

export const headerSloganClass = style([
  bodyTypographyClass.lg,
  {
    vars: { [lhVar]: '1.25rem' },

    justifySelf: 'start',
    padding: '0.625rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: `rgba(${themeVars.colors.rgbValues.primary}, 0.24)`,
  },
]);

export const headerTitleClass = style({ justifySelf: 'center', fontSize: 0 });

export const headerContactInfoClass = style({
  justifySelf: 'end',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, max-content)',
  gap: '1rem',
});

const baseContactLinkClass = style({
  display: 'block',
  textAlign: 'end',
  color: 'inherit',
  cursor: 'pointer',
});

export const contactLinkClass = styleVariants({
  tel: [
    baseContactLinkClass,
    titleTypographyClass.lg,
    { textDecoration: 'none' },
  ],

  mail: [baseContactLinkClass, bodyTypographyClass.md],
});
