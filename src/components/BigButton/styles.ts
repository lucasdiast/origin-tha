import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  border-radius: 32px;
  height: 40px;
  color: ${(props) => props.theme.colors.white};
  padding: 8px 0px;
  background-color: ${(props) => props.theme.colors.originBlue};
  line-height: 36px;
  margin: 0 20px;
  text-align: center;
`;
