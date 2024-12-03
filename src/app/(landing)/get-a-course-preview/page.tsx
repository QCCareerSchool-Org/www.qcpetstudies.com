import { Metadata } from 'next';
import { CoursePreviewSection } from './CoursePreviewSection';
import { FirstStepSection } from './FirstStepSection';
import { HowItWorksSection } from './HowItWorksSection';
import { WhatGraduatesAreSayingSection } from './WhatGraduatesAreSayingSection';
import { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Become a Professional Dog Groomer',
  description: 'Request a free preview of the online dog grooming course.',
  alternates: { canonical: '/get-a-course-preview' },
};

const DogGroomingCatalogPage: PageComponent = ({ searchParams }) => {

  return <>

    <CoursePreviewSection searchParams={searchParams} />

    <HowItWorksSection />

    <WhatGraduatesAreSayingSection />

    <FirstStepSection />
  </>;
};

export default DogGroomingCatalogPage;
