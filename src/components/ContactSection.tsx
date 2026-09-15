import React, { useState } from 'react';
import { CONTACT_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', vision: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('submitted');
      setFormData({ name: '', email: '', vision: '' });
    }, 1200);
  };

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" id="contact">
      {/* Background Asset Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={CONTACT_DATA.bgImage}
          alt="Macro photograph of soft cherry blossom petals"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8fb] via-transparent to-[#fbf8fb]"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="glass-panel-heavy rounded-[32px] sm:rounded-[50px] md:rounded-[60px] p-8 sm:p-14 md:p-20 shadow-2xl border border-white/80">
          
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1b1b1d]">
              {CONTACT_DATA.title}
            </h2>
            <p className="font-body text-base sm:text-lg text-[#524249]">
              {CONTACT_DATA.subtitle}
            </p>
          </div>

          {status === 'submitted' ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 sunset-glow rounded-full mx-auto flex items-center justify-center text-white shadow-lg">
                <span className="material-symbols-outlined text-3xl font-bold">check</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#1b1b1d]">
                Inquiry Sent
              </h3>
              <p className="font-body text-sm text-[#524249] max-w-md mx-auto">
                Thank you for reaching out. I will respond to your journey vision within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 text-xs font-bold font-body uppercase tracking-widest text-[#95406f] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-body text-xs font-semibold uppercase tracking-widest text-[#524249] ml-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-white/50 border border-[#d7c1c9] focus:border-[#95406f] focus:outline-none focus:ring-2 focus:ring-[#ff99cc]/40 rounded-2xl px-6 py-4 backdrop-blur-md transition-all font-body text-sm text-[#1b1b1d]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-body text-xs font-semibold uppercase tracking-widest text-[#524249] ml-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-white/50 border border-[#d7c1c9] focus:border-[#95406f] focus:outline-none focus:ring-2 focus:ring-[#ff99cc]/40 rounded-2xl px-6 py-4 backdrop-blur-md transition-all font-body text-sm text-[#1b1b1d]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-body text-xs font-semibold uppercase tracking-widest text-[#524249] ml-2 block">
                  Project Vision
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.vision}
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  placeholder="Tell me about your journey..."
                  className="w-full bg-white/50 border border-[#d7c1c9] focus:border-[#95406f] focus:outline-none focus:ring-2 focus:ring-[#ff99cc]/40 rounded-2xl px-6 py-4 backdrop-blur-md transition-all font-body text-sm text-[#1b1b1d]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sunset-glow text-white py-5 sm:py-6 rounded-full font-display text-lg font-bold hover:shadow-xl hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg disabled:opacity-70"
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Inquiry'}</span>
                <span className="material-symbols-outlined text-xl">send</span>
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
