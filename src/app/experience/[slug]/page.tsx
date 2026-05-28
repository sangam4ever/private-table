'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { experiences } from '@/data/experiences';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface ExperiencePageProps {
  params: Promise<{ slug: string }>;
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
  const [experience, setExperience] = useState(experiences[0]);
  const [slug, setSlug] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
      const exp = experiences.find((e) => e.id === resolvedParams.slug);
      setExperience(exp || experiences[0]);
      setIsLoading(false);
    });
  }, [params]);

  const handleInquireClick = () => {
    window.location.href = '/#inquiry';
  };

  const getExperienceDetails = (id: string) => {
    const details: Record<string, any> = {
      intimate: {
        fullDescription: 'An exclusive culinary experience designed for smaller gatherings. Sanjay crafts every element personally—from menu conception to presentation—ensuring an evening of uncompromising excellence. Perfect for romantic dinners, intimate family celebrations, or professional gatherings where quality and elegance matter.',
        highlights: [
          'Bespoke menu tailored to your preferences',
          'Personal culinary attention throughout',
          'Intimate setting with customized ambiance',
          'Wine pairing recommendations',
          'Complete service and table management',
        ],
        process: [
          'Initial consultation to understand your vision',
          'Menu planning with seasonal ingredients',
          '24-hour advance preparation',
          'On-site preparation and service',
        ],
        pricing: '$800 - $1,500 depending on menu complexity',
      },
      soiree: {
        fullDescription: 'A sophisticated multi-course journey for intimate groups. Each course is orchestrated with precision, combining Michelin-calibre techniques with seasonal ingredients and artistic plating. This experience celebrates the art of fine dining through carefully curated courses and impeccable service.',
        highlights: [
          'Multi-course progressive menu',
          'Michelin-calibre technique and presentation',
          'Sophisticated wine or beverage pairings',
          'Professional service team',
          'Custom table décor and ambiance',
          'Dietary accommodation and preferences',
        ],
        process: [
          'Detailed consultation and preference discussion',
          'Menu development and refinement',
          '1-2 weeks preparation period',
          'Full service team coordination',
          'Setup and service excellence',
        ],
        pricing: '$2,500 - $5,000 depending on party size and menu',
      },
      grand: {
        fullDescription: 'Your milestone deserves the finest. From intimate rehearsal dinners to lavish celebrations, Sanjay orchestrates every detail—a bespoke menu, elegant service, and an atmosphere of pure indulgence. A complete culinary experience that transforms your special occasion into an unforgettable memory.',
        highlights: [
          'Full event coordination and planning',
          'Custom bespoke menu for your occasion',
          'Professional service and kitchen team',
          'Décor and ambiance consultation',
          'Dietary and cultural accommodations',
          'Complete bar service and beverage program',
          'Post-event coordination',
        ],
        process: [
          'Comprehensive consultation and vision planning',
          'Event logistics and timeline planning',
          'Menu development and tastings',
          'Team coordination and training',
          'Full setup, service, and event management',
          'Post-event follow-up',
        ],
        pricing: '$6,000+ (custom quote based on requirements)',
      },
    };
    return details[id] || details.intimate;
  };

  const experienceDetails = experience ? getExperienceDetails(experience.id) : null;

  if (isLoading) {
    return (
      <main className="bg-obsidian min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-ivory">Loading...</p>
        </div>
      </main>
    );
  }

  if (!experience || !slug || !experienceDetails) {
    return (
      <main className="bg-obsidian min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-ivory mb-4">Experience Not Found</h1>
          <Link href="/#experiences" className="text-gold hover:text-gold-light">
            ← Back to Experiences
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-obsidian min-h-screen">
      {/* Back Button */}
      <div className="py-8 px-6 md:px-8 max-w-7xl mx-auto">
        <Link href="/#experiences" className="text-gold hover:text-gold-light transition-colors text-sm font-light">
          ← Back to Experiences
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={experience.imageSrc}
          alt={experience.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-obsidian/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-display text-4xl md:text-5xl font-light text-ivory mb-4">
            {experience.title}
          </h1>
          <p className="font-body text-ivory-60 text-lg max-w-2xl">
            {experience.tagline}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-obsidian">
        <div className="max-w-4xl mx-auto">
          {/* Full Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="font-display text-2xl md:text-3xl font-light text-ivory leading-relaxed mb-8">
              {experienceDetails.fullDescription}
            </p>
            <GoldDivider width="half" />
          </motion.div>

          {/* Key Details Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            <div>
              <p className="text-xs uppercase tracking-widest gold-text font-light mb-4">
                Guest Count
              </p>
              <p className="font-display text-2xl font-light text-ivory">
                {experience.guestCount}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest gold-text font-light mb-4">
                Duration
              </p>
              <p className="font-display text-2xl font-light text-ivory">
                {experience.duration}
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="font-display text-2xl font-light text-ivory mb-8">
              What&apos;s Included
            </h2>
            <ul className="space-y-4">
              {experienceDetails.highlights.map((highlight: string, idx: number) => (
                <li key={idx} className="flex gap-4 font-body text-ivory-60">
                  <span className="text-gold flex-shrink-0 mt-1">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="font-display text-2xl font-light text-ivory mb-8">
              Our Process
            </h2>
            <ol className="space-y-4">
              {experienceDetails.process.map((step: string, idx: number) => (
                <li key={idx} className="flex gap-4 font-body text-ivory-60">
                  <span className="font-display text-gold flex-shrink-0 w-6">
                    {idx + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center pt-8"
          >
            <MagneticButton variant="primary" onClick={handleInquireClick}>
              Inquire About {experience.title}
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
