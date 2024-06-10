import { useEffect, useRef, useState, type FC } from 'react';

import { Icons } from '@/icons';
import { themeVars } from '@/styles/theme.css';
import { Transition } from '../Transition';
import * as styles from './styles.css';

const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// const subscribeToWindowScroll: Parameters<typeof useSyncExternalStore>[0] = (
//   onStoreChange,
// ) => {
//   window.addEventListener('scroll', onStoreChange);
//   return () => window.removeEventListener('scroll', onStoreChange);
// };

export const Top: FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let prevScroll = window.scrollY;

    const listener = () => {
      const newScroll = window.scrollY;
      const { clientHeight } = document.documentElement;

      if (Math.abs(newScroll - prevScroll) > 10)
        setIsVisible(newScroll < prevScroll && newScroll > clientHeight);

      prevScroll = newScroll;
    };

    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return (
    <Transition in={isVisible} nodeRef={ref} mountOnEnter unmountOnExit>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        className={styles.topClass}
      >
        <Icons.ArrowUp color={themeVars.colors.onTertiaryContainer} />
      </button>
    </Transition>
  );
};
