'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import styles from './index.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import PhoneIcon from '@/components/siteLayout/footer/phone-icon.svg';
import { Squiggle } from '@/components/squiggle';
import { TelephoneLink } from '@/components/telephoneLink';

interface Props {
  course?: string;
  heroSrc: StaticImageData;
  mobileHeroSrc?: StaticImageData;
  emailAddress?: string;
  countryCode: string | null | undefined;
}

export const EmailPreferencesYesSection: FC<Props> = ({ course, heroSrc, mobileHeroSrc, emailAddress, countryCode }) => {
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
                <h1 className="h4 mb-4 text-navy">You're officially back in the loop!</h1>
                {
                  // email icon goes here
                }
                <FormWrapper>
                  <p className={`lead ${styles.limitedTimeOffer} ${(emailAddress && emailAddress.length > 35) ? styles.long : ''}`}>
                    { course === 'dg' ? "Thanks for updating your preferences. We'll keep sending you dog grooming tips, student success stories, exclusive offers, and updates from QC Pet Studies." : "Thanks for updating your preferences. We'll keep sending you dog training tips, student success stories, exclusive offers, and updates from QC Pet Studies." }
                  </p>
                  <Squiggle variant="tapered" className="text-primary mb-4" style={{ margin: '0 2rem', maxWidth: squiggleWidth }} />
                  <p className="mb-4">If you ever have questions about our courses or career training, our team is always happy to help.</p>
                  <a><button className="btn btn-primary"><TelephoneLink countryCode={countryCode ?? ''} className="text-white" /> <Image src={PhoneIcon} height="16" style={{ position: 'relative', top: -2, marginRight: '0.5rem' }} alt="" /></button></a>
                </FormWrapper>
              </div>
            </FormCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export const EmailPreferencesNoSection: FC<Props> = ({ heroSrc, mobileHeroSrc, emailAddress, countryCode }) => {
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
                <h1 className="h4 mb-4 text-navy">No problem, we'll update your email preferences! </h1>
                {
                  // email icon goes here
                }
                <FormWrapper>
                  <p className={`lead ${styles.limitedTimeOffer} ${(emailAddress && emailAddress.length > 35) ? styles.long : ''}`}>
                    From now on, we'll only reach out with specific course updates or offers when you're actively engaging with QC.
                  </p>
                  <Squiggle variant="tapered" className="text-primary mb-4" style={{ margin: '0 2rem', maxWidth: squiggleWidth }} />
                  <p className="mb-4">If you ever have questions about our courses or career training, our team is always happy to help.</p>
                  <a><button className="btn btn-primary mb-4gu"><TelephoneLink countryCode={countryCode ?? ''} className="text-white" /> <Image src={PhoneIcon} height="16" style={{ position: 'relative', top: -2, marginRight: '0.5rem' }} alt="" /></button></a>
                  <p><b>Want to leave us for good?</b> You can find the 'Unsubscribe' link at the bottom of your last email.</p>
                </FormWrapper>
              </div>
            </FormCard>
          </div>
        </div>
      </div>
    </section>
  );
};
