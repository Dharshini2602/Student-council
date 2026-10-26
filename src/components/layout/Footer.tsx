import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { Container } from '../common/Container';
import { FOOTER_LINKS } from '../../data/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white border-t border-white/10 relative overflow-hidden">
      {/* Subtle background dot texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      <Container className="relative pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Identity & Crest (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="flex items-center justify-center h-12 w-12 rounded bg-white p-1 shadow">
                <img
                  src="/assets/logo/ppgit-student-council.png"
                  alt="PPGIT Crest"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="font-heading text-xl tracking-wider block text-white">
                  PPG INSTITUTE OF TECHNOLOGY
                </span>
                <span className="text-xs text-secondary font-semibold tracking-widest block uppercase">
                  Student Council
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-md pt-2">
              The official representative body of students at PPG Institute of Technology, Coimbatore. Empowering student leadership, fostering campus collaboration, and championing student welfare.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-secondary-light uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
              <span>LEAD. REPRESENT. INSPIRE.</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading text-base tracking-wider text-white uppercase border-b border-white/10 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-secondary-light transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Governance & Privacy (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-heading text-base tracking-wider text-white uppercase border-b border-white/10 pb-2">
              Policies
            </h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  {link.isExternal ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-secondary-light transition-colors inline-flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-secondary-light transition-colors"
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
            <h3 className="font-heading text-base tracking-wider text-white uppercase border-b border-white/10 pb-2">
              Contact
            </h3>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="leading-snug">Saravanampatti, Coimbatore, TN 641035</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a
                  href={`mailto:${FOOTER_LINKS.contact.email}`}
                  className="hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  {FOOTER_LINKS.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {currentYear} PPG Institute of Technology Student Council. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-gray-200 transition-colors">
              Privacy Statement
            </Link>
            <span>•</span>
            <span className="flex items-center gap-1 text-gray-400">
              Built for Students with <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
