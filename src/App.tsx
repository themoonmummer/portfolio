import { useState } from 'react';
import { Hero } from './components/Hero';
import { ProjectsMetro } from './components/ProjectsSection';
import { TechStack } from './components/TechStack';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PetalBackground } from './components/PetalBackground';
import { CaseStudyModal } from './components/CaseStudyModal';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf8fb] text-[#1b1b1d] relative font-body selection:bg-[#ffafd5] selection:text-[#3d0027]">
      {/* Falling Sakura Petals Animation */}
      <PetalBackground />

      {/* Hero Section */}
      <Hero onNavigate={scrollToSection} />

      {/* Work Showcase: Metro Window View */}
      <ProjectsMetro
        projects={PROJECTS}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* Tech Stack: 3D Perspective Sakura Stack */}
      <TechStack />

      {/* About Section: Zen Philosophy & Portrait */}
      <AboutSection />

      {/* Contact Section: Heavy Glass Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Case Study Modal Popup */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
