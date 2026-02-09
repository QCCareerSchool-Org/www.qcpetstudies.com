'use client';

import Lottie from 'lottie-react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import emailNotification from './Email Notification.json';
import styles from './index.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import DownloadIcon from '@/components/icons/download.svg';
import { Squiggle } from '@/components/squiggle';

interface Props {
  course?: string;
  heroSrc: StaticImageData;
  mobileHeroSrc?: StaticImageData;
  emailAddress?: string;
}

export const ThankYouSection: FC<Props> = ({ course, heroSrc, mobileHeroSrc, emailAddress }) => {
  const downloadUrl = course === 'dt'
    ? '/certification-courses/dog-training/course-preview'
    : '/certification-courses/dog-grooming/course-preview';
  const squiggleWidth = emailAddress ? `${Math.round(emailAddress.length * 0.5)}em` : 220;

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
              <div style={{ margin: '0 0 1rem' }}>
                <Lottie animationData={emailNotification} autoplay loop style={{ width: 300, height: 159, margin: '0 auto', paddingLeft: '4%' }} />
                <h1 className="h4 mb-4 text-navy">Thank You! Your Catalog Is Below</h1>
                <FormWrapper>
                  <p className={`lead ${styles.limitedTimeOffer} ${(emailAddress && emailAddress.length > 35) ? styles.long : ''}`}>We've sent a <strong className="text-primary">limited-time offer</strong> to <strong className="text-black">{emailAddress ?? 'your inbox'}</strong></p>
                  <Squiggle variant="tapered" className="text-primary mb-4" style={{ margin: '0 2rem', maxWidth: squiggleWidth }} />
                  <p className="mb-4">Be sure to check your <strong>spam</strong> or <strong>promotions</strong> folder if you don't see it right away&mdash;you don't want to miss this!</p>
                  <a href={downloadUrl}><button className="btn btn-primary"><Image src={DownloadIcon} height="16" style={{ position: 'relative', top: -2, marginRight: '0.5rem' }} alt="" /> View Catalog</button></a>
                </FormWrapper>
              </div>
            </FormCard>
          </div>
        </div>
      </div>
    </section>
  );
};
