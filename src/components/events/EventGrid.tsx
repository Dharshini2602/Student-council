import React from 'react';
import { CalendarX } from 'lucide-react';
import { Event } from '../../types/event';
import { EventCard } from './EventCard';

interface EventGridProps {
  events: Event[];
  isLoading?: boolean;
  emptyMessage?: string;
}

export const EventGrid: React.FC<EventGridProps> = ({
  events,
  isLoading = false,
  emptyMessage = 'No campus events found matching your selected criteria.',
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="animate-pulse bg-white border border-gray-200 rounded-lg overflow-hidden h-96 flex flex-col"
          >
            <div className="bg-gray-200 h-48 w-full" />
            <div className="p-6 space-y-3 flex-1">
              <div className="h-4 bg-gray-200 rounded w-1/4" />
              <div className="h-6 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white rounded-lg border border-dashed border-gray-300">
        <CalendarX className="w-12 h-12 text-gray-400 mx-auto mb-4 stroke-1" />
        <h3 className="font-heading text-xl text-navy uppercase">No Events Found</h3>
        <p className="mt-2 text-sm text-muted-text max-w-md mx-auto">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};
