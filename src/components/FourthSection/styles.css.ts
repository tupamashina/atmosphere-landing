import { style } from '@vanilla-extract/css';

import { themeVars } from '@/styles/theme.css';

export const fourthSectionClass = style({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr 1fr',
  gap: '1.25rem',

  padding: '3rem 0',
  textAlign: 'center',
  color: themeVars.colors.onSurface,
});
