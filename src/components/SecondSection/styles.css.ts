import { style } from '@vanilla-extract/css';

import { themeVars } from '@/styles/theme.css';
import { titleTypographyClass } from '@/styles/typography.css';

export const secondSectionClass = style({
  padding: '3rem 0 2rem',
  textAlign: 'center',
  color: themeVars.colors.onSurface,
});

export const secondSectionTextClass = style([
  titleTypographyClass.lg,
  { margin: '0.5rem 0 1.5rem' },
]);
