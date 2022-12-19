import React, { ReactElement } from 'react';
import {
  Container,
  WhiteContainer,
  BlueContainer,
  TextContainer,
  MessageContainer,
  AmountContainer,
} from './styles';
import { currencyFormatter, monthFormatter } from '../../utils/formatter';
import useViewController from './viewController';

const MonthlyAmount = (): ReactElement => {
  const { amount, range, targetMonth, targetYear, monthlySave } =
    useViewController();

  return (
    <Container>
      <WhiteContainer>
        <MessageContainer>Monthly Amount</MessageContainer>
        <AmountContainer>
          {currencyFormatter(monthlySave.toString())}
        </AmountContainer>
      </WhiteContainer>
      <BlueContainer>
        <TextContainer>
          You’re planning <strong>{range} monthly deposits</strong> to reach
          your <strong>${amount}</strong> goal by {''}
          <strong>
            {monthFormatter(targetMonth)} {targetYear}.
          </strong>
        </TextContainer>
      </BlueContainer>
    </Container>
  );
};

export default MonthlyAmount;
