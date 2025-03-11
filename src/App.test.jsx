import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("renders the app with a search bar", () => {
  render(<App />);
  
  expect(screen.getByPlaceholderText("Enter city...")).toBeInTheDocument();
  expect(screen.getByText("Search")).toBeInTheDocument();
});
