import axios from 'axios';

export const WeatherAPIAPIs = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});
