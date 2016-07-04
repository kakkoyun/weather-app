import axios from 'axios';

// Constants
const API_KEY = '882c3dee33c764ff12dc05c9cc75e377';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`; // Only cities of Turkey.
  const request = axios.get(url);
  // console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}