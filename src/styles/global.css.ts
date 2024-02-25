import { createVar, globalStyle } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { themeVars } from './theme.css';

globalStyle('*, *::before, *::after', { margin: 0, padding: 0 });

globalStyle(':root', {
  fontSize: 16,

  fontFamily: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    "'Segoe UI'",
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    "'Open Sans'",
    "'Helvetica Neue'",
    'sans-serif',
  ].join(', '),
});

export const layoutPaddingInlineVar = createVar();

globalStyle('body', {
  vars: { [layoutPaddingInlineVar]: '1rem' },

  backgroundColor: themeVars.colors.surface,

  '@media': {
    [themeVars.breakpoints.md]: {
      vars: {
        [layoutPaddingInlineVar]: `max(1rem, ${calc('100vw')
          .subtract('77.5rem')
          .divide(2)})`,
      },
    },
  },
});

globalStyle('main', { padding: `0 ${layoutPaddingInlineVar}` });
