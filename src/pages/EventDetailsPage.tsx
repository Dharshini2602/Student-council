import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink, CheckCircle2, User, Sparkles } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { PageTransition } from '../components/common/PageTransition';
import { EVENTS_DATA } from '../data/events';
import { formatDate } from '../lib/utils';

export const EventDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find event by slug
  const event = EVENTS_DATA.find((e) => e.slug === slug);

  // If unknown slug or event is draft, show dedicated not-found state
  if (!event || event.status === 'draft') {
    return (
      <PageTransition>
        <div className="min-h-[70vh] pt-36 pb-20 flex items-center justify-center bg-light-bg text-center px-4">
          <Container className="max-w-md">
            <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-heading text-navy uppercase mb-2">
              Event Not Found
            </h1>
            <p className="text-sm text-muted-text mb-6">
              The event you are looking for does not exist or may have been unlisted.
            </p>
            <Button to="/events" variant="primary">
              <ArrowLeft className="w-4 h-4 mr-2 inline" />
              BACK TO ALL EVENTS
            </Button>
          </Container>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Page Header Banner */}
      <section className="pt-32 pb-14 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary-light hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO EVENTS CALENDAR</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded bg-secondary text-white text-xs font-bold tracking-wider uppercase">
              {event.category}
            </span>
            {event.status === 'completed' ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-gray-800 text-gray-200 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Completed Event
              </span>
            ) : (
              <span className="px-3 py-1 rounded bg-white/10 text-white text-xs font-medium border border-white/20">
                Official Upcoming Event
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white uppercase tracking-wide leading-tight max-w-4xl">
            {event.title}
          </h1>
        </Container>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Image & Details */}
            <div className="lg:col-span-8 space-y-8">
              {/* Event Poster / Visual */}
              <div className="relative aspect-[16/9] w-full bg-navy rounded-xl overflow-hidden shadow-md">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : null}

                {/* Aesthetic Collegiate Fallback */}
                <div className="absolute inset-0 bg-gradient-to-tr from-navy via-primary/80 to-navy flex items-center justify-center p-8 text-center pointer-events-none">
                  <div>
                    <span className="text-secondary-light text-xs font-mono tracking-widest uppercase block mb-2">
                      PPGIT STUDENT COUNCIL EVENT
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading text-white uppercase max-w-lg">
                      {event.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Comprehensive Description */}
              <div className="prose max-w-none text-body-text">
                <h3 className="font-heading text-2xl text-navy uppercase border-b border-gray-100 pb-3">
                  About the Event
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  {event.longDescription || event.description}
                </p>
              </div>

              {/* Event Highlights */}
              {event.highlights && event.highlights.length > 0 && (
                <div className="bg-light-bg rounded-xl p-6 sm:p-8 border border-gray-200">
                  <h4 className="font-heading text-xl text-navy uppercase mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-secondary" />
                    <span>Program Highlights & Agenda</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-gray-700">
                    {event.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Metadata Card & Registration Action */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-light-bg rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
                <h3 className="font-heading text-xl text-navy uppercase border-b border-gray-200 pb-3">
                  Event Information
                </h3>

                <div className="space-y-4 text-sm">
                  {event.date && (
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-primary/10 text-primary shrink-0">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Date
                        </span>
                        <span className="font-semibold text-navy">
                          {formatDate(event.date)}
                        </span>
                      </div>
                    </div>
                  )}

                  {event.time && (
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-primary/10 text-primary shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Schedule
                        </span>
                        <span className="font-semibold text-navy">
                          {event.time}
                        </span>
                      </div>
                    </div>
                  )}

                  {event.venue && (
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-primary/10 text-primary shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Venue
                        </span>
                        <span className="font-semibold text-navy">
                          {event.venue}
                        </span>
                      </div>
                    </div>
                  )}

                  {event.coordinator && (
                    <div className="flex items-start gap-3 pt-2 border-t border-gray-200">
                      <div className="p-2 rounded bg-secondary/10 text-secondary shrink-0">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Coordinated By
                        </span>
                        <span className="font-semibold text-navy block">
                          {event.coordinator.name}
                        </span>
                        {event.coordinator.contact && (
                          <span className="text-xs text-muted-text">
                            {event.coordinator.contact}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Registration Action */}
                <div className="pt-4 border-t border-gray-200">
                  {event.status === 'upcoming' && event.registrationUrl ? (
                    <Button
                      href={event.registrationUrl}
                      isExternal
                      variant="primary"
                      className="w-full flex items-center justify-center gap-2 py-3"
                    >
                      <span>REGISTER NOW</span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  ) : event.status === 'completed' ? (
                    <div className="p-3 bg-gray-100 rounded text-center text-xs font-semibold text-gray-600">
                      This event has successfully concluded.
                    </div>
                  ) : (
                    <div className="p-3 bg-light-blue rounded text-center text-xs font-medium text-navy">
                      Registration opens closer to event date.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};
