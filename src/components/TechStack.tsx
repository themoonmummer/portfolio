import React, { useState } from 'react';
import { TECH_STACK } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const rotateStack = () => {
    setActiveIndex((prev) => (prev + 1) % TECH_STACK.length);
  };

  const currentTech = TECH_STACK[activeIndex];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#fbf8fb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
          
          {/* Left Description Column */}
          <div className="space-y-6">
            <span className="text-[#95406f] font-body text-xs font-bold uppercase tracking-widest block">
              The Toolkit
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1b1b1d]">
              {currentTech.name}
            </h2>

            <p className="font-body text-base sm:text-lg text-[#524249] max-w-lg leading-relaxed">
              {currentTech.description}
            </p>

            {/* Proficiency Meter */}
            <div className="space-y-2 max-w-md pt-2">
              <div className="flex justify-between font-body text-xs font-bold text-[#524249] uppercase tracking-wider">
                <span>{currentTech.role}</span>
                <span>{currentTech.proficiency}% Mastery</span>
              </div>
              <div className="w-full h-2.5 bg-[#e4e2e4] rounded-full overflow-hidden p-0.5">
                <div 
                  className="h-full sunset-glow rounded-full transition-all duration-500"
                  style={{ width: `${currentTech.proficiency}%` }}
                ></div>
              </div>
            </div>

            {/* Cycle Trigger Button */}
            <div className="pt-6">
              <button
                onClick={rotateStack}
                className="group inline-flex items-center gap-3 text-[#95406f] hover:text-[#68548d] font-body text-base font-bold cursor-pointer transition-colors"
              >
                <span>Cycle Stack</span>
                <span className="material-symbols-outlined transition-transform duration-500 group-hover:rotate-180 text-xl">
                  sync
                </span>
              </button>
            </div>
          </div>

          {/* Right 3D Perspective Stack Showcase */}
          <div className="relative h-[380px] sm:h-[420px] perspective-container flex items-center justify-center pt-4">
            {TECH_STACK.map((tech, index) => {
              const isActive = index === activeIndex;
              const isNext = index === (activeIndex + 1) % TECH_STACK.length;

              return (
                <div
                  key={tech.id}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute w-64 sm:w-72 h-80 sm:h-96 glass-panel rounded-[32px] sm:rounded-[40px] p-8 flex flex-col justify-between cursor-pointer transition-all duration-700 ease-out border border-white/80 shadow-2xl ${
                    isActive 
                      ? 'tech-card-active scale-100 opacity-100 ring-2 ring-[#ff99cc]/50' 
                      : isNext 
                        ? 'tech-card-faded scale-90 opacity-60 hover:opacity-85' 
                        : 'opacity-0 scale-75 pointer-events-none'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${tech.highlightColor} flex items-center justify-center shadow-lg text-white`}>
                    <span className="material-symbols-outlined text-3xl font-bold">
                      {tech.iconName}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-body uppercase tracking-widest text-[#95406f] font-semibold">
                      {tech.category}
                    </span>
                    <h4 className="font-display text-2xl font-bold text-[#1b1b1d]">
                      {tech.name.split(' ')[0]}
                    </h4>
                    <p className="text-xs font-body text-[#524249]">
                      {tech.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Atmospheric Background Glow Blob */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-[#ffafd5]/20 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};
