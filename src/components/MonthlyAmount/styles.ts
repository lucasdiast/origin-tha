import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #e9eef2;
  border-radius: 4px;
  margin-bottom: 32px;
`;

export const WhiteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BlueContainer = styled(WhiteContainer)`
  background-color: #f4f8fa;
`;

export const TextContainer = styled.span`
  font-size: 12px;
  padding: 24px 32px;

  @media (max-width: 560px) {
    padding: 24px;
  }
`;

export const MessageContainer = styled(TextContainer)`
  font-size: 20px;
  padding-right: 0;

  @media (max-width: 560px) {
    font-size: 18px;
  }
`;

export const AmountContainer = styled(TextContainer)`
  padding-left: 0;
  font-family: 'Rubik';
  font-weight: 500;
  font-size: 32px;
  color: ${(props) => props.theme.colors.lightBlue};

  @media (max-width: 560px) {
    font-size: 24px;
  }
`;
