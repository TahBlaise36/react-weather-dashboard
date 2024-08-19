import { useState, useEffect } from "react";

const KEY = "3959086a80012224d178ebf974f84b9b";

export function useWeather(city) {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const location = "yaounde";

  useEffect(
    function () {
      async function fetchWeatherData() {
        try {
          setIsLoading(true);

          // 1) FECTHING COUNTRY
          const curLocation = city ? city : location;

          const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${curLocation}`
          );
          const geoData = await geoRes.json();
          // console.log(geoData.results.at(0));

          if (!geoData.results) throw new Error("Location not found");

          const {
            latitude: lat,
            longitude: lon,
            // timezone,
            // name,
            // country_code,
          } = geoData.results.at(0);

          // 2) FECTHING WEATHER DATA
          // console.log(lat, lon);

          const weatherRes = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${KEY}`
          );

          if (!weatherRes.ok)
            throw new Error("Something went wrong with fetching weather data");
          const data = await weatherRes.json();

          // console.log(data);
          setWeatherData(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchWeatherData();
    },
    [city, location]
  );

  return { weatherData, error, isLoading };
}
