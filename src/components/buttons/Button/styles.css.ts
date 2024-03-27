import { createVar, keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/styles/theme.css';
import { bodyTypographyClass } from '@/styles/typography.css';
import {
  FOCUSED_OR_PRESSED_BUTTON_SELECTOR,
  baseButtonClass,
  buttonStateLayerColorVar,
} from '../styles.css';

export const buttonPaddingBlockVar = createVar();
export const buttonPaddingInlineVar = createVar();

export const buttonRecipe = recipe({
  base: [
    baseButtonClass,
    bodyTypographyClass.lg,
    {
      vars: {
        [buttonPaddingBlockVar]: '0.75rem',
        [buttonPaddingInlineVar]: '1.5rem',
      },

      display: 'flex',
      justifyContent: 'center',

      paddingBlock: buttonPaddingBlockVar,
      paddingInline: buttonPaddingInlineVar,

      fontWeight: 500,
      borderRadius: '1.5rem',
    },
  ],

  variants: {
    variant: {
      filled: {
        vars: { [buttonStateLayerColorVar]: 'black' },

        color: themeVars.colors.onPrimary,
        backgroundColor: themeVars.colors.primary,

        selectors: {
          [`&:hover:not(${FOCUSED_OR_PRESSED_BUTTON_SELECTOR})`]: {
            boxShadow: '0 1px 2px 0 #0000004d, 1px 1px 3px 1px #00000026',
          },
        },
      },

      text: {
        color: themeVars.colors.primary,
        backgroundColor: 'transparent',
      },
    },
  },
});

export const buttonIconRecipe = recipe({
  base: { flexShrink: 0 },

  variants: {
    position: {
      start: {
        order: -1,
        marginInlineEnd: '0.5rem',
        marginInlineStart: calc.multiply(buttonPaddingInlineVar, -0.25),
      },

      end: {
        order: 1,
        marginInlineStart: '0.5rem',
        marginInlineEnd: calc.multiply(buttonPaddingInlineVar, -0.25),
      },
    },
  },
});

export const buttonSpinnerClass = style({
  position: 'relative',
  width: themeVars.lh,
  height: themeVars.lh,
});

const rotateKeyframes = keyframes({
  from: { transform: 'rotate(0turn)' },
  to: { transform: 'rotate(1turn)' },
});

export const buttonSpinnerPartClass = style({
  position: 'absolute',
  inset: '0.125rem',

  borderRadius: '50%',
  border: '2px solid transparent',
  borderTopColor: 'currentColor',
  animation: `${rotateKeyframes} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,

  selectors: {
    '&:nth-child(1)': { animationDelay: '300ms' },
    '&:nth-child(2)': { animationDelay: '150ms' },
  },
});
