import React from "react";
import styles from "./salutation.module.css";

const Salutation = () => {
 
  return (
    <div
      id="test"
      className={styles.salutation}
      onWheel={(e) => console.log(e)}
    >
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
