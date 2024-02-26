import { globalStyle, style } from '@vanilla-extract/css';

import { themeVars } from '@/styles/theme.css';
import { headlineTypographyClass } from '@/styles/typography.css';

export const thirdSectionClass = style({
  padding: '3rem 0',
  textAlign: 'center',
  color: themeVars.colors.onSurface,
});

export const thirdSectionSubtitleClass = style([
  headlineTypographyClass.md,
  { display: 'block', fontWeight: 500 },
]);

export const thirdSectionListClass = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 16.5rem)',
  gridAutoRows: '16.5rem',
  justifyContent: 'center',
  gap: '1.5rem',
  marginTop: '2rem',
});

export const thirdSectionListItemClass = style({
  position: 'relative',
  borderRadius: '1rem',
  border: `2px solid currentColor`,
  listStyleType: 'none',
  '::before': { content: '\\200B', position: 'absolute' },
});

const baseListItemContextClass = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  transition: 'opacity 200ms',
});

export const thirdSectionListItemContentClass = style([
  headlineTypographyClass.sm,
  baseListItemContextClass,
  {},
]);

globalStyle(`${thirdSectionListItemContentClass} > svg`, {
  marginBottom: '0.5rem',
});

export const thirdSectionListItemHoverContentClass = style([
  baseListItemContextClass,
  {
    position: 'absolute',
    inset: 0,
    padding: '1rem',
    borderRadius: 'inherit',
    backgroundColor: `rgba(${themeVars.colors.rgbValues.onSurface}, 0.08)`,
    opacity: 0,
  },
]);

globalStyle(`${thirdSectionListItemHoverContentClass} > p:first-of-type`, {
  marginBottom: '0.25rem',
  fontWeight: 500,
});

globalStyle(
  `${thirdSectionListItemClass}:hover > ${thirdSectionListItemContentClass}`,
  { opacity: 0 },
);

globalStyle(
  `${thirdSectionListItemClass}:hover > ${thirdSectionListItemHoverContentClass}`,
  { opacity: 1 },
);

export const thirdSectionButtonClass = style({ margin: '2rem auto 0' });
