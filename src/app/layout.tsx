import type { Metadata } from 'next';
import { cormorantGaramond, jost } from '@/lib/fonts';
import { LenisProvider } from '@/lib/lenis';
import { getFaqSchema } from '@/lib/faq-schema';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://privatetablebysanjay.com'),
  title: 'Private Chef Sydney | Luxury Private Dining by Sanjay',
  description:
    'Michelin-calibre private chef services in Sydney. Bespoke culinary experiences prepared in the privacy of your home. Luxury private dining for intimate gatherings, special events, and corporate functions.',
  keywords: [
    'private chef Sydney',
    'private chef',
    'luxury private chef Sydney',
    'private dining Sydney',
    'personal chef Sydney',
    'bespoke private dining',
    'Michelin-trained chef',
    'luxury dining experience',
    'private table Sydney',
    'executive chef Sydney',
    'private catering Sydney',
  ],
  authors: [{ name: 'The Private Table by Sanjay' }],
  openGraph: {
    title: 'Private Chef Sydney | The Private Table by Sanjay',
    description:
      'Luxury private chef services in Sydney. Michelin-calibre cuisine prepared exclusively in your home. Bespoke private dining experiences.',
    url: 'https://privatetablebysanjay.com',
    type: 'website',
    images: [
      {
        url: '/images/dining-scene.png',
        width: 1200,
        height: 630,
        alt: 'Private Chef Sydney - The Private Table by Sanjay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Chef Sydney | Luxury Private Dining',
    description: 'Michelin-trained private chef in Sydney. Bespoke culinary experiences in the privacy of your home.',
    images: ['/images/dining-scene.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchema = getFaqSchema();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://privatetablebysanjay.com',
    name: 'The Private Table by Sanjay',
    alternateName: 'Private Chef Sydney',
    description: 'Luxury Michelin-trained private chef service offering bespoke culinary experiences in Sydney',
    url: 'https://privatetablebysanjay.com',
    telephone: '+61',
    email: 'info@privatetablebysanjay.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sydney',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      postalCode: '',
      addressCountry: 'AU',
    },
    image: 'https://privatetablebysanjay.com/images/logo.png',
    priceRange: '£££',
    areaServed: [
      {
        '@type': 'City',
        name: 'Sydney',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'New South Wales',
      },
      {
        '@type': 'Country',
        name: 'Australia',
      },
    ],
    serviceType: [
      'Private Chef Services',
      'Private Dining',
      'Bespoke Catering',
      'Event Catering',
      'Executive Dining',
    ],
    knowsAbout: [
      'Michelin-calibre cuisine',
      'Private dining',
      'Bespoke menus',
      'Luxury catering',
      'Outdoor events',
      'Corporate dining',
      'Private events Sydney',
    ],
    sameAs: [
      'https://facebook.com/privatetablebysanjay',
      'https://instagram.com/privatetablebysanjay',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '24',
    },
  };

  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${jost.variable} scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-obsidian text-ivory antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
