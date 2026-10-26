import React from 'react';
import { Search, X } from 'lucide-react';
import { EventCategory } from '../../types/event';

interface EventFiltersProps {
  categories: EventCategory[];
  activeCategory: EventCategory;
  onSelectCategory: (category: EventCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const EventFilters: React.FC<EventFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8 pb-6 border-b border-border">
      {/* Category Chips: 36px high, radius 4px, border 1px, label style. Selected: filled primary-700, white text */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none" role="tablist" aria-label="Event category filters">
        {categories.map((category) => {
          const isSelected = activeCategory === category;
          return (
            <button
              key={category}
              role="tab"
              aria-selected={isSelected}
              onClick={() => onSelectCategory(category)}
              className={`h-[36px] px-4 rounded-sm border font-label text-xs transition-colors whitespace-nowrap focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent-600 ${
                isSelected
                  ? 'bg-primary-700 text-white border-primary-700 shadow-1'
                  : 'bg-white text-text-muted border-border hover:border-primary-600 hover:text-text-base'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Search Input: 48px, left search icon, radius 4px, border-strong, focus ring green */}
      <div className="relative min-w-[260px] md:max-w-xs">
        <label htmlFor="events-search-input" className="sr-only">
          Search campus events
        </label>
        <Search className="w-5 h-5 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          id="events-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search campus events..."
          className="w-full h-[48px] pl-11 pr-10 rounded-sm bg-white border border-border-strong text-text-base placeholder:text-text-muted font-body-sm focus:outline-none focus:border-primary-700 focus:ring-3 focus:ring-accent-600/30 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-base p-1 rounded-sm focus:outline-none focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-accent-600"
            aria-label="Clear search query"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
