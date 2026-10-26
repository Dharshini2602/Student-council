import React from 'react';
import { Users, ShieldCheck, Mail, Info } from 'lucide-react';
import { Container } from '../components/common/Container';
import { MemberGrid } from '../components/council/MemberGrid';
import { PageTransition } from '../components/common/PageTransition';
import { COUNCIL_MEMBERS } from '../data/council';

export const CouncilPage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-secondary inline-block" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-secondary-light">
                STUDENT LEADERSHIP DIRECTORY
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white uppercase tracking-wide leading-tight">
              MEET YOUR REPRESENTATIVES.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Elected and nominated student leaders representing academic departments, cultural activities, technical initiatives, and student welfare across PPGIT.
            </p>
          </div>
        </Container>
      </section>

      {/* Directory Section */}
      <section className="py-16 bg-light-bg min-h-[600px]">
        <Container>
          {/* Institutional Note on Placeholders */}
          <div className="mb-10 p-4 sm:p-5 rounded-xl bg-white border border-amber-200/80 shadow-sm flex items-start gap-3.5">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              <strong className="text-navy font-semibold">Institutional Governance Notice:</strong> The profiles below reflect the approved structural designations and nominee roles for the academic session. Official student photographs and finalized portfolio allocations are updated in coordination with the college administration.
            </div>
          </div>

          {/* Filterable Member Grid */}
          <MemberGrid members={COUNCIL_MEMBERS} />

          {/* Contact the Council Office */}
          <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-white border border-gray-200 shadow-sm text-center max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl text-navy uppercase mb-2">
              Need to Connect with a Representative?
            </h3>
            <p className="text-sm text-muted-text max-w-xl mx-auto mb-6 leading-relaxed">
              Student Council representatives hold regular office hours and attend student forum meetings. For general governance inquiries or departmental concerns, write to:
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-light-blue text-primary font-mono text-sm font-bold border border-primary/20">
              <Mail className="w-4 h-4 text-secondary" />
              <span>studentcouncil@ppg.edu.in</span>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};
