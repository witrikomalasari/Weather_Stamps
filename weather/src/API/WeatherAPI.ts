import axios from 'axios';

export const ProductAPIs = axios.create({
  baseURL: 'https://api.openweathermap.org/data/3.0/onecall/',
});

// https://api.openweathermap.org/data/3.0/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}
