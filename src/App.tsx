import React from "react";
import styles from "./App.module.css";
import Hero from "./UI/Hero/Hero";
import Skills from "./UI/Skills/Skills";
import Experience from "./UI/Experience/Experience";

function App() {
  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.bodyContainer}>
        <Hero />
        <Skills />
        <Experience />
      </div>
    </div>
  );
}

export default App;
