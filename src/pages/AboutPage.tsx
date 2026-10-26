import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Eye, Users, Award, BookOpen, HeartHandshake } from 'lucide-react';
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
      {/* 320px tall navy band Page Hero with breadcrumb and subtle bottom-right outlined letter */}
      <section className="relative min-h-[320px] flex items-center bg-primary-900 text-white pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-8 right-0 select-none pointer-events-none hidden md:block" aria-hidden="true">
          <span className="text-outline-decorative text-[14rem] leading-none">A</span>
        </div>

        <Container className="relative z-10">
          <div className="max-w-[720px]">
            {/* Breadcrumb in label style */}
            <nav className="font-label text-xs text-text-on-dark-muted mb-3" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="mx-2">/</span>
              <span className="text-accent-600">ABOUT</span>
            </nav>

            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-[2px] bg-accent-600 inline-block shrink-0" aria-hidden="true" />
              <span className="font-label text-accent-600">INSTITUTIONAL GOVERNANCE</span>
            </div>

            <h1 className="font-display-lg text-white">
              ABOUT THE STUDENT COUNCIL
            </h1>

            <p className="mt-3 font-body text-text-on-dark-muted">
              Representing students, fostering leadership, and enriching campus life at PPG Institute of Technology, Coimbatore.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section 1: Surface Background with 7/5 Asymmetric Split */}
      <section className="py-16 md:py-20 bg-surface border-b border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="STUDENT GOVERNANCE"
                title="THE OFFICIAL VOICE OF PPGIT STUDENTS"
                className="mb-6"
              />
              <p className="font-body-lg text-text-base leading-relaxed">
                The PPG Institute of Technology Student Council represents the collective aspirations, academic concerns, and creative spirit of undergraduate and postgraduate students across all engineering and technology disciplines.
              </p>
              <p className="font-body text-text-muted leading-relaxed">
                Functioning under the guidance of the Principal and faculty advisory council, the Student Council bridges dialogue between students and college administration. We promote academic excellence, coordinate inter-departmental cultural and technical symposiums, support student wellbeing, and represent our college in regional forums.
              </p>
            </div>

            {/* Asymmetric 5-col panel on right */}
            <div className="lg:col-span-5 bg-white rounded-md p-6 sm:p-8 border border-border space-y-6">
              <h3 className="font-display-sm text-primary-700 border-b border-border pb-3">
                KEY RESPONSIBILITIES
              </h3>
              <ul className="space-y-3.5 font-body-sm text-text-base">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-2 shrink-0" aria-hidden="true" />
                  <span>Organizing annual college cultural festivals (MASS) & technical symposiums (TechSphere).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-2 shrink-0" aria-hidden="true" />
                  <span>Facilitating transparent communication on campus facilities, library, and canteen matters.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-2 shrink-0" aria-hidden="true" />
                  <span>Promoting student wellbeing, counseling accessibility, and peer-to-peer mentoring.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-2 shrink-0" aria-hidden="true" />
                  <span>Supporting department clubs, sports meets, and community engagement initiatives.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section 2: White Background with Mission & Vision */}
      <section className="py-16 md:py-20 bg-white border-b border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-md bg-surface border border-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-primary-100 text-primary-700 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <span className="font-label text-xs text-accent-700 block mb-1">
                  PROPOSED INSTITUTIONAL STATEMENT
                </span>
                <h3 className="font-display-sm text-primary-700 mb-3">
                  OUR MISSION
                </h3>
                <p className="font-body text-text-muted leading-relaxed">
                  To empower every student at PPG Institute of Technology with an inclusive, transparent platform for leadership, advocacy, and collaborative growth; while nurturing technical distinction, cultural vibrancy, and ethical citizenship.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border font-label text-[11px] text-text-muted">
                PPGIT-SC / MISSION-2026
              </div>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-md bg-surface border border-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-accent-100 text-accent-700 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="font-label text-xs text-accent-700 block mb-1">
                  PROPOSED INSTITUTIONAL STATEMENT
                </span>
                <h3 className="font-display-sm text-primary-700 mb-3">
                  OUR VISION
                </h3>
                <p className="font-body text-text-muted leading-relaxed">
                  To cultivate a dynamic collegiate environment where student voices actively shape institutional progress, where every engineering student develops decisive leadership acumen, and where camaraderie flourishes across all disciplines.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border font-label text-[11px] text-text-muted">
                PPGIT-SC / VISION-2026
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section 3: Tinted primary-50 Background with Core Values */}
      <section className="py-16 md:py-20 bg-primary-50 border-b border-border">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="GUIDING PRINCIPLES"
            title="CORE VALUES OF THE COUNCIL"
            description="The bedrock ideals guiding each council decision, committee meeting, and student initiative."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-md bg-white border border-border text-center flex flex-col items-center hover:border-primary-600 transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-primary-100 text-primary-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display-sm text-base text-primary-700 mb-2">
                    {val.title}
                  </h4>
                  <p className="font-body-sm text-xs text-text-muted leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Closing CTA Band (Dark section) */}
      <section className="py-16 bg-primary-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-texture pointer-events-none" aria-hidden="true" />
        <Container className="relative z-10 max-w-[720px] mx-auto">
          <h3 className="font-display-md text-white mb-3">
            WANT TO CONTRIBUTE TO CAMPUS LIFE?
          </h3>
          <p className="font-body text-text-on-dark-muted mb-8">
            Whether you want to propose a new technical hackathon, report a facility concern, or join student festival coordinating committees, we are here for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/student-voice" variant="primary-on-dark" size="md" withArrow>
              SHARE YOUR SUGGESTION
            </Button>
            <Button to="/council" variant="secondary-on-dark" size="md">
              MEET REPRESENTATIVES
            </Button>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};
