import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';
import type { Course, ItemList, WithContext } from 'schema-dts';

import HowItWorks from './how-it-works.png';
import MaltipuBegging from './maltipu-begging.jpg';
import MaltipuJumping from './maltipu-jumping.jpg';
import styles from './page.module.scss';
import { qcPetStudiesEducationalOrganization } from './qcPetStudiesEducationalOrganization';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import IDBSCertificationGold from '@/components/certifications/IDBS-certification-gold.svg';
import IDCPCertificationGold from '@/components/certifications/IDCP-certification-gold.svg';
import IDGPCertificationGold from '@/components/certifications/IDGP-certification-gold.svg';
import IDTPCertificationGold from '@/components/certifications/IDTP-certification-gold.svg';
import { courses } from '@/components/courseSchema/courseSchemaData';
import { RibbonInCircle } from '@/components/ribbonInCircle';
import { TestimonialKaylaTorraville } from '@/components/testimonials/kaylaTorraville';
import { TestimonialLucaCoppola } from '@/components/testimonials/lucaCoppola';
import { TestimonialMelodyMason } from '@/components/testimonials/melodyMason';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import { WhyChooseQCSection } from '@/components/whyChooseQCSection';
import { externship } from '@/lib/externship';
import { getData } from '@/lib/getData';

const iconSize = 145;

export const metadata: Metadata = {
  title: 'Become a Pet Care Professional',
  description: 'Start a successful career in the pet care industry! Become a certified dog groomer or certified dog trainer with QC\'s internationally recognized online courses!',
  alternates: { canonical: '/' },
};

const HomePage: PageComponent = () => {
  const { countryCode, provinceCode } = getData();

  const jsonLD: WithContext<ItemList> = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': Object.values(courses).map(course => {
      return {
        '@type': 'ListItem',
        'position': course.position,
        'item': {
          '@type': 'Course',
          'url': course.url,
          'name': course.name,
          'description': course.description,
          ...(course.certificate && {
            educationalCredentialAwarded: {
              '@type': 'EducationalOccupationalCredential',
              'name': course.certificate,
            },
          }),
          'provider': {
            '@type': 'EducationalOrganization',
            'name': 'QC Design School',
            'sameAs': [
              'https://www.linkedin.com/company/qc-career-school',
              'https://www.facebook.com/QCDesign',
              'https://www.instagram.com/qcdesignschool',
              'https://www.youtube.com/@QCDesign',
            ],
          },
        } as Course,
      };
    }),
  };

  return (
    <>
      <div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }} />
        <section className="bg-light">
          <BackgroundImage src={MaltipuJumping} objectPosition="100% 30%" mobile={{ src: MaltipuBegging, breakpoint: 'lg', objectPosition: '50% 100%' }} />
          <div className={`container ${styles.hero}`}>
            <div className="row">
              <div className="col-12 col-lg-6">
                <h1 className="mb-4 mb-lg-5" style={{ textTransform: 'none' }}>Start a Successful Career in the Pet Care Industry</h1>
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 me-3"><RibbonInCircle /></div>
                  <span><strong>Get one-on-one training from industry experts</strong> and graduate with a professional certification.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container text-center">
            <h2 className="mb-3">Course <strong>Certifications</strong></h2>
            <p className="lead mb-5">Enroll today and start training for your new career right away!</p>
            <div className="row align-items-stretch justify-content-center g-4">

              <div className="col-12 col-lg-6 col-xxl-5 d-flex align-items-stretch">
                <CertificationCard>
                  <div>
                    <div className="mb-3">
                      <IDGPCertificationGold height={iconSize} width={iconSize} alt="IDGP Certification" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <h3>Professional Dog Grooming | <em className="gold">IDGP&trade;</em></h3>
                    <p>Master every level of dog grooming from bathing, brushing and pet cuts to advanced breed styling. In this course, you'll learn all about dog anatomy and behavior, how to use grooming tools safely and effectively, and how to expertly groom any breed. You'll get plenty of hands-on training with personalized guidance from your grooming mentor. Plus, learn to run a successful grooming business.</p>
                    {externship(countryCode, provinceCode) && <p>NEW: You can choose the <strong>Online-Only Track</strong> for hands-on training from home, or select the <strong>Externship Track</strong> to add real-world experience in a professional grooming salon.</p>}
                  </div>
                  <Link href="/certification-courses/dog-grooming"><button className="btn btn-navy">Course Overview</button></Link>
                </CertificationCard>
              </div>

              <div className="col-12 col-lg-6 col-xxl-5 d-flex align-items-stretch">
                <CertificationCard>
                  <div>
                    <div className="mb-3">
                      <IDTPCertificationGold height={iconSize} width={iconSize} alt="IDTP Certification" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <h3>Dog Training | <em className="gold">IDTP&trade;</em></h3>
                    <p>Dog trainers have never been in higher demand! It's the best time to launch a rewarding and lucrative career as a dog trainer. This course uses scientifically proven methods of dog training derived from learning theory and industry best practices. You'll gain a thorough understanding of how dogs learn, how to modify unwanted behaviors, and how to create new behaviors in all types of dogs. Don't miss out on your chance to learn from the best!</p>
                  </div>
                  <Link href="/certification-courses/dog-training"><button className="btn btn-navy">Course Overview</button></Link>
                </CertificationCard>
              </div>

              <div className="col-12 col-lg-6 col-xxl-5 d-flex align-items-stretch">
                <CertificationCard>
                  <div>
                    <div className="mb-3">
                      <IDCPCertificationGold height={iconSize} width={iconSize} alt="IDCP Certification" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <h3>Dog Daycare | <em className="gold">IDCP&trade;</em></h3>
                    <p>Dog walkers and daycare facilities are booked solid! Demand is high which means it&apos;s an incredible time to launch a rewarding and lucrative career as a dog care professional. This course will teach you everything from basic dog behavior and communication to business and marketing tips that will help you grow your clientele. You&apos;ll gain a thorough understanding of proper handling, hygiene, and safety techniques to become a trusted expert in your field. Don&apos;t miss out on your chance to launch a lucrative new career!</p>
                  </div>
                  <Link href="/certification-courses/dog-daycare"><button className="btn btn-navy">Course Overview</button></Link>
                </CertificationCard>
              </div>

              <div className="col-12 col-lg-6 col-xxl-5 d-flex align-items-stretch">
                <CertificationCard>
                  <div>
                    <div className="mb-3">
                      <IDBSCertificationGold height={iconSize} width={iconSize} alt="IDBS Certification" style={{ maxWidth: '100%', height: 'auto' }} />
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
                <Image src={HowItWorks} alt="" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
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

        <WhyChooseQCSection />

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(qcPetStudiesEducationalOrganization) }} />
      </div>
    </>
  );
};

const CertificationCard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="card">
      <div className="card-body d-flex flex-column align-items-center justify-content-between">
        {children}
      </div>
    </div>
  );
};

export default HomePage;
