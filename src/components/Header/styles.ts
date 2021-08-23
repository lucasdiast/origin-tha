import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 56px;
  margin-bottom: 48px;
  background-color: ${(props) => props.theme.colors.white};

  @media (max-width: 560px) {
    padding: 12px 16px;
    margin-bottom: 32px;

    img {
      height: 24px;
    }
  }
`;
