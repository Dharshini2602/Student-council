import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Event } from '../../types/event';
import { formatDate } from '../../lib/utils';
import { Button } from '../common/Button';

interface EventCardProps {
  event: Event;
  featured?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ event, featured = false }) => {
  return (
    <div className="group flex flex-col bg-white border border-gray-200/90 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Event Image Banner / Visual Placeholder */}
      <div className="relative aspect-[16/10] w-full bg-navy/90 overflow-hidden">
        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // Graceful collegiate gradient placeholder
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        ) : null}

        {/* Fallback pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent flex flex-col justify-between p-4 pointer-events-none">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded bg-secondary text-white text-[10px] font-bold tracking-wider uppercase">
              {event.category}
            </span>

            {event.status === 'completed' ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-gray-900/80 text-gray-200 text-[10px] font-medium tracking-wide">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Completed
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-white/20 backdrop-blur-sm text-white text-[10px] font-medium tracking-wide border border-white/20">
                Upcoming
              </span>
            )}
          </div>

          {event.date && (
            <div className="flex items-center gap-1.5 text-xs font-semibold text-white/90">
              <Calendar className="w-3.5 h-3.5 text-secondary" />
              <span>{formatDate(event.date)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-xl sm:text-2xl text-navy uppercase leading-snug group-hover:text-primary transition-colors">
            <Link to={`/events/${event.slug}`} className="focus:outline-none">
              {event.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-sm text-muted-text line-clamp-3 leading-relaxed">
            {event.description}
          </p>

          {event.venue && (
            <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="truncate">{event.venue}</span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
          <Link
            to={`/events/${event.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-primary hover:text-secondary transition-colors"
          >
            <span>VIEW DETAILS</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          {event.registrationUrl && event.status === 'upcoming' && (
            <Button
              href={event.registrationUrl}
              isExternal
              variant="outline"
              size="sm"
              className="text-[11px] py-1 px-3"
            >
              REGISTER
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
