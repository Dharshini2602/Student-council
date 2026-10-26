import React from 'react';
import { Shield, Target, Eye, Users, Award, BookOpen, HeartHandshake, ArrowRight } from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { PageTransition } from '../components/common/PageTransition';

export const AboutPage: React.FC = () => {
  const coreValues = [
    {
      title: 'LEADERSHIP',
      desc: 'Fostering ethical, inclusive student leadership that empowers individuals to take positive initiative on and off campus.',
      icon: Award,
    },
    {
      title: 'REPRESENTATION',
      desc: 'Providing an authentic democratic voice that transparently conveys student perspectives to collegiate academic bodies.',
      icon: Users,
    },
    {
      title: 'INTEGRITY',
      desc: 'Upholding strict fairness, honesty, and institutional accountability in all council activities, budget management, and communications.',
      icon: Shield,
    },
    {
      title: 'COLLABORATION',
      desc: 'Partnering across engineering branches, faculty mentors, student clubs, and community partners to build cohesive campus unity.',
      icon: HeartHandshake,
    },
    {
      title: 'STUDENT ENGAGEMENT',
      desc: 'Creating an active, inspiring campus atmosphere through cultural celebrations, competitive symposiums, sports, and social welfare.',
      icon: BookOpen,
    },
  ];

  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="pt-32 pb-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-secondary inline-block" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-secondary-light">
                INSTITUTIONAL GOVERNANCE
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white uppercase tracking-wide leading-tight">
              ABOUT THE STUDENT COUNCIL
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Representing students, fostering leadership, and enriching campus life at PPG Institute of Technology, Coimbatore.
            </p>
          </div>
        </Container>
      </section>

      {/* Institutional Introduction & Note on Governance */}
      <section className="py-20 bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="STUDENT GOVERNANCE"
                title="THE OFFICIAL VOICE OF PPGIT STUDENTS"
                className="mb-6"
              />
              <p className="text-body-text leading-relaxed text-base">
                The PPG Institute of Technology Student Council represents the collective aspirations, academic concerns, and creative spirit of undergraduate and postgraduate students across all engineering and technology disciplines.
              </p>
              <p className="text-muted-text leading-relaxed text-sm">
                Functioning under the guidance of the Principal and faculty advisory council, the Student Council bridges dialogue between students and college administration. We promote academic excellence, coordinate inter-departmental cultural and technical symposiums, support student wellbeing, and represent our college in regional forums.
              </p>

              <div className="p-4 rounded-lg bg-light-blue/70 border border-primary/20 text-xs text-navy/90 leading-relaxed">
                <span className="font-bold uppercase tracking-wider block mb-1 text-primary">
                  Notice on Institutional Approval
                </span>
                The council statements and structural outlines presented on this digital platform represent working proposals aligned with current collegiate governance practices, pending final periodic ratification by the PPGIT Academic Council.
              </div>
            </div>

            <div className="lg:col-span-5 bg-light-bg rounded-2xl p-8 border border-gray-200 shadow-sm space-y-6">
              <h3 className="font-heading text-2xl text-navy uppercase border-b border-gray-200 pb-3">
                Key Responsibilities
              </h3>
              <ul className="space-y-3.5 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <span>Organizing annual college cultural festivals (MASS) & technical symposiums (TechSphere).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <span>Facilitating transparent communication on campus facilities, library, and canteen matters.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <span>Promoting student wellbeing, counseling accessibility, and peer-to-peer mentoring.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <span>Supporting department clubs, sports meets, and community engagement initiatives.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-light-bg border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-secondary tracking-widest uppercase mb-1">
                  PROPOSED INSTITUTIONAL STATEMENT
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl text-navy uppercase mb-4">
                  OUR MISSION
                </h3>
                <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                  To empower every student at PPG Institute of Technology with an inclusive, transparent platform for leadership, advocacy, and collaborative growth; while nurturing technical distinction, cultural vibrancy, and ethical citizenship.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-400 font-mono">
                PPGIT-SC / MISSION-2026
              </div>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-secondary tracking-widest uppercase mb-1">
                  PROPOSED INSTITUTIONAL STATEMENT
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl text-navy uppercase mb-4">
                  OUR VISION
                </h3>
                <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                  To cultivate a dynamic collegiate environment where student voices actively shape institutional progress, where every engineering student develops decisive leadership acumen, and where camaraderie flourishes across all disciplines.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-400 font-mono">
                PPGIT-SC / VISION-2026
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="GUIDING PRINCIPLES"
            title="CORE VALUES OF THE COUNCIL"
            description="The bedrock ideals guiding each council decision, committee meeting, and student initiative."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-xl bg-light-bg border border-gray-200/90 text-center flex flex-col items-center hover:border-primary/40 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-lg text-navy uppercase mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Closing Call to Action */}
      <section className="py-16 bg-navy text-white text-center">
        <Container className="max-w-2xl">
          <h3 className="text-2xl sm:text-3xl font-heading uppercase text-white mb-4">
            WANT TO CONTRIBUTE TO CAMPUS LIFE?
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-8">
            Whether you want to propose a new technical hackathon, report a facility concern, or join student festival coordinating committees, we are here for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/student-voice" variant="secondary" size="md">
              <span>SHARE YOUR SUGGESTION</span>
              <ArrowRight className="w-4 h-4 ml-1.5 inline" />
            </Button>
            <Button to="/council" variant="outline" size="md" className="text-white border-white/40 hover:bg-white hover:text-navy">
              <span>MEET REPRESENTATIVES</span>
            </Button>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};
