import React, { useState, ReactElement, ChangeEvent } from 'react';
import { SpanContainer, InputContainer, Container } from './styles';
import { currencyFormatter } from '../../utils/formatter';

const Amount = (): ReactElement => {
  const [value, setValue] = useState<string>('');

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!Number(value)) return;

    setValue(currencyFormatter(value));
  };

  return (
    <Container>
      <SpanContainer>Total amount</SpanContainer>
      <InputContainer
        name="amount"
        type="text"
        placeholder="0"
        value={value}
        onChange={(e) => inputChange(e)}
        // onBlur={() => currencyFormat()}
      />
    </Container>
  );
};

export default Amount;
