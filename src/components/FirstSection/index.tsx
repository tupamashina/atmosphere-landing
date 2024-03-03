import Image from 'next/image';
import { FC, useRef } from 'react';

import { icons } from '@/icons';
import { themeVars } from '@/styles/theme.css';
import { displayTypographyClass } from '@/styles/typography.css';
import { IconButton } from '../IconButton';
import bg from './bg.jpg';
import * as styles from './styles.css';

const listData = [
  {
    Icon: icons.LocationOn,
    text: 'Только Российские комплектующие',
  },
  {
    Icon: icons.Factory,
    text: 'Для пищевой, нефтехимической и холодильной отраслей',
  },
  {
    Icon: icons.ElectricCar,
    text: 'Эффективны как TESLA за счет витых тонкостенных трубок',
  },
  {
    Icon: icons.PrecisionManufacturing,
    text: 'Роботизированное производство теплообменников АН',
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

      <h2 className={displayTypographyClass.md}>Что мы предлагаем?</h2>

      <p className={styles.firstSectionSubtitleClass}>
        Потребление тепловых энергоресурсов 1 корпусом промышленного предприятия
        исчисляется миллионами миллиардов.{' '}
        <span style={{ color: themeVars.colors.primary }}>
          Мы утверждаем, что эту сумму можно сократить на 27%
        </span>
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
