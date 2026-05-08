import type { Metadata } from 'next';

import { markNotInterested } from '../../../../lib/markNotInterested';
import { CurrentPromotion } from '../../_components/currentPromotion';
import { EmailPreferencesNoSection } from '../../_components/emailPreferencesSection';
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
  title: "No problem, we'll update your email preferences!",
  description: "From now on, we'll only reach out with specific course updates or offers when you're actively engaging with QC.",
  alternates: { canonical: '/email-preferences-no-dog-grooming-course' },
  robots: { index: false },
};

const testimonialIds = [ 'TD-0004', 'TD-0005', 'TD-0007', 'TD-0008', 'TD-0009', 'TD-0010' ];
const brevoListId = 99;

const EmailPreferencesNoPage: PageComponent = async props => {
  const { countryCode, date } = await getServerData(props.searchParams);
  const searchParamsList = await props.searchParams;

  const brevoData = await markNotInterested(searchParamsList._sc, brevoListId);

  return (
    <>
      <Header logoLink />
      <EmailPreferencesNoSection course="dg" heroSrc={HeroBackground} mobileHeroSrc={HeroMobile} countryCode={countryCode} emailAddress={brevoData?.emailAddress} />
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

export default EmailPreferencesNoPage;
