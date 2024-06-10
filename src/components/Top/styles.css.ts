import { keyframes, style } from '@vanilla-extract/css';

import { themeVars } from '@/styles/theme.css';
import { transitionClassNames } from '../Transition/styles.css';
import {
  baseButtonClass,
  buttonStateLayerColorVar,
} from '../buttons/styles.css';

const showKeyframes = keyframes({
  from: { bottom: 0, transform: 'translateY(100%)' },
  to: { bottom: '1.5rem', transform: 'translateY(0)' },
});

const hideKeyframes = keyframes({
  from: { bottom: '1.5rem', transform: 'translateY(0)' },
  to: { bottom: 0, transform: 'translateY(100%)' },
});

export const topClass = style([
  baseButtonClass,
  {
    vars: { [buttonStateLayerColorVar]: themeVars.colors.onTertiaryContainer },

    position: 'fixed',
    right: '1.5rem',
    bottom: '1.5rem',
    zIndex: 1,

    padding: '0.75rem',

    backgroundColor: themeVars.colors.tertiaryContainer,
    borderRadius: '0.75rem',

    boxShadow:
      '4px 4px 8px 3px rgba(0, 0, 0, 0.15), 0 1px 3px 0 rgba(0, 0, 0, 0.3)',

    selectors: {
      '&:hover:not(:is(:focus-visible, :active))': {
        boxShadow:
          '0 6px 10px 4px rgba(0, 0, 0, 0.15), 0 2px 3px 0 rgba(0, 0, 0, 0.3)',
      },

      [`&.${transitionClassNames.enter}`]: {
        animation: `${showKeyframes} 150ms ease-in`,
      },

      [`&.${transitionClassNames.exit}`]: {
        bottom: 0,

        transform: 'translateY(100%)',
        animation: `${hideKeyframes} 150ms ease-in-out`,
      },
    },
  },
]);
