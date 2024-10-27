import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./footer.css";

const Footer = () => {
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    const [email, setEmail] = useState("");
  
    const handleSend = () => {
      if (email.trim() && validateEmail(email)) {
        alert("Имейла беше изпратен успешно!");
        setEmail(""); // Clear input after sending
      } else {
        alert("Please enter a valid email address");
      }
    };

    const handleLinkClick = (e, path) => {
      // If you're already on the same page, scroll to the top
      if (location.pathname === path) {
        e.preventDefault(); // Prevent link default behavior
        window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
      }
    };
  
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };
  
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleSend();
      }
    };
  
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };


  return (
    <>
      <section id="footer-section">
        <div className="footer-first-container">
          <div className="social-media">
            <div className="footer-icon-container">
              <a href="">
                <img
                  className="social-icons"
                  src="/images/twitter icon.svg"
                  alt="twitter"
                />
              </a>
              <a href="">
                <img
                  className="social-icons"
                  src="/images/instagram icon.svg"
                  alt="instagram"
                />
              </a>
              <a href="">
                <img
                  className="social-icons"
                  src="/images/facebook logo.svg"
                  alt="facebook"
                />
              </a>
            </div>
            <h5 id="input-footer-text">ИЗПРАТИ НИ ИМЕЙЛА СИ</h5>
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
          <div className="footer-links">
          <Link
              to="/"
              className="link-style"
              onClick={(e) => handleLinkClick(e, "/")}
            >
              НАЧАЛО
            </Link>
            <Link to="/contact" className="link-style" onClick={(e) => handleLinkClick(e, "/contact")} > 
              СВЪРЖИ СЕ
            </Link>
            <Link to="/about" className="link-style" onClick={(e) => handleLinkClick(e, "/about")} >
              ЗА НАС
            </Link>
          </div>
        </div>
        <img id="biggest-logo" src="/images/big-logo.svg" alt="BIG LSBA" />
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
