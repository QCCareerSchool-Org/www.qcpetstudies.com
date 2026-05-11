import type { Metadata } from 'next';
import Link from 'next/link';

import { CareerStatsSection } from './_components/careerStatsSection';
import { ComparisonSection } from './_components/comparisonSection';
import { FAQSection } from './_components/faqSection';
import { HeroSection } from './_components/heroSection';
import { JourneySection } from './_components/journeySection';
import { ResponsibilitiesSection } from './_components/responsibilitiesSection';
import { SpecializationsSection } from './_components/specializationsSection';
import { TraitsSection } from './_components/traitsSection';
import { WhyQCSection } from './_components/whyQCSection';
import { GroomingKitSection } from './groomingKitSection';
import styles from './index.module.scss';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'How to Become a Professional Dog Groomer',
  description: 'Launch your career with the professional dog grooming certification and industry standards required to maximize your earning potential in the booming pet care market. Discover the 2026 benchmarks for salary, required training and paths to career growth, including salon ownership, mobile grooming and lead grooming roles.',
  alternates: {
    canonical: '/how-it-works',
  },
};
const testimonialIds = [ 'TD-0004', 'TD-0005', 'TD-0007', 'TD-0008', 'TD-0009', 'TD-0010' ];

const HowItWorksPage: PageComponent = () => {
  return (
    <div className="chos">
      <HeroSection />
      <CareerStatsSection />
      <ResponsibilitiesSection />
      <JourneySection />
      <ComparisonSection />
      <GroomingKitSection />
      <WhyQCSection />
      <SpecializationsSection />
      <TraitsSection />
      <section className="bg-light">
        <TestimonialWallSection testimonialIds={testimonialIds} />
      </section>
      <FAQSection />
      <section className={styles.section}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-xl-7 text-center">
              <h2 className="mb-4">Ready to Launch Your Professional Grooming Career?</h2>
              <p className="mb-4">Take the first step toward a new and exciting career in the booming pet industry. </p>
              <div className="d-flex justify-content-center gap-3">
                <Link href="/certification-courses/dog-grooming" className={`btn btn-lg btn-primary ${styles.button}`}>Explore Certification Programs</Link>
                <Link href="/" className={`btn btn-lg btn-primary ${styles.button}`}>Speak with a Career Advisor</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HowItWorksPage;
