import { createGlobalTheme } from '@vanilla-extract/css';

import type { Simplify } from 'type-fest';

const globalTheme = createGlobalTheme(':root', {
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
} as const);

const breakpointValues = { xl: 1440, lg: 1240, md: 905, sm: 600 } as const;
type BreakpointValues = typeof breakpointValues;

type Breakpoints = {
  [K in keyof BreakpointValues]: `(min-width: ${BreakpointValues[K]}px)`;
};

const breakpoints = Object.fromEntries(
  Object.entries(breakpointValues).map(([key, value]) => [
    key,
    `(min-width: ${value}px)`,
  ]),
) as Simplify<Breakpoints>;

type ReversedBreakpoints = {
  [K in keyof Breakpoints]: `not all and ${Breakpoints[K]}`;
};

const reversedBreakpoints = Object.fromEntries(
  Object.entries(breakpoints).map(([key, mediaQuery]) => [
    key,
    `not all and ${mediaQuery}`,
  ]),
) as Simplify<ReversedBreakpoints>;

export const themeVars = {
  ...globalTheme,
  breakpoints,
  reversedBreakpoints,
} as const;
