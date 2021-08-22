import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  margin: 0 16px 24px 0;
`;

export const SpanContainer = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
  color: ${(props) => props.theme.colors.fontBlueGrey900};
`;

export const InputContainer = styled.input`
  max-width: 264px;
  font-family: 'Rubik';
  font-weight: 500;
  font-size: 24px;
  padding: 12px 32px 12px 48px;
  border: 1px solid ${(props) => props.theme.colors.borderGrey};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.fontBlueGrey600};

  :focus-visible {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.fontBlueGrey900};
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
