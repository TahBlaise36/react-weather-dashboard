import Toggle from "../components/Toggle";
import Profile from "../components/Profile";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <SearchBox />
      <div className={styles.profile_box}>
        <Toggle />
        <Profile />
      </div>
    </header>
  );
}

function SearchBox() {
  return (
    <div className={styles.search_box}>
      <input type="text" placeholder="Search for City here..." />
      <button className={styles.add_city_btn}>
        <span>+</span> <span>Add City</span>
      </button>
    </div>
  );
}
