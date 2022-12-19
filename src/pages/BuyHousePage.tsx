import React, { ReactElement } from 'react';
import CardWrapper from '../components/CardWrapper';
import Title from '../components/Title';
import Amount from '../components/Amount';
import ReachDate from '../components/ReachDate';
import BigButton from '../components/BigButton';
import MonthlyAmount from '../components/MonthlyAmount';
import GoalLogo from '../components/GoalLogo';

import houseLogo from '../assets/icons/buy-a-house.svg';

export const BuyHousePage = (): ReactElement => (
  <>
    <Title>
      <>
        Let&apos;s plan your <strong>saving goal.</strong>
      </>
    </Title>
    <CardWrapper>
      <>
        <GoalLogo goal={'Buy a house'} logo={houseLogo} />
        <Amount />
        <ReachDate />
        <MonthlyAmount />
        <BigButton>Confirm</BigButton>
      </>
    </CardWrapper>
  </>
);

export default BuyHousePage;
