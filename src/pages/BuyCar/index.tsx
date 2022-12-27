import React, { ReactElement } from 'react';
import CardWrapper from '../../components/CardWrapper';
import Title from '../../components/Title';
import Amount from '../../components/Amount';
import ReachDate from '../../components/ReachDate';
import BigButton from '../../components/BigButton';
import MonthlyAmount from '../../components/MonthlyAmount';
import GoalLogo from '../../components/GoalLogo';

import carLogo from '../../assets/icons/buy-a-car.svg';
import useViewController from './viewController';

export const BuyCar = (): ReactElement => {
  const { saveMonthAndYear } = useViewController();

  return (
    <>
      <Title>
        <>
          Let&apos;s plan your <strong>saving goal.</strong>
        </>
      </Title>
      <CardWrapper>
        <>
          <GoalLogo goal={'Buy a car'} logo={carLogo} />
          <Amount name="car" />
          <ReachDate name="car" />
          <MonthlyAmount name="car" />
          <BigButton onClickAction={saveMonthAndYear}>Confirm</BigButton>
        </>
      </CardWrapper>
    </>
  );
};

export default BuyCar;
