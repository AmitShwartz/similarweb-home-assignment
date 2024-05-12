import { useMemo } from "react";
import {
  calculateChangeRate,
  calculatePercentage,
} from "../../../utils/calculations.utils";
import { formatPercentage, formatPrice } from "../../../utils/format.utils";

export const ConversionCell = ({
  value,
  total,
}: {
  value: number;
  total: number;
}) => {
  const display = useMemo(
    () => formatPercentage(calculatePercentage(value, total)),
    [value, total]
  );
  return <>{display}</>;
};

export const ChangeRateCell = ({
  startValue,
  endValue,
}: {
  startValue: number;
  endValue: number;
}) => {
  const display = useMemo(
    () => formatPercentage(calculateChangeRate(startValue, endValue)),
    [startValue, endValue]
  );
  return <>{display}</>;
};

export const RevenueCell = ({ revenue }: { revenue: number }) => {
  const formattedRevenue = useMemo(() => formatPrice(revenue), [revenue]);
  return <>{formattedRevenue}</>;
};
