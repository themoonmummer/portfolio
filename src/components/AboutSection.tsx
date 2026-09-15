import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const HEADING_TEXT = 'About Me';
const TYPING_SPEED = 90;

const ABOUT_PARAGRAPH = `My name is Riya Jha, and I am 21 years old. I am currently pursuing a Bachelor of Computer Applications (BCA), while exploring my interests in technology, creativity, and digital experiences.

I have many hobbies and interests, and coding is one of the things I enjoy most. It is also one of the main reasons I chose this field. I enjoy turning ideas into functional and meaningful digital experiences and continuously learning along the way.

I may not be famous, have a large team, or run a big agency, but as a vibe coder, I am confident in my ability to understand ideas, build useful solutions, and help individuals or small teams bring their projects to life.

I work remotely because I want to build a career that gives me both independence and flexibility. Beyond work, I have dreams of traveling, experiencing new places, and pursuing other things that matter to me. Remote work allows me to earn through my skills while creating the freedom to work toward those dreams as well.`;

export const AboutSection: React.FC = () => {
  const [typedHeading, setTypedHeading] = useState('');
  const [headingDone, setHeadingDone] = useState(false);
  const [started, setStarted] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
    }
  }, [isInView, started]);

  useEffect(() => {
    if (!started) return;
    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < HEADING_TEXT.length) {
        setTypedHeading(HEADING_TEXT.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setHeadingDone(true), 350);
      }
    }, TYPING_SPEED);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/about.jpeg"
          alt="Japanese bus station at evening"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(12, 22, 50, 0.7) 0%, rgba(18, 30, 60, 0.55) 50%, rgba(10, 18, 40, 0.65) 100%)',
          }}
        />
      </div>

      {/* Left-Aligned Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-24 sm:py-32">
        <div className="max-w-xl">
          {/* Typewriter Heading */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 inline-block"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontStyle: 'italic',
              color: 'rgba(200, 218, 245, 0.95)',
              letterSpacing: '0.01em',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.25)',
            }}
          >
            {typedHeading}
            {started && !headingDone && (
              <span
                className="inline-block w-[3px] h-[0.85em] ml-1 align-middle"
                style={{
                  backgroundColor: 'rgba(180, 200, 235, 0.8)',
                  animation: 'blink 1s step-end infinite',
                }}
              />
            )}
          </h2>

          {/* Paragraph — fades in after heading */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={headingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div
              className="space-y-5"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: 'rgba(195, 210, 235, 0.88)',
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                fontWeight: 500,
                lineHeight: 1.85,
                letterSpacing: '0.015em',
              }}
            >
              {ABOUT_PARAGRAPH.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
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
