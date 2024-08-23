import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useCity } from "../context/CityContext";
// import { useFavoriteCities } from "../context/FavoriteCitiesContext";
import { addFavoriteCity } from "../services/apiFavoriteCities";
import { formatShortDate, getCountryName } from "../utils/helpers";

// import Toggle from "../components/Toggle";
import styles from "./Header.module.css";
import toast from "react-hot-toast";

export default function Header() {
  return (
    <header className={styles.header}>
      <SearchBox />
      <div className={styles.profile_box}>
        {/* <Toggle /> */}
        <AddCityButton />
      </div>
    </header>
  );
}

function SearchBox() {
  // 1) USE A CONTEXT
  const { onSetCity } = useCity();

  const [query, setQuery] = useState("");
  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    onSetCity(query);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.search_box}>
      <input
        type="text"
        placeholder="Search for City here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
      <button className={styles.seach_btn}>Search</button>
    </form>
  );
}

function AddCityButton() {
  const { weatherData } = useCity();
  // const { onAddFavCity } = useFavoriteCities();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addFavoriteCity,
    onSuccess: () => {
      toast.success(`${weatherData.city.name} was added to your list`);
      queryClient.invalidateQueries({
        queryKey: ["favCities"],
      });
    },
    onError: () => toast.error(`${weatherData.city.name} already exist`),
  });

  if (!weatherData) return;

  function handleAddCity() {
    const newCity = {
      city_id: weatherData.city.id,
      city: weatherData.city.name,
      country: getCountryName(weatherData.city.country),
      countryCode: weatherData.city.country,
      date: formatShortDate(weatherData.list[0].dt_txt.split(" ")[0]),
    };

    mutate(newCity);
    // onAddFavCity(newCity);
    console.log(newCity);
  }

  return (
    <button onClick={handleAddCity} className={styles.add_city_btn}>
      <span>+</span> <span>Add City</span>
    </button>
  );
}
