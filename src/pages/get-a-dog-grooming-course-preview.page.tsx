import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEventHandler, useMemo } from 'react';
import { BsStarFill } from 'react-icons/bs';

import { BrochureForm } from '../components/BrochureForm';
import { CardBody } from '../components/CardBody';
import { LandingPageLayout } from '../components/layouts/LandingPageLayout';
import { SEO } from '../components/SEO';
import { TestimonialSmCaseyBechard } from '../components/testimonials-sm/TestimonialSmMelodyCaseyBechard';
import { TestimonialSmKaylaTorraville } from '../components/testimonials-sm/TestimonialSmMelodyKaylaTorraville';
import { TestimonialSmMelodyMason } from '../components/testimonials-sm/TestimonialSmMelodyMason';
import { useScreenWidth } from '../hooks/useScreenWidth';
import TestiminialBackground from '../images/backgrounds/testimonials-bg.jpg';
import CatalogImage from '../images/dog-and-scissors.jpg';
import GroomingKitImage from '../images/dog-grooming-kit.jpg';
import FirstAidLogo from '../images/first-aid-logo.svg';
import Step1EnrollImage from '../images/step-1-enroll.svg';
import Step2SubmitImage from '../images/step-2-submit.svg';
import Step3CertificateImage from '../images/step-3-certificate.svg';
import { gaEvent } from '../lib/ga';
import { getRandomIntInclusive } from '../lib/randomInt';
import type { NextPageWithLayout } from './_app.page';

const formAction = 'https://go.qcpetstudies.com/l/947642/2021-12-05/6h9rv';

type Props = {
  testGroup: number;
};

const DogGroomingCatalogPage: NextPageWithLayout<Props> = ({ testGroup }) => {
  const hiddenFields = useMemo(() => ([ { key: 'testGroup', value: testGroup } ]), [ testGroup ]);
  const screenWidth = useScreenWidth();
  const xxlOrGreater = screenWidth >= 1400;
  const xlOrGreater = screenWidth >= 1200;
  const lgOrGreater = screenWidth >= 992;
  const smOrGreater = screenWidth >= 576;

  const handleBrochureBottomLinkClick: MouseEventHandler = () => {
    gaEvent('click', { id: 'brochureBottomLink' });
  };

  return <>
    <SEO
      title="Become a Professional Dog Groomer"
      description="Request a free preview of the online dog grooming course."
      canonical="/get-a-dog-grooming-course-preview"
    />

    <section id="top">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-11 col-md-10 col-lg-10 mb-4 mb-lg-5">
            <h2 className="text-center mb-0">Become a Professional{lgOrGreater ? ' ' : <br />}<strong>Dog Groomer</strong></h2>
          </div>
          <div className="col-12 col-sm-11 col-md-8 col-lg-6 col-xl-5 mb-4 mb-lg-0">
            <div className="card bg-light">
              <CardBody>
                <p className="text-center lead">Get Started with a{smOrGreater ? ' ' : <br />}<strong>Free Course Preview</strong></p>
                <BrochureForm
                  action={formAction}
                  hiddenFields={hiddenFields}
                />
              </CardBody>
            </div>
          </div>
          <div className="col-12 col-sm-11 col-md-10 col-lg-6 col-xl-5">
            {lgOrGreater && (
              <div className="mb-2 d-flex justify-content-center">
                <Image
                  src={CatalogImage}
                  alt="dog with grooming tools"
                  width="922"
                  height="622"
                  sizes="100vw"
                  style={{ width: '100%', maxWidth: xxlOrGreater ? 400 : xlOrGreater ? 320 : 310, height: 'auto' }}
                />
              </div>
            )}
            <p className="lead">Get access to a free preview of the online dog grooming course to</p>
            <ul className="mb-0">
              <li>Find out if a career in dog grooming is right for you</li>
              <li>Learn about the many careers you can pursue as a dog groomer</li>
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
            <p className="mb-0">Your course materials are always available online and are always being updated with the latest industry standards. Refer to your updated training guides throughout your career!</p>
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
            <p className="lead">Graduate as an International{lgOrGreater ? <br /> : ' '}Dog Grooming Professional&trade;</p>
            <p className="mb-0">Receive your IDGP&trade; certification and your career as a professional dog groomer. Enjoy lifetime access to your course materials. Be protected by our 1-year money-back guarantee.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="text-light" style={{ backgroundColor: '#61677a' }}>
      {false && lgOrGreater && <Image
        src={TestiminialBackground}
        alt="happy dog with open mouth"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'right' }}
      />}
      <div className="container text-center">
        <h2 className="text-light mb-4">What <strong>Graduates Are Saying</strong></h2>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <TestimonialSmMelodyMason size={120} starSize={180} />
          </div>
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <TestimonialSmKaylaTorraville size={120} starSize={180} />
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <TestimonialSmCaseyBechard size={120} starSize={180} />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <Image
              src={FirstAidLogo}
              alt="First Aid course logo"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <h2>Free First Aid Course</h2>
            <p className="lead">Enroll in the Dog Grooming course and get the First Aid for Dog Groomers course <strong>FREE! ($348 value)</strong></p>
            <p className="mb-0">Being trained in pet first aid prepares you to respond to emergencies and to maintain a safe grooming environment. In this course, you'll learn how to prevent injuries and how to respond to emergency situations in your grooming salon.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light pb-0">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2>Dog Grooming Kit</h2>
            <p className="lead">Included with your course <strong>(valued at $200!)</strong></p>
            <p className="mb-4">Receive a dog grooming starter kit when you enroll. It contains some of the key tools and equipment you'll need to groom dogs professionally.</p>
          </div>
        </div>
        <Image
          src={GroomingKitImage}
          alt="Dog grooming kit"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
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

DogGroomingCatalogPage.getLayout = page => <LandingPageLayout link={false} nav="brochure">{page}</LandingPageLayout>;

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

export default DogGroomingCatalogPage;
