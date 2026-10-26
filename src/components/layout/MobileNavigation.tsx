import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { X, MessageSquarePlus, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../../data/navigation';
import { Button } from '../common/Button';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap and Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Simple focus trap
      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-primary-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 max-w-xs w-full bg-primary-900 border-l border-white/10 shadow-2 flex flex-col p-6 z-10 text-white"
      >
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-white p-1 flex items-center justify-center shrink-0">
              <img
                src="/assets/logo/ppgit-student-council.png"
                alt="PPGIT Logo"
                className="h-full w-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="font-display-sm text-lg block text-white leading-none">PPGIT</span>
              <span className="font-label text-[10px] text-accent-600 tracking-wider block mt-0.5">
                STUDENT COUNCIL
              </span>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 text-text-on-dark-muted hover:text-white rounded-sm focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-white"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links (20px display-sm links) */}
        <nav className="flex-1 py-8 flex flex-col gap-3 overflow-y-auto" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-sm font-display-sm text-xl tracking-wider uppercase transition-colors ${
                  isActive
                    ? 'text-accent-600 border-l-2 border-accent-600 pl-4 bg-white/5'
                    : 'text-text-on-dark hover:text-white hover:bg-white/5'
                }`
              }
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </NavLink>
          ))}
        </nav>

        {/* Student Voice CTA */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <Button
            to="/student-voice"
            variant="primary-on-dark"
            className="w-full flex items-center justify-center gap-2"
            onClick={onClose}
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>STUDENT VOICE</span>
          </Button>

          <p className="text-center font-label text-[11px] text-text-on-dark-muted tracking-widest">
            LEAD. REPRESENT. INSPIRE.
          </p>
        </div>
      </div>
    </div>
  );
};
