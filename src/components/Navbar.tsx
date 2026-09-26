import { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';

interface NavbarProps {
  visible: boolean;
  onNavigate?: (section: string) => void;
}

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'work' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const BROWN = '#4A2E2B';

export const Navbar: React.FC<NavbarProps> = ({ visible, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  const { scrollY } = useScroll();

  // Smooth scroll-based transforms (0 = at hero, 1 = fully scrolled past hero)
  const scrollProgress = useTransform(scrollY, [0, 600], [0, 1]);
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollProgress, 'change', (v) => setProgress(v));

  // Check mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Interpolate properties based on scroll progress
  const paddingTop = 2.5 + progress * 4;
  const paddingSides = 28 + progress * 12;
  const fontSize = 0.875 + progress * 0.125;
  const navGap = 0.25 + progress * 0.25;

  // Track active tab on scroll
  useEffect(() => {
    if (!visible) return;
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
  }, [visible]);

  const handleNavClick = useCallback(
    (id: string) => {
      setActiveTab(id);
      onNavigate?.(id);
    },
    [onNavigate]
  );

  if (!visible) return null;

  // Mobile styles - bottom fixed nav bar
  const mobileStyles = {
    position: 'fixed' as const,
    top: 'auto',
    bottom: 'env(safe-area-inset-bottom, 16px)',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 50,
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.7)',
    borderRadius: '999px',
    boxShadow: '0 -4px 32px rgba(0, 0, 0, 0.1)',
    width: 'calc(100% - 32px)',
    maxWidth: '520px',
  };

  // Desktop styles - top-left floating pill
  const desktopStyles = {
    position: 'fixed' as const,
    top: `${95 - progress * 55}px`,
    left: '35%',
    transform: 'translateX(-50%)',
    zIndex: 50,
    paddingTop: `${paddingTop * 4}px`,
    paddingBottom: `${paddingTop * 4}px`,
    paddingLeft: `${paddingSides}px`,
    paddingRight: `${paddingSides}px`,
    background: `rgba(255, 255, 255, ${0.2 + progress * 0.1})`,
    backdropFilter: progress > 0.1 ? `blur(${12 + progress * 6}px) saturate(${160 + progress * 20}%)` : 'none',
    WebkitBackdropFilter: progress > 0.1 ? `blur(${12 + progress * 6}px) saturate(${160 + progress * 20}%)` : 'none',
    border: '1px solid rgba(255, 255, 255, 0.45)',
    borderRadius: `${14 + progress * 4}px`,
    boxShadow: `0 ${4 + progress * 4}px ${15 + progress * 10}px rgba(0, 0, 0, ${0.06 + progress * 0.04})`,
    transition: 'backdrop-filter 0.1s',
  };

  return (
    <motion.div
      className="pointer-events-auto"
      style={isMobile ? mobileStyles : desktopStyles}
      initial={{ opacity: 0, y: isMobile ? 20 : -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <nav
        className="flex flex-row items-center relative"
        style={{ 
          gap: isMobile ? '0.35rem' : `${navGap}rem`,
          justifyContent: isMobile ? 'space-around' : 'flex-start',
          width: isMobile ? '100%' : 'auto',
        }}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className="relative z-10 whitespace-nowrap"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: activeTab === item.id ? BROWN : 'rgba(74, 46, 43, 0.65)',
              fontWeight: activeTab === item.id ? 600 : 400,
              letterSpacing: '0.02em',
              transition: 'color 0.3s',
              fontSize: isMobile ? '0.7rem' : `${fontSize}rem`,
              padding: isMobile ? '0.5rem 0.85rem' : `${0.375 + progress * 0.25}rem ${0.75 + progress * 0.25}rem`,
              minHeight: isMobile ? '44px' : 'auto',
              minWidth: isMobile ? 'auto' : 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {activeTab === item.id && !isMobile && (
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
            {isMobile && activeTab === item.id && (
              <motion.div
                layoutId="navbar-pill-mobile"
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'rgba(74, 46, 43, 0.15)',
                  border: '1px solid rgba(74, 46, 43, 0.3)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
      </nav>
    </motion.div>
  );
};
