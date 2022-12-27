import { ThemeProvider } from 'styled-components';
import originTheme from './styles/theme/origin';

import Header from './components/Header';
import Home from './pages/Home';
import BuyHousePage from './pages/BuyHouse/BuyHousePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'buy-a-house',
    element: <BuyHousePage />,
  },
]);

export const App = (): JSX.Element => (
  <ThemeProvider theme={originTheme}>
    <Header />
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
