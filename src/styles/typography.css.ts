import { styleVariants, type StyleRule } from '@vanilla-extract/css';

import { themeVars } from './theme.css';

//* ================================== Label ===================================

const labelLargeStyles: StyleRule = {
  vars: { [themeVars.lh]: '1.25rem' },
  fontSize: '0.875rem',
  fontWeight: 500,
  letterSpacing: '0.00625rem',
};

const labelMediumStyles: StyleRule = {
  vars: { [themeVars.lh]: '1rem' },
  fontSize: '0.75rem',
  fontWeight: 500,
  letterSpacing: '0.03125rem',
};

const labelSmallStyles: StyleRule = {
  vars: { [themeVars.lh]: '1rem' },
  fontSize: '0.6875rem',
  fontWeight: 500,
  letterSpacing: '0.03125rem',
};

export const labelTypographyClass = styleVariants({
  lg: labelLargeStyles,
  md: labelMediumStyles,
  sm: labelSmallStyles,
});

//* =================================== Body ===================================

const bodyLargeStyles: StyleRule = {
  vars: { [themeVars.lh]: '1.5rem' },
  fontSize: '1rem',
  letterSpacing: '0.03125rem',
};

const bodyMediumStyles: StyleRule = {
  vars: { [themeVars.lh]: '1.25rem' },
  fontSize: '0.875rem',
  letterSpacing: '0.015625rem',
};

const bodySmallStyles: StyleRule = {
  vars: { [themeVars.lh]: '1rem' },
  fontSize: '0.75rem',
  letterSpacing: '0.025rem',
};

export const bodyTypographyClass = styleVariants({
  lg: bodyLargeStyles,
  md: bodyMediumStyles,
  sm: bodySmallStyles,
});

//* ================================== Title ===================================

const titleLargeStyles: StyleRule = {
  vars: { [themeVars.lh]: '1.75rem' },
  fontSize: '1.375rem',
};

const titleMediumStyles: StyleRule = {
  vars: { [themeVars.lh]: '1.5rem' },
  fontSize: '1.125rem',
  fontWeight: 500,
  letterSpacing: '0.009375rem',
};

const titleSmallStyles: StyleRule = {
  vars: { [themeVars.lh]: '1.5rem' },
  fontSize: '1rem',
  fontWeight: 500,
  letterSpacing: '0.00625rem',
};

export const titleTypographyClass = styleVariants({
  lg: {
    ...titleLargeStyles,
    '@media': { [themeVars.media.maxWidth.sm]: titleMediumStyles },
  },

  md: {
    ...titleMediumStyles,
    '@media': { [themeVars.media.maxWidth.sm]: titleSmallStyles },
  },

  sm: {
    ...titleSmallStyles,
    '@media': { [themeVars.media.maxWidth.sm]: bodyLargeStyles },
  },
});

//* ================================= Headline =================================

const headlineLargeStyles: StyleRule = {
  vars: { [themeVars.lh]: '2.5rem' },
  fontSize: '2rem',
};

const headlineMediumStyles: StyleRule = {
  vars: { [themeVars.lh]: '2.25rem' },
  fontSize: '1.75rem',
};

const headlineSmallStyles: StyleRule = {
  vars: { [themeVars.lh]: '2rem' },
  fontSize: '1.5rem',
};

export const headlineTypographyClass = styleVariants({
  lg: {
    ...headlineLargeStyles,
    '@media': { [themeVars.media.maxWidth.sm]: headlineMediumStyles },
  },

  md: {
    ...headlineMediumStyles,
    '@media': { [themeVars.media.maxWidth.sm]: headlineSmallStyles },
  },

  sm: {
    ...headlineSmallStyles,
    '@media': { [themeVars.media.maxWidth.sm]: titleLargeStyles },
  },
});

//* ================================= Display ==================================

const displayLargeStyles: StyleRule = {
  vars: { [themeVars.lh]: '4rem' },
  fontSize: '3.5625rem',
  letterSpacing: '-0.015625rem',
};

const displayMediumStyles: StyleRule = {
  vars: { [themeVars.lh]: '3.25rem' },
  fontSize: '2.8125rem',
};

const displaySmallStyles: StyleRule = {
  vars: { [themeVars.lh]: '2.75rem' },
  fontSize: '2.25rem',
};

export const displayTypographyClass = styleVariants({
  lg: {
    ...displayLargeStyles,
    '@media': { [themeVars.media.maxWidth.sm]: displayMediumStyles },
  },

  md: {
    ...displayMediumStyles,
    '@media': { [themeVars.media.maxWidth.sm]: displaySmallStyles },
  },

  sm: {
    ...displaySmallStyles,
    '@media': { [themeVars.media.maxWidth.sm]: headlineLargeStyles },
  },
});

// export const labelTypographyClass = styleVariants({
//   lg: {
//     vars: { [themeVars.lh]: '1.25rem' },
//     fontSize: '0.875rem',
//     fontWeight: 500,
//     letterSpacing: '0.00625rem',
//   },

//   md: {
//     vars: { [themeVars.lh]: '1rem' },
//     fontSize: '0.75rem',
//     fontWeight: 500,
//     letterSpacing: '0.03125rem',
//   },

//   sm: {
//     vars: { [themeVars.lh]: '1rem' },
//     fontSize: '0.6875rem',
//     fontWeight: 500,
//     letterSpacing: '0.03125rem',
//   },
// });

// export const bodyTypographyClass = styleVariants({
//   lg: {
//     vars: { [themeVars.lh]: '1.5rem' },
//     fontSize: '1rem',
//     letterSpacing: '0.03125rem',
//   },

//   md: {
//     vars: { [themeVars.lh]: '1.25rem' },
//     fontSize: '0.875rem',
//     letterSpacing: '0.015625rem',
//   },

//   sm: {
//     vars: { [themeVars.lh]: '1rem' },
//     fontSize: '0.75rem',
//     letterSpacing: '0.025rem',
//   },
// });
