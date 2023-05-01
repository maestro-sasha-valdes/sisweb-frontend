import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import ListProducts from "../pages/ListProducts";
import NewProduct from "../pages/NewProduct";
import EditProduct from "../pages/EditProduct";
import Shop from "../pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <ListProducts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/new-product",
    element: <NewProduct />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/edit-product/:id",
    element: <EditProduct />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
