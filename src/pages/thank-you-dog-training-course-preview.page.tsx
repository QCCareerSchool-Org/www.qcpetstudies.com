import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaPaw } from 'react-icons/fa';

import { SEO } from '../components/SEO';
import { useScreenWidth } from '../hooks/useScreenWidth';
import CatalogBackground from '../images/backgrounds/smiling-border-collie-on-black.jpg';
import { brevoIdentify } from '../lib/brevo';
import { fbqLead } from '../lib/fbq';
import { gaEvent, gaUserData } from '../lib/ga';

type Props = {
  firstName: string | null;
  lastName: string | null;
  emailAddress: string | null;
  countryCode: string | null;
  provinceCode: string | null;
};

const ThankYouCatalogPage: NextPage<Props> = ({ emailAddress, firstName, lastName, countryCode, provinceCode }) => {
  const screenWidth = useScreenWidth();
  const mdOrGreater = screenWidth >= 768;
  const effectCalled = useRef<boolean>(false);

  useEffect(() => {
    if (emailAddress !== null && emailAddress.length > 0) {
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
    if (emailAddress !== null && countryCode !== null) {
      brevoIdentify(emailAddress, countryCode, provinceCode, firstName ?? undefined, lastName ?? undefined);
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
            <h2>Thank You for Your Interest!</h2>
            <p className="lead">Find out what a career in dog training can do for you, and how you can get started with QC's Professional Dog Training course.</p>
            <h4 className="mb-4">Access your free course preview here:</h4>
            <Link href="/certification-courses/dog-training/course-preview" className="btn btn-outline-secondary btn-lg">Get Preview&nbsp;&nbsp;<FaPaw style={{ position: 'relative', top: -2 }} /></Link>
          </div>
        </div>
      </div>
    </section>
  </>;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const getParam = (paramName: string): string | null => {
    if (typeof context.query[paramName] === 'string') {
      return context.query[paramName] || null;
    }
    if (Array.isArray(context.query[paramName])) {
      return context.query[paramName]?.[0] || null;
    }
    return null;
  };

  const emailAddress = getParam('emailAddress');
  const countryCode = getParam('countryCode');
  const provinceCode = getParam('provinceCode');
  const firstName = getParam('firstName');
  const lastName = getParam('lastName');

  return { props: { emailAddress, countryCode, provinceCode, firstName, lastName } };
};

export default ThankYouCatalogPage;
