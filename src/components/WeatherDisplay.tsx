import { WeatherData } from "../types";

interface WeatherDisplayProps {
  weather: WeatherData | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  if (!weather) return <p>No weather data available.</p>;

  // Function to get background image based on temperature
  const getBackgroundImage = (temp: number) => {
    if (temp > 25) return "/hot.jpg";  // A warm, sunny image
    if (temp > 15) return "/mild.jpg"; // A partly cloudy image
    if (temp > 5) return "/cool.jpg";  // A cooler, cloudy image
    return "/cold.jpg";                // A snowy or winter image
  };

  // Ensure weather exists before accessing forecast[0]
  const backgroundImage = getBackgroundImage(weather.forecast[0]?.temp || 0);

  return (
    <div
      className="weather-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Weather Forecast for {weather.location}</h2>
      <div className="forecast-container">
        {weather.forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <h3>{day.date}</h3>
            <p><strong>Temperature:</strong> {day.temp}°C</p>
            <p><strong>Wind Speed:</strong> {day.wind} m/s</p>
            <p><strong>Elevation:</strong> {Math.round(day.elevation)}m</p>
            <p><strong>Latitude:</strong> {day.latitude.toFixed(2)}</p>
            <p><strong>Longitude:</strong> {day.longitude.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
