'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';

const services = [
  {
    id: 'private-chef',
    title: 'Personal Private Chef Services',
    description: 'A dedicated chef who comes to your home to prepare customized meals. Perfect for busy professionals, families, and anyone seeking restaurant-quality cuisine without leaving home.',
    details: [
      'Bespoke menus tailored to your preferences',
      'Dietary requirements accommodation (vegan, gluten-free, allergies)',
      'Weekly meal planning and grocery sourcing',
      'Full kitchen cleanup included',
      'Flexible scheduling (weekly, bi-weekly, or monthly)',
    ],
    ideal: 'Busy professionals, families, health-conscious individuals',
  },
  {
    id: 'private-dining',
    title: 'Private Dining Experiences',
    description: 'Intimate culinary experiences designed for special occasions. From romantic dinners to milestone celebrations, we create unforgettable moments through exceptional cuisine and presentation.',
    details: [
      'Customized multi-course menus',
      'Elegant table settings and plating',
      'Professional service and ambiance',
      'Wine pairing recommendations',
      '2-4 guests (intimate gatherings)',
      'Your home or private venue',
    ],
    ideal: 'Romantic dinners, anniversaries, engagements, intimate celebrations',
  },
  {
    id: 'event-catering',
    title: 'Luxury Event Catering',
    description: 'Full-service catering for your special events. From intimate soirées to grand celebrations, we handle menu design, food preparation, presentation, and service excellence.',
    details: [
      'Complete event coordination',
      'Menu customization for any cuisine',
      'Professional staff and service',
      'Setup and full kitchen cleanup',
      'Flexible guest count (6-30+ people)',
      'Outdoor and indoor events',
    ],
    ideal: 'Weddings, corporate events, celebrations, milestone gatherings',
  },
  {
    id: 'outdoor-catering',
    title: 'Outdoor & Garden Events',
    description: 'Bring fine dining to your outdoor space. We prepare Michelin-calibre cuisine for garden parties, BBQs, picnics, and outdoor celebrations with full setup and service.',
    details: [
      'Outdoor kitchen setup and management',
      'BBQ, breakfast, lunch, or dinner menus',
      'Weather-adaptable service',
      'Full event coordination',
      'Flexible guest count (4-50+ people)',
      'Bring your own ingredients option available',
    ],
    ideal: 'Garden parties, outdoor celebrations, picnics, BBQs, festivals',
  },
  {
    id: 'corporate-dining',
    title: 'Corporate & Executive Dining',
    description: 'Professional dining experiences for corporate events, executive meetings, and business entertainment. Impress clients and employees with exceptional culinary excellence.',
    details: [
      'Customized corporate menus',
      'Executive lunch and dinner service',
      'Professional presentation and etiquette',
      'Wine and beverage coordination',
      'Scalable for small to large groups',
      'Venue management included',
    ],
    ideal: 'Corporate events, business meetings, client entertainment, team gatherings',
  },
];

export function Services() {
  return (
    <section id="services" className="relative w-full py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Services"
          subtitle="Comprehensive Culinary Solutions for Every Occasion"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 pl-6 md:pl-8 py-6"
              style={{ borderColor: '#c9a84c' }}
            >
              <h3
                className="text-2xl md:text-3xl font-light mb-3"
                style={{ color: '#c9a84c' }}
              >
                {service.title}
              </h3>
              <p className="text-base md:text-lg mb-6" style={{ color: '#d9d3c7' }}>
                {service.description}
              </p>

              <div className="mb-6">
                <p
                  className="text-sm font-semibold mb-3 uppercase tracking-wide"
                  style={{ color: '#c9a84c' }}
                >
                  What's Included
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-sm flex items-start gap-3">
                      <span style={{ color: '#c9a84c' }}>✓</span>
                      <span style={{ color: '#f5f0e8' }}>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm italic" style={{ color: '#a89968' }}>
                <strong>Ideal for:</strong> {service.ideal}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 border-2 rounded-lg"
          style={{ borderColor: '#c9a84c', backgroundColor: 'rgba(201, 168, 76, 0.05)' }}
        >
          <h3
            className="text-2xl font-light mb-4"
            style={{ color: '#c9a84c' }}
          >
            Custom Solutions
          </h3>
          <p style={{ color: '#f5f0e8' }}>
            Every service can be customized to meet your specific needs. Whether you require dietary accommodations, specific cuisines, or unique event requirements, we tailor our services to exceed your expectations.
          </p>
          <p className="mt-6 text-sm" style={{ color: '#a89968' }}>
            Ready to experience exceptional culinary excellence? <strong>Contact us today</strong> to discuss your requirements and create the perfect dining experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
