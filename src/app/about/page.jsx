import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Just Write</h2>
        <h1 className={styles.title}>
          We create powerful narratives that are bold, authentic, and
          transformative. .
        </h1>
        <p className={styles.desc}>
          At Just Write, we believe in the magic of words to inspire and
          connect. Our team is dedicated to producing high-quality content that
          resonates with audiences. We specialize in crafting unique stories
          that elevate brands and engage readers across various platforms.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Words Written</p>
          </div>
          <div className={styles.box}>
            <h1>5 K+</h1>
            <p>Happy Readers</p>
          </div>
          <div className={styles.box}>
            <h1>8+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.svg" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
