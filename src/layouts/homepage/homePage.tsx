import styles from "./homePage.module.css";

const HomePage = () => {
  return (
    <>
      <header className={styles.headerWrapper}>
        <div>Front End Developer</div>
        <div>Awesome Logo</div>
        <div>Working with Worldwide</div>
      </header>

      <div className={styles.salutaion}>
        <div className={styles.salutaionMinor}>Hi, I'm</div>
        <div className={styles.wavingHand}>👋</div>
        <div className={styles.salutaionMajor}>VAIBHAVI</div>
      </div>
    </>
  );
};

export default HomePage;
