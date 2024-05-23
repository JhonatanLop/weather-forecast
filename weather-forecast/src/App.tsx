import React, { useState } from 'react';
import Map from './components/Map/Map';
import CitySearch from './components/CitySearch/CitySearch';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import SavedCities from './components/SavedCities/SavedCities';
import { getWeather, getCityCoordinates } from './services/api';
import 'ol/ol.css';  // Importa os estilos básicos do OpenLayers
import './styles/App.css'

const App: React.FC = () => {
    const [weather, setWeather] = useState<any>(null);
    const [savedCities, setSavedCities] = useState<string[]>([]);
    const [mapPosition, setMapPosition] = useState({ lat: 0, lon: 0, zoom: 2 });

    const handleSearch = async (city: string) => {
        try {
            const cityData = await getCityCoordinates(city);
            const weatherData = await getWeather(cityData.lat, cityData.lon);

            setWeather({
                city: cityData.name,
                date: new Date(weatherData.current.dt * 1000).toLocaleDateString(),
                temp: weatherData.current.temp,
                tempMax: weatherData.daily[0].temp.max,
                tempMin: weatherData.daily[0].temp.min,
                description: weatherData.current.weather[0].description,
                icon: weatherData.current.weather[0].icon,
                rainProbability: weatherData.daily[0].pop,
                moonPhase: weatherData.daily[0].moon_phase,
                moonIcon: weatherData.daily[0].moon_icon, // Note: You'll need to map the moon phase to an icon
            });

            if (!savedCities.includes(cityData.name)) {
                setSavedCities([...savedCities, cityData.name]);
            }

            // Update the map position
            setMapPosition({ lat: cityData.lat, lon: cityData.lon, zoom: 10 });
        } catch (error) {
            console.error('Error fetching weather data', error);
        }
    };

    return (
        <main className="main">
            <header className="header">
                <div>
                    <h1 className="title">Weather Forecast</h1>
                </div>
                <CitySearch onSearch={handleSearch} />
                <WeatherInfo weather={weather} />
                <SavedCities cities={savedCities} onSelectCity={handleSearch} />
            </header>
            <article className="map">
                <Map lat={mapPosition.lat} lon={mapPosition.lon} zoom={mapPosition.zoom} />
            </article>
        </main>
    );
};

export default App;
