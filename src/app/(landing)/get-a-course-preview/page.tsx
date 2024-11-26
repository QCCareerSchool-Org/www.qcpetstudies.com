'use client';

import Link from 'next/link';
import { MouseEventHandler } from 'react';

import { CoursePreviewSection } from './CoursePreviewSection';
import { HowItWorksSection } from './HowItWorksSection';
import { WhatGraduatesAreSayingSection } from './WhatGraduatesAreSayingSection';
import { PageComponent } from '@/app/serverComponent';
import { SEO } from '@/components/SEO';
import { gaEvent } from '@/lib/ga';

const DogGroomingCatalogPage: PageComponent = ({ searchParams }) => {

  const handleBrochureBottomLinkClick: MouseEventHandler = () => {
    gaEvent('click', { id: 'brochureBottomLink' });
  };

  return <>
    <SEO
      title="Become a Professional Dog Groomer"
      description="Request a free preview of the online dog grooming course."
      canonical="/get-a-dog-grooming-course-preview"
    />

    <CoursePreviewSection searchParams={searchParams} />

    <HowItWorksSection />

    <WhatGraduatesAreSayingSection />

    <section className="bg-secondary">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="text-white mb-4">Take the First Step Towards a New and Exciting Career</h2>
            <Link onClick={handleBrochureBottomLinkClick} href="#" className="btn btn-outline-light">Preview the Course</Link>
          </div>
        </div>
      </div>
    </section>
  </>;
};

// DogGroomingCatalogPage.getLayout = page => <LandingPageLayout link={false} nav="brochure">{page}</LandingPageLayout>;

export default DogGroomingCatalogPage;
