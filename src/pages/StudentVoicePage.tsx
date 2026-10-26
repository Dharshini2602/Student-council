import React from 'react';
import { MessageSquarePlus, ShieldCheck, HeartPulse, CheckCircle2, Lock } from 'lucide-react';
import { Container } from '../components/common/Container';
import { FeedbackForm } from '../components/feedback/FeedbackForm';
import { PageTransition } from '../components/common/PageTransition';

export const StudentVoicePage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-secondary inline-block" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-secondary-light">
                STUDENT PARTICIPATION PORTAL
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white uppercase tracking-wide leading-tight">
              YOUR VOICE MATTERS.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Help improve campus life by sharing your suggestions, ideas, and concerns. Every proposal is logged, tracked, and discussed during council review sessions.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Feedback Section */}
      <section className="py-16 bg-light-bg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column (8 cols) */}
            <div className="lg:col-span-8">
              <FeedbackForm />
            </div>

            {/* Sidebar Guidelines & Principles (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* How it Works Card */}
              <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-4">
                <h3 className="font-heading text-xl text-navy uppercase border-b border-gray-100 pb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-secondary" />
                  <span>How We Process Feedback</span>
                </h3>

                <ol className="space-y-4 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="font-mono font-bold text-primary bg-primary/10 rounded-full w-5 h-5 flex items-center justify-center shrink-0 text-xs">
                      1
                    </span>
                    <div>
                      <strong className="block text-navy font-semibold">Logged with Reference</strong>
                      <span className="text-muted-text text-xs">Every submission gets a unique reference ID.</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="font-mono font-bold text-primary bg-primary/10 rounded-full w-5 h-5 flex items-center justify-center shrink-0 text-xs">
                      2
                    </span>
                    <div>
                      <strong className="block text-navy font-semibold">Council Committee Review</strong>
                      <span className="text-muted-text text-xs">Assigned to the corresponding secretary (Academic, Facilities, Cultural).</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="font-mono font-bold text-primary bg-primary/10 rounded-full w-5 h-5 flex items-center justify-center shrink-0 text-xs">
                      3
                    </span>
                    <div>
                      <strong className="block text-navy font-semibold">Institutional Presentation</strong>
                      <span className="text-muted-text text-xs">Constructive proposals are brought to the Principal and faculty advisory council.</span>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Student Wellbeing Notice */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider">
                  <HeartPulse className="w-4 h-4" />
                  <span>Personal Support & Wellbeing</span>
                </div>
                <h4 className="font-heading text-lg text-navy uppercase">
                  Confidential Guidance
                </h4>
                <p className="text-xs text-muted-text leading-relaxed">
                  If you are experiencing personal distress, academic stress, or require confidential counseling, PPGIT maintains authorized student counselors. You can request guidance without judgment.
                </p>
                <div className="pt-2 text-xs text-gray-500">
                  Contact Counselor Office: <strong className="text-navy">counseling@ppg.edu.in</strong>
                </div>
              </div>

              {/* Privacy Safeguards */}
              <div className="bg-light-blue/70 rounded-xl p-6 border border-primary/20 space-y-2 text-xs text-navy">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-primary">
                  <Lock className="w-4 h-4" />
                  <span>Privacy Safeguard</span>
                </div>
                <p className="leading-relaxed">
                  You can submit suggestions anonymously. If you choose to share your email, it is only used to provide status updates regarding your proposal.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};
