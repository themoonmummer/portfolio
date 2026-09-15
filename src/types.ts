export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  alt: string;
  demoUrl?: string;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    metrics: { label: string; value: string }[];
    techUsed: string[];
  };
}

export interface TechItem {
  id: string;
  name: string;
  category: string;
  role: string;
  description: string;
  iconName: string;
  proficiency: number;
  highlightColor: string;
}

export interface PhilosophyCard {
  icon: string;
  title: string;
  subtitle: string;
}
