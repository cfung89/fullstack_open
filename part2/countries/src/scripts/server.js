import axios from "axios";

const api_key = import.meta.env.VITE_WEATHER_KEY;

const getAll = () => {
  const request = axios.get(
    `https://studies.cs.helsinki.fi/restcountries/api/all`,
  );
  return request.then((response) => {
    return response.data;
  });
};

const getWeather = (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;
  const request = axios.get(url);
  return request.then((response) => {
    return response.data;
  });
};

export default { getAll, getWeather };
