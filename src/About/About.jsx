import styles from "./About.module.css";
import SectionTitle from "../Reusables/SectionTitle/SectionTitle.jsx";
import SemiCircle from "../Reusables/SemiCircle/SemiCircle";

export default function About() {
  return (
    <>
      <section id="about">
        <SectionTitle title="About Us" />
        <p>
          Imagine a team of frontend developers with the skills to tackle any
          challenge and the experience to deliver results. That&apos;s us: CDR
          Devs. We&apos;re a tight-knit team of three developers, united by our
          experience in a rigorous software development bootcamp, eager to put
          our knowledge to work for you.
        </p>
        <p>
          We&apos;re not just coders; we&apos;re problem solvers, collaborators,
          and passionate creators. Our primary goal is to understand your needs,
          to craft tailored solutions, and deliver exceptional results.
        </p>
        <p>
          Whether you need a brand-new website, a redesign of an existing one,
          or just some frontend tweaks, we&apos;re here to help. We&apos;ll work
          closely with you to understand your vision, goals, and challenges. We
          believe that a well-crafted website is more than just an online
          presence; it&apos;s a powerful tool for growth and success.
        </p>
        <p>
          Whether you&apos;re a budding entrepreneur or an established business,
          we&apos;re here to help you unlock your full digital potential and
          create a website that truly reflects your vision.
        </p>
        <p>
          Partner with CDR Devs and experience the difference a team of
          dedicated frontend developers can make.
        </p>

        <div className={styles.circleWrapper}>
          <SemiCircle className={styles.circleRight} />
        </div>
      </section>
    </>
  );
}
