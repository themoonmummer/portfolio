import { ProjectWindow } from './ProjectWindow';
import type { Project } from '../types';

interface ProjectsMetroProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

/**
 * Projects shown as windows in a moving train carriage.
 *
 * The train image moves from LEFT -> RIGHT continuously.
 * Soft masking, opacity, and blur around the edges help
 * the train blend naturally into the project section.
 */
export const ProjectsMetro = ({
  projects,
  onSelectProject,
}: ProjectsMetroProps) => {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#0a1228' }}
    >

      {/* =====================================================
          MOVING TRAIN
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          zIndex: 0,
        }}
      >

        {/* Main moving train */}

        <div
          className="projects-train-image"
          style={{
            backgroundImage: `url("../../assets/inspo/project1.jpeg")`,
          }}
        />

        {/* Soft atmospheric layer */}

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, #0a1228 0%, rgba(10,18,40,0.25) 12%, transparent 28%, transparent 72%, rgba(10,18,40,0.25) 88%, #0a1228 100%)',
          }}
        />

        {/* Slight dark glass atmosphere */}

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,18,40,0.45) 0%, rgba(10,18,40,0.05) 35%, rgba(10,18,40,0.35) 100%)',
          }}
        />

      </div>


      {/* =====================================================
          HEADING
      ===================================================== */}

      <div
        className="relative px-5 pt-24 pb-10 sm:px-8 sm:pt-32 md:px-12 lg:px-16"
        style={{ zIndex: 5 }}
      >
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
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: 'rgba(255,230,140,0.6)',
          }}
        >
          Every window is a live project. Tap one to open it in a new tab.
        </p>
      </div>


      {/* =====================================================
          TRAIN / CARRIAGE
      ===================================================== */}

      <div
        className="relative"
        style={{
          zIndex: 3,
          background:
            'linear-gradient(180deg, rgba(36,56,47,0.88) 0%, rgba(47,74,63,0.94) 40%, rgba(29,46,38,0.96) 100%)',
        }}
      >

        {/* Luggage rack line */}

        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[3px]"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,230,140,0.25), transparent)',
          }}
        />


        {/* =================================================
            MOVING WINDOWS
        ================================================= */}

        <div className="overflow-hidden py-12 sm:py-16">

          <div
            data-train-track=""
            className="flex w-max items-start"
            style={{
              animation:
                'projects-train-scroll var(--train-duration, 90s) linear infinite',
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


        {/* =================================================
            WINDOW SILL
        ================================================= */}

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, #1a2a23 30%, #14211b 100%)',
            borderTop: '2px solid rgba(217,211,196,0.25)',
          }}
        />


        {/* =================================================
            LEFT EDGE BLEND
        ================================================= */}

        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-40"
          style={{
            zIndex: 10,
            background:
              'linear-gradient(90deg, #1d2e26 0%, rgba(29,46,38,0.85) 20%, rgba(29,46,38,0.3) 60%, transparent 100%)',
          }}
        />


        {/* =================================================
            RIGHT EDGE BLEND
        ================================================= */}

        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-40"
          style={{
            zIndex: 10,
            background:
              'linear-gradient(270deg, #1d2e26 0%, rgba(29,46,38,0.85) 20%, rgba(29,46,38,0.3) 60%, transparent 100%)',
          }}
        />

      </div>


      {/* =====================================================
          TRAIN IMAGE ANIMATION
      ===================================================== */}

      <style>{`

        .projects-train-image {
          position: absolute;

          top: 50%;

          left: 0;

          width: min(1500px, 115vw);

          height: min(850px, 70vh);

          transform: translateY(-50%);

          background-size: contain;

          background-position: center;

          background-repeat: no-repeat;

          opacity: 0.72;

          filter:
            blur(0.6px)
            saturate(0.88)
            brightness(0.82);

          /*
            Soft masking on all four sides.
            This is what prevents the image from looking
            like a rectangular PNG/JPEG pasted onto the page.
          */

          -webkit-mask-image:
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(0,0,0,0.35) 7%,
              #000 16%,
              #000 84%,
              rgba(0,0,0,0.35) 93%,
              transparent 100%
            );

          mask-image:
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(0,0,0,0.35) 7%,
              #000 16%,
              #000 84%,
              rgba(0,0,0,0.35) 93%,
              transparent 100%
            );

          animation:
            projects-train-image-move
            24s
            linear
            infinite;

          will-change: transform;

          pointer-events: none;
        }


        /*
          Train moves LEFT -> RIGHT.
          The starting position is slightly outside
          the viewport, then it passes naturally through.
        */

        @keyframes projects-train-image-move {

          0% {
            transform:
              translate3d(-115%, -50%, 0);

            opacity: 0;
          }

          8% {
            opacity: 0.72;
          }

          88% {
            opacity: 0.72;
          }

          100% {
            transform:
              translate3d(115vw, -50%, 0);

            opacity: 0;
          }

        }


        /*
          Existing project-window movement remains untouched.
        */

        @keyframes projects-train-scroll {

          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }

        }


        @media (prefers-reduced-motion: reduce) {

          .projects-train-image {
            animation: none !important;

            transform:
              translate3d(0, -50%, 0);

            opacity: 0.6;
          }

          [data-train-track] {
            animation: none !important;

            width: 100%;

            overflow-x: auto;
          }

        }


        @media (max-width: 850px) {

          .projects-train-image {
            width: 145vw;

            height: 65vh;

            opacity: 0.62;

            animation-duration: 20s;
          }

        }


        @media (max-width: 500px) {

          .projects-train-image {
            width: 175vw;

            height: 58vh;

            opacity: 0.55;

            animation-duration: 18s;
          }

        }

      `}</style>

    </section>
  );
};

export default ProjectsMetro;
