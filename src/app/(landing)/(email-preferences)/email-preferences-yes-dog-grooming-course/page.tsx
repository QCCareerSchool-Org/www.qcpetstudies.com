import type { Metadata } from 'next';

import { CurrentPromotion } from '../../_components/currentPromotion';
import { EmailPreferencesYesSection } from '../../_components/emailPreferencesSection';
import { Header } from '../../_components/header';
import HeroBackground from '../grooming-bg.jpg';
import HeroMobile from '../hero-mobile.jpg';
import { GetStartedSection } from '@/components/getStartedSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { WhyChooseQCSection } from '@/components/whyChooseQCSection';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: "You're officially back in the loop!",
  description: "Thanks for updating your preferences. We'll keep sending you dog grooming tips, student success stories, exclusive offers, and updates from QC Pet Studies.",
  alternates: { canonical: '/email-preferences-yes-dog-grooming-course' },
  robots: { index: false },
};

const testimonialIds = [ 'TD-0004', 'TD-0005', 'TD-0007', 'TD-0008', 'TD-0009', 'TD-0010' ];

const EmailPreferencesYesPage: PageComponent = async props => {
  const { countryCode, date } = await getServerData(props.searchParams);

  return (
    <>
      <Header logoLink />
      <EmailPreferencesYesSection course="dg" heroSrc={HeroBackground} mobileHeroSrc={HeroMobile} countryCode={countryCode} />
      <CurrentPromotion date={date} countryCode={countryCode} courseCode="dg" />
      <WhyChooseQCSection className="bg-light" />
      <TestimonialWallSection testimonialIds={testimonialIds} />
      <SupportSection date={date} showLink />
      <GuaranteeSection />
      <GetStartedSection
        title="Ready to start your dog grooming career?"
        text="Become professionally certified with QC\'s online training today and start earning!"
      />
    </>
  );
};

export default EmailPreferencesYesPage;
