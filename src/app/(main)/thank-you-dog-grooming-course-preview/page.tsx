import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { FaPaw } from 'react-icons/fa';

import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { LeadProcessing } from '@/components/leadProcessing';
import { TestimonialSmAprilCostigan } from '@/components/testimonialsSmall/aprilCostigan';
import { TestimonialSmHailieSavage } from '@/components/testimonialsSmall/hailieSavage';
import { TestimonialSmNickiHughes } from '@/components/testimonialsSmall/nickiHughes';
import CatalogBackground from '@/images/backgrounds/smiling-border-collie-on-black.jpg';
import PeekingHusky from '@/images/peeking-siberian-husky.jpg';
import { fbPostLead } from '@/lib/facebookConversionAPI';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Here\'s Your Course Preview',
  alternates: { canonical: '/thank-you-dog-grooming-course-preview' },
};

const ThankYouDogGroomingCoursePreviewPage: PageComponent = async ({ searchParams }) => {
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
      <section className="bg-black">
        <div className="d-none d-md-block"><BackgroundImage src={CatalogBackground} priority /></div>
        <div className="container text-center text-md-start">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-7 col-xl-8">
              <h1>Your Course Preview</h1>
              <h2>Thank You for Your Interest{firstName && <>, {firstName}</>}!</h2>
              <p className="lead">Find out what a career in dog grooming can do for you, and how you can get started with QC's Dog Grooming course.</p>
              {emailAddress && <p className="lead text-primary">Your email was sent to <strong>{emailAddress}</strong>. If you don't see it in your inbox in a few minutes, please check your spam or junk mail folder.</p>}
              <h4 className="mb-4">Access your free course preview here:</h4>
              <Link href="/certification-courses/dog-grooming/course-preview" className="btn btn-outline-secondary btn-lg">View the Preview&nbsp;&nbsp;<FaPaw style={{ position: 'relative', top: -2 }} /></Link>
            </div>
          </div>
        </div>
      </section>
      <div className="d-block d-md-none">
        <Image src={PeekingHusky} width="806" height="234" style={{ width: '100%', height: 'auto' }} alt="Peeking husky" />
      </div>

      <section className="text-center">
        <div className="container text-center">
          <h2 className="mb-4">What <strong>Graduates Are Saying</strong></h2>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <TestimonialSmAprilCostigan starSize={180} />
            </div>
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <TestimonialSmHailieSavage starSize={180} />
            </div>
            <div className="col-12 col-lg-4">
              <TestimonialSmNickiHughes starSize={180} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYouDogGroomingCoursePreviewPage;