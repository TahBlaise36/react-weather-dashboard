import { useCity } from "../context/CityContext";
import { useEffect, useState } from "react";

import styles from "./Weather.module.css";
import { formatDate, formatTime, getCountryName } from "../utils/helpers";
import Spinner from "../components/Spinner";
import icons from "../constants/icons";
import WeatherSkelecton from "../components/WeatherSkelecton";

export default function Weather() {
  // 3) CONSUMING CONTEXT VALUE
  const { weatherData, isLoading, error } = useCity();

  if (isLoading)
    return (
      <div className={styles.main}>
        <WeatherSkelecton />
      </div>
    );
  // console.log(error);

  // Show error message if there's an issue fetching the data
  if (error)
    return (
      <div className={styles.error_box}>
        <div></div>
        <h2>Coudn't load your data</h2>
        <p>Please check your connection</p>
      </div>
    );

  // Ensure weatherData exists before destructuring
  if (!weatherData) return <div className={styles.error_box}></div>;

  // Destructure list and city only if weatherData is not null/undefined
  const { list, city } = weatherData;

  return (
    <main className={styles.main}>
      <TodayWeather
        country={getCountryName(city.country)}
        city={city.name}
        todaysData={list[0]}
      />

      <NextDaysWeather title="Weekly Forecast" list={list} />
    </main>
  );
}

function Time() {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);
  return <p className={styles.location}>{time}</p>;
}

function TodayWeather({ country, city, todaysData }) {
  const { dt_txt, main, weather } = todaysData;
  const date = dt_txt.slice().split(" ")[0];
  const day = formatDate(date).slice().split(", ")[0];
  const deg = (main.temp - 273.15).toFixed(0);
  const description = weather[0].description;
  const detail = weather[0].main;

  let imageSrc = "";
  switch (detail) {
    case "Clear":
      imageSrc = `${icons.clear}`;
      break;
    case "Clouds":
      imageSrc = `${icons.cloud}`;
      break;
    case "Drizzle":
      imageSrc = `${icons.drizzle}`;
      break;
    case "Rain":
      imageSrc = `${icons.rain}`;
      break;
    case "Snow":
      imageSrc = `${icons.snow}`;
      break;
    default:
      imageSrc = "";
  }

  return (
    <div className={styles.today_details_box}>
      <div className={styles.primary_header_box}>
        <h2 className={styles.primary_header}>Today's Weather</h2>
      </div>

      <div className={styles.today_weather_box}>
        <div>
          <div className={styles.day_location_details}>
            <div className={styles.day_box}>
              <h3>{day}</h3>
              <div></div>
            </div>
            <div className={styles.city_box}>
              <Time />
              <p className={styles.location}>
                {city}, {country}
              </p>
            </div>
          </div>
          <div className="weather_details">
            <span className={styles.temp}>{deg}</span>
            <span className={styles.temp_text}>{description}</span>
          </div>
        </div>
        <div className={styles.big_weather_img_box}>
          <img src={imageSrc} alt={detail} />
        </div>
      </div>
    </div>
  );
}

function NextDaysWeather({ title, list }) {
  let newList = [];
  let dayStep = 8;
  for (let i = 0; i < list.length; i += dayStep) {
    newList = [...newList, list[i]];
  }

  return (
    <div>
      <div className={styles.primary_header_box}>
        <h2 className={styles.primary_header}>{title}</h2>
      </div>

      <div className={styles.next_days_details_box}>
        {newList.map((day, i) => (
          <DayDetails
            key={day.dt}
            id={i + 1}
            dateText={day.dt_txt}
            temp={day.main.temp}
            detail={day.weather[0].main}
          />
        ))}
      </div>
    </div>
  );
}

function DayDetails({ id, dateText, temp, detail }) {
  const isFirstDay = id === 1;
  const date = dateText.slice().split(" ")[0];
  const formatedDay = formatDate(date);
  const deg = (temp - 273.15).toFixed(0);
  const day = formatedDay
    .slice()
    .split(", ")[0]
    .split("")
    .splice(0, 3)
    .join("");

  let imageSrc = "";
  switch (detail) {
    case "Clear":
      imageSrc = `${icons.clear}`;
      break;
    case "Clouds":
      imageSrc = `${icons.cloud}`;
      break;
    case "Drizzle":
      imageSrc = `${icons.drizzle}`;
      break;
    case "Rain":
      imageSrc = `${icons.rain}`;
      break;
    case "Snow":
      imageSrc = `${icons.snow}`;
      break;
    default:
      imageSrc = "";
  }

  return (
    <div className={`${styles.day_details} ${isFirstDay ? styles.active : ""}`}>
      <h4 className={`${styles.day} ${isFirstDay ? styles.active : ""}`}>
        {isFirstDay ? "Today" : day}
      </h4>
      <div className={styles.small_weather_img_box}>
        <img src={imageSrc} alt="cloud_icon" />
      </div>
      <p className={styles.temp}>{deg}</p>
    </div>
  );
}
