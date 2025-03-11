import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherDisplay from "./WeatherDisplay";
import "@testing-library/jest-dom";

test("renders weather display with location and forecast", () => {
  const mockWeather = {
    location: "London",
    forecast: [
      { date: "March 10, 2025", condition: "Sunny", temp: 18, wind: 6 },
    ],
  };

  render(<WeatherDisplay weather={mockWeather} />);

  // Check if location and forecast title appear
  expect(screen.getByText("Weather Forecast for London")).toBeInTheDocument();
  expect(screen.getByText("March 10, 2025")).toBeInTheDocument();
});
