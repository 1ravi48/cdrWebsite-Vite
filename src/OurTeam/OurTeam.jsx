import styles from "./OurTeam.module.css";
import catherineImage from "../assets/images/catherine-small.png";
import davidImage from "../assets/images/david-small.jpg";
import raviImage from "../assets/images/ravi-small.jpg";

const OurTeam = () => {
  return (
    <section id="our-team">
      <h2>Meet our team</h2>
      <div className={styles.teamContainer}>
        <div className={styles.teamSlider}>
          <div className={styles.teamSliderWrapper}>
            <div className={styles.teamMemberCard}>
              <div className={styles.teamMemberImage}>
                <img src={catherineImage} alt="Catherine" />
              </div>
              <div className={styles.teamMemberContent}>
                <span className={styles.teamMemberTitle}>
                  Software Developer
                </span>
                <h3 className={styles.teamMemberName}>Catherine Sarquís</h3>
                <p className={styles.teamMemberDescription}>
                  Catherine is transitioning into software development, driven
                  by her passion for detail and problem-solving.
                  Catherine&apos;s experience in proofreading, digital editing
                  and love of languages bring a unique perspective to her work.
                </p>
                <button className={styles.readMoreBtn}>View More</button>
              </div>
            </div>
            <div className={styles.teamMemberCard}>
              <div className={styles.teamMemberImage}>
                <img src={davidImage} alt="David" />
              </div>
              <div className={styles.teamMemberContent}>
                <span className={styles.teamMemberTitle}>
                  Software Developer
                </span>
                <h3 className={styles.teamMemberName}>David A Silva</h3>
                <p className={styles.teamMemberDescription}>
                  Passionate about creating software and web applications, David
                  is transitioning from music to tech with determination and
                  exploring creativity through code.
                </p>
                <button className={styles.readMoreBtn}>View More</button>
              </div>
            </div>
            <div className={styles.teamMemberCard}>
              <div className={styles.teamMemberImage}>
                <img src={raviImage} alt="Ravi" />
              </div>
              <div className={styles.teamMemberContent}>
                <span className={styles.teamMemberTitle}>
                  Software Developer
                </span>
                <h3 className={styles.teamMemberName}>Ravi Kataria</h3>
                <p className={styles.teamMemberDescription}>
                  Hi, I&apos;m Ravi! I come from a background in education and
                  am currently transitioning into technology. I love the
                  problem-solving nature of the tech field and ca&apos;t wait to
                  use my knowledge to devise solutions!
                </p>
                <button className={styles.readMoreBtn}>View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
