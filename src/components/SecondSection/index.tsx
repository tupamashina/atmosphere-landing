import Image from 'next/image';

import { displayTypographyClass } from '@/styles/typography.css';
import * as styles from './styles.css';
import p1 from './р1.png';

import type { FC } from 'react';

export const SecondSection: FC = () => (
  <section className={styles.secondSectionClass}>
    <h3 className={displayTypographyClass.sm}>Какое оборудование</h3>
    <p className={styles.secondSectionTextClass}>Входит в состав ИТП?</p>

    <div>
      <Image alt="" src={p1} height={736} quality={100} />
    </div>
  </section>
);
