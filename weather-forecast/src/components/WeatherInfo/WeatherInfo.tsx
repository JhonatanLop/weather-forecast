import React from 'react';
import './weather.css';

interface WeatherInfoProps {
  weather: {
    city: string;
    date: string;
    temp: number;
    tempMax: number;
    tempMin: number;
    description: string;
    icon: string;
    rainProbability: number;
    moonPhase: string;
    moonIcon: string;
  } | null;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather }) => {
  if (!weather) return null;

  return (
    <div>
      <header className="weather-header">
        <h2>{weather.city}</h2>
      </header>
      <main className="weather-content">
        <p>Date: {weather.date}</p>
        <p>Temperature: {weather.temp}°C</p>
        <p>Max Temperature: {weather.tempMax}°C</p>
        <p>Min Temperature: {weather.tempMin}°C</p>
        <p>Description: {weather.description}</p>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt={weather.description} />
        <p>Rain Probability: {weather.rainProbability * 100}%</p>
        <p>Moon Phase: {weather.moonPhase}</p>
        <img src={weather.moonIcon} alt={weather.moonPhase} />
      </main>
    </div>
  );
};

export default WeatherInfo;
