import React from 'react';
import { Compass, Home, ArrowLeft } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { PageTransition } from '../components/common/PageTransition';

export const NotFoundPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-[80vh] pt-32 pb-20 flex items-center justify-center bg-light-bg text-center px-4 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-dot-pattern-light opacity-30 pointer-events-none" />

        <Container className="relative z-10 max-w-lg">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Compass className="w-10 h-10 animate-spin-slow" />
          </div>

          <span className="font-mono text-sm font-bold text-secondary tracking-widest uppercase block mb-2">
            ERROR 404
          </span>

          <h1 className="text-4xl sm:text-5xl font-heading text-navy uppercase tracking-wide leading-tight mb-4">
            LOST YOUR WAY?
          </h1>

          <p className="text-base text-muted-text leading-relaxed mb-8">
            The page you are looking for could not be found, has moved, or does not exist on the PPGIT Student Council portal.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/" variant="primary" size="lg" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>BACK TO HOME</span>
            </Button>

            <Button to="/events" variant="outline" size="lg" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>EXPLORE EVENTS</span>
            </Button>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
};
