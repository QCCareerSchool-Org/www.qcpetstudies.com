import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';

import BBB from './bbb.svg';
import { CTASection1 } from './CTASections/ctaSection1';
import { CTASection2 } from './CTASections/ctaSection2';
import { CTASection3 } from './CTASections/ctaSection3';
import DogImage from './dog-can-you-learn-online.jpg';
import FormBgImage from './form-bg-option-1.png';
import Guarantee from './guarantee.svg';
import HeroImage from './hero-lrg.jpg';
import KitImage from './main-kit-white-bg.jpg';
import styles from './page.module.scss';
import Person from './person-check.svg';
import { TuitionSection } from './TuitionSection/tuitionSection';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrevoForm } from '@/components/brevoForm';
import { Check } from '@/components/check';
import type { TestimonialId } from '@/components/testimonial/data';
import { TestimonialCarousel } from '@/components/testimonialCarousel';
import type { CourseCode } from '@/domain/courseCode';
import BriefcaseIcon from '@/images/briefcase.svg';
import FirstAidIcon from '@/images/first-aid.svg';
import GlobeIcon from '@/images/globe.svg';
import LaptopIcon from '@/images/laptop.svg';
import GroomerIcon from '@/images/person-check.svg';
import { fetchPrice } from '@/lib/fetchPrice';
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
    <div>
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
              <div className={`card bg-white border-0 ${styles.card}`}>
                <h3 className="card-header bg-danger text-white px-4 pb-4 pt-5 mb-0 border-0 position-relative overflow-hidden">
                  <BackgroundImage src={FormBgImage} />
                  <span className="position-relative">Get Course Details</span>
                </h3>
                <div className="card-body">
                  <div id="request-info" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <h2>Career Paths After Graduation</h2>
              <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.55rem)' }}>84% of QC Pet Studies students enroll to start a grooming business, work in a salon, or build on their existing skills.</p>
            </div>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div>
                <h3>Where Our Graduates Work Today</h3>
                <p style={{ fontSize: '1.15rem' }}>QC graduates are building careers in a variety of roles, including:</p>
                <ul style={{ fontSize: '1.15rem' }}>
                  <li>Professional dog groomers in established salons</li>
                  <li>Mobile grooming business owners</li>
                  <li>Home-based grooming entrepreneurs</li>
                  <li>Entry-level groomers gaining industry experience</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6 p-0">
              <div className={styles.sliderWrap}>
                <TestimonialCarousel testimonialIds={testimonialIds} coursePriority="dg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection1 />

      <section id="why-qc" className="pt-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-9 text-center">
              <h2 className="mb-3">Why Future Dog Groomers Choose QC Pet Studies</h2>
              <p className="lead mb-0">QC Pet Studies combines flexible online learning with personalized support, practical training, and career-focused education to help you graduate with the skills and confidence to succeed.</p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {whyCards.map(card => (
              <div className="col-12 col-md-6 col-xl-4" key={card.title}>
                <div className={styles.whyCard}>
                  <div className="card-body p-4 p-lg-5">
                    <Image src={card.icon} alt="" width={40} height={40} />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`row justify-content-center align-items-center ${styles.kitSection}`}>
            <div className="col-12 col-lg-6 text-center">
              <h3>Everything You Need to Start Learning</h3>
              <p>
                When you enroll, you&apos;ll receive a FREE professional grooming kit with the essential tools you&apos;ll use throughout your practical training, so you can start building your skills right away.
              </p>
              <Image src={KitImage} alt="Professional dog grooming kit" className={styles.kitImage} sizes="100vw" />
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
          <div className="row justify-content-center g-5">
            <div className="col-12 col-lg-6">
              <div className={styles.stepRail}>
                {steps.map(({ number, title, description }) => (
                  <div className={`card ${styles.stepCard}`} key={number}>
                    <div className={styles.stepCardInner}>
                      <div className={styles.stepNumber}>{number}</div>
                      <div>
                        <h3 className="h5">{title}</h3>
                        <p className="mb-0">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className={styles.qnaCard}>
                <h3 className="mb-3"><i>&ldquo;Can you learn dog grooming online?&rdquo;</i></h3>
                <h2 className={`${styles.qnaAnswer} mb-3 fw-bold`}>Yes!</h2>
                <p className="fw-bold">With the right training model</p>
                <p className={styles.qnaBody}>QC Pet Studies combines online education with hands-on practice and personalized instructor feedback. You don&apos;t just watch lessons-you complete assignments that are reviewed by a professional groomer who guides your progress step by step. This ensures you build real, practical grooming skills from home.</p>
                <Image src={DogImage} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection2 />
      <TuitionSection price={price} />

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <h2 className="mb-4">40+ Years of Educational Excellence</h2>
              <p className="lead mb-4 mx-auto" style={{ maxWidth: '650px' }}>QC has been helping students prepare for rewarding careers through flexible online learning for more than four decades.</p>
              <div className={`d-flex flex-row justify-content-center align-items-center gap-4 gap-md-5 fw-bold ${styles.excellenceTrustLine}`}>
                <div className="d-flex flex-column align-items-center gap-2">
                  <Image src={BBB} alt="BBB Accredited" width={40} height={40} />
                  <span>BBB ACCREDITED</span>
                </div>
                <div className="d-flex flex-column align-items-center gap-2">
                  <Image src={Guarantee} alt="14-day money-back guarantee" width={40} height={40} />
                  <span>14-DAY MONEY-BACK GUARANTEE</span>
                </div>
                <div className="d-flex flex-column align-items-center gap-2">
                  <Image src={Person} alt="Expert-backed programs" width={40} height={40} />
                  <span>EXPERT-BACKED PROGRAMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection3 />

    </div>
  );
};

export default Page;

const whyCards = [
  {
    icon: GroomerIcon,
    title: 'Learn From Experienced Professional Groomers',
    description:
      'Receive personalized feedback on every practical assignment from an experienced instructor who is invested in your success.',
  },
  {
    icon: GlobeIcon,
    title: 'Optional In-Person Externship',
    description:
      'Put your skills into practice alongside experienced professional groomers and gain valuable real-world experience in a grooming environment.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Be Prepared for More Than Grooming',
    description:
      'Build the business, communication, and client service skills that can help you succeed whether you work in a salon or start your own business.',
  },
  {
    icon: FirstAidIcon,
    title: 'Pet First Aid Training Included',
    description:
      'Learn how to recognize emergencies, respond appropriately, and help keep the pets in your care safe.',
  },
  {
    icon: LaptopIcon,
    title: 'Study Around Your Life',
    description:
      'Study at your own pace, from anywhere, and fit your training around your work, family, and lifestyle.',
  },
];
const steps = [
  {
    number: 1,
    title: 'Learn Online from Master Groomers',
    description:
      'Build a strong foundation with expert-led online lessons from professional groomers.',
  },
  {
    number: 2,
    title: 'Complete Hands-On Assignments',
    description:
      'Practice real grooming skills at home while receiving support from our team.',
  },
  {
    number: 3,
    title: 'Prove Your Skills With Certification',
    description:
      "Show what you've learned with a professional certification that reflects your training.",
  },
  {
    number: 4,
    title: 'Turn Your Passion for Dogs into a Career',
    description:
      'Use your new skills to start working, launch a business, or grow your current services.',
  },
];
