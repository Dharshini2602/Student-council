import React from 'react';
import { MessageSquarePlus, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const StudentVoiceSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-light-blue/50 border-b border-primary/10">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy via-primary to-navy p-8 sm:p-12 md:p-16 text-white shadow-xl">
          {/* Decorative Background Texture */}
          <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-secondary-light text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIRECT STUDENT FEEDBACK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-white uppercase tracking-wide leading-tight">
              YOUR VOICE MATTERS.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed font-normal max-w-2xl">
              Have an idea, suggestion, or concern? Share it with the Student Council. Every proposal is carefully logged, reviewed by council representatives, and presented to institutional committees.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                to="/student-voice"
                variant="secondary"
                size="lg"
                className="flex items-center gap-2.5 font-bold shadow-lg"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>SHARE YOUR SUGGESTION</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="flex items-center gap-2 text-xs text-gray-300">
                <ShieldAlert className="w-4 h-4 text-secondary-light shrink-0" />
                <span>Optional anonymous submissions available</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
