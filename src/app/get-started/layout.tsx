import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started | Book Your Private Chef - The Private Table by Sanjay',
  description:
    'Ready to book your luxury private chef experience in Sydney? Fill out our inquiry form and we\'ll create a personalized proposal within 24 hours.',
  keywords: [
    'book private chef Sydney',
    'private chef inquiry',
    'luxury dining booking',
    'get started private dining',
    'book event catering Sydney',
  ],
  openGraph: {
    title: 'Get Started with Your Private Chef Experience',
    description:
      'Submit your inquiry and let us create your perfect culinary experience.',
    url: 'https://privatetablebysanjay.com/get-started',
    type: 'website',
    images: [
      {
        url: '/images/dining-scene.png',
        width: 1200,
        height: 630,
        alt: 'Get Started - The Private Table by Sanjay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Started with Your Private Chef',
    description: 'Book your luxury private dining experience in Sydney',
    images: ['/images/dining-scene.png'],
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
