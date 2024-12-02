'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { useScreenWidth } from '@/hooks/useScreenWidth';
import CovidCareTools from '@/images/pet-covid-img-wide.jpg';

export const HowToGroomSection: FC = () => {

  const screenWidth = useScreenWidth();

  const lgOrGreater = screenWidth >= 992;

  return <section>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 col-xl-7">
          <h2 className="mb-4">How to Learn Dog Grooming During a Pandemic</h2>
          <p className="lead mb-4">QC&apos;s courses are very flexible! Train at your own pace, from the comfort of your own home.</p>
          <h3>How QC Sets You Up to Succeed</h3>
          <ul className="mb-4">
            <li>Study from wherever you are most comfortable with a fully online course</li>
            <li>Receive virtual one-on-one support from your tutor</li>
            <li>Reach out to the <Link href="/contact-us" className="link-primary">Student Support Team</Link> 7 days a week for assistance</li>
            <li>Complete hands-on grooming assignments to gain real-world experience</li>
            <li>Get personalized, audio feedback from your tutor directly sent to you after each unit</li>
            <li>Learn First Aid for dogs</li>
            <li>Receive informative business training that will allow you to implement best practices both in person and online</li>
          </ul>
          <Link href="/certification-courses/dog-grooming/" className="link-primary">Discover Everything You&apos;ll Learn in the Dog Grooming Course!</Link>
        </div>
        {lgOrGreater && (
          <div className="col-6 col-xl-5">
            <Image
              src={CovidCareTools}
              alt="Covid care"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        )}
      </div>
    </div>
  </section>;
};
