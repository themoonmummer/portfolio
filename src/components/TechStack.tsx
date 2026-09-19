import React, { useEffect, useState } from "react";
import "./skill.css";

/* =========================================================
   TYPES
========================================================= */

type MainCategory = "skills" | "languages";

type SkillGroup =
  | "web"
  | "soft"
  | "additional"
  | "programming"
  | "computerScience"
  | "vibeCoding";

interface SkillItem {
  title: string;
  description: string[];
}

interface SkillGroupData {
  label: string;
  title: string;
  color: "brown" | "green" | "ochre";
  skills: SkillItem[];
}


/* =========================================================
   SKILLS DATA
========================================================= */

const SKILL_GROUPS: Record<
  Extract<SkillGroup, "web" | "soft" | "additional">,
  SkillGroupData
> = {
  web: {
    label: "The Toolkit",
    title: "Web Development Skills",
    color: "brown",

    skills: [
      {
        title: "Responsive Web Design",
        description: [
          "Creating layouts that adapt smoothly across desktop, tablet, and mobile screens.",
          "Focused on clean spacing, flexible structures, and consistent user experiences.",
        ],
      },

      {
        title: "Semantic HTML",
        description: [
          "Writing meaningful HTML structures that clearly describe the purpose of each element.",
          "Helps improve accessibility, readability, and maintainability.",
        ],
      },

      {
        title: "CSS Flexbox & Grid",
        description: [
          "Using modern CSS layout systems to create structured and responsive interfaces.",
          "Comfortable working with alignment, spacing, columns, rows, and adaptive layouts.",
        ],
      },

      {
        title: "Basic DOM Manipulation",
        description: [
          "Working with the Document Object Model to create interactive web experiences.",
          "Understanding how JavaScript can select, update, and respond to page elements.",
        ],
      },

      {
        title: "UI Components",
        description: [
          "Building reusable interface components that keep applications consistent and maintainable.",
          "Focused on clear component structure and intuitive user interactions.",
        ],
      },

      {
        title: "Website Layout Design",
        description: [
          "Designing complete page structures with attention to hierarchy, spacing, balance, and visual flow.",
          "Turning ideas and references into polished web layouts.",
        ],
      },
    ],
  },

  soft: {
    label: "The Toolkit",
    title: "Soft Skills",
    color: "green",

    skills: [
      {
        title: "Communication",
        description: [
          "Expressing ideas clearly and listening carefully to understand different perspectives.",
          "Comfortable discussing ideas, requirements, feedback, and solutions.",
        ],
      },

      {
        title: "Adaptability",
        description: [
          "Able to adjust to new tools, environments, requirements, and ways of working.",
          "Approaches unfamiliar situations with curiosity and an open mindset.",
        ],
      },

      {
        title: "Time Management",
        description: [
          "Organizing tasks around priorities and deadlines.",
          "Breaking larger goals into manageable steps to keep work moving consistently.",
        ],
      },

      {
        title: "Team Collaboration",
        description: [
          "Working effectively with others by sharing ideas, responsibilities, and feedback.",
          "Focused on contributing to a positive and productive team environment.",
        ],
      },

      {
        title: "Attention to Detail",
        description: [
          "Paying close attention to visual details, implementation, consistency, and small mistakes.",
          "Especially important when polishing interfaces and user experiences.",
        ],
      },

      {
        title: "Continuous Learning",
        description: [
          "Regularly exploring new technologies, techniques, and approaches.",
          "Enjoy learning through experimentation, projects, and hands-on practice.",
        ],
      },

      {
        title: "Creative Thinking",
        description: [
          "Looking for creative ways to approach problems and turn ideas into experiences.",
          "Enjoy combining visual design with practical technical solutions.",
        ],
      },
    ],
  },

  additional: {
    label: "The Toolkit",
    title: "Additional Skills",
    color: "ochre",

    skills: [
      {
        title: "Content Research",
        description: [
          "Researching topics, references, audiences, and relevant information before creating content.",
          "Focused on finding useful information and turning research into clear ideas.",
        ],
      },

      {
        title: "Content Writing & Scripting",
        description: [
          "Writing structured content and scripts with attention to clarity, flow, and audience.",
          "Comfortable developing ideas from research into engaging written formats.",
        ],
      },

      {
        title: "Social Media Strategy",
        description: [
          "Understanding content planning, audience engagement, and platform-specific communication.",
          "Focused on creating consistent content strategies around a clear purpose.",
        ],
      },

      {
        title: "Affiliate Marketing Fundamentals",
        description: [
          "Understanding the basic workflow behind affiliate marketing and promotional content.",
          "Familiar with links, product-focused content, audience intent, and conversion fundamentals.",
        ],
      },

      {
        title: "Print-on-Demand Workflow",
        description: [
          "Understanding the basic process of creating, preparing, and publishing print-on-demand products.",
          "Combining design, product presentation, and digital workflow concepts.",
        ],
      },
    ],
  },
};


/* =========================================================
   LANGUAGE DATA
========================================================= */

const LANGUAGE_GROUPS: Record<
  Extract<
    SkillGroup,
    "programming" | "computerScience" | "vibeCoding"
  >,
  SkillGroupData
> = {
  programming: {
    label: "Programming Languages",
    title: "Programming Languages",
    color: "brown",

    skills: [
      {
        title: "HTML5",
        description: [
          "Comfortable building structured web pages using modern HTML5 elements.",
          "Focused on clean structure, accessibility, and maintainable markup.",
        ],
      },

      {
        title: "CSS3",
        description: [
          "Using CSS3 to create responsive layouts, visual systems, animations, and polished interfaces.",
          "Comfortable with Flexbox, Grid, positioning, transitions, and responsive design.",
        ],
      },

      {
        title: "JavaScript (Basic)",
        description: [
          "Understanding the fundamentals of JavaScript and its role in creating interactive web experiences.",
          "Comfortable working with variables, functions, events, arrays, and basic DOM interactions.",
        ],
      },

      {
        title: "C",
        description: [
          "Familiar with the fundamentals of C programming and procedural programming concepts.",
          "Understanding variables, functions, control flow, arrays, and basic memory concepts.",
        ],
      },

      {
        title: "C++",
        description: [
          "Familiar with C++ fundamentals and object-oriented programming concepts.",
          "Used for understanding programming logic, data structures, and problem-solving.",
        ],
      },

      {
        title: "Java (Basic)",
        description: [
          "Understanding the fundamentals of Java and basic object-oriented programming.",
          "Comfortable with classes, objects, methods, variables, and basic program structure.",
        ],
      },

      {
        title: "React (Basic–Moderate)",
        description: [
          "Building interfaces using React components and modern component-based patterns.",
          "Familiar with props, state, hooks, reusable components, and interactive UI development.",
        ],
      },
    ],
  },

  computerScience: {
    label: "Computer Science",
    title: "Database & Computer Science",
    color: "green",

    skills: [
      {
        title: "DBMS",
        description: [
          "Understanding database management concepts and how structured data is stored and accessed.",
          "Familiar with fundamental database concepts, queries, tables, and relationships.",
        ],
      },

      {
        title: "Data Structures",
        description: [
          "Understanding fundamental data structures used to organize and process information.",
          "Familiar with concepts such as arrays, linked structures, stacks, queues, and trees.",
        ],
      },

      {
        title: "File Structures",
        description: [
          "Understanding how information can be organized and managed through file-based structures.",
          "Familiar with fundamental concepts related to storing and accessing structured data.",
        ],
      },

      {
        title: "Object-Oriented Programming",
        description: [
          "Understanding the basic principles behind object-oriented programming.",
          "Familiar with concepts such as classes, objects, inheritance, encapsulation, and polymorphism.",
        ],
      },
    ],
  },

  vibeCoding: {
    label: "Vibe Coding Toolkit",
    title: "Vibe Coding Toolkit",
    color: "ochre",

    skills: [
      {
        title: "Next.js",
        description: [
          "Using Next.js to build modern React-based web applications and portfolio experiences.",
          "Familiar with its application structure, routing, components, and modern development workflow.",
        ],
      },

      {
        title: "Node.js",
        description: [
          "Using Node.js as part of modern web development workflows.",
          "Familiar with its role in running JavaScript outside the browser and supporting web applications.",
        ],
      },

      {
        title: "Tailwind CSS",
        description: [
          "Using utility-first CSS to rapidly build responsive and polished interfaces.",
          "Comfortable combining utility classes to create consistent layouts and visual systems.",
        ],
      },

      {
        title: "Oracle",
        description: [
          "Familiar with Oracle database technologies and their role in managing structured data.",
          "Understanding fundamental database concepts and workflows.",
        ],
      },

      {
        title: "Python",
        description: [
          "Using Python for programming, experimentation, scripting, and general development tasks.",
          "Comfortable working with Python fundamentals and using it as part of development workflows.",
        ],
      },

      {
        title: "Docker",
        description: [
          "Understanding the fundamentals of containerized development and application environments.",
          "Familiar with the role Docker can play in creating consistent development workflows.",
        ],
      },

      {
        title: "Vue",
        description: [
          "Exploring Vue as a component-based JavaScript framework for building interactive interfaces.",
          "Familiar with its general component and reactive development approach.",
        ],
      },

      {
        title: "TypeScript",
        description: [
          "Using TypeScript to add stronger typing and structure to JavaScript applications.",
          "Familiar with typed props, interfaces, types, and safer component development.",
        ],
      },
    ],
  },
};


/* =========================================================
   GROUP ORDER
========================================================= */

const SKILLS_ORDER: SkillGroup[] = [
  "web",
  "soft",
  "additional",
];

const LANGUAGES_ORDER: SkillGroup[] = [
  "programming",
  "computerScience",
  "vibeCoding",
];


/* =========================================================
   ALL GROUPS
========================================================= */

const ALL_GROUPS: Record<SkillGroup, SkillGroupData> = {
  ...SKILL_GROUPS,
  ...LANGUAGE_GROUPS,
};


/* =========================================================
   COMPONENT
========================================================= */

const TechStack: React.FC = () => {
  const [expandedCategory, setExpandedCategory] =
    useState<MainCategory | null>(null);

  const [activeGroupIndex, setActiveGroupIndex] =
    useState(0);

  const [activeSkillIndex, setActiveSkillIndex] =
    useState(0);

  const [isChangingSkill, setIsChangingSkill] =
    useState(false);

  /* =========================================================
     CURRENT GROUP ORDER
  ========================================================= */

  const activeGroupOrder =
    expandedCategory === "languages"
      ? LANGUAGES_ORDER
      : SKILLS_ORDER;

  const activeGroup =
    activeGroupOrder[activeGroupIndex];

  const activeGroupData =
    ALL_GROUPS[activeGroup];

  const activeSkills =
    activeGroupData.skills;

  const currentSkill =
    activeSkills[activeSkillIndex];

  const nextSkillIndex =
    (activeSkillIndex + 1) %
    activeSkills.length;

  const nextSkillItem =
    activeSkills[nextSkillIndex];


  /* =========================================================
     OPEN CATEGORY
  ========================================================= */

  const openCategory = (
    category: MainCategory
  ) => {
    setExpandedCategory(category);

    setActiveGroupIndex(0);

    setActiveSkillIndex(0);

    setIsChangingSkill(false);
  };


  /* =========================================================
     NEXT SKILL
     
     The animation is intentionally divided into:
     
     1. Active card exits left.
     2. Next card moves left into active position.
     3. State changes after animation.
     
     This prevents the old snapping/jumping behaviour.
  ========================================================= */

  const nextSkill = () => {
    if (isChangingSkill) return;

    setIsChangingSkill(true);

    window.setTimeout(() => {
      const nextIndex =
        activeSkillIndex + 1;

      if (
        nextIndex >= activeSkills.length
      ) {
        const nextGroupIndex =
          (activeGroupIndex + 1) %
          activeGroupOrder.length;

        setActiveGroupIndex(
          nextGroupIndex
        );

        setActiveSkillIndex(0);
      } else {
        setActiveSkillIndex(nextIndex);
      }

      setIsChangingSkill(false);
    }, 500);
  };


  /* =========================================================
     AUTO ROTATION
  ========================================================= */

  useEffect(() => {
    if (!expandedCategory) return;

    const timer =
      window.setInterval(() => {
        nextSkill();
      }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    expandedCategory,
    activeGroupIndex,
    activeSkillIndex,
    isChangingSkill,
  ]);


  /* =========================================================
     CLOSE
  ========================================================= */

  const closeExpanded = () => {
    setExpandedCategory(null);

    setActiveGroupIndex(0);

    setActiveSkillIndex(0);

    setIsChangingSkill(false);
  };


  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section
      id="skills"
      className="skills-section"
    >

      {/* =====================================================
          LANDING PAGE
      ===================================================== */}

      <div
        className={`skills-landing ${
          expandedCategory
            ? "skills-landing--hidden"
            : ""
        }`}
      >

        <div className="skills-overlay" />

        <div className="skills-landing-content">

          <div className="skills-choice-grid">

            {/* =================================================
                SKILLS CARD
            ================================================= */}

            <button
              type="button"
              className="skills-choice-card"
              onClick={() =>
                openCategory("skills")
              }
            >
              <span className="skills-choice-title">
                Skills
              </span>
            </button>


            {/* =================================================
                LANGUAGES CARD
            ================================================= */}

            <button
              type="button"
              className="skills-choice-card"
              onClick={() =>
                openCategory("languages")
              }
            >
              <span className="skills-choice-title">
                Languages
              </span>
            </button>

          </div>


          <p className="skills-click-note">
            Click cards to know more
          </p>

        </div>

      </div>


      {/* =====================================================
          EXPANDED PAGE
      ===================================================== */}

      {expandedCategory &&
        activeGroupData &&
        currentSkill && (
          <div
            className={`skills-expanded ${
              activeGroupData.color === "green"
                ? "skills-expanded--soft"
                : activeGroupData.color === "ochre"
                  ? "skills-expanded--additional"
                  : "skills-expanded--web"
            } ${
              expandedCategory === "languages"
                ? "skills-expanded--languages"
                : ""
            }`}
          >

            <div className="skills-expanded-inner">


              {/* =============================================
                  LEFT CONTENT
              ============================================= */}

              <div className="skills-category-copy">

                <span
                  className={`skills-category-label ${
                    activeGroupData.color ===
                    "ochre"
                      ? "skills-category-label--ochre"
                      : ""
                  }`}
                >
                  {activeGroupData.label}
                </span>


                <h2
                  className={
                    activeGroupData.color ===
                    "ochre"
                      ? "skills-heading--ochre"
                      : ""
                  }
                >
                  {activeGroupData.title}
                </h2>


                <div
                  key={`${activeGroup}-${activeSkillIndex}`}
                  className={`skills-description ${
                    isChangingSkill
                      ? "skills-description--changing"
                      : ""
                  }`}
                >

                  <span className="skills-description-number">
                    {String(
                      activeSkillIndex + 1
                    ).padStart(2, "0")}
                  </span>


                  <ul>
                    {currentSkill.description.map(
                      (
                        point,
                        index
                      ) => (
                        <li key={index}>
                          {point}
                        </li>
                      )
                    )}
                  </ul>

                </div>

              </div>


              {/* =============================================
                  CARD STACK
              ============================================= */}

              <div className="skill-stack-area">


                {/* =========================================
                    NEXT CARD
                ========================================= */}

                <button
                  type="button"
                  className={`skill-stack-card skill-stack-card--next ${
                    isChangingSkill
                      ? "skill-stack-card--moving"
                      : ""
                  }`}
                  onClick={nextSkill}
                  aria-label={`View ${nextSkillItem.title}`}
                >
                  <span>
                    {nextSkillItem.title}
                  </span>
                </button>


                {/* =========================================
                    ACTIVE CARD
                ========================================= */}

                <button
                  type="button"
                  className={`skill-stack-card skill-stack-card--active ${
                    isChangingSkill
                      ? "skill-stack-card--leaving"
                      : ""
                  }`}
                  onClick={nextSkill}
                  aria-label={`Next skill after ${currentSkill.title}`}
                >
                  <span>
                    {currentSkill.title}
                  </span>
                </button>

              </div>


              {/* =============================================
                  PROGRESS
              ============================================= */}

              <div className="skills-progress">

                <span>
                  {String(
                    activeSkillIndex + 1
                  ).padStart(2, "0")}
                </span>


                <div className="skills-progress-line">

                  <div
                    className="skills-progress-fill"
                    style={{
                      width: `${
                        ((activeSkillIndex + 1) /
                          activeSkills.length) *
                        100
                      }%`,
                    }}
                  />

                </div>


                <span>
                  {String(
                    activeSkills.length
                  ).padStart(2, "0")}
                </span>

              </div>


              {/* =============================================
                  BACK BUTTON
              ============================================= */}

              <button
                type="button"
                className="skills-back-button"
                onClick={closeExpanded}
              >
                ← back to section
              </button>

            </div>

          </div>
        )}

    </section>
  );
};

export default TechStack;
