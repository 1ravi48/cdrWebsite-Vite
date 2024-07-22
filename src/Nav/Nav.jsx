import styles from "./Nav.module.css";
import { useState } from "react";
import logo from "../assets/images/logo.svg";
import Hamburger from "hamburger-react";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav id={styles.hamburgerNav}>
        <a href="#home">
          <img className={styles.logo} src={logo} alt="CDR Devs" />
        </a>

        <div className={styles.hamburgerMenu}>
          <Hamburger
            rounded
            color="#433D8B"
            size={35}
            toggled={isOpen}
            toggle={setOpen}
            aria-label="Toggle menu"
          />
          <div className={`${styles.menuLinks} ${isOpen ? styles.open : ""}`}>
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
