import type { Metadata } from 'next';
import { BsCardChecklist, BsPeopleFill } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import HeroBackgroundImage from './hero-bg.jpg';
import { CourseOutlineSection } from './outlineSection';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import CertificationGoldImage from '@/components/certifications/IDCP-certification-yellow.svg';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { PriceSection } from '@/components/priceSection';
import { TutorSectionDD } from '@/components/tutorSectionDD';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import GuaranteeIcon from '@/images/course-overview-icons/guarantee.svg';
import OutlineIcon from '@/images/course-overview-icons/outline.svg';
import TutorIcon from '@/images/course-overview-icons/tutor.svg';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { formatPrice } from '@/lib/formatPrice';
import { getData } from '@/lib/getData';

export const metadata: Metadata = {
  title: 'Dog Daycare Course',
  description: 'Become a certified dog care professional with interactive online training!',
  alternates: { canonical: '/certification-courses/dog-daycare' },
};

const headerIconSize = 20;
const iconSize = 36;
const courseCodes = [ 'dd' ];

const DogCarePage: PageComponent = async () => {
  const { countryCode, provinceCode } = getData();
  const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  return (
    <>
      <section id="top" className="bg-dark">
        <BackgroundImage src={HeroBackgroundImage} priority />
        <div className="container text-center">
          <div className="row mb-4">
            <div className="mb-4">
              <CertificationGoldImage alt="International Dog Grooming Professional IDGP certification" height="125" width="125" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <h1>Dog Daycare Course</h1>
            {price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
            <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
            <a href="https://enroll.qcpetstudies.com?c=dd"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 d-flex">
              <div className="col text-uppercase">
                <a href="#outline"><OutlineIcon alt="outline" width={headerIconSize} height={headerIconSize} style={{ maxWidth: '100%', height: 'auto' }} /></a>
                <p><strong>Outline</strong></p>
              </div>
              <div className="col text-uppercase">
                <a href="#guarantee"><GuaranteeIcon alt="play button" width={headerIconSize} height={headerIconSize} style={{ maxWidth: '100%', height: 'auto' }} /></a>
                <p><strong>Guarantee</strong></p>
              </div>
              <div className="col text-uppercase">
                <a href="#tutors"><TutorIcon alt="play button" width={headerIconSize} height={headerIconSize} style={{ maxWidth: '100%', height: 'auto' }} /></a>
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

      <PriceSection courses={courseCodes} price={price} doubleGuarantee={true} />

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <h2 className="mb-2 mb-md-4">Included in <strong>Your Course</strong></h2>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className={`mb-1 ${styles.icon}`}><BsCardChecklist size={iconSize} /></div>
              <h3>Newest <br className="d-none d-md-inline d-lg-none" />Course Materials</h3>
              <p className="mb-0">Your course materials are always available online and are always being updated with the latest science-based industry standards. Refer to your updated training guides throughout your career!</p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className={`mb-1 ${styles.icon}`}><BsPeopleFill size={iconSize} /></div>
              <h3>Personalized <br className="d-none d-md-inline d-lg-none" />Feedback</h3>
              <p className="mb-0">Just because you're learning online doesn't mean you're learning alone. You'll receive personalized audio feedback from your tutor on every dog training assignment you submit. Use this feedback to improve and succeed!</p>
            </div>
            <div className="col-12 col-md-4">
              <div className={`mb-1 ${styles.icon}`}><IoMdInfinite size={iconSize} /></div>
              <h3>Lifetime <br className="d-none d-md-inline d-lg-none" />Access</h3>
              <p className="mb-0">Once you're a member of the QC family you'll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
            </div>
          </div>
        </div>
      </section>

      <div id="outline" className="sectionAnchor" />
      <CourseOutlineSection />

      <GuaranteeSection className="bg-light" />

      <VirtualCommunitySection />

      <TutorSectionDD />

    </>
  );
};

export default DogCarePage;
