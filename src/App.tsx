import { ThemeProvider } from 'styled-components';
import originTheme from './styles/theme/origin';

import Header from './components/Header';
import BuyHousePage from './pages/BuyHousePage';

export const App = (): JSX.Element => (
  <ThemeProvider theme={originTheme}>
    <Header />
    <BuyHousePage />
  </ThemeProvider>
);

export default App;
