import { format } from "date-fns";

export const formatPrice = (value: number) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formatPercentage = (value: number) => {
  return `${value.toFixed(2)}%`;
};

export const formatCategoryDateRequest = (date: Date) => {
  return format(date, "yyyy-MM");
};

export const formatToDate = (dateString: string) => {
  const [year, month] = dateString.split("-").map(Number);
  return new Date(year, month - 1);
};
