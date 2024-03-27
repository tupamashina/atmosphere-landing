import { globalStyle, style } from '@vanilla-extract/css';

import { layoutPaddingInlineVar } from '@/styles/global.css';
import { themeVars } from '@/styles/theme.css';
import { bodyTypographyClass } from '@/styles/typography.css';

export const footerClass = style([
  bodyTypographyClass.lg,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: `2rem ${layoutPaddingInlineVar}`,

    textAlign: 'center',
    backgroundColor: themeVars.colors.surfaceContainer,

    '@media': {
      [themeVars.media.minWidth.lg]: {
        display: 'grid',
        gridTemplateColumns: 'max-content 1fr max-content',
        gap: '4rem',
        alignItems: 'normal',

        textAlign: 'left',
      },
    },
  },
]);

globalStyle(`${footerClass} > div:first-child`, { marginBottom: '1rem' });

globalStyle(`${footerClass} > div:first-child > svg`, {
  marginBottom: '0.5rem',
});

globalStyle(`${footerClass} > div:nth-child(2) > div`, {
  '@media': {
    [themeVars.media.minWidth.lg]: { display: 'flex', gap: '1rem' },
  },
});

globalStyle(`${footerClass} > div:nth-child(2) a`, {
  display: 'block',
  marginTop: '0.25rem',
  color: 'inherit',
});

globalStyle(`${footerClass} > div:last-child`, {
  marginTop: '1rem',
  '@media': { [themeVars.media.minWidth.lg]: { marginTop: 0 } },
});

globalStyle(`${footerClass} > div:last-child span`, {
  display: 'flex',
  gap: '0.375rem',
  alignItems: 'center',
});

globalStyle(`${footerClass} > div:last-child a`, { color: 'inherit' });
