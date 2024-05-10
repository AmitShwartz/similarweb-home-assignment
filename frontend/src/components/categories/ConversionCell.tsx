import { useMemo } from "react";
import { Category } from "../../types/category.types";
import { calculatePercentage } from "../../utils/calculations.utils";
import { formatPercentage } from "../../utils/format.utils";

const ConversionCell = ({ units_sold, product_view }: Category) => {
  const cvr = useMemo(
    () => formatPercentage(calculatePercentage(units_sold, product_view)),
    [units_sold, product_view]
  );
  return <>{cvr}</>;
};

export default ConversionCell;
