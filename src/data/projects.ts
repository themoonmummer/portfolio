export type Project = {
  id: string;
  title: string;
  description: string;
  videoSrc?: string;
  posterSrc?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    id: 'socialy',
    title: 'Socialy',
    description: 'A real-time social platform for creative communities.',
    posterSrc: '/images/projects/socialy.jpg',
    href: 'https://example.com/socialy',
  },
  {
    id: 'fluxmind',
    title: 'FluxMind',
    description: 'AI-powered journaling that surfaces hidden patterns.',
    posterSrc: '/images/projects/fluxmind.jpg',
  },
  {
    id: 'pixeltrail',
    title: 'PixelTrail',
    description: 'Collaborative whiteboard with infinite canvas sync.',
    posterSrc: '/images/projects/pixeltrail.jpg',
    href: 'https://example.com/pixeltrail',
  },
  {
    id: 'verdant',
    title: 'Verdant',
    description: 'Sustainability tracker for conscious everyday living.',
    posterSrc: '/images/projects/verdant.jpg',
  },
  {
    id: 'echovault',
    title: 'EchoVault',
    description: 'Voice-first knowledge base for distributed teams.',
    posterSrc: '/images/projects/echovault.jpg',
    href: 'https://example.com/echovault',
  },
];
