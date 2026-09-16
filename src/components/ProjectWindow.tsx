import type { Project } from '../types';

interface ProjectWindowProps {
  project: Project;
  onSelectProject?: (project: Project) => void;
}

export const ProjectWindow = ({ project, onSelectProject }: ProjectWindowProps) => {
  const inner = (
    <div
      className="flex-shrink-0 w-[280px] sm:w-[380px] lg:w-[460px] rounded-[2.5rem] p-[12px] sm:p-[14px] relative cursor-pointer"
      style={{ backgroundColor: '#3a3330' }}
      onClick={() => onSelectProject?.(project)}
    >
      <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-black">
        {project.image ? (
          <img
            src={project.image}
            alt={project.alt}
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

  return inner;
};

export default ProjectWindow;
