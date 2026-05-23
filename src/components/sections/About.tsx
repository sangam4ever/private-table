'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { slideInFromRight } from '@/lib/animations';

export function About() {

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-6 md:px-8 bg-obsidian"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          eyebrow="THE CHEF"
          title="Sanjay's Story"
          alignment="left"
          className="mb-16"
        />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left: Image - 5 cols */}
          <motion.div
            className="md:col-span-5 relative w-full overflow-hidden"
            style={{ height: '500px', borderRadius: '12px', border: '2px solid rgba(201, 168, 76, 0.3)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            whileHover={{ y: -12, borderColor: 'rgba(201, 168, 76, 0.8)' }}
          >
            <Image
              src="/images/chef-sanjay.png"
              alt="Sanjay, Private Chef"
              fill
              className="transition-transform duration-500 hover:scale-105"
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              quality={85}
            />
          </motion.div>

          {/* Right: Content - 7 cols */}
          <motion.div
            className="md:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideInFromRight}
          >
            <div className="space-y-8">
              {/* Biography */}
              <div className="space-y-6">
                <p className="font-display text-xl md:text-2xl font-light text-ivory leading-relaxed">
                  With 4+ years of culinary excellence, Sanjay brings an uncompromising commitment to craftsmanship and flavor to every plate.
                </p>

                <p className="font-body text-base md:text-lg text-ivory-60 leading-relaxed">
                  His true passion lies in the intimacy of private dining—where technique meets emotion, where food becomes conversation, where a meal transforms into an unforgettable experience.
                </p>

                <p className="font-body text-base md:text-lg text-ivory-60 leading-relaxed">
                  Every menu is a dialogue. Every course, a moment. Every experience, an opportunity to discover something extraordinary.
                </p>
              </div>

              {/* Divider */}
              <GoldDivider width="half" className="my-6" />

              {/* Credentials */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {[
                  { label: '4+', value: 'Years Experience' },
                  { label: '100+', value: 'Private Clients' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <p className="font-display text-3xl md:text-4xl gold-text font-light mb-2">
                      {item.label}
                    </p>
                    <p className="font-body text-xs md:text-sm text-ivory-60 tracking-wide uppercase">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
