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
    } | null;
    onClose: () => void;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather, onClose}) => {
    if (!weather) return null;

      // convertendo dados para o padrão brasileiro
    const convertedData = {
        date: new Date(weather.date).toLocaleDateString('pt-BR'),
        temp: (weather.temp - 273.15).toFixed(2),
        tempMax: (weather.tempMax - 273.15).toFixed(2),
        tempMin: (weather.tempMin - 273.15).toFixed(2)
    };

    return (
        <div className="weather-info">
            <header className="weather-header">
                <button onClick={onClose} className="close-button">&times;</button>
                <h2>{weather.city}</h2>
            </header>
            <main className="weather-content">
                <p>Data: {convertedData.date}</p>
                <p>Temperatura: {convertedData.temp}°C</p>
                <p>Temp Max: {convertedData.tempMax}°C</p>
                <p>Temp Min: {convertedData.tempMin}°C</p>
                <p>Descrição: {weather.description}</p>
                <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt={weather.description} />
            </main>
        </div>
    );
};

export default WeatherInfo;
