import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, FileText, AlertTriangle, Mail } from 'lucide-react';
import { Container } from '../components/common/Container';
import { PageTransition } from '../components/common/PageTransition';

export const PrivacyPage: React.FC = () => {
  return (
    <PageTransition>
      {/* 320px tall navy band Page Hero */}
      <section className="relative min-h-[320px] flex items-center bg-primary-900 text-white pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-8 right-0 select-none pointer-events-none hidden md:block" aria-hidden="true">
          <span className="text-outline-decorative text-[14rem] leading-none">P</span>
        </div>

        <Container className="relative z-10">
          <div className="max-w-[720px]">
            <nav className="font-label text-xs text-text-on-dark-muted mb-3" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="mx-2">/</span>
              <span className="text-accent-600">PRIVACY</span>
            </nav>

            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-[2px] bg-accent-600 inline-block shrink-0" aria-hidden="true" />
              <span className="font-label text-accent-600">DATA & PRIVACY TRANSPARENCY</span>
            </div>

            <h1 className="font-display-lg text-white">
              PRIVACY POLICY
            </h1>

            <p className="mt-3 font-body text-text-on-dark-muted">
              Information regarding data handling, feedback confidentiality, and user rights for the PPGIT Student Council digital portal.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Privacy Notice on Surface/White */}
      <section className="py-16 md:py-20 bg-surface border-b border-border">
        <Container size="reading">
          <div className="space-y-10 font-body text-text-base">
            {/* Section 1 */}
            <div className="bg-white p-8 rounded-md border border-border space-y-3">
              <h2 className="font-display-sm text-primary-700 flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-accent-700" />
                <span>1. INFORMATION WE COLLECT</span>
              </h2>
              <p className="font-body-sm text-text-muted leading-relaxed">
                The PPGIT Student Council website is designed with a privacy-first approach. We only collect information voluntarily provided by students through the <strong>Student Voice</strong> feedback form:
              </p>
              <ul className="list-disc pl-5 space-y-2 font-body-sm text-text-muted">
                <li>
                  <strong>Category, Subject, and Message:</strong> Required details regarding campus suggestions, facilities feedback, or event proposals.
                </li>
                <li>
                  <strong>Name and College Email:</strong> Optional fields provided if you wish to receive personalized follow-ups regarding your submission.
                </li>
                <li>
                  <strong>Anonymous Mode:</strong> When selected, no personal names, email identifiers, or student registration numbers are recorded.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="bg-white p-8 rounded-md border border-border space-y-3">
              <h2 className="font-display-sm text-primary-700 flex items-center gap-2.5">
                <Lock className="w-5 h-5 text-accent-700" />
                <span>2. HOW INFORMATION IS PROCESSED & WHO HAS ACCESS</span>
              </h2>
              <p className="font-body-sm text-text-muted leading-relaxed">
                Submissions are received by the designated Student Council Secretariat and routed according to the selected category:
              </p>
              <ul className="list-disc pl-5 space-y-2 font-body-sm text-text-muted">
                <li>
                  <strong>General Suggestions:</strong> Reviewed during periodic student council meetings with faculty coordinators.
                </li>
                <li>
                  <strong>Campus Facilities Concerns:</strong> Summarized without personal identifying details and presented to campus administration.
                </li>
                <li>
                  <strong>Access Restrictions:</strong> Only authorized council executives and faculty advisors hold administrative access. We do not sell, rent, or publicly expose individual submissions.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="bg-white p-8 rounded-md border border-border space-y-3">
              <h2 className="font-display-sm text-primary-700 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-accent-700" />
                <span>3. LIMITS TO CONFIDENTIALITY</span>
              </h2>
              <p className="font-body-sm text-text-muted leading-relaxed">
                While the council strictly respects student privacy, we do not promise absolute confidentiality in extraordinary circumstances where there is an imminent risk of severe harm to a student, clear safety threats, or matters requiring mandatory institutional reporting under statutory education regulations. In such critical instances, concerns are promptly and discretely escalated to authorized college leadership or healthcare professionals.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-white p-8 rounded-md border border-border space-y-3">
              <h2 className="font-display-sm text-primary-700 flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-accent-700" />
                <span>4. PRIVACY INQUIRIES & CONTACT</span>
              </h2>
              <p className="font-body-sm text-text-muted leading-relaxed">
                If you have questions about how your suggestion is handled or wish to have an existing submission deleted or amended, please contact:
              </p>
              <div className="mt-4 p-4 rounded-sm bg-surface border border-border font-body-sm">
                <strong className="block text-text-base font-semibold">PPGIT Student Council Secretariat</strong>
                <span className="text-text-muted block">PPG Institute of Technology, Coimbatore</span>
                <span className="text-primary-700 font-mono text-xs block mt-1">
                  Email: studentcouncil@ppg.edu.in
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA Band */}
      <section className="py-16 bg-primary-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10 max-w-[720px] mx-auto">
          <h3 className="font-display-md text-white mb-3">
            HAVE A QUESTION FOR THE COUNCIL?
          </h3>
          <p className="font-body text-text-on-dark-muted mb-8">
            Connect directly with your elected student representatives.
          </p>
          <Link
            to="/council"
            className="font-button text-white underline underline-offset-4 hover:text-accent-600 transition-colors"
          >
            VIEW COUNCIL DIRECTORY &rarr;
          </Link>
        </Container>
      </section>
    </PageTransition>
  );
};
