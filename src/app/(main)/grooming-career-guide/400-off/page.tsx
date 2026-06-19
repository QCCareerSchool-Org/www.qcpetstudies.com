import type { Metadata } from 'next';

import { CareerStatsSection } from '../_components/careerStatsSection';
import { FAQSection } from '../_components/faqSection';
import { HeroSection } from '../_components/heroSection';
import { JourneySection } from '../_components/journeySection';
import { ResponsibilitiesSection } from '../_components/responsibilitiesSection';
import { SpecializationsSection } from '../_components/specializationsSection';
import { TraitsSection } from '../_components/traitsSection';
import { WhyQCSection } from '../_components/whyQCSection';
import { GroomingKitSection } from '../groomingKitSection';
import styles from '../index.module.scss';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'How to Become a Professional Dog Groomer',
  description: 'Launch your career with the professional dog grooming certification and industry standards required to maximize your earning potential in the booming pet care market. Discover the 2026 benchmarks for salary, required training and paths to career growth, including salon ownership, mobile grooming and lead grooming roles.',
  alternates: {
    canonical: '/grooming-career-guide',
  },
};
const testimonialIds = [ 'TD-0004', 'TD-0005', 'TD-0007', 'TD-0014', 'TD-0009', 'TD-0010' ];

const CareerGuidePage: PageComponent = () => {
  return (
    <div className="chos">
      <HeroSection />
      <CareerStatsSection />
      <ResponsibilitiesSection />
      <JourneySection />
      <GroomingKitSection />
      <WhyQCSection buttonText="Start My Career" href="https://enroll.qcpetstudies.com/grooming-400-off" />
      <SpecializationsSection />
      <TraitsSection />
      <section className="bg-light">
        <TestimonialWallSection testimonialIds={testimonialIds} />
      </section>
      <FAQSection />
    </div>
  );
};

export default CareerGuidePage;
