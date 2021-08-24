import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 200px;

  @media (max-width: 560px) {
    max-width: 100%;
  }
`;

export const SpanContainer = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.fontBlueGrey900};

  @media (max-width: 560px) {
    font-size: 12px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  margin-bottom: 24px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.borderGrey};

  :focus-visible {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.fontBlueGrey900};
  }

  @media (max-width: 560px) {
    padding: 7px;
  }
`;

export const ArrowLeft = styled.img`
  cursor: pointer;
  padding: 0 30px 0 12px;
`;

export const ArrowRight = styled(ArrowLeft)`
  padding: 0 12px 0 30px;
`;

export const DateWrapper = styled.div`
  text-align: center;
`;

export const MonthContainer = styled.span`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.fontBlueGrey900};

  @media (max-width: 560px) {
    font-size: 14px;
  }
`;

export const YearContainer = styled.span`
  color: ${(props) => props.theme.colors.fontBlueGrey400};
  margin: 0px;

  @media (max-width: 560px) {
    font-size: 14px;
  }
`;
