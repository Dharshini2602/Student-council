import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink, User, Sparkles } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { PageTransition } from '../components/common/PageTransition';
import { EVENTS_DATA } from '../data/events';
import { formatDate } from '../lib/utils';

export const EventDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const event = EVENTS_DATA.find((e) => e.slug === slug);

  if (!event || event.status === 'draft') {
    return (
      <PageTransition>
        <div className="min-h-[70vh] pt-36 pb-20 flex items-center justify-center bg-surface text-center px-4">
          <Container className="max-w-[720px]">
            <div className="w-16 h-16 rounded-sm bg-primary-100 text-primary-700 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <h1 className="font-display-md text-primary-700 mb-2">
              EVENT NOT FOUND
            </h1>
            <p className="font-body text-text-muted mb-6">
              The event you are looking for does not exist or may have been unlisted.
            </p>
            <Button to="/events" variant="primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              BACK TO ALL EVENTS
            </Button>
          </Container>
        </div>
      </PageTransition>
    );
  }

  const isCompleted = event.status === 'completed';

  return (
    <PageTransition>
      {/* 320px tall navy band Page Hero with breadcrumb, back link, and title */}
      <section className="relative min-h-[320px] flex items-center bg-primary-900 text-white pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />

        <Container className="relative z-10">
          <div className="max-w-4xl">
            {/* Back link above title */}
            <Link
              to="/events"
              className="inline-flex items-center gap-2 font-label text-xs text-accent-600 hover:text-white transition-colors mb-4 focus:outline-none focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-white rounded-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK TO ALL EVENTS</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-label text-xs bg-primary-700 text-white px-3 py-1 rounded-sm shadow-1">
                {event.category}
              </span>
              {isCompleted ? (
                <span className="font-label text-xs bg-primary-900/90 text-text-on-dark-muted px-2.5 py-1 rounded-sm flex items-center gap-1.5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted" aria-hidden="true" />
                  <span>COMPLETED EVENT</span>
                </span>
              ) : (
                <span className="font-label text-xs bg-primary-900/90 text-white px-2.5 py-1 rounded-sm flex items-center gap-1.5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-600 animate-pulse" aria-hidden="true" />
                  <span>UPCOMING EVENT</span>
                </span>
              )}
            </div>

            <h1 className="font-display-lg text-white">
              {event.title}
            </h1>
          </div>
        </Container>
      </section>

      {/* Main Content: 7/5 Asymmetric Split (Content left 7, Sticky Meta right 5) */}
      <section className="py-16 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 Columns: Image & Narrative */}
            <div className="lg:col-span-7 space-y-8">
              {/* 4:3 or 16:9 Event Imagery */}
              <div className="relative aspect-[16/10] w-full bg-primary-900 rounded-md overflow-hidden border border-border">
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

                {/* Typographic fallback */}
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center pointer-events-none select-none">
                  <span className="font-display-lg text-white/15 text-8xl uppercase">
                    {event.title.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Event Description */}
              <div className="space-y-4">
                <h2 className="font-display-sm text-primary-700 border-b border-border pb-3">
                  ABOUT THE EVENT
                </h2>
                <p className="font-body text-text-base leading-relaxed">
                  {event.longDescription || event.description}
                </p>
              </div>

              {/* Program Highlights */}
              {event.highlights && event.highlights.length > 0 && (
                <div className="bg-surface rounded-md p-6 sm:p-8 border border-border">
                  <h3 className="font-display-sm text-primary-700 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent-700" />
                    <span>PROGRAM HIGHLIGHTS & AGENDA</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body-sm text-text-base">
                    {event.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-700 mt-2 shrink-0" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right 5 Columns: Sticky Meta Panel */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-surface rounded-md p-6 sm:p-8 border border-border space-y-6">
                <h3 className="font-display-sm text-primary-700 border-b border-border pb-3">
                  EVENT DETAILS
                </h3>

                <div className="space-y-4 font-body-sm">
                  {event.date && (
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-sm bg-primary-100 text-primary-700 shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-label text-xs text-text-muted block">DATE</span>
                        <span className="font-semibold text-text-base">{formatDate(event.date)}</span>
                      </div>
                    </div>
                  )}

                  {event.time && (
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-sm bg-primary-100 text-primary-700 shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-label text-xs text-text-muted block">SCHEDULE</span>
                        <span className="font-semibold text-text-base">{event.time}</span>
                      </div>
                    </div>
                  )}

                  {event.venue && (
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-sm bg-primary-100 text-primary-700 shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-label text-xs text-text-muted block">VENUE</span>
                        <span className="font-semibold text-text-base">{event.venue}</span>
                      </div>
                    </div>
                  )}

                  {event.coordinator && (
                    <div className="flex items-start gap-3 pt-3 border-t border-border">
                      <div className="p-2.5 rounded-sm bg-accent-100 text-accent-700 shrink-0">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-label text-xs text-text-muted block">COORDINATION</span>
                        <span className="font-semibold text-text-base block">{event.coordinator.name}</span>
                        {event.coordinator.contact && (
                          <span className="text-xs text-text-muted block mt-0.5">{event.coordinator.contact}</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Registration Action */}
                <div className="pt-4 border-t border-border">
                  {event.status === 'upcoming' ? (
                    <Button
                      href={event.registrationUrl || 'https://docs.google.com/forms/d/e/1FAIpQLSc5LM9rNzLYIzT1X6MZlDJyNxnj22alGPjTI4ATwhxXjBI2lQ/viewform?usp=publish-editor'}
                      isExternal
                      variant="primary"
                      size="lg"
                      className="w-full flex items-center justify-center"
                    >
                      <span>REGISTER NOW</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  ) : isCompleted ? (
                    <div className="p-3 bg-white rounded-sm border border-border text-center font-label text-xs text-text-muted">
                      EVENT HAS CONCLUDED
                    </div>
                  ) : (
                    <div className="p-3 bg-primary-100 rounded-sm border border-primary-600/20 text-center font-body-sm text-xs text-primary-900">
                      Registration opens closer to date.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA Band */}
      <section className="py-16 bg-primary-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10 max-w-[720px] mx-auto">
          <h3 className="font-display-md text-white mb-3">
            EXPLORE MORE CAMPUS ACTIVITIES
          </h3>
          <p className="font-body text-text-on-dark-muted mb-8">
            View the full student calendar for upcoming hackathons, athletic meets, and festival dates.
          </p>
          <Button to="/events" variant="primary-on-dark" size="md" withArrow>
            VIEW ALL EVENTS
          </Button>
        </Container>
      </section>
    </PageTransition>
  );
};
