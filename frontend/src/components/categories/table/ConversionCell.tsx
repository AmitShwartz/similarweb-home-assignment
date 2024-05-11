import { useMemo } from "react";
import { Category } from "../../../types/category.types";
import { calculatePercentage } from "../../../utils/calculations.utils";
import { formatPercentage } from "../../../utils/format.utils";

type Props = {
  value: number;
  total: number;
};

const ConversionCell = ({ value, total }: Props) => {
  const display = useMemo(
    () => formatPercentage(calculatePercentage(value, total)),
    [value, total]
  );
  return <>{display}</>;
};

export default ConversionCell;
