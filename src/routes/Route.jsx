
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Menu/Order/Order";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order',
          element:<Order></Order>
        },
        {
          path: 'order/:category',
          element:<Order></Order>
        }
      ]
    },
  ]);

