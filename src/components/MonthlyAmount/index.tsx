import React, { ReactElement } from 'react';
import {
  Container,
  WhiteContainer,
  BlueContainer,
  TextContainer,
  MessageContainer,
  AmountContainer,
} from './styles';
import { useGoals } from '../../providers/goals';
import { monthFormatter } from '../../utils/formatter';

const MonthlyAmount = (): ReactElement => {
  const { amount, range, targetMonth, targetYear, monthlySave } = useGoals();

  return (
    <Container>
      <WhiteContainer>
        <MessageContainer>Monthly Amount</MessageContainer>
        <AmountContainer>${monthlySave}</AmountContainer>
      </WhiteContainer>
      <BlueContainer>
        <TextContainer>
          You’re planning <strong>{range} monthly deposits</strong> to reach
          your <strong>${amount}</strong> goal by{' '}
          <strong>
            {monthFormatter(targetMonth)} {targetYear}.
          </strong>
        </TextContainer>
      </BlueContainer>
    </Container>
  );
};

export default MonthlyAmount;
