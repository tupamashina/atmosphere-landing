import Image from 'next/image';

import { displayTypographyClass } from '@/styles/typography.css';
import scheme from './scheme.png';
import * as styles from './styles.css';

import type { FC } from 'react';

export const FifthSection: FC = () => (
  <section id="scheme" className={styles.fifthSectionClass}>
    <h3 className={displayTypographyClass.sm}>КАК ЭТО РАБОТАЕТ?</h3>
    <p className={styles.fifthSectionTextClass}>Проиллюстрировано на схеме</p>
    <Image alt="" src={scheme} />
  </section>
);
