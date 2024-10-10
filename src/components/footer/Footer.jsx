import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Just Write</div>
      <div className={styles.text}>Just Write Blog © All Rights Reserved</div>
    </div>
  );
};

export default Footer;
