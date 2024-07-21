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
        CDR Devs create simple, effective websites that get your business
        online&nbsp;–&nbsp;fast.
      </p>

      <img src={heroImage} alt="Image by vectorjuice on Freepik" />

      <svg
        width="72"
        height="36"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="circle-decoration"
      >
        <path
          d="M0 36 A36 36 0 0 1 72 36 Z"
          fill="url(#paint0_linear_214_647)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_214_647"
            x1="72"
            y1="0"
            x2="0"
            y2="72"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F76680" />
            <stop offset="1" stopColor="#57007B" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Hero;
