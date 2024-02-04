import React from "react";
import styles from "./frontEndDev.module.css";

const FrontEndDev = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.react}>REACT</div>
      <div className={styles.front}>FRONT</div>
      <div className={styles.end}>END</div>
      <div className={styles.dev}>DEV</div>
    </div>
  );
};

export default FrontEndDev;
