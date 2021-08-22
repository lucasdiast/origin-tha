import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  border-radius: 32px;
  padding: 10px;
  line-height: 36px;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.originBlue};
`;
