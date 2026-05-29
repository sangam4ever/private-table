export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a private chef in Sydney?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A private chef in Sydney is a professional culinary expert who prepares personalized meals in the privacy of your own home. The Private Table by Sanjay offers Michelin-calibre cuisine tailored to your preferences, dietary requirements, and occasion.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a private chef in Sydney cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Private chef services in Sydney vary based on the number of guests, menu complexity, and occasion. The Private Table by Sanjay offers luxury private dining experiences with bespoke pricing for intimate gatherings, corporate events, and special occasions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a private chef accommodate dietary restrictions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. The Private Table by Sanjay specializes in creating bespoke menus that accommodate all dietary requirements including vegetarian, vegan, gluten-free, and allergen-specific needs while maintaining Michelin-calibre quality.',
        },
      },
      {
        '@type': 'Question',
        name: 'What events can a private chef cater in Sydney?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Private Table by Sanjay caters for intimate dinners, private soirées, grand celebrations, outdoor events, corporate dining experiences, and special occasions throughout Sydney.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far in advance should I book a private chef in Sydney?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We recommend booking 2-4 weeks in advance to ensure availability and allow time to customize your culinary experience. However, rush bookings may be accommodated depending on the chef\'s schedule.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you serve specific cuisines?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Private Table by Sanjay specializes in contemporary fine dining with global influences. We create bespoke menus tailored to your preferences, whether you desire French, Italian, Asian fusion, or contemporary Australian cuisine.',
        },
      },
    ],
  };
}
