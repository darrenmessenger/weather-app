import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("calls onSearch with input value when search button is clicked", () => {
  const mockSearch = jest.fn(); // Mock function
  render(<SearchBar onSearch={mockSearch} />);

  // Get input field and button
  const input = screen.getByPlaceholderText("Enter city...");
  const button = screen.getByText("Search");

  // Simulate typing in the input
  fireEvent.change(input, { target: { value: "London" } });

  // Simulate button click
  fireEvent.click(button);

  // Ensure the function is called with "London"
  expect(mockSearch).toHaveBeenCalledWith("London");
});
