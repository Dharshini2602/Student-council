import React, { useState } from 'react';
import { CouncilMember } from '../../types/council';
import { MemberCard } from './MemberCard';

interface MemberGridProps {
  members: CouncilMember[];
}

export const MemberGrid: React.FC<MemberGridProps> = ({ members }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: string[] = [
    'All',
    'Executive',
    'Secretariat',
    'Cultural & Technical',
    'Welfare',
  ];

  const filteredMembers =
    selectedCategory === 'All'
      ? members
      : members.filter((m) => m.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Chips & Result Count */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none" role="tablist" aria-label="Council categories">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat)}
                className={`h-[36px] px-4 rounded-sm border font-label text-xs transition-colors whitespace-nowrap focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent-600 ${
                  isSelected
                    ? 'bg-primary-700 text-white border-primary-700 shadow-1'
                    : 'bg-white text-text-muted border-border hover:border-primary-600 hover:text-text-base'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <span className="font-body-sm text-text-muted shrink-0">
          Showing {filteredMembers.length} representatives
        </span>
      </div>

      {/* Grid: 3 columns desktop (lg), 2 tablet (md), 1 mobile with 24px gap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};
