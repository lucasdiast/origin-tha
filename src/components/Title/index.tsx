import React, { ReactElement, ReactChild } from 'react';
import { Container } from './styles';

interface AuxProps {
  children: ReactChild;
}

const Title = ({ children }: AuxProps): ReactElement => (
  <Container>{children}</Container>
);

export default Title;
