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
