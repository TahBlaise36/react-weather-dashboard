import {
  deleteFavoriteCity,
  getFavoriteCities,
} from "../services/apiFavoriteCities";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCity } from "../context/CityContext";
// import { useFavoriteCities } from "../context/FavoriteCitiesContext";

import toast from "react-hot-toast";
import styles from "./Aside.module.css";
import AsideSkelecton from "../components/AsideSkelecton";
import HeadingSkelecton from "../components/HeadingSkelecton";

export default function Aside() {
  const {
    isLoading,
    data: favCities,
    error,
  } = useQuery({
    queryKey: ["favCities"],
    queryFn: getFavoriteCities,
  });

  // console.log(favCities);

  return (
    <aside className={styles.aside}>
      {isLoading ? (
        <HeadingSkelecton />
      ) : (
        <div className={styles.aside_header}>
          <h2 className={styles.primary_header}>Favorite Cities</h2>
          <p className={styles.show_cities_btn}>
            <span>Show All</span>
            <span></span>
          </p>
        </div>
      )}
      <div className={styles.fav_days_details_box}>
        {/* Display while data is loading */}
        {isLoading && <AsideSkelecton />}

        {/* Display if there is an error */}
        {error && (
          <div className={styles.no_day_details}>
            <h3>{error.message}</h3>
          </div>
        )}

        {/* Display when the list is empty */}
        {!isLoading && !error && favCities && favCities.length === 0 && (
          <div className={styles.no_day_details}>
            <h3>Your List is Empty</h3>
          </div>
        )}

        {/* Display when there are favorite cities */}
        {!isLoading && !error && favCities && favCities.length > 0 && (
          <div className={styles.fav_days_details_box}>
            {favCities.map((city) => (
              <FavoriteDayDetails
                key={city.id}
                id={city.city_id}
                city={city.city}
                country={city.country}
                date={city.date}
              />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

function FavoriteDayDetails({ id, city, country, date }) {
  // 3) CONSUMING CONTEXT VALUE
  const { onSetCity, weatherData } = useCity();
  // const {onDeleteFavCity} = useFavoriteCities();

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    // mutationFn: (id) => deleteFavoriteCity(id),
    // OR
    mutationFn: deleteFavoriteCity,
    onSuccess: () => {
      toast.success(`${city} has been deleted from your list`);
      queryClient.invalidateQueries({
        queryKey: ["favCities"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  const isSelected = weatherData?.city.id === id;
  function handleSelect() {
    onSetCity(city);
  }

  function handleDelete(id) {
    // onDeleteFavCity(id)
    mutate(id);
  }

  return (
    <div
      onClick={handleSelect}
      className={`${styles.fav_day_details} ${isSelected ? styles.active : ""}`}
    >
      <div className={styles.fav_details}>
        <h3 className="city">{city}</h3>
        <p className={styles.temp_text}>{country}</p>
      </div>
      <div className={styles.fav_stats}>
        <button
          onClick={() => handleDelete(id)}
          className={styles.remove_btn}
          disabled={isLoading}
        >
          Delete
        </button>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
}
