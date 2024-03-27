import { createVar, globalStyle } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { themeVars } from './theme.css';

globalStyle(':root', { fontSize: 16, fontFeatureSettings: '"ss01"' });
globalStyle('*, *::before, *::after', { margin: 0, padding: 0 });

globalStyle('*', { lineHeight: `${themeVars.lh} !important` });
globalStyle('sub, sup', { vars: { [themeVars.lh]: '0' } });

export const layoutPaddingBlockVar = createVar();
export const layoutPaddingInlineVar = createVar();

globalStyle('body', {
  vars: { [layoutPaddingBlockVar]: '0', [layoutPaddingInlineVar]: '1rem' },

  display: 'flex',
  flexDirection: 'column',

  minHeight: '100vh',
  backgroundColor: themeVars.colors.surface,

  '@media': {
    [themeVars.media.minWidth.md]: {
      vars: {
        [layoutPaddingInlineVar]: `max(${calc('100vw')
          .subtract(themeVars.layoutWidth)
          .divide(2)
          .toString()}, 2rem)`,
      },
    },
  },
});

globalStyle('#__next', { display: 'contents' });

globalStyle('main', {
  flexGrow: 1,
  padding: `${layoutPaddingBlockVar} ${layoutPaddingInlineVar}`,
});

globalStyle('section', {
  paddingBlock: '2.5rem',

  color: themeVars.colors.onSurface,
  textAlign: 'center',
});

// https://nextjs.org/docs/pages/api-reference/components/image#known-browser-bugs
globalStyle('img[loading="lazy"]', {
  '@supports': {
    '(font: -apple-system-body) and (-webkit-appearance: none)': {
      clipPath: 'inset(0.6px)',
    },
  },
});
