import React from "react";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import { WeatherData, ForecastDay } from "./types";

const GEO_API = "https://geocoding-api.open-meteo.com/v1/search?name=";
const WEATHER_API = "https://api.open-meteo.com/v1/forecast?daily=temperature_2m_max,wind_speed_10m_max&timezone=auto";

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const fetchWeather = async (city: string) => {
    try {
      const geoResponse = await fetch(`${GEO_API}${city}&count=1`);
      const geoData = await geoResponse.json();
      if (!geoData.results) {
        alert("City not found.");
        return;
      }
      const { latitude, longitude, name } = geoData.results[0];

      const weatherResponse = await fetch(`${WEATHER_API}&latitude=${latitude}&longitude=${longitude}`);
      const weatherData = await weatherResponse.json();

      const elevation = weatherData.elevation;

      const forecast: ForecastDay[] = weatherData.daily.temperature_2m_max
      .slice(0, 5)
      .map((temp: number, index: number) => ({
        date: new Date(weatherData.daily.time[index]).toDateString(),
        temp: temp,
        wind: weatherData.daily.wind_speed_10m_max[index],
        elevation: elevation, 
        latitude: latitude,
        longitude: longitude,
      }));

      setWeather({ location: name, forecast });
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
