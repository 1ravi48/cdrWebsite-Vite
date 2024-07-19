import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <div>
        <a href="#home">
          <img
            className="logo"
            src="../public/CDR_Devs_small.png"
            alt="CDR Devs"
          />
        </a>
      </div>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#our-story">Our Story</a>
        </li>
        <li>
          <a href="#our-team">Our Team</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
