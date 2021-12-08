import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BsStarFill } from 'react-icons/bs';

import { BrochureForm } from '../components/BrochureForm';
import { LandingPageLayout } from '../components/LandingPageLayout';
import { SEO } from '../components/SEO';
import { useScreenWidth } from '../hooks/useScreenWidth';
import TestiminialBackground from '../images/backgrounds/testimonials-bg.jpg';
import ProfileImage from '../images/casey-bechard.png';
import CatalogImage from '../images/course-catalog-tablet.jpg';
import GroomingKitImage from '../images/dog-grooming-kit.jpg';
import FirstAidLogo from '../images/first-aid-logo.svg';
import Step1EnrollImage from '../images/step-1-enroll.svg';
import Step2SubmitImage from '../images/step-2-submit.svg';
import Step3CertificateImage from '../images/step-3-certificate.svg';

const DogGroomingCatalogPage: NextPage = () => {
  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;

  return (
    <LandingPageLayout>
      <SEO
        title="Become a Professional Dog Groomer"
        description="Request a free preview of the online dog grooming course."
        canonical="/catalog-become-a-dog-groomer"
      />

      <section id="top">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-sm-11 col-md-10 col-lg-10 mb-4 mb-lg-5">
              <h2 className="text-center">Become a Professional Dog Groomer</h2>
            </div>
            <div className="col-12 col-sm-11 col-md-10 col-lg-6 mb-4 mb-lg-0">
              <div className="card bg-light">
                <div className="card-body">
                  <p className="text-center lead">Get Started with a <strong>Free Course Preview</strong></p>
                  <BrochureForm action="https://go.qcpetstudies.com/l/947642/2021-11-18/6b85q" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-11 col-md-10 col-lg-6">
              {lgOrGreater && (
                <div className="px-5 mb-4">
                  <Image src={CatalogImage} layout="responsive" alt="tablet with dog image" />
                </div>
              )}
              <p className="lead">Get access to a free preview of the online dog grooming course to</p>
              <ul>
                <li>Find out if a career in dog grooming is right for you</li>
                <li>Learn about the many careers you can pursue as a dog groomer</li>
                <li>View the course curriculum, course videos, and sample assignments</li>
                <li>Find out about tuition information and choose a payment plan</li>
                <li>Learn how you can&apos;t go wrong with QC&apos;s money back guarantee!</li>
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
              <Image src={Step1EnrollImage} alt="Enroll today" />
              <p className="lead">Enroll Today &amp; Access Your{lgOrGreater ? <br /> : ' '}Course Materials</p>
              <p className="mb-0">Receive online access to a course within 48 hours. Receive your physical course books and grooming kit in 5 to 10 business days.</p>
            </div>
            <div className="col-12 col-lg-4">
              <Image src={Step2SubmitImage} alt="Complete assignment and submit" />
              <p className="lead">Complete Assignments{lgOrGreater ? <br /> : ' '}&amp; Review Feedback</p>
              <p className="mb-0">Complete your theoretical and practical assignments. Receive advice and detailed feedback from your tutor after every unit you complete. Review your tutor&apos;s advice to improve your skills for the next unit.</p>
            </div>
            <div className="col-12 col-lg-4">
              <Image src={Step3CertificateImage} alt="Get your certificate" />
              <p className="lead">Graduate as an International{lgOrGreater ? <br /> : ' '}Dog Grooming Professional&trade;</p>
              <p className="mb-0">Receive your IDGP&trade; certification and your career as a professional dog groomer. Enjoy lifetime access to your course materials. Be protected by our 1-year money-back guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-white">
        <Image src={TestiminialBackground} layout="fill" objectFit="cover" objectPosition="right" alt="happy dog with open mouth" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <BsStarFill size={32} className="text-primary mx-2" />
              <BsStarFill size={32} className="text-primary mx-2" />
              <BsStarFill size={32} className="text-primary mx-2" />
              <BsStarFill size={32} className="text-primary mx-2" />
              <BsStarFill size={32} className="text-primary mx-2" />
            </div>
            <div className="col-12 col-lg-8">
              <p>&ldquo;Loved having the opportunity to learn dog grooming and dog first aid through this program. It&apos;s awesome being able to work at my own pace and taking the time to practice and use my assignments in my everyday job. Highly recommend!&rdquo;</p>
              <Image src={ProfileImage} alt="Casey bechard profile image" width="85" height="85" />
              <p className="lead mb-0"><strong>Casey Bechard</strong><br />QC Pet Studies Graduate</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <Image src={FirstAidLogo} alt="First Aid course logo" />
              <h2>Free First Aid Course</h2>
              <p className="lead">Enroll in the Dog Grooming course and get the First Aid for Dog Groomers course <strong>FREE! ($348 value)</strong></p>
              <p className="mb-0">Being trained in pet first aid prepares you to respond to emergencies and to maintain a safe grooming environment. In this course, you&apos;ll learn how to prevent injuries and how to respond to emergency situations in your grooming salon.</p>
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
              <p className="mb-4">Receive a dog grooming starter kit when you enroll. It contains some of the key tools and equipment you&apos;ll need to groom dogs professionally.</p>
            </div>
          </div>
          <Image src={GroomingKitImage} layout="responsive" alt="Dog grooming kit" />
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="text-white mb-4">Take the First Step Towards a New and Exciting Career</h2>
              <Link href="#top"><a className="btn btn-outline-light">Preview the Course</a></Link>
            </div>
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
};

export default DogGroomingCatalogPage;
