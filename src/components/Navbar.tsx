import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

interface NavbarProps {
  visible: boolean;
  onNavigate?: (section: string) => void;
}

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'work' },
  { label: 'Skills/Languages', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const BROWN = '#4A2E2B';
const SCROLL_THRESHOLD = 100;

export const Navbar: React.FC<NavbarProps> = ({ visible, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [isDocked, setIsDocked] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (!visible) return;
    if (latest > SCROLL_THRESHOLD && !isDocked) {
      setIsDocked(true);
    } else if (latest <= SCROLL_THRESHOLD && isDocked) {
      setIsDocked(false);
    }
  });

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

  return (
    <motion.div
      ref={containerRef}
      className="pointer-events-auto"
      style={{
        position: 'fixed',
        top: '95px',
        left: '35%',
        transform: 'translateX(-50%)',
        zIndex: 50,
      }}
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: isDocked ? 16 : 0,
        scale: 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <div
        className="px-5 sm:px-7 py-2.5"
        style={{
          background: isDocked
            ? 'rgba(255, 255, 255, 0.22)'
            : 'rgba(255, 255, 255, 0.35)',
          backdropFilter: isDocked ? 'blur(18px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isDocked ? 'blur(18px) saturate(180%)' : 'none',
          border: '1px solid rgba(255, 255, 255, 0.45)',
          borderRadius: '14px',
          boxShadow: isDocked
            ? '0 4px 20px rgba(0, 0, 0, 0.1)'
            : '0 4px 15px rgba(0,0,0,0.08)',
          transition: 'background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s',
        }}
      >
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
      </div>
    </motion.div>
  );
};
