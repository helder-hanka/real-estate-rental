import React from "react";
import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

test("renders Router page", async () => {
  render(<RouterProvider router={Router} />);
  const headingElement = screen.getAllByRole(/Learn Router/i);
  expect(headingElement).toBeInTheDocument();
});
