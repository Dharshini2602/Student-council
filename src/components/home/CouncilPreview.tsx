import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { MemberCard } from '../council/MemberCard';
import { COUNCIL_MEMBERS } from '../../data/council';

export const CouncilPreview: React.FC = () => {
  // Show up to four council member cards as required
  const previewMembers = COUNCIL_MEMBERS.slice(0, 4);

  return (
    <div className="py-20 bg-white border-b border-gray-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="STUDENT GOVERNANCE"
            title="THE PEOPLE WHO REPRESENT YOU."
            description="Dedicated student leaders elected to advocate for your interests, coordinate campus fests, and ensure every voice is heard."
            className="mb-0"
          />

          <div className="mt-6 md:mt-0 shrink-0">
            <Button
              to="/council"
              variant="outline"
              size="md"
              className="flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              <span>MEET THE COUNCIL</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* 4 Council Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </div>
  );
};
