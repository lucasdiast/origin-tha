import React, { ReactElement } from 'react';
import {
  Container,
  WhiteContainer,
  BlueContainer,
  TextContainer,
  MessageContainer,
  AmountContainer,
} from './styles';

const MonthlyAmount = (): ReactElement => {
  return (
    <Container>
      <WhiteContainer>
        <MessageContainer>Monthly Amount</MessageContainer>
        <AmountContainer>$521</AmountContainer>
      </WhiteContainer>
      <BlueContainer>
        <TextContainer>
          You’re planning <strong>48 monthly deposits</strong> to reach your
          <strong>$25,000</strong> goal by <strong>October 2020.</strong>
        </TextContainer>
      </BlueContainer>
    </Container>
  );
};

export default MonthlyAmount;
