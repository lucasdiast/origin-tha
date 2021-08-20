import React, { ReactElement, useState } from 'react';
import { SpanContainer, InputContainer } from './styles';
import { currencyFormatter } from '../../utils/formatter';

const InputLogo = (): ReactElement => {
  const [value, setValue] = useState<string>('');

  const currencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newValue = currencyFormatter(value);
    setValue(newValue);
  };

  return (
    <>
      <SpanContainer>Total amount</SpanContainer>
      <InputContainer
        name="amount"
        type="number"
        placeholder="0"
        value={value}
        onChange={(e) => currencyChange(e)}
      />
    </>
  );
};

export default InputLogo;
