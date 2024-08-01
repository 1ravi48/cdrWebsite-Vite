import SectionTitle from "../Reusables/SectionTitle/SectionTitle.jsx";
import SemiCircle from "../Reusables/SemiCircle/SemiCircle.jsx";
import styles from "./OurServices.module.css";
import aboutImage from "../assets/images/about_image.svg";

export default function OurServices() {
  return (
    <>
      <section id="services">
        <SectionTitle title="Our Services" />
        <p>
          We&apos;re a team of three developers who have been through the same
          software development bootcamp and are hungry to take on real-world
          projects that leave a lasting impact. Our experience on the bootcamp
          provided us with insight into all of the stages involved in the
          full-stack software development life cycle, including (but not limited
          to):
        </p>

        <div className={styles.skillsContainer}>
          <div className={styles.lozenge} id="skill1">
            empathising with clients
          </div>
          <div className={styles.lozenge} id="skill2">
            generating ideas
          </div>
          <div className={styles.lozenge} id="skill3">
            conducting research
          </div>
          <div className={styles.lozenge} id="skill4">
            wireframing
          </div>
          <div className={styles.lozenge} id="skill5">
            prototyping
          </div>
          <div className={styles.lozenge} id="skill6">
            building backend servers
          </div>
          <div className={styles.lozenge} id="skill7">
            managing databases
          </div>
          <div className={styles.lozenge} id="skill8">
            building frontend UI/UX
          </div>
          <div className={styles.lozenge} id="skill9">
            testing for QA
          </div>
          <div className={styles.lozenge} id="skill10">
            deploying software
          </div>
        </div>

        <p>
          Each of us worked in separate teams during the bootcamp, contributing
          to and learning from three very different projects (see the Projects
          section). Together, this has allowed us to combine a diverse set of
          skills, with each of us bringing something unique to the table.
        </p>
        <img
          src={aboutImage}
          className={styles.aboutImage}
          alt="Image by vectorjuice on Freepik"
        />
        <SemiCircle />
      </section>
    </>
  );
}
