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
import useViewController from './viewController';

const ReachDate = (): ReactElement => {
  const { keyPress, targetMonth, targetYear, addMonth, subtractMonth } =
    useViewController();

  return (
    <Container>
      <SpanContainer>Reach goal by</SpanContainer>
      <ContentContainer tabIndex={2} onKeyDown={(e) => keyPress(e)}>
        <ArrowLeft
          alt="arrow left"
          src={arrowLeft}
          onClick={() => subtractMonth()}
        />
        <DateWrapper>
          <MonthContainer>{monthFormatter(targetMonth)}</MonthContainer>
          <YearContainer>{targetYear}</YearContainer>
        </DateWrapper>
        <ArrowRight
          alt="arrow right"
          src={arrowRight}
          onClick={() => addMonth()}
        />
      </ContentContainer>
    </Container>
  );
};

export default ReachDate;
