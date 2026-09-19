import { useState } from 'react';
import { Hero } from './components/Hero';
import ProjectsMetro from './components/ProjectsSection';
import  TechStack  from './components/TechStack';
import  AboutSection  from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SocialMedia } from './components/SocialMedia';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fbf8fb] text-[#1b1b1d] relative font-body selection:bg-[#ffafd5] selection:text-[#3d0027]">
    
      {/* 1. Home */}
      <Hero onNavigate={scrollToSection} />

      {/* 2. About — ferris wheel */}
      <AboutSection />

      {/* 3. Projects — train windows */}
      <ProjectsMetro
        projects={PROJECTS}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 4. Skills / Languages */}
      <TechStack />

      {/* 5. Social Connect — dusky-pink rectangle replaces red circle+girl from inspo */}
      <SocialMedia />

      {/* 6. Contact */}
      <ContactSection />

      <Footer />
    </div>
  );
}
