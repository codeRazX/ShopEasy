import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Store from './pages/Store';
import ErrorPage from './pages/ErrorPage';
import NotFound from './pages/NotFound';
import { fetching } from "./helper.js";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      
      {
        index: true,
        element: <Home/>
      },

      {
        path: 'store',
        element: <Store />,
        loader: ()=> fetching('https://fakestoreapi.com/products')
      },

      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])