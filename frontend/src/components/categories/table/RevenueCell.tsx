import { useMemo } from "react";
import { formatPrice } from "../../../utils/format.utils";

type Props = {
  revenue: number;
};

const RevenueCell = ({ revenue }: Props) => {
  const formattedRevenue = useMemo(() => formatPrice(revenue), [revenue]);
  return <>{formattedRevenue}</>;
};

export default RevenueCell;
