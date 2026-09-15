import type { Project } from '../data/projects';

interface ProjectWindowProps {
  project: Project;
}

export const ProjectWindow = ({ project }: ProjectWindowProps) => {
  const inner = (
    <div className="flex-shrink-0 w-[280px] sm:w-[380px] lg:w-[460px] rounded-[2.5rem] p-[12px] sm:p-[14px] relative" style={{ backgroundColor: '#3a3330' }}>
      <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-black">
        {project.videoSrc ? (
          <video
            src={project.videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={project.posterSrc}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#0a0a14]">
            <span className="text-[#6b6275] text-lg sm:text-xl lg:text-2xl font-semibold text-center px-6" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
              {project.title}
            </span>
          </div>
        )}

        {/* Glass highlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)',
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 60px rgba(0,0,0,0.4)',
          }}
        />
      </div>

      {/* Caption strip */}
      <div className="px-4 pt-3 pb-1">
        <h3 className="text-[#e0dcd8] text-sm sm:text-base font-bold" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          {project.title}
        </h3>
        <p className="text-[#8a8280] text-xs sm:text-sm leading-snug mt-0.5">
          {project.description}
        </p>
      </div>
    </div>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-[2.5rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe68c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1228]"
      >
        {inner}
      </a>
    );
  }

  return inner;
};

export default ProjectWindow;
