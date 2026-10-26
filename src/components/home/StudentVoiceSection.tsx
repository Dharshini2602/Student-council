import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const StudentVoiceSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-surface border-b border-border">
      <Container>
        {/* Tinted primary-100 panel, 4px green left border, display-md heading, body text, primary button */}
        <div className="bg-primary-100 border-l-4 border-accent-600 rounded-r-md p-8 sm:p-10 lg:p-12">
          <div className="max-w-[720px]">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[2px] bg-accent-700 inline-block shrink-0" aria-hidden="true" />
              <span className="font-label text-accent-700">
                DIRECT STUDENT FEEDBACK
              </span>
            </div>

            <h2 className="font-display-md text-primary-700 leading-tight">
              YOUR VOICE MATTERS.
            </h2>

            <p className="mt-4 font-body-lg text-text-muted leading-relaxed">
              Have an idea, suggestion, or concern? Share it with the Student Council. Every proposal is carefully logged, reviewed by council representatives, and presented to institutional committees.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                to="/student-voice"
                variant="primary"
                size="md"
                withArrow
              >
                SHARE YOUR SUGGESTION
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
