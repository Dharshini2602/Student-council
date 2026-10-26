import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { EventCard } from '../events/EventCard';
import { EVENTS_DATA } from '../../data/events';

export const EventsPreview: React.FC = () => {
  // Display exactly three verified public events
  const previewEvents = EVENTS_DATA.filter((e) => e.status !== 'draft').slice(0, 3);

  return (
    <div className="py-16 md:py-20 lg:py-24 bg-white border-b border-border">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="EVENTS & HAPPENINGS"
            title="CAMPUS LIFE. UNFORGETTABLE MOMENTS."
            description="Explore our vibrant calendar of cultural fests, technical symposiums, and celebratory campus gatherings."
            className="mb-0"
          />

          <div className="mt-6 md:mt-0 shrink-0">
            <Button
              to="/events"
              variant="secondary"
              size="md"
              withArrow
            >
              VIEW ALL EVENTS
            </Button>
          </div>
        </div>

        {/* 3 Columns desktop, 2 tablet, 1 mobile with 24px gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </div>
  );
};
