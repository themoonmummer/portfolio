import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ABOUT_DATA } from '../data/portfolioData';

const HEADING_TEXT = 'About Me';
const TYPING_SPEED = 100;

export const AboutSection: React.FC = () => {
  const [typedHeading, setTypedHeading] = useState('');
  const [headingDone, setHeadingDone] = useState(false);
  const [started, setStarted] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Start typing when section enters viewport
  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
    }
  }, [isInView, started]);

  // Typewriter for heading
  useEffect(() => {
    if (!started) return;
    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < HEADING_TEXT.length) {
        setTypedHeading(HEADING_TEXT.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setHeadingDone(true), 400);
      }
    }, TYPING_SPEED);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/about.jpeg"
          alt="Japanese bus station at evening"
          className="h-full w-full object-cover"
        />
        {/* Dark blue overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15, 25, 50, 0.55) 0%, rgba(20, 35, 70, 0.65) 50%, rgba(10, 20, 45, 0.75) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 py-24 sm:py-32 text-center">
        {/* Typewriter Heading */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 inline-block"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: 'rgba(200, 215, 240, 0.95)',
            letterSpacing: '0.03em',
            textShadow: '0 2px 16px rgba(0, 0, 0, 0.3)',
          }}
        >
          {typedHeading}
          {started && !headingDone && (
            <span
              className="inline-block w-[3px] h-[0.85em] ml-1 align-middle"
              style={{
                backgroundColor: 'rgba(200, 215, 240, 0.8)',
                animation: 'blink 1s step-end infinite',
              }}
            />
          )}
        </h2>

        {/* Paragraph — fades in after heading finishes */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={
            headingDone
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 24 }
          }
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: 'rgba(190, 205, 230, 0.9)',
              fontWeight: 500,
              letterSpacing: '0.01em',
              lineHeight: 1.8,
            }}
          >
            {ABOUT_DATA.p1}
          </p>
          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: 'rgba(180, 195, 220, 0.8)',
              fontWeight: 400,
              letterSpacing: '0.01em',
              lineHeight: 1.8,
            }}
          >
            {ABOUT_DATA.p2}
          </p>
        </motion.div>

        {/* Philosophy & Location Cards */}
        <motion.div
          className="grid grid-cols-2 gap-4 mt-12 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={headingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          {ABOUT_DATA.philosophies.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <span
                className="material-symbols-outlined text-2xl mb-2 block"
                style={{ color: 'rgba(160, 190, 230, 0.8)' }}
              >
                {item.icon}
              </span>
              <h4
                className="font-bold text-base mb-1"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: 'rgba(200, 215, 240, 0.95)',
                }}
              >
                {item.title}
              </h4>
              <p
                className="text-xs sm:text-sm"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: 'rgba(180, 195, 220, 0.75)',
                }}
              >
                {item.subtitle}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};
