import React, { useState } from 'react';
import Map from './components/Map/Map';
import CitySearch from './components/CitySearch/CitySearch';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import SavedCities from './components/SavedCities/SavedCities';
import Popup from './components/Popup/Popup';
import { getWeather, getCityCoordinates } from './services/api';
import 'ol/ol.css';
import './styles/App.css'

const App: React.FC = () => {
    const [weather, setWeather] = useState<any>(null);
    const [savedCities, setSavedCities] = useState<string[]>([]);
    const [mapPosition, setMapPosition] = useState({ lat: 0, lon: 0, zoom: 2 });
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState({ header: '', content: '' });

    // Função para buscar a previsão do tempo de uma cidade
    const handleSearch = async (city: string) => {
        try {
            // busca coordenadas da cidade
            const cityData = await getCityCoordinates(city);
            if (cityData === undefined) {
                setPopupContent({ header: 'Algo aconteceu...', content: 'Não foi possível encontrar a cidade informada.' });
                setIsPopupVisible(true);
                return;
            }
            // caso a cidade exista, os dados do clima são salvos na constante weatherData
            const weatherData = await getWeather(cityData.lat, cityData.lon);

            // Atualiza o estado do componente com os dados do clima
            setWeather({
                city: cityData.name,
                date: new Date(weatherData.dt * 1000).toLocaleDateString(),
                temp: weatherData.main.temp,
                tempMax: weatherData.main.temp_max,
                tempMin: weatherData.main.temp_min,
                description: weatherData.weather[0].description,
                icon: weatherData.weather[0].icon
            });

            // Inclui a cidade na lista de histórico se não estiver
            if (!savedCities.includes(cityData.name)) {
                setSavedCities([...savedCities, cityData.name]);
            }

            // Atualiza a posição do mapa
            setMapPosition({ lat: cityData.lat, lon: cityData.lon, zoom: 11 });
        } catch (error) {
            console.error('Error fetching weather data', error);
        }
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    // função de reenderização do popup
    function renderPopup() {
        if (!isPopupVisible) return null;

        return (
            <Popup
                header={popupContent.header}
                content={popupContent.content}
                onClose={handleClosePopup}
            />
        );
    }

    // função de reenderização do clima
    function renderWeatherInfo() {
        if (!weather) return null;

        return (
            <div className="weather-popup">
                <WeatherInfo weather={weather} />
            </div>
        );
    }

    return (
        <main className="main">
            <header className="header">
                <h1 className="title">Weather Forecast</h1>
                <CitySearch onSearch={handleSearch} />
                <SavedCities cities={savedCities} onSelectCity={handleSearch} />
            </header>
            {renderPopup()}
            {renderWeatherInfo()}
            <article className="map">
                <Map lat={mapPosition.lat} lon={mapPosition.lon} zoom={mapPosition.zoom} />
            </article>
        </main>
    );
};

export default App;
