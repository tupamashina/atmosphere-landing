import Image from 'next/image';

import { displayTypographyClass } from '@/styles/typography.css';
import scheme from './scheme.png';
import * as styles from './styles.css';

import type { FC } from 'react';

export const FifthSection: FC = () => (
  <section className={styles.fifthSectionClass}>
    <h3 className={displayTypographyClass.sm}>Эксплуатация теплового пункта</h3>

    <p className={styles.fifthSectionTextClass}>
      Наиболее удобные условия эксплуатации тепловых пунктов проиллюстрированы
      на схеме
    </p>

    <Image alt="" src={scheme} />
  </section>
);
