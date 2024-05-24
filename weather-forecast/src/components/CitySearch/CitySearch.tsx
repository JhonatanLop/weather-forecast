import React, { useState } from 'react';
import './citySearch.css'
import searchIcon from '../../assets/search_icon.svg'

interface CitySearchProps {
  onSearch: (city: string) => void;
}

const CitySearch: React.FC<CitySearchProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
    setCity('');
  };

  return (
    <div className="search">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Nome da cidade"
      />
      <button onClick={handleSearch} className="search-button"> <img src={searchIcon} alt="Pesquisar" /> </button>
    </div>
  );
};

export default CitySearch;
