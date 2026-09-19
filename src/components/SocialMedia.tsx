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

      {/* Big Japanese stamp watermark — exact replica of the large faint vertical kanji behind the blossom in the inspo (bottom center) */}
      <div className="social-watermark" aria-hidden="true">
        <span>一期一会</span>
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

      {/* Right-lower faint circular backdrop — exact replica of the pale beige circle behind the III in the inspo's right lower side, now in dark brown tint */}
      <div className="social-lower-halo" aria-hidden="true" />

      {/* Decorative III icon, bottom-right — exact replica of the three vertical bars in the inspo's right lower side, now in dark brown */}
      <div className="social-menu-icon" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="social-container">
        {/* Left Side: now shows the LinkedIn vertical title that was previously on the right (per request: instead of About) */}
        <div className="social-left">
          <div className="social-sideline-text">
            <span>Follow my journey &bull; {current.handle}</span>
          </div>

          <div className="social-vertical-header social-vertical-header--left">
            <h2 className="social-title-primary">
              {activePlatform === 'linkedin' ? 'LINKEDIN.' : 'GITHUB.'}
            </h2>
            <span className="social-title-kanji">
              {activePlatform === 'linkedin' ? 'つながり' : 'コード'}
            </span>
          </div>
        </div>

        {/* Center: Coffee-brown rectangle — 1:1 replacement for the red circle + girl */}
        <div className="social-card-wrapper">
          <div className="social-card">
            <div className="social-card-header">
              <span className="social-card-sub">Platform Overview</span>
              <h2 className="social-card-name">{current.name}</h2>
              <span className="social-card-handle">{current.handle}</span>
              <p className="social-card-bio">{current.bio}</p>
            </div>

            {/* Followers / Connections — rendered prominently inside the coffee-brown rectangle */}
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

        {/* Right Side: Platform Switcher — LinkedIn vertical title now on left, so right keeps only tabs and the big stamp is the watermark behind blossom */}
        <div className="social-right">
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