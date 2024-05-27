import {
  maskitoNumberOptionsGenerator,
  maskitoParseNumber,
} from '@maskito/kit';
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
import {
  displayTypographyClass,
  headlineTypographyClass,
  titleTypographyClass,
} from '@/styles/typography.css';
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
}

const mainFieldsParams = {
  totalConsumption: {
    min: 0.001,
    max: 30_000,
    precision: 3,
    unit: 'т/сез.',
    label: 'Суммарный расход',
  },

  totalHeatConsumption: {
    min: 0.001,
    max: 100_000,
    precision: 3,
    unit: 'Гкал/сез.',
    label: 'Суммарное теплопотребление',
  },
} as const satisfies Record<string, FieldParams>;

type MainFieldName = keyof typeof mainFieldsParams;

const mainFieldsParamsEntries = Object.entries(mainFieldsParams) as [
  MainFieldName,
  FieldParams,
][];

const additionalFieldsParams = {
  supplyWaterTemperature: {
    min: 5,
    max: 150,
    unit: '&deg;C',
    label: 'Температура подающей воды',
  },

  returnWaterTemperature: {
    min: 5,
    max: 150,
    unit: '&deg;C',
    label: 'Температура обратной воды',
  },

  outsideAirTemperature: {
    min: -31,
    max: 8,
    unit: '&deg;C',
    label: 'Температура наружного воздуха',
  },

  price: {
    min: 100,
    max: 50_000,
    precision: 2,
    unit: 'руб.',
    label: 'Цена за Гкал, с НДС',
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
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(submitHandler)}
        className={styles.fifthSectionFormClass}
      >
        <div className={styles.fifthSectionFormControlsClass}>
          <Select
            label="Значение"
            options={mainFieldsParamsEntries.map(([value, { label }]) => ({
              value,
              children: label,
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
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('mainFieldValue', { setValueAs })}
            />

            {/* eslint-disable-next-line react/no-danger */}
            <p dangerouslySetInnerHTML={{ __html: mainFieldParams.unit }} />
          </div>

          {additionalFieldsParamsEntries.map(
            // eslint-disable-next-line @typescript-eslint/no-shadow
            ([name, { min, unit, label, precision = 0 }]) => {
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
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...props}
                  />

                  {/* eslint-disable-next-line react/no-danger */}
                  <p dangerouslySetInnerHTML={{ __html: unit }} />
                </div>
              );
            },
          )}
        </div>

        <div className={styles.fifthSectionResultsClass}>
          <p className={titleTypographyClass.md}>
            С нами вы можете сэкономить:
          </p>

          <p
            className={headlineTypographyClass.sm}
            style={{ margin: '0.5rem 0 1rem' }}
          >
            {result ?
              `${(Math.trunc(result.percentages * 10) / 10).toLocaleString(
                'ru-RU',
              )} % или ${result.rubles.toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
              })}`
            : '?'}
          </p>

          <div>
            <Button
              type="submit"
              variant="filled"
              disabled={!isValid}
              loading={isSubmitting}
              className={styles.fifthSectionFormSubmitBtnClass}
            >
              Рассчитать
            </Button>

            <p className={styles.fifthSectionResultsWarningClass}>
              Данные не являются публичной офертой. Чтобы получить точный
              расчёт, <button type="button">позвоните нам</button>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

// //* ============================== Fields params ===============================

// interface FieldParams {
//   max: number;
//   min: number;
//   precision?: number;

//   unit: string;
//   label: string;
// }

// const fieldsParams = {
//   totalConsumption: {
//     min: 0.001,
//     max: 30_000,
//     precision: 3,
//     unit: 'т/сез.',
//     label: 'Суммарный расход',
//   },

//   supplyWaterTemperature: {
//     min: 5,
//     max: 150,
//     unit: '&deg;C',
//     label: 'Температура подающей воды',
//   },

//   returnWaterTemperature: {
//     min: 5,
//     max: 150,
//     unit: '&deg;C',
//     label: 'Температура обратной воды',
//   },

//   outsideAirTemperature: {
//     min: -31,
//     max: 8,
//     unit: '&deg;C',
//     label: 'Температура наружного воды',
//   },

//   totalHeatConsumption: {
//     min: 0.001,
//     max: 100_000,
//     precision: 3,
//     unit: 'Гкал/сез.',
//     label: 'Суммарное теплопотребление',
//   },

//   price: {
//     min: 100,
//     max: 50_000,
//     precision: 2,
//     unit: 'руб.',
//     label: 'Цена за Гкал, с НДС',
//   },
// } satisfies Record<string, FieldParams>;

// type FieldName = keyof typeof fieldsParams;

// const fieldsParamsEntries = Object.entries(fieldsParams) as [
//   FieldName,
//   FieldParams,
// ][];

// //* =============================== Fields masks ===============================

// const DECIMAL_SEPARATOR = ',';

// const fieldsMasks = Object.fromEntries(
//   fieldsParamsEntries.map(([name, { max, min, precision }]) => [
//     name,
//     maskitoNumberOptionsGenerator({
//       max,
//       min,
//       precision,
//       decimalSeparator: DECIMAL_SEPARATOR,
//     }),
//   ]),
// ) as Record<FieldName, Required<MaskitoOptions>>;

// /* eslint-disable react/jsx-props-no-spreading */

// import {
//   maskitoNumberOptionsGenerator,
//   maskitoParseNumber,
// } from '@maskito/kit';
// import { useEffect, useState, type FC } from 'react';
// import {
//   define,
//   integer,
//   literal,
//   max,
//   min,
//   number,
//   object,
//   union,
//   type Infer,
// } from 'superstruct';

// import { TextField } from '@/components/TextField';
// import { Button } from '@/components/buttons/Button';
// import { useBetterForm } from '@/hooks/useBetterForm';
// import { darkThemeClass } from '@/styles/theme.css';
// import { displayTypographyClass } from '@/styles/typography.css';
// import * as styles from './styles.css';

// import type { MaskitoOptions } from '@maskito/core';
// import type { SubmitHandler } from 'react-hook-form';

// const nanStruct = define<number>('NaN', Number.isNaN);

// const TOTAL_CONSUMPTION_MIN = 0.001;
// const TOTAL_CONSUMPTION_MAX = 30_000;

// const SUPPLY_WATER_TEMPERATURE_MIN = 5;
// const SUPPLY_WATER_TEMPERATURE_MAX = 150;

// const RETURN_WATER_TEMPERATURE_MIN = 5;
// const RETURN_WATER_TEMPERATURE_MAX = 150;

// const OUTSIDE_AIR_TEMPERATURE_MIN = -31;
// const OUTSIDE_AIR_TEMPERATURE_MAX = 8;

// const TOTAL_HEAT_CONSUMPTION_MIN = 0.001;
// const TOTAL_HEAT_CONSUMPTION_MAX = 100_000;

// const PRICE_MIN = 100;
// const PRICE_MAX = 50_000;

// const formStruct = object({
//   totalConsumption: union([
//     nanStruct,
//     min(max(number(), TOTAL_CONSUMPTION_MAX), TOTAL_CONSUMPTION_MIN),
//   ]),

//   supplyWaterTemperature: min(
//     max(integer(), SUPPLY_WATER_TEMPERATURE_MAX),
//     SUPPLY_WATER_TEMPERATURE_MIN,
//   ),

//   returnWaterTemperature: min(
//     max(integer(), RETURN_WATER_TEMPERATURE_MAX),
//     RETURN_WATER_TEMPERATURE_MIN,
//   ),

//   outsideAirTemperature: min(
//     max(integer(), OUTSIDE_AIR_TEMPERATURE_MAX),
//     OUTSIDE_AIR_TEMPERATURE_MIN,
//   ),

//   totalHeatConsumption: union([
//     nanStruct,
//     min(max(number(), TOTAL_HEAT_CONSUMPTION_MAX), TOTAL_HEAT_CONSUMPTION_MIN),
//   ]),

//   price: min(max(number(), PRICE_MAX), PRICE_MIN),
// });

// type FormValues = Infer<typeof formStruct>;

// const formMasks: Record<keyof FormValues, MaskitoOptions> = {
//   totalConsumption: maskitoNumberOptionsGenerator({
//     precision: 3,
//     decimalSeparator: ',',
//     min: TOTAL_CONSUMPTION_MIN,
//     max: TOTAL_CONSUMPTION_MAX,
//   }),

//   supplyWaterTemperature: maskitoNumberOptionsGenerator({
//     min: SUPPLY_WATER_TEMPERATURE_MIN,
//     max: SUPPLY_WATER_TEMPERATURE_MAX,
//   }),

//   returnWaterTemperature: maskitoNumberOptionsGenerator({
//     min: RETURN_WATER_TEMPERATURE_MIN,
//     max: RETURN_WATER_TEMPERATURE_MAX,
//   }),

//   outsideAirTemperature: maskitoNumberOptionsGenerator({
//     minusSign: '-',
//     min: OUTSIDE_AIR_TEMPERATURE_MIN,
//     max: OUTSIDE_AIR_TEMPERATURE_MAX,
//   }),

//   totalHeatConsumption: maskitoNumberOptionsGenerator({
//     precision: 3,
//     decimalSeparator: ',',
//     min: TOTAL_HEAT_CONSUMPTION_MIN,
//     max: TOTAL_HEAT_CONSUMPTION_MAX,
//   }),

//   price: maskitoNumberOptionsGenerator({
//     precision: 2,
//     decimalSeparator: ',',
//     min: PRICE_MIN,
//     max: PRICE_MAX,
//   }),
// };

// interface Savings {
//   rubles: number;
//   percentages: number;
// }

// const setValueAs = (value: unknown) =>
//   typeof value === 'string' ? maskitoParseNumber(value, ',') : value;

// export const FifthSection: FC = () => {
//   const {
//     setError,
//     register,
//     setValue,
//     getValues,
//     handleSubmit,
//     formState: { errors, isValid, isSubmitting },
//   } = useBetterForm({
//     struct: formStruct,
//   });

//   const submitHandler: SubmitHandler<FormValues> = async (data) => {
//     const isTotalConsumptionNaN = Number.isNaN(data.totalConsumption);
//     const isTotalHeatConsumptionNaN = Number.isNaN(data.totalHeatConsumption);

//     if (isTotalConsumptionNaN && isTotalHeatConsumptionNaN) {
//       setError('totalConsumption', {});
//       setError('totalHeatConsumption', {});
//     } else {
//       const response = await fetch('/api/calculator', {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       console.log(response);
//     }
//   };

//   const [isIOS, setIsIOS] = useState(false);

//   useEffect(() => {
//     import('ua-parser-js')
//       .then(({ default: UAParser }) => setIsIOS(UAParser().os.name === 'iOS'))
//       .catch(() => {});
//   }, []);

//   return (
//     <section id="calculator">
//       <h3 className={displayTypographyClass.sm}>Расчёт экономии</h3>

//       <form
//         // eslint-disable-next-line @typescript-eslint/no-misused-promises
//         onSubmit={handleSubmit(submitHandler)}
//         className={styles.fifthSectionFormClass}
//       >
//         <div>
//           <fieldset>
//             <div className={styles.fifthSectionFormInputContainerClass}>
//               <TextField
//                 type="text"
//                 autoComplete="off"
//                 inputMode="decimal"
//                 autoCapitalize="none"
//                 label="Суммарный расход"
//                 maskOptions={formMasks.totalConsumption}
//                 error={!!errors.totalConsumption}
//                 style={{ paddingRight: '4.81145625rem' }}
//                 {...register('totalConsumption', { setValueAs })}
//               />

//               <p>т/сез.</p>
//             </div>
//             или
//             <div className={styles.fifthSectionFormInputContainerClass}>
//               <TextField
//                 type="text"
//                 autoComplete="off"
//                 inputMode="decimal"
//                 autoCapitalize="none"
//                 label="Суммарное теплопотребление"
//                 maskOptions={formMasks.totalHeatConsumption}
//                 error={!!errors.totalHeatConsumption}
//                 style={{ paddingRight: '6.59791875rem' }}
//                 {...register('totalHeatConsumption', { setValueAs })}
//               />

//               <p>Гкал/сез.</p>
//             </div>
//           </fieldset>

//           <div className={styles.fifthSectionFormRestInputsClass}>
//             <div className={styles.fifthSectionFormInputContainerClass}>
//               <TextField
//                 required
//                 type="text"
//                 autoComplete="off"
//                 inputMode="numeric"
//                 autoCapitalize="none"
//                 label="Температура подающей воды"
//                 maskOptions={formMasks.supplyWaterTemperature}
//                 error={!!errors.supplyWaterTemperature}
//                 style={{ paddingRight: '3.12083125rem' }}
//                 {...register('supplyWaterTemperature', { setValueAs })}
//               />

//               <p>&deg;C</p>
//             </div>

//             <div className={styles.fifthSectionFormInputContainerClass}>
//               <TextField
//                 required
//                 type="text"
//                 autoComplete="off"
//                 inputMode="numeric"
//                 autoCapitalize="none"
//                 label="Температура обратной воды"
//                 maskOptions={formMasks.returnWaterTemperature}
//                 error={!!errors.returnWaterTemperature}
//                 style={{ paddingRight: '3.12083125rem' }}
//                 {...register('returnWaterTemperature', { setValueAs })}
//               />

//               <p>&deg;C</p>
//             </div>

//             <div className={styles.fifthSectionFormInputContainerClass}>
//               <TextField
//                 required
//                 type="text"
//                 autoComplete="off"
//                 autoCapitalize="none"
//                 inputMode={isIOS ? 'text' : 'numeric'}
//                 label="Температура наружного воздуха"
//                 maskOptions={formMasks.outsideAirTemperature}
//                 error={!!errors.outsideAirTemperature}
//                 style={{ paddingRight: '3.12083125rem' }}
//                 {...register('outsideAirTemperature', { setValueAs })}
//               />

//               <p>&deg;C</p>
//             </div>

//             <div className={styles.fifthSectionFormInputContainerClass}>
//               <TextField
//                 required
//                 type="text"
//                 autoComplete="off"
//                 inputMode="numeric"
//                 autoCapitalize="none"
//                 label="Цена за Гкал, с НДС"
//                 maskOptions={formMasks.price}
//                 error={!!errors.price}
//                 style={{ paddingRight: '4.09479375rem' }}
//                 {...register('price', { setValueAs })}
//               />

//               <p>руб.</p>
//             </div>
//           </div>
//         </div>

//         <div className={styles.fifthSectionFormResultClass}>
//           <Button
//             type="submit"
//             disabled={!isValid}
//             loading={isSubmitting}
//             variant="filled"
//             className={styles.fifthSectionFormSubmitBtnClass}
//           >
//             Рассчитать
//           </Button>
//         </div>
//       </form>
//     </section>
//   );
// };
