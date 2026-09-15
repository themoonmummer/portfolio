import React, { useState } from 'react';

interface NavbarProps {
  onHireClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHireClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('work');

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] sm:w-[calc(100%-40px)] max-w-7xl rounded-full border-[0.5px] border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(104,84,141,0.12)] z-50 transition-all duration-300">
      <nav className="flex justify-between items-center px-6 sm:px-8 py-3 w-full">
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#1b1b1d] hover:text-[#95406f] transition-colors"
        >
          Komorebi Digital
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection('work')}
            className={`font-body text-base font-medium transition-all ${
              activeTab === 'work' 
                ? 'text-[#95406f] border-b-2 border-[#95406f] pb-0.5 font-semibold' 
                : 'text-[#524249] hover:text-[#95406f]'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`font-body text-base font-medium transition-all ${
              activeTab === 'about' 
                ? 'text-[#95406f] border-b-2 border-[#95406f] pb-0.5 font-semibold' 
                : 'text-[#524249] hover:text-[#95406f]'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`font-body text-base font-medium transition-all ${
              activeTab === 'contact' 
                ? 'text-[#95406f] border-b-2 border-[#95406f] pb-0.5 font-semibold' 
                : 'text-[#524249] hover:text-[#95406f]'
            }`}
          >
            Contact
          </button>

          {/* Hire Me CTA Button */}
          <button
            onClick={onHireClick}
            className="sunset-glow text-white px-6 py-2 rounded-full font-body text-xs uppercase tracking-widest font-bold hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1b1b1d] hover:text-[#95406f] transition-colors"
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-2 pb-6 flex flex-col gap-4 border-t border-white/40 mt-1">
          <button
            onClick={() => scrollToSection('work')}
            className="text-left font-body text-base font-semibold text-[#1b1b1d] py-1"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-left font-body text-base font-semibold text-[#1b1b1d] py-1"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-left font-body text-base font-semibold text-[#1b1b1d] py-1"
          >
            Contact
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onHireClick();
            }}
            className="w-full sunset-glow text-white py-3 rounded-full font-body text-xs uppercase tracking-widest font-bold text-center mt-2 shadow-md"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
};
