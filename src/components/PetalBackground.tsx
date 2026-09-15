import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const PetalBackground: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (!enabled) {
      setPetals([]);
      return;
    }

    const generatedPetals: Petal[] = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 6,
      left: Math.random() * 100,
      duration: Math.random() * 6 + 7,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.5 + 0.3,
    }));

    setPetals(generatedPetals);
  }, [enabled]);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="sakura-petal"
            style={{
              width: `${petal.size}px`,
              height: `${petal.size}px`,
              left: `${petal.left}vw`,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
              opacity: petal.opacity,
            }}
          />
        ))}
      </div>

      {/* Floating Toggle Controls for Petals */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setEnabled(!enabled)}
          title={enabled ? "Pause Sakura Petals" : "Enable Sakura Petals"}
          className="glass-panel px-4 py-2.5 rounded-full text-xs font-semibold text-[#524249] hover:text-[#95406f] hover:scale-105 transition-all flex items-center gap-2 shadow-lg cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm text-[#95406f]">
            {enabled ? "filter_vintage" : "pause_circle"}
          </span>
          <span className="hidden sm:inline">
            {enabled ? "Sakura Petals: On" : "Sakura Petals: Paused"}
          </span>
        </button>
      </div>
    </>
  );
};
