import { useRef } from 'react';
import type { Project } from '../types';

interface ProjectWindowProps {
  project: Project;
  onSelectProject?: (project: Project) => void;
}

/**
 * A single train-carriage window.
 * The media area displays project image.
 * Clicking the window opens project.demoUrl (your Vercel link) in a new tab.
 * If there is no demoUrl, it falls back to the case-study modal.
 */
export const ProjectWindow = ({ project, onSelectProject }: ProjectWindowProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const open = () => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    } else {
      onSelectProject?.(project);
    }
  };

  return (
    <div
      className="flex-shrink-0 w-[300px] sm:w-[420px] lg:w-[520px] px-4 sm:px-6 lg:px-8 select-none"
      data-train-item=""
    >
      {/* Window frame — outer metal casing */}
      <div
        role="link"
        tabIndex={0}
        aria-label={`Open ${project.title}${project.demoUrl ? ' live site' : ' case study'}`}
        onClick={open}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open();
          }
        }}
        className="group relative cursor-pointer rounded-[2.25rem] p-[10px] sm:p-[13px] outline-none transition-transform duration-500 focus-visible:ring-2 focus-visible:ring-[#ffe68c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#2f4a3f] hover:-translate_y-1"
        style={{
          background: 'linear-gradient(160deg, #d9d3c4 0%, #b3ab99 45%, #8e8878 100%)',
          boxShadow:
            '0 18px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -2px 4px rgba(0,0,0,0.3)',
        }}
      >
        {/* Rivets */}
        {[
          'top-2 left-3',
          'top-2 right-3',
          'bottom-2 left-3',
          'bottom-2 right-3',
        ].map((pos) => (
          <span
            key={pos}
            className={`absolute ${pos} h-1.5 w-1.5 rounded-full`}
            style={{
              background: 'radial-gradient(circle at 30% 30%, #fff8e6, #7a7466)',
              opacity: 0.8,
            }}
          />
        ))}

        {/* Inner lip */}
        <div
          className="relative rounded-[1.65rem] p-[3px]"
          style={{ background: 'linear-gradient(180deg, #6f6a5c, #3d3a33)' }}
        >
          {/* Glass area — IMAGE GOES HERE */}
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-black">
            {project.image ? (
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#16233f] to-[#070d1c]">
                <span
                  className="px-6 text-center text-lg font-semibold text-[#ffe68c]/80 sm:text-xl"
                  style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                >
                  {project.title}
                </span>
                <span className="text-xs tracking-[0.25em] text-[#8ea0c4] uppercase">
                  image coming soon
                </span>
              </div>
            )}

            {/* Moving-scenery tint so empty windows still read as "outside" */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(120,160,220,0.10) 0%, transparent 45%, rgba(10,18,40,0.28) 100%)',
              }}
            />

            {/* Glass reflection */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(118deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 26%, transparent 48%)',
              }}
            />

            {/* Vignette */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ boxShadow: 'inset 0 0 70px rgba(0,0,0,0.55)' }}
            />

            {/* Hover hint */}
            <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100 group-focus-visible:opacity-100">
              <span
                className="rounded-full px-4 py-1.5 text-[11px] tracking-[0.18em] uppercase"
                style={{
                  background: 'rgba(8,14,32,0.72)',
                  color: '#ffe68c',
                  border: '1px solid rgba(255,230,140,0.35)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                {project.demoUrl ? 'Visit live site' : 'View case study'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Caption on the carriage wall, under the window */}
      <div className="px-2 pt-4">
        <p
          className="text-[10px] uppercase tracking-[0.28em]"
          style={{ color: 'rgba(255,230,140,0.55)' }}
        >
          {project.category}
        </p>
        <h3
          className="mt-1 text-base font-bold sm:text-lg"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            color: '#f2ece0',
          }}
        >
          {project.title}
        </h3>
        <p
          className="mt-1 text-xs leading-snug sm:text-sm"
          style={{ color: 'rgba(242,236,224,0.6)' }}
        >
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectWindow;
