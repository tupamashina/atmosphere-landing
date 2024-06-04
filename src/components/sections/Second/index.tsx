import Image from 'next/image';

import { Button } from '@/components/buttons/Button';
import { Icons } from '@/icons';
import { darkThemeClass } from '@/styles/theme.css';
import { displayTypographyClass } from '@/styles/typography.css';
import img from './img.png';
import * as styles from './styles.css';

import type { FC } from 'react';

export const SecondSection: FC = () => (
  <section>
    <h3 className={displayTypographyClass.sm}>
      Какое оборудование
      <span className={styles.secondSectionSubtitleClass}>
        входит в состав ИТП?
      </span>
    </h3>

    <div className={styles.secondSectionImgContainerClass}>
      <Image
        alt=""
        src={img}
        width={1240}
        quality={100}
        placeholder="blur"
        onContextMenu={(event) => event.preventDefault()}
        className={styles.secondSectionImgClass}
      />

      <Button
        variant="filled"
        icon={Icons.ArrowDown}
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
        variant="filled"
        icon={Icons.Calculator}
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
  </section>
);
