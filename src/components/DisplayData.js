import React, { useState } from "react";

const DisplayData = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [hemisphere, setHemisphere] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [month, setMonth] = useState(() => {
    return new Date().getMonth() + 1;
  });

  const getData = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        if (position.coords.latitude > 0) setHemisphere("North hemisphere");
        else if (position.coords.latitude < 0)
          setHemisphere("South hemisphere");
        else setHemisphere("Equator");
      });
    } else {
      alert("Unable to get your location");
    }
  };

  return (
    <div>
      <form onSubmit={getData}>
        <label>Location:</label>
        <br />
        <label>Latitude:</label>
        <span>{latitude}</span>
        <br />
        <label>Longitude:</label>
        <span>{longitude}</span>
        <br />
        <label>Hemisphere:</label>
        <span>{hemisphere}</span>
        <br />
        <label>Current temperature:</label>
        <span>{temperature}</span>
        <br />
        {hemisphere &&
          ((month >= 6 && month <= 8 && hemisphere == "North hemisphere") ||
            ((month === 12 || month === 1 || month === 2) &&
              hemisphere == "South hemisphere")) && (
            <div>
              <label>Weather condition:</label>
              <span>Summer</span>
            </div>
          )}
        {hemisphere &&
          ((month >= 6 && month <= 8 && hemisphere == "North hemisphere") ||
            ((month === 12 || month === 1 || month === 2) &&
              hemisphere == "North hemisphere")) && (
            <div>
              <label>Weather condition:</label>
              <span>Winter</span>
            </div>
          )}
        {hemisphere &&
          ((month >= 9 && month <= 11 && hemisphere == "South hemisphere") ||
            (month >= 3 && month <= 5 && hemisphere == "North hemisphere")) && (
            <div>
              <label>Weather condition:</label>
              <span>Spring</span>
            </div>
          )}
        {hemisphere &&
          ((month >= 9 && month <= 11 && hemisphere == "North hemisphere") ||
            (month >= 3 && month <= 5 && hemisphere == "South hemisphere")) && (
            <div>
              <label>Weather condition:</label>
              <span>Autumn</span>
            </div>
          )}
        <button type="submit">GetData</button>
      </form>
    </div>
  );
};

export default DisplayData;
