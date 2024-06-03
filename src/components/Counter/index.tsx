import { type FC } from 'react';

import { headlineTypographyClass } from '@/styles/typography.css';
import * as styles from './styles.css';

export const Counter: FC = () => (
  <section className={styles.counterClass}>
    <p className={headlineTypographyClass.lg}>
      С 2010 года по сегодняшний день наши партнеры сэкономили уже более{' '}
      <b>2&nbsp;898&nbsp;203&nbsp;982 рублей</b>
    </p>
  </section>
);
