export const formatPrice = (value: number) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formatPercentage = (value: number) => {
  return `${value.toFixed(2)}%`;
};
