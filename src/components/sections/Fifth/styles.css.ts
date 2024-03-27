import { globalStyle, style } from '@vanilla-extract/css';

import { darkThemeClass, themeVars } from '@/styles/theme.css';
import { headlineTypographyClass } from '@/styles/typography.css';

export const fifthSectionFormClass = style({
  display: 'grid',
  gap: '1.25rem',

  marginTop: '2rem',

  '@media': {
    [themeVars.media.minWidth.sm]: { gridTemplateColumns: 'repeat(6, 1fr)' },
    [themeVars.media.minWidth.lg]: { gridTemplateColumns: '1.25fr 2fr 1.25fr' },
  },
});

export const fifthSectionFormMainFieldsetClass = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: '1rem',

  '@media': {
    [themeVars.media.minWidth.sm]: { gridColumn: '2 / 6' },
    [themeVars.media.minWidth.lg]: { gridColumn: 2 },
  },
});

export const fifthSectionFormSideFieldsetContainerClass = style({
  '@media': {
    [themeVars.media.minWidth.sm]: { gridColumn: 'span 3' },

    [themeVars.media.minWidth.lg]: {
      gridColumn: 1,
      ':last-of-type': { gridColumn: 3 },
    },
  },
});

export const fifthSectionFormSideFieldsetClass = style({
  display: 'grid',
  gridTemplateColumns: '1.25fr 1fr',
  gap: '1rem',

  '@media': {
    [themeVars.media.maxWidth.sm]: {
      padding: '0.75rem 0.5rem 0.5rem',
      border: `1px solid ${themeVars.colors.inversePrimary}`,
    },
  },
});

export const fifthSectionFormSideFieldsetLegendClass = style([
  headlineTypographyClass.sm,
  { marginBottom: '1rem', fontWeight: 500, textAlign: 'left' },
]);

globalStyle(
  `${fifthSectionFormSideFieldsetClass} > *:not(:nth-child(2), :nth-child(3))`,
  { gridColumn: '1 / -1' },
);

export const fifthSectionFormSubmitBtnClass = style([
  darkThemeClass,
  {
    '@media': {
      [themeVars.media.minWidth.sm]: { gridColumn: '4 / 7' },
      [themeVars.media.minWidth.lg]: { gridColumn: 3 },
    },
  },
]);

export const fifthSectionImgContainerClass = style({
  position: 'relative',
  gridRow: 'span 2',

  '@media': { [themeVars.media.maxWidth.lg]: { display: 'none' } },
});

globalStyle(`${fifthSectionImgContainerClass} > img`, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  translate: '-50% -50%',
});
