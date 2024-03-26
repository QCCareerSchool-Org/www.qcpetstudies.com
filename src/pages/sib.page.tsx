import Image, { StaticImageData } from 'next/image';

import { BrevoDirectForm } from '../components/BrevoDirectForm';
import { LandingPageLayout } from '../components/layouts/LandingPageLayout';
import { TestimonialSmCaseyBechard } from '../components/testimonials-sm/TestimonialSmMelodyCaseyBechard';
import { TestimonialSmKaylaTorraville } from '../components/testimonials-sm/TestimonialSmMelodyKaylaTorraville';
import { TestimonialSmMelodyMason } from '../components/testimonials-sm/TestimonialSmMelodyMason';
import { useScreenWidth } from '../hooks/useScreenWidth';
import TestiminialBackground from '../images/backgrounds/testimonials-bg.jpg';
import GroomingKitImage from '../images/dog-grooming-kit.jpg';
import FirstAidLogo from '../images/first-aid-logo.svg';
import Step1EnrollImage from '../images/step-1-enroll.svg';
import Step2SubmitImage from '../images/step-2-submit.svg';
import Step3CertificateImage from '../images/step-3-certificate.svg';
import { NextPageWithLayout } from './_app.page';

const SibPage: NextPageWithLayout = () => {
  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;

  return (
    <>
      <section>
        <div className="container">
          <BrevoDirectForm action="https://b3b2efab.sibforms.com/serve/MUIFANefRMHb5gnMWi_F4xkkZ-Q4CWNwn_jS-UzI0VmRhbcHmtpVtNVYWfHblVr69XWWe2N1aDBuYm1kbDBjdwNPmRDoaqTc5AnpfDUl5tp_aZJANMqBHCLy7DmwetdIaiCZow1bevsDIqSVO0ATMVSX2trp2rBdwfkF8WZf-3zwCxcgC97tYihFruK3AAl5FVvKXgSl1dFbkujV" />
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
              <p className="lead mb-2">Graduate as an International{lgOrGreater ? <br /> : ' '}Dog Grooming Professional&trade;</p>
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
                src={FirstAidLogo as StaticImageData}
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
    </>
  );
};

SibPage.getLayout = page => <LandingPageLayout link={false} nav="brochure">{page}</LandingPageLayout>;

export default SibPage;
