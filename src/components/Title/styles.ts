import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 24px;
  color: ${(props) => props.theme.colors.originBlue};

  @media (max-width: 560px) {
    font-size: 18px;
  }
`;
