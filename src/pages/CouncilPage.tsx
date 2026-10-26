import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Info } from 'lucide-react';
import { Container } from '../components/common/Container';
import { MemberGrid } from '../components/council/MemberGrid';
import { Button } from '../components/common/Button';
import { PageTransition } from '../components/common/PageTransition';
import { COUNCIL_MEMBERS } from '../data/council';

export const CouncilPage: React.FC = () => {
  return (
    <PageTransition>
      {/* 320px tall navy band Page Hero with breadcrumb and outlined initial */}
      <section className="relative min-h-[320px] flex items-center bg-primary-900 text-white pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-8 right-0 select-none pointer-events-none hidden md:block" aria-hidden="true">
          <span className="text-outline-decorative text-[14rem] leading-none">C</span>
        </div>

        <Container className="relative z-10">
          <div className="max-w-[720px]">
            <nav className="font-label text-xs text-text-on-dark-muted mb-3" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="mx-2">/</span>
              <span className="text-accent-600">COUNCIL</span>
            </nav>

            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-[2px] bg-accent-600 inline-block shrink-0" aria-hidden="true" />
              <span className="font-label text-accent-600">STUDENT LEADERSHIP DIRECTORY</span>
            </div>

            <h1 className="font-display-lg text-white">
              MEET YOUR REPRESENTATIVES.
            </h1>

            <p className="mt-3 font-body text-text-on-dark-muted">
              Elected and nominated student leaders representing academic departments, cultural activities, technical initiatives, and student welfare across PPGIT.
            </p>
          </div>
        </Container>
      </section>

      {/* Directory Section: Surface Background */}
      <section className="py-12 md:py-16 bg-surface min-h-[600px] border-b border-border">
        <Container>
          {/* Member Grid */}
          <MemberGrid members={COUNCIL_MEMBERS} />
        </Container>
      </section>

      {/* Closing CTA Band */}
      <section className="py-16 bg-primary-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10 max-w-[720px] mx-auto">
          <h3 className="font-display-md text-white mb-3">
            NEED TO CONNECT WITH A REPRESENTATIVE?
          </h3>
          <p className="font-body text-text-on-dark-muted mb-8">
            Student Council representatives hold regular office hours and attend student forum meetings. For general governance inquiries or departmental concerns, contact our secretariat:
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-white/5 border border-white/10 font-mono text-sm text-white">
            <Mail className="w-4 h-4 text-accent-600" />
            <span>studentcouncil@ppg.edu.in</span>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};
