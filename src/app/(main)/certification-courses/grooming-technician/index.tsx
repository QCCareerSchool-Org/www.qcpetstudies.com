import Image from 'next/image';
import type { FC } from 'react';
import { BsCardChecklist, BsPeopleFill, BsScissors } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import BeginnerToolkitImage from './beginner-tool-kit.jpg';
import CertificationGoldImage from './cgt-light-gold.svg';
import HeroBackgroundImage from './hero-bg.jpg';
import { KitDetailsButton } from './kitDetailsButton';
import { OutlineSection } from './outlineSection';
import { BackgroundImage } from '@/components/backgroundImage';
import { CourseSchema } from '@/components/courseSchema';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { PriceSection } from '@/components/priceSection';
import { TutorSectionDG } from '@/components/tutorSectionDG';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import GuaranteeIcon from '@/images/course-overview-icons/guarantee.svg';
import OutlineIcon from '@/images/course-overview-icons/outline.svg';
import TutorIcon from '@/images/course-overview-icons/tutor.svg';
import { formatPrice } from '@/lib/formatPrice';

const courseCodes: CourseCode[] = [ 'gt' ];
const headerIconSize = 20;
const iconSize = 36;

export type Props = {
  gtPrice: Price;
  dgPrice: Price;
  enrollPath?: string;
};

export const GroomingTechnicianBase: FC<Props> = ({ gtPrice, dgPrice, enrollPath = '/' }) => (
  <>
    <CourseSchema courseCode={courseCodes[0] as CourseCode} />
    <section className="bg-dark">
      <BackgroundImage src={HeroBackgroundImage} priority objectPosition="right" />
      <div className="container text-center">
        <div className="row mb-4">
          <div className="mb-4">
            <CertificationGoldImage alt="Certified Grooming Technician CGT" height="125" width="125" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <h1>Grooming Technician Course</h1>
          {gtPrice && gtPrice.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{gtPrice.currency.symbol}{formatPrice(gtPrice.plans.part.deposit)}</strong></h4>}
          <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
          <a href={`https://enroll.qcpetstudies.com${enrollPath}?c=gt`}><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 text-center">
            <h2>Become a <strong>Certified Grooming Technician&trade;</strong>&nbsp;|&nbsp;CGT&trade;</h2>
            <p>Dive into a fantastic entry role in the thriving pet industry! Grooming technicians perform essential preparatory tasks including nail trimming, brushing, bathing and drying to get dogs ready to be styled by grooming professionals. With these foundational skills, you&apos;ll be ready to work in grooming salons where you can help canine clients look and feel their best.</p>
            <p>With QC&apos;s Grooming Technician course, you&apos;ll gain the introductory skills you need to begin working in a grooming salon. Study at your own pace. Watch instructional videos and complete hands-on assignments to gain all the knowledge and skills you need to get started!</p>
            <p className="mb-0">Are you ready to start a fun and rewarding career?</p>
          </div>
        </div>
      </div>
    </section>

    <PriceSection courses={courseCodes} price={gtPrice} enrollPath={enrollPath} />

    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4">
            <h2 className="mb-2 mb-md-4">Included in <strong>Your Course</strong></h2>
            <Image src={BeginnerToolkitImage} alt="professional dog-grooming kit" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            <div className="courseContentIcon"><BsScissors size={iconSize} /></div>
            <h3>Beginner Tool Kit</h3>
            <p>When you enroll, you'll receive a beginner toolkit to help you complete your studies. This bonus kit includes an assortment of brushes, combs and nail clippers to get you started.</p>
            <KitDetailsButton />
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="courseContentIcon"><BsCardChecklist size={iconSize} /></div>
            <h3>Leading <br className="d-none d-md-inline d-lg-none" />Course Materials</h3>
            <p className="mb-0">Your course materials are always being updated with the latest industry standards. Refer to your updated training guides throughout your career!</p>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="courseContentIcon"><BsPeopleFill size={iconSize} /></div>
            <h3>Personalized<br className="d-none d-md-inline d-lg-none" />Feedback</h3>
            <p className="mb-0">Just because you're learning online doesn't mean you're learning alone. You'll receive personalized audio feedback from your tutor on every dog grooming assignment you submit.</p>
          </div>
          <div className="col-12 col-md-4">
            <div className="courseContentIcon"><IoMdInfinite size={iconSize} /></div>
            <h3>Lifetime <br className="d-none d-md-inline d-lg-none" />Access</h3>
            <p className="mb-0">Once you're a member of the QC family you'll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
          </div>
        </div>
      </div>
    </section>

    <OutlineSection dgPrice={dgPrice} gtPrice={gtPrice} />

    <GuaranteeSection className="bg-light" />

    <VirtualCommunitySection />

    <TutorSectionDG />
  </>
);
