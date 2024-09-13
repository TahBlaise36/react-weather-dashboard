import styles from "./WeatherSkelecton.module.css";

function WeatherSkelecton() {
  const numberOfdayDetailsBox = 5;

  return (
    <>
      <div className={`${styles.today_details_box}`}>
        <div className={styles.primary_header_box}>
          <div className={`${styles.skelecton} ${styles.skelecton_text}`}></div>
        </div>

        <div className={`${styles.today_weather_box} ${styles.skelecton}`}>
          <div></div>
          <div className={styles.big_weather_img_box}></div>
        </div>
      </div>

      <div>
        <div className={styles.primary_header_box}>
          <div className={`${styles.skelecton} ${styles.skelecton_text}`}></div>
        </div>

        <div className={styles.next_days_details_box}>
          {Array.from({ length: numberOfdayDetailsBox }, (_, index) => (
            <div className={`${styles.day_details} ${styles.skelecton}`}></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WeatherSkelecton;
