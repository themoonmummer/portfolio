import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';

type Category = 'about' | 'education' | 'experience';

interface CabinData {
  id: Category;
  label: string;
  angle: number;
}

const CABINS: CabinData[] = [
  { id: 'about', label: 'About Me', angle: 0 },
  { id: 'education', label: 'Education', angle: 120 },
  { id: 'experience', label: 'Experience', angle: 240 },
];

const CONTENT: Record<Category, { title: string; items: string[] }> = {
  about: {
    title: 'About Me',
    items: [
      "I'm a person with a lot of hobbies, and this is one of them where I want to create and earn through it so I can support my other hobbies and dreams too.",
    ],
  },
  education: {
    title: 'Education',
    items: [
      'Degree: Bachelor of Computer Applications (BCA)',
      'Institution: [Your University Name]',
      'Timeline: 2022 - 2025',
      'Focus: Software Development, Web Technologies, UI/UX',
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      'Role: Frontend Developer & Creative Coder',
      'Projects Built: Neo-Zen Dashboard, Sakura Flow Wellness',
      'Key Skills: React, TypeScript, Tailwind CSS, Framer Motion',
      'Approach: Remote-first, independent contributor',
    ],
  },
};

const WHEEL_SIZE = 340;
const WHEEL_RADIUS = WHEEL_SIZE / 2 - 20;
const CABIN_RADIUS = 22;

const PASTEL_PINK = '#FFD1DC';
const PASTEL_BLUE = '#BDE0FE';
const PASTEL_YELLOW = '#FFFBAC';
const PASTEL_LILAC = '#E2C2F0';

const CABIN_COLORS: Record<Category, string> = {
  about: PASTEL_PINK,
  education: PASTEL_BLUE,
  experience: PASTEL_LILAC,
};

export const AboutSection: React.FC = () => {
  const [activeCabin, setActiveCabin] = useState<Category | null>(null);
  const [hoveredCabin, setHoveredCabin] = useState<Category | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion || !isInView) return;

    let rafId: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isPaused) {
        setRotation((prev) => (prev + (delta * 0.015)) % 360);
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused, prefersReducedMotion, isInView]);

  const getCabinPosition = (baseAngle: number) => {
    const angleRad = ((baseAngle + rotation) * Math.PI) / 180;
    const x = WHEEL_RADIUS + WHEEL_RADIUS * 0.72 * Math.cos(angleRad);
    const y = WHEEL_RADIUS + WHEEL_RADIUS * 0.72 * Math.sin(angleRad);
    return { x, y };
  };

  const handleCabinClick = (id: Category) => {
    setActiveCabin(activeCabin === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full overflow-hidden py-16 sm:py-24"
      style={{
        background: `linear-gradient(160deg, #FFF5F7 0%, #F0E6FF 40%, #E6F0FF 70%, #FFFBAC 100%)`,
      }}
    >
      {/* Cherry blossom decorative accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-lg sm:text-2xl opacity-30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${5 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -5, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          >
            {i % 2 === 0 ? '🌸' : '✿'}
          </motion.div>
        ))}
      </div>

      {/* Section heading */}
      <motion.div
        className="text-center mb-8 sm:mb-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold italic"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            color: '#5a3d6a',
            letterSpacing: '0.01em',
          }}
        >
          Explore My World
        </h2>
        <p
          className="mt-2 text-sm sm:text-base"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: '#7a6088',
          }}
        >
          Spin the wheel or click a cabin to learn more
        </p>
      </motion.div>

      {/* Ferris wheel container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4">
        {/* Wheel */}
        <motion.div
          className="relative flex-shrink-0"
          style={{ width: WHEEL_SIZE, height: WHEEL_SIZE }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Outer ring */}
          <svg
            width={WHEEL_SIZE}
            height={WHEEL_SIZE}
            className="absolute inset-0"
            viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
          >
            {/* Main wheel circle */}
            <circle
              cx={WHEEL_RADIUS}
              cy={WHEEL_RADIUS}
              r={WHEEL_RADIUS * 0.75}
              fill="none"
              stroke={PASTEL_PINK}
              strokeWidth="3"
              opacity="0.6"
            />
            <circle
              cx={WHEEL_RADIUS}
              cy={WHEEL_RADIUS}
              r={WHEEL_RADIUS * 0.72}
              fill="none"
              stroke={PASTEL_LILAC}
              strokeWidth="1.5"
              opacity="0.4"
              strokeDasharray="8 4"
            />

            {/* Spokes */}
            {CABINS.map((cabin) => {
              const angleRad = ((cabin.angle + rotation) * Math.PI) / 180;
              const x2 = WHEEL_RADIUS + WHEEL_RADIUS * 0.72 * Math.cos(angleRad);
              const y2 = WHEEL_RADIUS + WHEEL_RADIUS * 0.72 * Math.sin(angleRad);
              return (
                <line
                  key={cabin.id}
                  x1={WHEEL_RADIUS}
                  y1={WHEEL_RADIUS}
                  x2={x2}
                  y2={y2}
                  stroke={CABIN_COLORS[cabin.id]}
                  strokeWidth="1.5"
                  opacity="0.5"
                />
              );
            })}

            {/* Center hub */}
            <circle
              cx={WHEEL_RADIUS}
              cy={WHEEL_RADIUS}
              r={14}
              fill={PASTEL_YELLOW}
              stroke={PASTEL_PINK}
              strokeWidth="2"
            />
            <circle
              cx={WHEEL_RADIUS}
              cy={WHEEL_RADIUS}
              r={6}
              fill="#fff"
              opacity="0.8"
            />
          </svg>

          {/* Cabins */}
          {CABINS.map((cabin) => {
            const pos = getCabinPosition(cabin.angle);
            const isActive = activeCabin === cabin.id;
            const isHovered = hoveredCabin === cabin.id;

            return (
              <motion.button
                key={cabin.id}
                className="absolute flex items-center justify-center rounded-full cursor-pointer border-2 shadow-lg"
                style={{
                  width: CABIN_RADIUS * 2,
                  height: CABIN_RADIUS * 2,
                  left: pos.x - CABIN_RADIUS,
                  top: pos.y - CABIN_RADIUS,
                  backgroundColor: CABIN_COLORS[cabin.id],
                  borderColor: isActive ? '#5a3d6a' : 'rgba(255,255,255,0.8)',
                  zIndex: isActive || isHovered ? 20 : 10,
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: isActive ? 1.2 : 1,
                  boxShadow: isActive
                    ? '0 0 20px rgba(90,61,106,0.4)'
                    : '0 4px 12px rgba(0,0,0,0.1)',
                }}
                onClick={() => handleCabinClick(cabin.id)}
                onMouseEnter={() => setHoveredCabin(cabin.id)}
                onMouseLeave={() => setHoveredCabin(null)}
                aria-label={cabin.label}
              >
                <span
                  className="text-[10px] sm:text-xs font-bold text-center leading-tight px-1"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    color: '#3d2a50',
                  }}
                >
                  {cabin.label}
                </span>
              </motion.button>
            );
          })}

          {/* Support stand */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-10 rounded-full"
            style={{ backgroundColor: PASTEL_LILAC, opacity: 0.6 }}
          />
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full"
            style={{ backgroundColor: PASTEL_PINK, opacity: 0.4 }}
          />
        </motion.div>

        {/* Content panel */}
        <div className="w-full max-w-lg min-h-[280px]">
          <AnimatePresence mode="wait">
            {activeCabin ? (
              <motion.div
                key={activeCabin}
                className="rounded-3xl p-6 sm:p-8 backdrop-blur-xl border shadow-xl"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.65)',
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 8px 32px rgba(90, 61, 106, 0.12)',
                }}
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: CABIN_COLORS[activeCabin] }}
                  />
                  <h3
                    className="text-xl sm:text-2xl font-bold"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      color: '#3d2a50',
                    }}
                  >
                    {CONTENT[activeCabin].title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {CONTENT[activeCabin].items.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-2 text-sm sm:text-base"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        color: '#4a3560',
                        lineHeight: 1.5,
                      }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: CABIN_COLORS[activeCabin] }} />
                      {item}
                    </motion.div>
                  ))}
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-3 right-3 opacity-20 text-lg">✿</div>
                <div className="absolute bottom-3 left-3 opacity-20 text-lg">🌸</div>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                className="rounded-3xl p-6 sm:p-8 backdrop-blur-xl border flex items-center justify-center min-h-[280px]"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p
                  className="text-center text-sm sm:text-base italic"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: '#8a7098',
                  }}
                >
                  Click a cabin on the wheel to explore
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
