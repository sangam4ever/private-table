import type { Metadata } from 'next';
import { cormorantGaramond, jost } from '@/lib/fonts';
import { LenisProvider } from '@/lib/lenis';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://privatetablebysanjay.com'),
  title: 'The Private Table by Sanjay | Luxury Private Chef',
  description:
    'An intimate culinary experience crafted exclusively for you. Michelin-calibre cuisine, prepared in the privacy of your home. Private dining in London.',
  keywords: [
    'private chef',
    'luxury dining',
    'private dining experience',
    'bespoke menu',
    'Michelin chef',
    'London',
  ],
  authors: [{ name: 'The Private Table by Sanjay' }],
  openGraph: {
    title: 'The Private Table by Sanjay',
    description:
      'Michelin-calibre cuisine, crafted exclusively for you. Private dining experiences in London.',
    url: 'https://privatetablebysanjay.com',
    type: 'website',
    images: [
      {
        url: '/images/dining-scene.png',
        width: 1200,
        height: 630,
        alt: 'The Private Table by Sanjay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Private Table by Sanjay',
    description: 'Luxury private dining experiences in London',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'The Private Table by Sanjay',
    description: 'Luxury private chef services offering bespoke culinary experiences',
    url: 'https://privatetablebysanjay.com',
    telephone: '+44',
    email: 'inquiry@privatetablebysanjay.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'London',
      addressRegion: 'England',
      postalCode: '',
      addressCountry: 'GB',
    },
    image: 'https://privatetablebysanjay.com/images/logo.png',
    priceRange: '£££',
    areaServed: {
      '@type': 'City',
      name: 'London',
    },
    knowsAbout: [
      'Michelin-calibre cuisine',
      'Private dining',
      'Bespoke menus',
      'Luxury catering',
      'Outdoor events',
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${jost.variable} scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-obsidian text-ivory antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
