import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 16px;

  :first-child {
    margin-left: 0;
  }
`;

export const Card = styled.div`
  min-width: 278px;
  min-height: 248px;
  border-radius: 8px;
  padding: 16px 16px 24px;
  line-height: 24px;
  margin: 0 auto;
  text-align: center;
  background-color: white;
  cursor: pointer;

  @media (max-width: 560px) {
    padding: 24px;
    min-height: 144px;
  }
`;

export const CardLogo = styled.img`
  width: 40px;
  height: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  @media (max-width: 560px) {
    flex-direction: row;
  }
`;
