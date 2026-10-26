import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Event } from '../../types/event';
import { formatDate } from '../../lib/utils';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  // Never render drafts publicly
  if (event.status === 'draft') return null;

  const isCompleted = event.status === 'completed';

  return (
    <Link
      to={`/events/${event.slug}`}
      className="group block bg-white border border-border rounded-md overflow-hidden transition-all duration-200 ease-out hover:-translate-y-1 hover:border-primary-600 hover:shadow-2 focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent-600"
    >
      {/* 4:3 image on top or navy block with Anton initial */}
      <div className="relative aspect-[4/3] w-full bg-primary-900 overflow-hidden">
        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-300"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        ) : null}

        {/* Fallback Initial letterform if no photo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display-lg text-white/15 text-7xl uppercase">
            {event.title.charAt(0)}
          </span>
        </div>

        {/* Category chip overlapping bottom-left */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="font-label text-[11px] bg-primary-700 text-white px-2.5 py-1 rounded-sm shadow-1">
            {event.category}
          </span>
        </div>

        {/* Status indicator top-right */}
        <div className="absolute top-3 right-3 z-10">
          {isCompleted ? (
            <span className="font-label text-[10px] bg-primary-900/90 text-text-on-dark-muted px-2 py-0.5 rounded-sm flex items-center gap-1.5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-text-muted" aria-hidden="true" />
              <span>COMPLETED</span>
            </span>
          ) : (
            <span className="font-label text-[10px] bg-primary-900/90 text-white px-2 py-0.5 rounded-sm flex items-center gap-1.5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-600 animate-pulse" aria-hidden="true" />
              <span>UPCOMING</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Content (24px padding) */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          {/* Date Row (only when verified) */}
          {event.date && event.isVerified && (
            <div className="flex items-center gap-2 font-body-sm text-text-muted mb-2">
              <Calendar className="w-4 h-4 text-accent-700 shrink-0" />
              <span>{formatDate(event.date)}</span>
            </div>
          )}

          {/* Title in display-sm */}
          <h3 className="font-display-sm text-primary-700 leading-snug group-hover:text-primary-800 transition-colors">
            {event.title}
          </h3>

          {/* Two-line clamped description */}
          <p className="mt-2 font-body-sm text-text-muted line-clamp-2 leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Text link "Details" with arrow slide */}
        <div className="mt-6 pt-4 border-t border-border flex items-center text-primary-700 font-button text-xs group-hover:text-accent-700 transition-colors">
          <span>DETAILS</span>
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-150 ease-out group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};
