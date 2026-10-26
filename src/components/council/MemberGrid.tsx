import React, { useState } from 'react';
import { CouncilMember, CouncilRoleCategory } from '../../types/council';
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
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-150 ${
              selectedCategory === cat
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-muted-text border border-gray-200 hover:border-primary/40 hover:text-navy'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};
