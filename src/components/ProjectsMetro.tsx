import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectsMetroProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsMetro: React.FC<ProjectsMetroProps> = ({ projects, onSelectProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = projects[currentIndex] || projects[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#f5f3f5] overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="mb-12 sm:mb-16 text-center md:text-left">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1b1b1d] mb-3">
            Departing Stations
          </h2>
          <p className="font-body text-base sm:text-lg text-[#524249]">
            Peek through the window at my latest digital journeys.
          </p>
        </div>

        {/* Metro Interior Simulation Window Frame */}
        <div className="relative rounded-[32px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden metro-window-frame bg-[#f0edef] p-6 sm:p-10 md:p-16 shadow-2xl">
          
          {/* Decorative Metro Overhead Handrail Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3 sm:h-4 bg-[#d7c1c9]/40 rounded-b-full"></div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left Bench Info Box */}
            <div className="md:col-span-5 space-y-6">
              <div className="glass-panel p-6 sm:p-8 rounded-[28px] sm:rounded-[36px] space-y-4">
                <span className="text-[#95406f] font-body text-xs font-bold uppercase tracking-widest block">
                  {currentProject.subtitle}
                </span>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1b1b1d]">
                  {currentProject.title}
                </h3>

                <p className="font-body text-sm sm:text-base text-[#524249] leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {currentProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#d6beff]/60 text-[#5d4a82] px-3 py-1 rounded-full text-xs font-bold font-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous project"
                  className="p-3.5 sm:p-4 rounded-full border border-[#857279]/40 bg-white/50 hover:bg-white text-[#1b1b1d] hover:text-[#95406f] transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <span className="material-symbols-outlined text-xl sm:text-2xl">arrow_back_ios_new</span>
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next project"
                  className="p-3.5 sm:p-4 rounded-full border border-[#857279]/40 bg-white/50 hover:bg-white text-[#1b1b1d] hover:text-[#95406f] transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <span className="material-symbols-outlined text-xl sm:text-2xl">arrow_forward_ios</span>
                </button>
                
                {/* Step indicator */}
                <div className="ml-auto font-body text-xs font-semibold text-[#524249] tracking-widest uppercase bg-white/40 px-3 py-1.5 rounded-full border border-white/60">
                  {currentIndex + 1} / {projects.length}
                </div>
              </div>
            </div>

            {/* Right Metro Window Frame Display */}
            <div className="md:col-span-7">
              <div className="relative aspect-video sm:aspect-[16/10] rounded-[28px] sm:rounded-[40px] overflow-hidden border-4 sm:border-8 border-[#e4e2e4] shadow-2xl group bg-white/40">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity"></div>
                
                <img
                  src={currentProject.image}
                  alt={currentProject.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* CTA Overlay Button */}
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20">
                  <button
                    onClick={() => onSelectProject(currentProject)}
                    className="bg-white/90 backdrop-blur-md text-[#1b1b1d] px-6 py-3.5 rounded-full font-body text-sm font-bold flex items-center gap-2 hover:bg-[#95406f] hover:text-white transition-all shadow-lg cursor-pointer hover:scale-105 active:scale-95"
                  >
                    View Live Case Study
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
