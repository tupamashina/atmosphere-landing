import { style } from '@vanilla-extract/css';

import { themeVars } from '@/styles/theme.css';
import {
  baseButtonClass,
  buttonStateLayerColorVar,
} from '../buttons/styles.css';

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
    },
  },
]);
