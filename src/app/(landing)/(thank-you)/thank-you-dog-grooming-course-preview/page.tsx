import type { Metadata } from 'next';

import { getThankyouData } from '..';
import HeroBackground from './grooming-bg.jpg';
import HeroMobile from './hero-mobile.jpg';
import { CurrentPromotion } from '../../_components/currentPromotion';
import { GroomingThankYouSection } from '../../_components/groomingThankYouSection';
import { Header } from '../../_components/header';
// import { QuizCTACard } from '../../_components/quizCTACard';
import type { PageComponent } from '@/app/serverComponent';
import { LeadProcessing } from '@/components/leadProcessing';
import { SetCookie } from '@/components/setCookie';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { WhyChooseQCSection } from '@/components/whyChooseQCSection';

export const metadata: Metadata = {
  title: 'Course Preview',
  alternates: { canonical: '/thank-you-dog-grooming-course-preview' },
  robots: { index: false },
};

const testimonialIds = [ 'TD-0004', 'TD-0005', 'TD-0007', 'TD-0008', 'TD-0009', 'TD-0010' ];

const ThankYouCoursePreviewPage: PageComponent = async props => {
  const { countryCode, emailAddress, lead, jwt, recent, date } = await getThankyouData(props);
  // const quizURL = getQuizUrl(emailAddress, countryCode, provinceCode);

  return (
    <>
      {jwt && <SetCookie name="user" value={jwt} domain="qcpetstudies.com" />}
      {lead && recent && (
        <LeadProcessing
          emailAddress={lead.emailAddress}
          telephoneNumber={lead.telephoneNumber}
          city={lead.city}
          countryCode={lead.countryCode}
          provinceCode={lead.provinceCode}
          firstName={lead.firstName}
          lastName={lead.lastName}
          leadId={lead.leadId}
          conversionId="AW-1071836607/yZtFCL_BpW8Qv9uL_wM"
        />
      )}
      <Header />
      <GroomingThankYouSection course="dg" heroSrc={HeroBackground} mobileHeroSrc={HeroMobile} emailAddress={emailAddress} />
      {/* <QuizCTACard header="Get Your Personalized Career Path in Dog Grooming!" url={quizURL} /> */}
      <CurrentPromotion date={date} countryCode={countryCode} courseCode="dg" />
      <WhyChooseQCSection className="bg-light" />
      <TestimonialWallSection testimonialIds={testimonialIds} />
      <SupportSection date={date} showLink />
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

export default ThankYouCoursePreviewPage;
