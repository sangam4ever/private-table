import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'intimate',
    title: 'The Intimate Table',
    tagline: 'For the refined palate',
    description: 'An exclusive culinary experience designed for smaller gatherings. Sanjay crafts every element personally—from menu conception to presentation—ensuring an evening of uncompromising excellence.',
    guestCount: '2-4 Guests',
    duration: '3 Hours',
    imageSrc: '/images/intimate-table.png',
    imageAlt: 'Intimate dining setup',
  },
  {
    id: 'soiree',
    title: 'The Private Soirée',
    tagline: 'An unforgettable evening',
    description: 'A sophisticated multi-course journey for intimate groups. Each course is orchestrated with precision, combining Michelin-calibre techniques with seasonal ingredients and artistic plating.',
    guestCount: '6-12 Guests',
    duration: '4 Hours',
    imageSrc: '/images/soiree.png',
    imageAlt: 'Plated culinary creation',
  },
  {
    id: 'grand',
    title: 'The Grand Event',
    tagline: 'For memorable occasions',
    description: 'Your milestone deserves the finest. From intimate rehearsal dinners to lavish celebrations, Sanjay orchestrates every detail—a bespoke menu, elegant service, and an atmosphere of pure indulgence.',
    guestCount: '12-30 Guests',
    duration: '5+ Hours',
    imageSrc: '/images/grand-event.png',
    imageAlt: 'Grand event dining',
  },
  {
    id: 'outdoor',
    title: 'Outdoor Events',
    tagline: 'Flexible culinary experiences',
    description: 'Bring your own ingredients, or let us source them. BBQ, breakfast, lunch, dinner—whatever you envision. Full facilities and professional cooking. Everything else we can discuss and customize to your needs.',
    guestCount: '4-50+ Guests',
    duration: 'Customizable',
    imageSrc: '/images/outdoor-event.png',
    imageAlt: 'Outdoor event dining',
  },
];
