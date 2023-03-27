import { promisify } from 'util';
import { urlencoded } from 'body-parser';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaPaw } from 'react-icons/fa';

import { GoogleAdsLeadScript } from '../components/GoogleAdsLeadScript';
import { SEO } from '../components/SEO';
import { TestimonialSmAprilCostigan } from '../components/testimonials-sm/TestimonialSmAprilCostigan';
import { TestimonialSmHailieSavage } from '../components/testimonials-sm/TestimonialSmHailieSavage';
import { TestimonialSmNickiHughes } from '../components/testimonials-sm/TestimonialSmNickiHughes';
import { useScreenWidth } from '../hooks/useScreenWidth';
import CatalogBackground from '../images/backgrounds/smiling-border-collie-on-black.jpg';
import PeekingHusky from '../images/peeking-siberian-husky.jpg';
import { fbqLead } from '../lib/fbq';

const urlencodedAsync = promisify(urlencoded({ extended: false }));

type Props = {
  emailAddress: string | null;
};

const ThankYouCatalogPage: NextPage<Props> = ({ emailAddress }) => {
  const screenWidth = useScreenWidth();
  const mdOrGreater = screenWidth >= 768;

  useEffect(() => {
    fbqLead();
  }, []);

  return <>
    <SEO
      title="Here's Your Course Preview"
      description="Get your Dog Grooming Course Preview Now"
      canonical="/thank-you-dog-grooming-course-preview"
    />
    <GoogleAdsLeadScript conversionLabel="yZtFCL_BpW8Qv9uL_wM" emailAddress={emailAddress} />
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
export const getServerSideProps: GetServerSideProps<Props> = async ({ req, res }) => {
  if (req.method === 'POST') {
    await urlencodedAsync(req, res);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type RequestWithBody = typeof req & { body: Record<string, any> };
    const body = (req as RequestWithBody).body;
    return { props: { emailAddress: typeof body?.emailAddress === 'string' ? body?.emailAddress : null } };
  }
  return { props: { emailAddress: null } };
};

export default ThankYouCatalogPage;
