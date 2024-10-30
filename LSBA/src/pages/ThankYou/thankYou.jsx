import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ThankYou.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ThankYou = () => {
  const navigate = useNavigate(); // Hook for navigating programmatically

  useEffect(() => {
    // Set a timer to redirect to the home page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/"); // Navigate to the home page
    }, 3000); // 3000 ms = 3 seconds

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  // Animation for "Thank You" heading
  useGSAP(() =>
    gsap.from("#thank-you", {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "back.out(2)", // Smooth easing effect
    })
  );

  // Animation for paragraph elements with staggered effect
  useGSAP(() =>
    gsap.from([".paragraph-data", ".paragraph-redirect"], {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "back.out(2)", // Smooth easing effect
      delay: 0.2,
      stagger: 0.1, // Staggered animation for each element
    })
  );

  return (
    <div className="container-thank-you">
      <h1 id="thank-you">Thank You!</h1>
      <p className="paragraph-data">
        Вашите данни и послание бяха изпратени успешно!
      </p>
      <p className="paragraph-redirect">
        Сега ще бъдете върнати обратно към началната страница!
      </p>
    </div>
  );
};

export default ThankYou;
