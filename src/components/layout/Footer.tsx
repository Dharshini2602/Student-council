import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import { Container } from '../common/Container';
import { FOOTER_LINKS } from '../../data/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-900 text-white border-t border-white/10 relative overflow-hidden">
      {/* Dot texture applied to section background only */}
      <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />

      <Container className="relative pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1: Identity & Crest & Tagline (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-white p-1 border border-border">
                <img
                  src="/assets/logo/ppgit-student-council.png"
                  alt="PPGIT Crest"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="font-display-sm text-xl text-white block leading-none">
                  PPG INSTITUTE OF TECHNOLOGY
                </span>
                <span className="font-label text-xs text-accent-600 tracking-wider block mt-1">
                  STUDENT COUNCIL
                </span>
              </div>
            </div>

            <p className="font-body-sm text-text-on-dark-muted max-w-md pt-2">
              The official representative body of students at PPG Institute of Technology, Coimbatore. Empowering student leadership, fostering campus collaboration, and championing student welfare.
            </p>

            <div className="pt-2">
              <span className="font-label text-xs text-accent-600 tracking-widest block">
                LEAD. REPRESENT. INSPIRE.
              </span>
            </div>
          </div>

          {/* Col 2: Explore Navigation (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display-sm text-base text-white border-b border-white/10 pb-2">
              EXPLORE
            </h3>
            <ul className="space-y-2.5 font-body-sm">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-on-dark-muted hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal & Institutional Policies (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display-sm text-base text-white border-b border-white/10 pb-2">
              LEGAL
            </h3>
            <ul className="space-y-2.5 font-body-sm">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  {link.isExternal ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-on-dark-muted hover:text-white hover:underline transition-colors inline-flex items-center gap-1.5 py-0.5"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-text-on-dark-muted hover:text-white hover:underline transition-colors block py-0.5"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Institutional Contact (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display-sm text-base text-white border-b border-white/10 pb-2">
              CONTACT
            </h3>
            <div className="space-y-3 font-body-sm text-text-on-dark-muted">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-600 shrink-0 mt-1" />
                <span className="leading-snug">Saravanampatti, Coimbatore, TN 641035</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-600 shrink-0" />
                <a
                  href={`mailto:${FOOTER_LINKS.contact.email}`}
                  className="hover:text-white hover:underline transition-colors truncate"
                >
                  {FOOTER_LINKS.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-text-on-dark-muted">
          <p>
            &copy; {currentYear} PPG Institute of Technology Student Council. All rights reserved.
          </p>

          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center gap-2 text-text-on-dark-muted hover:text-white transition-colors py-2 px-3 rounded-sm hover:bg-white/5 focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent-600"
            aria-label="Back to top of page"
          >
            <span className="font-label text-xs">BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-accent-600" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
