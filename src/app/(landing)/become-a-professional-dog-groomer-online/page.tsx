import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';

import HeroImage from './hero-lrg.jpg';
import styles from './page.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrevoForm } from '@/components/brevoForm';
import { Check } from '@/components/check';
import { FormCard } from '@/components/formCard';
import BBBLogo from '@/components/siteLayout/footer/bbb-icon.svg';
import { BBBGuarantee } from '@/components/siteLayout/footer/bbbGuarantee';
import GuaranteeIcon from '@/components/siteLayout/footer/guarantee-icon.svg';
import type { TestimonialId } from '@/components/testimonial/data';
import { TestimonialCarousel } from '@/components/testimonialCarousel';
import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import BriefcaseIcon from '@/images/briefcase.svg';
import FirstAidIcon from '@/images/first-aid.svg';
import GlobeIcon from '@/images/globe.svg';
import LaptopIcon from '@/images/laptop.svg';
import GroomerIcon from '@/images/person-check.svg';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';
import { getParam } from '@/lib/getParam';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Become a Professional Dog Groomer Online',
  description: 'Turn your love of dogs into a career with affordable online dog grooming training from Master Groomers, hands-on practice, and a professional grooming kit included.',
  alternates: {
    canonical: '/become-a-professional-dog-groomer-online',
  },
};

const courseCodes: CourseCode[] = [ 'dg' ];
const testimonialIds: TestimonialId[] = [ 'TD-0004', 'TD-0005', 'TD-0007', 'TD-0008', 'TD-0009', 'TD-0010' ];
const brevoListId = 31;
const brevoTelephoneListId = 55;

const Page: PageComponent = async props => {
  const { countryCode, provinceCode } = await getServerData(props.searchParams);
  const searchParams = await props.searchParams;
  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  const headerList = await headers();
  const referrer = headerList.get('referer');

  const priceResult = await fetchPrice(courseCodes, countryCode, provinceCode, undefined, undefined, process.env.FIREWALL_BYPASS_SECRET);
  const price = priceResult.success ? priceResult.value : undefined;

  return (
    <div className={styles.page}>
      <div className="text-white py-3" style={{ background: 'linear-gradient(90deg, #53B8CB 0%, #295C65 100%)' }}>
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center text-md-start">
            <div className="fw-semibold text-uppercase small" style={{ letterSpacing: '0.08em' }}>
              FLEXIBLE ONLINE LEARNING WITH HANDS-ON GROOMING PRACTICE
            </div>
            <div>
              CALL NOW: 1-833-600-3751
            </div>
          </div>
        </div>
      </div>

      <section className={styles.hero}>
        <BackgroundImage src={HeroImage} priority />
        <div className={`container ${styles.heroInner}`}>
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <h1 className="mb-4" style={{ color: '#fff' }}>Become a Professional Dog Groomer Online</h1>
              <p className={`lead mb-4 ${styles.heroLead}`}>
                Turn your love of dogs into your new career with affordable training from Master Groomers,
                hands-on grooming practice and a professional grooming kit included.
              </p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><span className={styles.checkIcon}><Check color="#ff2d5c" /></span><span>Personalized feedback from professional groomers</span></li>
                <li className={styles.checkItem}><span className={styles.checkIcon}><Check color="#ff2d5c" /></span><span>Hands-on grooming assignments</span></li>
                <li className={styles.checkItem}><span className={styles.checkIcon}><Check color="#ff2d5c" /></span><span>Flexible study at your own pace</span></li>
              </ul>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1">
              <FormCard>
                <div id="request-info" className="sectionAnchor" />
                <h3 className="sectionLabel mb-3">Get Course Details</h3>
                <BrevoForm
                  successLocation={`${process.env.NEXT_PUBLIC_HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-grooming-course-preview`}
                  listId={brevoListId}
                  telephoneListId={brevoTelephoneListId}
                  gclid={gclid}
                  msclkid={msclkid}
                  utmSource={utmSource}
                  utmMedium={utmMedium}
                  utmCampaign={utmCampaign}
                  utmContent={utmContent}
                  utmTerm={utmTerm}
                  courseCodes={courseCodes}
                  placeholders={false}
                  referrer={referrer}
                  countryCode={countryCode}
                  buttonText="Request Info"
                  buttonClassName="btn btn-primary btn-lg"
                />
              </FormCard>
            </div>
          </div>
        </div>
      </section>

      <section className={`bg-light ${styles.careerTestimonialSpacing}`}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-10 text-center">
              <h2 className={styles.careerHeading}>Career Paths After Graduation</h2>
              <p className={styles.careerIntro}>84% of QC Pet Studies students enroll to start a grooming business, work in a salon, or build on their existing skills.</p>
            </div>
          </div>
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <div className={styles.graduateCopy}>
                <h3 className={styles.graduateHeading}>Where Our Graduates Work Today</h3>
                <p className={styles.graduateIntroText}>QC graduates are building careers in a variety of roles, including:</p>
                <ul className={styles.graduateList}>
                  <li>Professional dog groomers in established salons</li>
                  <li>Mobile grooming business owners</li>
                  <li>Home-based grooming entrepreneurs</li>
                  <li>Entry-level groomers gaining industry experience</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className={styles.sliderWrap}>
                <TestimonialCarousel testimonialIds={testimonialIds} coursePriority="dg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.ctaBand} ${styles.compactSpacing}`}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className={styles.ctaHeading}>Ready to Launch Your Career?</h2>
              <div className={styles.ctaButtons}>
                <a href="#request-info" className="btn btn-primary btn-lg">Start Now</a>
                <a href="#why-qc" className="btn btn-outline-light btn-lg">Learn More</a>
              </div>
              <div className={styles.ctaTrustRow}>
                <div className={styles.ctaTrustItem}>
                  <Image src={BBBLogo} alt="BBB Accredited" className={styles.ctaTrustBadge} />
                  <div className={styles.ctaTrustText}>BBB ACCREDITED</div>
                </div>
                <div className={styles.ctaTrustItem}>
                  <Image src={GuaranteeIcon} alt="14-Day Guarantee" className={styles.ctaGuaranteeBadge} />
                  <div className={styles.ctaTrustText}>14-DAY GUARANTEE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-qc" className={styles.sectionSpacing}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-9 text-center">
              <h2 className="mb-3">Why Future Dog Groomers Choose QC Pet Studies</h2>
              <p className="lead mb-0">QC Pet Studies combines flexible online learning with personalized support, practical training, and career-focused education to help you graduate with the skills and confidence to succeed.</p>
            </div>
          </div>
          <div className={`row g-4 ${styles.whyGrid}`}>
            <div className="col-12 col-md-6 col-xl-4">
              <div className={`card ${styles.whyCard}`}>
                <div className="card-body p-4 p-lg-5">
                  <Image src={GroomerIcon} alt="" className={styles.whyIcon} />
                  <h3 className="h4">Learn From Experienced Professional Groomers</h3>
                  <p className="mb-0">Receive personalized feedback on every practical assignment from an experienced instructor who is invested in your success.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className={`card ${styles.whyCard}`}>
                <div className="card-body p-4 p-lg-5">
                  <Image src={GlobeIcon} alt="" className={styles.whyIcon} />
                  <h3 className="h4">Optional In-Person Externship</h3>
                  <p className="mb-0">Put your skills into practice alongside experienced professional groomers and gain valuable real-world experience in a grooming environment.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className={`card ${styles.whyCard}`}>
                <div className="card-body p-4 p-lg-5">
                  <Image src={BriefcaseIcon} alt="" className={styles.whyIcon} />
                  <h3 className="h4">Be Prepared for More Than Grooming</h3>
                  <p className="mb-0">Build the business, communication, and client service skills that can help you succeed whether you work in a salon or start your own business.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className={`card ${styles.whyCard}`}>
                <div className="card-body p-4 p-lg-5">
                  <Image src={FirstAidIcon} alt="" className={styles.whyIcon} />
                  <h3 className="h4">Pet First Aid Training Included</h3>
                  <p className="mb-0">Learn how to recognize emergencies, respond appropriately, and help keep the pets in your care safe.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className={`card ${styles.whyCard}`}>
                <div className="card-body p-4 p-lg-5">
                  <Image src={LaptopIcon} alt="" className={styles.whyIcon} />
                  <h3 className="h4">Study Around Your Life</h3>
                  <p className="mb-0">Study at your own pace, from anywhere, and fit your training around your work, family, and lifestyle.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`bg-light ${styles.sectionSpacing}`}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-10 text-center">
              <h2 className="mb-3">How You'll Build Your Dog Grooming Career</h2>
              <p className="lead mb-0">Learn online with support every step of the way.</p>
            </div>
          </div>
          <div className="row g-4 mb-5">
            <div className="col-12 col-md-6 col-lg-3">
              <div className={`card ${styles.stepCard}`}>
                <div className="card-body p-4">
                  <div className={styles.stepNumber}>1</div>
                  <h3 className="h4">Learn Online from Master Groomers</h3>
                  <p className="mb-0">Build a strong foundation with expert-led online lessons from professional groomers.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className={`card ${styles.stepCard}`}>
                <div className="card-body p-4">
                  <div className={styles.stepNumber}>2</div>
                  <h3 className="h4">Complete Hands-On Assignments</h3>
                  <p className="mb-0">Practice real grooming skills at home while receiving support from our team.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className={`card ${styles.stepCard}`}>
                <div className="card-body p-4">
                  <div className={styles.stepNumber}>3</div>
                  <h3 className="h4">Prove Your Skills With Certification</h3>
                  <p className="mb-0">Show what you&apos;ve learned with a professional certification that reflects your training.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className={`card ${styles.stepCard}`}>
                <div className="card-body p-4">
                  <div className={styles.stepNumber}>4</div>
                  <h3 className="h4">Turn Your Passion for Dogs into a Career</h3>
                  <p className="mb-0">Use your new skills to start working, launch a business, or grow your current services.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className={`card ${styles.featureCard}`}>
                <div className="card-body p-4 p-lg-5">
                  <h3 className="mb-3">Can You Learn Dog Grooming Online?</h3>
                  <p className="lead mb-0">Yes - with the right training model.</p>
                  <p className="mb-0">QC Pet Studies combines online education with hands-on practice and personalized instructor feedback. You don&apos;t just watch lessons-you complete assignments that are reviewed by a professional groomer who guides your progress step by step. This ensures you build real, practical grooming skills from home.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h2 className="text-white mb-3">Launch Your Grooming Career</h2>
              <p className="lead text-white-50 mb-4">Study from home and get certified online.</p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="#request-info" className="btn btn-primary btn-lg">Start Now</a>
                <a href="#tuition" className="btn btn-outline-light btn-lg">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tuition" className={styles.sectionSpacing}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-10 text-center">
              <h2 className="mb-3">Tuition &amp; Payment Plans</h2>
              <p className="lead mb-0">Affordable tuition with flexible payment options makes it easier to start your training.</p>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            <div className="col-12 col-lg-4">
              <div className={`card ${styles.statCard}`}>
                <div className="card-body p-4">
                  <h3 className="h4 mb-3">Included in Your Tuition</h3>
                  <ul className="mb-0">
                    <li>Full dog grooming course</li>
                    <li>Instructor feedback</li>
                    <li>Hands-on assignments</li>
                    <li>Business training</li>
                    <li>Certification</li>
                    <li>FREE grooming kit</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <TuitionCard
                title="Installment Plan"
                price={price}
                variant="installment"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <TuitionCard
                title="Pay in Full"
                price={price}
                variant="full"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <a href="#request-info" className="btn btn-primary btn-lg">Get Full Course Details</a>
          </div>
        </div>
      </section>

      <section className={`bg-light ${styles.sectionSpacing}`}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="mb-3">40+ Years of Educational Excellence</h2>
              <p className="lead mb-4">QC has been helping students prepare for rewarding careers through flexible online learning for more than four decades.</p>
            </div>
          </div>
          <div className="row justify-content-center g-4 align-items-stretch">
            <div className="col-12 col-md-4 d-flex">
              <div className={`card ${styles.trustCard}`}>
                <div className="card-body p-4">
                  <h3 className="h4">40+ Years</h3>
                  <p className="mb-0">QC has a long history of helping students build practical skills and prepare for career growth.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex">
              <div className={`card ${styles.trustCard}`}>
                <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center text-center">
                  <BBBGuarantee />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex">
              <div className={`card ${styles.trustCard}`}>
                <div className="card-body p-4">
                  <h3 className="h4">Expert-Backed Programs</h3>
                  <p className="mb-0">Our courses are developed with industry expertise, practical outcomes, and student success in mind.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.ctaBand} ${styles.sectionSpacing}`}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h2 className="text-white mb-4">Ready to Start Your Dog Grooming Career?</h2>
              <div className="row justify-content-center mb-4">
                <div className="col-12 col-md-10 col-lg-8">
                  <ul className={`list-unstyled text-start ${styles.formPerks}`}>
                    <li className={styles.formPerk}><Check color="var(--qc-color-primary)" /><span>Study from home at your own pace</span></li>
                    <li className={styles.formPerk}><Check color="var(--qc-color-primary)" /><span>Receive personalized instructor feedback</span></li>
                    <li className={styles.formPerk}><Check color="var(--qc-color-primary)" /><span>Build real grooming skills through practice</span></li>
                    <li className={styles.formPerk}><Check color="var(--qc-color-primary)" /><span>FREE professional grooming kit included</span></li>
                  </ul>
                </div>
              </div>
              <a href="#request-info" className="btn btn-primary btn-lg">Request Free Course Information</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface TuitionCardProps {
  title: string;
  price: Price | undefined;
  variant: 'full' | 'installment';
}

const TuitionCard = ({ title, price, variant }: TuitionCardProps) => {
  if (!price) {
    return (
      <div className={`card ${styles.priceCard} flex-fill`}>
        <div className="card-body p-4 text-center">
          <h3 className="h4 mb-3">{title}</h3>
          <p className="mb-0">Request free course details to see current tuition and payment options.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`card ${styles.priceCard} flex-fill`}>
      <div className="card-body p-4 text-center d-flex flex-column">
        <h3 className="h4 mb-3">{title}</h3>
        {variant === 'installment'
          ? (
            <>
              <p className="mb-3">Start with a deposit of</p>
              <div className={`${styles.priceAmount} mb-3`}>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</div>
              <p className={`mb-3 ${styles.priceFinePrint}`}>{price.plans.part.installments} monthly payments of {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}</p>
              <p className="mb-0 small">Total: {price.currency.symbol}{formatPrice(price.plans.part.total)}</p>
            </>
          )
          : (
            <>
              <p className="mb-3">One-time payment</p>
              <div className={`${styles.priceAmount} mb-3`}>{price.currency.symbol}{formatPrice(price.plans.full.total)}</div>
              <p className={`mb-3 ${styles.priceFinePrint}`}>
                {price.plans.full.discount > 0
                  ? <>Save {price.currency.symbol}{formatPrice(price.plans.full.discount)} when you pay in full.</>
                  : <>Flexible full-payment option.</>
                }
              </p>
              <p className="mb-0 small">Prices are listed in {price.currency.name}.</p>
            </>
          )
        }
      </div>
    </div>
  );
};

export default Page;
