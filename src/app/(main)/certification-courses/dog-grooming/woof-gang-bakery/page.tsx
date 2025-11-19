import type { Metadata } from 'next';
import Image from 'next/image';

import ExclusiveWGB from './border-collie-sitting-wgb.jpg';
import HeroBackgroundImageSmLg from './hero-bg-sm-lg.jpg';
import HeroBackgroundImageXl from './hero-bg-xl.jpg';
import HeroBackgroundImageXs from './hero-bg-xs.jpg';
import UnitA from './images/a.jpg';
import UnitB from './images/b.jpg';
import UnitC from './images/c.jpg';
import UnitD from './images/d.jpg';
import UnitE from './images/e.jpg';
import UnitF from './images/f.jpg';
import UnitG from './images/g.jpg';
import UnitH from './images/h.jpg';
import UnitI from './images/i.jpg';
import UnitK from './images/k.jpg';
import UnitJ from './images/l.jpg';
import { KitSection } from './kitSection';
import styles from './page.module.scss';
import { StatsSection } from './statsSection';
import { UnitStats } from './unitStats';
import type { PageComponent } from '@/app/serverComponent';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import IDGPCertificationLogo from '@/components/certifications/IDGP-certification-gold.svg';
import { PriceSectionWithDiscount } from '@/components/priceSectionWithDiscount';
import { TutorSectionDG } from '@/components/tutorSectionDG';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';

const courseCodes = [ 'dg' ];

export const metadata: Metadata = {
  title: 'Dog Grooming Certification Course',
  alternates: { canonical: '/certification-courses/dog-grooming/woof-gang-bakery' },
};

const Page: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const { countryCode, provinceCode } = getData();
  const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes, options: { promoCode: 'WOOFGANG', school: 'QC Pet Studies' } };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  let eventKey = 0;

  const enrollPath = getParam(searchParams.enrollPath);

  return (
    <>
      <section id="top" style={{ padding: 0, backgroundColor: '#6fbade' }}>
        <div className="container d-none d-xl-block">
          <Image src={HeroBackgroundImageXl} alt="" priority style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="d-none d-sm-block d-xl-none">
          <Image src={HeroBackgroundImageSmLg} alt="" priority style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="d-sm-none">
          <Image src={HeroBackgroundImageXs} alt="" priority style={{ width: '100%', height: 'auto' }} />
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

      <KitSection />

      <StatsSection />

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10 col-xxl-9">
              <h2>Course Outline</h2>
              <p className="lead">Below is an outline of each unit of the online dog grooming course. Expand each section to find out what you'll learn in each unit.</p>
              <Accordion>
                <AccordionItem eventKey={eventKey++} heading="Unit A">
                  <div className={styles.accordionOutset}>
                    <Image src={UnitA} alt="Unit A" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 0%' }} />
                  </div>
                  <UnitStats readings="1 to 2 hours" videos="25 minutes" assignments="2 hours" />
                  <hr />
                  <p className="mb-0">In the first unit of the dog grooming course, you'll meet your tutor and start learning about the fundamentals of dog grooming. This introductory unit includes theoretical studies on the history of dog grooming.  You'll also learn about dog anatomy in great detail, and you'll start learning about skincare and esthetics.</p>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit B">
                  <div className={styles.accordionOutset}>
                    <Image src={UnitB} alt="Unit B" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 35%' }} />
                  </div>
                  <UnitStats readings="1 to 2 hours" videos="1 hour" assignments="3 hours" />
                  <hr />
                  <p>You'll focus on how to work with dogs in a grooming environment. You'll learn about dog behaviors and temperaments, and you'll find out how dogs learn and communicate with humans. You'll learn about how you can keep the dog and yourself safe during a grooming appointment, and how to conduct an effective needs analysis when meeting a dog grooming client for the first time.</p>
                  <p className="mb-0"><strong>Required grooming equipment:</strong> None</p>
                  <p className="mb-0"><strong>Required dogs:</strong> One coated dog</p>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit C">
                  <div className={styles.accordionOutset}>
                    <Image src={UnitC} alt="Unit C" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 80%' }} />
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
                  <div className={styles.accordionOutset}>
                    <Image src={UnitD} alt="Unit D" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 80%' }} />
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
                  <div className={styles.accordionOutset}>
                    <Image src={UnitE} alt="Unit E" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50%' }} />
                  </div>
                  <UnitStats readings="1 to 2 hours" videos="1 hour" assignments="3 hours" />
                  <hr />
                  <p>This unit is all about different coat types in dogs. You'll learn how to work with every coat type including the necessary care and maintenance of these coats. You'll also be introduced to some indispensable pet cuts, and techniques for creating eye-catching finishing touches to top off a stylish groom!</p>
                  <p className="mb-0"><strong>Required dogs:</strong> A coated dog in need of grooming</p>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit F">
                  <div className={styles.accordionOutset}>
                    <Image src={UnitF} alt="Unit F" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50%' }} />
                  </div>
                  <UnitStats readings="1 to 2 hours" videos="3 (1.5 hours)" assignments="3 (2 hours)" />
                  <hr />
                  <p className="mb-0">You'll now start to work with dogs that require special accommodations. These include introducing puppies to the grooming process, grooming seniors and other dogs who might have health issues, and dogs that may have behavioral issues that make them particularly challenging to groom.</p>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit G - The Bath and Breed Standards">
                  <div className={styles.accordionOutset}>
                    <Image src={UnitG} alt="Unit G" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 0%' }} />
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
                  <div className={styles.accordionOutset}>
                    <Image src={UnitH} alt="Unit H" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 0%' }} />
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
                  <div className={styles.accordionOutset}>
                    <Image src={UnitI} alt="Unit I" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 25%' }} />
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
                  <div className={styles.accordionOutset}>
                    <Image src={UnitJ} alt="Unit J" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 20%' }} />
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
                  <div className={styles.accordionOutset}>
                    <Image src={UnitK} alt="Unit K" fill placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 20%' }} />
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

      <PriceSectionWithDiscount
        courses={courseCodes}
        price={price}
        doubleGuarantee={true}
        enrollPath={enrollPath}
        message={<>Includes everything you need to get started with a <strong className="text-primary">WGB-exclusive $500 discount!</strong></>}
      />

      <TutorSectionDG className="bg-light" />
    </>
  );
};

export default Page;
