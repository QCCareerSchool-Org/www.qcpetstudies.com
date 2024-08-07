import { GetServerSideProps } from 'next';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { MouseEventHandler, useMemo } from 'react';

import { BrochureForm } from '../components/BrochureForm';
import { CardBody } from '../components/CardBody';
import { LandingPageLayout } from '../components/layouts/LandingPageLayout';
import { SEO } from '../components/SEO';
import { useScreenWidth } from '../hooks/useScreenWidth';
import CatalogImage from '../images/dog-in-a-tube-1.jpg';
import Step1EnrollImage from '../images/step-1-enroll.svg';
import Step2SubmitImage from '../images/step-2-submit.svg';
import Step3CertificateImage from '../images/step-3-certificate.svg';
import { gaEvent } from '../lib/ga';
import { getRandomIntInclusive } from '../lib/randomInt';
import type { NextPageWithLayout } from './_app.page';

const formAction = 'https://go.qcpetstudies.com/l/947642/2021-12-05/6h9rx';

type Props = {
  firstName: string | null;
  lastName: string | null;
  emailAddress: string | null;
  emailOptIn: boolean | null;
  telephoneNumber: string | null;
  smsOptIn: boolean | null;
  errors: boolean;
  testGroup: number;
  gclid: string | null;
  msclkid: string | null;
  marketing: {
    source: string | null;
    medium: string | null;
    campaign: string | null;
    content: string | null;
    term: string | null;
  };
};

const courses = [ 'dt' ];

const DogTrainingCatalogPage: NextPageWithLayout<Props> = ({ firstName, lastName, emailAddress, emailOptIn, telephoneNumber, smsOptIn, errors, testGroup, gclid, msclkid, marketing }) => {
  const hiddenFields = useMemo(() => {
    const h: Array<{ key: string; value: string | number }> = [ { key: 'testGroup', value: testGroup } ];
    if (gclid) {
      h.push({ key: 'gclid', value: gclid });
    }
    if (msclkid) {
      h.push({ key: 'msclkid', value: msclkid });
    }
    return h;
  }, [ testGroup, gclid, msclkid ]);

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
          <div className="col-12 col-sm-11 col-md-8 col-lg-6 col-xl-5 mb-4 mb-lg-0">
            <div className="card bg-light">
              <CardBody>
                <p className="text-center lead">Get Started with a{smOrGreater ? ' ' : <br />}<strong>Free Course Preview</strong></p>
                <BrochureForm
                  action={formAction}
                  hiddenFields={hiddenFields}
                  marketing={marketing}
                  courses={courses}
                  initialValues={{ firstName, lastName, emailAddress, emailOptIn, telephoneNumber, smsOptIn }}
                  errors={errors}
                />
              </CardBody>
            </div>
          </div>
          <div className="col-12 col-sm-11 col-md-10 col-lg-6 col-xl-5">
            {lgOrGreater && (
              <div className="mb-2">
                <Image
                  src={CatalogImage}
                  alt="tablet with dog image"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            )}
            <p className="lead">Get access to a free preview of the online dog trainer course to</p>
            <ul className="mb-0">
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
          <div className="col-12 col-sm-10 col-md-8 col-lg-4 mb-4 mb-lg-0">
            <Image
              src={Step1EnrollImage as StaticImageData}
              alt="Enroll today"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p className="lead mb-2">Enroll Today &amp; Access Your{lgOrGreater ? <br /> : ' '}Course Materials</p>
            <p className="mb-0">Your course materials are always available online and are always being updated with the latest industry standards. Refer to your updated training guides throughout your career!</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-4 mb-4 mb-lg-0">
            <Image
              src={Step2SubmitImage as StaticImageData}
              alt="Complete assignment and submit"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p className="lead mb-2">Complete Assignments{lgOrGreater ? <br /> : ' '}&amp; Review Feedback</p>
            <p className="mb-0">Complete your theoretical and practical assignments. Receive advice and detailed feedback from your tutor after every unit you complete. Review your tutor's advice to improve your skills for the next unit.</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-4">
            <Image
              src={Step3CertificateImage as StaticImageData}
              alt="Get your certificate"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p className="lead mb-2">Graduate as an International{lgOrGreater ? <br /> : ' '}Dog Training Professional&trade;</p>
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
  const firstName = typeof context.query.firstName === 'string' ? context.query.firstName : null;
  const lastName = typeof context.query.lastName === 'string' ? context.query.lastName : null;
  const emailAddress = typeof context.query.emailAddress === 'string' ? context.query.emailAddress : null;
  const emailOptIn = typeof context.query.emailOptIn === 'string' ? context.query.emailOptIn === 'yes' : null;
  const telephoneNumber = typeof context.query.telephoneNumber === 'string' ? context.query.telephoneNumber : null;
  const smsOptIn = typeof context.query.smsOptIn === 'string' ? context.query.smsOptIn === 'yes' : null;

  const errors = typeof context.query.errors === 'string' && context.query.errors === 'true';

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

  const gclid = typeof context.query.gclid === 'string' ? context.query.gclid : null;
  const msclkid = typeof context.query.msclkid === 'string' ? context.query.msclkid : null;

  const marketing = {
    source: typeof context.query.utm_source === 'string' ? context.query.utm_source || null : null,
    medium: typeof context.query.utm_medium === 'string' ? context.query.utm_medium || null : null,
    campaign: typeof context.query.utm_campaign === 'string' ? context.query.utm_campaign || null : null,
    content: typeof context.query.utm_content === 'string' ? context.query.utm_content || null : null,
    term: typeof context.query.utm_term === 'string' ? context.query.utm_term || null : null,
  };

  return { props: { firstName, lastName, emailAddress, emailOptIn, telephoneNumber, smsOptIn, errors, testGroup, gclid, msclkid, marketing } };
};

export default DogTrainingCatalogPage;
