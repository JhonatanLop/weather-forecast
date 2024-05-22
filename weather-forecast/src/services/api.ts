import axios from 'axios';

// salvas em um arquivo .env
const WEATHER_API_KEY = 'HG_WEATHER_API_KEY'; 
const GEOCODING_API_KEY = 'OPENWEATHER_API_KEY'; 

export const getWeather = async (city: string) => {
  const response = await axios.get(`https://api.hgbrasil.com/weather?key=${WEATHER_API_KEY}&city_name=${city}`);
  return response.data;
};

export const getCityCoordinates = async (city: string) => {
  const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${GEOCODING_API_KEY}`);
  return response.data[0];
};
