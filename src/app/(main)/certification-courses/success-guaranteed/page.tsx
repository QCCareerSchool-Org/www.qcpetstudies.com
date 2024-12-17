import type { Metadata } from 'next';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

import DogGroomingKit from './dog-grooming-kit-white.jpg';
import DryingDogBg from './drying-dog-bg.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { FreeFirstAidSection } from '@/components/freeFirstAidSection';
import QcYearGuaratnteeLogo from '@/components/guaranteeModal/1-year-guarantee-outlined.svg';
import QcDayGuaratnteeLogo from '@/components/guaranteeModal/21-day-guarantee-outlined.svg';
import { HowTheCoursesWorkSection } from '@/components/howTheCoursesWorkSection';
import { PriceSection } from '@/components/priceSection';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { getData } from '@/lib/getData';

const courseCodes = [ 'dg' ];

export const metadata: Metadata = {
  title: 'Success Guaranteed',
  description: 'Study with confidence thanks to QC\'s double guarantee',
  alternates: { canonical: '/certification-courses/success-guaranteed' },
};

const SuccessGuaranteedPage: PageComponent = async () => {
  const { countryCode, provinceCode } = getData();
  const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  return (
    <>
      <section id="top" className="bg-dark">
        <Image
          src={DryingDogBg}
          alt="Person drying dog with dryer"
          priority
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-5">
              <h1 className="fw-normal">Your Success,<br /><strong>Guaranteed</strong></h1>
              <p className="lead">QC means Quality of Course, and we stand behind that promise.</p>
              <p className="lead">Study with confidence thanks to QC's double guarantee.</p>
              <p className="mb-4">First, try the course risk free for 21 days. Then, if you don't earn back your tuition in dog grooming fees within one year of graduating, you'll receive a full tuition refund!</p>
              <Link href="/about/about-qc-pet-studies#guarantee" className="btn btn-outline-light">Find Out More</Link>
            </div>
            <div className="col-12 col-lg-3 mb-4">
              <Image
                src={QcDayGuaratnteeLogo as StaticImageData}
                alt="21-day money-back guaratntee logo"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-12 col-lg-3 mb-4">
              <Image
                src={QcYearGuaratnteeLogo as StaticImageData}
                alt="1-year money-back guaratntee logo"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <a href="https://enroll.qcpetstudies.com" className="btn btn-light">Enroll Today</a>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <h2>Your Course Materials</h2>
              <p>Before you begin your practical work in Unit C, you'll receive a toolkit with the essential items you need to get started.</p>
              <p>Your kit includes a WAHL ARCO 5-in-1 cordless clipper, a stainless steel attachment guide comb kit, professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
              <p className="lead mb-0">These professional-grade tools have a $200 value!</p>
            </div>
            <div className="col-12 col-lg-8">
              <Image
                src={DogGroomingKit}
                alt="professional dog-grooming kit"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      <PriceSection courses={courseCodes} price={price} doubleGuarantee={true} />

      <HowTheCoursesWorkSection className="bg-light" />

      <FreeFirstAidSection />
    </>
  );
};

export default SuccessGuaranteedPage;
