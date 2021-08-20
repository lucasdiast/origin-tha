import React from 'react';
import icon from '../../assets/icons/buy-a-car.svg';
import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <img src={icon} alt="icon" />
  </Container>
);

export default Header;
