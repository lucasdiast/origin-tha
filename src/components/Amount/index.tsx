import React, { ReactElement, useState } from 'react';
import { SpanContainer, InputContainer, Container } from './styles';
import { currencyFormatter } from '../../utils/formatter';
import { useGoals } from '../../providers/goals';

const Amount = (): ReactElement => {
  // const { amount, setAmount } = useGoals();
  const [value, setValue] = useState<string>('');

  const currencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const currencyFormat = () => {
    const newValue = currencyFormatter(value);
    setValue(newValue);
  };

  return (
    <Container>
      <SpanContainer>Total amount</SpanContainer>
      <InputContainer
        name="amount"
        type="text"
        placeholder="0"
        value={value}
        onChange={(e) => currencyChange(e)}
        onBlur={() => currencyFormat()}
      />
    </Container>
  );
};

export default Amount;
