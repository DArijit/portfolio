import React from "react";
import styles from "./salutation.module.css";
import "./salutation.module.css";
import Container from "../container/container";

const Salutation = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Salutation;
