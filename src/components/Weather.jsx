import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleClick = async () => {
    if (!city) return;
    try {
      setError("");
      // Step 1: Geocoding (City name to Lat/Lon)
      const geoResponse = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
      );
      
      if (!geoResponse.data.results || geoResponse.data.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name, country } = geoResponse.data.results[0];

      // Step 2: Weather Data
      const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m`
      );

      const current = weatherResponse.data.current_weather;
      setWeatherData({
        name: name,
        sys: { country: country },
        main: { 
          temp: current.temperature,
          humidity: weatherResponse.data.hourly.relativehumidity_2m[0] 
        },
        weather: [{ description: getCondition(current.weathercode) }],
        wind: { speed: current.windspeed }
      });
    } catch (err) {
      setError(err.message === "City not found" ? "City not found." : "API error.");
      setWeatherData(null);
    }
  };

  const getCondition = (code) => {
    const codes = {
      0: "Clear sky",
      1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
      45: "Fog", 48: "Depositing rime fog",
      51: "Light drizzle", 53: "Moderate drizzle", 55: "Dense drizzle",
      61: "Slight rain", 63: "Moderate rain", 65: "Heavy rain",
      71: "Slight snow fall", 73: "Moderate snow fall", 75: "Heavy snow fall",
      95: "Thunderstorm",
    };
    return codes[code] || "Cloudy";
  };

  return (
    <div className="weather-wrapper">
      <div className="weather-container">
        <h2>Weather Forecast</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city (e.g. London)"
            value={city}
            onChange={handleCityChange}
          />
          <button onClick={handleClick}>Get Weather</button>
        </div>

        {error && <p className="error">{error}</p>}

        {weatherData && (
          <div className="weather-info">
            <h3>{weatherData.name}, {weatherData.sys.country}</h3>
            <div className="temp">{Math.round(weatherData.main.temp)}°C</div>
            <div className="condition">{weatherData.weather[0].description}</div>
            <div className="details">
              <span>Humidity: {weatherData.main.humidity}%</span>
              <span>Wind: {weatherData.wind.speed} m/s</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
