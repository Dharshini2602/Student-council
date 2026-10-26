import React from 'react';
import { Mail, User } from 'lucide-react';
import { CouncilMember } from '../../types/council';

interface MemberCardProps {
  member: CouncilMember;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="group bg-white border border-border rounded-md overflow-hidden transition-all duration-200 ease-out hover:-translate-y-1 hover:border-primary-600 hover:shadow-2 flex flex-col justify-between">
      <div>
        {/* 4:5 photo with consistent object-position top, grayscale 15% to 0% on hover */}
        {/* 4:5 photo with consistent object-position top, grayscale 15% to 0% on hover */}
        <div className="relative aspect-[4/5] w-full bg-primary-100 overflow-hidden border-b border-border">
          {/* Placeholder State: tinted block with initials icon (background fallback) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none select-none bg-primary-100 z-0">
            <div className="w-16 h-16 rounded-full bg-primary-700/10 text-primary-700 flex items-center justify-center mb-2">
              <User className="w-8 h-8" />
            </div>
            <span className="font-display-sm text-primary-700/40 text-2xl">
              {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
            </span>
          </div>

          {member.photograph ? (
            <img
              src={member.photograph}
              alt={member.name}
              className="relative z-10 w-full h-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          ) : null}

          {/* Category Chip top-right */}
          <div className="absolute top-3 right-3 z-20">
            <span className="font-label text-[10px] bg-primary-700 text-white px-2 py-0.5 rounded-sm shadow-1">
              {member.category}
            </span>
          </div>
        </div>

        {/* Member Details (24px padding) */}
        <div className="p-6">
          {/* Designation in label style green */}
          <span className="font-label text-xs text-accent-700 block mb-1">
            {member.designation}
          </span>

          {/* Name in display-sm */}
          <h3 className="font-display-sm text-primary-700 leading-snug group-hover:text-primary-800 transition-colors">
            {member.name}
          </h3>

          {/* Department in body-sm muted */}
          <p className="mt-2 font-body-sm text-text-muted">
            {member.department}
          </p>
          {member.year && (
            <p className="text-xs text-text-muted mt-0.5 font-medium">
              {member.year}
            </p>
          )}

          {member.bio && (
            <p className="mt-3 pt-3 border-t border-border font-body-sm text-text-muted line-clamp-2">
              {member.bio}
            </p>
          )}
        </div>
      </div>

      {/* Contact Footer */}
      {member.email && (
        <div className="px-6 py-3 bg-surface border-t border-border flex items-center justify-between font-body-sm">
          <span className="text-xs text-text-muted font-medium">Official Contact:</span>
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-1.5 text-xs text-primary-700 hover:text-accent-700 font-semibold transition-colors truncate max-w-[180px] focus:outline-none focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-accent-600 rounded-sm"
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{member.email}</span>
          </a>
        </div>
      )}
    </div>
  );
};
