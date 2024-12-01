import { Metadata } from 'next';
import Image from 'next/image';

import { CoursePreviewCTA } from './CoursePreviewCTA';
import { FirstStepSection } from './FirstStepSection';
import { HowTheCoursesWorkSection } from './HowTheCoursesWorkSection';
import { PageComponent } from '@/app/serverComponent';
import { BrevoForm } from '@/components/brevoForm';
import { CardBody } from '@/components/CardBody';
import CatalogImage from '@/images/dog-in-a-tube-1.jpg';
import { getParam } from '@/lib/getParam';

const courses = [ 'dt' ];
const brevoListId = 30;
const brevoEmailTemplateId = 61;

export const metadata: Metadata = {
  title: 'Become a Professional Dog Trainer',
  description: 'Request a free preview of the online dog trainer course.',
  alternates: {
    canonical: '/get-a-dog-training-course-preview',
  },
};

const DogTrainingCatalogPage: PageComponent = ({ searchParams }) => {

  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  const referrer = getParam(searchParams.referrer);

  return <>

    <section id="top">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-11 col-md-10 col-lg-10 mb-4 mb-lg-5">
            <h2 className="text-center mb-0">Become a Professional <strong>Dog Trainer</strong></h2>
          </div>
          <div className="col-12 col-sm-11 col-md-8 col-lg-6 col-xl-5 mb-4 mb-lg-0">
            <div className="card bg-light">
              <CardBody>
                <CoursePreviewCTA />
                <BrevoForm
                  successLocation={`${process.env.HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-training-course-preview`}
                  listId={brevoListId}
                  emailTemplateId={brevoEmailTemplateId}
                  gclid={gclid ?? undefined}
                  msclkid={msclkid ?? undefined}
                  utmSource={utmSource ?? undefined}
                  utmMedium={utmMedium ?? undefined}
                  utmCampaign={utmCampaign ?? undefined}
                  utmContent={utmContent ?? undefined}
                  utmTerm={utmTerm ?? undefined}
                  placeholders
                  courseCodes={courses}
                  referrer={referrer ?? null}
                />
              </CardBody>
            </div>
          </div>
          <div className="col-12 col-sm-11 col-md-10 col-lg-6 col-xl-5">
            <div className="d-none d-lg-block mb-2">
              <Image
                src={CatalogImage}
                alt="tablet with dog image"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
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

    <HowTheCoursesWorkSection />
    <FirstStepSection />
  </>;
};

export default DogTrainingCatalogPage;
