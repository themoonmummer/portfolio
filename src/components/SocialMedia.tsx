import React, { useState } from 'react';
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

export const SocialMedia: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'linkedin' | 'github'>('linkedin');

  const current = PLATFORMS[activePlatform];
  const platformOrder: Array<'linkedin' | 'github'> = ['linkedin', 'github'];
  const activeIndex = platformOrder.indexOf(activePlatform);

  return (
    <section className="social-section" id="social">
      {/* Background wave pattern — same seigaiha as inspo image */}
      <div className="social-bg-pattern" aria-hidden="true" />

      {/* Faint halo behind top-left copy — replaces faded beige oval in inspo, now in dusky-pink tint */}
      <div className="social-halo" aria-hidden="true" />

      {/* Large faint kanji watermark behind center card — same placement as big grey kanji in inspo */}
      <div className="social-watermark" aria-hidden="true">
        <span>{activePlatform === 'linkedin' ? '繋' : '創'}</span>
      </div>

      {/* Slide indicator dots, top center */}
      <div className="social-dots" aria-hidden="true">
        {platformOrder.map((id, i) => (
          <span
            key={id}
            className={`social-dot ${i === activeIndex ? 'social-dot--active' : ''}`}
          />
        ))}
      </div>

      {/* Corner ornaments — same Greek-key fret as inspo, recoloured to dusky pink */}
      <div className="social-corner social-corner--tr" aria-hidden="true" />
      <div className="social-corner social-corner--bl" aria-hidden="true" />

      {/* Sakura branch flourish — same position as inspo, overlaps bottom of center rectangle */}
      <div className="social-blossom" aria-hidden="true" />

      {/* Decorative menu icon, bottom-right */}
      <div className="social-menu-icon" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="social-container">
        {/* Left Side: Bio & Details */}
        <div className="social-left">
          <div className="social-sideline-text">
            <span>Follow my journey &bull; {current.handle}</span>
          </div>

          <div className="social-info">
            <span className="social-tag">SOCIAL CONNECT</span>
            <h3 className="social-about-title">About</h3>
            <p className="social-bio">{current.bio}</p>
          </div>
        </div>

        {/* Center: Dusky-pink rectangle — 1:1 replacement for the red circle + girl */}
        <div className="social-card-wrapper">
          <div className="social-card">
            <div className="social-card-header">
              <span className="social-card-sub">Platform Overview</span>
              <h2 className="social-card-name">{current.name}</h2>
              <span className="social-card-handle">{current.handle}</span>
            </div>

            {/* Followers / Connections — rendered prominently inside the dusky-pink rectangle */}
            <div className="social-stats-grid">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="social-stat-item">
                  <span className="social-stat-value">{m.value}</span>
                  <span className="social-stat-label">{m.label}</span>
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
              Visit {current.id === 'linkedin' ? 'LinkedIn Profile' : 'GitHub Profile'} &rarr;
            </a>
          </div>
        </div>

        {/* Right Side: Vertical Title & Platform Switcher */}
        <div className="social-right">
          <div className="social-vertical-header">
            <h2 className="social-title-primary">
              {activePlatform === 'linkedin' ? 'LINKEDIN.' : 'GITHUB.'}
            </h2>
            <span className="social-title-kanji">
              {activePlatform === 'linkedin' ? 'つながり' : 'コード'}
            </span>
          </div>

          <div className="social-tabs">
            <button
              type="button"
              className={`social-tab ${activePlatform === 'linkedin' ? 'social-tab--active' : ''}`}
              onClick={() => setActivePlatform('linkedin')}
            >
              LINKEDIN
            </button>
            <button
              type="button"
              className={`social-tab ${activePlatform === 'github' ? 'social-tab--active' : ''}`}
              onClick={() => setActivePlatform('github')}
            >
              GITHUB
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;