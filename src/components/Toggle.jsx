import styles from "./Toggle.module.css";

export default function Toggle() {
  return (
    <div className={styles.toggle_box}>
      <input className="toggle" type="checkbox" id="checked" />
      <label htmlFor="checked" className={styles.check_btn}></label>
    </div>
  );
}
