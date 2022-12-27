import React from 'react';
import MediumButton from '../MediumButton';
import { Container, Wrapper, Card, CardLogo } from './styles';

interface AuxProps {
  title: string;
  link: string;
  img: string;
}

const GoalCard = ({ title, link, img }: AuxProps) => {
  return (
    <Container className={`card-${link}`}>
      <Card>
        <Wrapper>
          <CardLogo src={img} alt={title} />
          <div>{title}</div>
        </Wrapper>
        <MediumButton link={link}>Setup goal</MediumButton>
      </Card>
    </Container>
  );
};

export default GoalCard;
