import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { layoutPaddingInlineVar } from '@/styles/global.css';
import { themeVars } from '@/styles/theme.css';
import { headlineTypographyClass } from '@/styles/typography.css';

export const whyClass = style([
  headlineTypographyClass.lg,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginInline: calc.negate(layoutPaddingInlineVar),
    padding: `1.5rem ${layoutPaddingInlineVar}`,

    color: themeVars.colors.onPrimaryContainer,
    backgroundColor: themeVars.colors.primaryContainer,
  },
]);

globalStyle(`${whyClass} button`, { marginTop: '1rem' });
