import React, { ReactElement, ReactChild } from 'react';
import { Container } from './styles';

interface AuxProps {
  children: ReactChild;
  onClickAction: () => void;
}

const BigButton = ({ children, onClickAction }: AuxProps): ReactElement => (
  <Container className="big-button" onClick={() => onClickAction()}>
    {children}
  </Container>
);

export default BigButton;
