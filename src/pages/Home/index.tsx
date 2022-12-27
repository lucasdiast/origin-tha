import { ReactElement } from 'react';
import GoalCard from '../../components/GoalCard';
import Title from '../../components/Title';
import CollegeLogo from '../../assets/icons/go-to-college.svg';
import BuyHouse from '../../assets/icons/buy-a-house.svg';
import BuyCar from '../../assets/icons/buy-a-car.svg';
import { Wrapper } from './styles';

const cards = [
  {
    title: 'Buy a house',
    link: 'buy-a-house',
    img: BuyHouse,
  },
  {
    title: 'Buy a car',
    link: 'buy-a-car',
    img: BuyCar,
  },
  {
    title: 'Go to college',
    link: 'go-to-college',
    img: CollegeLogo,
  },
];

export const Home = (): ReactElement => {
  return (
    <>
      <Title>Here are your savings goals!</Title>
      <Wrapper>
        {cards.map((obj) => {
          return (
            <GoalCard
              title={obj.title}
              link={obj.link}
              img={obj.img}
              key={obj.title}
            />
          );
        })}
      </Wrapper>
    </>
  );
};

export default Home;
