import type { Metadata } from 'next';

import { CurrentPromotion } from '../../_components/currentPromotion';
import { EmailPreferencesNoSection } from '../../_components/emailPreferencesSection';
import { Header } from '../../_components/header';
import HeroBackground from '../training-bg.jpg';
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
  alternates: { canonical: '/email-preferences-no-dog-training-course' },
  robots: { index: false },
};

const testimonialIds = [ 'TD-0004', 'TD-0005', 'TD-0007', 'TD-0008', 'TD-0009', 'TD-0010' ];

const EmailPreferencesNoPage: PageComponent = async props => {
  const { countryCode, date } = await getServerData(props.searchParams);
  const listId = 100;
  const searchParamsList = await props.searchParams;
  const sc = searchParamsList._sc;

  let emailAddress: string | undefined;

  if (typeof sc === 'string') {
    const contactId = getBrevoContactId(sc);
    if(contactId) {
      const [ , contact ] = await Promise.all([
        addToBrevoList(contactId, listId).catch((err: unknown) => console.log(err)),
        getBrevoContact(contactId).catch((err: unknown) => console.error(err)),
      ]);

      emailAddress = contact?.emailAddress;
    }
  }

  return (
    <>
      Your email is {emailAddress}.
      <Header logoLink />
      <EmailPreferencesNoSection course="dt" heroSrc={HeroBackground} countryCode={countryCode} />
      <CurrentPromotion date={date} countryCode={countryCode} courseCode="dt" />
      <WhyChooseQCSection className="bg-light" />
      <TestimonialWallSection testimonialIds={testimonialIds} />
      <SupportSection date={date} showLink />
      <GuaranteeSection />
      <GetStartedSection
        title="Ready to start your dog training career?"
        text="Become professionally certified with QC\'s online training today and start earning!"
      />
    </>
  );
};

export default EmailPreferencesNoPage;
