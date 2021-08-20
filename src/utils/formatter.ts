export const currencyFormatter = (value: string): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
  });
  const formattedValue = value.replace(',', '');

  return formatter.format(parseFloat(formattedValue));
};
