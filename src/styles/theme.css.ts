import { createGlobalTheme, createTheme } from '@vanilla-extract/css';

const lightThemeVars = createGlobalTheme(':root', {
  lh: '1.15em',
  layoutWidth: '77.5rem',

  colors: {
    primary: '#006A6A',
    surfaceTint: '#006A6A',
    onPrimary: '#FFFFFF',
    primaryContainer: '#9CF1F0',
    onPrimaryContainer: '#002020',
    secondary: '#4A6363',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#CCE8E7',
    onSecondaryContainer: '#051F1F',
    tertiary: '#4B607C',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#D3E4FF',
    onTertiaryContainer: '#041C35',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    background: '#F4FBFA',
    onBackground: '#161D1D',
    surface: '#F4FBFA',
    onSurface: '#161D1D',
    surfaceVariant: '#DAE5E4',
    onSurfaceVariant: '#3F4948',
    outline: '#6F7979',
    outlineVariant: '#BEC9C8',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#2B3231',
    inverseOnSurface: '#ECF2F1',
    inversePrimary: '#80D5D4',
    primaryFixed: '#9CF1F0',
    onPrimaryFixed: '#002020',
    primaryFixedDim: '#80D5D4',
    onPrimaryFixedVariant: '#004F4F',
    secondaryFixed: '#CCE8E7',
    onSecondaryFixed: '#051F1F',
    secondaryFixedDim: '#B0CCCB',
    onSecondaryFixedVariant: '#324B4B',
    tertiaryFixed: '#D3E4FF',
    onTertiaryFixed: '#041C35',
    tertiaryFixedDim: '#B3C8E8',
    onTertiaryFixedVariant: '#334863',
    surfaceDim: '#D5DBDA',
    surfaceBright: '#F4FBFA',
    surfaceContainerLowest: '#FFFFFF',
    surfaceContainerLow: '#EFF5F4',
    surfaceContainer: '#E9EFEE',
    surfaceContainerHigh: '#E3E9E9',
    surfaceContainerHighest: '#DDE4E3',
  },
});

export const darkThemeClass = createTheme(lightThemeVars, {
  ...lightThemeVars,

  colors: {
    primary: '#80D5D4',
    surfaceTint: '#80D5D4',
    onPrimary: '#003737',
    primaryContainer: '#004F4F',
    onPrimaryContainer: '#9CF1F0',
    secondary: '#B0CCCB',
    onSecondary: '#1B3534',
    secondaryContainer: '#324B4B',
    onSecondaryContainer: '#CCE8E7',
    tertiary: '#B3C8E8',
    onTertiary: '#1C314B',
    tertiaryContainer: '#334863',
    onTertiaryContainer: '#D3E4FF',
    error: '#FFB4AB',
    onError: '#690005',
    errorContainer: '#93000A',
    onErrorContainer: '#FFDAD6',
    background: '#0E1514',
    onBackground: '#DDE4E3',
    surface: '#0E1514',
    onSurface: '#DDE4E3',
    surfaceVariant: '#3F4948',
    onSurfaceVariant: '#BEC9C8',
    outline: '#889392',
    outlineVariant: '#3F4948',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#DDE4E3',
    inverseOnSurface: '#2B3231',
    inversePrimary: '#006A6A',
    primaryFixed: '#9CF1F0',
    onPrimaryFixed: '#002020',
    primaryFixedDim: '#80D5D4',
    onPrimaryFixedVariant: '#004F4F',
    secondaryFixed: '#CCE8E7',
    onSecondaryFixed: '#051F1F',
    secondaryFixedDim: '#B0CCCB',
    onSecondaryFixedVariant: '#324B4B',
    tertiaryFixed: '#D3E4FF',
    onTertiaryFixed: '#041C35',
    tertiaryFixedDim: '#B3C8E8',
    onTertiaryFixedVariant: '#334863',
    surfaceDim: '#0E1514',
    surfaceBright: '#343A3A',
    surfaceContainerLowest: '#090F0F',
    surfaceContainerLow: '#161D1D',
    surfaceContainer: '#1A2121',
    surfaceContainerHigh: '#252B2B',
    surfaceContainerHighest: '#2F3636',
  },
});

// //* =============================== Breakpoints ================================

const breakpointValues = { sm: 600, md: 905, lg: 1240, xl: 1440 } as const;
type BreakpointValues = typeof breakpointValues;

type MediaMinWidth = {
  [K in keyof BreakpointValues]: `(min-width: ${BreakpointValues[K]}px)`;
};

const mediaMinWidth = Object.fromEntries(
  Object.entries(breakpointValues).map(([key, value]) => [
    key,
    `(min-width: ${value}px)`,
  ]),
) as MediaMinWidth;

type MediaMaxWidth = {
  [K in keyof MediaMinWidth]: `not all and ${MediaMinWidth[K]}`;
};

const mediaMaxWidth = Object.fromEntries(
  Object.entries(mediaMinWidth).map(([key, query]) => [
    key,
    `not all and ${query}`,
  ]),
) as MediaMaxWidth;

export const themeVars = {
  ...lightThemeVars,

  media: {
    minWidth: mediaMinWidth,
    maxWidth: mediaMaxWidth,
    prefersReducedMotion: '(prefers-reduced-motion: reduce)',
  },
};
