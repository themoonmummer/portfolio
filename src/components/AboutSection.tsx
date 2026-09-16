import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';

/* ------------------------------------------------------------------ *
 *  EDIT YOUR CONTENT HERE
 * ------------------------------------------------------------------ */
type PanelId = 'about' | 'education' | 'experience';

interface Panel {
  id: PanelId;
  index: string;     // number shown on the cabin + card
  label: string;     // nav label
  kicker: string;    // small line above the title
  title: string;     // big serif title
  body: string[];    // paragraphs / bullet lines — add your own text
}

const PANELS: Panel[] = [
  {
    id: 'about',
    index: '01',
    label: 'About Me',
    kicker: 'The person behind the code',
    title: 'About Me',
    body: [
      'Write your intro here.',
      'A second paragraph if you want one.',
    ],
  },
  {
    id: 'education',
    index: '02',
    label: 'Education',
    kicker: 'What I studied',
    title: 'Education',
    body: [
      'Degree — add here.',
      'Institution — add here.',
      'Timeline — add here.',
    ],
  },
  {
    id: 'experience',
    index: '03',
    label: 'Experience',
    kicker: 'What I have built',
    title: 'Experience',
    body: [
      'Role — add here.',
      'Projects — add here.',
      'Skills — add here.',
    ],
  },
];

/* ------------------------------------------------------------------ *
 *  Palette — Japanese night festival
 * ------------------------------------------------------------------ */
const INK = '#070d1c';
const NIGHT = '#0a1228';
const GOLD = '#ffe68c';
const GOLD_SOFT = 'rgba(255, 230, 140, 0.62)';
const SAKURA = '#f5a8c0';
const CREAM = '#f3ece0';

const SPIN_SECONDS = 70;   // ferris wheel revolution time — higher is slower
const AUTO_ADVANCE_MS = 7000;

export const AboutSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25 });

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  // Auto-advance while the section is on screen
  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % PANELS.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(t);
  }, [isInView, prefersReducedMotion]);

  const select = useCallback((i: number) => setActive(i), []);

  const panel = PANELS[active];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: `radial-gradient(120% 90% at 15% 20%, #142145 0%, ${NIGHT} 45%, ${INK} 100%)`,
      }}
    >
      {/* Stars */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.r,
              height: s.r,
              background: '#fff6d8',
              opacity: s.o,
              animation: `about-twinkle ${s.d}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Drifting sakura petals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {PETALS.map((p, i) => (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${p.x}%`,
              top: '-6%',
              width: p.s,
              height: p.s,
              background: SAKURA,
              opacity: 0.35,
              borderRadius: '150% 0 150% 0',
              animation: `about-petal ${p.d}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* ---------------- Ferris wheel ---------------- */}
      <div
        className="pointer-events-none absolute top-1/2 right-[-42%] w-[130vw] max-w-[1050px] -translate-y-1/2 sm:right-[-30%] lg:right-[-18%]"
        aria-hidden="true"
      >
        <div
          className="relative aspect-square w-full"
          style={{
            animation: prefersReducedMotion
              ? undefined
              : `about-wheel-spin ${SPIN_SECONDS}s linear infinite`,
          }}
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            {/* rims */}
            <circle cx="50" cy="50" r="44" fill="none" stroke={GOLD} strokeWidth="0.5" opacity="0.55" />
            <circle cx="50" cy="50" r="41" fill="none" stroke={GOLD} strokeWidth="0.22" opacity="0.35" />
            <circle cx="50" cy="50" r="24" fill="none" stroke={SAKURA} strokeWidth="0.18" opacity="0.3" />

            {/* spokes */}
            {Array.from({ length: 18 }).map((_, i) => {
              const a = (i * 20 * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={50}
                  y1={50}
                  x2={50 + 44 * Math.cos(a)}
                  y2={50 + 44 * Math.sin(a)}
                  stroke={GOLD}
                  strokeWidth="0.16"
                  opacity="0.28"
                />
              );
            })}

            {/* lantern bulbs on the rim */}
            {Array.from({ length: 36 }).map((_, i) => {
              const a = (i * 10 * Math.PI) / 180;
              return (
                <circle
                  key={i}
                  cx={50 + 44 * Math.cos(a)}
                  cy={50 + 44 * Math.sin(a)}
                  r="0.55"
                  fill={i % 3 === 0 ? SAKURA : GOLD}
                  opacity="0.75"
                  style={{ animation: `about-twinkle ${2 + (i % 5) * 0.4}s ease-in-out ${i * 0.08}s infinite` }}
                />
              );
            })}

            {/* hub */}
            <circle cx="50" cy="50" r="3.2" fill={NIGHT} stroke={GOLD} strokeWidth="0.5" />
            <circle cx="50" cy="50" r="1.2" fill={GOLD} opacity="0.9" />
          </svg>

          {/* Gondolas — ride the rim, stay upright */}
          {PANELS.map((p, i) => {
            const angle = ((i * 120 - 90) * Math.PI) / 180;
            const left = 50 + 44 * Math.cos(angle);
            const top = 50 + 44 * Math.sin(angle);
            const isActive = i === active;
            return (
              <div
                key={p.id}
                className="absolute"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  style={{
                    animation: prefersReducedMotion
                      ? undefined
                      : `about-wheel-spin-reverse ${SPIN_SECONDS}s linear infinite`,
                  }}
                >
                  <div
                    className="pointer-events-auto flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl text-center transition-all duration-500 sm:h-20 sm:w-20"
                    onClick={() => select(i)}
                    style={{
                      background: isActive
                        ? 'linear-gradient(160deg, rgba(255,230,140,0.9), rgba(245,168,192,0.75))'
                        : 'rgba(10,18,40,0.72)',
                      border: `1px solid ${isActive ? GOLD : 'rgba(255,230,140,0.35)'}`,
                      boxShadow: isActive
                        ? '0 0 34px rgba(255,230,140,0.45)'
                        : '0 6px 18px rgba(0,0,0,0.45)',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    <span
                      className="text-lg font-bold sm:text-xl"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        color: isActive ? INK : GOLD_SOFT,
                      }}
                    >
                      {p.index}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------------- Content ---------------- */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center gap-10 px-6 py-24 sm:px-10 md:px-16 lg:gap-14">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em]" style={{ color: GOLD_SOFT }}>
            Ride the wheel
          </p>
          <h2
            className="mt-3 text-4xl font-bold italic sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              color: GOLD,
              textShadow: '0 2px 24px rgba(0,0,0,0.45)',
            }}
          >
            About
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
          {/* Nav list */}
          <nav className="flex shrink-0 flex-row gap-5 lg:w-48 lg:flex-col lg:gap-4">
            {PANELS.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.id}
                  onClick={() => select(i)}
                  className="group flex items-center gap-3 text-left transition-colors duration-300"
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span
                    className="text-[11px] tabular-nums transition-opacity"
                    style={{ color: GOLD, opacity: isActive ? 1 : 0.45 }}
                  >
                    {p.index}
                  </span>
                  <span
                    className="text-sm sm:text-base"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      color: isActive ? CREAM : 'rgba(243,236,224,0.45)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {p.label}
                  </span>
                  <span
                    className="hidden h-px transition-all duration-500 lg:block"
                    style={{
                      width: isActive ? 40 : 14,
                      background: isActive ? GOLD : 'rgba(255,230,140,0.3)',
                    }}
                  />
                </button>
              );
            })}
          </nav>

          {/* Card */}
          <div className="relative w-full max-w-xl">
            <AnimatePresence mode="wait">
              <motion.article
                key={panel.id}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-3xl p-7 sm:p-10"
                style={{
                  background: 'rgba(8, 14, 32, 0.55)',
                  border: '1px solid rgba(255, 230, 140, 0.22)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
                }}
              >
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: GOLD_SOFT }}>
                  {panel.kicker}
                </p>

                <h3
                  className="mt-3 text-3xl italic sm:text-4xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: GOLD,
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                  }}
                >
                  {panel.title}
                </h3>

                <div className="mt-6 space-y-4">
                  {panel.body.map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 + i * 0.08, duration: 0.4 }}
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        color: 'rgba(243, 236, 224, 0.82)',
                        fontSize: 'clamp(1rem, 1.4vw, 1.12rem)',
                        lineHeight: 1.8,
                        letterSpacing: '0.012em',
                      }}
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>

                <span
                  className="pointer-events-none absolute right-6 bottom-4 text-5xl tabular-nums sm:text-6xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: 'rgba(255, 230, 140, 0.16)',
                    fontWeight: 600,
                  }}
                >
                  {panel.index}
                  <span className="text-lg">/0{PANELS.length}</span>
                </span>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes about-wheel-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes about-wheel-spin-reverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes about-twinkle {
          0%, 100% { opacity: 0.25; }
          50%      { opacity: 1; }
        }
        @keyframes about-petal {
          0%   { transform: translate3d(0, -10vh, 0) rotate(0deg); opacity: 0; }
          10%  { opacity: 0.35; }
          90%  { opacity: 0.35; }
          100% { transform: translate3d(60px, 112vh, 0) rotate(320deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          [id="about"] * { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

const STARS = Array.from({ length: 46 }).map((_, i) => ({
  x: (i * 37) % 100,
  y: (i * 53) % 100,
  r: i % 5 === 0 ? 2 : 1.2,
  o: 0.3 + ((i % 4) * 0.15),
  d: 2.5 + (i % 5) * 0.7,
  delay: (i % 7) * 0.4,
}));

const PETALS = Array.from({ length: 10 }).map((_, i) => ({
  x: (i * 11 + 5) % 100,
  s: 7 + (i % 3) * 3,
  d: 12 + (i % 4) * 4,
  delay: i * 1.6,
}));

export default AboutSection;
