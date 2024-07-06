import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../src/components/pages/Home";
import About from "./components/pages/About";
import ErrorPage from "./components/pages/ErrorPage";
import Layout from "./Layout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/a-propos",
        element: <About />,
      },
    ],
  },
]);
export default Router;
