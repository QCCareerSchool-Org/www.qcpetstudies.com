import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

import { BackgroundImage } from '@/components/backgroundImage';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import LockIcon from '@/components/icons/q-lock.svg';

type Props = {
  course?: string;
  heroSrc: StaticImageData;
  mobileHeroSrc?: StaticImageData;
  emailAddress?: string;
};

export const ThankYouSection: FC<Props> = ({ course, heroSrc, mobileHeroSrc, emailAddress }) => {
  const downloadUrl = course === 'dt'
    ? '/certification-courses/dog-training/course-preview'
    : '/certification-courses/dog-grooming/course-preview';

  const profession = course === 'dt'
    ? 'dog training'
    : 'dog grooming';

  return (
    <section className="text-white">
      {mobileHeroSrc
        ? <BackgroundImage src={heroSrc} mobile={{ src: mobileHeroSrc, breakpoint: 'lg', objectPosition: '50% 100%' }} priority />
        : <BackgroundImage src={heroSrc} priority />
      }
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first text-center">
            <FormCard>
              <div style={{ margin: '3rem 0' }}>
                <div className="text-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 100, height: 100, borderRadius: 50, border: '1px solid #E5E7EB', background: 'white', margin: '0 auto 2rem' }}>
                  <LockIcon height="50" />
                </div>
                <h1 className="h4 mb-4 text-navy">Thanks For Signing Up!</h1>
                <FormWrapper>
                  <p className="lead mb-3">We've just sent your course preview to {emailAddress ? <> to <strong>{emailAddress}</strong></> : 'your inbox'}, packed with everything you need to explore your {profession} journey. Be sure to check your junk or spam folder so you don't miss any important updates.</p>
                  <p className="lead fw-bold mb-4">Too excited to wait?</p>
                  <a href={downloadUrl}><button className="btn btn-primary">View Your Course Preview Now</button></a>
                </FormWrapper>
              </div>
            </FormCard>
          </div>
        </div>
      </div>
    </section>
  );
};
