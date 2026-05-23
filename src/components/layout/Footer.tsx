'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
          {/* Left: Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 items-start"
          >
            <Image
              src="/images/footer-logo.png"
              alt="The Private Table by Sanjay"
              width={200}
              height={220}
              className="h-48 w-auto"
            />
          </motion.div>

          {/* Center: Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs uppercase tracking-widest gold-text font-light">
              Get in Touch
            </p>
            <a
              href="mailto:info@privatetablebysanjay.com"
              className="text-ivory hover:text-gold transition-colors font-light"
            >
              info@privatetablebysanjay.com
            </a>
            <a
              href="tel:0481151211"
              className="text-ivory hover:text-gold transition-colors font-light"
            >
              0481 151 211
            </a>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs uppercase tracking-widest gold-text font-light">
              Follow
            </p>
            <div className="flex gap-6">
              {[
                { name: 'Instagram', href: 'https://instagram.com' },
                { name: 'LinkedIn', href: 'https://linkedin.com' },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory hover:text-gold transition-colors font-light text-sm"
                >
                  {social.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom: Copyright */}
        <motion.div
          className="pt-8 border-t border-gold/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-center text-ivory-60 text-xs font-light tracking-wide">
            © {currentYear} The Private Table by Sanjay. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
