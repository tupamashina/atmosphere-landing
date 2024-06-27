/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */

import { maskitoPhoneOptionsGenerator } from '@maskito/phone';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  Root as DialogRoot,
  DialogTitle,
} from '@radix-ui/react-dialog';
import { parsePhoneNumberWithError } from 'libphonenumber-js';
import metadata from 'libphonenumber-js/metadata.max.json';
import { useRef, useState, useSyncExternalStore, type FC } from 'react';
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
import { headlineTypographyClass } from '@/styles/typography.css';
import {
  headerDialogOverlayClass,
  headerDialogContentClass,
  headerDialogDescriptionClass,
  headerDialogCloseButtonClass,
} from '../Header/styles.css';
import { TextField } from '../TextField';
import { Transition } from '../Transition';
import { Button } from '../buttons/Button';
import * as styles from './styles.css';

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

// eslint-disable-next-line unicorn/consistent-function-scoping
const noopSubscribe = () => () => {};

export const Form: FC<{ last?: boolean }> = ({ last }) => {
  const dialogOverlayRef = useRef<HTMLDivElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isMounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

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
    setIsDialogOpen(true);
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

      <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {isMounted && (
          <Transition
            in={isDialogOpen}
            nodeRef={dialogOverlayRef}
            mountOnEnter
            unmountOnExit
            onExited={reset}
          >
            <DialogPortal forceMount>
              <DialogOverlay
                ref={dialogOverlayRef}
                className={headerDialogOverlayClass}
              >
                <DialogContent className={headerDialogContentClass}>
                  <DialogTitle className={headlineTypographyClass.sm}>
                    Заявка зарегистрирована
                  </DialogTitle>

                  <DialogDescription className={headerDialogDescriptionClass}>
                    Спасибо, Ваша заявка отправлена. Ожидайте, скоро мы с Вами
                    свяжемся
                  </DialogDescription>

                  <DialogClose asChild>
                    <Button
                      variant="text"
                      className={headerDialogCloseButtonClass}
                    >
                      Закрыть
                    </Button>
                  </DialogClose>
                </DialogContent>
              </DialogOverlay>
            </DialogPortal>
          </Transition>
        )}
      </DialogRoot>
    </section>
  );
};
