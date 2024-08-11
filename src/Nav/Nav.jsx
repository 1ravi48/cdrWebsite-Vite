import { useState } from "react";
import styles from "./Nav.module.css";
import logo from "../assets/images/logo.svg";
import { Twirl as Hamburger } from "hamburger-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveringItem, setHoveringItem] = useState(null);

  const handleNavClick = () => {
    setIsOpen(false);
    setHoveringItem(null);
  };

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Our Team", href: "#team" },
  ];

  return (
    <>
      <nav className={styles.desktopNav}>
        <a href="#home">
          <img src={logo} className={styles.logo} alt="logo" />
        </a>

        <ul className={styles.desktopMenu}>
          {menuItems.map((item) => (
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
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className={
                    hoveringItem === item.name
                      ? styles.mobileMenuItemHover
                      : styles.mobileMenuItem
                  }
                >
                  <a
                    href={item.href}
                    className={
                      hoveringItem === item.name
                        ? styles.linkHover
                        : styles.link
                    }
                    onMouseEnter={() => setHoveringItem(item.name)}
                    onMouseLeave={() => setHoveringItem(null)}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}
