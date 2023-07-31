import { promisify } from 'util';
import { urlencoded } from 'body-parser';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaPaw } from 'react-icons/fa';

import { SEO } from '../components/SEO';
import { useScreenWidth } from '../hooks/useScreenWidth';
import CatalogBackground from '../images/backgrounds/smiling-border-collie-on-black.jpg';
import { fbqLead } from '../lib/fbq';
import { gaEvent, gaUserData } from '../lib/ga';

const urlencodedAsync = promisify(urlencoded({ extended: false }));

type Props = {
  firstName: string | null;
  lastName: string | null;
  emailAddress: string | null;
  countryCode: string | null;
  provinceCode: string | null;
  testGroup: number | null;
};

const ThankYouCatalogPage: NextPage<Props> = ({ emailAddress }) => {
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

export const getServerSideProps: GetServerSideProps<Props> = async ({ req, res }) => {
  if (req.method === 'POST') {
    await urlencodedAsync(req, res);
    if ('body' in req && typeof req.body === 'object' && req.body !== null) {
      const firstName = 'firstName' in req.body && typeof req.body.firstName === 'string' ? req.body.firstName || null : null;
      const lastName = 'lastName' in req.body && typeof req.body.lastName === 'string' ? req.body.lastName || null : null;
      const emailAddress = 'emailAddress' in req.body && typeof req.body.emailAddress === 'string' ? req.body.emailAddress || null : null;
      const countryCode = 'countryCode' in req.body && typeof req.body.countryCode === 'string' ? req.body.countryCode || null : null;
      const provinceCode = 'provinceCode' in req.body && typeof req.body.provinceCode === 'string' ? req.body.provinceCode || null : null;
      let testGroup = 'testGroup' in req.body && typeof req.body.testGroup === 'string' ? parseInt(req.body.testGroup, 10) : null;
      if (testGroup !== null && isNaN(testGroup)) {
        testGroup = null;
      }
      return { props: { firstName, lastName, emailAddress, countryCode, provinceCode, testGroup } };
    }
  }
  return { props: { firstName: null, lastName: null, emailAddress: null, countryCode: null, provinceCode: null, testGroup: null } };
};

export default ThankYouCatalogPage;
