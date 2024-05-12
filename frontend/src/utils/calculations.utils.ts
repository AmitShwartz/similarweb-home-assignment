export const calculatePercentage = (value: number, total: number) => {
  return (value / total) * 100;
};

export const calculateChangeRate = (startValue: number, endValue: number) => {
  return ((endValue - startValue) / startValue) * 100;
};
