import Head from 'next/head';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { CSSProperties, FC, ReactNode } from 'react';
import { FaBriefcase, FaChalkboardTeacher, FaHandHoldingUsd, FaLaptopHouse, FaRegCalendarCheck } from 'react-icons/fa';
import { IoMdRibbon } from 'react-icons/io';
import { jsonLdScriptProps } from 'react-schemaorg';
import { EducationalOrganization } from 'schema-dts';

import { DefaultLayout } from '../components/DefaultLayout';
import { SearchBox } from '../components/SearchBox';
import { SEO } from '../components/SEO';
import { useScreenWidth } from '../hooks/useScreenWidth';
import MaltipuBegging from '../images/backgrounds/maltipu-begging.jpg';
import MaltipuJumping from '../images/backgrounds/maltipu-jumping.jpg';
import HowItWorks from '../images/how-it-works.png';
import IDCPCertificationGold from '../images/IDCP-certification-gold.svg';
import IDGPCertificationGold from '../images/IDGP-certification-gold.svg';
import IDTPCertificationGold from '../images/IDTP-certification-gold.svg';
import { qcPetStudiesEducationalOrganization } from '../qcPetStudiesEducationalOrganization';
import { NextPageWithLayout } from './_app';

const iconSize = 145;

const options = [
  { id: 'groomer', text: 'become a professional dog groomer', url: '/certification-courses/dog-grooming' },
  { id: 'trainer', text: 'become a professional dog trainer', url: '/certification-courses/dog-training' },
  { id: 'care', text: 'become a dog daycare professional', url: '/certification-courses/dog-daycare' },
];

const HomePage: NextPageWithLayout = () => {
  const screenWidth = useScreenWidth();

  const lg = screenWidth >= 992;
  const md = screenWidth >= 768;
  const sm = screenWidth >= 576;

  return (
    <>
      <SEO
        title="Become a Pet Care Professional"
        description="Start a successful career in the pet care industry! Become a certified dog groomer or certified dog trainer with QC’s internationally recognized online courses!"
        canonical="/"
      />

      <Head>
        <script {...jsonLdScriptProps<EducationalOrganization>(qcPetStudiesEducationalOrganization)} />
      </Head>

      <section id="top" className="bg-light">
        <Image src={lg ? MaltipuJumping : MaltipuBegging} layout="fill" objectFit="cover" objectPosition={lg ? '100% 30%' : '50% 100%'} placeholder="blur" alt="Happy maltipu jumping" priority />
        <div className="container heroContainer">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1 className="mb-4 mb-lg-5" style={{ textTransform: 'none' }}>Start a Successful Career in the Pet Care Industry</h1>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-3"><RibbonInCircle /></div>
                <span><strong>Get one-on-one training from industry experts</strong> and graduate with a professional certification.</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-8 col-xl-7 col-xxl-6">
              <div className="searchBoxWrapper">
                <SearchBox
                  label="I'm ready to"
                  options={options}
                  multiLine={!md}
                  sm={!sm}
                  name="page"
                />
              </div>
            </div>
          </div>
          <div className="heroSpacer" />
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2 className="mb-3">Course <strong>Certifications</strong></h2>
          <p className="lead mb-5">Enroll today and start training for your new career right away!</p>
          <div className="row align-items-stretch justify-content-center">
            <div className="col-12 col-lg-6 col-xxl-4 d-flex align-items-stretch mb-5 mb-lg-4 mb-xxl-0">
              <CertificationCard show={lg}>
                <div>
                  <div className="mb-3">
                    <Image src={IDTPCertificationGold} width={iconSize} height={iconSize} alt="21-Day Money-Back Guarantee" />
                  </div>
                  <h3>Dog Training | <em className="gold">IDTP&trade;</em></h3>
                  <p>Dog trainers have never been in higher demand! It's the best time to launch a rewarding and lucrative career as a dog trainer. This course uses scientifically proven methods of dog training derived from learning theory and industry best practices. You'll gain a thorough understanding of how dogs learn, how to modify unwanted behaviors, and how to create new behaviors in all types of dogs. Don't miss out on your chance to learn from the best!</p>
                </div>
                <Link href="/certification-courses/dog-training"><button className="btn btn-navy">Course Overview</button></Link>
              </CertificationCard>
            </div>
            <div className="col-12 col-lg-6 col-xxl-4 d-flex align-items-stretch mb-5 mb-lg-4 mb-xxl-0">
              <CertificationCard show={lg}>
                <div>
                  <div className="mb-3">
                    <Image src={IDGPCertificationGold} width={iconSize} height={iconSize} alt="1-Year Money-Back Guarantee" />
                  </div>
                  <h3>Dog Grooming | <em className="gold">IDGP&trade;</em></h3>
                  <p>Become a professional dog groomer. There's more to grooming than just bathing and brushing dogs! In this course you'll learn all about dog anatomy and behavior, how to use grooming tools safely and effectively, and how to competently groom any breed of dog. You'll also get a chance to launch your dog grooming business if that's your goal! Get plenty of hands-on groomer training without ever leaving your home. Start today!</p>
                </div>
                <Link href="/certification-courses/dog-grooming"><button className="btn btn-navy">Course Overview</button></Link>
              </CertificationCard>
            </div>
            <div className="col-12 col-lg-6 col-xxl-4 d-flex align-items-stretch">
              <CertificationCard show={lg}>
                <div>
                  <div className="mb-3">
                    <Image src={IDCPCertificationGold} width={iconSize} height={iconSize} alt="21-Day Money-Back Guarantee" />
                  </div>
                  <h3><span className="badge rounded-pill bg-secondary">New</span> Dog Daycare | <em className="gold">IDCP&trade;</em></h3>
                  <p>Dog walkers and daycare facilities are booked solid! Demand is high which means it&apos;s an incredible time to launch a rewarding and lucrative career as a dog care professional. This course will teach you everything from basic dog behavior and communication to business and marketing tips that will help you grow your clientele. You&apos;ll gain a thorough understanding of proper handling, hygiene, and safety techniques to become a trusted expert in your field. Don&apos;t miss out on your chance to launch a lucrative new career!</p>
                </div>
                <Link href="/certification-courses/dog-daycare"><button className="btn btn-navy">Course Overview</button></Link>
              </CertificationCard>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1 mb-md-4 text-center">
              <h2>How Online <strong>Learning Works</strong></h2>
            </div>
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <Image src={HowItWorks} layout="responsive" alt="Dog looking at tablet" />
            </div>
            <div className="col-12 col-md-6">
              <h3>Enroll Online &amp; Access Your Course Materials</h3>
              <ul>
                <li>Enroll online at any time</li>
                <li>Receive your student center login</li>
                <li>Get started with your course</li>
              </ul>
              <h3>Study &amp; Complete Assignments</h3>
              <ul>
                <li>Read course texts and watch instructional videos</li>
                <li>Complete theoretical and practical assignments</li>
                <li>Get personalized feedback from your tutor</li>
              </ul>
              <h3>Graduate &amp; Receive your Certification</h3>
              <ul>
                <li>Receive your Certificate of Completion in the mail</li>
                <li>Get lifetime access to course materials and updated content</li>
                <li>Enjoy a 50% discount on all additional courses you take with QC</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 text-center">
              <h2 className="mb-4">Why Choose <strong>QC</strong></h2>
              <p className="mb-5">When choosing to attend an online school, it can be difficult to separate legitimate educational institutions from less-than-reputable companies that are looking to make a quick buck. You want to choose a school you&apos;ll be proud to attend. One that will help you meet your career goals. Welcome to QC!</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-2 d-flex align-items-center justify-content-end">
              <FaRegCalendarCheck className="h1 text-secondary mb-3" />
            </div>
            <div className="col-9">
              <h3>Proven Track Record</h3>
              <p>Enroll in a school with a 35-year track record of quality distance education, an A+ rating from the Better Business Bureau, and thousands of graduates working careers they love!</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-2 d-flex align-items-center justify-content-end">
              <FaLaptopHouse className="h1 text-secondary mb-3" />
            </div>
            <div className="col-9">
              <h3>A Fully Online Learning Experience</h3>
              <p>QC offers 100% online learning on all courses! There are no mandatory scheduled webinars to attend and no inconvenient classroom sessions. You work at your own pace and on your own time, with 1-on-1 guidance and support from your personal tutor and your student support advisor.</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-2 d-flex align-items-center justify-content-end">
              <FaChalkboardTeacher className="h1 text-secondary mb-3" />
            </div>
            <div className="col-9">
              <h3>Expert Tutors to Guide You</h3>
              <p>Your personal tutor will follow your progress through your online course, will personally grade your assignments, and provide you with individualized feedback after you ve completed each unit. These aren&apos;t paid employees of the school grading from a template; they&apos;re career professionals working in your industry, and they&apos;re focused on your success!</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-2 d-flex align-items-center justify-content-end">
              <FaBriefcase className="h1 text-secondary mb-3" />
            </div>
            <div className="col-9">
              <h3>Business Training You Can Use</h3>
              <p>Each course comes complete with optional business training where you&apos;ll work with your tutor to come up with a business name, create a marketing strategy, start building your website, and get access to templates that will help get your career off the ground from day one!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-2 d-flex align-items-center justify-content-end">
              <FaHandHoldingUsd className="h1 text-secondary mb-3" />
            </div>
            <div className="col-9">
              <h3>No Additional or Hidden Fees</h3>
              <p>Your course tuition is the only fee you&apos;ll pay for your course or certification. Unlike other schools, when you graduate from QC your certificate is yours forever, and you&apos;ll have continued access to your student center at no additional cost. you&apos;ll never be asked to pay subscription fees, membership fees, or any other fees to keep your certification current or use your business materials.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
      .gold { color: #C9952C; }
      .searchBoxWrapper {
        margin-top: 5rem;
      }
      .heroContainer {
        margin-bottom: 16rem;
      }
      @media screen and (min-width: 576px) {
        .heroContainer {
          margin-bottom: 20rem;
        }
      }
      @media screen and (min-width: 768px) {
        .heroContainer {
          margin-bottom: 24rem;
        }
      }
      @media screen and (min-width: 992px) {
        .searchBoxWrapper {
          margin-top: 5rem;
        }
        .heroContainer {
          margin-bottom: 0;
        }
      }
      @media screen and (min-width: 1200px) {
        .searchBoxWrapper {
          margin-top: 6rem;
        }
      }
      @media screen and (min-width: 1400px) {
        .searchBoxWrapper {
          margin-top: 7rem;
        }
      }
      `}</style>
    </>
  );
};

HomePage.getLayout = page => <DefaultLayout inverseNav={true}>{page}</DefaultLayout>;

export default HomePage;

type RibbonInCircleProps = {
  size?: number;
  background?: CSSProperties['backgroundColor'];
  color?: CSSProperties['color'];
};

const RibbonInCircle: FC<RibbonInCircleProps> = ({ size = 48, background = 'white', color }) => {
  return (
    <>
      <div className="wrapper d-flex align-items-center justify-content-center text-center"><IoMdRibbon size={size * 0.7} /></div>
      <style jsx>{`
      .wrapper {
        height: ${size}px;
        width: ${size}px;
        border-radius: ${size / 2}px;
        background-color: ${background};
        ${typeof color !== 'undefined' ? `color: ${color}` : ''}
      }
      `}</style>
    </>
  );
};

type CertificationCardProps = {
  show: boolean;
  children: ReactNode;
};

const CertificationCard: FC<CertificationCardProps> = ({ show, children }) => {
  if (show) {
    return (
      <div className="card">
        <div className="card-body d-flex flex-column align-items-center justify-content-between">
          {children}
        </div>
      </div>
    );
  }
  return <div>{children}</div>;
};
