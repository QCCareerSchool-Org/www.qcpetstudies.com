'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaPaw } from 'react-icons/fa';

import { PageComponent } from '@/app/serverComponent';
import { SEO } from '@/components/SEO';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import CatalogBackground from '@/images/backgrounds/smiling-border-collie-on-black.jpg';
import { brevoIdentifyLead } from '@/lib/brevo';
import { fbqLead } from '@/lib/fbq';
import { gaEvent, gaUserData } from '@/lib/ga';
import { getParam } from '@/lib/getParam';

const ThankYouCatalogPage: PageComponent = ({ searchParams }) => {

  const emailAddress = getParam(searchParams.emailAddress);
  const firstName = getParam(searchParams.firstName);
  const lastName = getParam(searchParams.lastName);
  const countryCode = getParam(searchParams.countryCode);
  const provinceCode = getParam(searchParams.provinceCode);

  const screenWidth = useScreenWidth();
  const mdOrGreater = screenWidth >= 768;
  const effectCalled = useRef<boolean>(false);

  useEffect(() => {
    if (emailAddress) {
      gaUserData({ email: emailAddress });
    }
  }, [ emailAddress ]);

  useEffect(() => {
    if (effectCalled.current) {
      return;
    }
    effectCalled.current = true;
    fbqLead();
    gaEvent('conversion', { send_to: 'AW-1071836607/yZtFCL_BpW8Qv9uL_wM' }); // eslint-disable-line camelcase
  }, []);

  useEffect(() => {
    if (emailAddress) {
      brevoIdentifyLead(emailAddress, countryCode, provinceCode, firstName ?? undefined, lastName ?? undefined);
    }
  }, [ emailAddress, countryCode, provinceCode, firstName, lastName ]);

  return <>
    <SEO
      title="Here's Your Course Preview"
      description="Get your Dog Training Course Preview Now"
      canonical="/thank-you-dog-training-course-preview"
    />
    <section id="top" className="bg-black">
      {mdOrGreater && <Image
        src={CatalogBackground}
        placeholder="blur"
        alt="Smiling border collie"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'right' }}
      />}
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-7 col-xl-8">
            <h1>Your Course Preview</h1>
            <h2>Thank You for Your Interest{firstName && <>, {firstName}</>}!</h2>
            <p className="lead">Find out what a career in dog training can do for you, and how you can get started with QC's Professional Dog Training course.</p>
            {emailAddress && <p className="lead text-primary">Your email was sent to <strong>{emailAddress}</strong>. If you don't see it in your inbox in a few minutes, please check your spam or junk mail folder.</p>}
            <h4 className="mb-4">Access your free course preview here:</h4>
            <Link href="/certification-courses/dog-training/course-preview" className="btn btn-outline-secondary btn-lg">View the Preview&nbsp;&nbsp;<FaPaw style={{ position: 'relative', top: -2 }} /></Link>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default ThankYouCatalogPage;
