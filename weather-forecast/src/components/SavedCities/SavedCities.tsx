import React from 'react';
import './savedCities.css';

interface SavedCitiesProps {
    cities: string[];
    onSelectCity: (city: string) => void;
}


const SavedCities: React.FC<SavedCitiesProps> = ({ cities, onSelectCity }) => {
    if (cities.length === 0) {
        return (
            <div>
                <select onChange={(e) => onSelectCity(e.target.value)} className="select-list">
                    <option value="" >Histórico de busca</option>
                </select>
            </div>
        );
    }

    return (
        <div>
            <select onChange={(e) => onSelectCity(e.target.value)} className="select-list">
                {cities.map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SavedCities;
