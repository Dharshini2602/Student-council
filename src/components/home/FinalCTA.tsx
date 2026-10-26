import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-20 md:py-24 lg:py-32 bg-primary-900 text-white overflow-hidden text-center">
      {/* Dark section with dot texture */}
      <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />

      {/* Outlined Anton background element */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <span className="text-outline-decorative text-[20vw] leading-none opacity-40">
          VOICE
        </span>
      </div>

      <Container className="relative z-10 max-w-[720px] mx-auto">
        {/* Eyebrow: Centered, green-600 on dark */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-6 h-[2px] bg-accent-600 inline-block shrink-0" aria-hidden="true" />
          <span className="font-label text-accent-600">
            JOIN THE COMMUNITY
          </span>
          <span className="w-6 h-[2px] bg-accent-600 inline-block shrink-0" aria-hidden="true" />
        </div>

        {/* Display-lg Heading (White, one line in green accent) */}
        <h2 className="font-display-lg text-white">
          BETTER CAMPUS. <br />
          <span className="text-accent-600">STRONGER VOICES.</span> <br />
          ONE COMMUNITY.
        </h2>

        {/* Description in text-on-dark-muted */}
        <p className="mt-6 font-body-lg text-text-on-dark-muted max-w-[68ch] mx-auto">
          Great campus experiences begin when students participate, ideas are heard, and people work together.
        </p>

        {/* Buttons: Primary (on dark) + Secondary (on dark) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/student-voice"
            variant="primary-on-dark"
            size="lg"
            withArrow
          >
            SHARE YOUR IDEA
          </Button>

          <Button
            to="/events"
            variant="secondary-on-dark"
            size="lg"
          >
            EXPLORE EVENTS
          </Button>
        </div>

        {/* Tagline */}
        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <span className="font-label text-xs text-text-on-dark-muted tracking-widest">
            LEAD. REPRESENT. INSPIRE.
          </span>
        </div>
      </Container>
    </section>
  );
};
