import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';

import HeroImage from './hero-lrg.jpg';
import KitImage from './main-kit-white-bg.jpg';
import PhoneCallIcon from './phone-call.svg';
import styles from './page.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrevoForm } from '@/components/brevoForm';
import { Check } from '@/components/check';
import { FormCard } from '@/components/formCard';
import type { TestimonialId } from '@/components/testimonial/data';
import { TestimonialCarousel } from '@/components/testimonialCarousel';
import type { CourseCode } from '@/domain/courseCode';
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
                  <img src="/bbb-accredited.svg" alt="BBB Accredited" className={styles.ctaTrustBadge} />
                  <div className={styles.ctaTrustText}>BBB ACCREDITED</div>
                </div>
                <div className={styles.ctaTrustItem}>
                  <img src="/guarantee-section.svg" alt="14-Day Guarantee" className={styles.ctaGuaranteeBadge} />
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
          <div className={`row g-4 justify-content-center ${styles.whyGrid}`}>
            <div className="col-12 col-md-6 col-xl-4">
              <div className={`card ${styles.whyCard}`}>
                <div className="card-body p-4 p-lg-5">
                  <Image src={GroomerIcon} alt="" className={styles.whyIcon} />
                  <h3 className="h3">Learn From Experienced Professional Groomers</h3>
                  <p className="mb-0">Receive personalized feedback on every practical assignment from an experienced instructor who is invested in your success.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className={`card ${styles.whyCard}`}>
                <div className="card-body p-4 p-lg-5">
                  <Image src={GlobeIcon} alt="" className={styles.whyIcon} />
                  <h3 className="h3">Optional In-Person Externship</h3>
                  <p className="mb-0">Put your skills into practice alongside experienced professional groomers and gain valuable real-world experience in a grooming environment.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className={`card ${styles.whyCard}`}>
                <div className="card-body p-4 p-lg-5">
                  <Image src={BriefcaseIcon} alt="" className={styles.whyIcon} />
                  <h3 className="h3">Be Prepared for More Than Grooming</h3>
                  <p className="mb-0">Build the business, communication, and client service skills that can help you succeed whether you work in a salon or start your own business.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`row g-4 justify-content-center mt-0 ${styles.whyGrid}`}>
            <div className="col-12 col-md-6 col-xl-4">
              <div className={`card ${styles.whyCard}`}>
                <div className="card-body p-4 p-lg-5">
                  <Image src={FirstAidIcon} alt="" className={styles.whyIcon} />
                  <h3 className="h3">Pet First Aid Training Included</h3>
                  <p className="mb-0">Learn how to recognize emergencies, respond appropriately, and help keep the pets in your care safe.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className={`card ${styles.whyCard}`}>
                <div className="card-body p-4 p-lg-5">
                  <Image src={LaptopIcon} alt="" className={styles.whyIcon} />
                  <h3 className="h3">Study Around Your Life</h3>
                  <p className="mb-0">Study at your own pace, from anywhere, and fit your training around your work, family, and lifestyle.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`row justify-content-center align-items-center ${styles.kitSection}`}>
            <div className="col-12 col-lg-10 text-center">
              <h3 className={styles.kitHeading}>Everything You Need to Start Learning</h3>
              <p className={styles.kitText}>
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
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <div className={styles.stepRail}>
                <div className={`card ${styles.stepCard}`}>
                  <div className={styles.stepCardInner}>
                    <div className={styles.stepNumber}>1</div>
                    <div>
                      <h3 className="h5">Learn Online from Master Groomers</h3>
                      <p className="mb-0">Build a strong foundation with expert-led online lessons from professional groomers.</p>
                    </div>
                  </div>
                </div>
                <div className={`card ${styles.stepCard}`}>
                  <div className={styles.stepCardInner}>
                    <div className={styles.stepNumber}>2</div>
                    <div>
                      <h3 className="h5">Complete Hands-On Assignments</h3>
                      <p className="mb-0">Practice real grooming skills at home while receiving support from our team.</p>
                    </div>
                  </div>
                </div>
                <div className={`card ${styles.stepCard}`}>
                  <div className={styles.stepCardInner}>
                    <div className={styles.stepNumber}>3</div>
                    <div>
                      <h3 className="h5">Prove Your Skills With Certification</h3>
                      <p className="mb-0">Show what you&apos;ve learned with a professional certification that reflects your training.</p>
                    </div>
                  </div>
                </div>
                <div className={`card ${styles.stepCard}`}>
                  <div className={styles.stepCardInner}>
                    <div className={styles.stepNumber}>4</div>
                    <div>
                      <h3 className="h5">Turn Your Passion for Dogs into a Career</h3>
                      <p className="mb-0">Use your new skills to start working, launch a business, or grow your current services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className={styles.qnaCard}>
                <div className={styles.qnaQuotes} aria-hidden="true">
                  <span>&ldquo;</span>
                  <span>&rdquo;</span>
                </div>
                <p className={styles.qnaQuestion}>Can you learn dog grooming online?</p>
                <h3 className={styles.qnaAnswer}>Yes!</h3>
                <p className={styles.qnaSubhead}>With the right training model</p>
                <p className={styles.qnaBody}>QC Pet Studies combines online education with hands-on practice and personalized instructor feedback. You don&apos;t just watch lessons-you complete assignments that are reviewed by a professional groomer who guides your progress step by step. This ensures you build real, practical grooming skills from home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tuition" className={styles.tuitionSection}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-8 text-center">
              <h2 className={`mb-3 ${styles.tuitionHeading}`}>Tuition &amp; Payment Plans</h2>
              <p className={styles.tuitionIntro}>Affordable tuition with flexible payment options makes it easier to start your training.</p>
            </div>
          </div>

          <div className="row align-items-start g-5">
            <div className="col-12 col-xl-3">
              <div className={styles.tuitionIncludes}>
                <h3 className={styles.tuitionIncludesHeading}>Your Tuition Includes</h3>
                <ul className={styles.tuitionIncludesList}>
                  <li>Full dog grooming course</li>
                  <li>Instructor feedback</li>
                  <li>Hands-on assignments</li>
                  <li>Business training</li>
                  <li>Certification</li>
                  <li><strong>FREE</strong> grooming kit</li>
                </ul>
                <a href="#request-info" className="btn btn-outline-light btn-lg">Course Details</a>
              </div>
            </div>

            <div className="col-12 col-xl-9">
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className={styles.tuitionPlanCard}>
                    <div className={styles.tuitionPlanHeader}>GROOMING ONLINE</div>
                    <div className={styles.tuitionPlanBody}>
                      <div className={styles.tuitionSavingsRow}>
                        <h3 className={styles.tuitionPlanLabel}>Pay In Full</h3>
                        <span className={styles.tuitionBadge}>SAVE $400</span>
                      </div>
                      <p className={styles.tuitionSmallLabel}>One Time Payment of</p>
                      <div className={styles.tuitionStrikePrice}>{price ? `${price.currency.symbol}${formatPrice(price.plans.full.total + 400)}` : '$2498'}</div>
                      <div className={styles.tuitionPrice}>{price ? `${price.currency.symbol}${formatPrice(price.plans.full.total)}` : '$2098'}</div>
                    </div>
                    <div className={styles.tuitionDivider} />
                    <div className={styles.tuitionPlanBody}>
                      <h3 className={styles.tuitionPlanLabel}>Installment Plan</h3>
                      <p className={styles.tuitionInstallmentLead}>Start with a deposit of $99</p>
                      <p className={styles.tuitionInstallmentText}>+ 18 Monthly Payments of $133.27</p>
                      <div className={styles.tuitionPrice}>{price ? `${price.currency.symbol}${formatPrice(price.plans.part.total)}` : '$2498'}</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className={styles.tuitionPlanCard}>
                    <div className={styles.tuitionPlanHeader}>EXTERNSHIP TRACK</div>
                    <div className={styles.tuitionPlanBody}>
                      <div className={styles.tuitionSavingsRow}>
                        <h3 className={styles.tuitionPlanLabel}>Pay In Full</h3>
                        <span className={styles.tuitionBadge}>SAVE $200</span>
                      </div>
                      <p className={styles.tuitionSmallLabel}>One Time Payment of</p>
                      <div className={styles.tuitionStrikePrice}>{price ? `${price.currency.symbol}${formatPrice(price.plans.full.total + 200)}` : '$3648'}</div>
                      <div className={styles.tuitionPrice}>{price ? `${price.currency.symbol}${formatPrice(price.plans.full.total)}` : '$3448'}</div>
                    </div>
                    <div className={styles.tuitionDivider} />
                    <div className={styles.tuitionPlanBody}>
                      <h3 className={styles.tuitionPlanLabel}>Installment Plan</h3>
                      <p className={styles.tuitionInstallmentLead}>Start with a deposit of $99</p>
                      <p className={styles.tuitionInstallmentText}>+ 18 Monthly Payments of $197.16</p>
                      <div className={styles.tuitionPrice}>{price ? `${price.currency.symbol}${formatPrice(price.plans.part.total)}` : '$3648'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.excellenceSection}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className={styles.excellenceHeading}>40+ Years of Educational Excellence</h2>
              <p className={styles.excellenceIntro}>QC has been helping students prepare for rewarding careers through flexible online learning for more than four decades.</p>
              <p className={styles.excellenceTrustLine}>BBB ACCREDITED | 14-DAY MONEY-BACK GUARANTEE | EXPERT-BACKED PROGRAMS</p>
              <div className={styles.excellenceSeal}>
                <img src="/bbb-accredited.svg" alt="BBB Accredited" className={styles.excellenceBadge} />
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
              <div className={styles.ctaPerks}>
                <div className={styles.ctaPerk}>
                  <Check color="#ff2d5c" />
                  <span>Study from home at your own pace</span>
                </div>
                <div className={styles.ctaPerk}>
                  <Check color="#ff2d5c" />
                  <span>Receive personalized instructor feedback</span>
                </div>
                <div className={styles.ctaPerk}>
                  <Check color="#ff2d5c" />
                  <span>Build real grooming skills through practice</span>
                </div>
                <div className={styles.ctaPerk}>
                  <Check color="#ff2d5c" />
                  <span><strong>FREE</strong> professional grooming kit included</span>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#request-info" className="btn btn-primary btn-lg">REQUEST COURSE INFORMATION</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className={styles.contactHeading}>Have questions?</h2>
              <p className={styles.contactSubhead}>Give us a call</p>
              <div className={styles.contactIconWrap}>
                <Image src={PhoneCallIcon} alt="" className={styles.contactIcon} />
              </div>
              <a href="tel:18336003751" className={styles.contactPhone}>1-833-600-3751</a>
            </div>
          </div>
        </div>
        <div className={styles.contactFooter}>
          <div className="container d-flex justify-content-between align-items-center">
            <small className={styles.contactCopyright}>&copy;2026 QC Pet Studies</small>
            <a href="/privacy-policy" className={styles.contactPrivacy}>Privacy Policy</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Page;
