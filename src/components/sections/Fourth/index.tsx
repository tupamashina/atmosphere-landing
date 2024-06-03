import { Button } from '@/components/buttons/Button';
import { Icons } from '@/icons';
import {
  bodyTypographyClass,
  displayTypographyClass,
  labelTypographyClass,
} from '@/styles/typography.css';
import * as styles from './styles.css';

import type { FC } from 'react';

const listData = [
  {
    Icon: Icons.PiggyBank,
    title: 'Экономия',
    text: 'За счёт установки качественного оборудования и счетчиков расхода тепла, экономия составляет до 300%',
  },
  {
    Icon: Icons.Crosshair,
    title: 'Автоматизация',
    text: 'Автоматика следит за температурой, и в зависимости от потребности в тепле, самостоятельно регулирует работу системы',
  },
  {
    Icon: Icons.ChartLineDown,
    title: 'Снижение затрат',
    text: 'За счет установки качественного оборудования, Вы окупаете затраты уже в первый год! Далее идет чистая экономия',
  },
  {
    Icon: Icons.Engineering,
    title: 'Комфорт работников',
    text: 'Наши ИТП производят минимум шума. Автоматика позволяет задавать наиболее комфортные режимы работы',
  },
  {
    Icon: Icons.Lock,
    title: 'Надёжность',
    text: 'Оборудование, входящее в состав ИТП, рассчитано на долгий срок службы. Работяги всегда будут в тепле!',
  },
  {
    Icon: Icons.Handyman,
    title: 'Удобство обслуживания',
    text: 'Конструкция ИТП выполняется индивидуально, в нём имеется всё необходимое для лёгкого и удобного обслуживания',
  },
];

export const FourthSection: FC = () => (
  <section id="benefits">
    <h3 className={displayTypographyClass.sm}>
      Преимущества
      <span className={styles.fourthSectionSubtitleClass}>
        современного автоматизированного ИТП
      </span>
    </h3>

    <ul className={styles.fourthSectionListClass}>
      {listData.map(({ text, title, Icon }) => (
        <li key={title} className={styles.fourthSectionListItemClass}>
          <div className={styles.fourthSectionListItemContentClass}>
            <Icon aria-hidden />
            {title}
          </div>

          <div className={styles.fourthSectionListItemHoverContentClass}>
            <p className={labelTypographyClass.md}>{title}</p>
            <p className={bodyTypographyClass.sm}>{text}</p>
          </div>
        </li>
      ))}
    </ul>

    <Button
      variant="filled"
      icon={Icons.Headset}
      className={styles.fourthSectionConsultationBtnClass}
    >
      Заказать консультацию
    </Button>
  </section>
);
