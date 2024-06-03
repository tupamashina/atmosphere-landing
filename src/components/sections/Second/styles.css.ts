import { globalStyle, style } from '@vanilla-extract/css';

import { themeVars } from '@/styles/theme.css';
import { titleTypographyClass } from '@/styles/typography.css';

export const secondSectionSubtitleClass = style([
  titleTypographyClass.lg,
  { display: 'block', marginBlock: '0.25rem 2.5rem', fontWeight: 400 },
]);

export const secondSectionImgContainerClass = style({
  position: 'relative',

  display: 'grid',
  gap: '1rem',
});

export const secondSectionImgClass = style({ width: '100%', height: 'auto' });

globalStyle(`${secondSectionImgContainerClass} > button`, {
  '@media': {
    [themeVars.media.minWidth.md]: { position: 'absolute', bottom: '1.5%' },
  },
});

globalStyle(`${secondSectionImgContainerClass} > button:first-of-type`, {
  left: 0,
});

globalStyle(`${secondSectionImgContainerClass} > button:last-of-type`, {
  right: 0,
});
