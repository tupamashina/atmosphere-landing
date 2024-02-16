import { globalStyle } from '@vanilla-extract/css';

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

globalStyle('body', { backgroundColor: themeVars.colors.surface });
