const today = new Date();

export const currencyFormatter = (value: string): string => {
  const splitted = value.split('.');
  const val = splitted[0].replace(/\D/g, ''),
    dec = splitted[1];

  let newValue = new Intl.NumberFormat('en-EN').format(parseInt(val));

  return (newValue = dec !== undefined ? newValue + '.' + dec : newValue);
};

export const monthFormatter = (value: number): string => {
  const date = new Date(today.getFullYear(), value);
  return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
};
