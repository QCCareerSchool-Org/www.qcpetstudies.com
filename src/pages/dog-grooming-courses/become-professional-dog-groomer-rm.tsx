import { NextPage } from 'next';
import Image from 'next/image';
import { BsCalendarCheck, BsCheckCircle, BsFillCloudArrowDownFill } from 'react-icons/bs';
import { BrochureForm } from '../../components/BrochureForm';
import { DefaultLayout } from '../../components/DefaultLayout';
import { SEO } from '../../components/SEO';
import CourseCatalogImage from '../../images/bottom-ipad-shepard.jpg';
import FirstAidBookImage from '../../images/first-aid-book-white.jpg';
import FirstAidLogo from '../../images/first-aid-logo.svg';
import MagnifyingGLassImage from '../../images/icon-magnifying-glass-2.svg';
import FullKitImage from '../../images/Kit-Blue-bg.jpg';

const ProfessionalDogGroomerPage: NextPage = () => {
  return (
    <DefaultLayout>
      <SEO
        title="Become a Professional Dog Groomer"
        description="Become a Professional Dog Groomer"
        canonical="/dog-grooming-courses/become-professional-dog-groomer-rm"
      />

      <section id="firstSection" className="bg-dark">
        <div className="container text-center py-5">
          <h2>Become A <strong>Professional</strong> Dog Groomer</h2>
          <p className="lead">Start your <strong>dream career</strong> as a professional dog groomer online with QC&apos;s Dog Grooming course!</p>
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-lg-8">
              <p>Learning dog grooming online is just as effective as in-class dog groomer training. And it&apos;s way more convenient! You&apos;ll complete your training from home with practical and theoretical assignments, while receiving guidance from certified master groomers every step of the way! When you graduate, you will receive a certificate of completion to prove that you have completed training in dog grooming.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 d-flex">
              <div className="card bg-dark border-0">
                <div className="card-body">
                  <h3 className="mb-4">Free Dog Grooming Starter Kit</h3>
                  <p>Before you begin your practical work in Unit C, you&apos;ll receive a toolkit with the essential items you need to get started.</p>
                  <p>Your kit includes a WAHL ARCO 5-in-1 Cordless Clipper, a stainless steel attachment guide comb kit, professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
                  <p><em>Grooming Kit Estimated value: $200</em></p>
                  <Image src={FullKitImage} alt="Dog Grooming Starter Full Kit" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex text-start">
              <div className="card bg-grayish-blue">
                <div className="card-body">
                  <h3 className="mb-3 text-center">Download a Free Course Catalog!</h3>
                  <ul className="gap-1 mb-4">
                    <li>Find out if a career in dog grooming is right for you</li>
                    <li>Learn about the many careers you can pursue as a dog groomer</li>
                    <li>View the course curriculum, watch course videos, and look at sample assignments</li>
                    <li>Find out about tuition information including finding a payment plan that works well for you</li>
                    <li>Learn how you can&apos;t go wrong with QC&apos;s money back guarantee!</li>
                  </ul>
                  <BrochureForm buttonClassName="btn btn-outline-primary" buttonText="Download Catalog" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center text-lg-start">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="mb-4 text-center">
                <Image src={FirstAidLogo} alt="First Aid logo" />
              </div>
              <h2>Get a <strong>FREE</strong> First Aid Course</h2>
              <p className="lead">Enroll in Dog Grooming &amp; receive the First Aid for Dog Groomers course to take your career to the next level!</p>
              <p>Learn from first aid experts who will guide you through the course. You&apos;ll learn how to keep yourself and your furry clients out of harm&apos;s way.</p>
            </div>
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <Image src={FirstAidBookImage} alt="First aid book" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <h2 className="mb-5">How the <strong>Courses</strong> Work</h2>
          <div className="row flex-wrap">
            <div className="col-12 col-lg-3">
              <BsCalendarCheck className="h2 text-secondary mb-4" />
              <h3>Enroll<br /><strong>Online</strong></h3>
              <p>Get online access to your course right away. Receive your books and grooming tools in 7-10 days.</p>
            </div>
            <div className="col-12 col-lg-3">
              <BsFillCloudArrowDownFill className="h2 text-secondary mb-4" />
              <h3>Submit Your<br /><strong>Assignments</strong></h3>
              <p>Use your computer, phone or tablet to upload your work to QC&apos;s Online Student Center.</p>
            </div>
            <div className="col-12 col-lg-3">
              <div className="mb-3">
                <Image src={MagnifyingGLassImage} alt="Magnifying glass" height="50px" width="50px" />
              </div>
              <h3>Review Your<br /><strong>Feedback</strong></h3>
              <p>Get audio feedback from your tutor, a professional dog groomer, after each unit you submit.</p>
            </div>
            <div className="col-12 col-lg-3">
              <BsCheckCircle className="h2 text-secondary mb-4" />
              <h3>Receive Your<br /><strong>Certificate</strong></h3>
              <p>Get your certificate of completion and begin your career as a professional dog groomer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="contaner text-center">
          <h2 className="my-4">Get Started with a <strong>Free Course Catalog</strong></h2>
          <div className="row justify-content-center px-2">
            <div className="col-12 col-lg-6">
              <p>Request a free course catalog today to learn more about how you can become a professional dog groomer with QC&apos;s online training! Catalog includes course curriculum, tuition information, sample course video and assignments, and your career outlook.</p>
            </div>
          </div>
          <div className="row" style={{ marginBottom: '-50px' }}>
            <Image src={CourseCatalogImage} alt="Dog looking at you" objectFit="contain" />
          </div>
          <div className="row justify-content-center bg-desaturated-blue text-white">
            <div className="col-12 col-lg-6 mb-4 px-5" style={{ marginTop: '50px' }}>
              <BrochureForm buttonClassName="btn btn-outline-primary" buttonText="Download Free Catalog" />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
      .bg-grayish-blue {
       background:#3e4557;
      }
      .bg-desaturated-blue{
        background:#262e41;
      }
    `}</style>

    </DefaultLayout>
  );
};

export default ProfessionalDogGroomerPage;
