import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { useCountUp } from 'react-use-count-up';
import { AccordionSection } from '../../../components/AccordionSection';

import { AccordionToggle } from '../../../components/AccordionToggle';
import { Bar } from '../../../components/Bar';
import { DGTutorSection } from '../../../components/DGTutorSection';
import { LandingPageLayout } from '../../../components/layouts/LandingPageLayout';
import { PriceSection } from '../../../components/PriceSection';
import { SEO } from '../../../components/SEO';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import HeroWGB from '../../../images/backgrounds/hero-wgb.jpg';
import calendarIcon from '../../../images/calendar.svg';
import IconTime from '../../../images/clock.svg';
import DogCourseMaterialsImage from '../../../images/dg-course-materials-manuals-kit-white.jpg';
import ExclusiveWGB from '../../../images/exclusive-wgb.jpg';
import IDGPCertificationLogo from '../../../images/IDGP-certification-gold.svg';
import WoofGangLogo from '../../../images/logos/woof-gang-bakery-black.svg';
import { getLocation } from '../../../lib/getLocation';
import { lookupPrices } from '../../../lib/lookupPrices';
import { Location } from '../../../models/location';
import { PriceResult } from '../../../models/price';
import type { NextPageWithLayout } from '../../_app';

type Props = {
  location: Location;
  price: PriceResult;
  enrollPath: string;
};

const courseCodes = [ 'dg' ];
const countUpDuration = 3000;
const easingFunction = 'easeOutQuad';

const iconSize = 50;

const Page: NextPageWithLayout<Props> = ({ location, price, enrollPath }) => {
  const screenWidth = useScreenWidth();

  const sm = screenWidth >= 576;
  const md = screenWidth >= 768;
  const lg = screenWidth >= 992;

  const videosRef = useRef(null);
  const videosIntersection = useIntersectionObserver(videosRef);
  const [ videosStarted, setVideosStarted ] = useState(false);
  useEffect(() => {
    if (videosIntersection?.isIntersecting) {
      setVideosStarted(true);
    }
  }, [ videosIntersection?.isIntersecting ]);
  const videosCount = useCountUp({ start: 0, end: 43, duration: countUpDuration, started: videosStarted, easingFunction });

  const lessonsRef = useRef(null);
  const lessonsIntersection = useIntersectionObserver(videosRef);
  const [ lessonsStarted, setLessonsStarted ] = useState(false);
  useEffect(() => {
    if (lessonsIntersection?.isIntersecting) {
      setLessonsStarted(true);
    }
  }, [ lessonsIntersection?.isIntersecting ]);
  const lessonsCount = useCountUp({ start: 0, end: 25, duration: countUpDuration, started: lessonsStarted, easingFunction });

  const assignmentsRef = useRef(null);
  const assignmentsIntersection = useIntersectionObserver(videosRef);
  const [ assignmentsStarted, setAssignmentsStarted ] = useState(false);
  useEffect(() => {
    if (assignmentsIntersection?.isIntersecting) {
      setAssignmentsStarted(true);
    }
  }, [ assignmentsIntersection?.isIntersecting ]);
  const assignmentsCount = useCountUp({ start: 0, end: 34, duration: countUpDuration, started: assignmentsStarted, easingFunction });

  return <>
    <SEO
      title="Dog Grooming Certification Course"
      description=""
      canonical="/certification-courses/dog-grooming/course-preview"
    />

    <section id="top" className="bg-dark">
      <Image
        src={HeroWGB}
        placeholder="blur"
        alt="dog getting a haircut"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="container text-center">
        <div className="py-sm-1 py-md-4 py-lg-5">
          <div className="py-xxl-5">
            <div className="row justify-content-center">
              <div className="col-8 col-sm-8 col-md-8 col-lg-6">
                <div className="mb-4 mb-md-5">
                  <Image src={WoofGangLogo} alt="Woof Gang Bakery logo" width="2000" height="454" style={{ maxHeight: lg ? 64 : sm ? 48 : 32, width: 'auto', margin: '0 auto' }} />
                </div>
                <h1 className={`mb-4 mb-lg-5 fw-normal ${sm ? '' : 'h3'}`}><span className="fw-bold">Dog Grooming</span> Certification Course</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="offsetSection">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <h2>Access Your<br /><strong>Exclusive WGB Discount!</strong></h2>
            <p className="lead">As a Woof Gang Bakery employee, manager, or owner you're eligible to receive an exclusive $500 discount towards your online Dog Grooming course tuition.</p>
            <p>Get started now and work closely with a Certified Master Groomer. Gain the professional skills you need to offer the following services:</p>
            <ul>
              <li>Nail trimming, ear cleaning and sanitary trims</li>
              <li>Bathing and brushing</li>
              <li>De-shedding and dematting</li>
              <li>Complete grooms</li>
              <li>Breed-specific pet styling</li>
            </ul>
            <p>You'll also receive comprehensive First Aid training free with your course. Don't miss out on this amazing opportunity to work with an expert to develop your skills!</p>
            <a href={`https://enroll.qcpetstudies.com${enrollPath}`}><button className="btn btn-lg btn-secondary">Enroll Now</button></a>
          </div>
          <div className="col-8 col-md-6">
            <Image src={ExclusiveWGB} width="547" height="619" style={{ maxWidth: '100%', height: 'auto' }} alt="Exclusive WGB discount" />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-navy">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-contents-center align-items-center">
          <div className="flex-shrink-0 mb-4 mb-md-0 me-md-4">
            <Image
              src={IDGPCertificationLogo}
              width={200}
              height={200}
              alt="IDGP International Dog Grooming Professional logo"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div className="text-center text-md-start">
            <h2>Your <strong>Certification</strong></h2>
            <p className="lead mb-0">Upon graduation, you'll receive the International Dog Grooming Professional™ (IDGP™) Certification. You'll be proud to show off your certificate and your clients will feel very confident leaving their precious pups in your care.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <h2 className="fw-bold">Free Grooming Kit</h2>
            <div className="my-4">
              <Image
                src={DogCourseMaterialsImage}
                alt="course materials"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <h3>Professional-Grade Grooming Starter Kit</h3>
            <p>When you enroll, you'll receive a kit of dog grooming tools to help you complete your assignments. The kit includes cordless WAHL clippers and combs, grooming scissors, an assortment of brushes and combs, and more!</p>
            <p><Link href="/certification-courses/dog-grooming-kit" className="link-primary text-uppercase">View kit details</Link></p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 col-sm-4">
            <div className="h3" ref={videosRef}><div className="h1 mb-2">{videosCount}</div>Video Demonstrations</div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="h3" ref={lessonsRef}><div className="h1 mb-2">{lessonsCount}</div>Interactive Lessons</div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="h3" ref={assignmentsRef}><div className="h1 mb-2">{assignmentsCount}</div>Practical Assignments</div>
          </div>
        </div>
        <div className="row justify-content-center my-5 text-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex mb-4 mb-lg-0">
            <div className="card">
              <div className="card-body">
                <div className="mb-2">
                  <Image
                    src={IconTime}
                    width={iconSize}
                    height={iconSize}
                    alt="clock icon"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
                <p>The course should take between <strong>80 and 130 hours</strong> to study and complete assignments from start to finish.  This time does not include the time you will take to practice and develop your skills before you complete an assignment.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex">
            <div className="card">
              <div className="card-body">
                <div className="mb-2">
                  <Image
                    src={calendarIcon}
                    width={iconSize}
                    height={iconSize}
                    alt="calendar icon"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
                <p>On average, most QC students work on their course for a few hours per week, and complete the online dog grooming course within about <strong>6 months to a year.</strong>  You'll have up to two years to complete the program, so lots of time!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            <div className="alert alert-primary">
              <strong><i>Note:</i></strong> Course and unit times indicated on this page are approximate. Since this is a self-paced course, students take as much time as they need to practice their skills and complete each unit.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10 col-xxl-9">
            <h2>Course Outline</h2>
            <p className="lead">Below is an outline of each unit of the online dog grooming course. Expand each section to find out what you'll learn in each unit.</p>
            <Accordion defaultActiveKey="0" className="mb-4">
              <AccordionToggle title="Unit A" eventKey="0" variant="primary" />
              <AccordionSection eventKey="0">
                <UnitStats readings="1 to 2 hours" videos="3 (25 minutes)" assignments="4 (2 hours)" />
                <Bar variant="secondary" />
                <p className="mb-0">In the first unit of the dog grooming course, you'll meet your tutor and start learning about the fundamentals of dog grooming. This introductory unit includes theoretical studies on the history of dog grooming.  You'll also learn about dog anatomy in great detail, and you'll start learning about skincare and esthetics.</p>
              </AccordionSection>
              <AccordionToggle title="Unit B" eventKey="1" variant="primary" />
              <AccordionSection eventKey="1">
                <UnitStats readings="1 to 2 hours" videos="3 (1 hour)" assignments="5 (3 hours)" />
                <Bar variant="secondary" />
                <p>You'll focus on how to work with dogs in a grooming environment. You'll learn about dog behaviors and temperaments, and you'll find out how dogs learn and communicate with humans. You'll learn about how you can keep the dog and yourself safe during a grooming appointment, and how to conduct an effective needs analysis when meeting a dog grooming client for the first time.</p>
                <p className="mb-0"><strong>Required grooming equipment:</strong> None</p>
                <p className="mb-0"><strong>Required dogs:</strong> One coated dog</p>
              </AccordionSection>
              <AccordionToggle title="Unit C" eventKey="2" variant="primary" />
              <AccordionSection eventKey="2">
                <UnitStats readings="1 to 2 hours" videos="4 (1.5 hours)" assignments="5 (2 to 3 hours)" />
                <Bar variant="secondary" />
                <p>The third dog grooming unit will help you become intimately familiar with your grooming tools. You'll learn all about brushes, scissors, clippers, and you'll start to practice techniques to use these tools effectively. You'll also learn how to properly set up your grooming environment, and how to keep it clean and safe!</p>
                <p className="mb-0"><strong>Required grooming equipment:</strong></p>
                <ul>
                  <li>Scissors</li>
                  <li>Clippers</li>
                  <li>Grooming table with non-slip surface</li>
                  <li>Grooming arm</li>
                  <li>Grooming loop</li>
                </ul>
                <p className="mb-0"><strong>Required dogs:</strong> None</p>
              </AccordionSection>
              <AccordionToggle title="Unit D" eventKey="3" variant="primary" />
              <AccordionSection eventKey="3">
                <UnitStats readings="2 to 4 hours" videos="17 (5.5 hours)" assignments="7 (6 hours)" />
                <Bar variant="secondary" />
                <p>In the first half of Unit D, you'll learn how to deal with a number of injuries or accidents that might occur while grooming dogs, but you'll also learn how to do everything you can to prevent those emergencies from occurring!</p>
                <p>Next you'll start working on dogs and practicing your practical dog grooming skills! You'll learn about all the basic preparatory work that goes into a grooming session, from clipping nails to bathing and drying. These skills will form the foundation of all the grooming work you'll perform later in the course and in your career.</p>
                <p className="mb-0"><strong>Required grooming equipment:</strong></p>
                <ul>
                  <li>Nail clippers & nail file</li>
                  <li>Styptic powder, gel or pencil</li>
                  <li>Clippers with #15 or #30 blade</li>
                  <li>Ear powder and cleaner</li>
                  <li>Dog shampoo & conditioner</li>
                  <li>Bathing station & dryer</li>
                </ul>
                <p className="mb-0"><strong>Required dogs:</strong></p>
                <ul className="mb-0">
                  <li>One with sufficient hair between pads for trimming</li>
                  <li>One with white nails in need of clipping</li>
                  <li>One with black nails in need of clipping</li>
                  <li>One non-shedding dog with excess ear hair</li>
                  <li>One double-coated dog</li>
                  <li>A dog with at least one mat in his fur</li>
                </ul>
              </AccordionSection>
              <AccordionToggle title="Unit E" eventKey="4" variant="primary" />
              <AccordionSection eventKey="4">
                <UnitStats readings="1 to 2 hours" videos="2 (1 hour)" assignments="5 (3 hours)" />
                <Bar variant="secondary" />
                <p>This unit is all about different coat types in dogs. You'll learn how to work with every coat type including the necessary care and maintenance of these coats. You'll also be introduced to some indispensable pet cuts, and techniques for creating eye-catching finishing touches to top off a stylish groom!</p>
                <p className="mb-0"><strong>Required dogs:</strong> A coated dog in need of grooming</p>
              </AccordionSection>
              <AccordionToggle title="Unit F" eventKey="5" variant="primary" />
              <AccordionSection eventKey="5">
                <UnitStats readings="1 to 2 hours" videos="3 (1.5 hours)" assignments="3 (2 hours)" />
                <Bar variant="secondary" />
                <p className="mb-0">You'll now start to work with dogs that require special accommodations. These include introducing puppies to the grooming process, grooming seniors and other dogs who might have health issues, and dogs that may have behavioral issues that make them particularly challenging to groom.</p>
              </AccordionSection>
              <AccordionToggle title="Unit G – The Bath and Breed Standards" eventKey="6" variant="primary" />
              <AccordionSection eventKey="6">
                <UnitStats readings="30 minutes to 1 hour" assignments="1 (3 hours)" />
                <Bar variant="secondary" />
                <p>In your first practicum unit, you'll discover the basics of every groom. You'll study breed standards to prepare you for the most common grooming requests. Then you'll practice wetting a dog with the ideal water temperature and pressure, and choosing a suitable shampoo to lather and cleanse his coat. Next, thoroughly rinse the dog and check for any leftover dirt or debris. Finally, select an appropriate dryer to thoroughly dry and straighten the dog's coat.</p>
                <p className="mb-0"><strong>Required grooming equipment:</strong></p>
                <ul>
                  <li>All appropriate equipment for prep work</li>
                  <li>Grooming tub with restraints and a water supply</li>
                  <li>Dog shampoo &amp; conditioner</li>
                  <li>Towerls</li>
                  <li>High-velocity dryer</li>
                </ul>
                <p className="mb-0"><strong>Required dogs:</strong> A coated dog that is due for a bath</p>
              </AccordionSection>
              <AccordionToggle title="Unit H – Creating the Teddy Bear Cut" eventKey="7" variant="primary" />
              <AccordionSection eventKey="7">
                <UnitStats readings="30 minutes to 1 hour" videos="1 (15 minutes)" assignments="1 (5 to 6 hours)" />
                <Bar variant="secondary" />
                <p>The teddy bear cut can be a groomer's bread and butter. In this unit you'll complete six individual assignments where your tutor will evaluate your take on the teddy bear cut, from prep work through to execution and finishing touches.</p>
                <p className="mb-0"><strong>Required grooming equipment:</strong></p>
                <ul>
                  <li>Appropriate equipment for prep work</li>
                  <li>Brushes and combs appropriate for the dog's coat type and needs</li>
                  <li>Clippers and appropriate clipper blades</li>
                  <li>Appropriate grooming scissors</li>
                  <li>Other grooming equipment needed for your dog of choice</li>
                </ul>
                <p className="mb-0"><strong>Required dogs:</strong> A dog suitable for a teddy bear cut, whose coat is at least 3&quot; long (e.g., miniature poodle mix, Havanese mix, etc.)</p>
              </AccordionSection>
              <AccordionToggle title="Unit I – Grooming a Natural Breed" eventKey="8" variant="primary" />
              <AccordionSection eventKey="8">
                <UnitStats readings="1 to 2 hours" videos="2 (45 minutes)" assignments="1 (5 to 6 hours)" />
                <Bar variant="secondary" />
                <p>Practice grooming a natural breed that requires minimal shaping and styling. Create the breed standard on either a golden retriever or a Shetland sheepdog. Use the best tools and techniques to achieve a flattering but natural look.</p>
                <p className="mb-0"><strong>Required grooming equipment:</strong></p>
                <ul>
                  <li>Appropriate equipment for prep work</li>
                  <li>Brushes and combs appropriate for the dog's coat type and needs</li>
                  <li>Clippers and appropriate clipper blades</li>
                  <li>Appropriate grooming scissors</li>
                  <li>Other grooming equipment needed for your dog of choice</li>
                </ul>
                <p className="mb-0"><strong>Required dogs:</strong> A purebred golden retriever or purebred Shetland sheepdog</p>
              </AccordionSection>
              <AccordionToggle title="Unit J – Grooming a Terrier" eventKey="9" variant="primary" />
              <AccordionSection eventKey="9">
                <UnitStats readings="3 to 4 hours" videos="4 (3 hours)" assignments="1 (5 to 6 hours)" />
                <Bar variant="secondary" />
                <p>Grooming a terrier is a requirement for many dog grooming certification exams. Create the breed standard on a miniature schnauzer, standard schnauzer, airedale terrier or west highland white terrier. Use the best tools and techniques to achieve the desired shapes and styles.</p>
                <p className="mb-0"><strong>Required grooming equipment:</strong></p>
                <ul>
                  <li>Appropriate equipment for prep work</li>
                  <li>Brushes and combs appropriate for the dog's coat type and needs</li>
                  <li>Clippers and appropriate clipper blades</li>
                  <li>Appropriate grooming scissors</li>
                  <li>Other grooming equipment needed for your dog of choice</li>
                </ul>
                <p className="mb-0"><strong>Required dogs:</strong> A purebred ,miniature schnauzer, standard schnauzer, west highland white terrier, or airedale whose owner is looking for clipping, not hand stripping</p>
              </AccordionSection>
              <AccordionToggle title="Unit K – Grooming a Non-Sporting Breed" eventKey="10" variant="primary" />
              <AccordionSection eventKey="10">
                <UnitStats readings="2 to 3 hours" videos="2 (2 hours)" assignments="1 (5 to 6 hours)" />
                <Bar variant="secondary" />
                <p>Grooming a non-sporting breed is a requirement for many dog grooming certification exams. Create the breed standard on either a poodle or a bichon frise. Use the best tools and techniques to make stylized breeds look sleek and polished.</p>
                <p className="mb-0"><strong>Required grooming equipment:</strong></p>
                <ul>
                  <li>Appropriate equipment for prep work</li>
                  <li>Brushes and combs appropriate for the dog's coat type and needs</li>
                  <li>Clippers and appropriate clipper blades</li>
                  <li>Appropriate grooming scissors</li>
                  <li>Other grooming equipment needed for your dog of choice</li>
                </ul>
                <p className="mb-0"><strong>Required dogs:</strong> A purebred poodle or bichon frise</p>
              </AccordionSection>
            </Accordion>
          </div>
        </div>

      </div>
    </section>

    <PriceSection
      courses={courseCodes}
      price={price}
      doubleGuarantee={true}
      enrollPath={enrollPath}
      message={<>Includes everything you need to get started with a <strong className="text-primary">WGB-exclusive $500 discount!</strong></>}
    />

    <DGTutorSection className="bg-light" />

    <style jsx>{`
    #offsetSection { padding: 2rem 0 1.5rem; }
    #offsetSection > .container { top: -0.5rem; }
    @media (min-width: 576px) {
      #offsetSection { padding: 3rem 0 2.5rem; }
      #offsetSection > .container { top: -0.5rem; }
    }
    @media (min-width: 768px) {
      #offsetSection { padding: 3.5rem 0 2rem; }
      #offsetSection > .container { top: -1.5rem; }
    }
    @media (min-width: 992px) {
      #offsetSection { padding: 4rem 0 2rem; }
      #offsetSection > .container { top: -2rem; }
    }
    `}</style>
  </>;
};

Page.getLayout = page => (
  <LandingPageLayout link={true} href="https://enroll.qcpetstudies.com/woof-gang-bakery" nav="enroll">{page}</LandingPageLayout>
);

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const location = await getLocation(context);
  const price = await lookupPrices(courseCodes, location.countryCode, location.provinceCode, { promoCode: 'WOOFGANG', school: 'QC Pet Studies' });
  return { props: { location, price, enrollPath: '/woof-gang-bakery' } };
};

export default Page;

type UnitStatsProps = {
  readings: string;
  videos?: string;
  assignments: string;
};

const UnitStats: FC<UnitStatsProps> = ({ readings, videos, assignments }) => {
  return (
    <div className="row justify-content-center text-center mb-4 mb-sm-3">
      <div className="col-12 col-sm-4 mb-4 mb-sm-0">
        <h4 className="fw-bold mb-1">Readings</h4>{readings}
      </div>
      {!!videos && (
        <div className="col-12 col-sm-4 mb-4 mb-sm-0">
          <h4 className="fw-bold mb-1">Videos</h4>{videos}
        </div>
      )}
      <div className="col-12 col-sm-4">
        <h4 className="fw-bold mb-1">Assignments</h4>{assignments}
      </div>
    </div>
  );
};
