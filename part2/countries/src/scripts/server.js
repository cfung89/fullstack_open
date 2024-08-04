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
  const request = axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${api_key}&units=metric`,
  );
  return request.then((response) => {
    return response.data.current;
  });
};

export default { getAll, getWeather };
