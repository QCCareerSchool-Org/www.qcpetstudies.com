import type { Metadata } from 'next';
import Link from 'next/link';

import styles from './index.module.scss';
import { CareerStatsSection } from '../../../(main)/grooming-career-guide/_components/careerStatsSection';
import { FAQSection } from '../../../(main)/grooming-career-guide/_components/faqSection';
import { HeroSection } from '../../../(main)/grooming-career-guide/_components/heroSection';
import { JourneySection } from '../../../(main)/grooming-career-guide/_components/journeySection';
import { ResponsibilitiesSection } from '../../../(main)/grooming-career-guide/_components/responsibilitiesSection';
import { SpecializationsSection } from '../../../(main)/grooming-career-guide/_components/specializationsSection';
import { TraitsSection } from '../../../(main)/grooming-career-guide/_components/traitsSection';
import { WhyQCSection } from '../../../(main)/grooming-career-guide/_components/whyQCSection';
import { GroomingKitSection } from '../../../(main)/grooming-career-guide/groomingKitSection';
import { Banner } from '../../_components/banner';
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
const href = 'https://enroll.qcpetstudies.com/grooming-400-off';

const CareerGuidePage: PageComponent = () => {
  return (
    <div className="chos">
      <Banner message="ENDS SOON: Save $400 on Tuition" buttonHref={href} buttonContent="Enroll Now" />
      <HeroSection />
      <CareerStatsSection />
      <ResponsibilitiesSection />
      <JourneySection />
      <GroomingKitSection />
      <WhyQCSection buttonText="Start My Career" href={href} />
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
              <h3 className="mb-4">Limited Time Offer</h3>
              <h2 className="mb-4">Save $400 on Dog Grooming Tuition</h2>
              <p className="mb-4">Take the first step toward a new and exciting career in the booming pet industry.</p>
              <div className="d-flex justify-content-center gap-3">
                <Link href={href} className={`btn btn-lg btn-primary ${styles.button}`}>Enroll Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerGuidePage;
