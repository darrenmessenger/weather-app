export interface WeatherData {
    location: string;
    forecast: ForecastDay[];
  }
  
  export interface ForecastDay {
    date: string;
    temp: number;
    wind: number;
    elevation: number;
    latitude: number;
    longitude: number;
  }
  
  
  