import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import CatalogImage from './dog-and-scissors.jpg';
import { MultiCourseBrevoForm } from './multiCourseBrevoForm';
import { Header } from '../_components/header';
import type { PageComponent } from '@/app/serverComponent';
import { TestimonialSmCaseyBechard } from '@/components/testimonialsSmall/caseyBechard';
import { TestimonialSmKaylaTorraville } from '@/components/testimonialsSmall/kaylaTorraville';
import { TestimonialSmMelodyMason } from '@/components/testimonialsSmall/melodyMason';
import Step1EnrollImage from '@/images/step-1-enroll.svg';
import Step2SubmitImage from '@/images/step-2-submit.svg';
import Step3CertificateImage from '@/images/step-3-certificate.svg';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Become a Professional Dog Groomer',
  description: 'Request a free preview of the online dog grooming course.',
  alternates: { canonical: '/get-a-course-preview' },
};

const DogGroomingCatalogPage: PageComponent = ({ searchParams }) => {
  const { countryCode } = getData();
  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  const headerList = headers();
  const referrer = headerList.get('referer');

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-sm-11 col-md-10 col-lg-10 mb-4 mb-lg-5">
              <h2 className="text-center mb-0">Become a Pet Care Professional</h2>
            </div>
            <div className="col-12 col-sm-11 col-md-8 col-lg-6 col-xl-5 mb-4 mb-lg-0">
              <div className="card bg-light">
                <div className="card-body">
                  <p className="text-center lead">Get Started with a <strong>Free Course Preview</strong></p>
                  <MultiCourseBrevoForm
                    gclid={gclid}
                    msclkid={msclkid}
                    utmSource={utmSource}
                    utmMedium={utmMedium}
                    utmCampaign={utmCampaign}
                    utmContent={utmContent}
                    utmTerm={utmTerm}
                    referrer={referrer}
                    placeholders
                    countryCode={countryCode}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-11 col-md-10 col-lg-6 col-xl-5">
              <div className="mb-2 d-flex justify-content-center d-none d-lg-block">
                <Image src={CatalogImage} alt="dog with grooming tools" width="922" height="622" sizes="100vw" style={{ width: '100%', maxWidth: 310, height: 'auto' }} />
              </div>
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
              <Step1EnrollImage alt="Enroll today" style={{ maxWidth: '100%', height: 'auto' }} />
              <p className="lead mb-2">Enroll Today &amp; Access Your Course Materials</p>
              <p className="mb-0">Your course materials are always available online and are always being updated with the latest industry standards. Refer to your updated training guides throughout your career!</p>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-4 mb-4 mb-lg-0">
              <Step2SubmitImage alt="Complete assignment and submit" style={{ maxWidth: '100%', height: 'auto' }} />
              <p className="lead mb-2">Complete Assignments &amp; Review Feedback</p>
              <p className="mb-0">Complete your theoretical and practical assignments. Receive advice and detailed feedback from your tutor after every unit you complete. Review your tutor's advice to improve your skills for the next unit.</p>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-4">
              <Step3CertificateImage alt="Get your certificate" style={{ maxWidth: '100%', height: 'auto' }} />
              <p className="lead mb-2">Graduate with an International Certification</p>
              <p className="mb-0">Receive your certification and your career as a dog care professional. Enjoy lifetime access to your course materials. Be protected by our 1-year money-back guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-light" style={{ backgroundColor: '#61677a' }}>
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
              <Link href="#" className="btn btn-outline-light">Preview the Course</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DogGroomingCatalogPage;
