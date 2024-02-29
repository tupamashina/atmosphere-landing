import Image from 'next/image';

import { icons } from '@/icons';
import { displayTypographyClass } from '@/styles/typography.css';
import { Button } from '../Button';
import * as styles from './styles.css';
import p1 from './р1.png';

import type { FC } from 'react';

export const SecondSection: FC = () => (
  <section className={styles.secondSectionClass}>
    <h3 className={displayTypographyClass.sm}>Какое оборудование</h3>
    <p className={styles.secondSectionTextClass}>Входит в состав ИТП?</p>

    <div style={{ position: 'relative' }}>
      <Image alt="" src={p1} width={1240} quality={100} />

      <Button
        variant="filled"
        icon={icons.Calculator}
        onClick={() =>
          document
            .querySelector('#calculator')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        style={{ position: 'absolute', left: 430, bottom: 200 }}
      >
        Как это поможет сэкономить?
      </Button>
    </div>
  </section>
);
