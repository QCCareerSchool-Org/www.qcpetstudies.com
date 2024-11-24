'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { useScreenWidth } from '@/hooks/useScreenWidth';
import DogDriedOffByTowel from '@/images/dog-dried-off-by-towel.jpg';

export const LicenseSection: FC = () => {
  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;

  return (
    <section className="bg-light py-0">{/* override padding */}
      <div className="container-fluid">
        <div className="row justify-content-center justify-content-lg-end">
          <div className="col-12 col-lg-6 col-fluid col-fluid-lg-6">
            <div className="section py-lg-5 pe-lg-4">{/* re-add section padding, but override on lg or greater, and add right padding on lg or greater */}
              <h2>Dog Grooming <strong>License</strong></h2>
              <p>There is no international standard that defines what a dog grooming license is. However, it's considered a reputable document that proves you're fit to groom dogs.</p>
              <p>In certain areas, a freelance groomer running their own business will require a Pet Grooming Facility License or regional certification for their facility. The groomer themselves might not need that license, but their <em>business </em>will.</p>
              <p>Obtaining a dog grooming license varies by location. It might be as simple as sending in an application or taking a written exam. To know for sure, call your local government to find out the regulations in your area!</p>
              <p className="lead"><strong>Keep in mind:</strong> a dog grooming license won't teach you <em>how</em> to be a groomer. It's strongly recommended that you pair your license with a professional certification course.</p>
              <p className="mb-0"><Link href="/learning-online/class-vs-online-dog-grooming-schools" className="link-primary">Discover the difference between in-person and online certification courses here!</Link></p>
            </div>
          </div>
          {lgOrGreater && <div className="col-6" style={{ position: 'relative' }}>{/* need relative position for background image */}
            <Image
              src={DogDriedOffByTowel as StaticImageData}
              alt="a dog being dried off with a towel"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>}
        </div>
      </div>
    </section>
  );
};
