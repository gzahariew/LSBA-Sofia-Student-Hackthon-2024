import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false); // Track menu open/close state

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu's visibility
  };

  useEffect(() => {
    // Apply body styles to prevent scroll when menu is open
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
      {/* Logo linking to home */}
      <div id="home" className="nav-logo-container">
        <Link to="/" className="no-link-style">
          <img id="logo-navbar" src="/images/LOGO.svg" alt="LSBA logo" />
        </Link>
      </div>

      {/* Navigation links displayed based on `isOpen` state */}
      <div className={`nav-link-container ${isOpen ? "open" : ""}`}>
        <div className="hover-div-nav">
          <Link to="/about" className="no-link-style" onClick={toggleMenu}>
            ЗА НАС
          </Link>
        </div>
        <div className="hover-div-nav">
          <Link to="/contact" className="no-link-style" onClick={toggleMenu}>
            КОНТАКТИ
          </Link>
        </div>
      </div>

      {/* Hamburger menu icon to toggle navigation menu */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default NavbarHome;
