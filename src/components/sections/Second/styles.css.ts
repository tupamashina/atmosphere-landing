import { globalStyle, style } from '@vanilla-extract/css';

import { titleTypographyClass } from '@/styles/typography.css';

export const secondSectionSubtitleClass = style([
  titleTypographyClass.lg,
  { display: 'block', marginBlock: '0.25rem 2.5rem', fontWeight: 400 },
]);

export const secondSectionImgContainerClass = style({
  position: 'relative',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
});

export const secondSectionImgClass = style({
  gridColumn: '1 / -1',
  width: '100%',
  height: 'auto',
});

globalStyle(`${secondSectionImgContainerClass} > button`, {
  gridColumn: '1 / -1',

  '@media': {
    '(min-width: 700px)': { gridColumn: 'auto' },
    '(min-width: 1000px)': { position: 'absolute', bottom: '15%' },
  },
});

globalStyle(`${secondSectionImgContainerClass} > button:first-of-type`, {
  '@media': { '(min-width: 1000px)': { left: '50%', translate: '0% 0' } },
});

globalStyle(`${secondSectionImgContainerClass} > button:last-of-type`, {
  '@media': { '(min-width: 1000px)': { right: '50%', translate: '-5% 0' } },
});
