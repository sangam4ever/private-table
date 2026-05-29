export function getServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://privatetablebysanjay.com#services',
    name: 'Private Chef Services',
    description: 'Professional private chef and catering services in Sydney',
    provider: {
      '@type': 'LocalBusiness',
      name: 'The Private Table by Sanjay',
      url: 'https://privatetablebysanjay.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Sydney',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Private Chef Services Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Personal Private Chef Services',
            description: 'Bespoke meal preparation in your home with customized menus',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Private Dining Experiences',
            description: 'Curated culinary experiences for intimate gatherings',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Event Catering',
            description: 'Full-service catering for special events and celebrations',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Outdoor & Garden Events',
            description: 'Fine dining catering for outdoor venues and garden parties',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate & Executive Dining',
            description: 'Professional catering for business events and corporate functions',
          },
        },
      ],
    },
  };
}
