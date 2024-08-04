import { useEffect, useState } from "react";
import server from "../scripts/server";

const Countries = ({ search, setSearch, countries, setCountries }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    server
      .getAll()
      .then((response) => {
        setCountries(
          response.filter((country) => {
            return country.name.common
              .toUpperCase()
              .includes(search.toUpperCase());
          }),
        );
      })
      .catch((error) => console.log("Error when fetching from countries API."));
  }, [search]);

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length > 1) {
    return (
      <div>
        {countries.map((country) => (
          <p key={country.name.common}>
            {country.name.common}&nbsp;
            <button
              type="button"
              onClick={() => setSearch(country.name.common)}
            >
              show
            </button>
          </p>
        ))}
      </div>
    );
  } else if (countries.length === 1) {
    server
      .getWeather(countries[0].latlng[0], countries[0].latlng[1])
      .then((response) => {
        setWeather({
          temp: response.main.temp,
          description: response.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
          wind: response.wind.speed,
        });
      })
      .catch((error) => console.log("Error when fetching from weather API."));

    // only getting the first capital city, for formatting purposes, nothing implemented for countries with multiple capital cities.
    return (
      <div>
        <h2>{countries[0].name.common}</h2>
        <div>
          <p>capital {countries[0].capital[0]}</p>
        </div>
        <p>area {countries[0].area}</p>
        <h3>languages:</h3>
        <ul>
          {Object.values(countries[0].languages).map((language) => {
            return <li key={language}>{language}</li>;
          })}
        </ul>
        <img src={countries[0].flags.png} alt={countries[0].flags.alt} />
        <h3>Weather in {countries[0].capital[0]}</h3>
        <p>temperature {weather.temp} Celsius</p>
        <img src={weather.icon} alt={weather.description} />
        <p>wind {weather.wind} m/s</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>No country matches the search</p>
      </div>
    );
  }
};

export default Countries;
