import { useEffect, useState } from 'react';
import type { Project } from '../types';
import './project.css';
import fuji2 from '../../assets/inspo/metro.jpeg';

interface ProjectsMetroProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsMetro = ({
  projects,
  onSelectProject,
}: ProjectsMetroProps) => {
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    if (projects.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveProject((current) => {
        return (current + 1) % projects.length;
      });
    }, 26000);

    return () => {
      window.clearInterval(interval);
    };
  }, [projects.length]);

  if (!projects.length) {
    return null;
  }

  const openProject = (project: Project) => {
    if (project.demoUrl) {
      window.open(
        project.demoUrl,
        '_blank',
        'noopener,noreferrer'
      );
      return;
    }

    onSelectProject(project);
  };

  const renderPanel = (
    project: Project,
    key: string
  ) => {
    const [iframeError, setIframeError] = useState(false);

    return (
      <div
        className="projects-train-panel"
        key={key}
      >
        <div className="projects-metro-stage">

          {/* =====================================================
              PROJECT WINDOW
              ===================================================== */}

          <div className="projects-video-window">
            <button
              type="button"
              className="projects-video-click"
              onClick={() => openProject(project)}
              aria-label={`Open ${project.title} — ${project.demoUrl ? 'live site' : 'case study'}`}
              title={project.demoUrl ? `Open ${project.title}` : project.title}
            >
              {project.demoUrl && !iframeError ? (
                <iframe
                  key={project.demoUrl}
                  src={project.demoUrl}
                  title={`${project.title} live preview`}
                  className="projects-video-media projects-project-preview"
                  loading="eager"
                  scrolling="no"
                  allow="fullscreen"
                  tabIndex={-1}
                  onError={() => setIframeError(true)}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.alt || project.title}
                  className="projects-video-media"
                  loading="eager"
                />
              )}

              <span
                className="projects-video-glass"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* =====================================================
              METRO FRAME
              ===================================================== */}

          <img
            src={fuji2}
            alt=""
            className="projects-train-image"
          />

          {/* =====================================================
              POLES
              ===================================================== */}

          <span
            className="projects-pole projects-pole--left"
            aria-hidden="true"
          />

          <span
            className="projects-pole projects-pole--right"
            aria-hidden="true"
          />

        </div>
      </div>
    );
  };

  const projectPanels = projects.map(
    (project, index) =>
      renderPanel(
        project,
        `project-panel-${project.id}-${index}`
      )
  );

  const duplicateProjectPanels = projects.map(
    (project, index) =>
      renderPanel(
        project,
        `project-panel-duplicate-${project.id}-${index}`
      )
  );

  return (
    <section
      id="projects"
      className="projects-section"
    >

      {/* =====================================================
          MOVING METRO
          ===================================================== */}

      <div
        className="projects-train-track"
        aria-hidden="true"
      >
        {projectPanels}

        {duplicateProjectPanels}
      </div>

      {/* =====================================================
          PROJECT INDICATORS
          ===================================================== */}

      <div
        className="projects-indicators"
        aria-hidden="true"
      >
        {projects.map((project, index) => (
          <span
            key={project.id}
            className={`projects-indicator ${
              index === activeProject
                ? 'projects-indicator--active'
                : ''
            }`}
          />
        ))}
      </div>

      {/* =====================================================
          SECTION TITLE
          ===================================================== */}

      <div className="projects-title">
        <span className="projects-eyebrow">
          PROJECTS
        </span>

        <h2>Projects.</h2>

        <p>
          A moving collection of things I have built.
        </p>
      </div>

    </section>
  );
};

export default ProjectsMetro;