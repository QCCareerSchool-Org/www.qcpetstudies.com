import Image from 'next/image';
import type { FC } from 'react';

import HeroImageUK from './desktop-uk.jpg';
import HeroImageDefault from './desktop.jpg';
import type { CourseCode } from '@/domain/courseCode';
import { gbpCountry } from '@/lib/currencies';
import { endOfYear2025, newYear2026 } from '@/lib/periods';

interface Props {
  date: number;
  countryCode: string;
  courseCode: CourseCode;
}

export const NewYears2025: FC<Props> = ({ date, countryCode, courseCode }) => {
  const heroImageSrc = gbpCountry(countryCode) ? HeroImageUK : HeroImageDefault;

  let discountAmount: string;
  if (endOfYear2025.contains(date)) {
    discountAmount = gbpCountry(countryCode) ? '£300' : '$300';
  } else if (newYear2026.contains(date)) {
    discountAmount = gbpCountry(countryCode) ? '£400' : '$400';
  } else {
    throw Error('Invalid date');
  }

  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h2 className="mb-3">Limited-Time Offer</h2>
            <p className="mb-4">
              {courseCode === 'dg'
                ? `Start the new year by investing in your future. For a limited time, enroll in dog grooming and save ${discountAmount} on your tuition. Start today and become a certified pet professional this spring.`
                : `Start the new year by investing in your future. For a limited time, enroll in any pet course and save ${discountAmount} on your tuition—so you can build in-demand skills and move forward with confidence. Start today and begin taking on clients by spring!`
              }
            </p>
            <div className="mb-4">
              <a href="https://enroll.qcpetstudies.com"><Image src={heroImageSrc} alt="" className="img-fluid" /></a>
            </div>
            <a href="https://enroll.qcpetstudies.com"><button className="btn btn-primary btn-lg">Start Today</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};
