import { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';

import { CourseOutlineSection } from './CourseOutlineSection';
import { IncludedSection } from './IncludedSection';
import { PageComponent } from '@/app/serverComponent';
import { DDTutorSection } from '@/components/DDTutorSection';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { PriceSection } from '@/components/PriceSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import DogCareBackground from '@/images/backgrounds/jack-russel-terrier-in-handbag.jpg';
import GuaranteeIcon from '@/images/course-overview-icons/guarantee.svg';
import OutlineIcon from '@/images/course-overview-icons/outline.svg';
import TutorIcon from '@/images/course-overview-icons/tutor.svg';
import CertificationGoldImage from '@/images/IDCP-certification-yellow.svg';
import { formatPrice } from '@/lib/formatPrice';
import { lookupPrices } from '@/lib/lookupPrices';

const headerIconSize = 20;

const courseCodes = [ 'dd' ];

export const metadata: Metadata = {
  title: 'Dog Daycare Course',
  description: 'Become a certified dog care professional with interactive online training!',
  alternates: {
    canonical: '/certification-courses/dog-daycare',
  },
};

const DogCarePage: PageComponent = async () => {

  const price = await lookupPrices(courseCodes);

  return <>

    <section id="top" className="bg-dark">
      <Image
        src={DogCareBackground}
        placeholder="blur"
        alt="Jack Russel Terrier in a handbag"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'right' }}
      />
      <div className="container text-center">
        <div className="row mb-4">
          <div className="mb-4">
            <Image
              src={CertificationGoldImage as StaticImageData}
              alt="International Dog Grooming Professional IDGP certification"
              height="125"
              width="125"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <h1>Dog Daycare Course</h1>
          {price && price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
          <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
          <a href="https://enroll.qcpetstudies.com?c=dd"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex">
            <div className="col text-uppercase">
              <a href="#outline"><Image
                src={OutlineIcon as StaticImageData}
                alt="outline"
                width={headerIconSize}
                height={headerIconSize}
                style={{ maxWidth: '100%', height: 'auto' }}
              /></a>
              <p><strong>Outline</strong></p>
            </div>
            <div className="col text-uppercase">
              <a href="#guarantee"><Image
                src={GuaranteeIcon as StaticImageData}
                alt="play button"
                width={headerIconSize}
                height={headerIconSize}
                style={{ maxWidth: '100%', height: 'auto' }}
              /></a>
              <p><strong>Guarantee</strong></p>
            </div>
            <div className="col text-uppercase">
              <a href="#tutors"><Image
                src={TutorIcon as StaticImageData}
                alt="play button"
                width={headerIconSize}
                height={headerIconSize}
                style={{ maxWidth: '100%', height: 'auto' }}
              /></a>
              <p><strong>Tutors</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2>Become a <strong>Certified Dog Care Professional</strong></h2>
            <p className="lead"><strong>International Dog Care Professional&trade;</strong> | <i>IDCP&trade;</i></p>
            <p>There's never been a better time to start a career as a dog care professional. Pup parents are always looking for pet care they can trust, and dog walkers and daycare facilities all over the country are booked solid! What an amazing opportunity to start a new and lucrative career!</p>
            <p>Get your International Dog Care Certification in less than a year with QC's interactive online training. Study at your own pace. Watch instructional videos and complete hands-on assignments to grow your dog care skills. Graduate with all the knowledge and skills you need to succeed in the dog daycare industry!</p>
            <p className="mb-0">Are you ready to jump into an amazing career?</p>
          </div>
        </div>
      </div>
    </section>

    {price && <PriceSection courses={courseCodes} price={price} doubleGuarantee={true} />}

    <IncludedSection />

    <div id="outline" className="sectionAnchor" />
    <CourseOutlineSection />

    <GuaranteeSection className="bg-light" />

    <VirtualCommunitySection />

    <DDTutorSection />

  </>;
};

export default DogCarePage;
