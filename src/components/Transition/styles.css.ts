import { styleVariants } from '@vanilla-extract/css';

import type { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';

export const transitionClassNames = styleVariants<
  Record<keyof CSSTransitionClassNames, Record<string, never>>
>({
  appear: {},
  appearActive: {},
  appearDone: {},
  enter: {},
  enterActive: {},
  enterDone: {},
  exit: {},
  exitActive: {},
  exitDone: {},
});
