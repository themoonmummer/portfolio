import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import './social.css';

interface PlatformData {
  id: 'linkedin' | 'github';
  name: string;
  handle: string;
  link: string;
  metrics: { label: string; value: string }[];
  bio: string;
}

const PLATFORMS: Record<'linkedin' | 'github', PlatformData> = {
  linkedin: {
    id: 'linkedin',
    name: 'Riya Jha',
    handle: '@riya-jha-267402362',
    link: 'https://www.linkedin.com/in/riya-jha-267402362',
    metrics: [
      { label: 'Connections', value: '184' },
      { label: 'Profile Views', value: '440' },
      { label: 'Post Impressions', value: '150' },
    ],
    bio: 'Connecting across tech and web development. Building high-performance web interfaces and engaging digital experiences.',
  },

  github: {
    id: 'github',
    name: 'themoonmummer',
    handle: '@themoonmummer',
    link: 'https://github.com/themoonmummer',
    metrics: [
      { label: 'Repos', value: '10' },
      { label: 'Followers', value: '2' },
      { label: 'Following', value: '2' },
    ],
    bio: 'Crafting frontend architectures, interactive applications, and modern web software. Open-source contributor and builder.',
  },
};

const PLATFORM_ORDER: Array<'linkedin' | 'github'> = [
  'linkedin',
  'github',
];

const AUTO_SWITCH_TIME = 5000;

export const SocialMedia: React.FC = () => {
  const [activePlatform, setActivePlatform] =
    useState<'linkedin' | 'github'>('linkedin');

  const current = PLATFORMS[activePlatform];
  const activeIndex = PLATFORM_ORDER.indexOf(activePlatform);

  /*
   * Automatically switch between LinkedIn and GitHub.
   * The card fades out and the next card fades in.
   */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePlatform((currentPlatform) => {
        const currentIndex = PLATFORM_ORDER.indexOf(currentPlatform);
        const nextIndex =
          (currentIndex + 1) % PLATFORM_ORDER.length;

        return PLATFORM_ORDER[nextIndex];
      });
    }, AUTO_SWITCH_TIME);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="social-section" id="social">
      {/* Background pattern */}
      <div className="social-bg-pattern" aria-hidden="true" />

      {/* Large faint Japanese watermark */}
      <div className="social-watermark" aria-hidden="true">
        <span>一期一会</span>
      </div>

      {/* Decorative circle — left side */}
      <div
        className="social-left-halo"
        aria-hidden="true"
      />

      {/* Decorative circle — right side */}
      <div
        className="social-lower-halo"
        aria-hidden="true"
      />

      {/* Corner decorations */}
      <div
        className="social-corner social-corner--tr"
        aria-hidden="true"
      />

      <div
        className="social-corner social-corner--bl"
        aria-hidden="true"
      />

      {/* Sakura decoration */}
      <div
        className="social-blossom"
        aria-hidden="true"
      />

      {/* Top indicator */}
      <div className="social-dots" aria-hidden="true">
        {PLATFORM_ORDER.map((id, index) => (
          <span
            key={id}
            className={`social-dot ${
              index === activeIndex
                ? 'social-dot--active'
                : ''
            }`}
          />
        ))}
      </div>

      <div className="social-container">

        {/* =================================================
            LEFT SIDE — CARD
            ================================================= */}
        <div className="social-card-area">

          <div className="social-sideline-text">
            <span>
              Follow my journey • {current.handle}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePlatform}
              className="social-card-wrapper"
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="social-card">

                <div className="social-card-header">
                  <span className="social-card-sub">
                    Platform Overview
                  </span>

                  <h2 className="social-card-name">
                    {current.name}
                  </h2>

                  <span className="social-card-handle">
                    {current.handle}
                  </span>

                  <p className="social-card-bio">
                    {current.bio}
                  </p>
                </div>

                <div className="social-stats-grid">
                  {current.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="social-stat-item"
                    >
                      <span className="social-stat-value">
                        {metric.value}
                      </span>

                      <span className="social-stat-label">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={current.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card-btn"
                  aria-label={`Visit ${current.id} profile`}
                >
                  Visit{' '}
                  {current.id === 'linkedin'
                    ? 'LinkedIn Profile'
                    : 'GitHub Profile'}
                  <span>→</span>
                </a>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =================================================
            RIGHT SIDE — PLATFORM TITLE
            ================================================= */}
        <div className="social-right">

          <div className="social-right-content">

            <span className="social-right-eyebrow">
              CONNECT / BUILD / SHARE
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activePlatform}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="social-platform-title"
              >
                <h2>
                  {activePlatform === 'linkedin'
                    ? 'LINKEDIN.'
                    : 'GITHUB.'}
                </h2>

                <span>
                  {activePlatform === 'linkedin'
                    ? 'つながり'
                    : 'コード'}
                </span>
              </motion.div>
            </AnimatePresence>

            <div className="social-tabs">
              {PLATFORM_ORDER.map((id) => (
                <button
                  key={id}
                  type="button"
                  className={`social-tab ${
                    activePlatform === id
                      ? 'social-tab--active'
                      : ''
                  }`}
                  onClick={() => setActivePlatform(id)}
                >
                  {id.toUpperCase()}
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom-right menu mark */}
      <div
        className="social-menu-icon"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};

export default SocialMedia;
