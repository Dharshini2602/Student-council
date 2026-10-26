import React from 'react';
import { CalendarX } from 'lucide-react';
import { Event } from '../../types/event';
import { EventCard } from './EventCard';
import { Button } from '../common/Button';

interface EventGridProps {
  events: Event[];
  isLoading?: boolean;
  onResetFilters?: () => void;
  emptyMessage?: string;
}

export const EventGrid: React.FC<EventGridProps> = ({
  events,
  isLoading = false,
  onResetFilters,
  emptyMessage = 'No campus events found matching your selected criteria.',
}) => {
  // Loading skeleton state with 1.6s shimmer in primary-100
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="bg-white border border-border rounded-md overflow-hidden flex flex-col"
          >
            <div className="aspect-[4/3] w-full skeleton-shimmer" />
            <div className="p-6 space-y-4 flex-1">
              <div className="h-4 bg-primary-100 rounded-sm w-1/4" />
              <div className="h-6 bg-primary-100 rounded-sm w-3/4" />
              <div className="h-4 bg-primary-100 rounded-sm w-full" />
              <div className="h-4 bg-primary-100 rounded-sm w-5/6" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Empty state: icon, display-sm headline, one line of help, reset-filters button
  if (events.length === 0) {
    return (
      <div className="text-center py-16 px-6 bg-white rounded-md border border-dashed border-border-strong max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-sm bg-primary-100 text-primary-700 flex items-center justify-center mx-auto mb-4">
          <CalendarX className="w-6 h-6" />
        </div>
        <h3 className="font-display-sm text-primary-700">
          NO EVENTS FOUND
        </h3>
        <p className="mt-2 font-body-sm text-text-muted">
          {emptyMessage}
        </p>
        {onResetFilters && (
          <div className="mt-6">
            <Button variant="secondary" size="sm" onClick={onResetFilters}>
              RESET FILTERS
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};
