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
import { FC, useRef, useState, useSyncExternalStore } from 'react';
import { SubmitHandler } from 'react-hook-form';
import {
  Infer,
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
import { icons } from '@/icons';
import { themeVars } from '@/styles/theme.css';
import { headlineTypographyClass } from '@/styles/typography.css';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { TextField } from '../_/TextField';
import { Transition } from '../_/Transition';
import * as styles from './styles.css';

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
        <icons.Logo
          aria-hidden
          width="20.5rem"
          height="3rem"
          color={themeVars.colors.onSurface}
        />
      </h1>

      <div className={styles.headerContactInfoClass}>
        <div>
          <a href="tel:84956929595" className={styles.contactLinkClass.tel}>
            8 4956 92-95-95
          </a>

          <a href="mailto:duma@gov.ru" className={styles.contactLinkClass.mail}>
            duma@gov.ru
          </a>
        </div>

        <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <IconButton
              title="Оставить заявку"
              variant="filled"
              icon={icons.PhoneIncoming}
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
                          Спасибо! Скоро с вами свяжется специалист отдела
                          продаж, не завешивайте зеркала ночью и отверните все
                          иконы
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
                        onSubmit={handleSubmit(submitHandler)}
                        className={styles.headerDialogFormClass}
                      >
                        <TextField
                          label="Ваше имя"
                          type="text"
                          autoCapitalize="words"
                          autoComplete="name"
                          leadingIcon={icons.User}
                          {...register('name')}
                        />

                        <TextField
                          required
                          label="Номер телефона"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          error={!!errors.phone}
                          leadingIcon={icons.Phone}
                          maskOptions={phoneFieldMask}
                          {...register('phone')}
                        />

                        <TextField
                          label="Ваш e-mail"
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          error={!!errors.email}
                          leadingIcon={icons.Envelope}
                          {...register('email')}
                        />

                        {!!errors.root && (
                          <p className={styles.headerDialogErrorMessageClass}>
                            <icons.WarningCircleFill size="1.25rem" />
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
