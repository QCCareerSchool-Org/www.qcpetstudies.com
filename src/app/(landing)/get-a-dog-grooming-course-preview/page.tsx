import { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';

import { GraduatesAreSayingSection } from './GraduatesAreSayingSection';
import { HeaderSection } from './HeaderSection';
import { HowItWorksSection } from './HowItWorksSection';
import { TakeTheFirstStepsSection } from './TakeTheFirstStepsSection';
import { PageComponent } from '@/app/serverComponent';
import GroomingKitImage from '@/images/dog-grooming-kit.jpg';
import FirstAidLogo from '@/images/first-aid-logo.svg';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Become a Professional Dog Groomer',
  description: 'Request a free preview of the online dog grooming course.',
  alternates: {
    canonical: '/get-a-dog-grooming-course-preview',
  },
};

const DogGroomingCatalogPage: PageComponent = ({ searchParams }) => {

  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  const referrer = getParam(searchParams.referrer);

  return <>

    <HeaderSection gclid={gclid} msclkid={msclkid} utmSource={utmSource} utmMedium={utmMedium} utmCampaign={utmCampaign} utmContent={utmContent} utmTerm={utmTerm} referrer={referrer} />

    <HowItWorksSection />

    <GraduatesAreSayingSection />

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

    <TakeTheFirstStepsSection />
  </>;
};

export default DogGroomingCatalogPage;
