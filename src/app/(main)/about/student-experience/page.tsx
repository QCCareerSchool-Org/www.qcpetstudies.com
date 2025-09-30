import type { Metadata } from 'next';
import React from 'react';

import StudentExperienceBackground from './hero-bg.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import ExpertCarousel from '@/components/industryExpertsCarousel/expertCarouselSection';
import { StudentShowcaseSection } from '@/components/studentShowcase';
import { students } from '@/components/studentShowcase/data';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';

export const metadata: Metadata = {
  title: 'Student Experience',
  description: 'As a QC Pet Studies Student, you\'ll get help through every step of your education. As you work through your course, you\'ll be guided by our team of teaching assistants, as well as top-notch industry experts with years of professional experience. Even after you graduate, you\'ll remain an essential member of the QC community.',
  alternates: { canonical: '/about/student-experience' },
};

const testimonialIds = [ 'TD-0004', 'TD-0005', 'TD-0001', 'TD-0007', 'TD-0003', 'TD-0010' ];

const StudentExperiencePage: PageComponent = () => (
  <>
    <section className="bg-dark">
      <BackgroundImage src={StudentExperienceBackground} priority />
      <div className="container text-left">
        <div className="row">
          <h1><br />Student Experience<br /><br /></h1>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center text-lg-start text-xl-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 mb-4 mb-lg-0">
            <h2>Setting You up for Success</h2>
            <p className="lead">Discover the inspiring stories of QC Pet Studies students and graduates. See how they transformed their passion for animals into thriving, rewarding careers.</p>
          </div>
        </div>
      </div>
    </section>

    <StudentShowcaseSection student={students['casey-bechard']} />
    <StudentShowcaseSection student={students['nicki-scott']} />
    <StudentShowcaseSection student={students['kayla-macdonald']} />
    <StudentShowcaseSection student={students['wendy-bailey']} />

    <section><SupportSection showLink /></section>
    <TestimonialWallSection testimonialIds={testimonialIds} />
    <section className="bg-light">
      <div className="container my-5">
        <div className="text-center mb-5">
          <h2 className="mb-4">Learn from Certified Industry Experts</h2>
          <p className="lead">At QC Pet Studies, you&apos;ll be paired with an industry expert—Master Groomers, certified Dog Trainers, or experienced pet-care providers—who will review your work and provide personalized audio feedback. We also work with leading professionals to develop our course materials, ensuring you gain the most relevant skills. With expert guidance, you&apos;ll build knowledge, refine technique, and gain the confidence to succeed.</p>
        </div>
        <ExpertCarousel />
      </div>
    </section>
    <VirtualCommunitySection />
  </>
);

export default StudentExperiencePage;
