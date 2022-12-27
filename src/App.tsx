import { ThemeProvider } from 'styled-components';
import originTheme from './styles/theme/origin';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import BuyHouse from './pages/BuyHouse';
import BuyCar from './pages/BuyCar';
import GoToCollege from './pages/GoToCollege';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'buy-a-house',
    element: <BuyHouse />,
  },
  {
    path: 'buy-a-car',
    element: <BuyCar />,
  },
  {
    path: 'go-to-college',
    element: <GoToCollege />,
  },
]);

export const App = (): JSX.Element => (
  <ThemeProvider theme={originTheme}>
    <Header />
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
