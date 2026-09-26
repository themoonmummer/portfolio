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
    id: "art-mail-club",
    demoUrl: "https://art-mail-club.vercel.app/",
    title: "Art Mail Club",
    subtitle: "Currently Passing",
    category: "E-Commerce / Art",
    description: "Curated art drops and mail club experience with seamless checkout.",
    longDescription: "Art Mail Club brings limited edition prints and community curation into a fast, tactile shop.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop",
    alt: "Art Mail Club website preview",
    caseStudy: {
      overview: "Subscription art platform with drop culture.",
      challenge: "High image load with smooth browsing.",
      solution: "Optimized gallery with lazy loading and glass UI.",
      metrics: [
        { label: "Load Time", value: "<1.2s" },
        { label: "Conversion", value: "+18%" },
        { label: "Render", value: "<16ms" }
      ],
      techUsed: ["Next.js", "Tailwind CSS", "Vercel"]
    }
  },
  {
    id: "thetechartist",
    demoUrl: "https://thetechartist-website.vercel.app/",
    title: "The Tech Artist",
    subtitle: "Next Station",
    category: "Portfolio / Creative",
    description: "Portfolio for a tech-artist merging code, visuals and interaction.",
    longDescription: "A creative portfolio showcasing experimental works and case studies.",
    tags: ["React", "Framer Motion", "Three.js"],
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1200&auto=format&fit=crop",
    alt: "The Tech Artist website preview",
    caseStudy: {
      overview: "Artist portfolio with immersive visuals.",
      challenge: "Balancing motion with performance.",
      solution: "GPU accelerated layers and code-split routes.",
      metrics: [
        { label: "LCP", value: "1.4s" },
        { label: "Engagement", value: "+42%" },
        { label: "FPS", value: "60" }
      ],
      techUsed: ["React", "Three.js", "Framer Motion"]
    }
  },
  {
    id: "wtsp",
    demoUrl: "https://wtsp-mbkrclb9i-moonlab1.vercel.app/",
    title: "WTSP Studio",
    subtitle: "In Transit",
    category: "Landing / Studio",
    description: "Studio landing with bold type and smooth scroll storytelling.",
    longDescription: "A studio site focused on conversion through narrative scroll.",
    tags: ["Next.js", "Tailwind CSS", "Motion"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    alt: "WTSP website preview",
    caseStudy: {
      overview: "Studio marketing site.",
      challenge: "Storytelling without heavy JS.",
      solution: "Intersection observers and optimized fonts.",
      metrics: [
        { label: "Bounce", value: "-22%" },
        { label: "SEO", value: "98" },
        { label: "TTI", value: "1.1s" }
      ],
      techUsed: ["Next.js", "Tailwind", "Vercel"]
    }
  },
  {
    id: "emilyartshop",
    demoUrl: "https://emilyartshop.vercel.app/",
    title: "Emily Art Shop",
    subtitle: "Approaching",
    category: "E-Commerce / Boutique",
    description: "Boutique art shop with delicate curation and soft commerce flow.",
    longDescription: "Emily Art Shop focuses on handcrafted pieces with intimate product storytelling.",
    tags: ["React", "Tailwind CSS", "Stripe"],
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    alt: "Emily Art Shop website preview",
    caseStudy: {
      overview: "Boutique shop for art products.",
      challenge: "Emotional purchase journey.",
      solution: "Soft micro-interactions and fast cart.",
      metrics: [
        { label: "AOV", value: "+15%" },
        { label: "Cart", value: "92%" },
        { label: "Perf", value: "96" }
      ],
      techUsed: ["Next.js", "Stripe", "Tailwind"]
    }
  },
  {
    id: "lunacalmstudio",
    demoUrl: "https://lunacalmstudio.vercel.app/",
    title: "Luna Calm Studio",
    subtitle: "Coastal View",
    category: "Wellness / Brand",
    description: "Calm studio brand with serene palettes and breathing space.",
    longDescription: "Luna Calm Studio embodies mindfulness through whitespace and gentle motion.",
    tags: ["React", "Next.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    alt: "Luna Calm Studio website preview",
    caseStudy: {
      overview: "Wellness brand site.",
      challenge: "Calm without being empty.",
      solution: "Airy grid and subtle shaders.",
      metrics: [
        { label: "Dwell", value: "+31%" },
        { label: "Return", value: "88%" },
        { label: "CLS", value: "0.02" }
      ],
      techUsed: ["React", "Tailwind", "Framer Motion"]
    }
  },
  {
    id: "house-of-tasya",
    demoUrl: "https://house-of-tasya.vercel.app/",
    title: "House of Tasya",
    subtitle: "Ocean Window",
    category: "Fashion / Lifestyle",
    description: "House of Tasya — refined fashion house with editorial elegance.",
    longDescription: "A fashion e-commerce experience with lookbooks, story and boutique checkout.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    alt: "House of Tasya website preview",
    caseStudy: {
      overview: "Fashion house e-commerce.",
      challenge: "Editorial feel with fast shop.",
      solution: "Lookbook + headless commerce.",
      metrics: [
        { label: "Speed", value: "1.3s" },
        { label: "CR", value: "+19%" },
        { label: "Perf", value: "97" }
      ],
      techUsed: ["Next.js", "Tailwind", "Vercel"]
    }
  },
  {
    id: "silver-shades",
    demoUrl: "https://silver-shades.vercel.app/",
    title: "Silver Shades",
    subtitle: "Harbour Light",
    category: "Jewelry / Luxury",
    description: "Silver Shades — luxury silver jewelry with minimal, reflective UI.",
    longDescription: "High-end jewelry store with macro imagery and quiet luxury.",
    tags: ["React", "Next.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    alt: "Silver Shades website preview",
    caseStudy: {
      overview: "Luxury jewelry e-commerce.",
      challenge: "Showcase shine without glare.",
      solution: "Soft lightbox and 3D hover.",
      metrics: [
        { label: "Zoom", value: "4K" },
        { label: "Engage", value: "+28%" },
        { label: "LCP", value: "1.2s" }
      ],
      techUsed: ["React", "Tailwind", "Three.js"]
    }
  },
  {
    id: "ecommerce-demo",
    demoUrl: "https://ecommerce-demo-liart-iota.vercel.app/",
    title: "E-Commerce Demo",
    subtitle: "Next Departure",
    category: "E-Commerce / Demo",
    description: "Full-stack e-commerce demo with cart, filters and checkout.",
    longDescription: "A demo store covering catalog, search and conversion funnels.",
    tags: ["React", "Next.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    alt: "E-Commerce demo website preview",
    caseStudy: {
      overview: "Demo commerce platform.",
      challenge: "Complex flows simple.",
      solution: "Clean state and optimistic cart.",
      metrics: [
        { label: "Flow", value: "3 steps" },
        { label: "Perf", value: "98" },
        { label: "Cart", value: "94%" }
      ],
      techUsed: ["Next.js", "TypeScript", "Tailwind"]
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
