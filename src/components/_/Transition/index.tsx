import { memo, type ReactNode, type RefObject } from 'react';
import { CSSTransition } from 'react-transition-group';

import { transitionClassNames } from './styles.css';

import type {
  EndHandler,
  TransitionProps,
  TransitionStatus,
} from 'react-transition-group/Transition';
import type { Simplify } from 'type-fest';

const transitionEndEvents = [
  'animationcancel',
  'animationend',
  'transitioncancel',
  'transitionend',
] satisfies Array<keyof HTMLElementEventMap>;

export type Props = Simplify<
  Pick<
    TransitionProps<HTMLElement>,
    | 'mountOnEnter'
    | 'unmountOnExit'
    | 'onEnter'
    | 'onEntering'
    | 'onEntered'
    | 'onExit'
    | 'onExiting'
    | 'onExited'
  > & {
    in: boolean;
    nodeRef: RefObject<HTMLElement>;
    children: ReactNode | ((status: TransitionStatus) => ReactNode);
    exit?: boolean;
    enter?: boolean;
    appear?: boolean;
  }
>;

export const Transition = memo<Props>(({ nodeRef, ...props }) => {
  const addEndListener: EndHandler<HTMLElement> = (done) =>
    transitionEndEvents.forEach((type) =>
      nodeRef.current?.addEventListener(
        type,
        ({ target, currentTarget }) => {
          if (target === currentTarget) done();
        },
        { once: true },
      ),
    );

  return (
    <CSSTransition
      nodeRef={nodeRef}
      addEndListener={addEndListener}
      classNames={transitionClassNames}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
});

Transition.displayName = 'Transition';
