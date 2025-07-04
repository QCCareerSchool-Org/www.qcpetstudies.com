import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { BsCardChecklist, BsPeopleFill, BsScissors } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import DogGroomingBackground from './bichon-frise-getting-haircut.jpg';
import DogGroomingKit from './dog-grooming-kit-white.jpg';
import styles from './index.module.scss';
import { KitDetailsButton } from './kitDetailsButton';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import { BackgroundImage } from '@/components/backgroundImage';
import CertificationGoldImage from '@/components/certifications/IDGP-certification-gold.svg';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { PriceSection } from '@/components/priceSection';
import { PriceSectionWithDiscount } from '@/components/priceSectionWithDiscount';
import { TestimonialAprilCostigan } from '@/components/testimonials/aprilCostigan';
import { TestimonialCaseyBecard } from '@/components/testimonials/caseyBecard';
import { TestimonialHailieSavage } from '@/components/testimonials/hailieSavage';
import { TestimonialKaylaTorraville } from '@/components/testimonials/kaylaTorraville';
import { TestimonialMelodyMason } from '@/components/testimonials/melodyMason';
import { TestimonialNickiHughes } from '@/components/testimonials/nickiHughes';
import { TutorSectionDG } from '@/components/tutorSectionDG';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import GuaranteeIcon from '@/images/course-overview-icons/guarantee.svg';
import OutlineIcon from '@/images/course-overview-icons/outline.svg';
import TutorIcon from '@/images/course-overview-icons/tutor.svg';
import { formatPrice } from '@/lib/formatPrice';
import { getData } from '@/lib/getData';

type Props = {
  price: Price;
  enrollPath: string;
  courseCodes: CourseCode[];
};

const headerIconSize = 20;
const iconSize = 36;

export const DogGroomingBase: FC<Props> = ({ price, enrollPath, courseCodes }) => {
  const { countryCode } = getData();
  let eventKey = 0;

  return (
    <>
      <section id="top" className="bg-dark">
        <BackgroundImage src={DogGroomingBackground} priority objectPosition="right" />
        <div className="container text-center">
          <div className="row mb-4">
            <div className="mb-4">
              <CertificationGoldImage alt="International Dog Grooming Professional IDGP certification" height="125" width="125" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <h1>Dog Grooming Course</h1>
            {price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
            <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
            <a href={`https://enroll.qcpetstudies.com${enrollPath}?c=dg`}><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 d-flex">
              <div className="col text-uppercase">
                <a href="#outline"><OutlineIcon alt="outline" width={headerIconSize} height={headerIconSize} style={{ maxWidth: '100%', height: 'auto' }} /></a>
                <p><strong>Outline</strong></p>
              </div>
              <div className="col text-uppercase">
                <a href="#guarantee"><GuaranteeIcon alt="play button" width={headerIconSize} height={headerIconSize} style={{ maxWidth: '100%', height: 'auto' }} /></a>
                <p><strong>Guarantee</strong></p>
              </div>
              <div className="col text-uppercase">
                <a href="#tutors"><TutorIcon alt="play button" width={headerIconSize} height={headerIconSize} style={{ maxWidth: '100%', height: 'auto' }} /></a>
                <p><strong>Tutors</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="ratio ratio-16x9 mb-4">
                <video controls poster="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-grooming-teaser.jpg">
                  <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-grooming-teaser.mp4" type="video/mp4" />
                </video>
              </div>
              <h2>Become a <strong>Certified Professional Dog Groomer</strong></h2>
              <p className="lead"><strong>International Dog Grooming Professional&trade;</strong> | <i>IDGP&trade;</i></p>
              <p>There's never been a better time to start a career as a professional dog groomer. Groomers and pet stylists all over the country have waiting lists or are simply refusing new clients. What an amazing opportunity to start a new and lucrative career!</p>
              <p>Get your International Dog Groomer Certification in less than a year with QC's comprehensive online training. Study at your own pace. Watch instructional videos and complete hands-on assignments to grow your grooming skills. With QC's all-encompassing Professional Grooming course, you'll master all levels of pet grooming from bathing and brushing and pet cuts, all the way to advanced pet styling. Graduate with all the knowledge and skills you need to succeed in the dog grooming industry!</p>
              <p className="mb-0">Are you ready to start an amazing career?</p>
            </div>
          </div>
        </div>
      </section>

      {price.promoDiscount > 0
        ? <PriceSectionWithDiscount courses={courseCodes} price={price} doubleGuarantee enrollPath={enrollPath} />
        : <PriceSection courses={courseCodes} price={price} doubleGuarantee enrollPath={enrollPath} />
      }

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <h2 className="mb-2 mb-md-4">Included in <strong>Your Course</strong></h2>
              <Image src={DogGroomingKit} alt="professional dog-grooming kit" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              <div className={`${styles.icon} mb-1`}><BsScissors size={iconSize} /></div>
              <h3>Professional-Grade Grooming Starter Kit</h3>
              <p>When you enroll, you'll receive a kit of dog grooming tools to help you complete your studies and start your career. This kit includes cordless WAHL clippers and combs, three grooming scissors, an assortment of brushes and combs, and more!</p>
              <KitDetailsButton countryCode={countryCode} />
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className={`${styles.icon} mb-1`}><BsCardChecklist size={iconSize} /></div>
              <h3>Newest <br className="d-none d-md-inline d-lg-block" />Course Materials</h3>
              <p className="mb-0">Your course materials are always available online and are always being updated with the latest industry standards.  Refer to your updated training guides throughout your career!</p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className={`${styles.icon} mb-1`}><BsPeopleFill size={iconSize} /></div>
              <h3>Personalized <br className="d-none d-md-inline d-lg-block" />Feedback</h3>
              <p className="mb-0">Just because you're learning online doesn't mean you're learning alone. You'll receive personalized audio feedback from your tutor on every dog grooming assignment you submit.</p>
            </div>
            <div className="col-12 col-md-4">
              <div className={`${styles.icon} mb-1`}><IoMdInfinite size={iconSize} /></div>
              <h3>Lifetime <br className="d-none d-md-inline d-lg-block" />Access</h3>
              <p className="mb-0">Once you're a member of the QC family you 'll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lighter">
        <div className="container text-center">
          <h2 className="text-center mb-4">QC Success Stories</h2>
          <div className="row justify-content-center g-4">
            <div className="col-12 col-md-9 col-lg-6 col-xl-4">
              <TestimonialKaylaTorraville />
            </div>
            <div className="col-12 col-md-9 col-lg-6 col-xl-4">
              <TestimonialAprilCostigan />
            </div>
            <div className="col-12 col-md-9 col-lg-6 col-xl-4">
              <TestimonialHailieSavage />
            </div>
            <div className="col-12 col-md-9 col-lg-6 col-xl-4">
              <TestimonialMelodyMason />
            </div>
            <div className="col-12 col-md-9 col-lg-6 col-xl-4">
              <TestimonialCaseyBecard />
            </div>
            <div className="col-12 col-md-9 col-lg-6 col-xl-4">
              <TestimonialNickiHughes />
            </div>
          </div>
        </div>
      </section>

      <div id="outline" className="sectionAnchor" />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4 text-center">
              <h2>Course <strong>Outline</strong></h2>
              <p className="lead">The Dog Grooming Course is split into 5 parts, each containing individual training units.</p>
              <p>You must complete a unit with a satisfactory grade before you can submit assignments for the next unit.</p>
            </div>
          </div>
          <Accordion defaultActiveKey={0}>
            <AccordionItem eventKey={eventKey++} heading="Introduction to Professional Grooming">
              <p>The first units in this course will introduce you to the fundamental concepts of dog grooming. In these units, you'll cover health and safety, basic dog anatomy, skincare, behavior, the tools of the trade and more.</p>
              <p>While you complete these units we recommended that you start considering your grooming workspace so that you are prepared for the practical assignments later in the course. Unit C will be particularly helpful in selecting appropriate tools, equipment and products.</p>
              <p>It is also recommended that you start seeking out dog owners who are willing to let you use their dogs in practical assignments later in the course.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Dog First Aid Course">
              <p>In order to provide you with the resources to learn your craft safely, your grooming course also comes with complimentary training on dog first aid. You'll learn about emergency situations that may occur in a grooming environment so that you'll be prepared to respond calmly and effectively in any emergency.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Bathing and Brushing">
              <p>Once you understand the basics of dog grooming and dog first aid, you will move on to units that teach you the hands-on skills involved preparing for a groom. In these units, you'll cover essential tasks, including nail trimming, ear cleaning, brushing, de-matting, bathing, and drying. You'll study coat types and learn how to work with different dog breeds to keep each and every dog looking and feeling their best. You'll complete a number of basic practical assignments that will prepare you to start your practicum.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Pet Cuts and Advanced Breed Styling">
              <p>Dog grooming as a profession requires a lot of background knowledge, but ultimately your success will depend on your ability to safely and skillfully groom dogs. You'll learn to complete the most popular pet cuts and advanced breed styles through a series of detailed instructional videos with certified Master Groomers.</p>
              <p>You'll complete practicum units designed to help you hone your technique and receive feedback on these essential skills. The units within the practicum involve practical assignments that draw on the content you've mastered throughout the course.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Dog Grooming Business Essentials">
              <h4>(Optional Unit)</h4>
              <p>After completing your practicum you can choose to complete the optional Business Essentials unit. This unit will help you develop the skills you need to run your own successful dog grooming business, from building your brand to constructing a business plan to setting your prices.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline">View a more detailed course syllabus</Link></p>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <GuaranteeSection className="bg-light" double />

      <VirtualCommunitySection />

      <TutorSectionDG />
    </>
  );
};
