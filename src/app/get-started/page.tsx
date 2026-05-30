'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { InquiryForm } from '@/components/sections/InquiryForm';
import { motion } from 'framer-motion';

export default function GetStartedPage() {
  return (
    <div className="w-full bg-obsidian">
      <Navbar />
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p
                className="text-xs md:text-sm tracking-widest uppercase font-body mb-6"
                style={{ color: '#c9a84c', fontSize: '14px', letterSpacing: '2px' }}
              >
                Begin Your Journey
              </p>
              <h1
                className="font-display font-light mb-6 leading-tight"
                style={{ color: '#FFFFFF', fontSize: 'clamp(40px, 12vw, 80px)' }}
              >
                Let&apos;s Create Your Experience
              </h1>
              <p
                className="font-body max-w-2xl text-lg md:text-xl leading-relaxed mb-4"
                style={{ color: '#d9d3c7', fontSize: 'clamp(16px, 3vw, 20px)' }}
              >
                Tell us about your vision for an unforgettable culinary experience. Whether it&apos;s an intimate dinner, a special celebration, or a corporate event, we&apos;re here to bring it to life.
              </p>
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: '#a89968' }}
              >
                Our team will respond within 24 hours with a personalized proposal tailored to your needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}
