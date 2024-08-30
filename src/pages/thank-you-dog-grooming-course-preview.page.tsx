import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaPaw } from 'react-icons/fa';

import { SEO } from '../components/SEO';
import { TestimonialSmAprilCostigan } from '../components/testimonials-sm/TestimonialSmAprilCostigan';
import { TestimonialSmHailieSavage } from '../components/testimonials-sm/TestimonialSmHailieSavage';
import { TestimonialSmNickiHughes } from '../components/testimonials-sm/TestimonialSmNickiHughes';
import { useScreenWidth } from '../hooks/useScreenWidth';
import CatalogBackground from '../images/backgrounds/smiling-border-collie-on-black.jpg';
import PeekingHusky from '../images/peeking-siberian-husky.jpg';
import { brevoIdentifyLead } from '../lib/brevo';
import { fbPostLead } from '../lib/facebookConversionAPI';
import { fbqLead } from '../lib/fbq';
import { gaEvent, gaUserData } from '../lib/ga';

type Props = {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  countryCode?: string;
  provinceCode?: string;
};

const ThankYouCatalogPage: NextPage<Props> = ({ emailAddress, firstName, lastName, countryCode, provinceCode }) => {
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
    gaEvent('conversion', {
      send_to: 'AW-1071836607/yZtFCL_BpW8Qv9uL_wM', // eslint-disable-line camelcase
      value: 1.0,
      currency: 'USD',
    });
  }, []);

  useEffect(() => {
    if (emailAddress) {
      brevoIdentifyLead(emailAddress, countryCode, provinceCode, firstName ?? undefined, lastName ?? undefined);
    }
  }, [ emailAddress, countryCode, provinceCode, firstName, lastName ]);

  return <>
    <SEO
      title="Here's Your Course Preview"
      description="Get your Dog Grooming Course Preview Now"
      canonical="/thank-you-dog-grooming-course-preview"
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
            <h2>Thank You for Your Interest!</h2>
            <p className="lead">Find out what a career in dog grooming can do for you, and how you can get started with QC's Dog Grooming course.</p>
            <h4 className="mb-4">Access your free course preview here:</h4>
            <Link href="/certification-courses/dog-grooming/course-preview" className="btn btn-outline-secondary btn-lg">Get Preview&nbsp;&nbsp;<FaPaw style={{ position: 'relative', top: -2 }} /></Link>
          </div>
        </div>
      </div>
    </section>
    {!mdOrGreater && <Image src={PeekingHusky} width="806" height="234" style={{ width: '100%', height: 'auto' }} alt="Peeking husky" />}

    <section className="text-center">
      <div className="container">
        <h2 className="mb-4">What <strong>Graduates Are Saying</strong></h2>
        <div className="row">
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <TestimonialSmAprilCostigan />
          </div>
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <TestimonialSmHailieSavage />
          </div>
          <div className="col-12 col-lg-4">
            <TestimonialSmNickiHughes />
          </div>
        </div>
      </div>
    </section>
  </>;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const getParam = (paramName: string): string | undefined => {
    if (typeof context.query[paramName] === 'string') {
      return context.query[paramName];
    }
    if (Array.isArray(context.query[paramName])) {
      return context.query[paramName]?.[0];
    }
  };
  const getHeader = (headerName: string): string | undefined => {
    if (typeof context.req.headers[headerName] === 'string') {
      return context.req.headers[headerName];
    }
    if (Array.isArray(context.req.headers[headerName])) {
      return context.req.headers[headerName]?.[0];
    }
  };

  const leadId = getParam('leadId');
  const emailAddress = getParam('emailAddress');
  const countryCode = getParam('countryCode');
  const provinceCode = getParam('provinceCode');
  const firstName = getParam('firstName');
  const lastName = getParam('lastName');
  const ipAddress = getHeader('x-real-ip');
  const userAgent = getHeader('user-agent');
  const fbc = context.req.cookies._fbc;
  const fbp = context.req.cookies._fbp;

  try {
    if (leadId && emailAddress) {
      await fbPostLead(leadId, new Date(), emailAddress, firstName, lastName, countryCode, provinceCode, ipAddress, userAgent, fbc, fbp);
    }
  } catch (err) {
    console.error(err);
  }

  const props: Props = {};
  if (emailAddress) {
    props.emailAddress = emailAddress;
  }
  if (countryCode) {
    props.countryCode = countryCode;
  }
  if (provinceCode) {
    props.provinceCode = provinceCode;
  }
  if (firstName) {
    props.firstName = firstName;
  }
  if (lastName) {
    props.lastName = lastName;
  }

  return { props };
};

export default ThankYouCatalogPage;
