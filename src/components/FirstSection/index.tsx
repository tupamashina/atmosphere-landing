import Image from 'next/image';
import { FC, useRef } from 'react';

import { icons } from '@/icons';
import { displayTypographyClass } from '@/styles/typography.css';
import { IconButton } from '../IconButton';
import bg from './bg.jpg';
import * as styles from './styles.css';

const listData = [
  {
    Icon: icons.LocationOn,
    text: 'Nesciunt eius libero natus iste error amet, eaque cupiditate at',
  },
  {
    Icon: icons.Factory,
    text: 'Deleniti dolorem, minima doloribus sit architecto voluptas velit ipsa quia',
  },
  {
    Icon: icons.ElectricCar,
    text: 'Nihil, sint beatae quasi odio repudiandae, culpa ratione minus nisi voluptas',
  },
  {
    Icon: icons.Manufacturing,
    text: 'Doloribus, quos odit quod commodi, quae quaerat illo optio',
  },
];

export const FirstSection: FC = () => {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className={styles.firstSectionClass}>
      <Image
        fill
        alt=""
        src={bg}
        sizes="100vw, (min-width: 1920px) 1920px"
        className={styles.firstSectionBgImgClass}
      />

      <h2 className={displayTypographyClass.md}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        est?
      </h2>

      <p className={styles.firstSectionSubtitleClass}>
        Ratione corrupti placeat corporis modi alias asperiores porro velit
        mollitia.
      </p>

      <ul className={styles.firstSectionListClass}>
        {listData.map(({ text, Icon }) => (
          <li key={text} className={styles.firstSectionListItemClass}>
            <Icon aria-hidden size="3.5rem" />
            {text}
          </li>
        ))}
      </ul>

      <IconButton
        title=""
        variant="outlined"
        icon={icons.ChevronDown}
        onClick={() =>
          window.scrollTo({
            behavior: 'smooth',
            top: ref.current?.offsetHeight,
          })
        }
      />
    </section>
  );
};
