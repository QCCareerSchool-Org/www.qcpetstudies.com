import type { Metadata } from 'next';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import { FaBookOpen, FaHeadphones, FaLightbulb, FaStar } from 'react-icons/fa';

import Qc35Year from './35-year-emblem.svg';
import HeroBackgroundImage from './hero-bg.jpg';
import SPCALogo from './spca-full-color-logo.svg';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { GuaranteeSection } from '@/components/guaranteeSection';

export const metadata: Metadata = {
  title: 'About the School',
  alternates: { canonical: '/about/about-qc-pet-studies' },
};

const AboutPage: PageComponent = () => (
  <>
    <section className="bg-dark">
      <BackgroundImage src={HeroBackgroundImage} priority />
      <div className="container">
        <h1 className="fw-normal"><strong>About</strong><br />QC Pet Studies</h1>
      </div>
    </section>

    <section>
      <div className="container text-center text-md-start">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="d-flex flex-column flex-md-row justify-content-start align-items-center mb-4">
              <div className="me-4 flex-shrink-0 mb-2 mb-md-0" style={{ width: '120px' }}>
                <Qc35Year alt="distance education for over 35 years" style={{ width: '100%', height: 'auto' }} />
              </div>
              <p className="lead mb-0">QC Pet Studies is a faculty of QC Career School. We're an online, international school that's been offering distance education courses since 1984, and in this time we&apos;ve mastered the art of delivering quality course content online.</p>
            </div>
            <p>QC Pet Studies offers the most comprehensive online dog grooming course available. Through lesson texts, video tutorials, hands on assignments, and personalized feedback from industry professionals, our students receive the skills and resources they need to build successful careers in dog grooming and dog training.</p>
            <p>We combine our premium course content with our outstanding student support system. You can contact us anytime via phone, email, or Live Chat whichever you prefer. We are here to ensure that your course runs smoothly and that all of your needs are met with great care. Even after you graduate, we encourage you to stay in touch with us. We want to hear how you're doing and are always happy to provide you with career advice. When you enroll with QC Pet Studies, you join a supportive and ongoing community that is dedicated to helping you reach your goals.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-navy">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2>BBB <strong>Accreditation</strong></h2>
            <p className="lead">QC is happy to celebrate 15 years of accreditation with the Better Business Bureau.</p>
            <p className="mb-0">Since 1984, QC has had thousands of satisfied students who have taken our courses and launched successful careers in their chosen fields. QC Pet Studies, a subsidiary of QC Career School, has an A+ rating with the Better Business Bureau the highest possible consumer satisfaction rating. You can rest assured that you are receiving high quality course materials and a premium educational experience.</p>
          </div>
        </div>
      </div>
    </section>

    <GuaranteeSection className="bg-light" />

    <section>
      <div className="container text-center text-lg-start">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4">
            <h2 className="mb-4 text-center">QC Pet Studies' <strong>Core Values</strong></h2>
            <CoreValue icon={<FaStar size={50} className="text-primary" />}>
              <h3>Quality</h3>
              <p>QC offers the highest quality dog grooming course materials and student services available. From lesson texts to video tutorials to grooming tools, you'll see quality in every aspect of your course.</p>
            </CoreValue>
            <CoreValue icon={<FaHeadphones size={50} className="text-primary" />}>
              <h3>Student Support</h3>
              <p>Student Support Specialists are here to answer any questions you have about the course, the grooming industry or your career. We take pride in providing you with unparalleled service before and during your course. and even after you graduate.</p>
            </CoreValue>
            <CoreValue icon={<FaLightbulb size={50} className="text-primary" />}>
              <h3>Online Course Innovation</h3>
              <p>QC Pet Studies enables you to learn online on your own time, at your own pace. You'll expand your knowledge and develop your practical skills while enjoying the flexibility and convenience of learning from home.</p>
            </CoreValue>
            <CoreValue icon={<FaBookOpen size={50} className="text-primary" />}>
              <h3>Student Experience</h3>
              <p>At QC Pet Studies, our goal is to develop and continue personal relationships with each of our students. That's why we develop and maintain relationships with each and every dog grooming and dog training student throughout their course and after graduation, giving students a superior learning experience.</p>
            </CoreValue>
          </div>
          <div className="col-10 col-sm-8 col-lg-4 mb-4 mb-lg-0 text-center">
            <SPCALogo alt="SPCA logo" style={{ width: '100%', height: 'auto' }} />
            <p className="mb-0"><small>In partnership with SPCA International</small></p>
          </div>
          <div className="col-12 col-lg-6">
            <p className="mb-0">Society for the Prevention of Cruelty to Animals (SPCA) International's mission is to advance the safety and well being of animals. From distributing veterinary medical supplies to delivering education initiatives, SCPA International's innovative programs work to stop the suffering of animals around the world.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

const CoreValue: FC<PropsWithChildren<{ icon: ReactNode }>> = ({ icon, children }) => (
  <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start mb-4">
    <div className="flex-shrink-0 me-md-4 mb-2 mb-md-0">
      {icon}
    </div>
    <div>
      {children}
    </div>
  </div>
);

export default AboutPage;
