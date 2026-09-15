import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const HEADING_TEXT = 'About Me';
const TYPING_SPEED = 90;

const ABOUT_PARAGRAPH = `My name is Riya Jha, and I am 21 years old. I am currently pursuing a Bachelor of Computer Applications (BCA), while exploring my interests in technology, creativity, and digital experiences.

I have many hobbies and interests, and coding is one of the things I enjoy most. It is also one of the main reasons I chose this field. I enjoy turning ideas into functional and meaningful digital experiences and continuously learning along the way.

I may not be famous, have a large team, or run a big agency, but as a vibe coder, I am confident in my ability to understand ideas, build useful solutions, and help individuals or small teams bring their projects to life.

I work remotely because I want to build a career that gives me both independence and flexibility. Beyond work, I have dreams of traveling, experiencing new places, and pursuing other things that matter to me. Remote work allows me to earn through my skills while creating the freedom to work toward those dreams as well.`;

const PARAGRAPHS = ABOUT_PARAGRAPH.split('\n\n');

export const AboutSection: React.FC = () => {
  const [typedHeading, setTypedHeading] = useState('');
  const [headingDone, setHeadingDone] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  /*
   * Start the animation when the About section becomes visible.
   * This also works when About is already visible after refresh.
   */
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  /*
   * Respect reduced-motion preferences.
   */
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  /*
   * Typewriter animation
   */
  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setTypedHeading(HEADING_TEXT);
      setHeadingDone(true);
      return;
    }

    let charIndex = 0;
    let doneTimer: ReturnType<typeof setTimeout>;

    setTypedHeading('');
    setHeadingDone(false);

    const interval = setInterval(() => {
      charIndex += 1;

      setTypedHeading(
        HEADING_TEXT.slice(0, charIndex)
      );

      if (charIndex >= HEADING_TEXT.length) {
        clearInterval(interval);

        doneTimer = setTimeout(() => {
          setHeadingDone(true);
        }, 250);
      }
    }, TYPING_SPEED);

    return () => {
      clearInterval(interval);
      clearTimeout(doneTimer);
    };
  }, [isInView, prefersReducedMotion]);

  const typingActive =
    isInView &&
    !headingDone &&
    !prefersReducedMotion;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        w-full
        overflow-hidden
      "
      style={{
        backgroundColor: '#0a1228',
      }}
    >
      {/* =====================================================
          NATURAL IMAGE

          The image is NOT using object-cover.
          It keeps its natural aspect ratio and full composition.
          No blur, no scaling transform, no filter, no overlay.
          ===================================================== */}

      {!imageFailed ? (
        <img
          src="/images/about.jpeg"
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          onError={() => setImageFailed(true)}
          className="
            block
            w-full
            h-auto
            max-w-none
          "
          style={{
            filter: 'none',
            transform: 'none',
            opacity: 1,
          }}
        />
      ) : (
        <div
          className="w-full min-h-[70vh]"
          style={{
            backgroundColor: '#0a1228',
          }}
        />
      )}

      {/* =====================================================
          CONTENT OVER IMAGE

          The content is positioned over the natural image
          without changing the image dimensions.
          ===================================================== */}

      <div
        className="
          absolute
          inset-0
          z-10

          flex
          items-start
          text-right

          px-5
          sm:px-8
          md:px-12
          lg:px-16

          pt-[18%]
          sm:pt-[11%]
          md:pt-[9%]

         md:translate-x-[13cm]

        "
      >
        {/* =================================================
            WIDE RECTANGULAR CONTENT AREA

            Wider than the previous version so the final
            paragraphs don't become a tall narrow block.
            ================================================= */}

        <div
          className="
            w-full

            max-w-3xl
            lg:max-w-4xl
            xl:max-w-5xl

            mr-auto
          "
        >
          {/* =================================================
              HEADING
              ================================================= */}

          <h2
            aria-label={HEADING_TEXT}
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl

              font-bold
              italic

              mb-3
              sm:mb-4

              inline-block
              min-h-[1.2em]
            "
            style={{
              fontFamily:
                "'Plus Jakarta Sans', system-ui, sans-serif",

              /*
               * Deep navy blue.
               */
              color: '#082B59',

              letterSpacing: '0.01em',

              /*
               * No border / no stroke.
               */
              textShadow:
                '0 1px 5px rgba(255, 255, 255, 0.18)',
            }}
          >
            <span aria-hidden="true">
              {typedHeading}
            </span>

            {/* Typewriter cursor */}
            {typingActive && (
              <span
                aria-hidden="true"
                className="
                  inline-block
                  w-[2px]
                  sm:w-[3px]
                  h-[0.8em]
                  ml-1
                  align-middle
                "
                style={{
                  backgroundColor: '#082B59',
                  animation:
                    'about-blink 1s step-end infinite',
                }}
              />
            )}
          </h2>

          {/* =================================================
              BODY TEXT
              ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={
              headingDone
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 10,
                  }
            }
            transition={{
              duration: 0.55,
              ease: 'easeOut',
            }}
          >
            <div
              className="
                space-y-1.5
                sm:space-y-2
                md:space-y-2.5
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",

                /*
                 * Same deep navy as the heading.
                 */
                color: '#082B59',

                /*
                 * One step larger than before,
                 * but still compact.
                 */
                fontSize:
  'clamp(0.95rem, 1.2vw, 1.08rem)',
                /*
                 * Bold paragraph text.
                 */
                fontWeight: 700,

                /*
                 * Tight line spacing.
                 */
                lineHeight: 1.42,

                letterSpacing: '0.003em',

                /*
                 * NO stroke / NO border.
                 */
                textShadow:
                  '0 1px 5px rgba(255, 255, 255, 0.16)',
              }}
            >
              {PARAGRAPHS.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 6,
                  }}
                  animate={
                    headingDone
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 0,
                          y: 6,
                        }
                  }
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: 'easeOut',
                  }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          TYPEWRITER CURSOR
          ===================================================== */}

      <style>{`
        @keyframes about-blink {
          0%, 100% {
            opacity: 1;
          }

          50% {
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes about-blink {
            0%, 100% {
              opacity: 1;
            }
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
