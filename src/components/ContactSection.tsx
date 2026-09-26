import React, { useState } from 'react';
import { CONTACT_DATA } from '../data/portfolioData';
import './ContactSection.css';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vision: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'submitted'
  >('idle');

  /*
   * Replace with your WhatsApp number.
   * International format only.
   * Example: 919876543210
   */
  const WHATSAPP_NUMBER = 'YOUR_WHATSAPP_NUMBER';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.vision) {
      return;
    }

    setStatus('submitting');

    const message = `Hello Riya,

I would like to discuss a project with you.

Name: ${formData.name}
Email: ${formData.email}

Project Vision:
${formData.vision}

I found your portfolio and would love to connect regarding this project.

Thank you!`;

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.setTimeout(() => {
      window.open(
        whatsappURL,
        '_blank',
        'noopener,noreferrer'
      );

      setStatus('submitted');
    }, 450);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      vision: '',
    });

    setStatus('idle');
  };

  return (
    <>
      <section
        className="contact-section"
        id="contact"
      >

        {/* =================================================
            BACKGROUND
            ================================================= */}

        <div
          className="contact-bg-pattern"
          aria-hidden="true"
        />

        <div
          className="contact-bg-softness"
          aria-hidden="true"
        />

        {/* =================================================
            CORNER DETAILS
            ================================================= */}

        <div
          className="contact-corner contact-corner--tr"
          aria-hidden="true"
        />

        <div
          className="contact-corner contact-corner--bl"
          aria-hidden="true"
        />

        {/* =================================================
            TOP LABEL
            ================================================= */}

        <div
          className="contact-top-label"
          aria-hidden="true"
        >
          <span />
          LET'S CONNECT
          <span />
        </div>

        {/* =================================================
            MAIN
            ================================================= */}

        <div className="contact-container">

          <div className="contact-panel">

            {/* =================================================
                HEADER
                ================================================= */}

            <header className="contact-header">

              <span className="contact-eyebrow">
                CONNECT / CREATE / BUILD
              </span>

              <h2 className="contact-title">
                {CONTACT_DATA.title}
              </h2>

              <p className="contact-subtitle">
                {CONTACT_DATA.subtitle}
              </p>

            </header>

            {/* =================================================
                SUCCESS STATE
                ================================================= */}

            {status === 'submitted' ? (

              <div className="contact-success">

                <div className="contact-success-mark">
                  <span>✓</span>
                </div>

                <span className="contact-success-eyebrow">
                  MESSAGE PREPARED
                </span>

                <h3>
                  You're almost there.
                </h3>

                <p>
                  Your message is ready in WhatsApp.
                  Just press send to start the conversation.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="contact-reset-btn"
                >
                  Send another message
                  <span>↗</span>
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="contact-form"
              >

                {/* =================================================
                    NAME + EMAIL
                    ================================================= */}

                <div className="contact-form-row">

                  <div className="contact-field">

                    <label htmlFor="contact-name">
                      Name
                    </label>

                    <div className="contact-input-wrap">

                      <span className="contact-field-number">
                        01
                      </span>

                      <input
                        id="contact-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        placeholder="Your name"
                      />

                    </div>

                  </div>

                  <div className="contact-field">

                    <label htmlFor="contact-email">
                      Email
                    </label>

                    <div className="contact-input-wrap">

                      <span className="contact-field-number">
                        02
                      </span>

                      <input
                        id="contact-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        placeholder="your@email.com"
                      />

                    </div>

                  </div>

                </div>

                {/* =================================================
                    PROJECT VISION
                    ================================================= */}

                <div className="contact-field">

                  <label htmlFor="contact-vision">
                    Project Vision
                  </label>

                  <div className="contact-textarea-wrap">

                    <span className="contact-field-number">
                      03
                    </span>

                    <textarea
                      id="contact-vision"
                      required
                      rows={4}
                      value={formData.vision}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          vision: e.target.value,
                        })
                      }
                      placeholder="Tell me what you're imagining..."
                    />

                  </div>

                </div>

                {/* =================================================
                    SUBMIT
                    ================================================= */}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="contact-submit"
                >

                  <span>
                    {status === 'submitting'
                      ? 'Preparing message...'
                      : 'Start a conversation'}
                  </span>

                  <span className="contact-submit-arrow">
                    →
                  </span>

                </button>

                <p className="contact-submit-note">
                  Your details will be placed into a pre-written
                  WhatsApp message.
                </p>

              </form>

            )}

          </div>

        </div>

        {/* =================================================
            BOTTOM DETAILS
            ================================================= */}

        <div className="contact-bottom-left">
          <span>AVAILABLE FOR</span>
          <strong>SELECTED PROJECTS</strong>
        </div>

        <div className="contact-bottom-right">
          <span>DROP A LINE</span>
          <strong>AND LET'S BUILD.</strong>
        </div>

      </section>
    </>
  );
};

export default ContactSection;