import Image from 'next/image';

import { displayTypographyClass } from '@/styles/typography.css';
import scheme from './scheme.webp';
import * as styles from './styles.css';

import type { FC } from 'react';

export const ThirdSection: FC = () => (
  <section id="scheme">
    <h3 className={displayTypographyClass.sm}>КАК ЭТО РАБОТАЕТ?</h3>

    <p className={styles.thirdSectionSubtitleClass}>
      Проиллюстрировано на схеме
    </p>

    <Image
      alt=""
      src={scheme}
      quality={100}
      placeholder="blur"
      className={styles.thirdSectionSchemeClass}
    />
  </section>
);
