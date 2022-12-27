import styled from 'styled-components';

export const Container = styled.a`
  display: block;
  left: 0;
  bottom: 0;
  right: 0;
  font-size: 16px;
  max-width: 296px;
  padding: 10px;
  border-radius: 32px;
  line-height: 20px;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.originBlue};
`;
