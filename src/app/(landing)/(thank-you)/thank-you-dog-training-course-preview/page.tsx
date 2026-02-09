import type { Metadata } from 'next';

import { getThankyouData } from '..';
import HeroBackground from './training-bg.jpg';
import { CurrentPromotion } from '../../_components/currentPromotion';
import { Header } from '../../_components/header';
import { ThankYouSection } from '../../_components/thankYouSection';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { LeadProcessing } from '@/components/leadProcessing';
import { SetCookie } from '@/components/setCookie';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { WhyChooseQCSection } from '@/components/whyChooseQCSection';

export const metadata: Metadata = {
  title: 'Course Preview',
  alternates: { canonical: '/thank-you-dog-training-course-preview' },
  robots: { index: false },
};

const testimonialIds = [ 'TD-0004', 'TD-0005', 'TD-0007', 'TD-0008', 'TD-0009', 'TD-0010' ];

const ThankYouCoursePreviewPage: PageComponent = async props => {
  const { countryCode, emailAddress, lead, jwt, recent, date } = await getThankyouData(props);

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
      <ThankYouSection course="dt" heroSrc={HeroBackground} emailAddress={emailAddress} />
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

export default ThankYouCoursePreviewPage;
