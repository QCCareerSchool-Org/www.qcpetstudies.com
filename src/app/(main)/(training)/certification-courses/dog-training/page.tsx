import { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';

import { CertificationSection } from './CertificationSection';
import { CourseOutlineSection } from './CourseOutlineSection';
import { IncludedSection } from './IncludedSection';
import { OntarioOnlySection } from './OntarioOnlySection';
import { PageComponent } from '@/app/serverComponent';
import { DTTutorSection } from '@/components/DTTutorSection';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { PriceSection } from '@/components/PriceSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import DTBackgroundImage from '@/images/backgrounds/australian-shepherd-attentive.jpg';
import GuaranteeIcon from '@/images/course-overview-icons/guarantee.svg';
import OutlineIcon from '@/images/course-overview-icons/outline.svg';
import TutorIcon from '@/images/course-overview-icons/tutor.svg';
import CertificationGoldImage from '@/images/IDTP-certification-yellow.svg';
import { formatPrice } from '@/lib/formatPrice';
import { lookupPrices } from '@/lib/lookupPrices';

const headerIconSize = 20;

const courseCodes = [ 'dt' ];

export const metadata: Metadata = {
  title: 'Dog Training Course',
  description: 'Become a Professional Dog Trainer with QC\'s online dog training course. Study Online with Hands-On Learning!',
  alternates: { canonical: '/certification-courses/dog-training' },
};

const DogTrainingPage: PageComponent = async () => {
  const price = await lookupPrices([ 'dt' ]);

  return <>

    <section id="top" className="bg-dark">
      <Image
        src={DTBackgroundImage}
        placeholder="blur"
        alt="Attentive Australian Shepherd Dog"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <div className="row mb-4">
          <div className="mb-4">
            <Image
              src={CertificationGoldImage as StaticImageData}
              alt="International Dog Training Professional IDTP Certification"
              height="125"
              width="125"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <h1>Dog Training Course</h1>
          {price && price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
          <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
          <a href="https://enroll.qcpetstudies.com?c=dt"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-6 d-flex">
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

    <CertificationSection />

    <PriceSection courses={courseCodes} price={price} doubleGuarantee={true} />

    <IncludedSection />

    <div id="outline" className="sectionAnchor" />
    <CourseOutlineSection />

    <DTTutorSection />

    <OntarioOnlySection />

    <GuaranteeSection className="bg-light" />

    <VirtualCommunitySection />
  </>;
};

// const FooterDualCTA: FC = () => {
//   const location = useLocation();

//   return location && !(location.countryCode === 'CA' && location.provinceCode)
//     ? (
//       <>
//         <div className="row align-items-center">
//           <div className="col-12 col-lg-9 col-xl-8 mb-4 mb-lg-0 text-center text-lg-start">
//             <h2>Ready to Launch Your <strong>Training Career?</strong></h2>
//             <p className="lead mb-0">Get 50% off the Dog Behavior course when you enroll in Dog Training.</p>
//           </div>
//           <div className="col-12 col-lg-3 text-center text-lg-end text-xl-center">
//             <a href="https://enroll.qcpetstudies.com/?c=dt&c=dc"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
//           </div>
//         </div>
//       </>
//     )
//     : (
//       <>
//         <div className="row align-items-center">
//           <div className="col-12 col-lg-9 col-xl-8 mb-4 mb-lg-0 text-center text-lg-start">
//             <h2>Ready to Launch Your <strong>Training Career?</strong></h2>
//             <p className="lead mb-0">Take the first step towards a new career in the booming dog training industry.</p>
//           </div>
//           <div className="col-12 col-lg-3 text-center text-lg-end text-xl-center">
//             <a href="https://enroll.qcpetstudies.com/?c=dt"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
//           </div>
//         </div>
//       </>
//     );
// };

export default DogTrainingPage;
