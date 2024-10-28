import React, { useEffect } from "react";
import backgroundImage from "/images/sofia-smoke.webp";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Home() {
  const navigate = useNavigate();

  const handleRedirectAbout = () => {
    navigate("/about");
  };

  const handleRedirectContact = () => {
    navigate("/contact");
  };

  const defaultAnimateOptions = {
    duration: 1,
    ease: "circ.out",
    opacity: 0,
  };

  // Reusable animation function
  const animateElements = (targets, options = {}) => {
    const mergedOptions = { ...defaultAnimateOptions, ...options };

    useGSAP(() => gsap.from(targets, mergedOptions));
  };

  // Define your animations with reduced redundancy
  animateElements(["#let", "#breathe"], {
    x: "-50vw",
    duration: 2,
    ease: "power3.out",
    stagger: 0.1,
    delay: 0.3,
  });

  animateElements(["#sofia", "#again"], {
    x: "50vw",
    duration: 2,
    ease: "power2.out",
    stagger: 0.11,
    delay: 0.4,
  });

  animateElements(".starting-text", {
    y: 100,
    ...defaultAnimateOptions,
    delay: 0.5,
  });

  // Scroll-triggered animations using a shared function
  const scrollAnimateElements = (targets, options = {}) => {
    const mergedOptions = {
      ...options,
      scrollTrigger: {
        trigger: targets[0], // Use the first target as the trigger
        start: "top 95%",
      },
    };

    useGSAP(() => gsap.from(targets, mergedOptions));
  };

  // Group similar scroll-triggered animations
  const scrollAnimations = [
    { targets: ["#problem"], options: { x: "50vw", duration: 1 } },
    { targets: ["#support"], options: { x: "50vw" }, duration: 1 },
    { targets: ["#tramvai"], options: { x: "-30vw", duration: 1.1 } },
    { targets: ["#problem-paragraph"], options: { x: "50vw", duration: 1.1 } },
    { targets: ["#first-btn-main"], options: { x: "50vw", duration: 1.1 } },
    { targets: ["#solution"], options: { x: "-50vw" }, duration: 1 },
  ];

  // Execute all scroll-triggered animations
  scrollAnimations.forEach(({ targets, options }) => {
    scrollAnimateElements(targets, options);
  });

  const handleMouseEnterFirst = () => {
    gsap.to(".button-main", {
      // backgroundColor: "#6f787f", // Darker background color on hover
      opacity: 0.8,
      scale: 1.05, // Slight scale up
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseLeaveFirst = () => {
    gsap.to(".button-main", {
      // backgroundColor: "#8c959d", // Original background color
      opacity: 1,
      scale: 1, // Reset scale
      duration: 0.3,
      ease: "power1.out",
    });
  };

  return (
    <>
      <header>
        <img id="backgroundImage" src={backgroundImage} alt="Sofia in smog" />
        <div className="container">
          <h1 id="let" className="big-text-header">
            LET
          </h1>
          <h1 id="sofia" className="big-text-header">
            SOFIA
          </h1>
          <h1 id="breathe" className="big-text-header">
            BREATHE
          </h1>
          <h1 id="again" className="big-text-header">
            AGAIN
          </h1>
          <h3 className="starting-text">
            Иновативни <br /> решения за стар <br /> проблем
          </h3>
        </div>
      </header>
      <main>
        <section id="problem-section">
          <img
            className="diamond-backlight-white backlight"
            src="/images/White gradient.webp"
            alt="white gradient left side"
          />

          <img
            className="diamond-backlight-blue backlight"
            src="/images/Blue gradient.webp"
            alt="blue gradient right side"
          />
          <div className="content-container">
            <h1 id="problem" className="big-text-main">
              PROBLEM
            </h1>

            <img
              id="tramvai"
              src="/images/tramvai.webp"
              alt="Public transport nightime"
              className="img-main"
            />

            <div className="button-paragraph">
              <p
                id="problem-paragraph"
                className="paragraph-main"
                style={{ color: "white" }}
              >
                Мръсният въздух в София е вследствие на географското ѝ положение
                в котловина, което затруднява движението на въздушни маси и
                задържа замърсители, особено през зимата.
              </p>
              <button
                id="first-btn-main"
                type="button"
                className="button-main"
                onClick={handleRedirectAbout}
                onMouseEnter={handleMouseEnterFirst}
                onMouseLeave={handleMouseLeaveFirst}
              >
                НАУЧИ ПОВЕЧЕ
              </button>
            </div>
          </div>
        </section>
        <section className="section-solution">
          <img
            className="brown-gradient backlight"
            src="/images/brown-gradient.webp"
            alt="brown-gradient right side"
          />

          <div id="solution-content-container" className="content-container">
            <h1 id="solution" className="big-text-main">SOLUTION</h1>
            <div className="button-paragraph">
              <p className="paragraph-main">
                Модернизацията на сградите в София може да подобри движението на
                въздуха и да намали замърсяването, смекчавайки ефектите на
                географското разположение.
              </p>
              <button
                type="button"
                className="button-main brown"
                onClick={handleRedirectAbout}
                onMouseEnter={handleMouseEnterFirst}
                onMouseLeave={handleMouseLeaveFirst}
              >
                ОЩЕ
              </button>
            </div>
            <img
              id="img-main-solution"
              className="img-main"
              src="/images/modern structures.webp"
              alt="modern structures"
            />
          </div>
        </section>
        <section className="section-support">
          <div className="content-container">
            <h1 id="support" className=" big-text-main">
              SUPPORT
            </h1>
            <img
              className="img-main"
              src="/images/chill-structure.webp"
              alt="Beutiful structure from sofia on purple background "
            />
            <div className="button-paragraph">
              <p className="paragraph-main">
                Независимо дали сте гражданин или бизнес, показването на интерес
                към нашата кауза ни помага много в нейното осъществяване.
              </p>
              <button
                type="button"
                className="button-main purple-btn"
                onClick={handleRedirectContact}
                onMouseEnter={handleMouseEnterFirst}
                onMouseLeave={handleMouseLeaveFirst}
              >
                СВЪРЖИ СЕ
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
