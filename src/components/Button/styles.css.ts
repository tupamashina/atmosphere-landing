import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { themeVars } from '@/styles/theme.css';
import { lhVar } from '@/styles/typography.css';

const bgColorVar = createVar();

const childrenColorVar = createVar();
const childrenOpacityVar = createVar();

const stateLayerColorVar = createVar();
const stateLayerOpacityVar = createVar();

export const buttonClass = style({
  vars: { [stateLayerOpacityVar]: '0', [stateLayerColorVar]: childrenColorVar },

  position: 'relative',
  display: 'flex',
  padding: '0.75rem 1.5rem',

  border: 'none',
  borderRadius: calc(lhVar).add('1.5rem').divide(2).toString(),
  backgroundColor: bgColorVar,
  color: childrenColorVar,

  cursor: 'pointer',
  transition: 'background-color 200ms',

  selectors: {
    '&:hover': { vars: { [stateLayerOpacityVar]: '0.08' } },

    '&:is(:focus-visible, :active)': {
      vars: { [stateLayerOpacityVar]: '0.12' },
    },

    '&:disabled': {
      vars: {
        [bgColorVar]: 'none',
        [childrenOpacityVar]: '0.38',
        [childrenColorVar]: themeVars.colors.onSurface,
      },

      cursor: 'default',
    },
  },
});

export const buttonVariantClass = styleVariants({
  filled: {
    vars: {
      [bgColorVar]: themeVars.colors.primary,
      [childrenColorVar]: themeVars.colors.onPrimary,
    },

    ':disabled': {
      vars: {
        [stateLayerOpacityVar]: '0.12',
        [stateLayerColorVar]: themeVars.colors.onSurface,
      },
    },
  },

  outlined: {
    vars: { [childrenColorVar]: themeVars.colors.primary },
    outline: `1px solid ${themeVars.colors.outline}`,

    ':disabled': {
      vars: { [stateLayerOpacityVar]: '0' },
      outlineColor: `rgba(${themeVars.colors.rgbValues.onSurface}, 0.12)`,
    },
  },

  text: {
    vars: { [childrenColorVar]: themeVars.colors.primary },
    padding: '0.75rem 1rem',
    ':disabled': { vars: { [stateLayerOpacityVar]: '0' } },
  },

  elevated: {
    vars: {
      [bgColorVar]: themeVars.colors.surfaceContainerLow,
      [childrenColorVar]: themeVars.colors.primary,
    },

    boxShadow:
      '0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',

    transitionProperty: 'box-shadow, background-color',

    ':hover': {
      boxShadow:
        '0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15)',
    },

    ':disabled': {
      vars: {
        [stateLayerOpacityVar]: '0.12',
        [stateLayerColorVar]: themeVars.colors.onSurface,
      },

      boxShadow: 'none',
    },
  },

  tonal: {
    vars: {
      [bgColorVar]: themeVars.colors.secondaryContainer,
      [childrenColorVar]: themeVars.colors.onSecondaryContainer,
    },

    transitionProperty: 'box-shadow, background-color',

    ':hover': {
      boxShadow:
        '0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
    },

    ':disabled': {
      vars: {
        [stateLayerOpacityVar]: '0.12',
        [stateLayerColorVar]: themeVars.colors.onSurface,
      },

      boxShadow: 'none',
    },
  },
});

export const buttonStateLayerClass = style({
  position: 'absolute',
  inset: 0,

  borderRadius: 'inherit',
  opacity: stateLayerOpacityVar,
  backgroundColor: stateLayerColorVar,

  transitionDuration: '200ms',
  transitionProperty: 'opacity, background-color',
});

const baseChildrenClass = style({
  opacity: childrenOpacityVar,
  transitionDuration: '200ms',
  transitionProperty: 'color, opacity',
});

export const buttonIconClass = style([
  baseChildrenClass,
  { marginRight: '0.5rem', width: lhVar, height: lhVar },
]);

export const buttonTextClass = style([baseChildrenClass]);
