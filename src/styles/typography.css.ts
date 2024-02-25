import { createVar, style, styleVariants } from '@vanilla-extract/css';

export const lhVar = createVar();

const baseTypographyClass = style({
  vars: { [lhVar]: '1.15rem' },
  lineHeight: lhVar,
});

export const displayTypographyClass = styleVariants({
  lg: [
    baseTypographyClass,
    {
      vars: { [lhVar]: '4rem' },
      fontSize: '3.5rem',
      letterSpacing: '-0.015625rem',
    },
  ],

  md: [
    baseTypographyClass,
    { vars: { [lhVar]: '3.25rem' }, fontSize: '2.75rem' },
  ],

  sm: [
    baseTypographyClass,
    { vars: { [lhVar]: '2.75rem' }, fontSize: '2.25rem' },
  ],
});

export const headlineTypographyClass = styleVariants({
  lg: [baseTypographyClass, { vars: { [lhVar]: '2.5rem' }, fontSize: '2rem' }],

  md: [
    baseTypographyClass,
    { vars: { [lhVar]: '2.25rem' }, fontSize: '1.75rem' },
  ],

  sm: [baseTypographyClass, { vars: { [lhVar]: '2rem' }, fontSize: '1.5rem' }],
});

export const titleTypographyClass = styleVariants({
  lg: [
    baseTypographyClass,
    { vars: { [lhVar]: '1.75rem' }, fontSize: '1.375rem' },
  ],

  md: [
    baseTypographyClass,
    {
      vars: { [lhVar]: '1.5rem' },
      fontWeight: 500,
      fontSize: '1rem',
      letterSpacing: '0.009375rem',
    },
  ],

  sm: [
    baseTypographyClass,
    {
      vars: { [lhVar]: '1.25rem' },
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.00625rem',
    },
  ],
});

export const labelTypographyClass = styleVariants({
  lg: [
    baseTypographyClass,
    {
      vars: { [lhVar]: '1.25rem' },
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.00625rem',
    },
  ],

  md: [
    baseTypographyClass,
    {
      vars: { [lhVar]: '1rem' },
      fontWeight: 500,
      fontSize: '0.75rem',
      letterSpacing: '0.03125rem',
    },
  ],

  sm: [
    baseTypographyClass,
    {
      vars: { [lhVar]: '1rem' },
      fontWeight: 500,
      fontSize: '0.625rem',
      letterSpacing: '0.03125rem',
    },
  ],
});

export const bodyTypographyClass = styleVariants({
  lg: [
    baseTypographyClass,
    {
      vars: { [lhVar]: '1.5rem' },
      fontSize: '1rem',
      letterSpacing: '0.03125rem',
    },
  ],

  md: [
    baseTypographyClass,
    {
      vars: { [lhVar]: '1.25rem' },
      fontSize: '0.875rem',
      letterSpacing: '0.015625rem',
    },
  ],

  sm: [
    baseTypographyClass,
    {
      vars: { [lhVar]: '1rem' },
      fontSize: '0.75rem',
      letterSpacing: '0.025rem',
    },
  ],
});
