import React from 'react';
import { Mail, GraduationCap, UserCheck } from 'lucide-react';
import { CouncilMember } from '../../types/council';

interface MemberCardProps {
  member: CouncilMember;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Photo Container with fixed aspect ratio */}
        <div className="relative aspect-[4/4.5] w-full bg-slate-100 overflow-hidden border-b border-gray-100">
          {member.photograph ? (
            <img
              src={member.photograph}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                // If member photo is not yet loaded, show institutional avatar
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          ) : null}

          {/* Fallback Graphic */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-light-blue to-white p-6 text-center pointer-events-none">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <UserCheck className="w-10 h-10" />
            </div>
            <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
              {member.designation}
            </span>
          </div>

          {/* Category / Role Badge */}
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-block px-2.5 py-1 rounded bg-navy/90 text-white text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm border border-white/10">
              {member.category}
            </span>
          </div>

          {member.isPlaceholder && (
            <div className="absolute bottom-2 left-2 z-10">
              <span className="inline-block px-2 py-0.5 rounded bg-amber-500/90 text-white text-[9px] font-bold tracking-wider uppercase">
                Official Nominee / Placeholder
              </span>
            </div>
          )}
        </div>

        {/* Member Details */}
        <div className="p-5 sm:p-6">
          <div className="mb-2">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
              {member.designation}
            </span>
            <h3 className="font-heading text-lg sm:text-xl text-navy uppercase leading-tight group-hover:text-primary transition-colors">
              {member.name}
            </h3>
          </div>

          <div className="mt-3 space-y-1.5 text-xs text-muted-text">
            <div className="flex items-start gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span className="leading-snug">{member.department}</span>
            </div>
            {member.year && (
              <p className="text-[11px] text-gray-500 pl-5">
                Batch: {member.year}
              </p>
            )}
          </div>

          {member.bio && (
            <p className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-600 line-clamp-3 leading-relaxed">
              {member.bio}
            </p>
          )}
        </div>
      </div>

      {/* Contact Footer */}
      {member.email && (
        <div className="px-5 py-3.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs">
          <span className="text-gray-500 font-medium">Official Contact:</span>
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-1.5 text-primary hover:text-secondary font-semibold transition-colors truncate max-w-[180px]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="truncate">{member.email}</span>
          </a>
        </div>
      )}
    </div>
  );
};
