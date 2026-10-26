import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
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
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-250 ease-out flex items-center',
          isScrolled ? 'h-16' : 'h-20',
          isTransparent
            ? 'bg-transparent text-white'
            : 'bg-primary-900/95 backdrop-blur-md text-white border-b border-white/[0.08] shadow-1'
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Left: Official College Logo & Name */}
            <Link
              to="/"
              className="flex items-center gap-3.5 group focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent-600 rounded-sm"
              aria-label="PPG Institute of Technology Student Council Homepage"
            >
              <div className="relative flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-sm bg-white p-1 border border-border shrink-0">
                <img
                  src="/assets/logo/ppgit-student-council.png"
                  alt="PPGIT Crest"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              <div className="flex flex-col">
                <span className="font-display-sm text-lg sm:text-xl text-white leading-none">
                  PPGIT
                </span>
                <span className="font-label text-[10px] sm:text-[11px] text-accent-600 tracking-wider mt-0.5 leading-none">
                  STUDENT COUNCIL
                </span>
              </div>
            </Link>

            {/* Centre: Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8"
              aria-label="Main Navigation"
            >
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    cn(
                      'font-label py-1 transition-colors relative focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent-600 rounded-sm',
                      isActive
                        ? 'text-white'
                        : 'text-text-on-dark-muted hover:text-white'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && (
                        <span
                          className="absolute bottom-[-8px] left-0 right-0 h-[2px] bg-accent-600"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right: Student Voice compact green-outline action */}
            <div className="flex items-center gap-3">
              <Button
                to="/student-voice"
                variant="outline-accent"
                size="sm"
                className="hidden sm:inline-flex"
              >
                STUDENT VOICE
              </Button>

              <button
                type="button"
                className="lg:hidden p-2.5 rounded-sm text-white hover:bg-white/10 focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent-600 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
