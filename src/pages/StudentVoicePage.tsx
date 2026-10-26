import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartPulse, Lock } from 'lucide-react';
import { Container } from '../components/common/Container';
import { FeedbackForm } from '../components/feedback/FeedbackForm';
import { PageTransition } from '../components/common/PageTransition';

export const StudentVoicePage: React.FC = () => {
  return (
    <PageTransition>
      {/* 320px tall navy band Page Hero */}
      <section className="relative min-h-[320px] flex items-center bg-primary-900 text-white pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-8 right-0 select-none pointer-events-none hidden md:block" aria-hidden="true">
          <span className="text-outline-decorative text-[14rem] leading-none">V</span>
        </div>

        <Container className="relative z-10">
          <div className="max-w-[720px]">
            <nav className="font-label text-xs text-text-on-dark-muted mb-3" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="mx-2">/</span>
              <span className="text-accent-600">STUDENT VOICE</span>
            </nav>

            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-[2px] bg-accent-600 inline-block shrink-0" aria-hidden="true" />
              <span className="font-label text-accent-600">STUDENT PARTICIPATION PORTAL</span>
            </div>

            <h1 className="font-display-lg text-white">
              YOUR VOICE MATTERS.
            </h1>

            <p className="mt-3 font-body text-text-on-dark-muted">
              Help improve campus life by sharing your suggestions, ideas, and concerns. Every proposal is logged, tracked, and discussed during council review sessions.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Form Section: 5/7 Asymmetric Split (Intro & Privacy left 5, Form right 7) */}
      <section className="py-16 md:py-20 bg-surface border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Columns: Intro, How It Works, and Privacy Summary */}
            <div className="lg:col-span-5 space-y-6">
              {/* How it Works Card */}
              <div className="bg-white rounded-md p-6 sm:p-8 border border-border space-y-4">
                <h3 className="font-display-sm text-primary-700 border-b border-border pb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent-700" />
                  <span>HOW WE PROCESS FEEDBACK</span>
                </h3>

                <ol className="space-y-4 font-body-sm text-text-base">
                  <li className="flex items-start gap-3">
                    <span className="font-display-sm text-primary-700 text-lg leading-none shrink-0 w-6">
                      01
                    </span>
                    <div>
                      <strong className="block text-text-base font-semibold">Logged with Reference</strong>
                      <span className="text-text-muted text-xs">Every submission gets a unique reference ID.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="font-display-sm text-primary-700 text-lg leading-none shrink-0 w-6">
                      02
                    </span>
                    <div>
                      <strong className="block text-text-base font-semibold">Council Committee Review</strong>
                      <span className="text-text-muted text-xs">Assigned to corresponding secretary (Academic, Facilities, Cultural).</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="font-display-sm text-primary-700 text-lg leading-none shrink-0 w-6">
                      03
                    </span>
                    <div>
                      <strong className="block text-text-base font-semibold">Institutional Presentation</strong>
                      <span className="text-text-muted text-xs">Constructive proposals are brought to the Principal and faculty advisory council.</span>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Student Wellbeing Notice */}
              <div className="bg-white rounded-md p-6 border border-border space-y-3">
                <div className="flex items-center gap-2 text-accent-700 font-label text-xs">
                  <HeartPulse className="w-4 h-4" />
                  <span>PERSONAL SUPPORT & WELLBEING</span>
                </div>
                <h4 className="font-display-sm text-primary-700">
                  CONFIDENTIAL GUIDANCE
                </h4>
                <p className="font-body-sm text-text-muted leading-relaxed">
                  If you are experiencing personal distress, academic stress, or require confidential counseling, PPGIT maintains authorized student counselors. You can request guidance without judgment.
                </p>
                <div className="pt-2 font-body-sm text-xs text-text-muted">
                  Contact Counselor Office: <strong className="text-text-base">counseling@ppg.edu.in</strong>
                </div>
              </div>

              {/* Privacy Safeguards */}
              <div className="bg-primary-100 rounded-md p-6 border border-primary-600/20 space-y-2 font-body-sm text-xs text-primary-900">
                <div className="flex items-center gap-2 font-label text-xs text-primary-700">
                  <Lock className="w-4 h-4" />
                  <span>PRIVACY SAFEGUARD</span>
                </div>
                <p className="leading-relaxed">
                  You can submit suggestions anonymously. If you choose to share your email, it is only used to provide status updates regarding your proposal.
                </p>
              </div>
            </div>

            {/* Right 7 Columns: Form */}
            <div className="lg:col-span-7">
              <FeedbackForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA Band */}
      <section className="py-16 bg-primary-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10 max-w-[720px] mx-auto">
          <h3 className="font-display-md text-white mb-3">
            HAVE QUESTIONS ABOUT PRIVACY?
          </h3>
          <p className="font-body text-text-on-dark-muted mb-8">
            Learn about how student submissions are handled, confidentiality limits, and data retention rules.
          </p>
          <Link
            to="/privacy"
            className="font-button text-white underline underline-offset-4 hover:text-accent-600 transition-colors"
          >
            READ OUR PRIVACY STATEMENT &rarr;
          </Link>
        </Container>
      </section>
    </PageTransition>
  );
};
