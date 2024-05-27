import { style } from '@vanilla-extract/css';

import { themeVars } from '@/styles/theme.css';
import {
  bodyTypographyClass,
  titleTypographyClass,
} from '@/styles/typography.css';

export const thirdSectionSubtitleClass = style([
  titleTypographyClass.lg,
  { display: 'block', marginBlock: '0.25rem 2rem', fontWeight: 400 },
]);

export const thirdSectionSchemeClass = style({
  maxWidth: '100%',
  height: 'auto',
});

export const tooltipTriggerClass = style({
  border: 'none',
  cursor: 'pointer',
  position: 'absolute',
  backgroundColor: 'transparent',
});

export const tooltipContentClass = style([
  bodyTypographyClass.sm,
  {
    maxWidth: '20rem',
    borderRadius: '0.25rem',
    padding: '0.25rem 0.5rem',
    color: themeVars.colors.inverseOnSurface,
    backgroundColor: themeVars.colors.inverseSurface,
  },
]);
