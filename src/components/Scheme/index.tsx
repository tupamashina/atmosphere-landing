import { Icons } from '@/icons';
import * as styles from './styles.css';

import type { FC } from 'react';

const steps = [
  { text: 'Изучение теплоэнергетики предприятия', icon: Icons.MagnifyingGlass },

  {
    text: 'Расчёт индивидуального процента экономии предприятия',
    icon: Icons.Calculator,
  },

  {
    text: 'Согласования условий и сроков достижений экономии',
    icon: Icons.Handshake,
  },

  {
    text: 'Предпроектное, проектное, закупка, монтаж, пусковая наладка',
    icon: Icons.Gear,
  },

  {
    text: 'Техническое обслуживание и подтверждение экономии',
    icon: Icons.CheckSquare,
  },
];

export const Scheme: FC = () => (
  <section className={styles.schemeClass}>
    <p className={styles.schemeTitleClass}>Этапы работы</p>

    {steps.map(({ text, icon: Icon }, index, { length }) => (
      <div key={text} className={styles.schemeStepClass}>
        <span>{index + 1}</span>
        <Icon size="3.5rem" className={styles.schemeStepIconClass} />
        {text}

        {index !== length - 1 && (
          <Icons.ArrowRight
            size="2rem"
            className={styles.schemeStepArrowClass}
          />
        )}
      </div>
    ))}
  </section>
);
