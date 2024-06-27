/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { maskitoPhoneOptionsGenerator } from '@maskito/phone';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  Root as DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog';
import { parsePhoneNumberWithError } from 'libphonenumber-js';
import metadata from 'libphonenumber-js/metadata.max.json';
import { type FC, useRef, useState, useSyncExternalStore } from 'react';
import {
  type Infer,
  empty,
  nonempty,
  object,
  refine,
  string,
  trimmed,
  union,
} from 'superstruct';
import isEmail from 'validator/lib/isEmail';

import { useBetterForm } from '@/hooks/useBetterForm';
import { Icons } from '@/icons';
import { themeVars } from '@/styles/theme.css';
import { headlineTypographyClass } from '@/styles/typography.css';
import { TextField } from '../TextField';
import { Transition } from '../Transition';
import { Button } from '../buttons/Button';
import { IconButton } from '../buttons/IconButton';
import * as styles from './styles.css';

import type { SubmitHandler } from 'react-hook-form';

// eslint-disable-next-line unicorn/consistent-function-scoping
const noopSubscribe = () => () => {};

const phoneFieldMask = maskitoPhoneOptionsGenerator({
  metadata,
  countryIsoCode: 'RU',
});

const formStruct = object({
  name: trimmed(string()),

  email: union([
    empty(string()),
    refine(nonempty(trimmed(string())), 'email', (str) => isEmail(str)),
  ]),

  phone: refine(nonempty(trimmed(string())), 'phone', (str) => {
    try {
      return parsePhoneNumberWithError(str, 'RU').isValid();
    } catch (error) {
      return error instanceof Error ? error.message : false;
    }
  }),
});

type FormValues = Infer<typeof formStruct>;

// const subscribeToWindowScroll: Parameters<typeof useSyncExternalStore>[0] = (
//   onStoreChange,
// ) => {
//   window.addEventListener('scroll', onStoreChange);
//   return () => window.removeEventListener('scroll', onStoreChange);
// };

export const Header: FC = () => {
  // const isScrolled = useSyncExternalStore(
  //   subscribeToWindowScroll,
  //   () => window.scrollY > 0,
  //   () => false,
  // );

  const isMounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  const dialogOverlayRef = useRef<HTMLDivElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useBetterForm({
    struct: formStruct,
    defaultValues: { email: '', name: '', phone: '' },
  });

  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) setError('root', {});
  };

  return (
    <header className={styles.headerClass}>
      <p className={styles.headerSloganClass}>
        Поможем снизить затраты на тепловую энергию на 27%
      </p>

      <h1 className={styles.headerTitleClass}>
        Атмосфера - энергия эффективности
        <Icons.Logo
          aria-hidden
          width="20.5rem"
          height="3rem"
          color={themeVars.colors.onSurface}
        />
      </h1>

      <div className={styles.headerContactInfoClass}>
        <div>
          <a href="tel:+78482781008" className={styles.contactLinkClass.tel}>
            +7 (8482) 78-10-08
          </a>

          <a
            href="mailto:zakaz@atm-itp.ru"
            className={styles.contactLinkClass.mail}
          >
            zakaz@atm-itp.ru
          </a>
        </div>

        <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <IconButton
              title="Оставить заявку"
              variant="filled"
              icon={Icons.PhoneIncoming}
            />
          </DialogTrigger>

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
                  className={styles.headerDialogOverlayClass}
                >
                  <DialogContent className={styles.headerDialogContentClass}>
                    <DialogTitle className={headlineTypographyClass.sm}>
                      {isSubmitSuccessful ?
                        'Заявка зарегистрирована'
                      : 'Оставить заявку'}
                    </DialogTitle>

                    {isSubmitSuccessful ?
                      <>
                        <DialogDescription
                          className={styles.headerDialogDescriptionClass}
                        >
                          Спасибо, Ваша заявка отправлена. Ожидайте, скоро мы с
                          Вами свяжемся
                        </DialogDescription>

                        <DialogClose asChild>
                          <Button
                            variant="text"
                            className={styles.headerDialogCloseButtonClass}
                          >
                            Закрыть
                          </Button>
                        </DialogClose>
                      </>
                    : <form
                        // eslint-disable-next-line @typescript-eslint/no-misused-promises
                        onSubmit={handleSubmit(submitHandler)}
                        className={styles.headerDialogFormClass}
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

                        {!!errors.root && (
                          <p className={styles.headerDialogErrorMessageClass}>
                            <Icons.WarningCircleFill size="1.25rem" />
                            Произошла ошибка. Пожалуйста, попробуйте ещё раз
                          </p>
                        )}

                        <Button
                          type="submit"
                          variant="filled"
                          loading={isSubmitting}
                        >
                          Отправить
                        </Button>

                        <p className={styles.headerDialogTermsClass}>
                          Нажимая кнопку «Отправить», вы принимаете условия{' '}
                          <a href="#">Пользовательского соглашения</a> и даёте{' '}
                          <a href="#">
                            Согласие на обработку персональных данных
                          </a>
                        </p>
                      </form>
                    }
                  </DialogContent>
                </DialogOverlay>
              </DialogPortal>
            </Transition>
          )}
        </DialogRoot>
      </div>
    </header>
  );
};
