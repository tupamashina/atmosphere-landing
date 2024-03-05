import Image from 'next/image';

import { icons } from '@/icons';
import { darkThemeClass } from '@/styles/theme.css';
import { displayTypographyClass } from '@/styles/typography.css';
import { Button } from '../Button';
import p1 from './p2.png';
import * as styles from './styles.css';

import type { FC } from 'react';

export const SecondSection: FC = () => (
  <section className={styles.secondSectionClass}>
    <h3 className={displayTypographyClass.sm}>Какое оборудование</h3>
    <p className={styles.secondSectionTextClass}>Входит в состав ИТП?</p>

    <div style={{ position: 'relative' }}>
      <Image alt="" src={p1} width={1240} quality={100} />

      <div
        style={{
          position: 'absolute',
          left: 300,
          bottom: 220,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, max-content)',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <Button
          size="sm"
          variant="filled"
          icon={icons.ArrowDown}
          onClick={() =>
            document
              .querySelector('#scheme')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          className={darkThemeClass}
        >
          Как можно сэкономить?
        </Button>

        <Button
          size="sm"
          variant="filled"
          icon={icons.Calculator}
          onClick={() =>
            document
              .querySelector('#calculator')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          className={darkThemeClass}
        >
          Сколько можно сэкономить?
        </Button>
      </div>
    </div>
  </section>
);
