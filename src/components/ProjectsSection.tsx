import { projects } from '../data/projects';
import { ProjectWindow } from './ProjectWindow';

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#0a1228' }}
    >
      <div className="pt-24 sm:pt-32 pb-8 sm:pb-12 px-5 sm:px-8 md:px-12 lg:px-16">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold italic mb-8 sm:mb-12"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            color: 'rgba(255, 230, 140, 0.95)',
            letterSpacing: '0.01em',
          }}
        >
          Projects
        </h2>
      </div>

      {/* Marquee strip */}
      <div className="relative">
        {/* Fade masks */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            maskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        />

        <div className="overflow-hidden py-8 sm:py-12">
          <div
            data-train-track=""
            className="flex gap-8 w-max"
            style={{
              animation:
                'projects-train-scroll var(--train-duration, 40s) linear infinite, projects-train-bob 6s ease-in-out infinite',
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
          >
            {projects.map((project) => (
              <ProjectWindow key={project.id} project={project} />
            ))}
            {projects.map((project) => (
              <ProjectWindow key={`dup-${project.id}`} project={project} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes projects-train-scroll {
          0% {
            transform: translateX(0) translateZ(0);
          }
          100% {
            transform: translateX(-50%) translateZ(0);
          }
        }

        @keyframes projects-train-bob {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [data-train-track] {
            animation: none !important;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
