import { style } from '@vanilla-extract/css';

import { layoutPaddingInlineVar } from '@/styles/global.css';
import { themeVars } from '@/styles/theme.css';
import { bodyTypographyClass } from '@/styles/typography.css';

export const footerClass = style([
  bodyTypographyClass.lg,
  {
    display: 'grid',
    gridTemplateColumns: 'max-content 1fr max-content',
    gap: '8rem',
    padding: `2rem ${layoutPaddingInlineVar}`,
    backgroundColor: themeVars.colors.surfaceContainer,
    color: themeVars.colors.onSurface,
  },
]);
