import { Metadata } from 'next';
import { CoursePreviewSection } from './CoursePreviewSection';
import { FirstStepSection } from './FirstStepSection';
import { HowItWorksSection } from './HowItWorksSection';
import { WhatGraduatesAreSayingSection } from './WhatGraduatesAreSayingSection';
import { PageComponent } from '@/app/serverComponent';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  title: 'Become a Professional Dog Groomer',
  description: 'Request a free preview of the online dog grooming course.',
  alternates: { canonical: '/get-a-course-preview' },
};

const DogGroomingCatalogPage: PageComponent = ({ searchParams }) => {
  const { countryCode } = getData();
  const date = new Date().getTime();
  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  const headerList = headers();
  const referrer = headerList.get('referer');

  return (
    <>
      <CoursePreviewSection searchParams={searchParams} />
      <HowItWorksSection />
      <WhatGraduatesAreSayingSection />
      <FirstStepSection />
    </>
  );
};

export default DogGroomingCatalogPage;
