import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { layoutPaddingInlineVar } from '@/styles/global.css';
import { themeVars } from '@/styles/theme.css';

export const counterClass = style({
  marginInline: calc.negate(layoutPaddingInlineVar),
  padding: `1.5rem ${layoutPaddingInlineVar}`,

  color: themeVars.colors.onPrimaryContainer,
  backgroundColor: themeVars.colors.primaryContainer,
});
