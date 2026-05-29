'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { experiences } from '@/data/experiences';

export function Experiences() {
  return (
    <section
      id="experiences"
      className="py-20 md:py-32 px-6 md:px-8 bg-obsidian"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          eyebrow="DINING EXPERIENCES"
          title="Signature Experiences"
          alignment="left"
          className="mb-16"
        />

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {experiences.map((exp) => (
            <motion.article
              key={exp.id}
              className="group border border-gold/20 overflow-hidden hover:border-gold transition-colors duration-500"
              variants={staggerItem}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.5 }}
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={exp.imageSrc}
                  alt={exp.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  quality={85}
                />
              </div>

              {/* Content */}
              <div className="p-8 bg-obsidian-100">
                {/* Eyebrow */}
                <p className="text-xs tracking-widest uppercase gold-text font-body mb-3">
                  {exp.tagline}
                </p>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl font-light text-ivory mb-4">
                  {exp.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm md:text-base text-ivory-60 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Meta Information */}
                <div className="space-y-3 border-t border-gold/10 pt-6 mb-6">
                  <div className="flex justify-between text-xs font-body">
                    <span className="text-ivory-60">Guests:</span>
                    <span className="gold-text font-light">{exp.guestCount}</span>
                  </div>
                  <div className="flex justify-between text-xs font-body">
                    <span className="text-ivory-60">Duration:</span>
                    <span className="gold-text font-light">{exp.duration}</span>
                  </div>
                </div>

                {/* Button */}
                <a href="#inquiry" className="block">
                  <MagneticButton variant="ghost" className="w-full text-center">
                    Inquire About {exp.title}
                  </MagneticButton>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
