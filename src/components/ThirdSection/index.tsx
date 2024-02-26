import { icons } from '@/icons';
import { themeVars } from '@/styles/theme.css';
import {
  bodyTypographyClass,
  displayTypographyClass,
  titleTypographyClass,
} from '@/styles/typography.css';
import { Button } from '../Button';
import * as styles from './styles.css';

import type { FC } from 'react';

const listData = [
  {
    Icon: icons.PiggyBank,
    title: 'Экономия',
    text: 'За счет установки погодозависимой автоматики, высокоэффективного, качественного оборудования и счетчиков расхода тепла, экономия на энергоресурсах составляет до 300%!',
  },
  {
    Icon: icons.Crosshair,
    title: 'Автоматизация',
    text: 'Автоматика следит за температурой внутри и снаружи помещения, и в зависимости от потребности в тепле, самостоятельно регулирует работу системы для обеспечения заданного режима работы !',
  },
  {
    Icon: icons.ChartLineDown,
    title: 'Снижение затрат',
    text: 'За счет установки качественного, энергоэффективного оборудования, рассчитанного на долгий срок службы, Вы окупаете затраты уже в первый год установки ИТП ! Каждый последующий период идет чистая экономия.',
  },
  {
    Icon: icons.Coffee,
    title: 'Комфорт жильцов',
    text: 'Наши ИТП комплектуются оборудованием, позволяющим избежать лишнего шума и вибраций. Погодозависимая автоматика дает возможность задавать наиболее комфортные режимы работы, как в зимний, так и в летний периоды.',
  },
  {
    Icon: icons.Lock,
    title: 'Надёжность',
    text: 'Оборудование, входящее в состав ИТП, при правильной эксплуатации, рассчитано на долгий срок службы. Жильцы никогда не останутся без тепла или горячей воды.',
  },
  {
    Icon: icons.Handyman,
    title: 'Удобство обслуживания',
    text: 'Конструкция ИТП выполняется индивидуально в зависимости от размеров помещения. В тепловом пункте имеются все необходимые порты и задвижки, чтобы обслуживание было легким и удобным.',
  },
];

export const ThirdSection: FC = () => (
  <section className={styles.thirdSectionClass}>
    <h3 className={displayTypographyClass.sm}>
      Преимущества
      <span className={styles.thirdSectionSubtitleClass}>
        современного автоматизированного ИТП
      </span>
    </h3>

    <ul className={styles.thirdSectionListClass}>
      {listData.map(({ Icon, title, text }) => (
        <li key={title} className={styles.thirdSectionListItemClass}>
          <div className={styles.thirdSectionListItemContentClass}>
            <Icon size="6rem" />
            {title}
          </div>

          <div className={styles.thirdSectionListItemHoverContentClass}>
            <p className={titleTypographyClass.lg}>{title}</p>
            <p className={bodyTypographyClass.md}>{text}</p>
          </div>
        </li>
      ))}
    </ul>

    <Button
      size="lg"
      variant="filled"
      icon={icons.Headset}
      className={styles.thirdSectionButtonClass}
    >
      Заказать консультацию
    </Button>
  </section>
);
