import "./Nav.css";
import { useState } from "react";
import logo from "../assets/images/logo.svg";
import Hamburger from "hamburger-react";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav id="hamburger-nav">
        <a href="#home">
          <img className="logo" src={logo} alt="CDR Devs" />
        </a>

        <div className="hamburger-menu">
          <Hamburger
            rounded
            color="#433D8B"
            size={35}
            toggled={isOpen}
            toggle={setOpen}
            aria-label="Toggle menu"
          />
          <div className={`menu-links ${isOpen ? "open" : ""}`}>
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
