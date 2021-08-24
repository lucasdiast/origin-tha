import React, { ReactElement, KeyboardEvent } from 'react';
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

  const keyPress = (e: KeyboardEvent): void => {
    if (e.code === 'ArrowRight') {
      addMonth();
    }
    if (e.key === 'ArrowLeft') {
      subtractMonth();
    }
  };

  return (
    <Container>
      <SpanContainer>Reach goal by</SpanContainer>
      <ContentContainer tabIndex={2} onKeyDown={(e) => keyPress(e)}>
        <ArrowLeft
          src={arrowLeft}
          onClick={() => subtractMonth()}
          alt="arrow left"
        />
        <DateWrapper>
          <MonthContainer>{monthFormatter(targetMonth)}</MonthContainer>
          <YearContainer>{targetYear}</YearContainer>
        </DateWrapper>
        <ArrowRight
          src={arrowRight}
          onClick={() => addMonth()}
          alt="arrow right"
        />
      </ContentContainer>
    </Container>
  );
};

export default ReachDate;
