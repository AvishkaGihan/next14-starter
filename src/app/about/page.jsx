import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/26150745/pexels-photo-26150745/free-photo-of-green-grassland-with-trees-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="about"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
