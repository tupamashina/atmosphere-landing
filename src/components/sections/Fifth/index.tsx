/* eslint-disable react/jsx-props-no-spreading */

import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { useState, type FC } from 'react';
import {
  define,
  integer,
  max,
  min,
  number,
  object,
  union,
  type Infer,
} from 'superstruct';

import { TextField } from '@/components/TextField';
import { Button } from '@/components/buttons/Button';
import { useBetterForm } from '@/hooks/useBetterForm';
import { darkThemeClass } from '@/styles/theme.css';
import { displayTypographyClass } from '@/styles/typography.css';

import type { MaskitoOptions } from '@maskito/core';
import type { SubmitHandler } from 'react-hook-form';

const nanStruct = define<number>('NaN', Number.isNaN);

const TOTAL_CONSUMPTION_MIN = 0.001;
const TOTAL_CONSUMPTION_MAX = 30_000;

const SUPPLY_WATER_TEMPERATURE_MIN = 5;
const SUPPLY_WATER_TEMPERATURE_MAX = 150;

const RETURN_WATER_TEMPERATURE_MIN = 5;
const RETURN_WATER_TEMPERATURE_MAX = 150;

const OUTSIDE_AIR_TEMPERATURE_MIN = -31;
const OUTSIDE_AIR_TEMPERATURE_MAX = 8;

const TOTAL_HEAT_CONSUMPTION_MIN = 0.001;
const TOTAL_HEAT_CONSUMPTION_MAX = 100_000;

const PRICE_MIN = 100;
const PRICE_MAX = 50_000;

const formStruct = object({
  totalConsumption: union([
    nanStruct,
    min(max(number(), TOTAL_CONSUMPTION_MAX), TOTAL_CONSUMPTION_MIN),
  ]),

  supplyWaterTemperature: min(
    max(integer(), SUPPLY_WATER_TEMPERATURE_MAX),
    SUPPLY_WATER_TEMPERATURE_MIN,
  ),

  returnWaterTemperature: min(
    max(integer(), RETURN_WATER_TEMPERATURE_MAX),
    RETURN_WATER_TEMPERATURE_MIN,
  ),

  outsideAirTemperature: min(
    max(integer(), OUTSIDE_AIR_TEMPERATURE_MAX),
    OUTSIDE_AIR_TEMPERATURE_MIN,
  ),

  totalHeatConsumption: union([
    nanStruct,
    min(max(number(), TOTAL_HEAT_CONSUMPTION_MAX), TOTAL_HEAT_CONSUMPTION_MIN),
  ]),

  price: min(max(number(), PRICE_MAX), PRICE_MIN),
});

type FormValues = Infer<typeof formStruct>;

const formMasks: Record<keyof FormValues, MaskitoOptions> = {
  totalConsumption: maskitoNumberOptionsGenerator({
    precision: 3,
    decimalSeparator: ',',
    min: TOTAL_CONSUMPTION_MIN,
    max: TOTAL_CONSUMPTION_MAX,
  }),

  supplyWaterTemperature: maskitoNumberOptionsGenerator({
    min: SUPPLY_WATER_TEMPERATURE_MIN,
    max: SUPPLY_WATER_TEMPERATURE_MAX,
  }),

  returnWaterTemperature: maskitoNumberOptionsGenerator({
    min: RETURN_WATER_TEMPERATURE_MIN,
    max: RETURN_WATER_TEMPERATURE_MAX,
  }),

  outsideAirTemperature: maskitoNumberOptionsGenerator({
    minusSign: '-',
    min: OUTSIDE_AIR_TEMPERATURE_MIN,
    max: OUTSIDE_AIR_TEMPERATURE_MAX,
  }),

  totalHeatConsumption: maskitoNumberOptionsGenerator({
    precision: 3,
    decimalSeparator: ',',
    min: TOTAL_HEAT_CONSUMPTION_MIN,
    max: TOTAL_HEAT_CONSUMPTION_MAX,
  }),

  price: maskitoNumberOptionsGenerator({
    precision: 2,
    decimalSeparator: ',',
    min: PRICE_MIN,
    max: PRICE_MAX,
  }),
};

const setValueAs = (value: unknown) =>
  typeof value === 'string' ?
    Number.parseFloat(value.replace(',', '.').replaceAll(/\s/g, ''))
  : value;

export const FifthSection: FC = () => {
  const {
    setError,
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useBetterForm({
    struct: formStruct,
  });

  const [savings, setSavings] = useState<{
    rubles: number;
    percentages: number;
  }>();

  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    const isTotalConsumptionNaN = Number.isNaN(data.totalConsumption);
    const isTotalHeatConsumptionNaN = Number.isNaN(data.totalHeatConsumption);

    if (isTotalConsumptionNaN && isTotalHeatConsumptionNaN) {
      setError('totalConsumption', {});
      setError('totalHeatConsumption', {});
    } else {
      const response = await fetch('/api/calculator', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
      setSavings((await response.json()) as any);
    }
  };

  return (
    <section id="calculator">
      <h3 className={displayTypographyClass.sm}>Расчёт экономии</h3>

      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(submitHandler, console.error)}>
        <fieldset
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',

            marginTop: '2rem',
            border: 'none',
          }}
        >
          <TextField
            type="text"
            autoComplete="off"
            inputMode="decimal"
            autoCapitalize="none"
            label="Суммарный расход"
            maskOptions={formMasks.totalConsumption}
            error={!!errors.totalConsumption}
            {...register('totalConsumption', { setValueAs })}
          />
          или
          <TextField
            type="text"
            autoComplete="off"
            inputMode="decimal"
            autoCapitalize="none"
            label="Суммарное теплопотребление"
            maskOptions={formMasks.totalHeatConsumption}
            error={!!errors.totalHeatConsumption}
            {...register('totalHeatConsumption', { setValueAs })}
          />
        </fieldset>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          <TextField
            type="text"
            autoComplete="off"
            inputMode="numeric"
            autoCapitalize="none"
            label="Температура подающей воды"
            maskOptions={formMasks.supplyWaterTemperature}
            error={!!errors.supplyWaterTemperature}
            {...register('supplyWaterTemperature', { setValueAs })}
          />

          <TextField
            type="text"
            autoComplete="off"
            inputMode="numeric"
            autoCapitalize="none"
            label="Температура обратной воды"
            maskOptions={formMasks.returnWaterTemperature}
            error={!!errors.returnWaterTemperature}
            {...register('returnWaterTemperature', { setValueAs })}
          />

          <TextField
            type="text"
            autoComplete="off"
            inputMode="numeric"
            autoCapitalize="none"
            label="Температура наружного воздуха"
            maskOptions={formMasks.outsideAirTemperature}
            error={!!errors.outsideAirTemperature}
            {...register('outsideAirTemperature', { setValueAs })}
          />

          <TextField
            type="text"
            autoComplete="off"
            inputMode="numeric"
            autoCapitalize="none"
            label="Цена за Гкал, с НДС"
            maskOptions={formMasks.price}
            error={!!errors.price}
            {...register('price', { setValueAs })}
          />

          <Button
            type="submit"
            loading={isSubmitting}
            variant="filled"
            className={darkThemeClass}
          >
            Submit
          </Button>

          {savings && (
            <>
              <p>
                Экономия в рублях:{' '}
                {savings.rubles.toLocaleString('ru-RU', {
                  style: 'currency',
                  currency: 'RUB',
                })}
              </p>

              <p>
                Экономия в процентах:{' '}
                {Math.floor(savings.percentages * 10) / 10} %
              </p>
            </>
          )}
        </div>
      </form>
    </section>
  );
};
