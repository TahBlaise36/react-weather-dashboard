import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <h2 className={styles.loader_header}>Loading...</h2>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Spinner;
