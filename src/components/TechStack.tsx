import React, { useState } from "react";
import "./skill.css";

type ActiveCard = "skills" | "languages" | null;

const TechStack: React.FC = () => {
  const [activeCard, setActiveCard] = useState<ActiveCard>(null);
  const [closing, setClosing] = useState(false);

  const openCard = (card: "skills" | "languages") => {
    setClosing(false);
    setActiveCard(card);
  };

  const closeCard = () => {
    setClosing(true);

    setTimeout(() => {
      setActiveCard(null);
      setClosing(false);
    }, 500);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-overlay">

        {/* =====================================================
            NORMAL SECTION
            ===================================================== */}

        {!activeCard && (
          <>
            <div className="skills-cards">

              {/* SKILLS CARD */}
              <button
                className="skills-card skills-card--skills"
                onClick={() => openCard("skills")}
              >
                <span className="skills-card__number">01</span>

                <h2>Skills</h2>
              </button>


              {/* LANGUAGES CARD */}
              <button
                className="skills-card skills-card--languages"
                onClick={() => openCard("languages")}
              >
                <span className="skills-card__number">02</span>

                <h2>Languages</h2>
              </button>

            </div>

            <p className="skills-hint">
              click cards to know more
            </p>
          </>
        )}


        {/* =====================================================
            EXPANDED SKILLS PAGE
            ===================================================== */}

        {activeCard === "skills" && (
          <div
            className={`skills-expanded ${
              closing ? "skills-expanded--closing" : ""
            }`}
          >
            <div className="skills-expanded__content">

              <span className="skills-expanded__number">
                01
              </span>

              <h1>Skills</h1>

              <p className="skills-expanded__intro">
                A collection of the tools, technologies, and
                creative skills I use to build digital experiences.
              </p>

              <div className="skills-list">

                <div className="skill-item">
                  <span>01</span>
                  <p>React / React Native</p>
                </div>

                <div className="skill-item">
                  <span>02</span>
                  <p>TypeScript / JavaScript</p>
                </div>

                <div className="skill-item">
                  <span>03</span>
                  <p>HTML / CSS</p>
                </div>

                <div className="skill-item">
                  <span>04</span>
                  <p>Node.js / APIs</p>
                </div>

                <div className="skill-item">
                  <span>05</span>
                  <p>UI / UX Design</p>
                </div>

                <div className="skill-item">
                  <span>06</span>
                  <p>Responsive Web Development</p>
                </div>

              </div>

              <button
                className="skills-back"
                onClick={closeCard}
              >
                <span>←</span>
                back to section
              </button>

            </div>
          </div>
        )}


        {/* =====================================================
            EXPANDED LANGUAGES PAGE
            ===================================================== */}

        {activeCard === "languages" && (
          <div
            className={`skills-expanded skills-expanded--languages ${
              closing ? "skills-expanded--closing" : ""
            }`}
          >
            <div className="skills-expanded__content">

              <span className="skills-expanded__number">
                02
              </span>

              <h1>Languages</h1>

              <p className="skills-expanded__intro">
                Languages I use to communicate, create, and
                bring ideas to life.
              </p>

              <div className="skills-list">

                <div className="skill-item">
                  <span>01</span>
                  <p>English</p>
                </div>

                <div className="skill-item">
                  <span>02</span>
                  <p>Hindi</p>
                </div>

                <div className="skill-item">
                  <span>03</span>
                  <p>JavaScript</p>
                </div>

                <div className="skill-item">
                  <span>04</span>
                  <p>TypeScript</p>
                </div>

              </div>

              <button
                className="skills-back"
                onClick={closeCard}
              >
                <span>←</span>
                back to section
              </button>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default TechStack;
