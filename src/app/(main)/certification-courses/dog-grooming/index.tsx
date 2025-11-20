import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { BsCalendar, BsChatSquare } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import CertificationBgImage from './cert-bg.jpg';
import { Client } from './client';
import DogGroomingKit from './dog-grooming-kit-white.jpg';
import MobileHero from './hero-mobile.jpg';
import DesktopHero from './hero.jpg';
import CertificationLogo from './IDGP-certification-gold.svg';
import styles from './index.module.scss';
import { KitDetailsButton } from './kitDetailsButton';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import { BackgroundImage } from '@/components/backgroundImage';
import { CourseSchema } from '@/components/courseSchema';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { TutorSectionDG } from '@/components/tutorSectionDG';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import { externship } from '@/lib/externship';
import { formatPrice } from '@/lib/formatPrice';
import { getData } from '@/lib/getData';

type Props = {
  dgPrice: Price;
  dePrice: Price;
  enrollPath: string;
  courseCode: CourseCode;
};

const iconSize = 36;
const testimonialIds = [ 'TD-0004', 'TD-0005', 'TD-0007', 'TD-0008', 'TD-0009', 'TD-0010' ];

export const DogGroomingBase: FC<Props> = async ({ dgPrice, dePrice, enrollPath, courseCode }) => {
  const { countryCode, provinceCode } = await getData();
  let eventKey = 0;

  return (
    <>
      <CourseSchema courseCode={courseCode} showPrice />
      <section id="top" className="bg-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <BackgroundImage src={DesktopHero} objectPosition="50% 50%" mobile={{ src: MobileHero, breakpoint: 'md' }} priority />
        <div className="container text-center text-md-start">
          <div className="row mb-4">
            <div className="col-12 col-md-8 col-lg-6 offset-lg-1">
              <h1 className="mb-4">Dog Grooming Course</h1>
              {dgPrice.plans.part.deposit > 0 && <h4 className="mb-5">Get Started for Only <strong>{dgPrice.currency.symbol}{formatPrice(dgPrice.plans.part.deposit)}</strong></h4>}
              <div className="d-flex justify-content-center justify-content-md-start">
                <Link href={enrollPath}><button className="btn btn-primary me-3">Enroll Now</button></Link>
                <Link href="#tuition"><button className="btn btn-outline-light">Tuition & Payment Plans</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {externship(countryCode, provinceCode) && (
        <div style={{ background: 'red', color: 'white', width: '100%', padding: '0.5rem' }}>
          <div className="container text-center">
            <p className="lead fw-normal mb-0">NEW: Now Available with an In-Person Externship!</p>
          </div>
        </div>
      )}
      <Client dgPrice={dgPrice} dePrice={dePrice} countryCode={countryCode} provinceCode={provinceCode} enrollPath={enrollPath} />
      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <h2 className="mb-3 mb-md-4">Why Choose QC?</h2>
              <h3>Get Your Professional-Grade Grooming Kit</h3>
              <p>When you enroll, you&apos;ll receive dog grooming tools to help you complete your studies and start your career. This kit includes a 3-piece set of grooming scissors, an assortment of brushes and combs for all coat types, and more!</p>
              <div className="mb-3">
                <KitDetailsButton countryCode={countryCode} />
              </div>
              <Image src={DogGroomingKit} alt="professional dog-grooming kit" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className={`${styles.icon} mb-1`}><BsChatSquare size={iconSize} /></div>
              <h3>Learn with One-on-One Mentorship</h3>
              <p className="mb-0">Just because you're learning online doesn't mean you're learning alone. You'll receive personalized audio feedback from your grooming mentor throughout your course.</p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className={`${styles.icon} mb-1`}><IoMdInfinite size={iconSize} /></div>
              <h3>Enjoy Lifetime Access to Your Course</h3>
              <p className="mb-0">You'll have lifetime access to all the tools and resources available to QC students. This includes course materials, business templates and discounts on industry products!</p>
            </div>
            <div className="col-12 col-md-4">
              <div className={`${styles.icon} mb-1`}><BsCalendar size={iconSize} /></div>
              <h3>Payment Plans that Work for You</h3>
              <p className="mb-0">QC offers flexible payment options and affordable tuition so you can focus on mastering your dog grooming skills and launching your career.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <BackgroundImage src={CertificationBgImage} />
        <div className="container text-white text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="mb-4">
                <Image src={CertificationLogo} alt="IDGP Certification Logo" />
              </div>
              <h2 className="text-white">Your International Dog Grooming Professional Certification</h2>
              <p>Once you graduate from your online dog grooming course, you'll receive a certification and be able to use the designation of International Dog Grooming Professional (IDGP).</p>
              <p>This certification demonstrates that you have successfully completed professional training and that you possess all the skills and knowledge required to safely handle dogs and deliver top-notch, professional grooms.</p>
              {externship(countryCode, provinceCode) && <p>If you complete the <strong>Externship Track</strong>, you'll also receive an <strong>additional certificate of completion</strong> recognizing your additional hands-on training and real-world salon experience!</p>}
            </div>
          </div>
        </div>
      </section>

      <TestimonialWallSection className="bg-light" testimonialIds={testimonialIds} />

      <div id="outline" className="sectionAnchor" />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4 text-center">
              <h2>Course <strong>Outline</strong></h2>
              <p className="lead">The Dog Grooming Course is split into 5 parts, each containing individual training units.</p>
            </div>
          </div>
          <Accordion defaultActiveKey={0}>
            <AccordionItem eventKey={eventKey++} heading="Introduction to Professional Grooming">
              <p>The first units in this course will introduce you to the fundamental concepts of dog grooming. In these units, you'll cover health and safety, basic dog anatomy, skincare, behavior, the tools of the trade and more.</p>
              <p>While you complete these units we recommended that you start considering your grooming workspace so that you are prepared for the practical assignments later in the course. Unit C will be particularly helpful in selecting appropriate tools, equipment and products.</p>
              <p>It is also recommended that you start seeking out dog owners who are willing to let you use their dogs in practical assignments later in the course.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Dog First Aid Training">
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
            {externship(countryCode, provinceCode) && (
              <AccordionItem eventKey={eventKey++} heading={<strong>NEW: Optional Externship Placement</strong>}>
                <p>If you choose the Externship Track, you'll be matched with a professional grooming salon in your area once you've completed the online portion of your course and paid your fees.  Spend 80 hours working alongside an experienced groomer, honing your skills in a real salon environment, and gaining valuable industry insight as you complete your unpaid externship. Track your hours, receive mentorship and feedback from your host, and graduate with a certificate that showcases both your knowledge and hands-on experience.</p>
                <p>As an Externship Track student, you'll also earn an additional professional certificate showcasing your advanced training and hands-on experience.</p>
                <p>Note: Students who choose the Online Track will graduate with their International Dog Grooming Professional™ (IDGP) Certification upon completing the course.</p>
                <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline">View a More Detailed Breakdown of the Externship</Link></p>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </section>

      <TutorSectionDG className="bg-light" />

      <VirtualCommunitySection />

      <GuaranteeSection className="bg-light" double />

      <section>
        <div itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 mb-4">
                <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
                <Accordion>
                  <AccordionItem eventKey={eventKey++} heading="How can I learn dog grooming online?" isFAQ={true}>
                    <div className="row text-left">
                      <p>QC Pet Studies makes it easy to learn dog grooming from home through step-by-step video tutorials, reading materials, and hands-on grooming assignments. You&apos;ll practice techniques on real dogs, upload photos and videos of your work, and receive personalized feedback from professional groomers. QC&apos;s comprehensive course covers every aspect of grooming from canine anatomy and behavior to bathing, clipping, styling, and working with different coat types.</p>
                      <p>Now, QC Pet Studies offers two flexible ways to learn <strong>dog grooming</strong>, so you can customize your training to fit your needs:</p>
                      <ol className="ps-5">
                        <li><strong>Online Track</strong>: Learn from home through step-by-step video tutorials, reading materials, and hands-on grooming assignments. Practice techniques on real dogs, upload photos or videos of your work, and receive personalized feedback from professional groomers.</li>
                        <li><strong>Externship Track</strong>: Gain real-world experience by completing part of your training in a professional grooming salon under the guidance of experienced groomers, while still completing your online coursework.</li>
                      </ol>
                      <p>When you graduate, you&apos;ll earn a professional dog grooming certificate that proves your skills and helps you stand out in the industry.</p>
                    </div>
                  </AccordionItem>
                </Accordion>
                <Accordion>
                  <AccordionItem eventKey={eventKey++} heading="Do I need prior training or experience as a dog groomer before taking this course?" isFAQ={true}>
                    <div className="row text-left">
                      <p>No previous experience is required! QC Pet Studies&apos; online Dog Grooming course is beginner-friendly and designed to teach you everything from the fundamentals of dog grooming to advanced styling techniques.</p>
                      <p>You&apos;ll gain practical skills, industry knowledge, and confidence to start your dog grooming business or salon career after graduation.</p>
                    </div>
                  </AccordionItem>
                </Accordion>
                <Accordion>
                  <AccordionItem eventKey={eventKey++} heading="How long does it take to become a dog groomer?" isFAQ={true}>
                    <div className="row text-left">
                      <p>With QC&apos;s self-paced online training, you decide how quickly you complete your studies. You can complete your training and start booking clients in under six months. If you&apos;d prefer to take your time, you have a full year to complete your training.</p>
                    </div>
                  </AccordionItem>
                </Accordion>
                <Accordion>
                  <AccordionItem eventKey={eventKey++} heading="How much do dog groomers make?" isFAQ={true}>
                    <div className="row text-left">
                      <p>According to ZipRecruiter, the average dog groomer salary is around $50,000 per year, though earnings vary based on location, experience, and the number of dogs groomed daily. Salon groomers often earn a steady hourly wage plus tips or commissions. Freelance or mobile groomers can set their own prices and schedule, often earning more as they build a loyal client base.</p>
                      <p>A career in dog grooming offers flexibility, job security, and the opportunity to turn your love of animals into a rewarding profession.</p>
                    </div>
                  </AccordionItem>
                </Accordion>
                <Accordion>
                  <AccordionItem eventKey={eventKey++} heading="Is QC Pet Studies an accredited online school?" isFAQ={true}>
                    <div className="row text-left">
                      <p>Yes! QC Pet Studies is a faculty of QC Career School, an accredited online education provider with an A+ rating from the Better Business Bureau (BBB).</p>
                      <p>Since 1984, QC has helped students around the world build successful careers through high-quality, career-focused online training. When you enroll in QC&apos;s Dog Grooming course, you can trust that you&apos;re learning from experienced grooming professionals to develop practical, hands-on skills.</p>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
