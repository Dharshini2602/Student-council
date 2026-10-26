import React from 'react';
import { Sparkles, MessageSquarePlus, Calendar, ShieldCheck } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-navy text-white overflow-hidden">
      {/* Deep navy with subtle dotted texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        {/* College Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-secondary-light text-xs font-bold tracking-widest uppercase mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
          <span>LEAD. REPRESENT. INSPIRE.</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-white tracking-wide uppercase leading-tight">
          BETTER CAMPUS. <br />
          <span className="text-secondary-light">STRONGER VOICES.</span> <br />
          ONE COMMUNITY.
        </h2>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Great campus experiences begin when students participate, ideas are heard, and people work together. Connect with your student council today.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/student-voice"
            variant="secondary"
            size="lg"
            className="flex items-center gap-2 font-bold shadow-xl"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>SHARE YOUR IDEA</span>
          </Button>

          <Button
            to="/events"
            variant="outline"
            size="lg"
            className="text-white border-white/40 hover:bg-white hover:text-navy flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>EXPLORE EVENTS</span>
          </Button>
        </div>

        {/* Footer Tagline Reminder */}
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-gray-400 font-mono tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-secondary" />
          <span>PPGIT STUDENT COUNCIL — COIMBATORE, TAMIL NADU</span>
        </div>
      </Container>
    </section>
  );
};
