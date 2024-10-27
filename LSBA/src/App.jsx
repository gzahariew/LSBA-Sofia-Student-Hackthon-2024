import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from "./pages/components/scrollToTop"
import NavbarHome from './pages/NavBar/NavBarHome';
import NavbarAbout from './pages/NavBar/NavBarAbout'; 
import NavbarContact from './pages/NavBar/NavBarContact';
import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Contact from './pages/ContactPage/Contact';
import ThankYou from './pages/ThankYou/thankYou';
import './App.css'; 

const App = () => {
  const location = useLocation(); // Get the current location

  const renderNavbar = () => {
    if (location.pathname === '/') {
      return <NavbarHome />;
    } else if (location.pathname === '/about') {
      return <NavbarAbout />; 
    } else if (location.pathname === '/contact') {
      return <NavbarContact />;
    }
    return null; // Fallback for unmatched routes
  };

  return (
    <div>
      {renderNavbar()}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
};

export default App;


