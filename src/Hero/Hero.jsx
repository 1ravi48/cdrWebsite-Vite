import styles from "./Hero.module.css";
import heroImage from "../assets/images/hero_image.svg";
import SemiCircle from "../Reusables/SemiCircle/SemiCircle";

export default function Hero() {
  return (
    <>
      <section id="home" className={styles.heroSection}>
        <div className={styles.heroDesktop}>
          <div className={styles.heroText}>
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
          </div>
          <img
            src={heroImage}
            className={styles.heroImage}
            alt="Image by vectorjuice on Freepik"
          />
        </div>

        <SemiCircle />
      </section>
    </>
  );
}
