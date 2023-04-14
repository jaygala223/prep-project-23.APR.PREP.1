import React, { useState, useEffect } from 'react';

function Geolocation() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_APIKEY}`;

        fetch(apiURL)
          .then(response => response.json())
          .then(data => setWeatherData(data));
      },
      error => {
        console.log(error);
      }
    );
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const temperature = Math.round(weatherData.main.temp - 273.15);
  const city = weatherData.name;
  const description = weatherData.weather[0].description;

  return (
    <div>
      <p>{description}</p>
      <p>Temperature: {temperature}°C</p>
      <p>{city}</p>
      
      
    </div>
  );
}

export default Geolocation;