import "./OurTeam.css";

const OurTeam = () => {
  return (
    <section id="our-team">
      <h2>Meet our team</h2>
      <div className="card">
        <div className="profile-circle">
          <img src="images/catherine-small.png" alt="Catherine" />
        </div>
        <h3>Catherine</h3>
        <p>
          Catherine is transitioning into software development, driven by her
          passion for detail and problem-solving. Catherine&apos;s experience in
          proofreading, digital editing and love of languages bring a unique
          perspective to her work.
        </p>
      </div>

      <div className="card">
        <div className="profile-circle">
          <img src="images/david-small.jpg" alt="David" />
        </div>
        <h3>David</h3>
        <p>
          Passionate about creating software and web applications, David is
          transitioning from music to tech with determination and exploring
          creativity through code.
        </p>
      </div>

      <div className="card">
        <div className="profile-circle">
          <img src="images/ravi-small.jpg" alt="Ravi" />
        </div>
        <h3>Ravi</h3>
        <p>
          Hi, I&apos;m Ravi! I come from a background in education and am
          currently transitioning into technology. I love the problem-solving
          nature of the tech field and ca&apos;t wait to use my knowledge to
          devise solutions!
        </p>
      </div>
    </section>
  );
};

export default OurTeam;
