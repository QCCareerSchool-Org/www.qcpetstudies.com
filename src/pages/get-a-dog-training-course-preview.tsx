import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEventHandler, useMemo } from 'react';

import { BrochureForm } from '../components/BrochureForm';
import { LandingPageLayout } from '../components/layouts/LandingPageLayout';
import { SEO } from '../components/SEO';
import { useScreenWidth } from '../hooks/useScreenWidth';
import CatalogImage from '../images/preview-landing-page-training.jpg';
import Step1EnrollImage from '../images/step-1-enroll.svg';
import Step2SubmitImage from '../images/step-2-submit.svg';
import Step3CertificateImage from '../images/step-3-certificate.svg';
import { gaEvent } from '../lib/ga';
import { getRandomIntInclusive } from '../lib/randomInt';
import type { NextPageWithLayout } from './_app';

const formAction = 'https://go.qcpetstudies.com/l/947642/2021-12-05/6h9rx';

type Props = {
  testGroup: number;
};

const DogTrainingCatalogPage: NextPageWithLayout<Props> = ({ testGroup }) => {
  const hiddenFields = useMemo(() => ([ { key: 'testGroup', value: testGroup } ]), [ testGroup ]);
  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;
  const smOrGreater = screenWidth >= 576;

  const handleBrochureBottomLinkClick: MouseEventHandler = () => {
    gaEvent('click', { id: 'brochureBottomLink' });
  };

  return <>
    <SEO
      title="Become a Professional Dog Trainer"
      description="Request a free preview of the online dog trainer course."
      canonical="/get-a-dog-training-course-preview"
    />

    <section id="top">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-11 col-md-10 col-lg-10 mb-4 mb-lg-5">
            <h2 className="text-center mb-0">Become a Professional{lgOrGreater ? ' ' : <br />}<strong>Dog Trainer</strong></h2>
          </div>
          <div className="col-12 col-sm-11 col-md-10 col-lg-6 mb-4 mb-lg-0">
            <div className="card bg-light">
              <div className="card-body">
                <p className="text-center lead">Get Started with a{smOrGreater ? ' ' : <br />}<strong>Free Course Preview</strong></p>
                <BrochureForm
                  action={formAction}
                  hiddenFields={hiddenFields}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-11 col-md-10 col-lg-6">
            {lgOrGreater && (
              <div className="px-5 mb-2">
                <Image
                  src={CatalogImage}
                  alt="tablet with dog image"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            )}
            <p className="lead">Get access to a free preview of the online dog trainer course to</p>
            <ul>
              <li>Find out if a career in dog training is right for you</li>
              <li>Learn about the many careers you can pursue as a dog trainer</li>
              <li>View the course curriculum, course videos, and sample assignments</li>
              <li>Find out about tuition information and choose a payment plan</li>
              <li>Learn how you can't go wrong with QC's money back guarantee!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2>How the Courses Work</h2>
          </div>
          <div className="col-12 col-lg-4">
            <Image
              src={Step1EnrollImage}
              alt="Enroll today"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p className="lead">Enroll Today &amp; Access Your{lgOrGreater ? <br /> : ' '}Course Materials</p>
            <p className="mb-0">Receive online access to a course within 48 hours. Receive your physical course books and grooming kit in 5 to 10 business days.</p>
          </div>
          <div className="col-12 col-lg-4">
            <Image
              src={Step2SubmitImage}
              alt="Complete assignment and submit"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p className="lead">Complete Assignments{lgOrGreater ? <br /> : ' '}&amp; Review Feedback</p>
            <p className="mb-0">Complete your theoretical and practical assignments. Receive advice and detailed feedback from your tutor after every unit you complete. Review your tutor's advice to improve your skills for the next unit.</p>
          </div>
          <div className="col-12 col-lg-4">
            <Image
              src={Step3CertificateImage}
              alt="Get your certificate"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p className="lead">Graduate as an International{lgOrGreater ? <br /> : ' '}Dog Training Professional&trade;</p>
            <p className="mb-0">Receive your IDTP&trade; certification and your career as a professional dog trainer. Enjoy lifetime access to your course materials. Be protected by our 1-year money-back guarantee.</p>
          </div>
        </div>
      </div>
    </section>
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

DogTrainingCatalogPage.getLayout = page => <LandingPageLayout link={false} nav="brochure">{page}</LandingPageLayout>;

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<Props> = async context => {
  let testGroup: number | undefined;
  const storedTestGroup = context.req.cookies.testGroup;
  if (typeof storedTestGroup !== 'undefined') {
    const parsed = parseInt(storedTestGroup, 10);
    if (!isNaN(parsed)) {
      testGroup = parsed;
    }
  }
  if (typeof testGroup === 'undefined') {
    testGroup = getRandomIntInclusive(1, 12);
    const maxAge = 60 * 60 * 24 * 365;
    context.res.setHeader('Set-Cookie', `testGroup=${testGroup}; Max-Age=${maxAge}; Path=/; Secure; SameSite=Strict`);
  }
  return { props: { testGroup } };
};

export default DogTrainingCatalogPage;
