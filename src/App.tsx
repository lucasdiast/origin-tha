import React from 'react';
import { ThemeProvider } from 'styled-components';
import originTheme from './styles/theme/origin';
import Header from './components/Header';
import BuyCarPage from './pages/BuyCarPage';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={originTheme}>
      <Header />
      <BuyCarPage />
    </ThemeProvider>
  );
}

export default App;
