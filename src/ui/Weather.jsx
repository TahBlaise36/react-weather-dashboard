import styles from "./Weather.module.css";

export default function Weather() {
  return (
    <main className={styles.main}>
      <div className={styles.today_details_box}>
        <div className="primary-header-box">
          <h2 className="primary-header">Today's Weather</h2>
        </div>

        <TodayWeather
          day="Monday"
          country="Cameroon"
          city="younde"
          deg="24"
          tempText="Mostly Clear"
        />
      </div>
      <div>
        <div className="primary-header-box">
          <h2 className="primary-header">Next 5 Days</h2>
        </div>

        <div className={styles.next_days_details_box}>
          <DayDetails day={"Tue"} deg={"10"} />
          <DayDetails day={"Wed"} deg={"15"} />
          <DayDetails day={"Thu"} deg={"11"} />
          <DayDetails day={"Fri"} deg={"18"} />
          <DayDetails day={"Sat"} deg={"12"} />
        </div>
      </div>
    </main>
  );
}

function TodayWeather({ day, country, city, deg, tempText, img }) {
  return (
    <div className={styles.today_weather_box}>
      <div>
        <div className={styles.day_location_details}>
          <h3>{day}</h3>
          <p>
            <span></span>
            <span className={styles.location}>
              {country}, {city}
            </span>
          </p>
        </div>
        <div>
          <span className={styles.temp}>{deg}</span>
          <span className={styles.temp_text}>{tempText}</span>
        </div>
      </div>
      <div className="big_weather_img"></div>
    </div>
  );
}

function DayDetails({ day, img, deg }) {
  return (
    <div className={styles.day_details}>
      <h4 className={styles.day}>{day}</h4>
      <div className="weather_img"></div>
      <p className={styles.temp}>{deg}</p>
    </div>
  );
}
