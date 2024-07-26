import styles from "./Nav.module.css";
import logo from "../assets/images/logo.svg";
import hamburgericon from "../assets/icons/hamburger1.svg";
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
/* eslint-disable no-unused-vars */

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className={styles.NavContainer}>
        <a href="#home">
          <img src={logo} className={styles.logo}></img>
        </a>
        <div
          className={styles.HamburgerContainer}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            className={styles.HamburgerIcon}
            src={hamburgericon}
            alt="hamburger-icon1"
          />
        </div>
        {isOpen && (
          <div className={styles.ListContainer}>
            <ul className={styles.MenuLinks}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#story">Our Story</a>
              </li>
              <li>
                <a href="#team">Our Team</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
