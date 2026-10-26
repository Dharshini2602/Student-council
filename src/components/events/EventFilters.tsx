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
    <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8 pb-6 border-b border-gray-200">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-150 ${
              activeCategory === category
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-muted-text border border-gray-200 hover:border-primary/40 hover:text-navy'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative min-w-[260px] md:max-w-xs">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search campus events..."
          className="w-full pl-10 pr-9 py-2 rounded text-sm bg-white border border-gray-200 text-body-text placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
