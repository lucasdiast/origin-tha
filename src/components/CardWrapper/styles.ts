import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  max-width: 560px;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 40px;
  margin: 0 auto;
`;
