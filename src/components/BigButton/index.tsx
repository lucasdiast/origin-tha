import React, { ReactElement } from 'react';

import { Container } from './styles';

interface AuxProps {
  children: React.ReactChild;
}

const BigButton = ({ children }: AuxProps): ReactElement => (
  <Container>{children}</Container>
);

export default BigButton;
