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

  // Sync title changes precisely when card reaches front position (18s total / 3 cards = 6s step)
  useEffect(() => {
    // 1 second offset accounts for animation ease-in-out curve
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
      {/* Background decoration */}
      <div className="about__petals" aria-hidden="true">
        <span className="petal petal--1" />
        <span className="petal petal--2" />
        <span className="petal petal--3" />
        <span className="petal petal--4" />
        <span className="petal petal--5" />
      </div>

      {/* TOP-RIGHT FLUSH CORNER STAMPS */}
      <div className="about__stamp-corner" aria-hidden="true">
        {/* Top-row extension (sticked to top screen edge) */}
        <div className="stamp-extension-row">
          <div className="about__stamp"><span>桜</span></div>
          <div className="about__stamp"><span>桜</span></div>
        </div>

        {/* Core 3x3 Stamp Matrix */}
        <div className="stamp-matrix-3x3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="about__stamp">
              <span>桜</span>
            </div>
          ))}
        </div>

        {/* Bottom-column extension (sticked to right screen edge) */}
        <div className="stamp-extension-col">
          <div className="about__stamp"><span>桜</span></div>
          <div className="about__stamp"><span>桜</span></div>
        </div>
      </div>

      {/* FERRIS WHEEL */}
      <div className="ferris-wheel" aria-hidden="true">
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

      {/* RIGHT SIDE CONTENT */}
      <div className="about__content">
        <h1 className="about__title" key={currentTitle}>
          {currentTitle}
        </h1>
        <p className="about__subtitle">Click card to know more</p>
      </div>

      {/* EXPANDING / COLLAPSING MODAL */}
      {activeCard && (
        <div className={`card-modal ${isClosing ? "card-modal--closing" : ""}`}>
          <div className="card-modal__hero">
            <img src={activeCard.image} alt={activeCard.title} />
          </div>
          <div className="card-modal__body">
            <div>
              <h2 className="card-modal__title">{activeCard.title}</h2>
              <p className="card-modal__text">{activeCard.description}</p>
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