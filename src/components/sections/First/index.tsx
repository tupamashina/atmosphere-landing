import Image from 'next/image';
import { useRef, type FC } from 'react';

import { IconButton } from '@/components/buttons/IconButton';
import { Icons } from '@/icons';
import { displayTypographyClass } from '@/styles/typography.css';
import bg from './bg.webp';
import * as styles from './styles.css';

const listData = [
  {
    icon: Icons.HandCoins,
    text: 'Быстрая окупаемость проекта, сэкономленное «пускается в оборот»',
  },
  {
    icon: Icons.MapPin,
    text: 'Сборка из отечественных комплектующих от проверенных поставщиков',
  },
  {
    icon: Icons.SettingsRemote,
    text: 'Дистанционное управление, удобное и практичное',
  },
  { icon: Icons.BeerStein, text: 'Индивидуальный подход к каждому заказчику' },
];

export const FirstSection: FC = () => {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className={styles.firstSectionClass}>
      <Image
        fill
        alt=""
        src={bg}
        sizes="100vw"
        placeholder="blur"
        className={styles.firstSectionBackgroundImageClass}
      />

      <h2 className={displayTypographyClass.md}>Что мы предлагаем?</h2>

      <p className={styles.firstSectionSubtitleClass}>
        Потребление тепловых энергоресурсов 1 корпусом промышленного предприятия
        исчисляется миллионами миллиардов.{' '}
        <span>Мы утверждаем, что эту сумму можно сократить на 27%</span>
      </p>

      <ul className={styles.firstSectionListClass}>
        {listData.map(({ text, icon: Icon }) => (
          <li key={text} className={styles.firstSectionListItemClass}>
            <Icon aria-hidden />
            {text}
          </li>
        ))}
      </ul>

      <IconButton
        icon={Icons.ChevronDown}
        variant="outlined"
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
