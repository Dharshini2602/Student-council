import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, MessageSquarePlus, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../../data/navigation';
import { Button } from '../common/Button';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when menu is open & handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
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
        className="fixed inset-0 bg-navy/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-navy border-l border-white/10 shadow-2xl flex flex-col p-6 z-10 animate-fade-in text-white">
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo/ppgit-student-council.png"
              alt="PPGIT Logo"
              className="h-9 w-auto object-contain"
              onError={(e) => {
                // Fallback to text / SVG crest if image is loading
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div>
              <span className="font-heading text-lg tracking-wider block text-white">PPGIT</span>
              <span className="text-[10px] text-secondary font-semibold tracking-widest block uppercase">
                Student Council
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-300 hover:text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-8 flex flex-col gap-2 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded text-sm font-semibold tracking-wider uppercase transition-colors ${
                  isActive
                    ? 'bg-primary text-white border-l-4 border-secondary'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
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
            variant="secondary"
            className="w-full flex items-center justify-center gap-2"
            onClick={onClose}
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>STUDENT VOICE</span>
          </Button>

          <p className="text-center text-xs text-gray-400 font-medium tracking-wide">
            LEAD. REPRESENT. INSPIRE.
          </p>
        </div>
      </div>
    </div>
  );
};
