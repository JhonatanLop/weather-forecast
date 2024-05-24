import React, { useState } from 'react';
import Map from './components/Map/Map';
import CitySearch from './components/CitySearch/CitySearch';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import SavedCities from './components/SavedCities/SavedCities';
import Popup from './components/Popup/Popup';
import { getWeather, getCityCoordinates } from './services/api';
import 'ol/ol.css';
import './styles/app.css'
import weatherIcon from './assets/weather_2.svg';

const App: React.FC = () => {
    const [weather, setWeather] = useState<any>(null);
    const [savedCities, setSavedCities] = useState<string[]>([]);
    const [mapPosition, setMapPosition] = useState({ lat: 0, lon: 0, zoom: 2 });
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isWeatherVisible, setIsWeatherVisible] = useState(true);
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

            // pegando somente os nomes das cidades em português
            let cityNamePtBr: string;
            if (cityData.local_names === undefined) { cityNamePtBr = cityData.name; }
            else { cityNamePtBr = cityData.local_names.pt; }

            // Atualiza o estado do componente com os dados do clima
            setWeather({
                city: cityNamePtBr,
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

            // atualiza visibilidade do clima caso esteja false
            if (!isWeatherVisible) {
                setIsWeatherVisible(true);
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

    const handleCloseWeather = () => {
        setIsWeatherVisible(false);
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
        if (!isWeatherVisible) return null;

        return (
            <div className="weather-popup">
                <WeatherInfo
                    weather={weather}
                    onClose={handleCloseWeather} />
            </div>
        );
    }

    return (
        <main className="main">
            <header className="header">
                <div className="conteiner">
                    <h1 className="title">Weather Forecast
                        <img src={weatherIcon} alt="Weather icon" />
                    </h1>
                    <CitySearch onSearch={handleSearch} />
                </div>
                <div className="history">
                    <SavedCities cities={savedCities} onSelectCity={handleSearch} />
                </div>
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
