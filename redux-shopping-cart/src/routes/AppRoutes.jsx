import { createBrowserRouter } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";

import MainLayout from "../components/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    element: <ProtectedRoute />,

    children: [
      {
        path: "/",
        element: <MainLayout />,

        children: [
          {
            index: true,
            element: <Home />,
          },

          {
            path: "products",
            element: <Products />,
          },

          {
            path: "products/:id",
            element: <ProductDetails />,
          },

          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
    ],
  },
]);

export default router;