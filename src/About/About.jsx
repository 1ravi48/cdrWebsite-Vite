import styles from "./About.module.css";
import SectionTitle from "../Reusables/SectionTitle/SectionTitle.jsx";
import SemiCircle from "../Reusables/SemiCircle/SemiCircle";
import aboutImage from "../assets/images/about_image.svg";

export default function About() {
  return (
    <>
      <section id="about">
        <SectionTitle title="About Us" />
        <p>
          Our journey as CDR Devs started with a shared dream: to use our coding
          skills to have a positive impact on the world 🔥.
        </p>
        <p>
          We&apos;re a team of passionate developers who believe that a
          well-crafted website can be a powerful tool for growth and success.
        </p>
        <p>
          Whether you&apos;re a small business or a freelance creative,
          we&apos;re here to help you reach your full online potential.
        </p>
        <p>Let&apos;s create something extraordinary!</p>
        <img
          src={aboutImage}
          className={styles.aboutImage}
          alt="Image by vectorjuice on Freepik"
        />
        <div className={styles.circleWrapper}>
          <SemiCircle className={styles.circleRight} />
        </div>
      </section>
    </>
  );
}
