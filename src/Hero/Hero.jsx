import styles from "./Hero.module.css";
import heroImage from "../assets/images/hero_image.svg";

export default function Hero() {
  return (
    <>
      <section href="#home">
        <h1>
          <span className={styles.thin}>
            No&nbsp;
            <span className={styles.textGradient}>Website?</span>
          </span>
          <br />
          No <span className={styles.textGradient}>Problem.</span>
        </h1>

        <p className={styles.heroPara}>
          CDR Devs create simple, effective websites that get your business
          online – fast.
        </p>

        <img src={heroImage} alt="Image by vectorjuice on Freepik" />
      </section>
    </>
  );
}
