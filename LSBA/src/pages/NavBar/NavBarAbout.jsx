import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./navBar.css";

const NavbarAbout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up by removing `no-scroll` class on component unmount
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div id="home" className="nav-logo-container">
        <Link to="/" className="no-link-style">
          <img id="logo-navbar" src="/images/LOGO.svg" alt="LSBA logo" />
        </Link>
      </div>
      <div className={`nav-link-container ${isOpen ? "open" : ""}`}>
        <div className="hover-div-nav">
          <Link to="/" className="no-link-style" onClick={toggleMenu}>
            НАЧАЛО
          </Link>
        </div>
        <div className="hover-div-nav">
          <Link to="/contact" className="no-link-style" onClick={toggleMenu}>
            КОНТАКТИ
          </Link>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default NavbarAbout;
