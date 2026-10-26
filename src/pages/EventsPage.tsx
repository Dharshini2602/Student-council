import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { EventFilters } from '../components/events/EventFilters';
import { EventGrid } from '../components/events/EventGrid';
import { Button } from '../components/common/Button';
import { PageTransition } from '../components/common/PageTransition';
import { EVENTS_DATA } from '../data/events';
import { EventCategory } from '../types/event';

export const EventsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'upcoming' | 'completed'>('all');

  const categories: EventCategory[] = [
    'All',
    'Celebration',
    'Cultural',
    'Symposium',
    'Sports',
    'Technical',
    'Other',
  ];

  const filteredEvents = useMemo(() => {
    return EVENTS_DATA.filter((event) => {
      if (event.status === 'draft') return false;

      if (statusFilter !== 'all' && event.status !== statusFilter) {
        return false;
      }

      if (activeCategory !== 'All' && event.category !== activeCategory) {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = event.title.toLowerCase().includes(query);
        const matchesDesc = event.description.toLowerCase().includes(query);
        const matchesVenue = event.venue?.toLowerCase().includes(query) || false;
        const matchesCat = event.category.toLowerCase().includes(query);
        return matchesTitle || matchesDesc || matchesVenue || matchesCat;
      }

      return true;
    });
  }, [activeCategory, searchQuery, statusFilter]);

  const handleResetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setStatusFilter('all');
  };

  return (
    <PageTransition>
      {/* 320px tall navy band Page Hero with breadcrumb and outlined initial */}
      <section className="relative min-h-[320px] flex items-center bg-primary-900 text-white pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-8 right-0 select-none pointer-events-none hidden md:block" aria-hidden="true">
          <span className="text-outline-decorative text-[14rem] leading-none">E</span>
        </div>

        <Container className="relative z-10">
          <div className="max-w-[720px]">
            <nav className="font-label text-xs text-text-on-dark-muted mb-3" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="mx-2">/</span>
              <span className="text-accent-600">EVENTS</span>
            </nav>

            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-[2px] bg-accent-600 inline-block shrink-0" aria-hidden="true" />
              <span className="font-label text-accent-600">CAMPUS CALENDAR</span>
            </div>

            <h1 className="font-display-lg text-white">
              CAMPUS EVENTS & FESTIVALS
            </h1>

            <p className="mt-3 font-body text-text-on-dark-muted">
              Stay engaged with upcoming symposiums, annual cultural celebrations, technical hackathons, and athletic tournaments across PPGIT.
            </p>
          </div>
        </Container>
      </section>

      {/* Listing Section: Surface Background */}
      <section className="py-12 md:py-16 bg-surface min-h-[600px] border-b border-border">
        <Container>
          {/* Timeline status toggle pills & result counter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
            <div className="flex items-center gap-2" role="tablist" aria-label="Timeline Filter">
              <span className="font-label text-xs text-text-muted mr-1 hidden sm:inline">
                TIMELINE:
              </span>
              <button
                role="tab"
                aria-selected={statusFilter === 'all'}
                onClick={() => setStatusFilter('all')}
                className={`h-[36px] px-3.5 rounded-sm font-label text-xs transition-colors border focus:outline-none focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-accent-600 ${
                  statusFilter === 'all'
                    ? 'bg-primary-700 text-white border-primary-700 shadow-1'
                    : 'bg-white text-text-muted border-border hover:border-primary-600 hover:text-text-base'
                }`}
              >
                ALL
              </button>
              <button
                role="tab"
                aria-selected={statusFilter === 'upcoming'}
                onClick={() => setStatusFilter('upcoming')}
                className={`h-[36px] px-3.5 rounded-sm font-label text-xs transition-colors border focus:outline-none focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-accent-600 ${
                  statusFilter === 'upcoming'
                    ? 'bg-primary-700 text-white border-primary-700 shadow-1'
                    : 'bg-white text-text-muted border-border hover:border-primary-600 hover:text-text-base'
                }`}
              >
                UPCOMING
              </button>
              <button
                role="tab"
                aria-selected={statusFilter === 'completed'}
                onClick={() => setStatusFilter('completed')}
                className={`h-[36px] px-3.5 rounded-sm font-label text-xs transition-colors border focus:outline-none focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-accent-600 ${
                  statusFilter === 'completed'
                    ? 'bg-primary-700 text-white border-primary-700 shadow-1'
                    : 'bg-white text-text-muted border-border hover:border-primary-600 hover:text-text-base'
                }`}
              >
                COMPLETED
              </button>
            </div>

            <span className="font-body-sm text-text-muted">
              Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
            </span>
          </div>

          {/* Category Chips and 48px Search Input */}
          <EventFilters
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Grid: 3 columns desktop, 2 tablet, 1 mobile with 24px gap */}
          <EventGrid
            events={filteredEvents}
            onResetFilters={handleResetFilters}
            emptyMessage={
              searchQuery
                ? `No events matching "${searchQuery}". Try adjusting your keywords or category filters.`
                : 'No campus events are currently listed for this category.'
            }
          />
        </Container>
      </section>

      {/* Closing CTA Band */}
      <section className="py-16 bg-primary-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10 max-w-[720px] mx-auto">
          <h3 className="font-display-md text-white mb-3">
            HAVE AN IDEA FOR A CAMPUS FESTIVAL?
          </h3>
          <p className="font-body text-text-on-dark-muted mb-8">
            The student council coordinates event budgets, logistics, and scheduling. Submit your festival or symposium proposal today.
          </p>
          <Button to="/student-voice" variant="primary-on-dark" size="md" withArrow>
            PROPOSE AN EVENT
          </Button>
        </Container>
      </section>
    </PageTransition>
  );
};
