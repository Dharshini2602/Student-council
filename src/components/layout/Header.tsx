import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, MessageSquarePlus } from 'lucide-react';
import { NAV_ITEMS } from '../../data/navigation';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { MobileNavigation } from './MobileNavigation';
import { cn } from '../../lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Transparent on hero only when at top of homepage; on other pages or scrolled, solid navy or white
  const isTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isTransparent
            ? 'bg-transparent text-white py-4 md:py-6'
            : 'bg-navy/95 backdrop-blur-md text-white py-3 md:py-4 shadow-lg border-b border-white/10'
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Left: Official College Logo & Name */}
            <Link
              to="/"
              className="flex items-center gap-3.5 group focus:outline-none"
              aria-label="PPG Institute of Technology Student Council Homepage"
            >
              <div className="relative flex items-center justify-center h-11 w-11 rounded bg-white p-1 shadow-sm border border-white/20 transition-transform group-hover:scale-105">
                <img
                  src="/assets/logo/ppgit-student-council.png"
                  alt="PPGIT Crest"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    // Fallback to stylized SVG shield if png is still generating
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <svg viewBox="0 0 40 40" class="w-8 h-8 text-primary" fill="currentColor">
                          <path d="M20 2L36 7v13c0 10.5-6.8 16.5-16 19C10.8 36.5 4 30.5 4 20V7l16-5z" fill="#173A7A"/>
                          <path d="M20 10l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" fill="#4C963B"/>
                        </svg>
                      `;
                    }
                  }}
                />
              </div>

              <div className="flex flex-col">
                <span className="font-heading text-lg sm:text-xl tracking-wider text-white leading-none">
                  PPGIT
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-secondary tracking-widest uppercase leading-snug">
                  STUDENT COUNCIL
                </span>
                <span className="hidden xl:block text-[9px] text-gray-300 font-medium tracking-widest uppercase mt-0.5 opacity-80">
                  LEAD. REPRESENT. INSPIRE.
                </span>
              </div>
            </Link>

            {/* Centre: Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              aria-label="Main Navigation"
            >
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    cn(
                      'px-3 py-1.5 rounded text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors',
                      isActive
                        ? 'text-white bg-white/10 border-b-2 border-secondary'
                        : 'text-gray-200 hover:text-white hover:bg-white/5'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: Student Voice CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <Button
                to="/student-voice"
                variant="secondary"
                size="sm"
                className="hidden sm:inline-flex items-center gap-2 font-bold"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>STUDENT VOICE</span>
              </Button>

              <button
                type="button"
                className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
