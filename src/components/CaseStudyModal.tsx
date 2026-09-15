import React from 'react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xl animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel-heavy rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-2xl border border-white/90 space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/60 hover:bg-white text-[#1b1b1d] hover:text-[#95406f] transition-all cursor-pointer shadow-sm"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-12">
          <span className="text-[#95406f] font-body text-xs font-bold uppercase tracking-widest">
            Case Study • {project.category}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1b1b1d]">
            {project.title}
          </h2>
          <p className="font-body text-base text-[#524249]">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Project Image */}
        <div className="rounded-2xl overflow-hidden aspect-video border-4 border-white shadow-lg">
          <img 
            src={project.image} 
            alt={project.alt} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4">
          {project.caseStudy.metrics.map((metric, idx) => (
            <div key={idx} className="glass-panel p-4 sm:p-5 rounded-2xl text-center border border-white/60">
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#95406f]">
                {metric.value}
              </p>
              <p className="font-body text-xs font-semibold uppercase tracking-wider text-[#524249] mt-1">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Details Overview */}
        <div className="grid sm:grid-cols-2 gap-6 pt-2">
          <div className="glass-panel p-6 rounded-2xl space-y-2">
            <h4 className="font-display font-bold text-[#1b1b1d] text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-[#95406f]">warning</span>
              The Challenge
            </h4>
            <p className="font-body text-sm text-[#524249] leading-relaxed">
              {project.caseStudy.challenge}
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl space-y-2">
            <h4 className="font-display font-bold text-[#1b1b1d] text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-[#95406f]">lightbulb</span>
              The Solution
            </h4>
            <p className="font-body text-sm text-[#524249] leading-relaxed">
              {project.caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack Used */}
        <div className="space-y-3 pt-2">
          <h4 className="font-display font-bold text-[#1b1b1d] text-base">
            Technical Stack Architecture
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.caseStudy.techUsed.map((tech, idx) => (
              <span
                key={idx}
                className="bg-[#ffd8e8] text-[#3d0027] font-body text-xs font-bold px-3 py-1.5 rounded-full border border-[#ffafd5]/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex justify-end gap-4 pt-4 border-t border-white/60">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-full border border-[#857279]/40 bg-white/50 text-[#1b1b1d] hover:bg-white font-body text-sm font-bold transition-all cursor-pointer"
          >
            Close Overview
          </button>
          <a
            href="#contact"
            onClick={() => {
              onClose();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="sunset-glow text-white px-8 py-3 rounded-full font-body text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
          >
            Inquire About Similar Build
          </a>
        </div>

      </div>
    </div>
  );
};
