import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/styles/theme.css';
import { baseButtonClass, buttonStateLayerColorVar } from '../styles.css';

export const iconButtonRecipe = recipe({
  base: [
    baseButtonClass,
    {
      padding: '0.5rem',
      borderRadius: '50%',

      '::after': {
        content: '',
        position: 'absolute',
        inset: '-0.25rem',
      },
    },
  ],

  variants: {
    variant: {
      standard: {
        color: themeVars.colors.onSurfaceVariant,
        backgroundColor: 'transparent',

        // selectors: {
        //   [DISABLED_BUTTON_SELECTOR]: { color: themeVars.colors.icon40 },
        // },
      },

      filled: {
        vars: { [buttonStateLayerColorVar]: 'black' },

        color: themeVars.colors.onPrimary,
        backgroundColor: themeVars.colors.primary,

        // selectors: {
        //   [DISABLED_BUTTON_SELECTOR]: {
        //     backgroundColor: themeVars.colors.accent40,
        //   },
        // },
      },

      outlined: {
        color: themeVars.colors.onSurfaceVariant,
        backgroundColor: 'transparent',
        outline: `1px solid ${themeVars.colors.outline}`,

        // selectors: {
        //   [DISABLED_BUTTON_SELECTOR]: {
        //     outlineColor: 'currentColor',
        //     color: themeVars.colors.icon40,
        //   },
        // },
      },
    },
  },
});

export const iconButtonIconClass = style({});
