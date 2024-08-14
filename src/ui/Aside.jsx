// import { useEffect } from "react";
import styles from "./Aside.module.css";
import {
  deleteFavoriteCity,
  getFavoriteCities,
} from "../services/api.favoriteCities";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function Aside({
  // favCities,
  onSetCity,
  selectedCityId,
  onSelectFavCity,
  onDeleteFavCity,
}) {
  // console.log(favCities);
  const {
    isLoading,
    data: favCities,
    // error,
  } = useQuery({
    queryKey: ["favCities"],
    queryFn: getFavoriteCities,
  });

  return (
    <aside className={styles.aside}>
      <div className={styles.aside_header}>
        <h2 className={styles.primary_header}>Favorite Cities</h2>
        <p className={styles.show_cities_btn}>
          <span>Show All</span>
          <span></span>
        </p>
      </div>
      <div className={styles.fav_days_details_box}>
        {isLoading && (
          <div className={styles.fav_day_details}>
            <h3>Loading...</h3>
          </div>
        )}
        {!isLoading && !favCities && (
          <div className={styles.fav_day_details}>
            <h3>No Cities yet</h3>
          </div>
        )}
        {favCities &&
          favCities.map((city) => (
            <FavoriteDayDetails
              key={city.id}
              id={city.id}
              city={city.city}
              country={city.country}
              date={city.date}
              onSetCity={onSetCity}
              selectedCityId={selectedCityId}
              onSelectFavCity={onSelectFavCity}
              onDeleteFavCity={onDeleteFavCity}
            />
          ))}
      </div>
    </aside>
  );
}

function FavoriteDayDetails({
  id,
  city,
  country,
  date,
  onSetCity,
  selectedCityId,
  onSelectFavCity,
  onDeleteFavCity,
}) {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    // mutationFn: (id) => deleteFavoriteCity(id),
    // OR
    mutationFn: deleteFavoriteCity,
    onSuccess: () => {
      toast.success("City successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["favCities"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  const isSelected = selectedCityId === id;
  function handleSelect() {
    onSelectFavCity(id);
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
          delete
        </button>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
}
