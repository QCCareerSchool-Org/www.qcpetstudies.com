import Image from 'next/image';
import type { FC } from 'react';

import HeroImageUK from './desktop-uk.jpg';
import HeroImageDefault from './desktop.jpg';
import { gbpCountry } from '@/lib/currencies';

interface Props {
  countryCode: string;
  sectionParagraph?: string;
}

export const FourHundredGroomingTraining: FC<Props> = ({ countryCode, sectionParagraph }) => {
  const heroImageSrc = gbpCountry(countryCode) ? HeroImageUK : HeroImageDefault;

  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h2 className="mb-3">Limited-Time Offer</h2>
            <p className="mb-4">{sectionParagraph}</p>
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
