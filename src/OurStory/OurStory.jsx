import "./OurStory.css";

const OurStory = () => {
  return (
    <section id="our-story">
      <h2>Our Story</h2>
      <div className="card">
        <p>
          Coming from different backgrounds, we are a team of three software
          developers who have been through the same software development
          bootcamp and are hungry to take on real-world projects that leave a
          lasting impact. Our experience on the bootcamp provided us with an
          insight into all of the stages involved in the full-stack software
          development life cycle, including (but not limited to):
        </p>
        <ul>
          <li>Understanding the client&apos;s problem</li>
          <li>Generating ideas</li>
          <li>Conducting market research</li>
          <li>Wireframing and prototyping</li>
          <li>Building frontend user interfaces</li>
          <li>Building backend servers</li>
          <li>Managing databases</li>
          <li>Testing for quality assurance</li>
          <li>Deploying software</li>
        </ul>
        <p>
          Each of us worked in separate teams during the bootcamp, contributing
          to and learning from three very different projects (see the Projects
          section). Together, this has allowed us to combine a diverse set of
          skills, with each of us bringing something unique to the table.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
