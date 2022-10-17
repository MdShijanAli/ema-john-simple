import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Shipping from './components/Shipping/Shipping';
import PrivateROute from './routes/PrivateROute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: < Orders ></Orders >
        },
        {
          path: '/inventory',
          element: <PrivateROute><Inventory></Inventory></PrivateROute>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/register',
          element: <SignUp></SignUp>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/shipping',
          element: <PrivateROute><Shipping></Shipping></PrivateROute>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
