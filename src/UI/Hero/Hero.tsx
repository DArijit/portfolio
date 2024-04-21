import classnames from "classnames";
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={classnames([styles.heroName, styles.removeMargin])}>
        Arijit Das
      </h1>
    </div>
  );
};

export default Hero;
