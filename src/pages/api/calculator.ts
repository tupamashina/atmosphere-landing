import assert from 'assert';
import {
  assert as assertStruct,
  integer,
  nullable,
  number,
  object,
  refine,
} from 'superstruct';

import type { NextApiHandler } from 'next';

//* ================================== Struct ==================================

const struct = refine(
  object({
    price: number(),
    outsideAirTemperature: integer(),
    returnWaterTemperature: integer(),
    supplyWaterTemperature: integer(),

    totalConsumption: nullable(number()),
    totalHeatConsumption: nullable(number()),
  }),
  'calculatorData',
  ({ totalConsumption, totalHeatConsumption }) => {
    const isTotalConsumptionNull = totalConsumption === null;
    const isTotalHeatConsumptionNull = totalHeatConsumption === null;

    return (
      (!isTotalConsumptionNull && isTotalHeatConsumptionNull) ||
      (isTotalConsumptionNull && !isTotalHeatConsumptionNull)
    );
  },
);

//* ================================== getE7 ===================================

// ТСМ
const getE7 = (outsideAirTemperature: number) => {
  switch (outsideAirTemperature) {
    case 8:
    case -3:
      return 54;

    case 7:
    case 6:
    case 5:
    case -2:
      return 53;

    case 4:
    case 3:
      return 52;

    case 2:
    case 1:
    case 0:
    case -1:
      return 51;

    case -4:
      return 56;

    case -5:
      return 57;

    case -6:
      return 59;

    case -7:
      return 60;

    case -8:
      return 61;

    case -9:
      return 63;

    case -10:
      return 64;

    case -11:
      return 65;

    case -12:
      return 67;

    case -13:
    case -30:
    case -31:
      return 68;

    case -14:
    case -28:
    case -29:
      return 69;

    case -15:
    case -22:
    case -23:
    case -24:
      return 71;

    case -16:
    case -19:
    case -20:
    case -21:
      return 72;

    case -17:
    case -18:
      return 73;

    case -25:
    case -26:
    case -27:
      return 70;

    default:
      throw new Error('Error!');
  }
};

//* ================================= Handler ==================================

const handler: NextApiHandler = ({ body }, res) => {
  try {
    assertStruct(body, struct);
    let { totalConsumption, totalHeatConsumption } = body;

    const {
      price,
      outsideAirTemperature,
      returnWaterTemperature,
      supplyWaterTemperature,
    } = body;

    if (totalConsumption === null)
      totalConsumption =
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        (totalHeatConsumption! * 1000) /
        (supplyWaterTemperature - returnWaterTemperature);
    else
      totalHeatConsumption =
        (totalConsumption * (supplyWaterTemperature - returnWaterTemperature)) /
        1000;

    assert(totalHeatConsumption !== null);

    // ТСМ
    const e7 = getE7(outsideAirTemperature);

    // ТОО с ИТП
    const e8 =
      returnWaterTemperature *
      (1 - (supplyWaterTemperature - e7) / supplyWaterTemperature);

    // G сеть
    const e9 =
      totalConsumption / (1 + (supplyWaterTemperature - e7) / (e7 - e8));

    const newTotalHeatConsumption = (e9 * (supplyWaterTemperature - e8)) / 1000;

    const percentages =
      ((totalHeatConsumption - newTotalHeatConsumption) /
        totalHeatConsumption) *
      100;

    const rubles =
      totalHeatConsumption * price - newTotalHeatConsumption * price;

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    return res.status(200).json({ rubles, percentages });
  } catch {
    return res.status(500).end();
  }
};

export default handler;
