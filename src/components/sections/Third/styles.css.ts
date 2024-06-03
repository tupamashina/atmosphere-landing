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
  bodyTypographyClass.md,
  {
    maxWidth: '20rem',
    padding: '0.75rem 1rem',

    color: themeVars.colors.onSurfaceVariant,
    backgroundColor: themeVars.colors.surfaceContainer,

    borderRadius: '0.75rem',
    boxShadow:
      '0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15)',
  },
]);

export const tooltipArrowClass = style({
  width: '1rem',
  height: '0.5rem',

  fill: themeVars.colors.surfaceContainer,
});
