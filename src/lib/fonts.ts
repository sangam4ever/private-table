import { Cormorant_Garamond, Jost } from 'next/font/google';

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
});

export const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-jost',
  display: 'swap',
  preload: true,
});
