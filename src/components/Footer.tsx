import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 md:px-20 border-t border-[#d7c1c9]/40 bg-transparent relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="space-y-1 text-center md:text-left">
          <span className="font-display text-xl font-bold text-[#1b1b1d] tracking-tight block">
            Komorebi Digital
          </span>
          <p className="font-body text-xs sm:text-sm text-[#524249]/80">
            © 2026 Komorebi Digital. Crafted in the light of the rising sun.
          </p>
        </div>

        <div className="flex gap-8">
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#524249] hover:text-[#95406f] transition-colors font-body text-sm font-semibold"
          >
            Dribbble
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#524249] hover:text-[#95406f] transition-colors font-body text-sm font-semibold"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#524249] hover:text-[#95406f] transition-colors font-body text-sm font-semibold"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
