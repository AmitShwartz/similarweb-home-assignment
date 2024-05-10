import { useMemo } from "react";
import { Category } from "../../types/category.types";
import { formatPrice } from "../../utils/format.utils";

const RevenueCell = ({ revenue }: Category) => {
  const formattedRevenue = useMemo(() => formatPrice(revenue), [revenue]);
  return <>{formattedRevenue}</>;
};

export default RevenueCell;
