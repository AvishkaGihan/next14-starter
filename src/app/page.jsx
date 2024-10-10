import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Words Craft Existence</h1>
        <p className={styles.desc}>
          Discover the art of storytelling through relatable narratives and
          inspiring insights that illuminate your everyday experiences.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.svg" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
