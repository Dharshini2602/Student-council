import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { EventCard } from '../events/EventCard';
import { EVENTS_DATA } from '../../data/events';

export const EventsPreview: React.FC = () => {
  // Display exactly three upcoming / active event cards as requested
  const previewEvents = EVENTS_DATA.slice(0, 3);

  return (
    <div className="py-20 bg-light-bg border-b border-gray-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="EVENTS & HAPPENINGS"
            title="CAMPUS LIFE. UNFORGETTABLE MOMENTS."
            description="Explore our vibrant calendar of cultural fests, technical symposiums, and celebratory campus gatherings."
            className="mb-0"
          />

          <div className="mt-6 md:mt-0 shrink-0">
            <Button
              to="/events"
              variant="outline"
              size="md"
              className="flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>VIEW ALL EVENTS</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* 3 Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {previewEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </div>
  );
};
