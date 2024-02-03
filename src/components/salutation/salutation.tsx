import React from "react";
import styles from "./salutation.module.css";

const Salutation = () => {
  return (
    <div className={styles.salutation}>
      <section>
        Hey
        <section className={styles.wavingHand}>👋</section>
        there!
      </section>
      <section>
        <i className={styles.italics}>I'm</i> Vaibhavi
      </section>
    </div>
  );
};

export default Salutation;
