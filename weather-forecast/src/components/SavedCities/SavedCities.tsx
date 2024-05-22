import React from 'react';

interface SavedCitiesProps {
  cities: string[];
  onSelectCity: (city: string) => void;
}

const SavedCities: React.FC<SavedCitiesProps> = ({ cities, onSelectCity }) => {
  return (
    <div>
      <select onChange={(e) => onSelectCity(e.target.value)}>
        <option value="">Select a saved city</option>
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
