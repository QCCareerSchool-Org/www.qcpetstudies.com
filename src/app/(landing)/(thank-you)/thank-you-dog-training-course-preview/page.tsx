import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';

import HeroBackground from './training-bg.jpg';
import { CurrentPromotion } from '../../_components/currentPromotion';
import { Header } from '../../_components/header';
import { ThankYouSection } from '../../_components/thankYouSection';
import type { PageComponent } from '@/app/serverComponent';
import { LeadProcessing } from '@/components/leadProcessing';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { WhyChooseQCSection } from '@/components/whyChooseQCSection';
import { fbPostLead } from '@/lib/facebookConversionAPI';
import { getParam } from '@/lib/getParam';
import { getServerData } from '@/lib/getServerData';

export const metadata: Metadata = {
  title: 'Course Preview',
  alternates: { canonical: '/thank-you-dog-training-course-preview' },
  robots: { index: false },
};

const testimonialIds = [ 'TD-0004', 'TD-0005', 'TD-0007', 'TD-0008', 'TD-0009', 'TD-0010' ];

const ThankYouCoursePreviewPage: PageComponent = async props => {
  const serverData = await getServerData(props.searchParams);
  const date = serverData.date;
  const searchParams = await props.searchParams;
  const leadId = getParam(searchParams.leadId);
  const firstName = getParam(searchParams.firstName);
  const lastName = getParam(searchParams.lastName);
  const emailAddress = getParam(searchParams.emailAddress);
  const countryCode = getParam(searchParams.countryCode) ?? serverData.countryCode;
  const provinceCode = getParam(searchParams.provinceCode);
  const headerList = await headers();
  const ipAddress = headerList.get('x-real-ip') ?? undefined;
  const userAgent = headerList.get('user-agent') ?? undefined;
  const cookieStore = await cookies();
  const fbc = cookieStore.get('_fbc')?.value;
  const fbp = cookieStore.get('_fbp')?.value;

  if (leadId && emailAddress) {
    try {
      await fbPostLead(leadId, new Date(date), emailAddress, firstName, lastName, countryCode, provinceCode, ipAddress, userAgent, fbc, fbp);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <LeadProcessing
        emailAddress={emailAddress}
        countryCode={countryCode}
        provinceCode={provinceCode}
        firstName={firstName}
        lastName={lastName}
        ipAddress={ipAddress}
        leadId={leadId}
        conversionId="AW-1071836607/yZtFCL_BpW8Qv9uL_wM"
      />
      <Header />
      <ThankYouSection course="dt" heroSrc={HeroBackground} emailAddress={emailAddress} />
      <CurrentPromotion date={date} countryCode={countryCode} />
      <WhyChooseQCSection className="bg-light" />
      <TestimonialWallSection testimonialIds={testimonialIds} />
      <SupportSection />
    </>
  );
};

export default ThankYouCoursePreviewPage;
