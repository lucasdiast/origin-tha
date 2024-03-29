import React, { ReactElement } from 'react';
import CardWrapper from '../../components/CardWrapper';
import Title from '../../components/Title';
import Amount from '../../components/Amount';
import ReachDate from '../../components/ReachDate';
import BigButton from '../../components/BigButton';
import MonthlyAmount from '../../components/MonthlyAmount';
import GoalLogo from '../../components/GoalLogo';

import houseLogo from '../../assets/icons/buy-a-house.svg';
import useViewController from './viewController';

export const BuyHousePage = (): ReactElement => {
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
          <GoalLogo goal={'Buy a house'} logo={houseLogo} />
          <Amount name="house" />
          <ReachDate name="house" />
          <MonthlyAmount name="house" />
          <BigButton onClickAction={saveMonthAndYear}>Confirm</BigButton>
        </>
      </CardWrapper>
    </>
  );
};

export default BuyHousePage;
