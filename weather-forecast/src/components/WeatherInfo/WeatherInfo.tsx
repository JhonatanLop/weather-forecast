import React from 'react';

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
  if (!weather) return <div>No weather data available</div>;

  return (
    <div>
      <h2>{weather.city}</h2>
      <p>Date: {weather.date}</p>
      <p>Temperature: {weather.temp}°C</p>
      <p>Max Temperature: {weather.tempMax}°C</p>
      <p>Min Temperature: {weather.tempMin}°C</p>
      <p>Weather: {weather.description} <img src={weather.icon} alt={weather.description} /></p>
      <p>Rain Probability: {weather.rainProbability}%</p>
      <p>Moon Phase: {weather.moonPhase} <img src={weather.moonIcon} alt={weather.moonPhase} /></p>
    </div>
  );
};

export default WeatherInfo;
