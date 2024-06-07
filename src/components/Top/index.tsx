import { Icons } from '@/icons';
import * as styles from './styles.css';

import type { FC } from 'react';

const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const Top: FC = () => {
  const a = 1;

  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button type="button" onClick={handleClick} className={styles.topClass}>
      <Icons.ArrowUp />
    </button>
  );
};
