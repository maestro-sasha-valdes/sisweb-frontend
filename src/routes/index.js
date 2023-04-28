import React from "react";
import { Routes, Route, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import ListProducts from "../pages/ListProducts";
import NewProduct from "../pages/NewProduct";
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
    element: <NewProduct />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
