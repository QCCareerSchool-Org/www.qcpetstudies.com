import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';

import type { PageComponent } from '@/app/serverComponent';
import { EmailSentToast } from '@/components/emailSentToast';
import { LeadProcessing } from '@/components/leadProcessing';
import { TelephoneFormSection } from '@/components/telephoneFormSection';
import { WhyChooseQCSection } from '@/components/whyChooseQCSection';
import { fbPostLead } from '@/lib/facebookConversionAPI';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Course Preview',
  alternates: { canonical: '/thank-you-course-preview' },
  robots: { index: false },
};

const ThankYouCoursePreviewPage: PageComponent = async ({ searchParams }) => {
  const leadId = getParam(searchParams.leadId);
  const firstName = getParam(searchParams.firstName);
  const lastName = getParam(searchParams.lastName);
  const emailAddress = getParam(searchParams.emailAddress);
  const countryCode = getParam(searchParams.countryCode);
  const provinceCode = getParam(searchParams.provinceCode);
  const headerList = headers();
  const ipAddress = headerList.get('x-real-ip') ?? undefined;
  const userAgent = headerList.get('user-agent') ?? undefined;
  const cookieStore = cookies();
  const fbc = cookieStore.get('_fbc')?.value;
  const fbp = cookieStore.get('_fbp')?.value;

  if (leadId && emailAddress) {
    try {
      await fbPostLead(leadId, new Date(), emailAddress, firstName, lastName, countryCode, provinceCode, ipAddress, userAgent, fbc, fbp);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {emailAddress && <EmailSentToast emailAddress={emailAddress} firstName={firstName} />}
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
      {leadId && validCountryForSMS(countryCode) && <TelephoneFormSection leadId={leadId} countryCode={countryCode} brevoListId={55} />}
      <WhyChooseQCSection />
    </>
  );
};

const validCountryForSMS = (countrycode?: string): boolean => countrycode === 'CA' || countrycode === 'US';

export default ThankYouCoursePreviewPage;
