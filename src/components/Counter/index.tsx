import { type FC } from 'react';

import { headlineTypographyClass } from '@/styles/typography.css';
import * as styles from './styles.css';

export const Counter: FC = () => (
  <section className={styles.counterClass}>
    <p className={headlineTypographyClass.lg}>
      С 2010 года по сегодняшний день наши партнеры сэкономили уже более{' '}
      <b>13&nbsp;009&nbsp;836&nbsp;151 рублей</b>
    </p>
  </section>
);
