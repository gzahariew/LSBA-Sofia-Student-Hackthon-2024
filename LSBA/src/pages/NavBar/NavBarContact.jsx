import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./navBar.css";

const NavbarContact = () => {
  const [isOpen, setIsOpen] = useState(false); // Track if menu is open or closed

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu open/close state
  };

  useEffect(() => {
    // Lock body scroll and fix position when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      // Reset body styles when menu closes
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    // Cleanup function to reset body styles on component unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      {/* Logo section with link to home page */}
      <div id="home" className="nav-logo-container">
        <Link to="/" className="no-link-style">
          <img id="logo-navbar" src="/images/LOGO.svg" alt="LSBA logo" />
        </Link>
      </div>

      {/* Navigation links, appear conditionally based on `isOpen` state */}
      <div className={`nav-link-container ${isOpen ? "open" : ""}`}>
        <div className="hover-div-nav">
          <Link to="/" className="no-link-style" onClick={toggleMenu}>
            НАЧАЛО
          </Link>
        </div>
        <div className="hover-div-nav">
          <Link to="/about" className="no-link-style" onClick={toggleMenu}>
            ЗА НАС
          </Link>
        </div>
      </div>

      {/* Hamburger menu icon with toggle on click */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default NavbarContact;
