import React from 'react';
import { ShieldCheck, Compass, HeartHandshake } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'STUDENT REPRESENTATION',
      description:
        'A platform for students to communicate ideas, concerns, and suggestions directly to the academic leadership and institutional committees.',
      icon: ShieldCheck,
      number: '01',
    },
    {
      title: 'CAMPUS EXPERIENCES',
      description:
        'Support cultural events, technical activities, student initiatives, club symposiums, and vibrant annual celebrations that enrich collegiate life.',
      icon: Compass,
      number: '02',
    },
    {
      title: 'STUDENT WELLBEING',
      description:
        'Encourage a supportive campus environment, peer mentorship, healthy student life balance, and help students find appropriate institutional guidance.',
      icon: HeartHandshake,
      number: '03',
    },
  ];

  return (
    <section id="about-section" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <Container>
        <SectionHeading
          eyebrow="OUR PURPOSE & COMMITMENT"
          title="MORE THAN A COUNCIL. A STUDENT COMMUNITY."
          description="The PPGIT Student Council serves as the vital democratic bridge between the student body and college administration, championing transparency, mutual respect, and student-driven campus progress."
        />

        {/* Three Core Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="relative p-8 rounded-xl bg-light-bg border border-gray-200/80 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-gray-300 group-hover:text-secondary transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl text-navy uppercase tracking-wide leading-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-muted-text leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200/60 flex items-center text-xs font-bold tracking-wider uppercase text-primary">
                  <span>CORE PILLAR</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
