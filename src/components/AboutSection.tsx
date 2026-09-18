import React, { useState, useEffect } from "react";
import "./about.css";

import img1 from "../../assets/inspo/1.jpeg";
import img2 from "../../assets/inspo/2.jpeg";
import img3 from "../../assets/inspo/3.jpeg";

interface CardData {
  id: "about" | "education" | "experience";
  title: string;
  image: string;
  description: string;
}

const CARDS: CardData[] = [
  {
    id: "about",
    title: "About Me",
    image: img1,
    description:
      "I am a passionate full-stack developer dedicated to crafting beautiful, intuitive, and high-performance digital experiences. I love blending creative design with sturdy engineering.",
  },
  {
    id: "education",
    title: "Education",
    image: img2,
    description:
      "Graduated with a Bachelor of Science in Computer Science. Focused coursework on Web Development, Algorithms, Human-Computer Interaction, and Software Architecture.",
  },
  {
    id: "experience",
    title: "Experience",
    image: img3,
    description:
      "Worked across dynamic tech teams building modern web applications, scalable APIs, and user-centric frontend designs with React, TypeScript, and modern CSS practices.",
  },
];

const About: React.FC = () => {
  const [activeCard, setActiveCard] = useState<CardData | null>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setActiveCardIndex((prev) => (prev + 1) % CARDS.length);

      const interval = setInterval(() => {
        setActiveCardIndex((prev) => (prev + 1) % CARDS.length);
      }, 6000);

      return () => clearInterval(interval);
    }, 5000);

    return () => clearTimeout(initialTimer);
  }, []);

  const handleCardClick = (card: CardData) => {
    setIsClosing(false);
    setActiveCard(card);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsClosing(true);

    setTimeout(() => {
      setActiveCard(null);
      setIsClosing(false);
    }, 350);
  };

  const currentTitle = CARDS[activeCardIndex].title;

  return (
    <section className="about" id="about">

      {/* =====================================================
          BACKGROUND PETALS
      ===================================================== */}
      <div className="about__petals" aria-hidden="true">
        <span className="petal petal--1" />
        <span className="petal petal--2" />
        <span className="petal petal--3" />
        <span className="petal petal--4" />
        <span className="petal petal--5" />
      </div>

      {/* =====================================================
          TOP-RIGHT TRIANGLE STAMPS
          
          6 → 5 → 4 → 3 → 2 → 1
      ===================================================== */}
      <div className="about__stamp-corner" aria-hidden="true">
        <div className="stamp-triangle">

          {/* Row 1 — 6 stamps */}
          <div className="stamp-row">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="about__stamp" key={`row1-${i}`}>
                <span>桜</span>
              </div>
            ))}
          </div>

          {/* Row 2 — 5 stamps */}
          <div className="stamp-row">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="about__stamp" key={`row2-${i}`}>
                <span>桜</span>
              </div>
            ))}
          </div>

          {/* Row 3 — 4 stamps */}
          <div className="stamp-row">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="about__stamp" key={`row3-${i}`}>
                <span>桜</span>
              </div>
            ))}
          </div>

          {/* Row 4 — 3 stamps */}
          <div className="stamp-row">
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="about__stamp" key={`row4-${i}`}>
                <span>桜</span>
              </div>
            ))}
          </div>

          {/* Row 5 — 2 stamps */}
          <div className="stamp-row">
            {Array.from({ length: 2 }).map((_, i) => (
              <div className="about__stamp" key={`row5-${i}`}>
                <span>桜</span>
              </div>
            ))}
          </div>

          {/* Row 6 — 1 stamp */}
          <div className="stamp-row">
            <div className="about__stamp">
              <span>桜</span>
            </div>
          </div>

        </div>
      </div>

      {/* =====================================================
          FERRIS WHEEL
      ===================================================== */}
      <div className="ferris-wheel" aria-hidden="true">

        {/* Large dusty-pink circle behind the Ferris wheel */}
        <div className="ferris-wheel__background-circle" />

        <div className="ferris-wheel__rim">

          <span className="ferris-wheel__spoke ferris-wheel__spoke--1" />
          <span className="ferris-wheel__spoke ferris-wheel__spoke--2" />
          <span className="ferris-wheel__spoke ferris-wheel__spoke--3" />
          <span className="ferris-wheel__spoke ferris-wheel__spoke--4" />
          <span className="ferris-wheel__spoke ferris-wheel__spoke--5" />
          <span className="ferris-wheel__spoke ferris-wheel__spoke--6" />
          <span className="ferris-wheel__spoke ferris-wheel__spoke--7" />
          <span className="ferris-wheel__spoke ferris-wheel__spoke--8" />

          <div className="ferris-wheel__hub" />

        </div>

        {/* THREE PHOTO CARDS */}
        <div className="ferris-wheel__cards">

          {CARDS.map((card, idx) => (
            <div
              key={card.id}
              className={`ferris-card ferris-card--${idx + 1}`}
              onClick={() => handleCardClick(card)}
              role="button"
              tabIndex={0}
            >
              <div className="ferris-card__inner">
                <img
                  src={card.image}
                  alt={card.title}
                  className="ferris-card__image"
                />
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* =====================================================
          RIGHT SIDE CONTENT
      ===================================================== */}
      <div className="about__content">

        <h1 className="about__title" key={currentTitle}>
          {currentTitle}
        </h1>

        <p className="about__subtitle">
          Click card to know more
        </p>

      </div>

      {/* =====================================================
          EXPANDING / COLLAPSING MODAL
      ===================================================== */}
      {activeCard && (
        <div
          className={`card-modal ${
            isClosing ? "card-modal--closing" : ""
          }`}
        >
          <div className="card-modal__hero">
            <img
              src={activeCard.image}
              alt={activeCard.title}
            />
          </div>

          <div className="card-modal__body">

            <div>
              <h2 className="card-modal__title">
                {activeCard.title}
              </h2>

              <p className="card-modal__text">
                {activeCard.description}
              </p>
            </div>

            <button
              type="button"
              className="card-modal__back"
              onClick={handleClose}
            >
              &larr; back to section
            </button>

          </div>
        </div>
      )}

    </section>
  );
};

export default About;
