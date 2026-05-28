export interface Experience {
  id: string;
  title: string;
  tagline: string;
  description: string;
  guestCount: string;
  duration: string;
  imageSrc: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  occasion: string;
  location: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
}

export interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

export interface VideoBackgroundProps {
  src?: string;
  poster?: string;
  className?: string;
  overlayOpacity?: number;
  overlayColor?: string;
  playbackSpeed?: number;
}

export interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost' | 'outline';
  className?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
}
