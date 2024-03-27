import Image from 'next/image';

import { Select } from '@/components/Select';
import { TextField } from '@/components/TextField';
import { Button } from '@/components/buttons/Button';
import { themeVars } from '@/styles/theme.css';
import { displayTypographyClass } from '@/styles/typography.css';
import circleArrows from './circle-arrows.svg';
import circleCenter from './circle-center.svg';
import circleShadow from './circle-right-shadow.svg';
import img from './img.png';
import * as styles from './styles.css';

import type { FC } from 'react';

export const FifthSection: FC = () => (
  <section id="calculator">
    <h3 className={displayTypographyClass.sm}>Расчёт экономии</h3>

    <form className={styles.fifthSectionFormClass}>
      <div className={styles.fifthSectionFormMainFieldsetClass}>
        <TextField
          label="Тепловая нагрузка (мощность)"
          tooltip="Количество тепла проходящее с первой на вторую сторону теплообменника. Может заполняться в кВт или ккал/ч. Узнать можно в ТУ или другой проектной документации."
        />

        <Select
          label="Ед. изм."
          options={['кКал/ч', 'гКал/ч', 'Вт', 'кВт', 'мВт']}
        />
      </div>

      <div className={styles.fifthSectionFormSideFieldsetContainerClass}>
        <p className={styles.fifthSectionFormSideFieldsetLegendClass}>
          Греющая сторона
        </p>

        <div
          className={styles.fifthSectionFormSideFieldsetClass}
          style={{ borderColor: themeVars.colors.error }}
        >
          <Select
            label="Что-то"
            options={['Вода', 'Этиленгликоль', 'Пропиленгликоль', 'Пар']}
          />

          <TextField
            label="Расход"
            tooltip="Параметр пропускной способности теплообменного оборудования. Заполнение не обязательно, если указана тепловая нагрузка."
          />

          <Select label="Ед. изм." options={['т/ч', 'л/мин', 'м3/ч', 'кг/с']} />

          <TextField
            label="Температура на входе"
            tooltip="Температура горячего контура на входе теплообменника. Данные для заполнения могут быть в технических условиях или по договору с теплоснабжающей компанией."
          />

          <TextField
            label="Температура на выходе"
            tooltip="Температура горячего контура на выходе теплообменника. Данные для заполнения могут быть в технических условиях или по договору с теплоснабжающей компанией."
          />

          <TextField
            label="Потери давления"
            tooltip="Параметр допустимого снижения давления при прохождении жидкости по контуру. Измеряется в Метрах водного столба."
          />
        </div>
      </div>

      <div className={styles.fifthSectionImgContainerClass}>
        <Image
          alt=""
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={circleCenter}
          width={360}
          quality={100}
        />

        <Image
          alt=""
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={circleShadow}
          width={378}
          height={378}
          quality={378}
          style={{ left: '32.5%', translate: '0 -50%' }}
        />

        <Image
          alt=""
          src={img}
          width={286.2}
          height={286.2}
          quality={100}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />

        <Image
          alt=""
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={circleArrows}
          width={405}
          quality={100}
        />
      </div>

      <div className={styles.fifthSectionFormSideFieldsetContainerClass}>
        <p className={styles.fifthSectionFormSideFieldsetLegendClass}>
          Нагреваемая сторона
        </p>

        <div className={styles.fifthSectionFormSideFieldsetClass}>
          <Select
            label="Что-то"
            options={['Вода', 'Этиленгликоль', 'Пропиленгликоль', 'Пар']}
          />

          <TextField
            label="Расход"
            tooltip="Параметр пропускной способности теплообменного оборудования. Заполнение не обязательно, если указана тепловая нагрузка."
          />

          <Select label="Ед. изм." options={['т/ч', 'л/мин', 'м3/ч', 'кг/с']} />

          <TextField
            label="Температура на входе"
            tooltip="Температура горячего контура на входе теплообменника. Данные для заполнения могут быть в технических условиях или по договору с теплоснабжающей компанией."
          />

          <TextField
            label="Температура на выходе"
            tooltip="Температура горячего контура на выходе теплообменника. Данные для заполнения могут быть в технических условиях или по договору с теплоснабжающей компанией."
          />

          <TextField
            label="Потери давления"
            tooltip="Параметр допустимого снижения давления при прохождении жидкости по контуру. Измеряется в Метрах водного столба."
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="filled"
        className={styles.fifthSectionFormSubmitBtnClass}
      >
        Рассчитать
      </Button>
    </form>
  </section>
);
