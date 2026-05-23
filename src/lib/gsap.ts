import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type Lenis from 'lenis';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// This function syncs Lenis smooth scroll with GSAP ScrollTrigger
// CRITICAL: ScrollTrigger reads window.scrollY by default, but Lenis replaces the scroll behavior
// Without this sync, parallax animations fire at wrong positions
export function syncGSAPWithLenis(lenis: InstanceType<typeof Lenis> | null) {
  if (typeof window === 'undefined' || !lenis) return;

  // Tell ScrollTrigger to use Lenis's scroll position
  (lenis as any).on('scroll', ScrollTrigger.update);

  // Sync the RAF loop
  gsap.ticker.add((time) => {
    (lenis as any).raf(time * 1000);
  });

  // Remove default lag smoothing since Lenis handles it
  gsap.ticker.lagSmoothing(0);
}

export { ScrollTrigger };
