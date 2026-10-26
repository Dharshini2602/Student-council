import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { StudentVoiceSection } from '../components/home/StudentVoiceSection';
import { EventsPreview } from '../components/home/EventsPreview';
import { CouncilPreview } from '../components/home/CouncilPreview';
import { FinalCTA } from '../components/home/FinalCTA';
import { PageTransition } from '../components/common/PageTransition';

export const HomePage: React.FC = () => {
  return (
    <PageTransition>
      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: ABOUT AND STUDENT VOICE */}
      <section aria-label="About the Council and Student Voice">
        <AboutSection />
        <StudentVoiceSection />
      </section>

      {/* SECTION 3: EVENTS AND COUNCIL PREVIEW */}
      <section aria-label="Campus Events and Council Representatives">
        <EventsPreview />
        <CouncilPreview />
      </section>

      {/* SECTION 4: FINAL CTA */}
      <FinalCTA />
    </PageTransition>
  );
};
