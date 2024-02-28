import Image from 'next/image';

import {
  displayTypographyClass,
  headlineTypographyClass,
} from '@/styles/typography.css';
import { Button } from '../Button';
import { Select } from '../Select';
import { TextField } from '../TextField';
import circleArrows from './circle-arrows.svg';
import circleCenter from './circle-center.svg';
import circleShadow from './circle-right-shadow.svg';
import img from './pto-img-1.png';
import * as styles from './styles.css';

import type { FC } from 'react';

// 1.63441251

export const FourthSection: FC = () => (
  <section className={styles.fourthSectionClass}>
    <h3
      className={displayTypographyClass.sm}
      style={{ gridColumn: '1 / -1', marginBottom: '2rem' }}
    >
      Расчёт теплообменника
    </h3>

    <div
      style={{
        gridColumn: '1 / -1',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TextField
        label="Тепловая нагрузка (мощность)"
        tooltip="Количество тепла проходящее с первой на вторую сторону теплообменника. Может заполняться в кВт или ккал/ч. Узнать можно в ТУ или другой проектной документации."
        style={{ width: '16rem' }}
      />

      <Select
        label="Единица измерения"
        options={['кКал/ч', 'гКал/ч', 'Вт', 'кВт', 'мВт']}
        style={{ width: '10.5rem', marginLeft: '1rem' }}
      />
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.25fr 1fr',
        gap: '1.25rem',
        height: 'fit-content',
      }}
    >
      <p
        className={headlineTypographyClass.sm}
        style={{
          gridColumn: '1 / -1',
          marginBottom: '0.25rem',
          textAlign: 'left',
        }}
      >
        Греющая сторона
      </p>

      <Select
        label="Что-то"
        options={['Вода', 'Этиленгликоль', 'Пропиленгликоль', 'Пар']}
        style={{ gridColumn: '1 / -1' }}
      />

      <TextField
        label="Расход"
        tooltip="Параметр пропускной способности теплообменного оборудования. Заполнение не обязательно, если указана тепловая нагрузка."
      />

      <Select label="Ед. изм." options={['т/ч', 'л/мин', 'м3/ч', 'кг/с']} />

      <TextField
        label="Температура на входе"
        tooltip="Температура горячего контура на входе теплообменника. Данные для заполнения могут быть в технических условиях или по договору с теплоснабжающей компанией."
        style={{ gridColumn: '1 / -1' }}
      />

      <TextField
        label="Температура на выходе"
        tooltip="Температура горячего контура на выходе теплообменника. Данные для заполнения могут быть в технических условиях или по договору с теплоснабжающей компанией."
        style={{ gridColumn: '1 / -1' }}
      />

      <TextField
        label="Потери давления"
        tooltip="Параметр допустимого снижения давления при прохождении жидкости по контуру. Измеряется в Метрах водного столба."
        style={{ gridColumn: '1 / -1' }}
      />
    </div>

    <div style={{ position: 'relative' }}>
      <Image
        alt=""
        src={circleCenter}
        width={400}
        quality={100}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <Image
        alt=""
        src={circleShadow}
        width={420}
        height={420}
        quality={440}
        style={{
          position: 'absolute',
          top: '50%',
          left: '32.5%',
          transform: 'translateY(-50%)',
        }}
      />

      <Image
        alt=""
        src={img}
        width={336}
        quality={100}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <Image
        alt=""
        src={circleArrows}
        width={450}
        quality={440}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.25fr 1fr',
        gap: '1.25rem',
      }}
    >
      <p
        className={headlineTypographyClass.sm}
        style={{
          gridColumn: '1 / -1',
          marginBottom: '0.25rem',
          textAlign: 'left',
        }}
      >
        Нагреваемая сторона
      </p>

      <Select
        label="Что-то"
        options={['Вода', 'Этиленгликоль', 'Пропиленгликоль', 'Пар']}
        style={{ gridColumn: '1 / -1' }}
      />

      <TextField
        label="Расход"
        tooltip="Параметр пропускной способности теплообменного оборудования. Заполнение не обязательно, если указана тепловая нагрузка."
      />

      <Select label="Ед. изм." options={['т/ч', 'л/мин', 'м3/ч', 'кг/с']} />

      <TextField
        label="Температура на входе"
        tooltip="Температура горячего контура на входе теплообменника. Данные для заполнения могут быть в технических условиях или по договору с теплоснабжающей компанией."
        style={{ gridColumn: '1 / -1' }}
      />

      <TextField
        label="Температура на выходе"
        tooltip="Температура горячего контура на выходе теплообменника. Данные для заполнения могут быть в технических условиях или по договору с теплоснабжающей компанией."
        style={{ gridColumn: '1 / -1' }}
      />

      <TextField
        label="Потери давления"
        tooltip="Параметр допустимого снижения давления при прохождении жидкости по контуру. Измеряется в Метрах водного столба."
        style={{ gridColumn: '1 / -1' }}
      />

      <Button
        variant="filled"
        style={{
          gridColumn: '1 / -1',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Рассчитать
      </Button>
    </div>
  </section>
);
