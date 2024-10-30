import React from "react";
import "./About.css";
import Footer from "../Footer/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function About() {
  //Animations for the header
  useGSAP(() => {
    gsap.from(["#design-about", "#and-about"], {
      x: "-50vw",
      opacity: 0,
      duration: 1.5,
      ease: "circ.out",
      delay: 0.3,
      stagger: 0.1,
    });
  });

  useGSAP(() => {
    gsap.from(["#build-about", "#breathe-about"], {
      x: "50vw",
      opacity: 0,
      duration: 1.5,
      ease: "circ.out",
      delay: 0.3,
      stagger: 0.1,
    });
  });

  useGSAP(() => {
    gsap.from([".img-about"], {
      x: "50vw",
      opacity: 0,
      duration: 1.2,
      ease: "circ.out",
    });
  });

  useGSAP(() => {
    gsap.from([".headline-medium-about"], {
      x: "-50vw",
      opacity: 0,
      duration: 1.4,
      ease: "circ.out",
    });
  });

  return (
    <>
      <header id="header-about">
        {/* Greeting section */}
        <h1 id="design-about" className="headline-about">
          DESIGN
        </h1>
        <h1 id="build-about" className="headline-about">
          BUILD
        </h1>
        <h1 id="and-about" className="headline-about">
          AND
        </h1>
        <h1 id="breathe-about" className="headline-about">
          BREATHE
        </h1>
        <h2 className="headline-medium-about">
          Нека изградим <br /> ново бъдеще <br /> за София
        </h2>
        <img
          className="img-about"
          src="/images/sofia in smoke 2.webp"
          alt="sofia in smoke from above"
        />
      </header>

      {/* Main section with content */}
      <main id="about-main">
        <h4 className="headline-small-about first-headline-about">
          Кои сме ние?
        </h4>
        <img
          className="img-about-main float-right"
          src="/images/4ovek na pokriva.webp"
          alt="a person is on the roof and there is vitosha in the back"
        />
        <p className="paragraph-about">
          Ние сме организация, ангажирана в борбата с въздушното замърсяване в
          София чрез иновационни инфраструктурни решения. Целта ни е да подобрим
          качеството на живот в града, като разработваме и прилагаме новаторски
          подходи за справяне с този важен екологичен проблем. Основният ни
          фокус е върху изграждането на вентилационни коридори и сгради с
          пречистващи функции. Чрез тези проекти се стремим да осигурим по-чист
          въздух и устойчиво градско развитие за столицата.
        </p>
        <h4 className="headline-small-about">Какъв е проблемът?</h4>
        <p className="paragraph-about">
          Замърсяването на атмосферата в София е свързано с географското
          разположение и градската инфраструктура. Като котловина, градът е
          заобиколен от планини, което затруднява движението на въздушните маси
          и води до натрупване на замърсители. През зимата температурните
          инверсии допълнително влошават ситуацията, задържайки замърсяването в
          долните слоеве на атмосферата.
        </p>
        <img
          className="img-about-main float-right"
          src="/images/nova-sgrada-front.webp"
          alt="New building scaling left to right"
        />
        <p className="paragraph-about">
          Плътното застрояване и недостатъчният брой зелени площи ограничават
          естествената вентилация, увеличавайки задържането на замърсители,
          особено през студените месеци.
        </p>

        <h4 className="headline-small-about">
          Строежите не са проблемът, а решението!
        </h4>
        <p className="paragraph-about">
          Решението на въздушното замърсяване може да бъде постигнато чрез
          различни инфраструктурни мерки. Един от подходите е изграждането на
          вентилационни коридори, които позволяват свободно движение на
          въздушните маси и подобряват циркулацията, намалявайки концентрацията
          на замърсители.
        </p>
        <img
          className="img-about-main float-left"
          src="/images/hospital-mexico.webp"
          alt="Torre de Especialidades in mexico sideview"
        />
        <p className="paragraph-about">
          Внедряването на иновации като сгради с функции за пречистване на
          въздуха, подобно на модела на болницата "Торес де специалидадес" в
          Мексико Сити, може да допринесе за подобряване на качеството на
          атмосферата. Тази идея е доказала своята ефективност и може да бъде
          адаптирана в столицата като част от стратегията за справяне с
          екологичните предизвикателства.
        </p>

        <p className="paragraph-about">
          Ако смятате, че устойчивите инфраструктурни решения са ключови за
          подобряване на въздуха в града, ви каним да се свържете с нас. Заедно
          можем да създадем по-чист и здравословен живот чрез иновации като
          вентилационни коридори и пречистващи сгради, вдъхновени от успешни
          примери по света. Присъединете се към нашата мисия и нека направим
          София по-зелен и по-добър за живеене град.
        </p>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default About;
