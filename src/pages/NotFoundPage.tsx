import React from 'react';
import { Home } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { PageTransition } from '../components/common/PageTransition';

export const NotFoundPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-[85vh] pt-32 pb-20 flex items-center justify-center bg-surface text-center px-4 relative overflow-hidden">
        {/* Subtle dot texture */}
        <div className="absolute inset-0 bg-dot-texture-light pointer-events-none" aria-hidden="true" />

        <Container className="relative z-10 max-w-[720px] mx-auto">
          {/* Huge outlined 404 in Anton */}
          <div className="select-none mb-2" aria-hidden="true">
            <span className="font-display text-[22vw] sm:text-[14rem] text-outline-decorative-dark leading-none block">
              404
            </span>
          </div>

          <span className="font-label text-xs text-accent-700 tracking-widest block mb-3">
            ERROR 404: PAGE NOT FOUND
          </span>

          <h1 className="font-display-lg text-primary-700 mb-4">
            LOST YOUR WAY?
          </h1>

          <p className="font-body-lg text-text-muted mb-8 max-w-[54ch] mx-auto">
            The page you are looking for could not be found, has moved, or does not exist on the PPGIT Student Council portal.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/" variant="primary" size="lg">
              <Home className="w-4 h-4 mr-2" />
              BACK TO HOME
            </Button>

            <Button to="/events" variant="secondary" size="lg">
              EXPLORE EVENTS
            </Button>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
};
