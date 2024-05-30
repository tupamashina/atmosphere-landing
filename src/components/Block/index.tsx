import { useEffect, useState, type FC } from 'react';

import { headlineTypographyClass } from '@/styles/typography.css';
import * as styles from './styles.css';

export const Block: FC = () => {
  const [value, setValue] = useState(2_898_203_982);

  useEffect(() => {
    let prevTs = Date.now();

    const loop = () => {
      const newTs = Date.now();

      if (newTs - prevTs >= 25) {
        prevTs = newTs;
        setValue((prevValue) => prevValue + 1);
      }

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, []);

  return (
    <section className={styles.blockClass}>
      <p className={headlineTypographyClass.lg}>
        С 2010 года по сегодняшний день наши партнеры сэкономили уже более{' '}
        <b>{value.toLocaleString('ru-RU')}</b> руб.
      </p>
    </section>
  );
};
