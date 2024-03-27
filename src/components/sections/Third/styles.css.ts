import { style } from '@vanilla-extract/css';

import { titleTypographyClass } from '@/styles/typography.css';

export const thirdSectionSubtitleClass = style([
  titleTypographyClass.lg,
  { display: 'block', marginBlock: '0.25rem 2rem', fontWeight: 400 },
]);

export const thirdSectionSchemeClass = style({
  maxWidth: '100%',
  height: 'auto',
});
