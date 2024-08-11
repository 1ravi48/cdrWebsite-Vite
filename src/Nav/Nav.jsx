import { useState } from "react";
import styles from "./Nav.module.css";
import logo from "../assets/images/logo.svg";
import { Twirl as Hamburger } from "hamburger-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveringItem, setHoveringItem] = useState(null);

  const handleNavClick = (href) => {
    window.location.href = href; // Programmatically navigate to the href
    setIsOpen(false);
    setHoveringItem(null);
  };

  const deskMenuItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Our Team", href: "#team" },
  ];

  const mobMenuItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Our Team", href: "#team" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <nav className={styles.desktopNav}>
        <a href="#home">
          <img src={logo} className={styles.logo} alt="logo" />
        </a>

        <ul className={styles.desktopMenu}>
          {deskMenuItems.map((item) => (
            <li key={item.name} className={styles.desktopMenuItem}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
          <a href="#contact">
            <button className={styles.contactBtn}>Contact Us</button>
          </a>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={styles.mobileNav}>
        <div className={styles.mobileNavContent}>
          <a href="#home">
            <img src={logo} className={styles.logo} alt="logo" />
          </a>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={75}
            color="#3c417c"
          />

          {isOpen && (
            <ul className={styles.mobileMenu}>
              {mobMenuItems.map((item) => (
                <li
                  key={item.name}
                  className={
                    hoveringItem === item.name
                      ? styles.mobileMenuItemHover
                      : styles.mobileMenuItem
                  }
                  onMouseEnter={() => setHoveringItem(item.name)}
                  onMouseLeave={() => setHoveringItem(null)}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}
