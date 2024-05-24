import axios from 'axios';

const WEATHER_API_KEY = "YOUR_API_KEY";

export const getWeather = async (lat: number, lon: number) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
  return response.data;
};

export const getCityCoordinates = async (city: string) => {
  const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${WEATHER_API_KEY}`);
  return response.data[0];
};