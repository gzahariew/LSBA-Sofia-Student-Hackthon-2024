import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

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

  // Handle input changes and update the corresponding state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() !== "") {
      setValidation({ ...validation, [name]: true });
    }
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
      formData.name.trim() !== "" &&
      formData.organization.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== "";

    if (!isFormValid) {
      // Mark invalid fields
      setValidation({
        name: formData.name.trim() !== "",
        organization: formData.organization.trim() !== "",
        email: formData.email.trim() !== "",
        message: formData.message.trim() !== "",
      });
    } else {
      navigate("/thank-you");
      clearInputs();
    }
  };

  const handleClickSmall = () => {
    setCount(count + 1);
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

  return (
    <>
      <section className="main-section">
        <div className="text-smallbtn-container">
          <p id="small-paragraph">{paragraphContent()}</p>
          <button id="small-btn" onClick={handleClickSmall}>
            {placeholderButton()}
          </button>
        </div>
        <div className="big-text-container">
          <h1 className="big-text">ЗДРАВЕЙТЕ :)</h1>
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
        <button id="big-btn" onClick={handleSubmit}>
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
