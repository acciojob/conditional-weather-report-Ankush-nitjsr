import React, { useState } from "react";

const WeatherApp = () => {
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny",
  });

  let temperatureDisplayColor = weather.temperature > 20 ? "red" : "blue";
  return (
    <div>
      <p>
        Temperature:{" "}
        <span style={{ color: temperatureDisplayColor }}>
          {weather.temperature}
        </span>
      </p>
      <p>Condition: {weather.conditions}</p>
    </div>
  );
};

export default WeatherApp;
