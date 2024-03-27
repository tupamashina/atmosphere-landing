import { globalStyle, style } from '@vanilla-extract/css';

import { darkThemeClass, themeVars } from '@/styles/theme.css';
import { titleTypographyClass } from '@/styles/typography.css';

export const fourthSectionSubtitleClass = style([
  titleTypographyClass.lg,
  { display: 'block', marginBlock: '0.25rem 2rem', fontWeight: 400 },
]);

export const fourthSectionListClass = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',

  listStyle: 'none',

  '@media': {
    [themeVars.media.minWidth.sm]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))',
    },

    [themeVars.media.minWidth.md]: {
      gridTemplateColumns: 'repeat(3, 16rem)',
      justifyContent: 'center',
    },
  },
});

export const fourthSectionListItemClass = style({
  position: 'relative',

  border: `2px solid`,
  borderRadius: '1rem',

  '::after': {
    content: '',
    display: 'block',
    paddingBottom: '100%',
  },
});

export const fourthSectionListItemContentClass = style([
  titleTypographyClass.lg,
  {
    position: 'absolute',
    inset: 0,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '1rem',

    transition: 'opacity 175ms',
  },
]);

globalStyle(`${fourthSectionListItemContentClass} > svg`, {
  width: '4rem',
  height: '4rem',
  marginBottom: '0.25rem',

  '@media': {
    [themeVars.media.minWidth.sm]: { width: '5rem', height: '5rem' },
  },
});

export const fourthSectionListItemHoverContentClass = style([
  fourthSectionListItemContentClass,
  { opacity: 0 },
]);

globalStyle(`${fourthSectionListItemHoverContentClass} > p`, {
  '@media': {
    [themeVars.media.minWidth.sm]: {
      vars: { [themeVars.lh]: '1.25rem' },
      fontSize: '1rem',
    },
  },
});

globalStyle(`${fourthSectionListItemHoverContentClass} > p:first-of-type`, {
  marginBottom: '0.125rem',
  fontWeight: 900,
});

globalStyle(
  `${fourthSectionListItemClass}:hover > ${fourthSectionListItemContentClass}`,
  { opacity: 0 },
);

globalStyle(
  `${fourthSectionListItemClass}:hover > ${fourthSectionListItemHoverContentClass}`,
  { opacity: 1 },
);

export const fourthSectionConsultationBtnClass = style([
  darkThemeClass,
  { margin: '2rem auto 0' },
]);
