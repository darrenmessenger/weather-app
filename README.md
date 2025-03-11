#  Weather App

## Overview
This is a React Weather App that allows users to search for a city and retrieve its weather forecast using an external API. The app displays key weather details such as temperature, wind speed, and forecast conditions.

## Features
- Search for a city to get its weather forecast
- Displays date, temperature, longitude, latitude and wind speed
- Dynamic backgrounds change based on weather conditions
- Unit testing with Jest & React Testing Library

---

## Technologies Used
### Frontend
- React.js – JavaScript library for building UI
- TypeScript – Statically typed JavaScript
- CSS – Styling for components
- Jest & React Testing Library – For unit testing  

### Backend / API
- Open-Meteo API – Fetches weather data based on city search

### Development Tools
- Node.js – JavaScript runtime
- Vite – Fast build tool for modern web apps

---

## Getting Started

### Clone the repository
```
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### Install dependencies
```
npm install
```

### Run the development server
```
npm run dev
```
Then open http://localhost:5173 in your browser.

---

##  Running Tests
This project uses Jest for unit testing.

### Run all tests
```
npm test
```

### Unit Tests Overview
#### `SearchBar.test.tsx`
Tests if the search bar component:
- Renders correctly
- Calls `onSearch` function when the search button is clicked

#### `WeatherDisplay.test.tsx`
Tests if the weather display component:
- Displays correct city and forecast data
- Handles missing weather data gracefully

#### `App.test.tsx`
Tests if the main application:
- Fetches weather data correctly
- Displays forecast when search is performed

---




