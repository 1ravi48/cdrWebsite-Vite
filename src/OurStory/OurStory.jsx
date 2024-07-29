import SectionTitle from "../Reusables/SectionTitle/SectionTitle.jsx";
import SemiCircle from "../Reusables/SemiCircle/SemiCircle";

export default function Story() {
  return (
    <>
      <section id="story">
        <SectionTitle title="Our Story" />
        <p>
          We&apos;re a team of three developers who have been through the same
          software development bootcamp and are hungry to take on real-world
          projects that leave a lasting impact. Our experience on the bootcamp
          provided us with insight into all of the stages involved in the
          full-stack software development life cycle, including (but not limited
          to):
        </p>
        <p>
          <ul>
            <li>Front-end development</li>
            <li>Back-end development</li>
            <li>Database management</li>
            <li>Project management</li>
            <li>Version control</li>
            <li>Testing</li>
            <li>Deployment</li>
          </ul>
        </p>
        <p>
          Each of us worked in separate teams during the bootcamp, contributing
          to and learning from three very different projects (see the Projects
          section). Together, this has allowed us to combine a diverse set of
          skills, with each of us bringing something unique to the table.
        </p>
        <SemiCircle />
      </section>
    </>
  );
}
