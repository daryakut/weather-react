import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showTemperature(response) {
    console.log("response.data", response.data);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  const apiKey = "bae5c2a82b5d2bbadb52bfe79c8388f8";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemperature);

  let iconPath = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  if (temperature) {
    return (
      <div className="WeatherForecast">
        <ul>
          <li>
            Temperature: {props.city} {Math.round(temperature)}°C
          </li>
          <li>Description: {description} </li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <img src={iconPath} alt="weatherIcon" />
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
