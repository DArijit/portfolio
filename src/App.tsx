import React from "react";
import styles from "./App.module.css";
import Hero from "./UI/Hero/Hero";
import Skills from "./UI/Skills/Skills";
import Experience from "./UI/Experience/Experience";
import ManIcon from "./UI/ManIcon/ManIcon";
import InteractionBar from "./UI/InteractionBar/InteractionBar";

function App() {
  return (
    <>
      <InteractionBar />
      <div className={styles.bodyWrapper}>
        <div className={styles.bodyContainer}>
          <ManIcon />
          <Hero />
          <Skills />
          <Experience />
        </div>
      </div>
    </>
  );
}

export default App;
