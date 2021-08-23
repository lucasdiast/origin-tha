import React, { ReactElement } from 'react';
import { monthFormatter } from '../../utils/formatter';
import {
  Container,
  SpanContainer,
  DateWrapper,
  MonthContainer,
  YearContainer,
  ContentContainer,
  ArrowLeft,
  ArrowRight,
} from './styles';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import { useGoals } from '../../providers/goals';

const ReachDate = (): ReactElement => {
  const { targetMonth, targetYear, addMonth, subtractMonth } = useGoals();

  return (
    <Container>
      <SpanContainer>Reach goal by</SpanContainer>
      <ContentContainer>
        <ArrowLeft
          src={arrowLeft}
          onClick={(e: React.MouseEvent<HTMLImageElement>) => subtractMonth(e)}
          alt="arrow left"
        />
        <DateWrapper>
          <MonthContainer>{monthFormatter(targetMonth)}</MonthContainer>
          <YearContainer>{targetYear}</YearContainer>
        </DateWrapper>
        <ArrowRight
          src={arrowRight}
          onClick={(e: React.MouseEvent<HTMLImageElement>) => addMonth(e)}
          alt="arrow right"
        />
      </ContentContainer>
    </Container>
  );
};

export default ReachDate;
