import styles from "./Footer.module.css";
import fiverrIcon from "../assets/icons/fiverr-icon.svg";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <p className={styles.copyright}>© CDR Devs 2024</p>
      </div>

      <div className={styles.footerLinks}>
        <p>Find us on&nbsp;</p>
        <img className={styles.fiverrIcon} src={fiverrIcon} alt="Fiverr Icon" />
      </div>
    </div>
  );
}
