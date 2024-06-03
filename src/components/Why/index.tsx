import { Icons } from '@/icons';
import { IconButton } from '../buttons/IconButton';
import * as styles from './styles.css';

import type { FC } from 'react';

export const Why: FC = () => (
  <section className={styles.whyClass}>
    Почему наши решения экономии лучше?
    <IconButton
      icon={Icons.ChevronDown}
      variant="outlined"
      onClick={() =>
        window.scrollTo({
          behavior: 'smooth',
          top: document.querySelector<HTMLElement>('#benefits')?.offsetTop,
        })
      }
    />
  </section>
);
