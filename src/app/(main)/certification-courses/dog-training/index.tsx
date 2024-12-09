import type { FC } from 'react';
import { BsCardChecklist, BsPeopleFill } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import { OntarioOnlySection } from './ontarioOnlySection';
import { CourseOutlineSection } from './outlineSection';
import { BackgroundImage } from '@/components/backgroundImage';
import CertificationGoldImage from '@/components/certifications/IDTP-certification-yellow.svg';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { PriceSection } from '@/components/priceSection';
import { PriceSectionWithDiscount } from '@/components/priceSectionWithDiscount';
import { TutorSectionDT } from '@/components/tutorSectionDT';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import DTBackgroundImage from '@/images/backgrounds/australian-shepherd-attentive.jpg';
import GuaranteeIcon from '@/images/course-overview-icons/guarantee.svg';
import OutlineIcon from '@/images/course-overview-icons/outline.svg';
import TutorIcon from '@/images/course-overview-icons/tutor.svg';
import { formatPrice } from '@/lib/formatPrice';

type Props = {
  price: Price;
  enrollPath: string;
  courseCodes: CourseCode[];
  countryCode: string;
  provinceCode: string | null;
};

const headerIconSize = 20;
const iconSize = 36;

export const DogTrainingBase: FC<Props> = ({ price, enrollPath, courseCodes, countryCode, provinceCode }) => (
  <>
    <section className="bg-dark">
      <BackgroundImage src={DTBackgroundImage} priority />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <div className="row mb-4">
          <div className="mb-4">
            <CertificationGoldImage alt="International Dog Training Professional IDTP Certification" height="125" width="125" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <h1>Dog Training Course</h1>
          {price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
          <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
          <a href="https://enroll.qcpetstudies.com?c=dt"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-6 d-flex">
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
          <div className="col-12 col-lg-8 mb-4">
            <div className="ratio ratio-16x9">
              <video controls preload="metadata" poster="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-trailer-poster.png">
                <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-trailer.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="col-12 col-lg-10">
            <h2>Become a <strong>Certified Dog Trainer</strong></h2>
            <p className="lead"><strong>International Dog Training Professional&trade;</strong> | <i>IDTP&trade;</i></p>
            <p>Dog training is a booming industry! Owners need help to turn their dogs into well-behaved members of the family, and they want someone qualified to help them achieve this goal.  Whether you want to work in a training school, launch your own dog training business, or freelance as a private dog trainer, you'll graduate with all the knowledge and skills you need to succeed in the dog training industry!</p>
            <p className="lead mb-0">Are you ready to start an amazing career?</p>
          </div>
        </div>
      </div>
    </section>

    {price.promoDiscount > 0
      ? <PriceSectionWithDiscount courses={courseCodes} price={price} doubleGuarantee enrollPath={enrollPath} />
      : <PriceSection courses={courseCodes} price={price} doubleGuarantee enrollPath={enrollPath} />
    }

    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4">
            <h2 className="mb-2 mb-md-4">Included in <strong>Your Course</strong></h2>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="courseContentIcon"><BsCardChecklist size={iconSize} /></div>
            <h3>Newest <br className="d-none d-md-inline d-lg-none" />Course Materials</h3>
            <p className="mb-0">Your course materials are always available online and are always being updated with the latest science-based industry standards. Refer to your updated training guides throughout your career!</p>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="courseContentIcon"><BsPeopleFill size={iconSize} /></div>
            <h3>Personalized <br className="d-none d-md-inline d-lg-none" />Feedback</h3>
            <p className="mb-0">Just because you're learning online doesn't mean you're learning alone. You'll receive personalized audio feedback from your tutor on every dog training assignment you submit. Use this feedback to improve and succeed!</p>
          </div>
          <div className="col-12 col-md-4">
            <div className="courseContentIcon"><IoMdInfinite size={iconSize} /></div>
            <h3>Lifetime <br className="d-none d-md-inline d-lg-none" />Access</h3>
            <p className="mb-0">Once you're a member of the QC family you'll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
          </div>
        </div>
      </div>
    </section>

    <div id="outline" className="sectionAnchor" />
    <CourseOutlineSection />

    <TutorSectionDT />

    {countryCode === 'CA' && provinceCode === 'ON' && <OntarioOnlySection />}

    <GuaranteeSection className="bg-light" />

    <VirtualCommunitySection />
  </>
);
