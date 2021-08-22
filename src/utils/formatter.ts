export const currencyFormatter = (value: string): string => {
  const formattedValue = value.replace(',', '');

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
  }).format(parseFloat(formattedValue));
};

export const monthFormatter = (value: number): string => {
  const date = new Date(2021, value);
  return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
};
