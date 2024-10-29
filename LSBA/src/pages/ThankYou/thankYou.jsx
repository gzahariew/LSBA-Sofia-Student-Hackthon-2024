import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ThankYou.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ThankYou = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    // Set a timer to redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to home
    }, 3000); // 5000 ms = 5 seconds

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, [navigate]);

  useGSAP(() =>
    gsap.from("#thank-you", {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "back.out(2)",
      }
    )
  );

  useGSAP(() =>
    gsap.from([".paragraph-data", ".paragraph-redirect"], {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "back.out(2)",
      delay: 0.2,
        stagger: 0.1
    })
  );


  return (
    <div className='container-thank-you'>
      <h1 id='thank-you'>Thank You!</h1>
      <p className='paragraph-data'>Вашите данни и послание бяха изпратени успешно!</p>
      <p className='paragraph-redirect'>Сега ще бъдете върнати обратно към началната страница!</p>
    </div>
  );
};

export default ThankYou;