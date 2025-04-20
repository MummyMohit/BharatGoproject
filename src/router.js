import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "./Layout/Main";
import Orders from "./Views/Orders/Orders";
import ProductList from "./Views/productlist";
import Clothes from "./Views/Clothes/Clothes";
import Electronic from "./Views/Electronics/Electronic";
import Furniture from "./Views/Furniture/Furniture";
import Toy from "./Views/Toys/Toy";
import User from "./Views/Users/user"
import SigIn from "./Login/Signup";
import Register from "./Login/register";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <SigIn />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "main",
      element: <Main />,
      
      children: [
        {
          path: "product",
          element: <ProductList />,
        },
        {
            path: "myorders",
            element: <Orders />,
          },
          {
            path: "clothes",
            element: <Clothes />,
          },
          {
            path: "electronic",
            element: <Electronic />,
          },
          {
            path: "furniture",
            element: <Furniture />,
          },
          {
            path: "toys",
            element: <Toy />,
          },
          {
            path: "myaccount",
            element: <User />,
          },
      ],
    },
  ]);