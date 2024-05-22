import React, { useState } from 'react';
import Map from './components/Map/Map';
import CitySearch from './components/CitySearch/CitySearch';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import SavedCities from './components/SavedCities/SavedCities';
import { getWeather, getCityCoordinates } from './services/api';

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [savedCities, setSavedCities] = useState<string[]>([]);

  const handleSearch = async (city: string) => {
    try {
      const cityData = await getCityCoordinates(city);
      const weatherData = await getWeather(city);

      setWeather({
        city: cityData.name,
        date: new Date().toLocaleDateString(),
        temp: weatherData.temp,
        tempMax: weatherData.tempMax,
        tempMin: weatherData.tempMin,
        description: weatherData.description,
        icon: weatherData.icon,
        rainProbability: weatherData.rainProbability,
        moonPhase: weatherData.moonPhase,
        moonIcon: weatherData.moonIcon,
      });

      if (!savedCities.includes(cityData.name)) {
        setSavedCities([...savedCities, cityData.name]);
      }
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <CitySearch onSearch={handleSearch} />
      <WeatherInfo weather={weather} />
      <SavedCities cities={savedCities} onSelectCity={handleSearch} />
      <Map />
    </div>
  );
};

export default App;
