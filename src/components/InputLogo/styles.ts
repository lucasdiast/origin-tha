import styled from 'styled-components';

export const SpanContainer = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.fontBlueGrey900};
`;

export const InputContainer = styled.input`
  padding: 18px 36px;
  border: 1px solid #e9eef2;
  border-radius: 4px;
  font-size: 24px;
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
