import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';

import HeroBackground from './grooming-bg.jpg';
import HeroMobile from './hero-mobile.jpg';
import { CurrentPromotion } from '../../_components/currentPromotion';
import { GroomingThankYouSection } from '../../_components/groomingThankYouSection';
import { Header } from '../../_components/header';
import { QuizCTACard } from '../../_components/quizCTACard';
import type { PageComponent } from '@/app/serverComponent';
import { LeadProcessing } from '@/components/leadProcessing';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { WhyChooseQCSection } from '@/components/whyChooseQCSection';
import { fbPostLead } from '@/lib/facebookConversionAPI';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Course Preview',
  alternates: { canonical: '/thank-you-dog-grooming-course-preview' },
  robots: { index: false },
};

const testimonialIds = [ 'TD-0004', 'TD-0005', 'TD-0007', 'TD-0008', 'TD-0009', 'TD-0010' ];

const ThankYouCoursePreviewPage: PageComponent = async ({ searchParams }) => {
  const leadId = getParam(searchParams.leadId);
  const firstName = getParam(searchParams.firstName);
  const lastName = getParam(searchParams.lastName);
  const emailAddress = getParam(searchParams.emailAddress);
  const countryCode = getParam(searchParams.countryCode) ?? getData().countryCode;
  const provinceCode = getParam(searchParams.provinceCode);
  const headerList = headers();
  const ipAddress = headerList.get('x-real-ip') ?? undefined;
  const userAgent = headerList.get('user-agent') ?? undefined;
  const cookieStore = cookies();
  const fbc = cookieStore.get('_fbc')?.value;
  const fbp = cookieStore.get('_fbp')?.value;
  const quizURL = `https://ng295qu8zyk.typeform.com/to/a7b3Ue5I#email_address=${emailAddress}&country_code=${countryCode}&province_code=${provinceCode}`;

  const date = new Date().getTime();

  if (leadId && emailAddress) {
    try {
      await fbPostLead(leadId, new Date(), emailAddress, firstName, lastName, countryCode, provinceCode, ipAddress, userAgent, fbc, fbp);
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
      <GroomingThankYouSection course="dg" heroSrc={HeroBackground} mobileHeroSrc={HeroMobile} emailAddress={emailAddress} />
      <QuizCTACard header="Get Your Personalized Career Path in Dog Grooming!" url={quizURL} />
      <CurrentPromotion date={date} countryCode={countryCode} />
      <WhyChooseQCSection className="bg-light" />
      <TestimonialWallSection testimonialIds={testimonialIds} />
      <SupportSection />
    </>
  );
};

export default ThankYouCoursePreviewPage;
