import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const HeroSection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReduced ? 0.15 : 0.8,
        delay: prefersReduced ? 0 : custom * 0.12,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between bg-primary-900 text-white pt-28 pb-8 overflow-hidden">
      {/* Background Dot Texture */}
      <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />

      {/* Oversized Outlined Anton Letterforms in Background */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        <span className="text-outline-decorative text-[18vw] leading-none block mr-[-2vw]">
          PPGIT
        </span>
      </div>

      {/* Main Hero Content */}
      <Container className="relative my-auto py-8 sm:py-12 z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-6 h-[2px] bg-accent-600 inline-block shrink-0" aria-hidden="true" />
            <span className="font-label text-accent-600">
              PPG INSTITUTE OF TECHNOLOGY
            </span>
          </motion.div>

          {/* Headline (Anton, display-xl, white first line, accent-600 second line) */}
          <div className="overflow-hidden">
            <motion.h1
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="font-display-xl text-white"
            >
              YOUR VOICE.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.div
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="font-display-xl text-accent-600"
            >
              OUR RESPONSIBILITY.
            </motion.div>
          </div>

          {/* Body-lg Description in text-on-dark-muted */}
          <motion.p
            custom={3}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 font-body-lg text-text-on-dark-muted max-w-[68ch]"
          >
            A student-led community committed to representation, leadership, campus engagement, and creating meaningful experiences for every student.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            custom={4}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              to="/council"
              variant="primary-on-dark"
              size="lg"
            >
              <Users className="w-4 h-4 mr-2" />
              EXPLORE THE COUNCIL
            </Button>

            <Button
              to="/events"
              variant="secondary-on-dark"
              size="lg"
            >
              <Calendar className="w-4 h-4 mr-2" />
              UPCOMING EVENTS
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Bottom Scroll Cue */}
      <Container className="relative z-10 flex items-center justify-between pt-4 border-t border-white/[0.08]">
        <span className="font-label text-xs text-text-on-dark-muted tracking-widest">
          LEAD. REPRESENT. INSPIRE.
        </span>

        {/* Scroll cue with 1px line and 6px dot moving down */}
        <button
          onClick={handleScrollDown}
          className="flex items-center gap-3 text-text-on-dark-muted hover:text-white transition-colors py-2 group focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-white"
          aria-label="Scroll to about section"
        >
          <span className="font-label text-[11px]">SCROLL</span>
          {!prefersReduced ? (
            <div className="relative w-[1px] h-8 bg-white/20 overflow-hidden">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-accent-600 absolute -left-[2.5px]"
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          ) : (
            <div className="w-[1px] h-6 bg-accent-600" />
          )}
        </button>
      </Container>
    </section>
  );
};
