import React, { useState } from 'react';
import { CONTACT_DATA } from '../data/portfolioData';

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


      {/* =====================================================
          EMBEDDED CSS
          ===================================================== */}

      <style>{`

        /* =================================================
           SECTION
           ================================================= */

        .contact-section {
          --contact-bg-light: #e8ddd1;
          --contact-bg-dark: #d9cabe;

          --contact-brown: #2b1a0f;
          --contact-cream: #f8f0e5;

          position: relative;

          width: 100%;
          min-height: 100vh;

          overflow: hidden;

          background:
            linear-gradient(
              135deg,
              var(--contact-bg-light) 0%,
              var(--contact-bg-dark) 100%
            );

          color: var(--contact-brown);

          isolation: isolate;
        }


        /* =================================================
           SEMI-CIRCLE PATTERN
           
           IMPORTANT:
           This is intentionally OFFSET compared with
           the Social Media first row.

           Contact:
           ROW 1 = offset / second Social row
           ROW 2 = original / first Social row
           ROW 3 = offset
           ROW 4 = original
           ================================================= */

        .contact-bg-pattern {
          position: absolute;

          inset: 0;

          z-index: -2;

          background-image:
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='80' viewBox='0 0 160 80'%3E%3Cg fill='none' stroke='%232b1a0f' stroke-width='1.1' opacity='0.4'%3E%3Cpath d='M-20 40 A40 40 0 0 1 60 40'/%3E%3Cpath d='M60 40 A40 40 0 0 1 140 40'/%3E%3Cpath d='M140 40 A40 40 0 0 1 220 40'/%3E%3Cpath d='M20 80 A40 40 0 0 1 100 80'/%3E%3Cpath d='M100 80 A40 40 0 0 1 180 80'/%3E%3Cpath d='M180 80 A40 40 0 0 1 260 80'/%3E%3Cpath d='M0 40 A20 20 0 0 1 40 40'/%3E%3Cpath d='M80 40 A20 20 0 0 1 120 40'/%3E%3Cpath d='M160 40 A20 20 0 0 1 200 40'/%3E%3Cpath d='M40 80 A20 20 0 0 1 80 80'/%3E%3Cpath d='M120 80 A20 20 0 0 1 160 80'/%3E%3Cpath d='M200 80 A20 20 0 0 1 240 80'/%3E%3C/g%3E%3C/svg%3E");

          background-repeat: repeat;

          /*
           * Keep the pattern at a fixed geometric ratio.
           * It scales gently on larger screens without
           * stretching the individual semi-circles.
           */
          background-size:
            clamp(140px, 10vw, 190px)
            clamp(70px, 5vw, 95px);

          opacity: 0.27;

          pointer-events: none;
        }


        /* =================================================
           NATURAL BLENDING
           ================================================= */

        .contact-bg-softness {
          position: absolute;

          inset: 0;

          z-index: -1;

          pointer-events: none;

          background:
            radial-gradient(
              ellipse at center,
              rgba(248, 240, 229, 0.20) 0%,
              rgba(248, 240, 229, 0.06) 45%,
              transparent 75%
            );

          opacity: 0.8;
        }


        /* =================================================
           CORNERS
           ================================================= */

        .contact-corner {
          position: absolute;

          width: clamp(50px, 6vw, 80px);
          height: clamp(50px, 6vw, 80px);

          opacity: 0.55;

          pointer-events: none;

          z-index: 5;
        }

        .contact-corner--tr {
          top: 24px;
          right: 24px;

          border-top:
            2px solid
            var(--contact-brown);

          border-right:
            2px solid
            var(--contact-brown);
        }

        .contact-corner--tr::before {
          content: "";

          position: absolute;

          top: 9px;
          right: 9px;

          width: 65%;
          height: 65%;

          border-top:
            1px solid
            var(--contact-brown);

          border-right:
            1px solid
            var(--contact-brown);
        }

        .contact-corner--bl {
          left: 24px;
          bottom: 24px;

          border-left:
            2px solid
            var(--contact-brown);

          border-bottom:
            2px solid
            var(--contact-brown);
        }

        .contact-corner--bl::before {
          content: "";

          position: absolute;

          left: 9px;
          bottom: 9px;

          width: 65%;
          height: 65%;

          border-left:
            1px solid
            var(--contact-brown);

          border-bottom:
            1px solid
            var(--contact-brown);
        }


        /* =================================================
           TOP LABEL
           ================================================= */

        .contact-top-label {
          position: absolute;

          top: 32px;
          left: 50%;

          transform:
            translateX(-50%);

          display: flex;

          align-items: center;

          gap: 11px;

          font-family:
            "Plus Jakarta Sans",
            system-ui,
            sans-serif;

          font-size: 0.58rem;

          font-weight: 700;

          letter-spacing: 0.27em;

          color:
            var(--contact-brown);

          opacity: 0.48;

          white-space: nowrap;

          z-index: 5;
        }

        .contact-top-label span {
          width: 22px;
          height: 1px;

          background:
            var(--contact-brown);

          opacity: 0.45;
        }


        /* =================================================
           MAIN CONTAINER
           ================================================= */

        .contact-container {
          position: relative;

          z-index: 2;

          width: 100%;

          min-height: 100vh;

          display: flex;

          align-items: center;

          justify-content: center;

          padding:
            clamp(85px, 9vh, 110px)
            clamp(20px, 5vw, 90px)
            clamp(75px, 8vh, 100px);
        }


        /* =================================================
           CLEAR GLASS PANEL

           Much more transparent than previous version.
           ================================================= */

        .contact-panel {
          width:
            min(
              clamp(560px, 55vw, 820px),
              calc(100vw - 40px)
            );

          /*
           * Responsive vertical sizing.
           * Prevents the panel from becoming huge on
           * larger screens.
           */
          min-height: 0;

          padding:
            clamp(30px, 3.5vw, 50px)
            clamp(28px, 4vw, 58px);

          border-radius:
            clamp(24px, 3vw, 38px);

          /*
           * CLEAR GLASS
           */
          background:
            rgba(248, 240, 229, 0.27);

          border:
            1px solid
            rgba(255, 255, 255, 0.55);

          box-shadow:
            0 24px 60px
            rgba(43, 26, 15, 0.09),

            inset 0 1px 0
            rgba(255, 255, 255, 0.65);

          backdrop-filter:
            blur(12px);

          -webkit-backdrop-filter:
            blur(12px);
        }


        /* =================================================
           HEADER
           ================================================= */

        .contact-header {
          text-align: center;

          margin-bottom:
            clamp(25px, 3vw, 38px);
        }

        .contact-eyebrow {
          display: block;

          margin-bottom: 10px;

          font-family:
            "Plus Jakarta Sans",
            system-ui,
            sans-serif;

          font-size:
            clamp(0.5rem, 0.7vw, 0.62rem);

          font-weight: 700;

          letter-spacing: 0.25em;

          color:
            var(--contact-brown);

          opacity: 0.55;
        }

        .contact-title {
          margin: 0;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          /*
           * Smaller and more controlled.
           */
          font-size:
            clamp(2.7rem, 5vw, 4.8rem);

          line-height: 0.9;

          font-weight: 700;

          letter-spacing: -0.035em;

          color:
            var(--contact-brown);
        }

        .contact-subtitle {
          max-width: 500px;

          margin:
            13px auto 0;

          font-family:
            "Plus Jakarta Sans",
            system-ui,
            sans-serif;

          font-size:
            clamp(0.7rem, 1vw, 0.82rem);

          line-height: 1.6;

          color:
            rgba(43, 26, 15, 0.62);
        }


        /* =================================================
           FORM
           ================================================= */

        .contact-form {
          display: flex;

          flex-direction: column;

          gap:
            clamp(18px, 2vw, 24px);
        }

        .contact-form-row {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap:
            clamp(12px, 2vw, 20px);
        }

        .contact-field {
          display: flex;

          flex-direction: column;

          gap: 7px;
        }

        .contact-field label {
          padding-left: 4px;

          font-family:
            "Plus Jakarta Sans",
            system-ui,
            sans-serif;

          font-size:
            clamp(0.52rem, 0.65vw, 0.6rem);

          font-weight: 700;

          text-transform: uppercase;

          letter-spacing: 0.18em;

          color:
            var(--contact-brown);

          opacity: 0.62;
        }


        /* =================================================
           INPUT WRAPPERS
           ================================================= */

        .contact-input-wrap,
        .contact-textarea-wrap {
          position: relative;

          display: flex;

          align-items: center;

          background:
            rgba(255, 251, 245, 0.32);

          border:
            1px solid
            rgba(43, 26, 15, 0.13);

          border-radius:
            14px;

          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .contact-input-wrap:hover,
        .contact-textarea-wrap:hover {
          background:
            rgba(255, 251, 245, 0.40);
        }

        .contact-input-wrap:focus-within,
        .contact-textarea-wrap:focus-within {
          background:
            rgba(255, 251, 245, 0.52);

          border-color:
            rgba(43, 26, 15, 0.32);

          box-shadow:
            0 0 0 3px
            rgba(43, 26, 15, 0.035);
        }

        .contact-field-number {
          flex-shrink: 0;

          margin-left: 14px;

          font-family:
            "Plus Jakarta Sans",
            system-ui,
            sans-serif;

          font-size:
            0.5rem;

          font-weight: 700;

          letter-spacing: 0.08em;

          color:
            var(--contact-brown);

          opacity: 0.3;
        }


        /* =================================================
           INPUTS
           ================================================= */

        .contact-input-wrap input,
        .contact-textarea-wrap textarea {
          width: 100%;

          border: none;

          outline: none;

          background: transparent;

          font-family:
            "Plus Jakarta Sans",
            system-ui,
            sans-serif;

          font-size:
            clamp(0.7rem, 0.9vw, 0.78rem);

          color:
            var(--contact-brown);
        }

        .contact-input-wrap input {
          padding:
            13px 14px 13px 9px;
        }

        .contact-textarea-wrap {
          align-items: flex-start;
        }

        .contact-textarea-wrap .contact-field-number {
          margin-top: 16px;
        }

        .contact-textarea-wrap textarea {
          min-height:
            clamp(105px, 12vh, 135px);

          resize: vertical;

          padding:
            14px 14px 14px 9px;

          line-height: 1.55;
        }

        .contact-input-wrap input::placeholder,
        .contact-textarea-wrap textarea::placeholder {
          color:
            rgba(43, 26, 15, 0.35);
        }


        /* =================================================
           SUBMIT BUTTON
           ================================================= */

        .contact-submit {
          width: 100%;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 13px;

          margin-top: 2px;

          padding:
            clamp(14px, 1.5vw, 17px)
            22px;

          border:
            1px solid
            var(--contact-brown);

          border-radius: 999px;

          background:
            var(--contact-brown);

          color:
            var(--contact-cream);

          cursor: pointer;

          font-family:
            "Plus Jakarta Sans",
            system-ui,
            sans-serif;

          font-size:
            clamp(0.65rem, 0.8vw, 0.74rem);

          font-weight: 700;

          letter-spacing: 0.08em;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .contact-submit:hover:not(:disabled) {
          transform:
            translateY(-2px);

          background:
            #3a2418;

          box-shadow:
            0 12px 28px
            rgba(43, 26, 15, 0.17);
        }

        .contact-submit:active:not(:disabled) {
          transform:
            translateY(0);
        }

        .contact-submit:disabled {
          opacity: 0.6;

          cursor: wait;
        }

        .contact-submit-arrow {
          width: 24px;
          height: 24px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background:
            rgba(248, 240, 229, 0.12);

          transition:
            transform 0.25s ease;
        }

        .contact-submit:hover:not(:disabled)
        .contact-submit-arrow {
          transform:
            translateX(3px);
        }

        .contact-submit-note {
          margin:
            -8px 0 0;

          text-align: center;

          font-family:
            "Plus Jakarta Sans",
            system-ui,
            sans-serif;

          font-size:
            0.5rem;

          line-height: 1.4;

          color:
            rgba(43, 26, 15, 0.4);
        }


        /* =================================================
           SUCCESS
           ================================================= */

        .contact-success {
          min-height:
            clamp(250px, 35vh, 330px);

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;
        }

        .contact-success-mark {
          width: 58px;
          height: 58px;

          display: flex;

          align-items: center;
          justify-content: center;

          margin-bottom: 17px;

          border-radius: 50%;

          background:
            var(--contact-brown);

          color:
            var(--contact-cream);

          box-shadow:
            0 12px 28px
            rgba(43, 26, 15, 0.15);
        }

        .contact-success-mark span {
          font-size: 1.3rem;

          font-weight: 700;
        }

        .contact-success-eyebrow {
          font-family:
            "Plus Jakarta Sans",
            system-ui,
            sans-serif;

          font-size:
            0.52rem;

          font-weight: 700;

          letter-spacing: 0.22em;

          color:
            var(--contact-brown);

          opacity: 0.5;
        }

        .contact-success h3 {
          margin:
            8px 0 0;

          font-family:
            "Cormorant Garamond",
            Georgia,
            serif;

          font-size:
            clamp(1.9rem, 3.5vw, 2.8rem);

          line-height: 1;

          color:
            var(--contact-brown);
        }

        .contact-success p {
          max-width: 420px;

          margin:
            10px auto 0;

          font-family:
            "Plus Jakarta Sans",
            system-ui,
            sans-serif;

          font-size:
            0.72rem;

          line-height: 1.6;

          color:
            rgba(43, 26, 15, 0.58);
        }

        .contact-reset-btn {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          margin-top: 20px;

          padding:
            8px 14px;

          border: none;

          background: transparent;

          color:
            var(--contact-brown);

          cursor: pointer;

          font-family:
            "Plus Jakarta Sans",
            system-ui,
            sans-serif;

          font-size:
            0.58rem;

          font-weight: 700;

          letter-spacing: 0.1em;

          text-transform: uppercase;
        }

        .contact-reset-btn:hover {
          text-decoration: underline;
        }


        /* =================================================
           BOTTOM DETAILS
           ================================================= */

        .contact-bottom-left,
        .contact-bottom-right {
          position: absolute;

          bottom: 28px;

          display: flex;

          flex-direction: column;

          gap: 3px;

          font-family:
            "Plus Jakarta Sans",
            system-ui,
            sans-serif;

          font-size:
            0.47rem;

          line-height: 1.4;

          letter-spacing: 0.15em;

          color:
            var(--contact-brown);

          opacity: 0.45;

          z-index: 5;
        }

        .contact-bottom-left {
          left: 32px;
        }

        .contact-bottom-right {
          right: 32px;

          text-align: right;
        }

        .contact-bottom-left strong,
        .contact-bottom-right strong {
          font-weight: 700;
        }


        /* =================================================
           LARGE SCREENS
           ================================================= */

        @media (min-width: 1400px) {

          .contact-panel {
            width:
              min(58vw, 900px);

            padding:
              52px 64px;
          }

          .contact-title {
            font-size:
              clamp(4rem, 4.8vw, 5.5rem);
          }

        }


        /* =================================================
           TABLET
           ================================================= */

        @media (max-width: 900px) {

          .contact-container {
            padding:
              90px 25px 80px;
          }

          .contact-panel {
            width:
              min(720px, calc(100vw - 50px));
          }

          .contact-bottom-left,
          .contact-bottom-right {
            display: none;
          }

        }


        /* =================================================
           MOBILE
           ================================================= */

        @media (max-width: 720px) {

          .contact-section {
            min-height: auto;
          }

          .contact-container {
            min-height: auto;

            padding:
              90px 15px 75px;
          }

          .contact-panel {
            width: 100%;

            padding:
              30px 20px;

            border-radius: 26px;

            background:
              rgba(248, 240, 229, 0.30);
          }

          .contact-form-row {
            grid-template-columns: 1fr;

            gap: 18px;
          }

          .contact-header {
            margin-bottom: 28px;
          }

          .contact-title {
            font-size:
              clamp(2.8rem, 14vw, 4rem);
          }

          .contact-subtitle {
            max-width: 360px;

            font-size: 0.68rem;
          }

          .contact-watermark {
            display: none;
          }

          .contact-top-label {
            top: 27px;

            font-size: 0.5rem;
          }

          .contact-top-label span {
            width: 14px;
          }

          .contact-corner--tr {
            top: 18px;
            right: 18px;
          }

          .contact-corner--bl {
            left: 18px;
            bottom: 18px;
          }

        }


        /* =================================================
           SMALL PHONES
           ================================================= */

        @media (max-width: 450px) {

          .contact-container {
            padding:
              85px 12px 70px;
          }

          .contact-panel {
            padding:
              27px 17px;

            border-radius: 23px;
          }

          .contact-eyebrow {
            font-size: 0.48rem;

            letter-spacing: 0.18em;
          }

          .contact-title {
            font-size: 2.75rem;
          }

          .contact-form {
            gap: 20px;
          }

          .contact-input-wrap,
          .contact-textarea-wrap {
            border-radius: 13px;
          }

          .contact-input-wrap input {
            padding:
              12px 12px 12px 8px;
          }

          .contact-textarea-wrap textarea {
            min-height: 115px;

            padding:
              13px 12px 13px 8px;
          }

          .contact-field-number {
            margin-left: 12px;
          }

          .contact-submit {
            padding:
              15px 17px;

            font-size: 0.64rem;
          }

        }


        /* =================================================
           REDUCED MOTION
           ================================================= */

        @media (prefers-reduced-motion: reduce) {

          .contact-submit,
          .contact-submit-arrow,
          .contact-input-wrap,
          .contact-textarea-wrap {
            transition: none;
          }

        }

      `}</style>
    </>
  );
};

export default ContactSection;
