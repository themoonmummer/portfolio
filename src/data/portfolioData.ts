import { Project, TechItem, PhilosophyCard } from '../types';

export const HERO_DATA = {
  badge: "AVAILABLE FOR CRAFTING",
  title: "Digital Experiences",
  subtitle: "In the Light of Discovery",
  description: "Merging high-fidelity craftsmanship with ethereal aesthetics to build digital sanctuaries that breathe, react, and resonate.",
  bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0X-6vAzehh6MDB4lXXtPswQ7aWfbAButvmkW5tE995PVtjqO09Dos6y61VwcvEAjj-M0St6SiNhgUyiuGewrX9_uClZgWVD771r-BV-If1EINUUUIq_SnQDNLXamVpzoXir7Ics-eXnfeAIxXqEvQn76t5VqDkBvprOGtF9pGVlOWh-iSwUKbxMCDSNAzSkeSRhEKb9pAar5VUBt2XI3RccipA76eG7T3WcOTESbrTEeCQJ4gPyxJdTgErgFnsna1hA"
};

export const PROJECTS: Project[] = [
  {
    id: "neo-zen",
    demoUrl: "", // TODO: paste your Vercel URL here
    videoSrc: "", // TODO: e.g. "/videos/neo-zen.mp4"
    title: "Neo-Zen Dashboard",
    subtitle: "Currently Passing",
    category: "Productivity System",
    description: "A productivity hub inspired by Japanese minimalism and the rhythm of urban Tokyo.",
    longDescription: "Neo-Zen Dashboard integrates ambient pomodoro timing, kanban flows, and task analytics into a single translucent, glassmorphic layout.",
    tags: ["React", "Three.js", "Tailwind CSS", "Motion"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJfDRDA_T6joCTLyrCbfSs8J4u3D6zEyGoSDg_afim2PGvkOrNl_Z9ETjXjlUaBU3TeJW8mhWstuPFzcw2Zj-4bmBBaIXZQRqGm7oZSMh-0uOufDxshCO2TLnrNqUV01qWX-lVbuiiZLRAKehvN03cj1UgrA4xPhnNnO-mCevHpIyNu1OO-GMxBYT_CwlFiMLvOwYf71Ms7zXPyZKERNHv5Zv96x8-X6Yt0vfgIabzqZIXkq5pfFbs",
    alt: "High-fidelity UI showing a minimalist zen dashboard with soft pink glass widgets and a tranquil mountain landscape background.",
    caseStudy: {
      overview: "Designed for modern remote professionals who seek calm focus amid high-volume task orchestration.",
      challenge: "Standard dashboards induce cognitive fatigue through intense visual noise and harsh dark contrast.",
      solution: "Engineered a soft glassmorphic visual tier using Japanese typography hierarchy, ambient lighting, and spring physics animations.",
      metrics: [
        { label: "Focus Duration", value: "+42%" },
        { label: "Task Satisfaction", value: "98%" },
        { label: "Render Time", value: "<16ms" }
      ],
      techUsed: ["React 19", "Three.js", "Tailwind CSS v4", "Framer Motion", "TypeScript"]
    }
  },
  {
    id: "sakura-flow",
    demoUrl: "", // TODO: paste your Vercel URL here
    videoSrc: "", // TODO: e.g. "/videos/sakura-flow.mp4"
    title: "Sakura Flow Wellness",
    subtitle: "Next Destination",
    category: "Health & Mindfulness",
    description: "A wellness application focusing on meditation cycles, diaphragmatic breathing, and serene audio synthesis.",
    longDescription: "Features real-time biometrics rendering through fluid SVG shaders and generative calming ambient sounds.",
    tags: ["React", "Web Audio API", "Framer Motion", "WebGL"],
    image: "https://images.unsplash.com/photo-1528164344705-475426879e0d?q=80&w=1200&auto=format&fit=crop",
    alt: "Mobile application interface for wellness, featuring organic fluid shapes in lavender and pink hues, high-translucency glass buttons, and elegant typography.",
    caseStudy: {
      overview: "Combining breathing exercises with visual feedback loops for stress relief.",
      challenge: "Creating smooth 60fps organic wave render loops on mobile browsers without draining battery.",
      solution: "Utilized lightweight custom Canvas WebGL shaders wrapped in React hooks with hardware acceleration.",
      metrics: [
        { label: "Daily Active Users", value: "120K+" },
        { label: "Session Completion", value: "89%" },
        { label: "App Rating", value: "4.9/5" }
      ],
      techUsed: ["React", "WebGL", "Tailwind CSS", "Canvas API", "AudioContext"]
    }
  },
  {
    id: "komorebi-analytics",
    demoUrl: "", // TODO: paste your Vercel URL here
    videoSrc: "", // TODO: e.g. "/videos/komorebi-analytics.mp4"
    title: "Komorebi Financial Hub",
    subtitle: "In Transit",
    category: "Fintech Platform",
    description: "Ethereal wealth tracking suite turning complex financial telemetry into crystal-clear visual stories.",
    longDescription: "An elegant portfolio suite designed for high-net-worth individual management with real-time currency conversion and asset allocation visualizers.",
    tags: ["TypeScript", "Recharts", "D3.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    alt: "Financial analytics platform with glass cards, pink gradient line charts, and high contrast typography.",
    caseStudy: {
      overview: "Simplifying dense financial data through airy layouts and high-legibility typographic scales.",
      challenge: "Rendering thousands of dynamic market data points while preserving gentle visual aesthetic.",
      solution: "Virtualized chart series paired with glass-backed tooltip popovers.",
      metrics: [
        { label: "Data Throughput", value: "10k/sec" },
        { label: "Latency", value: "<12ms" },
        { label: "User Retention", value: "94%" }
      ],
      techUsed: ["React", "TypeScript", "D3.js", "Recharts", "Tailwind CSS"]
    }
  }
];

export const TECH_STACK: TechItem[] = [
  {
    id: "react",
    name: "React 19 & Next.js",
    category: "Core Architecture",
    role: "Interface Architecture",
    description: "Leveraging React and Tailwind CSS to build fluid, high-performance interfaces that don't just work—they feel like natural extensions of the user's intent.",
    iconName: "code",
    proficiency: 98,
    highlightColor: "sunset-glow"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS v4",
    category: "Design System",
    role: "Utility Design Systems",
    description: "Crafting bespoke glassmorphism component libraries, custom typography scale models, and dark/light mode balance.",
    iconName: "brush",
    proficiency: 95,
    highlightColor: "bg-[#d6beff]"
  },
  {
    id: "motion",
    name: "Motion & Three.js",
    category: "Interactivity",
    role: "3D & Micro-Interactions",
    description: "Crafting immersive 3D experiences with Three.js and sophisticated micro-animations for spring-driven user feedback.",
    iconName: "auto_awesome",
    proficiency: 90,
    highlightColor: "bg-[#ffafd5]"
  },
  {
    id: "typescript",
    name: "TypeScript & State",
    category: "System Logic",
    role: "Strict Type Safety",
    description: "Engineering scalable frontend data models, predictable state engines, and zero-runtime type guarantees.",
    iconName: "terminal",
    proficiency: 96,
    highlightColor: "bg-[#70c3e8]"
  }
];

export const ABOUT_DATA = {
  title: "Finding Zen in the",
  highlightTitle: "Complex",
  p1: "My journey in digital design is much like a stroll through a Japanese garden—finding balance between technical precision and organic beauty. I specialize in turning complex data and convoluted user flows into serene, high-performance applications.",
  p2: "Based in the light of the digital sunrise, I focus on 'Komorebi'—the subtle moments of interaction that make an interface feel alive and intentional.",
  yearsCrafting: "08+",
  portraitImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNhqCOKK5P2dDVPFX7jAudlKKoVOtV-s3f1pHaWj9gTMbZBBnQxhI7q4MKZ6MvpNSxQ2v2MeEij6UcRRvtVw1SJZH9xzBZ2f4688Va18LjjUO4lEaudxblpoVnlWDd9khll78OvTdyaqT41Uk7U1shce0fZzQkxlVGH56bqxmSiI86lo-5yXkpfWdxOykzB95TwYMlXJBOZu9OmxBeCOXhyBJIk78BnMZOh3pnKiD4bwuewf1njaro",
  philosophies: [
    {
      icon: "auto_awesome",
      title: "Philosophy",
      subtitle: "Minimalism with Soul"
    },
    {
      icon: "location_on",
      title: "Location",
      subtitle: "Global / Remote"
    }
  ]
};

export const CONTACT_DATA = {
  title: "Let's Collaborate",
  subtitle: "Ready to bring ethereal digital craftsmanship to your next project?",
  bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbIDDweMjBtFScIIuLQKg-Vazy6wqjuYKkf9SuKMEb0Vz05Xixak6RZCCGX-y8FKbuNGd9M1NHoTBzfhysvmvjU8MkYZGva5_vFejoKA3mjcLTajr3kYVjCCDS98fVbUE1jJppJeNMf1pUCXkSSgpNBVub6nMRnUZzcGWSrIDDNoLMOEltYFZOZ7-GFUT4TPKSBQaIAt0Lvy6pvAAAuNffmk-lIBFBaBnpbJCW44TmdV9cQQ98zolz"
};
