import React, { ReactElement } from 'react';

import { Container } from './styles';

interface AuxProps {
  children: React.ReactChild;
}

const CardWrapper = ({ children }: AuxProps): ReactElement => (
  <Container>{children}</Container>
);

export default CardWrapper;
