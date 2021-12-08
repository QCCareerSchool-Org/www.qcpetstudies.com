import { NextPage } from 'next';
import Image from 'next/image';

import { DefaultLayout } from '../../components/DefaultLayout';
import { FreeFirstAidSection } from '../../components/FreeFirstAidSection';
import { HowTheCoursesWorkSection } from '../../components/HowTheCoursesWorkSection';
import { PriceSection } from '../../components/PriceSection';
import { SEO } from '../../components/SEO';
import QcYearGuaratnteeLogo from '../../images/1-year-guarantee-outlined.svg';
import QcDayGuaratnteeLogo from '../../images/21-day-guarantee-outlined.svg';
import DreamCareerBackground from '../../images/backgrounds/drying-dog-bg.jpg';
import FullKitImage from '../../images/dog-grooming-kit.jpg';

const courseCodes = [ 'dg' ];

const StartYourDreamCareerPage: NextPage = () => (
  <DefaultLayout>
    <SEO
      title="Start Your Dream Career"
      description="Start Your Dream Career"
      canonical="/dog-grooming-courses/start-your-dream-career-rm"
    />

    <section id="firstSection" className="bg-dark">
      <Image src={DreamCareerBackground} layout="fill" objectFit="cover" objectPosition="center" alt="dog getting blow dried" />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h1 className="mb-3 fw-normal">Start Your Dream Career in <strong>Dog Grooming</strong></h1>
            <p>With QC&apos;s Online Dog Grooming course, you&apos;ll complete your training from home, on your own schedule. You&apos;ll learn to safely and expertly groom dogs from start to finish thanks to detailed course texts, video tutorials, and practical assignments while receiving guidance and feedback from certified master groomers every step of the way. Learning to groom dogs online is easy and convenient!</p>
            <p>People love their pets&mdash;that&apos;s why dog grooming is a rapidly growing industry across the globe. QC&apos;s Dog Grooming course helps you turn your love of animals into a creative, flexible, and fulfilling career.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="courseMaterials" className="bg-light">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="mb-3">Your <strong>Course</strong> Materials</h2>
            <p>Before you begin your practical work in Unit C, you&apos;ll receive a toolkit with the essential items you need to get started.</p>
            <p>Your kit includes a WAHL ARCO 5-in-1 cordless clipper, a stainless steel attachment guide comb kit, professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
            <p className="lead"><strong>These professional-grade tools have a $200 value!</strong></p>
          </div>
        </div>
        <Image src={FullKitImage} layout="responsive" alt="Course Material" />
      </div>
    </section>

    <section>
      <div className="container text-center">
        <h2 className="mb-5">You&apos;ll Be Covered by QC&apos;s Double Guarantee</h2>
        <div className="row">
          <div className="col-12 col-lg-6 d-flex mb-3">
            <div className="card bg-light border-0">
              <div className="card-body">
                <div className="w-100">
                  <div className="mb-3">
                    <Image src={QcDayGuaratnteeLogo} alt="21-day money-back guarantee logo" />
                  </div>
                  <h4>The 21-Day Money-Back Guarantee</h4>
                  <p className="card-text">Try the course risk-free for 21 days. This gives you time to receive your course materials and evaluate whether the dog grooming course is right for you. If you decide it&apos;s not a good fit, simply contact QC to arrange a return of your course materials for a refund. It&apos;s that easy! Note: For sanitary reasons, the clippers and attachment combs provided with the course cannot be refunded (value $200 US)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex mb-3">
            <div className="card bg-light border-0">
              <div className="card-body">
                <div className="w-100">
                  <div className="mb-3">
                    <Image src={QcYearGuaratnteeLogo} alt="1-year money-back guarantee logo" />
                  </div>
                  <h4>The 1-Year Money-Back Guarantee</h4>
                  <p className="card-text lead"><em>This course will pay for itself within two years. That&apos;s a promise.</em></p>
                  <p className="card-text">If after two years of receiving your certificate of completion, you haven&apos;t earned the equivalent of your tuition fees in dog grooming fees or salary, your dog grooming course tuition will be refunded in full. All you have to do is provide proof that you&apos;ve made a reasonable effort to find work as a dog groomer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PriceSection courses={courseCodes} doubleGuarantee={true} />

    <HowTheCoursesWorkSection className="bg-light" />

    <FreeFirstAidSection />

  </DefaultLayout>
);

export default StartYourDreamCareerPage;
