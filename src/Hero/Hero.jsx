import "./Hero.css";
import heroImage from "/images/hero_image.svg";

const Hero = () => {
  return (
    <section id="home">
      <h1>
        <span className="thin">
          No <span className="purple-grad">Website?</span>
          <br />
        </span>
        No <span className="purple-grad">Problem.</span>
      </h1>
      <p>
        CDR Devs creates simple, effective websites that get your business
        online – fast.
      </p>

      <img src={heroImage} alt="Image by vectorjuice on Freepik" />
    </section>
  );
};

export default Hero;
