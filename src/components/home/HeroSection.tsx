import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Users, Calendar, Sparkles } from 'lucide-react';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-navy text-white pt-28 pb-12 overflow-hidden">
      {/* Background Subtle Dot Pattern & Academic Gradients */}
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Content */}
      <Container className="relative my-auto py-10 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow & College Emblem Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[3px] bg-secondary inline-block" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-secondary-light">
              PPG INSTITUTE OF TECHNOLOGY
            </span>
            <span className="hidden sm:inline-block text-xs px-2.5 py-0.5 rounded bg-white/10 text-gray-300 tracking-wider uppercase font-medium">
              EST. STUDENT GOVERNANCE
            </span>
          </motion.div>

          {/* Main Hero Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading text-white tracking-wide uppercase leading-[0.95]"
          >
            YOUR VOICE. <br />
            <span className="text-secondary-light">OUR RESPONSIBILITY.</span>
          </motion.h1>

          {/* Institutional Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 sm:mt-8 text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed font-normal font-sans"
          >
            A student-led community committed to representation, leadership, campus engagement, and creating meaningful experiences for every student.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              to="/council"
              variant="secondary"
              size="lg"
              className="group flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              <span>EXPLORE THE COUNCIL</span>
            </Button>

            <Button
              to="/events"
              variant="outline"
              size="lg"
              className="text-white border-white/40 hover:bg-white hover:text-navy flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>UPCOMING EVENTS</span>
            </Button>
          </motion.div>

          {/* Key Quick Stats Pillars */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            <div>
              <span className="font-heading text-2xl sm:text-3xl text-white block">
                100%
              </span>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5 block">
                Student Representation
              </span>
            </div>

            <div>
              <span className="font-heading text-2xl sm:text-3xl text-secondary-light block">
                6+
              </span>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5 block">
                Departments Unified
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="font-heading text-2xl sm:text-3xl text-white block">
                24/7
              </span>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5 block">
                Voice & Feedback Portal
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom Scroll Indicator */}
      <Container className="relative z-10 flex items-center justify-between text-xs text-gray-400 pt-6 border-t border-white/5">
        <div className="flex items-center gap-2 font-mono tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-secondary" />
          <span>LEAD. REPRESENT. INSPIRE.</span>
        </div>

        <button
          onClick={handleScrollDown}
          className="flex items-center gap-1.5 hover:text-white transition-colors uppercase tracking-widest text-[11px] font-semibold py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary"
          aria-label="Scroll down to about section"
        >
          <span>DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-secondary" />
        </button>
      </Container>
    </section>
  );
};
