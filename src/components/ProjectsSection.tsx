import { useEffect, useState } from 'react';
import type { Project } from '../types';
import './project.css';

interface ProjectsMetroProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsMetro = ({
  projects,
  onSelectProject,
}: ProjectsMetroProps) => {
  const [activeProject, setActiveProject] = useState(0);

  /*
   * Change project inside the train window.
   * The train itself never changes — only the window content does.
   */
  useEffect(() => {
    if (projects.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % projects.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [projects.length]);

  if (!projects.length) {
    return null;
  }

  const currentProject = projects[activeProject];

  return (
    <section id="projects" className="projects-section">
      {/* =====================================================
          MOVING METRO / TRAIN SCENE
          ===================================================== */}

      <div className="projects-train-track" aria-hidden="true">
        <div className="projects-train-panel">
          <img
            src="/assets/inspo/project1.jpeg"
            alt=""
            className="projects-train-image"
          />
        </div>

        {/* Duplicate image makes the movement seamless */}
        <div className="projects-train-panel">
          <img
            src="/assets/inspo/project1.jpeg"
            alt=""
            className="projects-train-image"
          />
        </div>
      </div>

      {/* =====================================================
          DARK ATMOSPHERE
          ===================================================== */}

      <div className="projects-atmosphere" aria-hidden="true" />

      {/* =====================================================
          PROJECT WINDOW
          Only this part changes between projects.
          ===================================================== */}

      <div className="projects-window-position">
        <button
          type="button"
          className="projects-window"
          onClick={() => onSelectProject(currentProject)}
          aria-label={`Open ${currentProject.title}`}
        >
          {/* Outer train window frame */}
          <span className="projects-window-frame">
            {/* Inner glass */}
            <span className="projects-window-glass">
              {currentProject.videoSrc ? (
                <video
                  key={currentProject.videoSrc}
                  src={currentProject.videoSrc}
                  poster={currentProject.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="projects-window-media"
                />
              ) : currentProject.image ? (
                <img
                  key={currentProject.image}
                  src={currentProject.image}
                  alt={currentProject.alt || currentProject.title}
                  className="projects-window-media"
                />
              ) : (
                <span className="projects-window-placeholder">
                  {currentProject.title}
                </span>
              )}

              {/* Glass reflection */}
              <span className="projects-window-reflection" />

              {/* Glass darkness */}
              <span className="projects-window-vignette" />

              {/* Project label */}
              <span className="projects-window-label">
                <span className="projects-window-number">
                  {String(activeProject + 1).padStart(2, '0')} /{' '}
                  {String(projects.length).padStart(2, '0')}
                </span>

                <span className="projects-window-title">
                  {currentProject.title}
                </span>
              </span>
            </span>
          </span>
        </button>
      </div>

      {/* =====================================================
          SMALL PROJECT INDICATOR
          ===================================================== */}

      <div className="projects-indicators" aria-hidden="true">
        {projects.map((project, index) => (
          <span
            key={project.id}
            className={`projects-indicator ${
              index === activeProject ? 'projects-indicator--active' : ''
            }`}
          />
        ))}
      </div>

      {/* =====================================================
          SECTION TITLE
          ===================================================== */}

      <div className="projects-title">
        <span className="projects-eyebrow">PROJECTS</span>

        <h2>Through the Window.</h2>

        <p>
          A moving collection of things I have built.
        </p>
      </div>
    </section>
  );
};

export default ProjectsMetro;
