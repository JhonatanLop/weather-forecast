import React from 'react';
import './savedCities.css';

interface SavedCitiesProps {
    cities: string[];
    onSelectCity: (city: string) => void;
}


const SavedCities: React.FC<SavedCitiesProps> = ({ cities, onSelectCity }) => {
    if (cities.length === 0) {
        return (
            <select onChange={(e) => onSelectCity(e.target.value)} className="placeholder">
                <option value="" >Histórico de busca</option>
            </select>
        );
    }

    return (
        <select onChange={(e) => onSelectCity(e.target.value)} className="select-list">
            {cities.map((city, index) => (
                <option key={index} value={city}>
                    {city}
                </option>
            ))}
        </select>
    );
};

export default SavedCities;
