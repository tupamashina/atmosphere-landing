import { createVar, style, styleVariants } from '@vanilla-extract/css';

import { themeVars } from '@/styles/theme.css';

const bgColorVar = createVar();
const iconColorVar = createVar();
const iconOpacityVar = createVar();
const stateLayerColorVar = createVar();
const stateLayerOpacityVar = createVar();

const baseIconButtonClass = style({
  vars: { [stateLayerOpacityVar]: '0', [stateLayerColorVar]: iconColorVar },

  position: 'relative',
  padding: '0.75rem',

  border: 'none',
  borderRadius: '50%',
  backgroundColor: bgColorVar,

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
        [iconOpacityVar]: '0.38',
        [iconColorVar]: themeVars.colors.onSurface,
      },

      cursor: 'default',
    },
  },
});

const baseFilledIconButtonClass = style([
  baseIconButtonClass,
  {
    ':disabled': {
      vars: {
        [stateLayerOpacityVar]: '0.12',
        [stateLayerColorVar]: themeVars.colors.onSurface,
      },
    },
  },
]);

const baseOutlinedIconButtonClass = style([
  baseIconButtonClass,
  {
    vars: { [iconColorVar]: themeVars.colors.onSurfaceVariant },
    ':disabled': { vars: { [stateLayerOpacityVar]: '0' } },
  },
]);

export const iconButtonClass = styleVariants({
  standard: [baseOutlinedIconButtonClass],

  filled: [
    baseFilledIconButtonClass,
    {
      vars: {
        [bgColorVar]: themeVars.colors.primary,
        [iconColorVar]: themeVars.colors.onPrimary,
      },
    },
  ],

  tonal: [
    baseFilledIconButtonClass,
    {
      vars: {
        [bgColorVar]: themeVars.colors.secondaryContainer,
        [iconColorVar]: themeVars.colors.onSecondaryContainer,
      },
    },
  ],

  outlined: [
    baseOutlinedIconButtonClass,
    {
      outline: `1px solid ${themeVars.colors.outline}`,
      transitionProperty: 'outline-color, background-color',

      ':disabled': {
        outlineColor: `rgba(${themeVars.colors.rgbValues.onSurface}, 0.12)`,
      },
    },
  ],
});

export const iconButtonStateLayerClass = style({
  position: 'absolute',
  inset: 0,

  borderRadius: 'inherit',
  opacity: stateLayerOpacityVar,
  backgroundColor: stateLayerColorVar,

  transitionDuration: '200ms',
  transitionProperty: 'opacity, background-color',
});

export const iconButtonIconClass = style({
  position: 'relative',
  zIndex: 1,

  color: iconColorVar,
  opacity: iconOpacityVar,
  transitionDuration: '200ms',
  transitionProperty: 'opacity, color',
});
