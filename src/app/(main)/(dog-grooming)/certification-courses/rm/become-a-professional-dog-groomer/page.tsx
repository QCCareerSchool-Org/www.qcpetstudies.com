import type { Metadata } from 'next';
import Image from 'next/image';

import type { PageComponent } from '@/app/serverComponent';
import { FreeFirstAidSection } from '@/components/freeFirstAidSection';
import { HowTheCoursesWorkSection } from '@/components/howTheCoursesWorkSection';
import CourseCatalogImage from '@/images/bottom-ipad-shepard.jpg';
import FullKitImage from '@/images/Kit-Blue-bg.jpg';

export const metadata: Metadata = {
  title: 'Become a Professional Dog Groomer',
  alternates: { canonical: '/certification-courses/rm/become-a-professional-dog-groomer' },
};

const ProfessionalDogGroomerPage: PageComponent = () => {
  return <>
    <section id="top" className="bg-dark bg-grayish-blue">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4">
            <h1 className="fw-normal">Become a <strong>Professional</strong> Dog Groomer</h1>
            <p className="lead">Start your <strong>dream career</strong> as a professional dog groomer online with QC's Dog Grooming course!</p>
            <p>Learning dog grooming online is just as effective as in-class dog groomer training. And it's way more convenient! You'll complete your training from home with practical and theoretical assignments, while receiving guidance from certified master groomers every step of the way! When you graduate, you will receive a certificate of completion to prove that you have completed training in dog grooming.</p>
          </div>
          <div className="col-12 col-lg-6 text-lg-start mb-4 mb-lg-0">
            <h3>Free Dog Grooming Starter Kit</h3>
            <p>Before you begin your practical work in Unit C, you'll receive a toolkit with the essential items you need to get started.</p>
            <p>Your kit includes a WAHL ARCO 5-in-1 cordless clipper, a stainless steel attachment guide comb kit, professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
            <p><em>Grooming Kit Estimated value: $200</em></p>
            <Image src={FullKitImage} alt="Dog Grooming Starter Full Kit" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="col-12 col-lg-6 d-flex text-start">
            <div className="card bg-desaturated-blue">
              <div className="card-body">
                <h3>Download a Free Course Catalog!</h3>
                <ul className="no-indent">
                  <li>Find out if a career in dog grooming is right for you</li>
                  <li>Learn about the many careers you can pursue as a dog groomer</li>
                  <li>View the course curriculum, watch course videos, and look at sample assignments</li>
                  <li>Find out about tuition information including finding a payment plan that works well for you</li>
                  <li>Learn how you can't go wrong with QC's money back guarantee!</li>
                </ul>
                {/* <BrochureForm gclid={gclid} msclkid={msclkid} buttonText="Download Catalog" firstName={firstName} lastName={lastName} emailAddress={emailAddress} emailOptIn={emailOptIn} telephoneNumber={telephoneNumber} smsOptIn={smsOptIn} marketing={marketing} courses={courses} errors={errors} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FreeFirstAidSection />

    <HowTheCoursesWorkSection className="bg-light" />

    <section>
      <div className="contaner text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="mb-4">Get Started with a <strong>Free Course Catalog</strong></h2>
            <p className="mb-0">Request a free course catalog today to learn more about how you can become a professional dog groomer with QC's online training! Catalog includes course curriculum, tuition information, sample course video and assignments, and your career outlook.</p>
          </div>
        </div>
      </div>
    </section>

    <div className="container" style={{ marginBottom: -56, maxWidth: 696 }}>
      <Image
        src={CourseCatalogImage}
        alt="Dog looking at you"
        className="formImage"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
    <section className="bg-navy bg-desaturated-blue pt-3">
      <div className="container">
        <div className="row justify-content-center bg-desaturated-blue text-white">
          <div className="col-12 col-lg-6 mb-4 px-5" style={{ marginTop: '50px' }}>
            {/* <BrochureForm gclid={gclid} msclkid={msclkid} buttonText="Download Free Catalog" firstName={firstName} lastName={lastName} emailAddress={emailAddress} emailOptIn={emailOptIn} telephoneNumber={telephoneNumber} smsOptIn={smsOptIn} marketing={marketing} courses={courses} errors={errors} /> */}
          </div>
        </div>
      </div>
    </section>

    {/* <style jsx>{`
      .bg-grayish-blue {
        background: #3e4557 !important;
      }
      .bg-desaturated-blue {
        background: #262e41 !important;
      }
      .formImage { z-index: 100; }
    `}</style> */}
  </>;
};

export default ProfessionalDogGroomerPage;
