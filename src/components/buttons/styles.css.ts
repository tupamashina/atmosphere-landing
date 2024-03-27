import { createVar, style } from '@vanilla-extract/css';

export const FOCUSED_OR_PRESSED_BUTTON_SELECTOR =
  '&:is(:focus-visible, :active)';

// export const DISABLED_BUTTON_SELECTOR =
//   '&:is(:disabled, [aria-disabled="true"])';

export const buttonStateLayerColorVar = createVar();

export const baseButtonClass = style({
  vars: { [buttonStateLayerColorVar]: 'inherit' },

  position: 'relative',
  zIndex: 0,

  cursor: 'pointer',
  userSelect: 'none',
  border: 'none',

  transitionDuration: '200ms',
  transitionProperty: 'color, background, outline, box-shadow',

  '::before': {
    content: '',

    position: 'absolute',
    inset: 0,
    zIndex: -1,

    color: buttonStateLayerColorVar,
    backgroundColor: 'currentColor',
    borderRadius: 'inherit',
    opacity: 0,

    transitionDuration: 'inherit',
    transitionProperty: 'opacity',
  },

  selectors: {
    // [DISABLED_BUTTON_SELECTOR]: { cursor: 'default' },

    '&:hover::before': { opacity: 0.08 },
    [`${FOCUSED_OR_PRESSED_BUTTON_SELECTOR}::before`]: { opacity: 0.12 },
    // [`${DISABLED_BUTTON_SELECTOR}::before`]: { opacity: 0 },
  },
});
