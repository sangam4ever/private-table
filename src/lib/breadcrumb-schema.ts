export function getBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://privatetablebysanjay.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://privatetablebysanjay.com#services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'FAQ',
        item: 'https://privatetablebysanjay.com#faq',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://privatetablebysanjay.com#inquiry',
      },
    ],
  };
}
