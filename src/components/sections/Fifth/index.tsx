/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/no-danger */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  maskitoNumberOptionsGenerator,
  maskitoParseNumber,
} from '@maskito/kit';
import Image from 'next/image';
import {
  useEffect,
  useState,
  type FC,
  type InputHTMLAttributes,
  type RefCallback,
} from 'react';
import { useWatch, type SubmitHandler } from 'react-hook-form';
import {
  type Struct,
  integer,
  literal,
  max,
  min,
  number,
  object,
  union,
  type Infer,
} from 'superstruct';

import { Select } from '@/components/Select';
import { TextField } from '@/components/TextField';
import { Button } from '@/components/buttons/Button';
import { useBetterForm } from '@/hooks/useBetterForm';
import { Icons } from '@/icons';
import { displayTypographyClass } from '@/styles/typography.css';
import img from '../Second/img.png';
import * as styles from './styles.css';

import type { MaskitoOptions } from '@maskito/core';
import type { ArrayElement } from 'type-fest/source/internal';

//* ============================== Fields params ===============================

interface FieldParams {
  max: number;
  min: number;
  unit: string;
  label: string;

  precision?: number;
  supportingText?: string;
}

const mainFieldsParams = {
  totalConsumption: {
    min: 0.001,
    max: 30_000,
    precision: 3,
    unit: 'т/сез.',
    label: 'Суммарный расход',
    supportingText: 'За весь отопительный сезон',
  },

  totalHeatConsumption: {
    min: 0.001,
    max: 100_000,
    precision: 3,
    unit: 'Гкал/сез.',
    label: 'Суммарное теплопотребление',
    supportingText: 'За весь отопительный сезон',
  },
} as const satisfies Record<string, FieldParams>;

type MainFieldName = keyof typeof mainFieldsParams;

const mainFieldsParamsEntries = Object.entries(mainFieldsParams) as [
  MainFieldName,
  FieldParams,
][];

const additionalFieldsParams = {
  price: {
    min: 100,
    max: 50_000,
    precision: 2,
    unit: 'руб.',
    label: 'Цена за Гкал',
    supportingText: 'С НДС',
  },

  supplyWaterTemperature: {
    min: 5,
    max: 150,
    unit: '&deg;C',
    label: 'Температура подающей воды',
    supportingText: 'Средняя за отопительный сезон',
  },

  returnWaterTemperature: {
    min: 5,
    max: 150,
    unit: '&deg;C',
    label: 'Температура обратной воды',
    supportingText: 'Средняя за отопительный сезон',
  },

  outsideAirTemperature: {
    min: -31,
    max: 8,
    unit: '&deg;C',
    label: 'Температура наружного воздуха',
    supportingText: 'Средняя за отопительный сезон',
  },
} as const satisfies Record<string, FieldParams>;

type AdditionalFieldName = keyof typeof additionalFieldsParams;

const additionalFieldsParamsEntries = Object.entries(
  additionalFieldsParams,
) as [AdditionalFieldName, FieldParams][];

//* =============================== Fields masks ===============================

const DECIMAL_SEPARATOR = ',';

const fieldsMasks = Object.fromEntries(
  [...mainFieldsParamsEntries, ...additionalFieldsParamsEntries].map(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    ([name, { max, min, precision }]) => [
      name,
      maskitoNumberOptionsGenerator({
        max,
        min,
        precision,
        decimalSeparator: DECIMAL_SEPARATOR,
      }),
    ],
  ),
) as Record<MainFieldName | AdditionalFieldName, Required<MaskitoOptions>>;

//* =============================== Form struct ================================

const createFieldStruct = ({
  max: maxValue,
  min: minValue,
  precision = 0,
}: FieldParams) =>
  min(max(precision > 0 ? number() : integer(), maxValue), minValue);

const additionalFieldsSchema = Object.fromEntries(
  additionalFieldsParamsEntries.map(([name, params]) => [
    name,
    createFieldStruct(params),
  ]),
) as Record<AdditionalFieldName, Struct<number, null>>;

const structs = mainFieldsParamsEntries.map(([name, params]) =>
  object({
    ...additionalFieldsSchema,
    mainFieldType: literal(name),
    mainFieldValue: createFieldStruct(params),
  }),
);

// @ts-expect-error: @ts-expect-error
const formStruct = union(structs) as Struct<
  Infer<ArrayElement<typeof structs>>,
  null
>;

type FormValues = Infer<typeof formStruct>;

//* ================================ Component =================================

interface Result {
  rubles: number;
  percentages: number;
}

const setValueAs = (value: unknown) =>
  typeof value === 'string' ?
    maskitoParseNumber(value, DECIMAL_SEPARATOR)
  : value;

export const FifthSection: FC = () => {
  const {
    control,
    register,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useBetterForm({
    struct: formStruct,
    defaultValues: { mainFieldType: 'totalConsumption' },
  });

  const [result, setResult] = useState<Result>();

  const submitHandler: SubmitHandler<FormValues> = async ({
    mainFieldType,
    mainFieldValue,
    ...data
  }) => {
    const response = await fetch('/api/calculator', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, [mainFieldType]: mainFieldValue }),
    });

    setResult((await response.json()) as Result);
  };

  const mainFieldType = useWatch({ control, name: 'mainFieldType' });
  const mainFieldParams = mainFieldsParams[mainFieldType];

  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    import('ua-parser-js')
      .then(({ default: UAParser }) => setIsIOS(UAParser().os.name === 'iOS'))
      .catch(() => {});
  }, []);

  return (
    <section id="calculator">
      <h3 className={displayTypographyClass.sm}>Расчёт экономии</h3>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className={styles.fifthSectionFormClass}
      >
        <Select
          label="Значение"
          options={mainFieldsParamsEntries.map(([value, { unit, label }]) => ({
            value,
            children: `${label}, ${unit}`,
          }))}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('mainFieldType', {
            onChange() {
              clearErrors('mainFieldValue');
              setValue('mainFieldValue', '' as unknown as number);
            },
          })}
        />

        <div className={styles.fifthSectionFormInputContainerClass}>
          <TextField
            required
            type="text"
            autoComplete="off"
            inputMode="decimal"
            autoCapitalize="none"
            label={mainFieldParams.label}
            error={!!errors.mainFieldValue}
            maskOptions={fieldsMasks[mainFieldType]}
            supportingText={mainFieldParams.supportingText}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('mainFieldValue', { setValueAs })}
          />

          <p dangerouslySetInnerHTML={{ __html: mainFieldParams.unit }} />
        </div>

        {additionalFieldsParamsEntries.map(
          // eslint-disable-next-line @typescript-eslint/no-shadow
          ([name, { min, unit, label, precision = 0, supportingText }]) => {
            let inputMode: InputHTMLAttributes<HTMLInputElement>['inputMode'];

            if (isIOS && min < 0) inputMode = 'text';
            else if (precision > 0) inputMode = 'decimal';
            else inputMode = 'numeric';

            const { ref: registerRef, ...props } = register(name, {
              setValueAs,
            });

            const ref: RefCallback<HTMLInputElement> = (input) => {
              registerRef(input);
              if (!input) return;

              const unitLabel = input.parentElement?.nextElementSibling;
              if (!(unitLabel instanceof HTMLElement)) return;

              // eslint-disable-next-line no-param-reassign
              input.style.paddingRight = `calc(2rem + ${unitLabel.offsetWidth}px)`;
            };

            return (
              <div
                key={name}
                className={styles.fifthSectionFormInputContainerClass}
              >
                <TextField
                  ref={ref}
                  required
                  type="text"
                  label={label}
                  autoComplete="off"
                  autoCapitalize="none"
                  inputMode={inputMode}
                  error={!!errors[name]}
                  maskOptions={fieldsMasks[name]}
                  supportingText={supportingText}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...props}
                />

                <p dangerouslySetInnerHTML={{ __html: unit }} />
              </div>
            );
          },
        )}

        <div className={styles.fifthSectionFormSubmitBtnContainerClass}>
          <Button
            type="submit"
            variant="filled"
            disabled={!isValid}
            loading={isSubmitting}
          >
            Рассчитать
          </Button>
        </div>

        <div aria-hidden className={styles.fifthSectionFormImgContainerClass}>
          {Array.from({ length: 18 }, (_, i) => (
            <span
              className={styles.rubleClass}
              style={{ left: `${(100 / 6) * (i % 6) + 1.5}%` }}
            >
              &#8381;
            </span>
          ))}

          <Image
            alt=""
            src={img}
            width={400}
            height={400}
            placeholder="blur"
            draggable={false}
          />

          <Icons.ArrowBenUpLeft
            className={styles.fifthSectionArrowClass.left}
          />

          <Icons.ArrowBendDownRight
            className={styles.fifthSectionArrowClass.right}
          />

          <Icons.Coins className={styles.fifthSectionIconClass.money} />
          <Icons.NuclearPlant className={styles.fifthSectionIconClass.energy} />
        </div>

        <div className={styles.fifthSectionFormResultClass}>
          Сколько вы можете сэкономить с нами:
          <p>
            {result ?
              `${(Math.trunc(result.percentages * 10) / 10).toLocaleString(
                'ru-RU',
              )} % или ${result.rubles.toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
              })}`
            : '?'}
          </p>
        </div>
      </form>
    </section>
  );
};
