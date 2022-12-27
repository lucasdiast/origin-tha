import React, { ReactElement, ReactChild } from 'react';
import { Container } from './styles';

interface AuxProps {
  children: ReactChild;
  link: string;
}

const MediumButton = ({ children, link }: AuxProps): ReactElement => (
  <Container className="big-button" href={link}>
    {children}
  </Container>
);

export default MediumButton;
