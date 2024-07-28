import styles from "./Nav.module.css";
import logo from "../assets/images/logo.svg";
import hamburgerIcon from "../assets/icons/hamburger.svg";
import hamburgerCross from "../assets/icons/hamburger-cross.svg";

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
/* eslint-disable no-unused-vars */

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [homeHovering, setHomeHovering] = useState(false);
  const [aboutHovering, setAboutHovering] = useState(false);
  const [storyHovering, setStoryHovering] = useState(false);
  const [teamHovering, setTeamHovering] = useState(false);
  const [contactHovering, setContactHovering] = useState(false);

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
          {isOpen ? (
            <img
              className={styles.HamburgerIcon}
              src={hamburgerCross}
              alt="hamburger-icon"
            />
          ) : (
            <img
              className={styles.HamburgerIcon}
              src={hamburgerIcon}
              alt="hamburger-icon"
            />
          )}
        </div>
        {isOpen && (
          <ul className={styles.MenuLinks}>
            <li
              className={
                homeHovering ? styles.ListItemHover : styles.ListItemNotHover
              }
            >
              <a
                href="#home"
                className={homeHovering ? styles.Hover : styles.NotHover}
                onMouseEnter={() => setHomeHovering(true)}
                onMouseLeave={() => setHomeHovering(false)}
              >
                Home
              </a>
            </li>
            <li
              className={
                aboutHovering ? styles.ListItemHover : styles.ListItemNotHover
              }
            >
              <a
                href="#about"
                className={aboutHovering ? styles.Hover : styles.NotHover}
                onMouseEnter={() => setAboutHovering(true)}
                onMouseLeave={() => setAboutHovering(false)}
              >
                About Us
              </a>
            </li>
            <li
              className={
                storyHovering ? styles.ListItemHover : styles.ListItemNotHover
              }
            >
              <a
                href="#story"
                className={storyHovering ? styles.Hover : styles.NotHover}
                onMouseEnter={() => setStoryHovering(true)}
                onMouseLeave={() => setStoryHovering(false)}
              >
                Our Story
              </a>
            </li>
            <li
              className={
                teamHovering ? styles.ListItemHover : styles.ListItemNotHover
              }
            >
              <a
                href="#team"
                className={teamHovering ? styles.Hover : styles.NotHover}
                onMouseEnter={() => setTeamHovering(true)}
                onMouseLeave={() => setTeamHovering(false)}
              >
                Our Team
              </a>
            </li>
            <li
              className={
                contactHovering ? styles.ListItemHover : styles.ListItemNotHover
              }
            >
              <a
                href="#contact"
                className={contactHovering ? styles.Hover : styles.NotHover}
                onMouseEnter={() => setContactHovering(true)}
                onMouseLeave={() => setContactHovering(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
