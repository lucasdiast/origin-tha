import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  margin: 0 16px 24px 0;
  width: 100%;
  max-width: 264px;

  @media (max-width: 560px) {
    max-width: 100%;
    margin: 0 0 24px;
  }
`;

export const SpanContainer = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
  color: ${(props) => props.theme.colors.fontBlueGrey900};

  @media (max-width: 560px) {
    font-size: 12px;
  }
`;

export const InputContainer = styled.input`
  width: 100%;
  max-width: 264px;
  font-family: 'Rubik';
  font-weight: 500;
  font-size: 24px;
  padding: 12px 32px 12px 48px;
  border: 1px solid ${(props) => props.theme.colors.borderGrey};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.fontBlueGrey600};

  @media (max-width: 560px) {
    max-width: 100%;
    font-size: 20px;
  }

  :focus-visible {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.fontBlueGrey900};
  }

  //remove the arrows from the input
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;
