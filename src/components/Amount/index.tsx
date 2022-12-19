import React, { ReactElement } from 'react';
import { SpanContainer, InputContainer, Container } from './styles';
import { currencyFormatter } from '../../utils/formatter';
import useViewController from './viewController';

const Amount = (): ReactElement => {
  const { handleChange, setAmount, amount } = useViewController();

  return (
    <Container>
      <SpanContainer data-testid="message">Total amount</SpanContainer>
      <InputContainer
        data-testid="amount"
        name="amount"
        type="text"
        pattern="[0-9.,]+"
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
