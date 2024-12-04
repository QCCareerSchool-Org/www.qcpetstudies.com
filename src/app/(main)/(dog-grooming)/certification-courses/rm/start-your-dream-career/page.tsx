import type { Metadata } from 'next';
import Image from 'next/image';

import type { PageComponent } from '@/app/serverComponent';
import { FreeFirstAidSection } from '@/components/freeFirstAidSection';
import QcYearGuaratnteeLogo from '@/components/guaranteeModal/1-year-guarantee-outlined.svg';
import QcDayGuaratnteeLogo from '@/components/guaranteeModal/21-day-guarantee-outlined.svg';
import { HowTheCoursesWorkSection } from '@/components/howTheCoursesWorkSection';
import { PriceSection } from '@/components/priceSection';
import DreamCareerBackground from '@/images/backgrounds/drying-dog-bg.jpg';
import FullKitImage from '@/images/dog-grooming-kit.jpg';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { getData } from '@/lib/getData';

const courseCodes = [ 'dg' ];

export const metadata: Metadata = {
  title: 'Start Your Dream Career',
  alternates: { canonical: '/certification-courses/rm/start-your-dream-career' },
};

const StartYourDreamCareerPage: PageComponent = async () => {
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
          src={DreamCareerBackground}
          alt="dog getting blow dried"
          priority
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h1 className="mb-3 fw-normal">Start Your Dream Career in <strong>Dog Grooming</strong></h1>
              <p>With QC's Online Dog Grooming course, you'll complete your training from home, on your own schedule. You'll learn to safely and expertly groom dogs from start to finish thanks to detailed course texts, video tutorials, and practical assignments while receiving guidance and feedback from certified master groomers every step of the way. Learning to groom dogs online is easy and convenient!</p>
              <p>People love their pets&mdash;that's why dog grooming is a rapidly growing industry across the globe. QC's Dog Grooming course helps you turn your love of animals into a creative, flexible, and fulfilling career.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="courseMaterials" className="bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="mb-3">Your <strong>Course</strong> Materials</h2>
              <p>Before you begin your practical work in Unit C, you'll receive a toolkit with the essential items you need to get started.</p>
              <p>Your kit includes a WAHL ARCO 5-in-1 cordless clipper, a stainless steel attachment guide comb kit, professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
              <p className="lead"><strong>These professional-grade tools have a $200 value!</strong></p>
            </div>
          </div>
          <Image src={FullKitImage} alt="course material" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2 className="mb-5">You'll Be Covered by QC's Double Guarantee</h2>
          <div className="row">
            <div className="col-12 col-lg-6 d-flex mb-3">
              <div className="card bg-light border-0">
                <div className="card-body">
                  <div className="w-100">
                    <div className="mb-3">
                      <QcDayGuaratnteeLogo alt="21-day money-back guarantee logo" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <h4>The 21-Day Money-Back Guarantee</h4>
                    <p className="card-text">Try the course risk-free for 21 days. This gives you time to receive your course materials and evaluate whether the dog grooming course is right for you. If you decide it's not a good fit, simply contact QC to arrange a return of your course materials for a refund. It's that easy! Note: For sanitary reasons, the clippers and attachment combs provided with the course cannot be refunded (value $200 US)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex mb-3">
              <div className="card bg-light border-0">
                <div className="card-body">
                  <div className="w-100">
                    <div className="mb-3">
                      <QcYearGuaratnteeLogo alt="1-year money-back guarantee logo" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <h4>The 1-Year Money-Back Guarantee</h4>
                    <p className="card-text lead"><em>This course will pay for itself within two years. That's a promise.</em></p>
                    <p className="card-text">If after two years of receiving your certificate of completion, you haven't earned the equivalent of your tuition fees in dog grooming fees or salary, your dog grooming course tuition will be refunded in full. All you have to do is provide proof that you've made a reasonable effort to find work as a dog groomer.</p>
                  </div>
                </div>
              </div>
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

export default StartYourDreamCareerPage;
