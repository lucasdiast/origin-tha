import React, { ReactElement } from 'react';
import icon from '../../assets/icons/logo.svg';
import { Container } from './styles';

const Header = (): ReactElement => (
  <Container>
    <img src={icon} alt="logo" />
  </Container>
);

export default Header;
