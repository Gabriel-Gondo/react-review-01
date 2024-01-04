import styles from "./Header.module.css";

import ignieLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ignieLogo} alt="logo" />
    </header>
  );
}
