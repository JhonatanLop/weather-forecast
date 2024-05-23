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
  if (!weather) return null;

  return (
    <div>
      <h2>{weather.city}</h2>
      <p>Date: {weather.date}</p>
      <p>Temperature: {weather.temp}°C</p>
      <p>Max Temperature: {weather.tempMax}°C</p>
      <p>Min Temperature: {weather.tempMin}°C</p>
      <p>Description: {weather.description}</p>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt={weather.description} />
      <p>Rain Probability: {weather.rainProbability * 100}%</p>
      <p>Moon Phase: {weather.moonPhase}</p>
      <img src={weather.moonIcon} alt={weather.moonPhase} />
    </div>
  );
};

export default WeatherInfo;
