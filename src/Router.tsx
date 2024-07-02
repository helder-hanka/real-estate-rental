import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../src/components/pages/Home";
import About from "./components/pages/About";
import ErrorPage from "./components/pages/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
export default Router;
