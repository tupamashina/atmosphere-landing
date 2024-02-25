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
    title: 'Adipisicing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quae quas sequi adipisci expedita?',
  },
  {
    Icon: icons.Crosshair,
    title: 'Elit itaque',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum, tempora quibusdam eligendi accusamus ipsa optio praesentium magni blanditiis officiis laborum aspernatur iste architecto.',
  },
  {
    Icon: icons.ChartLineDown,
    title: 'Doloremque',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus amet ipsa cum illum alias, corrupti perspiciatis necessitatibus ut fuga dolor.',
  },
  {
    Icon: icons.Coffee,
    title: 'Sit autem',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti molestiae reprehenderit doloribus delectus veritatis adipisci cupiditate deserunt rem quia, fugiat alias dignissimos reiciendis, qui eaque.',
  },
  {
    Icon: icons.Lock,
    title: 'Incidunt',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quod aspernatur iure molestiae minus autem?',
  },
  {
    Icon: icons.Handyman,
    title: 'Incidunt ducimus',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta obcaecati ut vitae quo expedita nulla repellendus quas?',
  },
];

export const ThirdSection: FC = () => (
  <section className={styles.thirdSectionClass}>
    <h3 className={displayTypographyClass.sm}>
      Lorem ipsum
      <span className={styles.thirdSectionSubtitleClass}>
        dolor sit amet consectetur
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
      Lorem ipsum
    </Button>
  </section>
);
