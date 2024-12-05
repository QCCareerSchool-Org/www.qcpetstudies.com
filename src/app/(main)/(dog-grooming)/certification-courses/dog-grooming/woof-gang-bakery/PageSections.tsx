'use client';

import Image from 'next/image';
import type { FC, MouseEventHandler } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FaBook, FaFilm, FaLaptop } from 'react-icons/fa';
import { useCountUp } from 'react-use-count-up';

import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import { Bar } from '@/components/bar';
import IDGPCertificationLogo from '@/components/certifications/IDGP-certification-gold.svg';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import HeroWGBContained from '@/images/backgrounds/hero-wgb-contained.jpg';
import HeroWGBMobile from '@/images/backgrounds/hero-wgb-mobile.jpg';
import HeroWGB from '@/images/backgrounds/hero-wgb.jpg';
import ExclusiveWGB from '@/images/border-collie-sitting-wgb.jpg';
import DogGroomingKit from '@/images/dog-grooming-kit-white.jpg';
import GroomingKitDetails from '@/images/grooming-kit-details.jpg';
import UnitA from '@/images/units/dg/a.jpg';
import UnitB from '@/images/units/dg/b.jpg';
import UnitC from '@/images/units/dg/c.jpg';
import UnitD from '@/images/units/dg/d.jpg';
import UnitE from '@/images/units/dg/e.jpg';
import UnitF from '@/images/units/dg/f.jpg';
import UnitG from '@/images/units/dg/g.jpg';
import UnitH from '@/images/units/dg/h.jpg';
import UnitI from '@/images/units/dg/i.jpg';
import UnitK from '@/images/units/dg/k.jpg';
import UnitJ from '@/images/units/dg/l.jpg';

const countUpDuration = 3000;
const easingFunction = 'easeOutQuad';

type Props = {
  enrollPath?: string;
};

export const PageSections: FC<Props> = ({ enrollPath }) => {
  let eventKey = 0;

  const screenWidth = useScreenWidth();

  const sm = screenWidth >= 576;
  const lg = screenWidth >= 992;
  const xl = screenWidth >= 1200;

  const videosRef = useRef(null);
  const videosIntersection = useIntersectionObserver(videosRef);
  const [ videosStarted, setVideosStarted ] = useState(false);

  useEffect(() => {
    if (videosIntersection) {
      setVideosStarted(true);
    }
  }, [ videosIntersection ]);

  const videosCount = useCountUp({ start: 0, end: 43, duration: countUpDuration, started: videosStarted, easingFunction });

  const lessonsRef = useRef(null);
  const lessonsIntersection = useIntersectionObserver(videosRef);
  const [ lessonsStarted, setLessonsStarted ] = useState(false);

  useEffect(() => {
    if (lessonsIntersection) {
      setLessonsStarted(true);
    }
  }, [ lessonsIntersection ]);

  const lessonsCount = useCountUp({ start: 0, end: 25, duration: countUpDuration, started: lessonsStarted, easingFunction });

  const assignmentsRef = useRef(null);
  const assignmentsIntersection = useIntersectionObserver(videosRef);
  const [ assignmentsStarted, setAssignmentsStarted ] = useState(false);

  useEffect(() => {
    if (assignmentsIntersection) {
      setAssignmentsStarted(true);
    }
  }, [ assignmentsIntersection ]);

  const assignmentsCount = useCountUp({ start: 0, end: 34, duration: countUpDuration, started: assignmentsStarted, easingFunction });

  const [ popup, setPopup ] = useState(false);

  const handlePopupLinkClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setPopup(true);
  };

  const handlePopupClose = (): void => {
    setPopup(false);
  };

  const [ heroSrc, heroWidth, heroHeight ] = xl
    ? [ HeroWGBContained, 1200, 506 ]
    : sm
      ? [ HeroWGB, 1173, 495 ]
      : [ HeroWGBMobile, 518, 610 ];

  return (
    <>
      <section id="top" style={{ padding: 0, backgroundColor: '#6fbade' }}>
        <div className={xl ? 'container' : ''}>
          <Image
            src={heroSrc}
            placeholder="blur"
            alt="Dog Grooming Certification Course, $500 WGB Discount"
            priority
            sizes="100vw"
            width={heroWidth}
            height={heroHeight}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <h1 className="h2">Access Your<br /><strong>Exclusive WGB Discount!</strong></h1>
              <p className="lead">As a Woof Gang Bakery employee, manager, or owner you're eligible to receive an exclusive $500 discount towards your online Dog Grooming course tuition.</p>
              <p>Get started now and work closely with a Certified Master Groomer. Gain the professional skills you need to offer the following services:</p>
              <ul>
                <li>Nail trimming, ear cleaning and sanitary trims</li>
                <li>Bathing and brushing</li>
                <li>De-shedding and dematting</li>
                <li>Complete grooms</li>
                <li>Breed-specific pet styling</li>
              </ul>
              <p><strong>Plus, get first-aid training FREE with your course.</strong> Don't miss out on this amazing opportunity to learn from the best and develop your skills quickly!</p>
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
              <IDGPCertificationLogo width={200} height={200} alt="IDGP International Dog Grooming Professional logo" style={{ maxWidth: '100%', height: 'auto' }} />
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
              <h2 className="fw-bold">Your Professional Grooming Kit</h2>
              <div className="my-4">
                <Image src={DogGroomingKit} alt="professional dog-grooming kit" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
              <p>When you enroll in QC's online dog grooming course, you'll receive a WAHL ARCO 5-in-1 cordless clipper, a stainless steel attachment guide comb kit, grooming scissors, and an assortment of tools used for preparation work. These items will be shipped to you when you successfully complete Unit B.</p>
              <p><a onClick={handlePopupLinkClick} href="#" className="link-primary text-uppercase">View kit details</a></p>
              <Modal show={popup} onHide={handlePopupClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Your Professional Grooming Kit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="p-2">
                    <Image src={GroomingKitDetails} width="652" height="1009" alt="grooming kit details" style={{ width: '100%', height: 'auto' }} />
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row text-center justify-content-center mb-5">
            <div className="col-12 col-sm-4 col-lg-3 mb-5 mb-sm-0">
              <div className="mb-2">
                <FaFilm size="54" color="#bbb" />
              </div>
              <div className="h3" ref={videosRef}><div className="h1 mb-2">{videosCount}</div>Video<br />Demonstrations</div>
            </div>
            <div className="col-12 col-sm-4 col-lg-3 mb-5 mb-sm-0">
              <div className="mb-2">
                <FaBook size="54" color="#bbb" />
              </div>
              <div className="h3" ref={lessonsRef}><div className="h1 mb-2">{lessonsCount}</div>Interactive<br />Lessons</div>
            </div>
            <div className="col-12 col-sm-4 col-lg-3">
              <div className="mb-2">
                <FaLaptop size="54" color="#bbb" />
              </div>
              <div className="h3" ref={assignmentsRef}><div className="h1 mb-2">{assignmentsCount}</div>Practical<br />Assignments</div>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex mb-4 mb-lg-0">
              <div className="card">
                <div className="card-body">
                  <h3 className="mb-3">Work at Your Own Pace</h3>
                  <Bar variant="secondary" />
                  <p className="mb-0">The course has no deadlines or due dates. You can work through the units at completely your own pace. Re-read your course lessons and re-watch your instructional videos as often as you like. Take your time or graduate quickly&mdash;the choice is yours!</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex">
              <div className="card">
                <div className="card-body">
                  <h3 className="mb-3">Average Completion Time</h3>
                  <Bar variant="secondary" />
                  <p className="mb-0">On average, most QC students complete the self-paced course in 6 months to a year. The course will take between 80 and 130 hours to complete. You have up to two years to complete the program.</p>
                </div>
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
              <Accordion>
                <AccordionItem eventKey={eventKey++} heading="Unit A">
                  <div className="accordionOutset">
                    <Image src={UnitA} alt="Unit A" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: lg ? '50% 10%' : '50% 0%' }} />
                  </div>
                  <UnitStats readings="1 to 2 hours" videos="25 minutes" assignments="2 hours" />
                  <hr />
                  <p className="mb-0">In the first unit of the dog grooming course, you'll meet your tutor and start learning about the fundamentals of dog grooming. This introductory unit includes theoretical studies on the history of dog grooming.  You'll also learn about dog anatomy in great detail, and you'll start learning about skincare and esthetics.</p>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit B">
                  <div className="accordionOutset">
                    <Image src={UnitB} alt="Unit B" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: lg ? '50% 40%' : '50% 35%' }} />
                  </div>
                  <UnitStats readings="1 to 2 hours" videos="1 hour" assignments="3 hours" />
                  <hr />
                  <p>You'll focus on how to work with dogs in a grooming environment. You'll learn about dog behaviors and temperaments, and you'll find out how dogs learn and communicate with humans. You'll learn about how you can keep the dog and yourself safe during a grooming appointment, and how to conduct an effective needs analysis when meeting a dog grooming client for the first time.</p>
                  <p className="mb-0"><strong>Required grooming equipment:</strong> None</p>
                  <p className="mb-0"><strong>Required dogs:</strong> One coated dog</p>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit C">
                  <div className="accordionOutset">
                    <Image src={UnitC} alt="Unit C" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: lg ? '50% 80%' : '50% 80%' }} />
                  </div>
                  <UnitStats readings="1 to 2 hours" videos="1.5 hours" assignments="2 to 3 hours" />
                  <hr />
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
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit D">
                  <div className="accordionOutset">
                    <Image src={UnitD} alt="Unit D" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: lg ? '50% 80%' : '50% 80%' }} />
                  </div>
                  <UnitStats readings="2 to 4 hours" videos="5.5 hours" assignments="6 hours" />
                  <hr />
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
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit E">
                  <div className="accordionOutset">
                    <Image src={UnitE} alt="Unit E" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50%' }} />
                  </div>
                  <UnitStats readings="1 to 2 hours" videos="1 hour" assignments="3 hours" />
                  <hr />
                  <p>This unit is all about different coat types in dogs. You'll learn how to work with every coat type including the necessary care and maintenance of these coats. You'll also be introduced to some indispensable pet cuts, and techniques for creating eye-catching finishing touches to top off a stylish groom!</p>
                  <p className="mb-0"><strong>Required dogs:</strong> A coated dog in need of grooming</p>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit F">
                  <div className="accordionOutset">
                    <Image src={UnitF} alt="Unit F" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50%' }} />
                  </div>
                  <UnitStats readings="1 to 2 hours" videos="3 (1.5 hours)" assignments="3 (2 hours)" />
                  <hr />
                  <p className="mb-0">You'll now start to work with dogs that require special accommodations. These include introducing puppies to the grooming process, grooming seniors and other dogs who might have health issues, and dogs that may have behavioral issues that make them particularly challenging to groom.</p>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit G - The Bath and Breed Standards">
                  <div className="accordionOutset">
                    <Image src={UnitG} alt="Unit G" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: lg ? '50% 20%' : '50% 0%' }} />
                  </div>
                  <UnitStats readings="30 minutes to 1 hour" assignments="3 hours" />
                  <hr />
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
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit H - Creating the Teddy Bear Cut">
                  <div className="accordionOutset">
                    <Image src={UnitH} alt="Unit H" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: lg ? '50% 20%' : '50% 0%' }} />
                  </div>
                  <UnitStats readings="30 minutes to 1 hour" videos="15 minutes" assignments="5 to 6 hours" />
                  <hr />
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
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit I - Grooming a Natural Breed">
                  <div className="accordionOutset">
                    <Image src={UnitI} alt="Unit I" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: lg ? '50% 30%' : '50% 25%' }} />
                  </div>
                  <UnitStats readings="1 to 2 hours" videos="45 minutes" assignments="5 to 6 hours" />
                  <hr />
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
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit J - Grooming a Terrier">
                  <div className="accordionOutset">
                    <Image src={UnitJ} alt="Unit J" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: lg ? '50% 40%' : '50% 20%' }} />
                  </div>
                  <UnitStats readings="3 to 4 hours" videos="3 hours" assignments="5 to 6 hours" />
                  <hr />
                  <p>Grooming a terrier is a requirement for many dog grooming certification exams. Create the breed standard on a miniature schnauzer, standard schnauzer, airedale terrier or west highland white terrier. Use the best tools and techniques to achieve the desired shapes and styles.</p>
                  <p className="mb-0"><strong>Required grooming equipment:</strong></p>
                  <ul>
                    <li>Appropriate equipment for prep work</li>
                    <li>Brushes and combs appropriate for the dog's coat type and needs</li>
                    <li>Clippers and appropriate clipper blades</li>
                    <li>Appropriate grooming scissors</li>
                    <li>Other grooming equipment needed for your dog of choice</li>
                  </ul>
                  <p className="mb-0"><strong>Required dogs:</strong> A purebred, miniature schnauzer, standard schnauzer, west highland white terrier, or airedale whose owner is looking for clipping, not hand stripping</p>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit K - Grooming a Non-Sporting Breed">
                  <div className="accordionOutset">
                    <Image src={UnitK} alt="Unit K" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: lg ? '50% 40%' : '50% 20%' }} />
                  </div>
                  <UnitStats readings="2 to 3 hours" videos="2 hours" assignments="5 to 6 hours" />
                  <hr />
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
                </AccordionItem>
              </Accordion>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

type UnitStatsProps = {
  readings: string;
  videos?: string;
  assignments: string;
};

const shorten = (t: string): string => {
  return t.replace(/hours/gu, 'hrs.')
    .replace(/hour/gu, 'hr.')
    .replace(/minutes/gu, 'mins.')
    .replace(/minute/gu, 'min.');
};

const UnitStats: FC<UnitStatsProps> = ({ readings, videos, assignments }) => {
  const screenWidth = useScreenWidth();
  const [ r, v, a ] = useMemo(() => {
    return screenWidth >= 768
      ? [ readings, videos, assignments ]
      : [ shorten(readings), typeof videos === 'undefined' ? undefined : shorten(videos), shorten(assignments) ];
  }, [ screenWidth, readings, videos, assignments ]);

  return (
    <div className="row justify-content-center text-center mb-3">
      <div className="customCol customMarginBottom">
        <h4 className="fw-bold mb-1">Readings</h4>{r}
      </div>
      {!!videos && (
        <div className="customCol customMarginBottom">
          <h4 className="fw-bold mb-1">Videos</h4>{v}
        </div>
      )}
      <div className="customCol">
        <h4 className="fw-bold mb-1">Assigments</h4>{a}
      </div>
      <style jsx>{`
      .customCol {
        flex: 0 0 auto;
        width: 100%;
      }
      .customMarginBottom {
        margin-bottom: 1rem;
      }
      @media only screen and (min-width: 490px) {
        .customCol {
          width: 33.33333333%;
        }
        .customMarginBottom {
          margin-bottom: 0;
        }
      }
      `}</style>
    </div>
  );
};
