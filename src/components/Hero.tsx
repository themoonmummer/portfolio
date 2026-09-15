import React from "react";

interface HeroProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onContactClick,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-24">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-bg.jpg"
          alt="Japanese inspired city landscape"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/20 via-white/50 to-white" />
      </div>


      {/* Hero Card */}
      <div className="w-full max-w-5xl">
        <div
          className="
          rounded-3xl 
          border border-white/40
          bg-white/40
          backdrop-blur-xl
          shadow-2xl
          p-8
          sm:p-12
          md:p-16
          text-center
          "
        >

          {/* Badge */}
          <div
            className="
            inline-flex
            items-center
            rounded-full
            bg-pink-100
            px-5
            py-2
            text-sm
            font-semibold
            text-pink-900
            "
          >
            ✨ Available for new projects
          </div>


          {/* Title */}
          <h1
            className="
            mt-8
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-bold
            tracking-tight
            text-gray-900
            "
          >
            Building digital
            <br />

            <span className="text-pink-700 italic">
              experiences with code
            </span>
          </h1>


          {/* Description */}
          <p
            className="
            mx-auto
            mt-6
            max-w-2xl
            text-base
            sm:text-lg
            leading-relaxed
            text-gray-600
            "
          >
            Full-stack developer creating immersive web experiences,
            combining modern technology with thoughtful design.
          </p>


          {/* Buttons */}
          <div
            className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
            "
          >

            <button
              onClick={onExploreClick}
              className="
              rounded-full
              bg-pink-600
              px-8
              py-4
              font-semibold
              text-white
              shadow-lg
              transition
              hover:scale-105
              hover:bg-pink-700
              "
            >
              Explore Projects
            </button>


            <button
              onClick={onContactClick}
              className="
              rounded-full
              border
              border-gray-300
              bg-white/60
              px-8
              py-4
              font-semibold
              text-gray-900
              backdrop-blur
              transition
              hover:scale-105
              hover:bg-white
              "
            >
              Contact Me
            </button>

          </div>

        </div>
      </div>

    </section>
  );
};
