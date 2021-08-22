import React, { ReactElement } from 'react';
import { Container, GoalTitle, Logo } from './styles';

interface AuxProps {
  goal: string;
  logo: string;
}

const GoalLogo = ({ goal, logo }: AuxProps): ReactElement => {
  return (
    <Container>
      <Logo src={logo} alt="goal" />
      <div>
        <GoalTitle>{goal}</GoalTitle>
        <span>Saving goal</span>
      </div>
    </Container>
  );
};

export default GoalLogo;
