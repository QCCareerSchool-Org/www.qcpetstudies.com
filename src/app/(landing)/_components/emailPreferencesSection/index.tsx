'use client';

import Lottie from 'lottie-react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import EmailIcon from './Email.json';
import styles from './index.module.scss';
import { TelephoneFormPopup } from '../../_components/telephoneFormPopup';
import { BackgroundImage } from '@/components/backgroundImage';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import PhoneIcon from '@/components/siteLayout/footer/phone-icon.svg';
import { TelephoneLink } from '@/components/telephoneLink';

interface Props {
  course?: string;
  heroSrc: StaticImageData;
  mobileHeroSrc?: StaticImageData;
  emailAddress?: string;
  countryCode: string;
  leadId?: string;
  telephoneListId?: number;
}

export const EmailPreferencesYesSection: FC<Props> = ({ course, heroSrc, mobileHeroSrc, emailAddress, countryCode, leadId, telephoneListId }) => {
  const showTelephone = countryCode === 'CA' || countryCode === 'US';

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
                <div className="text-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 50, border: '1px solid #E5E7EB', background: 'white', margin: '0 auto 2rem' }}>
                  <Lottie animationData={EmailIcon} autoplay loop style={{ width: 300, height: 159, margin: '0 auto', paddingLeft: '4%' }} />
                </div>
                <h1 className="h4 mb-4 text-navy">You're officially back in the loop!</h1>
                <FormWrapper>
                  <p className={`lead ${styles.limitedTimeOffer} ${(emailAddress && emailAddress.length > 35) ? styles.long : ''}`}>
                    { course === 'dg' ? "Thanks for updating your preferences. We'll keep sending you dog grooming tips, student success stories, exclusive offers, and updates from QC Pet Studies." : "Thanks for updating your preferences. We'll keep sending you dog training tips, student success stories, exclusive offers, and updates from QC Pet Studies." }
                  </p>
                  <p className="mb-4">If you ever have questions about our courses or career training, our team is always happy to help.</p>
                </FormWrapper>
                <TelephoneLink countryCode={countryCode} className="btn btn-primary" linkText={<Image src={PhoneIcon} height="16" style={{ position: 'relative', top: -2, marginLeft: '0.5rem' }} alt="" />} />
              </div>
            </FormCard>
          </div>
        </div>
      </div>
      {telephoneListId && leadId && showTelephone && (
        <TelephoneFormPopup countryCode={countryCode} leadId={leadId} telephoneListId={telephoneListId} delay={3000} />
      )}
    </section>
  );
};

export const EmailPreferencesNoSection: FC<Props> = ({ heroSrc, mobileHeroSrc, leadId, telephoneListId, countryCode }) => {

  const showTelephone = countryCode === 'CA' || countryCode === 'US';

  return (
    <section className="text-white">
      <BackgroundImage src={heroSrc} mobile={mobileHeroSrc ? { src: mobileHeroSrc, breakpoint: 'lg', objectPosition: '50% 100%' } : undefined} priority />
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first text-center">
            <FormCard>
              <div style={{ margin: '2rem 0' }}>
                <div className="text-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 50, border: '1px solid #E5E7EB', background: 'white', margin: '0 auto 2rem' }}>
                  <Lottie animationData={EmailIcon} autoplay loop style={{ width: 300, height: 159, margin: '0 auto', paddingLeft: '4%' }} />
                </div>
                <h1 className="h4 mb-4 text-navy">No problem, we'll update your email preferences!</h1>
                <FormWrapper>
                  <p className="lead">Moving forward, you'll only receive information about relevant courses or offers when you engage with QC. From now on, we'll only reach out with specific course updates or offers when you're actively engaging with QC. <strong> Want to leave us for good?</strong> You can find the 'Unsubscribe' link at the bottom of your last email.</p>
                </FormWrapper>
              </div>
            </FormCard>
          </div>
        </div>
      </div>
      {telephoneListId && leadId && showTelephone && (
        <TelephoneFormPopup countryCode={countryCode} leadId={leadId} telephoneListId={telephoneListId} delay={3000} />
      )}
    </section>
  );
};
