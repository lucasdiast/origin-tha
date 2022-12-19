import React, { ReactElement, ReactChild } from 'react';
import { Container } from './styles';

interface AuxProps {
  children: ReactChild;
}

const BigButton = ({ children }: AuxProps): ReactElement => (
  <Container>{children}</Container>
);

export default BigButton;
