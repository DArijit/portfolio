import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headLeft}>Front End Developer</div>
      <div className={styles.headMiddle}>Awesome Logo</div>
      <div className={styles.headRight}>Working with Worldwide</div>
    </header>
  );
};

export default Header;
