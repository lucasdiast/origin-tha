import React, { ReactElement } from 'react';
import { SpanContainer, InputContainer, Container } from './styles';
import { currencyFormatter } from '../../utils/formatter';
import { useGoals } from '../../providers/goals';

const Amount = (): ReactElement => {
  const { amount, setAmount } = useGoals();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setAmount(value);
  };

  return (
    <Container>
      <SpanContainer data-testid="message">Total amount</SpanContainer>
      <InputContainer
        name="amount"
        type="text"
        placeholder="0"
        value={amount}
        tabIndex={1}
        onChange={(e) => handleChange(e)}
        onBlur={() => setAmount(currencyFormatter(amount))}
      />
    </Container>
  );
};

export default Amount;
