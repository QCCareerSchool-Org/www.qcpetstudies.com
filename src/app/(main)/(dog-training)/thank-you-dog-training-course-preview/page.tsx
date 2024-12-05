import type { Metadata } from 'next';
import Link from 'next/link';
import { FaPaw } from 'react-icons/fa';

import { ClientLogic } from '../../(dog-grooming)/thank-you-dog-grooming-course-preview/ClientLogic';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import CatalogBackground from '@/images/backgrounds/smiling-border-collie-on-black.jpg';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Here\'s Your Course Preview',
  description: 'Get your Dog Training Course Preview Now',
  alternates: { canonical: '/thank-you-dog-training-course-preview' },
};

const ThankYouCatalogPage: PageComponent = ({ searchParams }) => {
  const emailAddress = getParam(searchParams.emailAddress);
  const firstName = getParam(searchParams.firstName);
  const lastName = getParam(searchParams.lastName);
  const countryCode = getParam(searchParams.countryCode);
  const provinceCode = getParam(searchParams.provinceCode);

  return <>
    <ClientLogic emailAddress={emailAddress} countryCode={countryCode} provinceCode={provinceCode} firstName={firstName} lastName={lastName} />

    <section id="top" className="bg-black">
      <div className="d-none d-md-block">
        <BackgroundImage src={CatalogBackground} priority />
      </div>
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
