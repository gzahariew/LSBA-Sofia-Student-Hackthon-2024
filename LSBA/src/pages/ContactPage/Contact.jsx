import React, { useState, useEffect ,useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Contact = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const bigBtnRef = useRef(null);
  const buttonRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });

  const [validation, setValidation] = useState({
    name: true,
    organization: true,
    email: true,
    message: true,
  });

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
    return re.test(String(email).toLowerCase());
  };

  // Validate fields function
  const validateField = (name, value) => {
    const nameOrgRegex = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/; // Allows Latin/Cyrillic letters, spaces, hyphens

    if (name === "name" || name === "organization") {
      return nameOrgRegex.test(value.trim());
    }
    if (name === "email") {
      return validateEmail(value); // Use the validateEmail function
    }
    return value.trim() !== ""; // Non-empty check for message
  };

  // Handle input changes and update the corresponding state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate the current field
    const isValid = validateField(name, value);
    setValidation({ ...validation, [name]: isValid });
  };

  // Function to clear all inputs
  const clearInputs = () => {
    setFormData({
      name: "",
      organization: "",
      email: "",
      message: "",
    });
    setValidation({
      name: true,
      organization: true,
      email: true,
      message: true,
    });
  };

  const handleSubmit = () => {
    const isFormValid =
      validateField("name", formData.name) &&
      validateField("organization", formData.organization) &&
      validateField("email", formData.email) &&
      validateField("message", formData.message);

    if (!isFormValid) {
      // Mark invalid fields based on validation results
      setValidation({
        name: validateField("name", formData.name),
        organization: validateField("organization", formData.organization),
        email: validateField("email", formData.email),
        message: validateField("message", formData.message),
      });
      alert("Please ensure all fields are filled out correctly."); // Alert for user feedback
    } else {
      navigate("/thank-you");
      clearInputs();
    }
  };

  const handleClickSmall = () => {
    setCount(prevCount => prevCount + 1);
  };

  const paragraphContent = () => {
    return count % 2 === 1
      ? "Единственият начин това да е възможно е чрез чужда помощ и сътрудничество. При интерес, ние ще се свържем с вас."
      : "Изпращайки ни вашите данни и послание, ни помагате особено много. Обещаваме да ви държим в течение!";
  };

  const headlineContent = () => {
    return count % 2 === 1 ? "РАБОТЯ В/ВЪВ" : "ЖИВЕЯ В/ВЪВ";
  };

  const placeholderContent = () => {
    return count % 2 === 1 ? "ВАШАТА ОРГАНИЗАЦИЯ" : "ВАЖИЯ ГРАД";
  };

  const placeholderButton = () => {
    return count % 2 === 0 ? "ЗА ОРГАНИЗАЦИИ" : "ЗА ГРАЖДАНИ";
  };


  useGSAP(() =>
    gsap.from("#hello-text", {
      x: "-20vh",
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.3,
    })
  );

  useGSAP(() =>
    gsap.from(".headline-input-container", {
      y: "10vh",
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.3,
      delay: 0.8,
    })
  );

  useGSAP(() => {
    gsap.fromTo(
      bigBtnRef.current,
      {
        y: "10vh", // Starting position (from)
        opacity: 0, // Starting opacity (from)
      },
      {
        y: "0vh", // Ending position (to)
        opacity: 1, // Ending opacity (to)
        duration: 0.5,
        ease: "circ.out(1.7)",
        delay: 2.5,
      }
    );
  });

  const handleMouseEnter = () => {
    gsap.to(bigBtnRef.current, {
      backgroundColor: "white",
      color: "black",
      borderColor: "#b9c2dc",
      duration: 0.2,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(bigBtnRef.current, {
      backgroundColor: "#b9c2dc",
      color: "white",
      borderColor: "#b9c2dc",
      duration: 0.2,
    });
  };


    const handleMouseEnterSmall = () => {
      gsap.to(buttonRef.current, {
        backgroundColor: "#b9c2dc",
        color: "white",
        duration: 0.2,
      });
    };

    const handleMouseLeaveSmall = () => {
      gsap.to(buttonRef.current, {
        backgroundColor: "white",
        color: "black",
        duration: 0.2,
      });
    };

  useGSAP(() =>
    gsap.from("#small-paragraph", {
      x: "10vw",
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.3,
      delay: 3,
    })
  );

  useGSAP(() => {
    gsap.fromTo(
      "#small-btn",
      {
        x: "-10vh", // Starting position (from)
        opacity: 0, // Starting opacity (from)
      },
      {
        x: "0vh", // Ending position (to)
        opacity: 1, // Ending opacity (to)
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 3.6,
      }
    );
  });

  return (
    <>
      <section className="main-section">
        <div className="text-smallbtn-container">
          <p id="small-paragraph">{paragraphContent()}</p>
          <button
            id="small-btn"
            onClick={handleClickSmall}
            ref={buttonRef}
            onMouseEnter={handleMouseEnterSmall}
            onMouseLeave={handleMouseLeaveSmall}
          >
            {placeholderButton()}
          </button>
        </div>
        <div className="big-text-container">
          <h1 id="hello-text" className="big-text">
            ЗДРАВЕЙТЕ :)
          </h1>
          <div className="headline-input-container">
            <h1 className="big-text">КАЗВАМ СЕ</h1>
            <input
              className={`input-all ${!validation.name ? "input-error" : ""}`}
              type="text"
              name="name"
              placeholder="ВАШЕТО ИМЕ"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="headline-input-container">
            <h1 className="big-text">{headlineContent()}</h1>
            <input
              className={`input-all ${
                !validation.organization ? "input-error" : ""
              }`}
              type="text"
              name="organization"
              placeholder={placeholderContent()}
              value={formData.organization}
              onChange={handleChange}
            />
          </div>
          <div className="headline-input-container">
            <h1 className="big-text">МОЯТ ИМЕЙЛ</h1>
            <input
              className={`input-all ${!validation.email ? "input-error" : ""}`}
              type="email"
              name="email"
              placeholder="ВАШИЯ ИМЕЙЛ"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="headline-input-container">
            <h1 className="big-text">ПОСЛАНИЕ</h1>
            <input
              className={`input-all ${
                !validation.message ? "input-error" : ""
              }`}
              type="text"
              name="message"
              placeholder="ВАШЕТО ПОСЛАНИЕ"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          id="big-btn"
          ref={bigBtnRef}
          onClick={handleSubmit}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          ИЗПРАТИ
          <div id="circle-btn">
            <div id="pill-circle"></div>
          </div>
        </button>
      </section>
    </>
  );
};

export default Contact;
