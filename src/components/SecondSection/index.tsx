import Image from 'next/image';

import { displayTypographyClass } from '@/styles/typography.css';
import mining from './mining.jpg';
import * as styles from './styles.css';

import type { FC } from 'react';

export const SecondSection: FC = () => (
  <section className={styles.secondSectionClass}>
    <h3 className={displayTypographyClass.sm}>Забойная картинка</h3>
    <p className={styles.secondSectionTextClass}>Или чё тут надо, я не понял</p>

    <a
      href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B1%D0%BE%D0%B9"
      target="_blank"
    >
      <Image alt="" src={mining} width={800} />
    </a>
  </section>
);
