import React, { ReactElement, useState } from 'react';
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

const ReachDate = (): ReactElement => {
  const now = new Date();
  const minMonth = now.getMonth() + 1;
  const minYear = now.getFullYear();
  const [month, setMonth] = useState<number>(minMonth);
  const [year, setYear] = useState<number>(minYear);

  const addMonth = () => {
    if (month < 11) {
      setMonth(month + 1);
    } else {
      setYear(year + 1);
      setMonth(0);
    }
  };

  const subtractMonth = () => {
    if (year === minYear && month === minMonth) return;

    if (month > 0) {
      setMonth(month - 1);
    } else {
      setYear(year - 1);
      setMonth(11);
    }
  };

  return (
    <Container>
      <SpanContainer>Reach goal by</SpanContainer>
      <ContentContainer>
        <ArrowLeft
          src={arrowLeft}
          onClick={() => subtractMonth()}
          alt="arrow left"
        />
        <DateWrapper>
          <MonthContainer>{monthFormatter(month)}</MonthContainer>
          <YearContainer>{year}</YearContainer>
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
