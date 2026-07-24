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
import { ActiveCampaginForm } from '@/components/activeCampaignForm';
import { BackgroundImage } from '@/components/backgroundImage';
import { Check } from '@/components/check';
import type { TestimonialId } from '@/components/testimonial/data';
import { TestimonialCarousel } from '@/components/testimonialCarousel';
import BriefcaseIcon from '@/images/briefcase.svg';
import FirstAidIcon from '@/images/first-aid.svg';
import GlobeIcon from '@/images/globe.svg';
import LaptopIcon from '@/images/laptop.svg';
import GroomerIcon from '@/images/person-check.svg';
import { externship } from '@/lib/externship';
import { fetchPrice } from '@/lib/fetchPrice';
import { getParam } from '@/lib/getParam';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Become a Professional Dog Groomer',
  description: 'Build a career you love with flexible online training from Master Groomers, a professional grooming kit to start practicing right away, and personalized instructor feedback that helps you build real-world grooming skills.',
  alternates: {
    canonical: '/become-a-professional-dog-groomer-online',
  },
};

const testimonialIds: TestimonialId[] = [ 'TD-0004', 'TD-0005', 'TD-0007', 'TD-0008', 'TD-0009', 'TD-0010' ];

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

  const [ dgPriceResult, dePriceResult ] = await Promise.all([
    fetchPrice([ 'dg' ], countryCode, provinceCode, undefined, undefined, process.env.FIREWALL_BYPASS_SECRET),
    fetchPrice([ 'de' ], countryCode, provinceCode, undefined, undefined, process.env.FIREWALL_BYPASS_SECRET),
  ]);
  const dgPrice = dgPriceResult.success ? dgPriceResult.value : undefined;
  const dePrice = dePriceResult.success ? dePriceResult.value : undefined;

  return (
    <div>
      <div className="text-white py-3" style={{ background: 'linear-gradient(90deg, #53B8CB 0%, #295C65 100%)' }}>
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center text-md-start">
            <div className="fw-semibold text-uppercase small" style={{ letterSpacing: '0.08em' }}>
              FLEXIBLE ONLINE LEARNING WITH HANDS-ON GROOMING PRACTICE
            </div>
            <div>
              <a href="#request-info" className="btn btn-primary">REQUEST INFO</a>
            </div>
          </div>
        </div>
      </div>

      <section className={styles.hero}>
        <BackgroundImage src={HeroImage} priority className={styles.heroImage} />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <h1 className="mb-4" style={{ color: '#fff' }}>Become a Professional Dog Groomer</h1>
              <p className={`lead mb-4 ${styles.heroLead}`}>
                Build a career you love with flexible online training from Master Groomers, a professional grooming kit to start practicing right away, and personalized instructor feedback that helps you build real-world grooming skills.
              </p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><span className={styles.checkIcon}><Check color="#ff2d5c" /></span><span>Personalized feedback from professional groomers</span></li>
                <li className={styles.checkItem}><span className={styles.checkIcon}><Check color="#ff2d5c" /></span><span>Hands-on grooming assignments</span></li>
                <li className={styles.checkItem}><span className={styles.checkIcon}><Check color="#ff2d5c" /></span><span>Flexible study at your own pace</span></li>
              </ul>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1" id="request-info">
              <div className={`card bg-white border-0 ${styles.card}`}>
                <h3 className="card-header bg-danger text-white px-4 pb-4 pt-5 mb-0 border-0 position-relative overflow-hidden">
                  <BackgroundImage src={FormBgImage} />
                  <span className="position-relative">Request a Course Preview</span>
                </h3>
                <div className="card-body p-4">
                  <div />
                  <ActiveCampaginForm
                    successLocation={`${process.env.NEXT_PUBLIC_HOST ?? 'https://www.qcpetstudies.com'}/thank-you-dog-grooming-course-preview`}
                    requiredIds={[ 55n ]}
                    optionalIds={[ 2n ]}
                    gclid={gclid}
                    msclkid={msclkid}
                    utmSource={utmSource}
                    utmMedium={utmMedium}
                    utmCampaign={utmCampaign}
                    utmContent={utmContent}
                    utmTerm={utmTerm}
                    courseCodes={[ 'dg' ]}
                    placeholders
                    referrer={referrer}
                    countryCode={countryCode}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-lg-10 text-center">
              <h2>Career Paths After Graduation</h2>
              <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.55rem)' }}>84% of QC Pet Studies students are preparing to start a grooming business or launch a new career in professional dog grooming.</p>
            </div>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div>
                <h3 className="text-center text-lg-start">Where Our Graduates Work Today</h3>
                <p className="text-center text-lg-start" style={{ fontSize: '1.15rem' }}>QC graduates are building careers in a variety of roles, including:</p>
                <ul style={{ fontSize: '1.15rem' }}>
                  <li>Professional dog groomers in established salons</li>
                  <li>Mobile grooming business owners</li>
                  <li>Home-based grooming entrepreneurs</li>
                  <li>Entry-level groomers gaining industry experience</li>
                </ul>
              </div>
            </div>
            <div className="col-10 col-lg-6 mx-auto mx-lg-0 p-2 p-lg-0 d-flex justify-content-center align-items-center pe-lg-3">
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
              <p className="lead mb-0">
                QC Pet Studies combines flexible online learning with personalized support, practical training, and career-focused education to help you graduate with the skills and confidence to succeed.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {whyCards
              .filter(card => card.id !== 'real-world-experience' || externship(countryCode, provinceCode))
              .map(card => (
                <div className="col-12 col-md-6 col-xl-4 text-center text-lg-start" key={card.title}>
                  <div className={styles.whyCard}>
                    <div className="card-body p-4 p-lg-5">
                      <Image src={card.icon} alt="" width={40} height={40} className="mb-3 text-center text-lg-start" />
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
                Start building your grooming skills right away with a FREE professional grooming kit and bonus reference guides designed to help you choose the right tools, understand different coat types, and provide consistent, professional-quality grooming services.
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
          <div className="row align-items-stretch g-5">
            <div className="col-12 col-lg-6">
              <div className={`gap-5 ${styles.stepRail}`}>
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
                <h3 className="mb-2"><i>&ldquo;Can you learn dog grooming online?&rdquo;</i></h3>
                <h2 className={`${styles.qnaAnswer} mb-3 fw-bold`}>Yes!</h2>
                <p className="fw-bold">With the right training model</p>
                <p className={styles.qnaBody}>QC Pet Studies combines online education with hands-on practice and personalized instructor feedback. You don&apos;t just watch lessons-you complete assignments that are reviewed by a professional groomer who guides your progress step by step. This ensures you build real, practical grooming skills from home.</p>
                <div className={styles.qnaImageWrap}>
                  <Image src={DogImage} alt="" className={styles.qnaImage} height={150} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection2 />
      {dgPrice && dePrice && <TuitionSection dgPrice={dgPrice} dePrice={dePrice} />}

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <h2 className="mb-4">40+ Years of Educational Excellence</h2>
              <p className="lead mb-4 mx-auto" style={{ maxWidth: '650px' }}>QC has been helping students prepare for rewarding careers through flexible online learning for more than four decades.</p>
              <div className={`d-flex flex-row justify-content-center align-items-center gap-4 gap-md-5 fw-bold ${styles.excellenceTrustLine}`}>
                <div className="d-flex flex-column align-items-center gap-2">
                  <Image src={Guarantee} alt="14-day money-back guarantee" width={40} height={40} />
                  <span className={styles.goldText}>14-DAY MONEY-BACK GUARANTEE</span>
                </div>
                <div className="d-flex flex-column align-items-center gap-2">
                  <Image src={BBB} alt="BBB Accredited" width={40} height={40} />
                  <span className={styles.goldText}>BBB ACCREDITED</span>
                </div>
                <div className="d-flex flex-column align-items-center gap-2">
                  <Image src={Person} alt="Expert-backed programs" width={40} height={40} />
                  <span className={styles.goldText}>EXPERT-BACKED PROGRAMS</span>
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
      'Build the skills and confidence you need to succeed with personalized feedback from an experienced instructor who helps you refine your technique and prepare for a career in professional grooming.',
  },
  {
    id: 'real-world-experience',
    icon: GlobeIcon,
    title: 'Gain Real-World Grooming Experience',
    description:
      'Put your skills into practice with real dogs through hands-on assignments, or gain additional real-world experience working alongside professional groomers through the optional externship program.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Build Professional Skills for a Successful Career',
    description:
      'Develop the professional skills needed to succeed in a salon or start your own business, with business training and ready-to-use resources to help you manage clients, create service packages, and grow your grooming career.',
  },
  {
    icon: FirstAidIcon,
    title: 'Be Prepared for Pet Emergencies',
    description:
      'Learn to recognize emergencies, respond appropriately, and help keep the pets in your care safe with first aid training included for free with your enrollment.',
  },
  {
    icon: LaptopIcon,
    title: 'Train for Your New Career on Your Schedule',
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
