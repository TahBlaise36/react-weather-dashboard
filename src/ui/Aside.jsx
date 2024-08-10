import styles from "./Aside.module.css";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside_header}>
        <h2 className="primary_header">Favorite Cities</h2>
        <p className={styles.show_cities_btn}>
          <span>Show All</span>
          <span></span>
        </p>
      </div>
      <div className={styles.fav_days_details_box}>
        <FavoriteDayDetails
          city="Califonia"
          temp_text="Mostly Cloudy"
          deg="29"
        />
        <FavoriteDayDetails city="Beijing" temp_text="Cloudy" deg="19" />
        <FavoriteDayDetails city="Jerusalem" temp_text="Sunny" deg="31" />
        <FavoriteDayDetails city="Douala" temp_text="Cloudy" deg="18" />
        <FavoriteDayDetails city="Limbe" temp_text="Cloudy" deg="12" />
        <FavoriteDayDetails city="Jerusalem" temp_text="Sunny" deg="31" />
      </div>
    </aside>
  );
}

function FavoriteDayDetails({ city, temp_text, img, deg }) {
  return (
    <div className={styles.fav_day_details}>
      <div className={styles.fav_details}>
        <h3 className="city">{city}</h3>
        <p className={styles.temp_text}>{temp_text}</p>
      </div>
      <div className="fav_stats">
        <div className="weather_img"></div>
        <p className={styles.temp}>{deg}</p>
      </div>
    </div>
  );
}
