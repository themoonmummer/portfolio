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
      "I’m a BCA student and frontend developer with a strong foundation in HTML, CSS, JavaScript, React, Python, C, C++, Java, DBMS, and Data Structures. I’ve been consistently coding and building practical projects for the past 8 months while currently pursuing my final year of BCA. I’m passionate about turning ideas into responsive, user-friendly, and functional web applications. I’m also experienced in accounting operations, GST compliance, content strategy, and digital marketing. I’m a vibe coder at heart—I learn by building, experimenting, and continuously improving. I take my work seriously and always give my best to deliver reliable and meaningful solutions.",
  },
  {
  id: "education",
  title: "Education",
  image: img2,
  description:
    "Currently pursuing a Bachelor of Computer Applications (BCA) from Indira Gandhi National Open University (IGNOU), developing a strong foundation in programming, software development, databases, and computer science concepts. Completed Senior Secondary education under CBSE in 2023 and High School under CBSE in 2021.",
},

  {
  id: "experience",
  title: "Experience",
  image: img3,
  description:
    "Frontend Developer Intern at Parvati And Sons, contributing to modern web applications through responsive interfaces, reusable React components, debugging, and user experience improvements. Alongside my internship, I work independently as a Full Stack Developer, designing and building products such as AI-powered applications, CRM and sales tools, immersive web experiences, and responsive business websites using React, Next.js, Vite, Tailwind CSS, and modern web technologies. My experience also includes accounting operations, GST compliance, financial documentation, PR, brand collaborations, and digital marketing, giving me a diverse professional background and a strong understanding of both technology and business.",
},

];

const About: React.FC = () => {
  const [activeCard, setActiveCard] = useState<CardData | null>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  /*
   * Keep the title synchronized with the Ferris wheel.
   *
   * 0s - 6s   -> About Me
   * 6s - 12s  -> Education
   * 12s - 18s -> Experience
   */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % CARDS.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const handleCardClick = (card: CardData) => {
    setIsClosing(false);

    // Keep the title and clicked card synchronized.
    const clickedIndex = CARDS.findIndex(
      (item) => item.id === card.id
    );

    if (clickedIndex !== -1) {
      setActiveCardIndex(clickedIndex);
    }

    setActiveCard(card);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsClosing(true);

    window.setTimeout(() => {
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
          <div className="stamp-row">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="about__stamp" key={`row1-${i}`}>
                <span>桜</span>
              </div>
            ))}
          </div>

          <div className="stamp-row">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="about__stamp" key={`row2-${i}`}>
                <span>桜</span>
              </div>
            ))}
          </div>

          <div className="stamp-row">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="about__stamp" key={`row3-${i}`}>
                <span>桜</span>
              </div>
            ))}
          </div>

          <div className="stamp-row">
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="about__stamp" key={`row4-${i}`}>
                <span>桜</span>
              </div>
            ))}
          </div>

          <div className="stamp-row">
            {Array.from({ length: 2 }).map((_, i) => (
              <div className="about__stamp" key={`row5-${i}`}>
                <span>桜</span>
              </div>
            ))}
          </div>

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
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(card);
                }
              }}
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
