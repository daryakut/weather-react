import Weather from "./Weather";
import Search from "./Search";
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [cityName, setCityName] = useState("");

  function handleCitySearch(updatedCityName) {
    setCityName(updatedCityName);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search onCitySearch={handleCitySearch} />
      <Weather city={cityName} />
    </div>
  );
}
