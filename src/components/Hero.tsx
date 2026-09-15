import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const TYPEWRITER_TEXT = 'hello';
const TYPING_SPEED = 120;
const PAUSE_AFTER_TYPING = 1000;

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'fading' | 'main'>('typing');
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (phase !== 'typing') return;

    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < TYPEWRITER_TEXT.length) {
        setTypedText(TYPEWRITER_TEXT.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        setPhase('pausing');
      }
    }, TYPING_SPEED);

    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'pausing') return;

    const timeout = setTimeout(() => {
      setPhase('fading');
    }, PAUSE_AFTER_TYPING);

    return () => clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'fading') return;

    const timeout = setTimeout(() => {
      setPhase('main');
    }, 800);

    return () => clearTimeout(timeout);
  }, [phase]);

  const handleNavClick = useCallback((section: string) => {
    onNavigate?.(section);
  }, [onNavigate]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatePresence>
        {phase !== 'main' && (
          <motion.div
            key="intro"
            className="absolute inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: '#FFD1DC' }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <div className="text-center">
              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-light tracking-wide"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#4a3040',
                  letterSpacing: '0.05em',
                }}
              >
                {typedText}
                <span
                  className="inline-block w-[3px] h-[0.8em] ml-1 align-middle"
                  style={{
                    backgroundColor: '#4a3040',
                    animation: 'blink 1s step-end infinite',
                  }}
                />
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        className="relative min-h-screen w-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'main' ? 1 : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{
          backgroundImage: 'url(/images/hero.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/10" />

        {/* Glassmorphism Card */}
        <motion.div
          className="relative z-10 w-full max-w-5xl mx-4 sm:mx-8"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{
            scale: phase === 'main' ? 1 : 0.95,
            opacity: phase === 'main' ? 1 : 0,
          }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="flex flex-col md:flex-row min-h-[400px] sm:min-h-[450px]">
              {/* Left Side - Text */}
              <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 md:p-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: phase === 'main' ? 1 : 0,
                    y: phase === 'main' ? 0 : 20,
                  }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h2
                    className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: '#2d1f2d',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Riya Jha
                  </h2>
                  <p
                    className="text-lg sm:text-xl md:text-2xl"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: '#4a3040',
                      fontWeight: 300,
                      letterSpacing: '0.03em',
                    }}
                  >
                    Vibe Coder & Full-Stack Developer
                  </p>
                </motion.div>
              </div>

              {/* Right Side - Vertical Navbar */}
              <motion.div
                className="flex-1 flex items-center justify-center p-8 sm:p-12 md:p-16 md:border-l border-white/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: phase === 'main' ? 1 : 0,
                  x: phase === 'main' ? 0 : 20,
                }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <nav className="flex flex-col gap-6 sm:gap-8">
                  {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
                    <motion.button
                      key={item}
                      onClick={() => handleNavClick(item.toLowerCase())}
                      className="text-left group"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{
                        opacity: phase === 'main' ? 1 : 0,
                        x: phase === 'main' ? 0 : 10,
                      }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                      whileHover={{ x: 8 }}
                    >
                      <span
                        className="text-xl sm:text-2xl md:text-3xl transition-all duration-300 group-hover:text-pink-600"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          color: '#2d1f2d',
                          fontWeight: 400,
                          letterSpacing: '0.02em',
                        }}
                      >
                        {item}
                      </span>
                    </motion.button>
                  ))}
                </nav>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};
