import React from 'react';
import { ShieldCheck, Lock, FileText, AlertTriangle, Mail } from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { PageTransition } from '../components/common/PageTransition';

export const PrivacyPage: React.FC = () => {
  return (
    <PageTransition>
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-secondary inline-block" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-secondary-light">
                DATA & PRIVACY TRANSPARENCY
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white uppercase tracking-wide leading-tight">
              PRIVACY POLICY
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Information regarding data handling, feedback confidentiality, and user rights for the PPGIT Student Council digital portal.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Privacy Notice */}
      <section className="py-16 bg-white border-b border-gray-200">
        <Container className="max-w-4xl">
          {/* Institutional Label Alert */}
          <div className="mb-10 p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold mb-1">PROPOSED POLICY DRAFT FOR APPROVAL</strong>
              This privacy framework reflects standard collegiate data governance practices and proposed Student Council procedures. It is subject to review and final institutional ratification by the administration of PPG Institute of Technology.
            </div>
          </div>

          <div className="prose max-w-none text-body-text space-y-10 text-sm sm:text-base leading-relaxed">
            {/* Section 1 */}
            <div>
              <h2 className="font-heading text-2xl text-navy uppercase mb-3 flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-primary" />
                <span>1. Information We Collect</span>
              </h2>
              <p className="text-muted-text">
                The PPGIT Student Council website is designed with a privacy-first approach. We only collect information voluntarily provided by students through the <strong>Student Voice</strong> feedback form:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-1.5 text-muted-text text-sm">
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
            <div>
              <h2 className="font-heading text-2xl text-navy uppercase mb-3 flex items-center gap-2.5">
                <Lock className="w-5 h-5 text-primary" />
                <span>2. How Information is Processed & Who Has Access</span>
              </h2>
              <p className="text-muted-text">
                Submissions are received by the designated Student Council Secretariat and routed according to the selected category:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-1.5 text-muted-text text-sm">
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
            <div>
              <h2 className="font-heading text-2xl text-navy uppercase mb-3 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>3. Limits to Confidentiality</span>
              </h2>
              <p className="text-muted-text">
                While the council strictly respects student privacy, we do not promise absolute confidentiality in extraordinary circumstances where there is an imminent risk of severe harm to a student, clear safety threats, or matters requiring mandatory institutional reporting under statutory education regulations. In such critical instances, concerns are promptly and discretely escalated to authorized college leadership or healthcare professionals.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-heading text-2xl text-navy uppercase mb-3 flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-primary" />
                <span>4. Privacy Inquiries & Contact</span>
              </h2>
              <p className="text-muted-text">
                If you have questions about how your suggestion is handled or wish to have an existing submission deleted or amended, please contact:
              </p>
              <div className="mt-4 p-4 rounded-lg bg-light-bg border border-gray-200 text-sm">
                <strong className="block text-navy font-semibold">PPGIT Student Council Secretariat</strong>
                <span className="text-muted-text block">PPG Institute of Technology, Coimbatore</span>
                <span className="text-primary font-mono text-xs block mt-1">
                  Email: studentcouncil@ppg.edu.in
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};
