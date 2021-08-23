import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 32px;
`;

export const Logo = styled.img`
  margin-right: 16px;
`;

export const GoalTitle = styled.span`
  display: block;
  font-size: 24px;
  margin-bottom: 8px;
  font-family: 'Rubik';
  font-weight: 500;

  @media (max-width: 560px) {
    font-size: 20px;
  }
`;
