import { useEffect, useState } from 'react';
import type { Project } from '../types';
import './project.css';
import fuji2 from '../../assets/inspo/fuji2.jpeg';

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
   * Change project automatically every 5 seconds.
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
          MOVING FUJI IMAGE
          ===================================================== */}

      <div className="projects-train-track" aria-hidden="true">
        <div className="projects-train-panel">
         <img
  src={fuji2}
  alt=""
  className="projects-train-image"
/>
        </div>

        {/* Duplicate keeps the movement seamless */}
        <div className="projects-train-panel">
          <img
            src={fuji2}
            alt=""
            className="projects-train-image"
          />
        </div>
      </div>

      {/* =====================================================
          PROJECT CLICK AREA
          Invisible — no window, frame, glass or fade.
          ===================================================== */}

      <button
        type="button"
        className="projects-image-click"
        onClick={() => onSelectProject(currentProject)}
        aria-label={`Open ${currentProject.title}`}
      />

      {/* =====================================================
          PROJECT INDICATORS
          ===================================================== */}

      <div className="projects-indicators" aria-hidden="true">
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
        <span className="projects-eyebrow">PROJECTS</span>

        <h2>Projects.</h2>

        <p>
          A moving collection of things I have built.
        </p>
      </div>
    </section>
  );
};

export default ProjectsMetro;
