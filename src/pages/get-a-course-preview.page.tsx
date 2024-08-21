import { GetServerSideProps } from 'next';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ChangeEvent, MouseEventHandler, useState } from 'react';

import { BrevoForm } from '../components/brevoForm';
import { CourseCode } from '../components/BrochureForm';
import { CardBody } from '../components/CardBody';
import { LandingPageLayout } from '../components/layouts/LandingPageLayout';
import { SEO } from '../components/SEO';
import { TestimonialSmCaseyBechard } from '../components/testimonials-sm/TestimonialSmMelodyCaseyBechard';
import { TestimonialSmKaylaTorraville } from '../components/testimonials-sm/TestimonialSmMelodyKaylaTorraville';
import { TestimonialSmMelodyMason } from '../components/testimonials-sm/TestimonialSmMelodyMason';
import { useScreenWidth } from '../hooks/useScreenWidth';
import TestiminialBackground from '../images/backgrounds/testimonials-bg.jpg';
import CatalogImage from '../images/dog-and-scissors.jpg';
import Step1EnrollImage from '../images/step-1-enroll.svg';
import Step2SubmitImage from '../images/step-2-submit.svg';
import Step3CertificateImage from '../images/step-3-certificate.svg';
import { gaEvent } from '../lib/ga';
import type { NextPageWithLayout } from './_app.page';

type Props = {
  gclid: string | null;
  msclkid: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
};

type FormFields = {
  successLocation: string;
  brevoListId: number;
  brevoEmailTemplateId: number;
};

const formFieldsDictionary: Record<CourseCode, FormFields> = {
  dg: {
    successLocation: `${process.env.HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-grooming-course-preview`,
    brevoListId: 31,
    brevoEmailTemplateId: 60,
  },
  dt: {
    successLocation: `${process.env.HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-training-course-preview`,
    brevoListId: 30,
    brevoEmailTemplateId: 61,
  },
};

const DogGroomingCatalogPage: NextPageWithLayout<Props> = props => {
  const screenWidth = useScreenWidth();
  const xxlOrGreater = screenWidth >= 1400;
  const xlOrGreater = screenWidth >= 1200;
  const lgOrGreater = screenWidth >= 992;
  const smOrGreater = screenWidth >= 576;

  const [ course, setCourse ] = useState<CourseCode>('dg');
  const [ formFields, setFormFields ] = useState<FormFields>(formFieldsDictionary.dg);

  const handleBrochureBottomLinkClick: MouseEventHandler = () => {
    gaEvent('click', { id: 'brochureBottomLink' });
  };

  const handleCourseChange = (e: ChangeEvent<HTMLInputElement>, courseCode: CourseCode): void => {
    if (formFieldsDictionary[courseCode]) {
      setCourse(courseCode);
      setFormFields(formFieldsDictionary[courseCode]);
    }
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
            <h2 className="text-center mb-0">Become a Pet Care Professional</h2>
          </div>
          <div className="col-12 col-sm-11 col-md-8 col-lg-6 col-xl-5 mb-4 mb-lg-0">
            <div className="card bg-light">
              <CardBody>
                <p className="text-center lead">Get Started with a{smOrGreater ? ' ' : <br />}<strong>Free Course Preview</strong></p>
                <BrevoForm
                  onCourseChange={handleCourseChange}
                  successLocation={formFields.successLocation}
                  listId={formFields.brevoListId}
                  emailTemplateId={formFields.brevoEmailTemplateId}
                  gclid={props.gclid ?? undefined}
                  msclkid={props.msclkid ?? undefined}
                  utmSource={props.utmSource ?? undefined}
                  utmMedium={props.utmMedium ?? undefined}
                  utmCampaign={props.utmCampaign ?? undefined}
                  utmContent={props.utmContent ?? undefined}
                  utmTerm={props.utmTerm ?? undefined}
                  placeholders
                  courseCodes={[ course ]}
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
            <p className="lead">Get access to a free course preview to</p>
            <ul className="mb-0">
              <li>Find out if a career in pet care is right for you</li>
              <li>Learn about the many careers you can pursue</li>
              <li>View course curriculums, course videos, and sample assignments</li>
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
          <div className="col-12 col-sm-10 col-lg-10">
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
            <p className="lead mb-2">Graduate with an International{lgOrGreater ? <br /> : ' '}Certification</p>
            <p className="mb-0">Receive your certification and your career as a dog care professional. Enjoy lifetime access to your course materials. Be protected by our 1-year money-back guarantee.</p>
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
  const getParam = (paramName: string): string | null => {
    if (typeof context.query[paramName] === 'string') {
      return context.query[paramName] || null;
    }
    if (Array.isArray(context.query[paramName])) {
      return context.query[paramName]?.[0] || null;
    }
    return null;
  };

  const gclid = getParam('gclid');
  const msclkid = getParam('msclkid');
  const utmSource = getParam('utm_source');
  const utmMedium = getParam('utm_medium');
  const utmCampaign = getParam('utm_campaign');
  const utmContent = getParam('utm_content');
  const utmTerm = getParam('utm_term');

  return { props: { gclid, msclkid, utmSource, utmMedium, utmCampaign, utmContent, utmTerm } };
};

export default DogGroomingCatalogPage;
