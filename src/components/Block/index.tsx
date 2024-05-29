/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */

import { maskitoPhoneOptionsGenerator } from '@maskito/phone';
import { parsePhoneNumberWithError } from 'libphonenumber-js';
import metadata from 'libphonenumber-js/metadata.max.json';
import {
  object,
  trimmed,
  string,
  refine,
  nonempty,
  type Infer,
} from 'superstruct';

import { useBetterForm } from '@/hooks/useBetterForm';
import { Icons } from '@/icons';
import { TextField } from '../TextField';
import { Button } from '../buttons/Button';
import * as styles from './styles.css';

import type { FC } from 'react';

const formStruct = object({
  name: trimmed(string()),

  phone: refine(nonempty(trimmed(string())), 'phone', (str) => {
    try {
      return parsePhoneNumberWithError(str, 'RU').isValid();
    } catch {
      return false;
    }
  }),
});

type FormValues = Infer<typeof formStruct>;

const phoneFieldMask = maskitoPhoneOptionsGenerator({
  metadata,
  countryIsoCode: 'RU',
});

export const Block: FC = () => {
  const {
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useBetterForm({
    struct: formStruct,
    defaultValues: { name: '', phone: '' },
  });

  return (
    <section className={styles.blockClass}>
      <h4 className={styles.blockTitleClass}>
        <span>
          Получите <b>экспресс-расчёт</b> стоимости
        </span>

        <span className={styles.blockSubtitleClass}>в течение 15 минут</span>
      </h4>

      <form className={styles.blockFormClass}>
        <TextField
          label="Ваше имя"
          type="text"
          autoCapitalize="words"
          autoComplete="name"
          leadingIcon={Icons.User}
          {...register('name')}
        />

        <TextField
          required
          label="Номер телефона"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          error={!!errors.phone}
          leadingIcon={Icons.Phone}
          maskOptions={phoneFieldMask}
          {...register('phone')}
        />

        <Button
          type="reset"
          variant="filled"
          className={styles.blockFormSubmitButtonClass}
        >
          Получить экспресс-расчёт
        </Button>

        <p className={styles.blockFormTermsClass}>
          Нажимая кнопку «Отправить», вы соглашаетесь с{' '}
          <a href="#">политикой обработки конфиденциальных данных</a>
        </p>
      </form>
    </section>
  );
};
