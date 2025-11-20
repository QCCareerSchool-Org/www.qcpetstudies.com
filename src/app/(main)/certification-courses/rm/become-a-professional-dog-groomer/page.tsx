import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';

import CourseCatalogImage from './bottom-ipad-shepard.jpg';
import FullKitImage from './Kit-Blue-bg.jpg';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { BrevoForm } from '@/components/brevoForm';
import { FreeFirstAidSection } from '@/components/freeFirstAidSection';
import { HowTheCoursesWorkSection } from '@/components/howTheCoursesWorkSection';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Become a Professional Dog Groomer',
  alternates: { canonical: '/certification-courses/rm/become-a-professional-dog-groomer' },
};

const courses = [ 'dg' ];
const brevoListId = 31;

const ProfessionalDogGroomerPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  const headerList = await headers();
  const referrer = headerList.get('referer');

  return <>
    <section className={`bg-dark ${styles.bgGrayishBlue}`}>
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
            <div className={`card ${styles.bgDesaturatedBlue}`}>
              <div className="card-body">
                <h3>Download a Free Course Catalog!</h3>
                <ul className="no-indent">
                  <li>Find out if a career in dog grooming is right for you</li>
                  <li>Learn about the many careers you can pursue as a dog groomer</li>
                  <li>View the course curriculum, watch course videos, and look at sample assignments</li>
                  <li>Find out about tuition information including finding a payment plan that works well for you</li>
                  <li>Learn how you can't go wrong with QC's money back guarantee!</li>
                </ul>
                <BrevoForm
                  successLocation={`${process.env.HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-grooming-course-preview`}
                  listId={brevoListId}
                  // emailTemplateId={brevoEmailTemplateId}
                  gclid={gclid}
                  msclkid={msclkid}
                  utmSource={utmSource}
                  utmMedium={utmMedium}
                  utmCampaign={utmCampaign}
                  utmContent={utmContent}
                  utmTerm={utmTerm}
                  courseCodes={courses}
                  placeholders
                  referrer={referrer}
                />
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
      <Image src={CourseCatalogImage} alt="Dog looking at you" className={styles.formImage} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
    </div>
    <section className="bg-navy bg-desaturated-blue pt-3">
      <div className="container">
        <div className="row justify-content-center bg-desaturated-blue text-white">
          <div className="col-12 col-lg-6 mb-4 px-5" style={{ marginTop: '50px' }}>
            <BrevoForm
              successLocation={`${process.env.HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-grooming-course-preview`}
              listId={brevoListId}
              // emailTemplateId={brevoEmailTemplateId}
              gclid={gclid}
              msclkid={msclkid}
              utmSource={utmSource}
              utmMedium={utmMedium}
              utmCampaign={utmCampaign}
              utmContent={utmContent}
              utmTerm={utmTerm}
              courseCodes={courses}
              placeholders
              referrer={referrer}
            />
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default ProfessionalDogGroomerPage;
