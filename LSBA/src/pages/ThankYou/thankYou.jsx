import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ThankYou.css";

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

  return (
    <div className='container-thank-you'>
      <h1 id='thank-you'>Thank You!</h1>
      <p className='paragraph-data'>Вашите данни и послание бяха изпратени успешно!</p>
      <p className='paragraph-redirect'>Сега ще бъдете върнати обратно към началната страница!</p>
    </div>
  );
};

export default ThankYou;