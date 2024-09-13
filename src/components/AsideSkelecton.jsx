import styles from "./AsideSkelecton.module.css";

function AsideSkelecton() {
  const numberOfFavDayDetailsBox = 5;

  return (
    <div className={styles.fav_days_details_box}>
      {Array.from({ length: numberOfFavDayDetailsBox }, (_, index) => (
        <div className={`${styles.fav_day_details} ${styles.skelecton}`}></div>
      ))}
    </div>
  );
}

export default AsideSkelecton;
