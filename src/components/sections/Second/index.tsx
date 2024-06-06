import Image from 'next/image';

import { Button } from '@/components/buttons/Button';
import { IS_DEV, IS_PROD } from '@/const';
import { Icons } from '@/icons';
import { darkThemeClass } from '@/styles/theme.css';
import { displayTypographyClass } from '@/styles/typography.css';
import img from './img.webp';
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
        draggable={IS_DEV}
        placeholder="blur"
        className={styles.secondSectionImgClass}
        onContextMenu={(event) => IS_PROD && event.preventDefault()}
        sizes="(min-width: 1304px) 1240px, 100vw"
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
