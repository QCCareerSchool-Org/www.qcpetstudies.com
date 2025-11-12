import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BsCardChecklist, BsPeopleFill } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import BrunoBakerImage from './bruno-baker.jpg';
import HeroBackgroundImage from './hero-bg.jpg';
import { OutlineSection } from './outlineSection';
import SusanReadImage from './susan-read.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import { BackgroundImage } from '@/components/backgroundImage';
import CertificationGoldImage from '@/components/certifications/IDBS-certification-gold.svg';
import { CourseSchema } from '@/components/courseSchema';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { PriceSection } from '@/components/priceSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import GuaranteeIcon from '@/images/course-overview-icons/guarantee.svg';
import OutlineIcon from '@/images/course-overview-icons/outline.svg';
import TutorIcon from '@/images/course-overview-icons/tutor.svg';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { formatPrice } from '@/lib/formatPrice';
import { getData } from '@/lib/getData';

const headerIconSize = 20;
const iconSize = 36;

const courseCodes = [ 'dc' ];
const linkCourseCodes = [ 'dt', 'dc' ];

export const metadata: Metadata = {
  title: 'Dog Behavior Course',
  description: 'Become a Professional Dog Behavior Specialist with QC\'s online dog behavior course. Study online with hands-on learning!',
  alternates: { canonical: '/certification-courses/dog-behavior' },
};

const DogBehaviorPage: PageComponent = async () => {
  let eventKey = 0;
  const { countryCode, provinceCode } = getData();
  const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  return (
    <>
      <CourseSchema courseCode={courseCodes[0] as CourseCode} />
      <section className="bg-dark">
        <BackgroundImage src={HeroBackgroundImage} priority />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row mb-4">
            <div className="mb-4">
              <CertificationGoldImage alt="International Dog Behavior Specialist IDBS Certification" height="125" width="125" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <h1>Dog Behavior Course</h1>
            {price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
            <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
            <a href="https://enroll.qcpetstudies.com?c=dt&c=dc"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-6 d-flex">
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
              <h2>Become a <strong>Certified Dog Behavior Specialist</strong></h2>
              <p className="lead"><strong>International Dog Behavior Specialist&trade;</strong> | <i>IDBS&trade;</i></p>
              <p>There's never been a better time to become a behavior specialist and help dogs conquer some of their most troubling behaviors! Pet parents are desperate for specialized trainers who can help them overcome specific challenges and concerns with their pups. Whether it's helping a pup with separation anxiety or curbing leash reactivity on walks, you can be the specialist that helps dogs transition into the happy, fun loving family members they were meant to be!</p>
              <p>Get your International Dog Behavior Specialist Certification in less than a year with QC's interactive online training. Study at your own pace. Watch instructional videos and complete hands-on assignments to hone your behavior modification skills. Graduate with all the knowledge and skills you need to succeed in the pet industry!</p>
              <p>Please note, Dog Behavior is an advanced certification program and requires students to have successfully completed <Link href="/certification-courses/dog-training">QC's Dog Training course</Link> or similar training as a prerequisite. </p>
              <p className="lead mb-0">Are you ready to start an amazing career?</p>
            </div>
          </div>
        </div>
      </section>

      <PriceSection courses={linkCourseCodes} price={price} doubleGuarantee={true} />

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <h2 className="mb-2 mb-md-4">Included in <strong>Your Course</strong></h2>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="courseContentIcon"><BsCardChecklist size={iconSize} /></div>
              <h3>Newest Course Materials</h3>
              <p className="mb-0">Your course materials are always available online and are always being updated with the latest science-based industry standards. Refer to your updated training guides throughout your career!</p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="courseContentIcon"><BsPeopleFill size={iconSize} /></div>
              <h3>Personalized Feedback</h3>
              <p className="mb-0">Just because you're learning online doesn't mean you're learning alone. You'll receive personalized audio feedback from your tutor on every dog behavior assignment you submit. Use this feedback to improve and succeed!</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="courseContentIcon"><IoMdInfinite size={iconSize} /></div>
              <h3>Lifetime Access</h3>
              <p className="mb-0">Once you're a member of the QC family you'll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
            </div>
          </div>
        </div>
      </section>

      <div id="outline" className="sectionAnchor" />
      <OutlineSection className="bg-lighter" />

      <div id="tutors" className="sectionAnchor" />
      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2>Learn from <strong>Dog Behavior Experts</strong></h2>
              <p className="lead">QC's dog behavior course was developed with the assistance of Kim Cooper.</p>
              <p className="mb-5">With over 30 prestigious accomplishments and accreditations under her belt, Kim Cooper is the owner and senior instructor at Best Friends Dog Training. With 35 years of experience, Kim competes in obedience, agility, tracking, and other sports with her own dogs and specializes in training search-and-rescue dogs. Kim loves to foster the special bond that exists between a dog and its owner. Her goal is to use reward-based techniques and behavior modification strategies to teach owners to help their dogs become happy, well-behaved members of the family.</p>
              <h3 className="mb-4">Your Dog Behavior Tutors</h3>
            </div>
            <div className="col-12 col-lg-6 text-lg-start align-item-center mb-2">
              <div className="mb-2">
                <Image src={BrunoBakerImage} placeholder="blur" alt="dog-training expert, Bruno Baker" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
              <p className="lead"><strong>Bruno Baker</strong></p>
              <p>K9 Search and Rescue Specialist & Canine Educator</p>
              <p className="mb-0">Bruno got his first dog over 30 years ago, fulfilling a lifelong yearning for a canine partnership. He views working with dogs as an ongoing study of canine ethology, with the goal of becoming a better human teammate. After retiring from distinguished careers in the Royal Canadian Mounted Police and Royal Canadian Air Force, Bruno decided to bring his passion for dogs to a professional level. Today, he and his current partner, Mikaw, are dedicated to K9 Wilderness Search and Rescue. In addition to this full-time endeavor, Bruno finds great joy in sharing his knowledge with fellow dog owners and trainers, watching their partnerships with their canine companions grow. His teaching is deeply informed by years of experience as a civilian flight instructor, military pilot trainer, flight training program director, military flying school commander, and search and rescue trainer.</p>
            </div>
            <div className="col-12 col-lg-6 text-lg-start">
              <div className="mb-2">
                <Image src={SusanReadImage} placeholder="blur" alt="dog-training expert, Susan Read" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
              <p className="lead"><strong>Susan Read</strong></p>
              <p>Certified Dog Trainer</p>
              <p className="mb-0">Susan has been training dogs for over 35 years. She specializes in Search and Rescue (SAR) work, but Susan's experience extends to consultations, competitive obedience, rally and agility training as well. Susan has been teaching tracking for many years, and conducts workshops across Ontario. She has been involved with K9 SAR since 2000, and is now the head K9 trainer and handler with Georgian Bay SAR. Susan is also the Provincial K9 Coordinator and sits on the Ontario Search and Rescue Volunteer Association (OSARVA) Board of Directors. Susan is currently the only OPP/OSARVA certified dog handler in Central Ontario with her live find dog, Zena. She has also worked with Human Remains Detection K9 with her dog, Zappa, since 2014. As a former school teacher and a highly experienced dog training instructor, Susan looks forward to using her significant teaching experience to benefit QC's dog training and behavior students.</p>
            </div>
          </div>
        </div>
      </section>

      <GuaranteeSection className="bg-light" />

      <VirtualCommunitySection />

      <section>
        <div itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 mb-4">
                <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
                <Accordion>
                  <AccordionItem eventKey={eventKey++} heading="Do I need to have prior training or experience with dogs before taking this course?" isFAQ={true}>
                    <div className="row text-left">
                      <p>To enroll in the Dog Behavior course, you must first complete QC&apos;s Dog Trainer course or have equivalent experience working with dogs. This foundational course teaches the essential knowledge and skills needed to work safely with dogs.</p>
                      <p>After completing Dog Training, the Dog Behavior course allows you to advance your skills in behavioral analysis, problem-solving, and behavior modification techniques. For more information, <a href="https://calendly.com/qccareerschool/pet">book a call</a> with our friendly student advisors to find out if the Dog Behavior course is right for you.</p>
                    </div>
                  </AccordionItem>
                </Accordion>
                <Accordion>
                  <AccordionItem eventKey={eventKey++} heading="Why should I study dog behavior and behavior modification?" isFAQ={true}>
                    <div className="row text-left">
                      <p>Studying dog behavior and behavior modification equips you with the skills to understand why dogs act the way they do and to effectively address behavioral challenges, including separation anxiety, aggression, and reactivity. This expertise enables you to help any dog and their owner achieve better training outcomes.</p>
                      <p>Completing QC&apos;s Behavior Modification course positions you as a skilled, professional dog trainer, enhancing your credibility and making you more attractive to employers and clients.</p>
                    </div>
                  </AccordionItem>
                </Accordion>
                <Accordion>
                  <AccordionItem eventKey={eventKey++} heading="What methods do you teach as part of the dog behavior course?" isFAQ={true}>
                    <div className="row text-left">
                      <p>QC&apos;s Dog Behavior course follows the same science-based, positive reinforcement methods as QC&apos;s Dog Training program. Students learn to analyze a dog&apos;s behavior and choose the safest, most effective approach for each individual dog. QC always prioritizes force-free, humane techniques, ensuring the safety and well-being of both the dog and the handler throughout the course.</p>
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

export default DogBehaviorPage;
