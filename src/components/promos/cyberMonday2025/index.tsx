import Image from 'next/image';
import type { FC } from 'react';

import HeroImageUK from './desktop-uk.jpg';
import HeroImageDefault from './desktop.jpg';
import { gbpCountry } from '@/lib/currencies';

interface Props {
  countryCode: string;
}

export const CyberMonday2025: FC<Props> = ({ countryCode }) => {
  const heroImageSrc = gbpCountry(countryCode) ? HeroImageUK : HeroImageDefault;

  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h2 className="mb-3">Cyber Monday Savings Are Here</h2>
            <div className="mb-4">
              <a href="https://enroll.qcpetstudies.com"><Image src={heroImageSrc} alt="" className="img-fluid" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
