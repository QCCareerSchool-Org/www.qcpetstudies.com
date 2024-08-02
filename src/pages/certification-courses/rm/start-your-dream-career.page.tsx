import { GetServerSideProps } from 'next';
import Image, { StaticImageData } from 'next/image';

import { FreeFirstAidSection } from '../../../components/FreeFirstAidSection';
import { HowTheCoursesWorkSection } from '../../../components/HowTheCoursesWorkSection';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import { PriceSection } from '../../../components/PriceSection';
import { SEO } from '../../../components/SEO';
import QcYearGuaratnteeLogo from '../../../images/1-year-guarantee-outlined.svg';
import QcDayGuaratnteeLogo from '../../../images/21-day-guarantee-outlined.svg';
import DreamCareerBackground from '../../../images/backgrounds/drying-dog-bg.jpg';
import FullKitImage from '../../../images/dog-grooming-kit.jpg';
import { getLocation } from '../../../lib/getLocation';
import { lookupPrices } from '../../../lib/lookupPrices';
import type { Location } from '../../../models/location';
import type { Price } from '../../../models/price';
import type { NextPageWithLayout } from '../../_app.page';

const courseCodes = [ 'dg' ];

type Props = {
  location: Location;
  price: Price;
};

const StartYourDreamCareerPage: NextPageWithLayout<Props> = ({ price }) => (
  <>
    <SEO
      title="Start Your Dream Career"
      description="Start Your Dream Career"
      canonical="/certification-courses/rm/start-your-dream-career"
    />

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
        <Image
          src={FullKitImage}
          alt="course material"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
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
                    <Image
                      src={QcDayGuaratnteeLogo as StaticImageData}
                      alt="21-day money-back guarantee logo"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
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
                    <Image
                      src={QcYearGuaratnteeLogo as StaticImageData}
                      alt="1-year money-back guarantee logo"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
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

StartYourDreamCareerPage.getLayout = page => <DefaultLayout footerCTAType="grooming">{page}</DefaultLayout>;

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const location = await getLocation(context);
  const price = await lookupPrices(courseCodes, location.countryCode, location.provinceCode);
  return { props: { location, price } };
};

export default StartYourDreamCareerPage;
