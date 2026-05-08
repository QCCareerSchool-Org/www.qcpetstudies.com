import type { Metadata } from 'next';

import { CurrentPromotion } from '../../_components/currentPromotion';
import { EmailPreferencesYesSection } from '../../_components/emailPreferencesSection';
import { Header } from '../../_components/header';
import HeroBackground from '../grooming-bg.jpg';
import HeroMobile from '../hero-mobile.jpg';
// import { QuizCTACard } from '../../_components/quizCTACard';
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
      {/* <QuizCTACard header="Get Your Personalized Career Path in Dog Grooming!" url={quizURL} /> */}
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

// const getQuizUrl = (emailAddress?: string, countryCode?: string, provinceCode?: string): string => {
//   const baseURL = 'https://ng295qu8zyk.typeform.com/to/a7b3Ue5I';

//   if (typeof emailAddress !== 'undefined' || typeof countryCode !== 'undefined' || typeof provinceCode !== 'undefined') {
//     const data: Record<string, string> = {};

//     if (emailAddress) {
//       // eslint-disable-next-line camelcase
//       data.email_address = emailAddress;
//     }

//     if (countryCode) {
//       // eslint-disable-next-line camelcase
//       data.country_code = countryCode;
//     }

//     if (provinceCode) {
//       // eslint-disable-next-line camelcase
//       data.province_code = provinceCode;
//     }

//     const queryString = new URLSearchParams(data).toString();

//     return `${baseURL}#${queryString}`;
//   }

//   return baseURL;
// };

export default EmailPreferencesYesPage;
