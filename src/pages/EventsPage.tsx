import React, { useState, useMemo } from 'react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { EventFilters } from '../components/events/EventFilters';
import { EventGrid } from '../components/events/EventGrid';
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

  // Filter events based on active category, search query, and status
  const filteredEvents = useMemo(() => {
    return EVENTS_DATA.filter((event) => {
      // Hide drafts from public view
      if (event.status === 'draft') return false;

      // Status filter
      if (statusFilter !== 'all' && event.status !== statusFilter) {
        return false;
      }

      // Category filter
      if (activeCategory !== 'All' && event.category !== activeCategory) {
        return false;
      }

      // Search query
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

  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-secondary inline-block" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-secondary-light">
                CAMPUS CALENDAR
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white uppercase tracking-wide leading-tight">
              CAMPUS EVENTS & FESTIVALS
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Stay engaged with upcoming symposiums, annual cultural celebrations, technical hackathons, and athletic tournaments across PPGIT.
            </p>
          </div>
        </Container>
      </section>

      {/* Events Listing */}
      <section className="py-16 bg-light-bg min-h-[600px]">
        <Container>
          {/* Status Sub-filter Bar */}
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="text-gray-500 uppercase tracking-wider mr-2 hidden sm:inline">
                Timeline:
              </span>
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1.5 rounded uppercase tracking-wider transition-colors ${
                  statusFilter === 'all'
                    ? 'bg-navy text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                All Events
              </button>
              <button
                onClick={() => setStatusFilter('upcoming')}
                className={`px-3 py-1.5 rounded uppercase tracking-wider transition-colors ${
                  statusFilter === 'upcoming'
                    ? 'bg-navy text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setStatusFilter('completed')}
                className={`px-3 py-1.5 rounded uppercase tracking-wider transition-colors ${
                  statusFilter === 'completed'
                    ? 'bg-navy text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Archive / Completed
              </button>
            </div>

            <span className="text-xs text-muted-text font-medium">
              Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
            </span>
          </div>

          {/* Category & Search Filter Bar */}
          <EventFilters
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Results Grid */}
          <EventGrid
            events={filteredEvents}
            emptyMessage={
              searchQuery
                ? `No events matching "${searchQuery}". Try adjusting your keywords or category filters.`
                : 'No campus events are currently listed for this category.'
            }
          />
        </Container>
      </section>
    </PageTransition>
  );
};
