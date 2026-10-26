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
    <div className="flex flex-col min-h-screen bg-light-bg text-body-text selection:bg-primary selection:text-white">
      {/* Scroll indicator bar at the top */}
      <ScrollProgress />

      {/* Shared fixed/sticky header */}
      <Header />

      {/* Main page content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Shared footer */}
      <Footer />
    </div>
  );
};
