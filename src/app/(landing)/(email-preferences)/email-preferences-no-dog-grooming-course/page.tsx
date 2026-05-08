import type { Metadata } from 'next';

import { CurrentPromotion } from '../../_components/currentPromotion';
import { EmailPreferencesNoSection } from '../../_components/emailPreferencesSection';
import { Header } from '../../_components/header';
import HeroBackground from '../grooming-bg.jpg';
import HeroMobile from '../hero-mobile.jpg';
// import { QuizCTACard } from '../../_components/quizCTACard';
import { GetStartedSection } from '@/components/getStartedSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { WhyChooseQCSection } from '@/components/whyChooseQCSection';
import { addToBrevoList, getBrevoContact, getBrevoContactId } from '@/lib/brevoAPI';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: "No problem, we'll update your email preferences!",
  description: "From now on, we'll only reach out with specific course updates or offers when you're actively engaging with QC.",
  alternates: { canonical: '/email-preferences-no-dog-grooming-course' },
  robots: { index: false },
};

const testimonialIds = [ 'TD-0004', 'TD-0005', 'TD-0007', 'TD-0008', 'TD-0009', 'TD-0010' ];

const EmailPreferencesNoPage: PageComponent = async props => {
  const { countryCode, date } = await getServerData(props.searchParams);
  const listId = 99;
  const searchParamsList = await props.searchParams;
  const sc = searchParamsList._sc;

  const getEmailAddress = async (): Promise<string | undefined> => {
    if (typeof sc === 'string') {
      const contactId = getBrevoContactId(sc);
      if(contactId) {
        const [ , contact ] = await Promise.all([
          addToBrevoList(contactId, listId).catch((err: unknown) => console.log(err)),
          getBrevoContact(contactId).catch((err: unknown) => console.error(err)),
        ]);

        return contact?.emailAddress;
      }
    }
  };

  return (
    <>
      <Header logoLink />
      <EmailPreferencesNoSection course="dg" heroSrc={HeroBackground} mobileHeroSrc={HeroMobile} countryCode={countryCode} />
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

export default EmailPreferencesNoPage;
