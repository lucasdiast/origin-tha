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
`;

export const MessageContainer = styled(TextContainer)`
  font-size: 20px;
`;

export const AmountContainer = styled(TextContainer)`
  font-family: 'Rubik';
  font-weight: 500;
  font-size: 32px;
  color: ${(props) => props.theme.colors.lightBlue};
`;
