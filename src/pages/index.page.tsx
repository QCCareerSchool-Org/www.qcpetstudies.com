import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { CSSProperties, FC, ReactNode } from 'react';
import { FaBriefcase, FaChalkboardTeacher, FaHandHoldingUsd, FaLaptopHouse, FaRegCalendarCheck } from 'react-icons/fa';
import { IoMdRibbon } from 'react-icons/io';
import { jsonLdScriptProps } from 'react-schemaorg';
import { EducationalOrganization } from 'schema-dts';

import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { SEO } from '../components/SEO';
import { TestimonialKaylaTorraville } from '../components/testimonials/TestimonialKaylaTorraville';
import { TestimonialLucaCoppola } from '../components/testimonials/TestimonialLucaCoppola';
import { TestimonialMelodyMason } from '../components/testimonials/TestimonialMelodyMason';
import { VirtualCommunitySection } from '../components/virtualCommunitySection';
import { useScreenWidth } from '../hooks/useScreenWidth';
import MaltipuBegging from '../images/backgrounds/maltipu-begging.jpg';
import MaltipuJumping from '../images/backgrounds/maltipu-jumping.jpg';
import HowItWorks from '../images/how-it-works.png';
import IDBSCertificationGold from '../images/IDBS-certification-gold.svg';
import IDCPCertificationGold from '../images/IDCP-certification-gold.svg';
import IDGPCertificationGold from '../images/IDGP-certification-gold.svg';
import IDTPCertificationGold from '../images/IDTP-certification-gold.svg';
import { qcPetStudiesEducationalOrganization } from '../qcPetStudiesEducationalOrganization';
import { NextPageWithLayout } from './_app.page';

const iconSize = 145;

const HomePage: NextPageWithLayout = () => {
  const screenWidth = useScreenWidth();

  const lg = screenWidth >= 992;
  // const md = screenWidth >= 768;
  // const sm = screenWidth >= 576;

  return <>
    <SEO
      title="Become a Pet Care Professional"
      description="Start a successful career in the pet care industry! Become a certified dog groomer or certified dog trainer with QC’s internationally recognized online courses!"
      canonical="/"
    />

    <Head>
      <script {...jsonLdScriptProps<EducationalOrganization>(qcPetStudiesEducationalOrganization)} />
    </Head>

    <section id="top" className="bg-light">
      <Image
        src={lg ? MaltipuJumping : MaltipuBegging}
        placeholder="blur"
        alt=""
        priority
        fill
        sizes="100vw"
        style={{
          objectPosition: lg ? '100% 30%' : '50% 100%',
          objectFit: 'cover',
        }}
      />
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
        <div className="heroSpacer" />
      </div>
    </section>

    <section>
      <div className="container text-center">
        <h2 className="mb-3">Course <strong>Certifications</strong></h2>
        <p className="lead mb-5">Enroll today and start training for your new career right away!</p>
        <div className="row align-items-stretch justify-content-center g-4">

          <div className="col-12 col-lg-6 col-xxl-5 d-flex align-items-stretch">
            <CertificationCard show={lg}>
              <div>
                <div className="mb-3">
                  <Image
                    src={IDGPCertificationGold as StaticImageData}
                    width={iconSize}
                    height={iconSize}
                    alt="IDGP certification"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
                <h3>Professional Dog Grooming | <em className="gold">IDGP&trade;</em></h3>
                <p>Master every level of dog grooming from bathing, brushing and pet cuts to advanced breed styling. In this course, you'll learn all about dog anatomy and behavior, how to use grooming tools safely and effectively, and how to expertly groom any breed of dog. You'll also get a chance to launch your dog grooming business if that's your goal! Get plenty of hands-on groomer training without ever leaving your home. Start today!</p>
              </div>
              <Link href="/certification-courses/dog-grooming"><button className="btn btn-navy">Course Overview</button></Link>
            </CertificationCard>
          </div>

          <div className="col-12 col-lg-6 col-xxl-5 d-flex align-items-stretch">
            <CertificationCard show={lg}>
              <div>
                <div className="mb-3">
                  <Image
                    src={IDCPCertificationGold as StaticImageData}
                    width={iconSize}
                    height={iconSize}
                    alt="IDCP certification logo"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
                <h3>Dog Daycare | <em className="gold">IDCP&trade;</em></h3>
                <p>Dog walkers and daycare facilities are booked solid! Demand is high which means it&apos;s an incredible time to launch a rewarding and lucrative career as a dog care professional. This course will teach you everything from basic dog behavior and communication to business and marketing tips that will help you grow your clientele. You&apos;ll gain a thorough understanding of proper handling, hygiene, and safety techniques to become a trusted expert in your field. Don&apos;t miss out on your chance to launch a lucrative new career!</p>
              </div>
              <Link href="/certification-courses/dog-daycare"><button className="btn btn-navy">Course Overview</button></Link>
            </CertificationCard>
          </div>

          <div className="col-12 col-lg-6 col-xxl-5 d-flex align-items-stretch">
            <CertificationCard show={lg}>
              <div>
                <div className="mb-3">
                  <Image
                    src={IDTPCertificationGold as StaticImageData}
                    width={iconSize}
                    height={iconSize}
                    alt="IDTP certification"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
                <h3>Dog Training | <em className="gold">IDTP&trade;</em></h3>
                <p>Dog trainers have never been in higher demand! It's the best time to launch a rewarding and lucrative career as a dog trainer. This course uses scientifically proven methods of dog training derived from learning theory and industry best practices. You'll gain a thorough understanding of how dogs learn, how to modify unwanted behaviors, and how to create new behaviors in all types of dogs. Don't miss out on your chance to learn from the best!</p>
              </div>
              <Link href="/certification-courses/dog-training"><button className="btn btn-navy">Course Overview</button></Link>
            </CertificationCard>
          </div>

          <div className="col-12 col-lg-6 col-xxl-5 d-flex align-items-stretch">
            <CertificationCard show={lg}>
              <div>
                <div className="mb-3">
                  <Image
                    src={IDBSCertificationGold as StaticImageData}
                    width={iconSize}
                    height={iconSize}
                    alt="IDBS Certification"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
                <h3>Dog Behavior | <em className="gold">IDBS&trade;</em></h3>
                <p>Once you have successfully completed QC's Dog Training course you can advance your education with the Dog Behavior course. You'll build on your excellent foundation in dog training and learn how to deal with advanced concerns like anxiety, phobias, reactivity, and even aggression. Learn specialized behavior modification skills so you'll be ready to help any dog that comes your way.</p>
              </div>
              <Link href="/certification-courses/dog-behavior"><button className="btn btn-navy">Course Overview</button></Link>
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
            <Image
              src={HowItWorks}
              alt=""
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
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
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-2 d-flex align-items-center justify-content-end">
            <FaRegCalendarCheck className="h1 text-secondary mb-3" />
          </div>
          <div className="col-9">
            <h3>Proven Track Record</h3>
            <p>Enroll in a school with over 40 years of experience providing top-quality education, an A+ rating from the Better Business Bureau, and thousands of graduates working in careers they love!</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-2 d-flex align-items-center justify-content-end">
            <FaLaptopHouse className="h1 text-secondary mb-3" />
          </div>
          <div className="col-9">
            <h3>A Fully Online Learning Experience</h3>
            <p>QC offers 100% online learning! There are no assignment deadlines or inconvenient classroom sessions. You work at your own pace with one-on-one guidance and support from your personal tutor and teaching assistant.</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-2 d-flex align-items-center justify-content-end">
            <FaChalkboardTeacher className="h1 text-secondary mb-3" />
          </div>
          <div className="col-9">
            <h3>Expert Tutors to Guide You</h3>
            <p>Your personal tutor will follow your progress through your online course, grade your assignments, and provide you with individualized feedback after you've completed each unit. QC's tutors are career professionals excelling in the pet industry, and they're focused on your success!</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-2 d-flex align-items-center justify-content-end">
            <FaBriefcase className="h1 text-secondary mb-3" />
          </div>
          <div className="col-9">
            <h3>Business Training You Can Use</h3>
            <p>Each course comes complete with optional business training where you&apos;ll work with your tutor to come up with a business name, create a marketing strategy, start building your website, and get access to templates that will help get your career off to a great start from day one!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2 d-flex align-items-center justify-content-end">
            <FaHandHoldingUsd className="h1 text-secondary mb-3" />
          </div>
          <div className="col-9">
            <h3>No Additional or Hidden Fees</h3>
            <p>When you graduate from QC your certificate is yours forever, and you&apos;ll have continued access to your student center at no additional cost. You'll never be asked to pay subscription fees, membership fees, or any other fees to keep your certification current.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container text-center">
        <h2 className="text-center mb-4">QC Success Stories</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-6 col-xl-4 mb-4 mb-xl-0">
            <TestimonialKaylaTorraville />
          </div>
          <div className="col-12 col-md-9 col-lg-6 col-xl-4 mb-4 mb-xl-0">
            <TestimonialLucaCoppola />
          </div>
          <div className="col-12 col-md-9 col-lg-6 col-xl-4">
            <TestimonialMelodyMason />
          </div>
        </div>
      </div>
    </section>

    <VirtualCommunitySection />

    <style jsx>{`
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
      .heroContainer {
        margin-bottom: 0;
      }
    }
    `}</style>
  </>;
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
