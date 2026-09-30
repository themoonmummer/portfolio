import { useState, useEffect, useCallback } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  visible: boolean;
  onNavigate?: (section: string) => void;
}

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'work' },
  { label: 'Skills', id: 'skills' },
  { label: 'Social Media', id: 'social-media' },
  { label: 'Contact', id: 'contact' },
];

const BROWN = '#4A2E2B';

export const Navbar: React.FC<NavbarProps> = ({
  visible,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  // Smooth scroll-based transforms
  const scrollProgress = useTransform(scrollY, [0, 600], [0, 1]);
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollProgress, 'change', (v) => {
    setProgress(v);
  });

  // Check mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Interpolate properties based on scroll progress
  const paddingTop = 2.5 + progress * 4;
  const paddingSides = 28 + progress * 12;
  const fontSize = 0.875 + progress * 0.125;
  const navGap = 0.25 + progress * 0.25;

  // Track active tab on scroll
  useEffect(() => {
    if (!visible) return;

    const ids = [
      'home',
      'about',
      'work',
      'skills',
      'social-media',
      'contact',
    ];

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

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    // Set correct tab immediately
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible]);

  const handleNavClick = useCallback(
    (id: string) => {
      setActiveTab(id);
      setMenuOpen(false);

      /*
       * Directly scroll to the section when it exists.
       * This fixes Projects and also makes Social Media
       * work without requiring another navbar or route.
       */
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      /*
       * Keep the existing parent navigation logic working
       * if your App component uses onNavigate.
       */
      onNavigate?.(id);
    },
    [onNavigate]
  );

  if (!visible) return null;

  // --- Mobile: compact top bar with brand + hamburger ---
  if (isMobile) {
    return (
      <>
        <motion.header
          className="pointer-events-auto"
          style={{
            position: 'fixed',
            top: 'max(12px, env(safe-area-inset-top, 12px))',
            left: '12px',
            right: '12px',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: '18px',
            paddingRight: '8px',
            paddingTop: '8px',
            paddingBottom: '8px',
            minHeight: '56px',
            background: `rgba(255, 255, 255, ${0.22 + progress * 0.6})`,
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.45)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.10)',
          }}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            aria-label="Go to home — Riya Jha portfolio"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: BROWN,
              fontWeight: 700,
              fontSize: '1.2rem',
              letterSpacing: '0.02em',
              lineHeight: 1,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '10px 4px',
              minHeight: '44px',
            }}
          >
            Riya Jha
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              width: '44px',
              height: '44px',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              border: menuOpen
                ? '1px solid rgba(74, 46, 43, 0.32)'
                : '1px solid rgba(74, 46, 43, 0.18)',
              background: menuOpen
                ? 'rgba(74, 46, 43, 0.12)'
                : 'rgba(255, 255, 255, 0.38)',
              color: BROWN,
              cursor: 'pointer',
            }}
          >
            {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </motion.header>

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                key="mobile-menu-backdrop"
                style={{
                  position: 'fixed',
                  inset: 0,
                  zIndex: 55,
                  background: 'rgba(23, 20, 18, 0.28)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMenuOpen(false)}
              />
              <motion.nav
                key="mobile-menu"
                aria-label="Mobile navigation"
                style={{
                  position: 'fixed',
                  top: 'calc(max(12px, env(safe-area-inset-top, 12px)) + 64px)',
                  left: '12px',
                  right: '12px',
                  zIndex: 56,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  padding: '8px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(24px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.7)',
                  borderRadius: '18px',
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.18)',
                  overflow: 'hidden',
                }}
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {NAV_ITEMS.map((item, index) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        padding: '13px 14px',
                        minHeight: '50px',
                        borderRadius: '12px',
                        border: isActive
                          ? '1px solid rgba(74, 46, 43, 0.22)'
                          : '1px solid transparent',
                        background: isActive
                          ? 'rgba(74, 46, 43, 0.10)'
                          : 'transparent',
                        color: isActive ? BROWN : 'rgba(74, 46, 43, 0.72)',
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: isActive ? 700 : 500,
                        fontSize: '1.08rem',
                        letterSpacing: '0.02em',
                        cursor: 'pointer',
                      }}
                    >
                      <span>
                        <span
                          style={{
                            display: 'inline-block',
                            width: '26px',
                            marginRight: '10px',
                            fontSize: '0.78rem',
                            opacity: 0.5,
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {item.label}
                      </span>
                      <span
                        aria-hidden
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '999px',
                          background: isActive ? BROWN : 'transparent',
                          border: isActive
                            ? 'none'
                            : '1px solid rgba(74, 46, 43, 0.3)',
                          flexShrink: 0,
                        }}
                      />
                    </button>
                  );
                })}
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop styles - SAME existing top-left floating pill
  const desktopStyles = {
    position: 'fixed' as const,
    top: `${95 - progress * 55}px`,
    left: '30%',
    transform: 'translateX(-40%)',
    zIndex: 50,
    paddingTop: `${paddingTop * 4}px`,
    paddingBottom: `${paddingTop * 4}px`,
    paddingLeft: `${paddingSides}px`,
    paddingRight: `${paddingSides}px`,
    background: `rgba(255, 255, 255, ${0.2 + progress * 0.1})`,
    backdropFilter:
      progress > 0.1
        ? `blur(${12 + progress * 6}px) saturate(${160 + progress * 20}%)`
        : 'none',
    WebkitBackdropFilter:
      progress > 0.1
        ? `blur(${12 + progress * 6}px) saturate(${160 + progress * 20}%)`
        : 'none',
    border: '1px solid rgba(255, 255, 255, 0.45)',
    borderRadius: `${14 + progress * 4}px`,
    boxShadow: `0 ${4 + progress * 4}px ${
      15 + progress * 10
    }px rgba(0, 0, 0, ${0.06 + progress * 0.04})`,
    transition: 'backdrop-filter 0.1s',
  };

  return (
    <motion.div
      className="pointer-events-auto"
      style={desktopStyles}
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        ease: 'easeOut',
      }}
    >
      <nav
        className="flex flex-row items-center relative"
        style={{
          gap: `${navGap}rem`,
          justifyContent: 'flex-start',
          width: 'auto',
        }}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleNavClick(item.id)}
            className="relative z-10 whitespace-nowrap"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color:
                activeTab === item.id
                  ? BROWN
                  : 'rgba(74, 46, 43, 0.65)',
              fontWeight:
                activeTab === item.id ? 600 : 400,
              letterSpacing: '0.02em',
              transition: 'color 0.3s',
              fontSize: `${fontSize}rem`,
              padding: `${0.375 + progress * 0.25}rem ${
                0.75 + progress * 0.25
              }rem`,
              minHeight: 'auto',
              minWidth: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {activeTab === item.id && (
              <motion.div
                layoutId="navbar-pill"
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'rgba(255, 255, 255, 0.55)',
                  border:
                    '1px solid rgba(255, 255, 255, 0.6)',
                  boxShadow:
                    '0 2px 8px rgba(0,0,0,0.06)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </motion.div>
  );
};
