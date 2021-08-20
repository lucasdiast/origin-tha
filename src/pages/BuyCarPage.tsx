import React from 'react';
import CardWrapper from '../components/CardWrapper';
import InputLogo from '../components/InputLogo';
import BigButton from '../components/BigButton';
import Title from '../components/Title';

export function BuyCarPage(): JSX.Element {
  return (
    <>
      <div>
        <CardWrapper>
          <>
            <Title>
              <>
                Lets plan your <strong>saving goal.</strong>
              </>
            </Title>
            <InputLogo />
            <BigButton>Confirm</BigButton>
          </>
        </CardWrapper>
      </div>
    </>
  );
}

export default BuyCarPage;
