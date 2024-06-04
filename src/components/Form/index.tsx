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
  empty,
  union,
} from 'superstruct';
import { isEmail } from 'validator';

import { useBetterForm } from '@/hooks/useBetterForm';
import { Icons } from '@/icons';
import { TextField } from '../TextField';
import { Button } from '../buttons/Button';
import * as styles from './styles.css';

import type { FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';

const formStruct = object({
  name: trimmed(string()),

  email: union([
    empty(string()),
    refine(nonempty(trimmed(string())), 'email', (str) => isEmail(str)),
  ]),

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

export const Form: FC<{ last?: boolean }> = ({ last }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useBetterForm({
    struct: formStruct,
    defaultValues: { name: '', phone: '' },
  });

  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    reset();
  };

  return (
    <section className={styles.formClass}>
      <h4 className={styles.formTitleClass}>
        {last ?
          'Напишите нам, и мы посчитаем для вас сами!'
        : <>
            <span>
              Получите <b>экспресс-расчёт</b> стоимости
            </span>

            <span className={styles.formSubtitleClass}>в течение 15 минут</span>
          </>
        }
      </h4>

      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(submitHandler)}
        className={styles.formFormClass}
      >
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

        <TextField
          label="Ваш e-mail"
          type="email"
          inputMode="email"
          autoComplete="email"
          error={!!errors.email}
          leadingIcon={Icons.Envelope}
          {...register('email')}
        />

        <Button
          type="submit"
          variant="filled"
          loading={isSubmitting}
          className={styles.formFormSubmitButtonClass}
        >
          Получить экспресс-расчёт
        </Button>
      </form>
    </section>
  );
};
