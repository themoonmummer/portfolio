import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './Navbar';
import fuji3 from '../../assets/inspo/fuji3.jpeg';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const TYPEWRITER_TEXT = 'hello';
const TYPING_SPEED = 120;
const PAUSE_AFTER_TYPING = 800;
const ZOOM_DURATION = 700;

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [phase, setPhase] = useState<
    'typing' | 'pausing' | 'zooming' | 'main'
  >('typing');

  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (phase !== 'typing') return;

    let charIndex = 0;

    const interval = window.setInterval(() => {
      if (charIndex < TYPEWRITER_TEXT.length) {
        setTypedText(TYPEWRITER_TEXT.slice(0, charIndex + 1));
        charIndex++;
      } else {
        window.clearInterval(interval);
        setPhase('pausing');
      }
    }, TYPING_SPEED);

    return () => window.clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'pausing') return;

    const timeout = window.setTimeout(() => {
      setPhase('zooming');
    }, PAUSE_AFTER_TYPING);

    return () => window.clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'zooming') return;

    const timeout = window.setTimeout(() => {
      setPhase('main');
    }, ZOOM_DURATION + 100);

    return () => window.clearTimeout(timeout);
  }, [phase]);

  const isZooming = phase === 'zooming';
  const isMain = phase === 'main';

  return (
    <section className="relative section-full vh-fix overflow-hidden">

      {/* =====================================================
          INTRO
          ===================================================== */}

      <AnimatePresence>
        {!isMain && (
          <motion.div
            key="intro"
            className="absolute inset-0 z-50 flex items-center justify-center"
            style={{
              backgroundColor: '#d1e3ff',
            }}
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: isZooming ? 0 : 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.7,
              ease: 'easeInOut',
            }}
          >
            <motion.h1
              className="font-bold tracking-wide select-none"
              style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: '#4a3040',
                fontSize: 'clamp(2.5rem, 14vw, 8rem)',
                letterSpacing: '0.04em',
              }}
              animate={
                isZooming
                  ? {
                      scale: 200,
                      opacity: 0,
                    }
                  : {
                      scale: 1,
                      opacity: 1,
                    }
              }
              transition={
                isZooming
                  ? {
                      duration: 0.7,
                      ease: [0.4, 0, 0.2, 1],
                    }
                  : {
                      duration: 0,
                    }
              }
            >
              {typedText}

              {!isZooming && typedText.length > 0 && (
                <span
                  className="inline-block w-[4px] h-[0.85em] ml-1 align-middle"
                  style={{
                    backgroundColor: '#4a3040',
                    animation: 'blink 1s step-end infinite',
                  }}
                />
              )}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <Navbar
        visible={isMain}
        onNavigate={onNavigate}
      />

      {/* =====================================================
          MAIN HERO
          ===================================================== */}

      <div
        className="relative w-full flex items-center justify-center section-full vh-fix"
        style={{
          backgroundImage: `url("${fuji3}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >

        {/* ===================================================
            GLASS CARD
            =================================================== */}

        <motion.div
          className="relative z-10"
          style={{
            width: 'min(94vw, 1200px)',
            height: 'min(88vh, 88svh, 800px)',
            maxHeight: '88svh',
          }}
          initial={{
            scale: 0.92,
            opacity: 0,
          }}
          animate={{
            scale: isMain ? 1 : 0.92,
            opacity: isMain ? 1 : 0,
          }}
          transition={{
            duration: 0.7,
            delay: isMain ? 0.05 : 0,
            ease: 'easeOut',
          }}
        >
          <div
            className="w-full h-full relative"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              borderRadius: 'clamp(12px, 2vw, 24px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              overflow: 'hidden',
            }}
          >

            {/* =================================================
                TEXT
                ================================================= */}

            <div className="absolute left-0 bottom-0 w-full px-5 sm:px-7 md:px-10 lg:px-14 pb-14 sm:pb-18 md:pb-22 lg:pb-26">
              <motion.div
                className="text-left"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: isMain ? 1 : 0,
                  y: isMain ? 0 : 20,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                }}
              >
                <h2
                  className="mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: '#F3E9D7',
                    fontWeight: 800,
                    letterSpacing: '0.01em',
                    lineHeight: 1.1,
                    fontSize: 'clamp(2.25rem, 5.5vw, 5rem)',
                    transform: 'translate(clamp(16px, 3.5vw, 50px), clamp(-16px, -2.5vw, -50px))',
                  }}
                >
                  Riya Jha
                </h2>

                <p
                  className="mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: '#F3E9D7',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    lineHeight: 1.25,
                    fontSize: 'clamp(1.1rem, 2.8vw, 2.25rem)',
                    transform: 'translate(clamp(16px, 3.5vw, 50px), clamp(-12px, -2vw, -40px))',
                  }}
                >
                  Vibe Coder & Full-Stack Developer
                </p>

                <p
                  className="max-w-md"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: '#F3E9D7',
                    fontWeight: 900,
                    letterSpacing: '0.02em',
                    lineHeight: 1.7,
                    fontSize: 'clamp(0.7rem, 1.2vw, 0.95rem)',
                    WebkitTextStroke: '0.25px #241310',
                    transform: 'translate(clamp(16px, 3.5vw, 50px), clamp(-16px, -2.5vw, -50px))',
                  }}
                >
                  I&apos;m a person with a lot of hobbies, and this is one of them
                  where I want to create and earn through it so I can support
                  my other hobbies and dreams too.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          TYPEWRITER CURSOR
          ===================================================== */}

      <style>{`
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }

          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
