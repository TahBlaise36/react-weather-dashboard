// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useState } from "react";
import { useWeather } from "./hooks/useWeather";

import Aside from "./ui/Aside";
import Header from "./ui/Header";
import Weather from "./ui/Weather";

const initialCities = [
  {
    id: 8012502,
    city: "Socorro",
    country: "Portugal",
    countryCode: "PT",
    date: "8/13/2024",
  },

  {
    id: 2220957,
    city: "Yaoundé",
    country: "Cameroon",
    countryCode: "CM",
    date: "8/13/2024",
  },

  {
    id: 2232593,
    city: "Douala",
    country: "Cameroon",
    countryCode: "CM",
    date: "8/13/2024",
  },

  {
    id: 2233410,
    city: "Buea",
    country: "Cameroon",
    countryCode: "CM",
    date: "8/13/2024",
  },
];

function Dashboard() {
  const [city, setCity] = useState("");
  const { weatherData, error, isLoading } = useWeather(city);
  const [favCities, setFavCities] = useState(initialCities);
  const [selectedCityId, setSelectedCityId] = useState(2220957);

  // 2220957
  // console.log(weatherData);
  //   const cityId = weatherData?.city.id;
  //   console.log(cityId);
  //   console.log(selectedCityId);

  function handleAddFavCity(newCity) {
    setFavCities((cities) =>
      cities.map((city) => city.id).includes(newCity.id)
        ? cities
        : [newCity, ...cities]
    );
  }

  function handleSelectFavCity(id) {
    setSelectedCityId(id);
    // const searchCityId = favCities.find((cities) => cities.city === city)?.id;
    // setSelectedCityId((curId) => (cityId ? cityId : curId));
  }

  function handleDeleteFavCity(id) {
    setFavCities((favCities) =>
      favCities.filter((favCity) => favCity.id !== id)
    );
  }
  return (
    <div className="app" data-theme="dark">
      <Header
        weatherData={weatherData}
        city={city}
        onSetCity={setCity}
        onAddFavCity={handleAddFavCity}
      />
      <Weather
        city={city}
        weatherData={weatherData}
        isLoading={isLoading}
        error={error}
      />
      <Aside
        favCities={favCities}
        onSetCity={setCity}
        selectedCityId={selectedCityId}
        onSelectFavCity={handleSelectFavCity}
        onDeleteFavCity={handleDeleteFavCity}
      />
    </div>
  );
}

export default Dashboard;
