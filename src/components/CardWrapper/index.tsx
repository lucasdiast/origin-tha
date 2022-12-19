import React, { ReactElement, ReactChild } from 'react';
import { Container } from './styles';

interface AuxProps {
  children: ReactChild;
}

const CardWrapper = ({ children }: AuxProps): ReactElement => (
  <Container>{children}</Container>
);

export default CardWrapper;
