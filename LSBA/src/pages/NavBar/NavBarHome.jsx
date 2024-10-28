import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
  
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);
  

  return (
    <nav className="navbar">
      <div id="home" className="nav-logo-container">
        <Link to="/" className="no-link-style">
          <img id="logo-navbar" src="/images/LOGO.svg" alt="LSBA logo" />
        </Link>
      </div>
      <div className={`nav-link-container ${isOpen ? "open" : ""}`}>
        <Link to="/about" className="no-link-style" onClick={toggleMenu}>
          ЗА НАС
        </Link>
        <Link to="/contact" className="no-link-style" onClick={toggleMenu}>
          СВЪРЖИ СЕ
        </Link>
      </div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default NavbarHome;
