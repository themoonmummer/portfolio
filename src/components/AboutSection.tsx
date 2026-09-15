import React from 'react';
import { ABOUT_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#f5f3f5]" id="about">
      {/* Decorative Background Park Icon Accent */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <span className="material-symbols-outlined text-[240px] sm:text-[320px] text-[#95406f]">
          park
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 sm:gap-20 items-center">
        
        {/* Left Column: Portrait & Floating Metric */}
        <div className="relative flex justify-center">
          <div className="relative z-10 w-72 sm:w-96 aspect-square rounded-[50%_50%_40%_60%] overflow-hidden border-[10px] sm:border-[12px] border-white shadow-2xl bg-white/40">
            <img
              src={ABOUT_DATA.portraitImg}
              alt="Designer sitting peacefully in a Japanese garden surrounded by cherry blossoms with Mount Fuji in the background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Glow Blob */}
          <div className="absolute -top-6 -left-6 w-28 h-28 sunset-glow rounded-full blur-2xl opacity-50 animate-pulse pointer-events-none"></div>

          {/* Floating Metric Badge */}
          <div className="absolute -bottom-6 -right-2 sm:bottom-0 sm:right-4 p-6 sm:p-8 glass-panel rounded-[28px] sm:rounded-[36px] z-20 text-center shadow-xl border border-white/80 backdrop-blur-xl">
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#95406f]">
              {ABOUT_DATA.yearsCrafting}
            </p>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#524249]">
              Years Crafting
            </p>
          </div>
        </div>

        {/* Right Column: Narrative & Philosophy */}
        <div className="space-y-8">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1b1b1d] leading-tight">
            {ABOUT_DATA.title} <span className="italic text-[#95406f]">{ABOUT_DATA.highlightTitle}</span>
          </h2>

          <div className="space-y-4 font-body text-base sm:text-lg text-[#524249] leading-relaxed">
            <p>{ABOUT_DATA.p1}</p>
            <p>{ABOUT_DATA.p2}</p>
          </div>

          {/* Philosophy & Location Cards */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {ABOUT_DATA.philosophies.map((item, idx) => (
              <div key={idx} className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/80 space-y-1">
                <span className="material-symbols-outlined text-[#95406f] text-2xl mb-1">
                  {item.icon}
                </span>
                <h4 className="font-display font-bold text-[#1b1b1d] text-base">
                  {item.title}
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#524249]">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
