'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { processSteps } from '@/data/process';

export function ProcessTimeline() {

  return (
    <section
      id="process"
      className="py-20 md:py-32 px-6 md:px-8 bg-obsidian-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          eyebrow="THE JOURNEY"
          title="Private Dining Process"
          alignment="left"
          className="mb-20"
        />

        {/* Timeline Container */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block relative">
            {/* Steps Grid */}
            <div className="grid grid-cols-4 gap-8 pt-16">
              {processSteps.map((step) => (
                <motion.div
                  key={step.step}
                  className="relative pt-32"
                  variants={staggerItem}
                >
                  {/* Step Circle */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 flex items-center justify-center z-10 cursor-pointer group">
                    <motion.div
                      className="absolute inset-0 border-2 border-gold/40 rounded-full"
                      whileHover={{
                        boxShadow: '0 0 40px rgba(201, 168, 76, 0.8), 0 0 80px rgba(201, 168, 76, 0.4)',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="font-display text-5xl font-light gold-text opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                      {String(step.step).padStart(2, '0')}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="font-display text-xl font-light text-ivory">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-ivory-60 leading-relaxed">
                      {step.description}
                    </p>
                    {step.duration && (
                      <p className="text-xs uppercase tracking-widest gold-text font-light">
                        {step.duration}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative pl-8"
                variants={staggerItem}
              >
                {/* Left line connector */}
                {index !== processSteps.length - 1 && (
                  <div className="absolute left-3 top-12 w-px h-12 bg-gold/30" />
                )}

                {/* Step Circle */}
                <div className="absolute left-0 top-0 w-7 h-7 bg-gold rounded-full flex items-center justify-center">
                  <p className="font-body text-xs font-light text-obsidian">
                    {step.step}
                  </p>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-display text-xl font-light text-ivory">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-ivory-60 leading-relaxed">
                    {step.description}
                  </p>
                  {step.duration && (
                    <p className="text-xs uppercase tracking-widest gold-text font-light">
                      {step.duration}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
