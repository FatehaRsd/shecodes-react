import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  let [city, setCity] = useState(null);
  //   let [loaded, setLoaded] = useState(false);
  //   let [weather, setWeather] = useState({});
  let [temperature, setTemperature] = useState(null);
  let [description, setDesription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function displayWeather(response) {
    setTemperature(response.data.temperature.current);
    setWind(response.data.wind.speed);
    setHumidity(response.data.temperature.humidity);
    setIcon(response.data.condition.icon_url);
    setDesription(response.data.condition.description);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "909ft9b4ed56801561bb3a80d18954oa";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          required
          className="search-input"
          id="search-input"
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
      <ul>
        <li>Temperature : {Math.round(temperature)} °C</li>
        <li>Desription : {description}</li>
        <li>Humidity : {humidity} %</li>
        <li>Wind Speed : {wind} km/h</li>

        <img src={icon} alt="" />
      </ul>
    </div>
  );
}
