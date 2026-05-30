'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const faqs = [
  {
    question: 'How much does a private chef in Sydney cost?',
    answer: 'Private chef costs vary based on several factors including guest count, menu complexity, dietary requirements, and frequency of service. Typical pricing ranges from $150-300+ per person for dining events, or weekly meal prep services starting from $400-800/week. Contact us for a personalized quote.',
  },
  {
    question: 'Can you accommodate dietary restrictions and allergies?',
    answer: 'Absolutely! We specialize in creating bespoke menus that accommodate all dietary requirements including vegan, vegetarian, gluten-free, keto, paleo, and severe allergies. Your health and preferences are our priority.',
  },
  {
    question: 'How far in advance should I book a private chef?',
    answer: 'We recommend booking 2-4 weeks in advance to ensure availability and allow time for personalized menu planning. However, rush bookings may be accommodated depending on our schedule. Contact us to discuss your timeline.',
  },
  {
    question: 'What cuisines do you specialize in?',
    answer: 'We specialize in contemporary fine dining with global influences. Our chef creates bespoke menus tailored to your preferences—whether you desire French, Italian, Asian fusion, Mediterranean, contemporary Australian, or any other cuisine you love.',
  },
  {
    question: 'Do you provide your own ingredients?',
    answer: 'Yes, we source high-quality, often organic ingredients from trusted local suppliers. We handle all grocery shopping and preparation. For some outdoor events, you have the option to provide your own ingredients if preferred.',
  },
  {
    question: 'Can you cook in my home? What about equipment?',
    answer: 'Yes! We cook in your home using your existing kitchen equipment. We bring any specialized tools needed and ensure your kitchen is left spotless. We work with standard home kitchens as well as luxury setups.',
  },
  {
    question: 'What areas in Sydney do you service?',
    answer: 'We provide services throughout Sydney including inner city, Eastern Suburbs, Northern Beaches, Western Sydney, and surrounding areas. If you\'re unsure whether your location is covered, please contact us directly.',
  },
  {
    question: 'Do you offer wine pairings?',
    answer: 'Yes, we offer personalized wine pairing recommendations to complement your menu. Whether you have a wine collection or prefer we source wines, we ensure perfect pairings that enhance your dining experience.',
  },
  {
    question: 'Can you cater for corporate events?',
    answer: 'Yes! We specialize in corporate dining including executive lunches, client entertainment, team gatherings, and business events. We bring professionalism, elegance, and exceptional cuisine to every corporate occasion.',
  },
  {
    question: 'What happens if I have last-minute changes to my menu?',
    answer: 'We\'re flexible and accommodating! Small menu adjustments can usually be made up until 48 hours before your event. For larger changes, we\'ll work with you to find solutions that meet your needs while ensuring quality.',
  },
  {
    question: 'Do you provide staff for events?',
    answer: 'Yes, we can provide professional service staff for larger events. This includes table service, bartending, and support staff. Costs vary based on event size and duration. Include this in your initial inquiry.',
  },
  {
    question: 'How do I book a private chef experience?',
    answer: 'Simply fill out our inquiry form on this website with details about your event, guest count, dietary requirements, and preferences. We\'ll respond within 24 hours to discuss your vision and provide a personalized quote.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          subtitle="Everything You Need to Know About Our Services"
        />

        <div className="space-y-4 mt-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border-b"
              style={{ borderColor: '#c9a84c' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 text-left flex items-center justify-between hover:opacity-80 transition-opacity"
              >
                <h3
                  className="text-lg md:text-xl font-light pr-4"
                  style={{ color: '#f5f0e8' }}
                >
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: '#c9a84c' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </motion.div>
              </button>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: openIndex === index ? 1 : 0,
                  height: openIndex === index ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-6 pr-4" style={{ color: '#d9d3c7' }}>
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 text-center rounded-lg"
          style={{ backgroundColor: 'rgba(201, 168, 76, 0.05)' }}
        >
          <p
            className="text-lg mb-4"
            style={{ color: '#f5f0e8' }}
          >
            Didn&apos;t find your answer?
          </p>
          <p style={{ color: '#a89968' }}>
            <a href="/get-started" className="hover:opacity-80 transition-opacity">
              Submit an inquiry
            </a>
            {' '}or contact us directly. We&apos;re here to answer any questions about creating your perfect culinary experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
