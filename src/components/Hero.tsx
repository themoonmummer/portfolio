import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const TYPEWRITER_TEXT = 'hello';
const TYPING_SPEED = 120;
const PAUSE_AFTER_TYPING = 800;
const ZOOM_DURATION = 700;
const SCROLL_THRESHOLD = 100;

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'work' },
  { label: 'Skills/Languages', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const BROWN = '#4A2E2B';

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'zooming' | 'main'>('typing');
  const [typedText, setTypedText] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [isDocked, setIsDocked] = useState(false);

  const { scrollY } = useScroll();

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
    const timeout = setTimeout(() => setPhase('zooming'), PAUSE_AFTER_TYPING);
    return () => clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'zooming') return;
    const timeout = setTimeout(() => setPhase('main'), ZOOM_DURATION + 100);
    return () => clearTimeout(timeout);
  }, [phase]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (phase !== 'main') return;
    if (latest > SCROLL_THRESHOLD && !isDocked) {
      setIsDocked(true);
    } else if (latest <= SCROLL_THRESHOLD && isDocked) {
      setIsDocked(false);
    }
  });

  useEffect(() => {
    if (phase !== 'main') return;
    const ids = ['home', 'about', 'work', 'skills', 'contact'];
    const handleScroll = () => {
      const pos = window.scrollY + window.innerHeight / 3;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= pos) {
          setActiveTab(ids[i]);
          return;
        }
      }
      setActiveTab('home');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [phase]);

  const handleNavClick = useCallback(
    (id: string) => {
      setActiveTab(id);
      onNavigate?.(id);
    },
    [onNavigate]
  );

  const isZooming = phase === 'zooming';
  const isMain = phase === 'main';

  const NavLinks = () => (
    <nav className="flex flex-row gap-1 sm:gap-2 items-center relative">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => handleNavClick(item.id)}
          className="relative px-3 py-1.5 sm:px-4 sm:py-2 z-10 text-sm sm:text-base whitespace-nowrap"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: activeTab === item.id ? BROWN : 'rgba(74, 46, 43, 0.65)',
            fontWeight: activeTab === item.id ? 600 : 400,
            letterSpacing: '0.02em',
            transition: 'color 0.3s',
          }}
        >
          {activeTab === item.id && (
            <motion.div
              layoutId="navbar-pill"
              className="absolute inset-0 rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.55)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{item.label}</span>
        </button>
      ))}
    </nav>
  );

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Intro Pink Overlay */}
      <AnimatePresence>
        {!isMain && (
          <motion.div
            key="intro"
            className="absolute inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: '#FFD1DC' }}
            initial={{ opacity: 1 }}
            animate={{ opacity: isZooming ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <motion.h1
              className="font-bold tracking-wide select-none"
              style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: '#4a3040',
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                letterSpacing: '0.04em',
              }}
              animate={
                isZooming
                  ? { scale: 200, opacity: 0 }
                  : { scale: 1, opacity: 1 }
              }
              transition={
                isZooming
                  ? { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
                  : { duration: 0 }
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

      {/* Docked Top Navbar */}
      <AnimatePresence>
        {isMain && isDocked && (
          <motion.div
            key="docked-nav"
            className="fixed top-4 left-1/2 z-[60]"
            style={{ x: '-50%' }}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          >
            <div
              className="px-5 sm:px-7 py-2.5"
              style={{
                background: 'rgba(255, 255, 255, 0.22)',
                backdropFilter: 'blur(18px) saturate(180%)',
                WebkitBackdropFilter: 'blur(18px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.45)',
                borderRadius: '14px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
              <NavLinks />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div
        className="relative min-h-screen w-full flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/hero.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/5" />

        {/* Glass Card */}
        <motion.div
          className="relative z-10"
          style={{
            width: 'min(90vw, 1200px)',
            height: 'min(82vh, 750px)',
          }}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{
            scale: isMain ? 1 : 0.92,
            opacity: isMain ? 1 : 0,
          }}
          transition={{ duration: 0.7, delay: isMain ? 0.05 : 0, ease: 'easeOut' }}
        >
          <div
            className="w-full h-full flex flex-col items-center justify-center relative"
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '24px',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
              overflow: 'visible',
            }}
          >
            {/* Navbar Sticker - upper center of card */}
            <AnimatePresence>
              {isMain && !isDocked && (
                <motion.div
                  key="card-nav"
                  className="absolute z-20 left-1/2"
                  style={{ top: '10%', transform: 'translateX(-50%)' }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                >
                  <div
                    className="px-5 sm:px-6 py-2.5"
                    style={{
                      background: 'rgba(255, 255, 255, 0.35)',
                      border: '1px solid rgba(255, 255, 255, 0.5)',
                      borderRadius: '14px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    }}
                  >
                    <NavLinks />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Left-aligned Text Content */}
            <div className="absolute left-0 bottom-0 w-full px-8 sm:px-12 md:px-16 pb-24 sm:pb-28 md:pb-32">
              <motion.div
                className="text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isMain ? 1 : 0,
                  y: isMain ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: BROWN,
                    fontWeight: 800,
                    letterSpacing: '0.01em',
                    lineHeight: 1.1,
                  }}
                >
                  Riya Jha
                </h2>
                <p
                  className="text-xl sm:text-2xl md:text-3xl mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: BROWN,
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    lineHeight: 1.3,
                  }}
                >
                  Vibe Coder & Full-Stack Developer
                </p>
                <p
                  className="text-base sm:text-lg md:text-xl max-w-lg"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: BROWN,
                    fontWeight: 800,
                    letterSpacing: '0.01em',
                    lineHeight: 1.6,
                  }}
                >
                  I'm a person with a lot of hobbies, and this is one of them where I want to create
                  and earn through it so I can support my other hobbies and dreams too.
                </p>
              </motion.div>
            </div>
          </div>
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
