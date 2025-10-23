import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

import { BackgroundImage } from '@/components/backgroundImage';

type Props = {
  course?: string;
  heroSrc: StaticImageData;
  mobileHeroSrc: StaticImageData;
  emailAddress?: string;
};

export const GroomingThankYouSection: FC<Props> = ({ heroSrc, mobileHeroSrc, emailAddress }) => {
  const downloadUrl = '/certification-courses/dog-grooming/course-preview';

  return (
    <section className="text-white" style={{ zIndex: '5px' }}>
      <BackgroundImage src={heroSrc} mobile={{ src: mobileHeroSrc, breakpoint: 'lg', objectPosition: '50% 100%' }} priority />
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first text-left">
            <div style={{ margin: '3rem 0' }}>
              <h1 className="mb-2 text-white">Thank You!</h1>
              <h3 className="mb-3 text-white">You Unlocked Your Course Preview!</h3>
              <p className="lead mb-4 d-block d-md-none" style={{ marginRight: '6rem' }}>We've just sent your course preview to {emailAddress ? <strong>{emailAddress}</strong> : 'your inbox'}. Be sure to check your junk or spam folder so you don't miss any important updates.</p>
              <p className="lead mb-4 d-none d-md-block">We've just sent your course preview to {emailAddress ? <strong>{emailAddress}</strong> : 'your inbox'}. Be sure to check your junk or spam folder so you don't miss any important updates.</p>
              <p className="lead fw-bold mb-4">Too excited to wait?</p>
              <a href={downloadUrl}><button className="btn btn-primary">View Your Course Preview Now</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
