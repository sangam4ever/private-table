import type { Metadata } from 'next';
import { experiences } from '@/data/experiences';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const experience = experiences.find((e) => e.id === resolvedParams.slug);

  if (!experience) {
    return {
      title: 'Experience Not Found | The Private Table',
      description: 'The requested experience could not be found.',
    };
  }

  const baseUrl = 'https://privatetablebysanjay.com';
  const experienceUrl = `${baseUrl}/experience/${experience.id}`;

  const descriptionMap: Record<string, string> = {
    intimate: 'An exclusive culinary experience for 2-4 guests. Michelin-calibre cuisine crafted personally for intimate gatherings. Perfect for romantic dinners and special celebrations.',
    soiree: 'A sophisticated multi-course journey for 6-12 guests. Experience Michelin-calibre techniques with artistic plating and impeccable service for your special occasion.',
    grand: 'Your milestone deserves the finest. Full event coordination with bespoke menus and professional service for 12-30 guests. From rehearsal dinners to lavish celebrations.',
    outdoor: 'Flexible outdoor culinary experiences for 4-50+ guests. Bring your own ingredients or let us source them. BBQ, breakfast, lunch, or dinner—fully customized to your needs.',
  };

  return {
    title: `${experience.title} | The Private Table by Sanjay`,
    description: descriptionMap[experience.id] || experience.description,
    keywords: [
      experience.title,
      'private chef',
      'luxury dining',
      'private dining experience',
      'Michelin chef',
      'London',
      'bespoke menu',
    ],
    openGraph: {
      title: experience.title,
      description: descriptionMap[experience.id] || experience.description,
      url: experienceUrl,
      type: 'website',
      images: [
        {
          url: `${baseUrl}${experience.imageSrc}`,
          width: 1200,
          height: 630,
          alt: experience.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: experience.title,
      description: descriptionMap[experience.id] || experience.description,
      images: [`${baseUrl}${experience.imageSrc}`],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
