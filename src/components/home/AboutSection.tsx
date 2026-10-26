import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'STUDENT REPRESENTATION',
      description:
        'A platform for students to communicate ideas, concerns, and suggestions directly to the academic leadership and institutional committees.',
    },
    {
      number: '02',
      title: 'CAMPUS EXPERIENCES',
      description:
        'Support cultural events, technical activities, student initiatives, club symposiums, and vibrant annual celebrations that enrich collegiate life.',
    },
    {
      number: '03',
      title: 'STUDENT WELLBEING',
      description:
        'Encourage a supportive campus environment, peer mentorship, healthy student life balance, and help students find appropriate institutional guidance.',
    },
  ];

  return (
    <section id="about-section" className="py-16 md:py-20 lg:py-24 bg-surface border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="OUR PURPOSE & COMMITMENT"
          title="MORE THAN A COUNCIL. A STUDENT COMMUNITY."
          description="The PPGIT Student Council serves as the vital democratic bridge between the student body and college administration, championing transparency, mutual respect, and student-driven campus progress."
        />

        {/* Three numbered blocks with large Anton numerals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white border border-border rounded-md p-6 lg:p-8 flex flex-col justify-between transition-all duration-200 ease-out hover:-translate-y-1 hover:border-primary-600 hover:shadow-2"
            >
              <div>
                {/* Large Anton Numerals 01/02/03 */}
                <span className="font-display-lg text-primary-700/20 block leading-none mb-4 select-none">
                  {pillar.number}
                </span>

                <h3 className="font-display-sm text-primary-700 mb-3">
                  {pillar.title}
                </h3>

                <p className="font-body text-text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border flex items-center">
                <span className="font-label text-xs text-accent-700">
                  CORE PILLAR
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
