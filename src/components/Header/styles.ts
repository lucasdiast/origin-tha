import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 56px;
  margin-bottom: 48px;
  background-color: ${(props) => props.theme.colors.white};
`;
