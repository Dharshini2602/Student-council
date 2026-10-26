import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollProgress } from '../common/ScrollProgress';

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-surface text-text-base">
      {/* Skip to Content Accessible Link */}
      <a href="#main-content" className="skip-to-content font-button">
        SKIP TO MAIN CONTENT
      </a>

      {/* Thin fixed top ScrollProgress bar */}
      <ScrollProgress />

      {/* Header Landmark */}
      <Header />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <Outlet />
      </main>

      {/* Footer Landmark */}
      <Footer />
    </div>
  );
};
