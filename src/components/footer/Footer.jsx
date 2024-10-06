import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>avidev</div>
      <div className={styles.text}>
        Avi creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
