/* eslint-disable @typescript-eslint/no-misused-promises */
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
  DialogTrigger,
} from '@radix-ui/react-dialog';
import { parsePhoneNumberWithError } from 'libphonenumber-js';
import metadata from 'libphonenumber-js/metadata.max.json';
import { useRef, useState, useSyncExternalStore, type FC } from 'react';
import {
  object,
  trimmed,
  string,
  union,
  empty,
  refine,
  nonempty,
  type Infer,
} from 'superstruct';
import { isEmail } from 'validator';

import {
  headerDialogOverlayClass,
  headerDialogContentClass,
  headerDialogDescriptionClass,
  headerDialogCloseButtonClass,
  headerDialogFormClass,
  headerDialogErrorMessageClass,
  headerDialogTermsClass,
} from '@/components/Header/styles.css';
import { TextField } from '@/components/TextField';
import { Transition } from '@/components/Transition';
import { Button } from '@/components/buttons/Button';
import { useBetterForm } from '@/hooks/useBetterForm';
import { Icons } from '@/icons';
import {
  bodyTypographyClass,
  displayTypographyClass,
  headlineTypographyClass,
  labelTypographyClass,
} from '@/styles/typography.css';
import * as styles from './styles.css';

import type { SubmitHandler } from 'react-hook-form';

const listData = [
  {
    Icon: Icons.CurrencyRub,
    title: 'Экономия',
    text: 'За счёт установки качественного оборудования и счетчиков расхода тепла',
  },
  {
    Icon: Icons.Crosshair,
    title: 'Автоматизация',
    text: 'Автоматика следит за температурой, и в зависимости от потребности в тепле, самостоятельно регулирует работу системы',
  },
  {
    Icon: Icons.ChartLineDown,
    title: 'Снижение затрат',
    text: 'За счет установки качественного оборудования, Вы окупаете затраты уже в первый год! Далее идет чистая экономия',
  },
  {
    Icon: Icons.Engineering,
    title: 'Комфорт работников',
    text: 'Система мониторинга и диспетчеризации позволяет задавать наиболее комфортные режимы работы',
  },
  {
    Icon: Icons.Lock,
    title: 'Надёжность',
    text: 'Оборудование, входящее в состав ИТП, рассчитано на долгий срок службы',
  },
  {
    Icon: Icons.Handyman,
    title: 'Удобство обслуживания',
    text: 'Конструкция ИТП выполняется индивидуально, в нём имеется всё необходимое для лёгкого и удобного обслуживания',
  },
];

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

export const FourthSection: FC = () => {
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
    <section id="benefits">
      <h3 className={displayTypographyClass.sm}>
        Преимущества
        <span className={styles.fourthSectionSubtitleClass}>
          современного автоматизированного ИТП
        </span>
      </h3>

      <ul className={styles.fourthSectionListClass}>
        {listData.map(({ text, title, Icon }) => (
          <li key={title} className={styles.fourthSectionListItemClass}>
            <div className={styles.fourthSectionListItemContentClass}>
              <Icon aria-hidden />
              {title}
            </div>

            <div className={styles.fourthSectionListItemHoverContentClass}>
              <p className={labelTypographyClass.md}>{title}</p>
              <p className={bodyTypographyClass.sm}>{text}</p>
            </div>
          </li>
        ))}
      </ul>

      <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            variant="filled"
            icon={Icons.Headset}
            className={styles.fourthSectionConsultationBtnClass}
          >
            Заказать консультацию
          </Button>
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
                className={headerDialogOverlayClass}
              >
                <DialogContent className={headerDialogContentClass}>
                  <DialogTitle className={headlineTypographyClass.sm}>
                    {isSubmitSuccessful ?
                      'Заявка зарегистрирована'
                    : 'Оставить заявку'}
                  </DialogTitle>

                  {isSubmitSuccessful ?
                    <>
                      <DialogDescription
                        className={headerDialogDescriptionClass}
                      >
                        Спасибо! Скоро с вами свяжется специалист отдела продаж,
                        не завешивайте зеркала ночью и отверните все иконы
                      </DialogDescription>

                      <DialogClose asChild>
                        <Button
                          variant="text"
                          className={headerDialogCloseButtonClass}
                        >
                          Закрыть
                        </Button>
                      </DialogClose>
                    </>
                  : <form
                      onSubmit={handleSubmit(submitHandler)}
                      className={headerDialogFormClass}
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
                        <p className={headerDialogErrorMessageClass}>
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

                      <p className={headerDialogTermsClass}>
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
    </section>
  );
};
