import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./footer.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

// Footer component
const Footer = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const [email, setEmail] = useState("");

  // Handle email submission
  const handleSend = () => {
    if (email.trim() && validateEmail(email)) {
      alert("Email sent!");
      setEmail(""); // Clear input after sending
    } else {
      alert("Please enter a valid email address");
    }
  };

  // Handle link clicks to scroll to the top if on the same page
  const handleLinkClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle enter key press for email submission
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Handle scroll event to show/hide the "Scroll to Top" button
  const handleScroll = () => {
    setVisible(window.scrollY > 300);
  };

  // Add and remove scroll event listener on mount and unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Animate the biggest logo on scroll
  useGSAP(() =>
    gsap.from("#biggest-logo", {
      y: 100,
      duration: 2,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: "#biggest-logo",
        start: "top 95%",
      },
    })
  );

  // Footer section
  return (
    <>
      <section id="footer-section">
        <div className="footer-first-container">
          {/* Social media links */}
          <div className="social-media">
            <div className="footer-icon-container">
              <a href="https://example.com/">
                <img
                  className="social-icons"
                  src="/images/twitter icon.svg"
                  alt="twitter"
                />
              </a>
              <a href="https://example.com/">
                <img
                  className="social-icons"
                  src="/images/instagram icon.svg"
                  alt="instagram"
                />
              </a>
              <a href="https://example.com/">
                <img
                  className="social-icons"
                  src="/images/facebook logo.svg"
                  alt="facebook"
                />
              </a>
            </div>
            <h5 id="input-footer-text">ИЗПРАТИ НИ ИМЕЙЛА СИ</h5>
            {/* Email input field */}
            <input
              id="input-footer"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EXAMPLE@EMAIL.COM"
              onKeyPress={handleKeyPress}
            />
            <button
              id="btn-send-footer-home"
              className="button-main"
              onClick={handleSend}
            >
              ИЗПРАТИ
            </button>
          </div>
          {/* Footer links */}
          <div className="footer-links">
            <Link
              to="/"
              className="link-style"
              onClick={(e) => handleLinkClick(e, "/")}
            >
              НАЧАЛО
            </Link>
            <Link
              to="/contact"
              className="link-style"
              onClick={(e) => handleLinkClick(e, "/contact")}
            >
              КОНТАКТИ
            </Link>
            <Link
              to="/about"
              className="link-style"
              onClick={(e) => handleLinkClick(e, "/about")}
            >
              ЗА НАС
            </Link>
          </div>
        </div>
        {/* Biggest logo */}
        <img id="biggest-logo" src="/images/big-logo.svg" alt="BIG LSBA" />
        {/* Ending text */}
        <div className="ending-text">
          <h6 className="rights-text-home">PRIVACY POLICY</h6>
          <div
            id="back-on-top"
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          >
            ОБРАТНО В НАЧАЛО
          </div>
          <h6 className="rights-text-home">COPYRIGHT</h6>
        </div>
      </section>
    </>
  );
};

export default Footer;
