import { ProjectWindow } from './ProjectWindow';
import type { Project } from '../types';

interface ProjectsMetroProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

/**
 * Projects shown as windows in a moving train carriage.
 * The whole carriage drifts slowly to the left and loops forever:
 * the list is rendered twice and the track animates to translateX(-50%),
 * so the wrap point is invisible.
 *
 * Speed: change --train-duration below (higher = slower).
 */
export const ProjectsMetro = ({ projects, onSelectProject }: ProjectsMetroProps) => {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#0a1228' }}
    >
      {/* Heading */}
      <div className="px-5 pt-24 pb-10 sm:px-8 sm:pt-32 md:px-12 lg:px-16">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#ffe68c]/50">
          Now departing
        </p>
        <h2
          className="mt-3 text-4xl font-bold italic sm:text-5xl md:text-6xl"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            color: 'rgba(255, 230, 140, 0.95)',
            letterSpacing: '0.01em',
          }}
        >
          Projects
        </h2>
        <p
          className="mt-3 max-w-md text-sm sm:text-base"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(255,230,140,0.6)' }}
        >
          Every window is a live project. Tap one to open it in a new tab.
        </p>
      </div>

      {/* Carriage */}
      <div
        className="relative"
        style={{ background: 'linear-gradient(180deg, #24382f 0%, #2f4a3f 40%, #1d2e26 100%)' }}
      >
        {/* Luggage rack line along the top of the carriage */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,230,140,0.25), transparent)' }}
        />

        {/* Moving window track */}
        <div className="overflow-hidden py-12 sm:py-16">
          <div
            data-train-track=""
            className="flex w-max items-start"
            style={{
              animation: 'projects-train-scroll var(--train-duration, 90s) linear infinite',
              willChange: 'transform',
            }}
          >
            {projects.map((project) => (
              <ProjectWindow
                key={project.id}
                project={project}
                onSelectProject={onSelectProject}
              />
            ))}
            {projects.map((project) => (
              <ProjectWindow
                key={`loop-${project.id}`}
                project={project}
                onSelectProject={onSelectProject}
              />
            ))}
          </div>
        </div>

        {/* Window sill / ledge across the carriage (stays still) */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, #1a2a23 30%, #14211b 100%)',
            borderTop: '2px solid rgba(217,211,196,0.25)',
          }}
        />

        {/* Edge fades so windows enter and leave softly */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32"
          style={{ background: 'linear-gradient(90deg, #1d2e26 0%, transparent 100%)' }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32"
          style={{ background: 'linear-gradient(270deg, #1d2e26 0%, transparent 100%)' }}
        />
      </div>

      <style>{`
        @keyframes projects-train-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          [data-train-track] {
            animation: none !important;
            width: 100%;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsMetro;
