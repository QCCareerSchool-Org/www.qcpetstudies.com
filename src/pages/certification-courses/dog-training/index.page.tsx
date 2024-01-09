import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactEventHandler, useEffect, useState } from 'react';
import { BsCardChecklist, BsPeopleFill } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import { Accordion } from '../../../components/accordion';
import { AccordionItem } from '../../../components/accordion/AccordionItem';
import { DTTutorSection } from '../../../components/DTTutorSection';
import { GuaranteeSection } from '../../../components/GuaranteeSection';
import { DefaultLayout } from '../../../components/layouts/DefaultLayout';
import { PriceSection } from '../../../components/PriceSection';
import { SEO } from '../../../components/SEO';
import { usePrevious } from '../../../hooks/usePrevious';
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import DTBackgroundImage from '../../../images/backgrounds/australian-shepherd-attentive.jpg';
import GuaranteeIcon from '../../../images/course-overview-icons/guarantee.svg';
import OutlineIcon from '../../../images/course-overview-icons/outline.svg';
import TutorIcon from '../../../images/course-overview-icons/tutor.svg';
import IntroductoryUnitsImage from '../../../images/dt-outline-part-1-image.jpg';
import ApplyingTrainingPrinciplesImage from '../../../images/dt-outline-part-2-image.jpg';
import TeachingPeopleImage from '../../../images/dt-outline-part-3-image.jpg';
import DogTrainingBusinessImage from '../../../images/dt-outline-part-4-image.jpg';
import CPDTPrepImage from '../../../images/german-shepherd-puppy-sitting.jpg';
import CertificationGoldImage from '../../../images/IDTP-certification-yellow.svg';
import { formatPrice } from '../../../lib/formatPrice';
import { gaEvent } from '../../../lib/ga';
import { getLocation } from '../../../lib/getLocation';
import { lookupPrices } from '../../../lib/lookupPrices';
import type { Location } from '../../../models/location';
import type { PriceResult } from '../../../models/price';
import type { NextPageWithLayout } from '../../_app.page';
import KimCooperImage from './kim-cooper.jpg';

const headerIconSize = 20;
const iconSize = 36;

const courseCodes = [ 'dt' ];

type Props = {
  location: Location;
  price: PriceResult;
};

const DogTrainingPage: NextPageWithLayout<Props> = ({ price }) => {
  const screenWidth = useScreenWidth();
  const [ videoPercentage, setVideoPercentage ] = useState(0);

  const mdOrGreater = screenWidth >= 768;
  const lgOrGreater = screenWidth >= 992;

  const md = mdOrGreater && !lgOrGreater;

  const videoPlay: ReactEventHandler<HTMLVideoElement> = () => {
    // eslint-disable-next-line camelcase
    gaEvent('Play', { event_category: 'Video', event_label: 'DT Trailer' });
  };

  const videoEnded: ReactEventHandler<HTMLVideoElement> = () => {
    // eslint-disable-next-line camelcase
    gaEvent('End', { event_category: 'Video', event_label: 'DT Trailer' });
  };

  const videoUpdate: ReactEventHandler<HTMLVideoElement> = e => {
    const target = e.target as HTMLVideoElement;
    const percentage = Math.round((target.currentTime / target.duration) * 100);
    setVideoPercentage(percentage);
  };

  const prevVideoPercentage = usePrevious<number>(videoPercentage);

  useEffect(() => {
    if (typeof prevVideoPercentage === 'undefined') {
      return;
    }
    if (videoPercentage >= 100 && prevVideoPercentage < 100) {
      // eslint-disable-next-line camelcase
      gaEvent('100%', { event_category: 'Video', event_label: 'DT Trailer' });
    } else if (videoPercentage >= 75 && prevVideoPercentage < 75) {
      // eslint-disable-next-line camelcase
      gaEvent('75%', { event_category: 'Video', event_label: 'DT Trailer' });
    } else if (videoPercentage >= 50 && prevVideoPercentage < 50) {
      // eslint-disable-next-line camelcase
      gaEvent('50%', { event_category: 'Video', event_label: 'DT Trailer' });
    } else if (videoPercentage >= 25 && prevVideoPercentage < 25) {
      // eslint-disable-next-line camelcase
      gaEvent('25%', { event_category: 'Video', event_label: 'DT Trailer' });
    }
  }, [ videoPercentage, prevVideoPercentage ]);

  return <>
    <SEO
      title="Dog Training Course"
      description="Become a Professional Dog Trainer with QC's online dog training course. Study Online with Hands-On Learning!"
      canonical="/certification-courses/dog-training"
    />

    <section id="top" className="bg-dark">
      <Image
        src={DTBackgroundImage}
        placeholder="blur"
        alt="Attentive Australian Shepherd Dog"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <div className="row mb-4">
          <div className="mb-4">
            <Image
              src={CertificationGoldImage}
              alt="International Dog Training Professional IDTP Certification"
              height="125"
              width="125"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <h1>Dog Training Course</h1>
          {price && price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
          <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
          <a href="https://enroll.qcpetstudies.com?c=dt"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-6 d-flex">
            <div className="col text-uppercase">
              <a href="#outline"><Image
                src={OutlineIcon}
                alt="outline"
                width={headerIconSize}
                height={headerIconSize}
                style={{ maxWidth: '100%', height: 'auto' }}
              /></a>
              <p><strong>Outline</strong></p>
            </div>
            <div className="col text-uppercase">
              <a href="#guarantee"><Image
                src={GuaranteeIcon}
                alt="play button"
                width={headerIconSize}
                height={headerIconSize}
                style={{ maxWidth: '100%', height: 'auto' }}
              /></a>
              <p><strong>Guarantee</strong></p>
            </div>
            <div className="col text-uppercase">
              <a href="#tutors"><Image
                src={TutorIcon}
                alt="play button"
                width={headerIconSize}
                height={headerIconSize}
                style={{ maxWidth: '100%', height: 'auto' }}
              /></a>
              <p><strong>Tutors</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 mb-4">
            <div className="ratio ratio-16x9">
              <video onTimeUpdate={videoUpdate} onEnded={videoEnded} onPlay={videoPlay} controls preload="metadata" poster="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-trailer-poster.png">
                <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-trailer.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="col-12 col-lg-10">
            <h2>Become a <strong>Certified Dog Trainer</strong></h2>
            <p className="lead"><strong>International Dog Training Professional&trade;</strong> | <i>IDTP&trade;</i></p>
            <p>Dog training is a booming industry! Owners need help to turn their dogs into well-behaved members of the family, and they want someone qualified to help them achieve this goal.  Whether you want to work in a training school, launch your own dog training business, or freelance as a private dog trainer, you'll graduate with all the knowledge and skills you need to succeed in the dog training industry!</p>
            <p className="lead mb-0">Are you ready to start an amazing career?</p>
          </div>
        </div>
      </div>
    </section>

    <PriceSection courses={courseCodes} price={price} doubleGuarantee={true} />

    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4">
            <h2 className="mb-2 mb-md-4">Included in <strong>Your Course</strong></h2>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="courseContentIcon"><BsCardChecklist size={iconSize} /></div>
            <h3>Newest{md ? <br /> : ' '}Course Materials</h3>
            <p className="mb-0">Your course materials are always available online and are always being updated with the latest science-based industry standards. Refer to your updated training guides throughout your career!</p>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="courseContentIcon"><BsPeopleFill size={iconSize} /></div>
            <h3>Personalized{md ? <br /> : ' '}Feedback</h3>
            <p className="mb-0">Just because you're learning online doesn't mean you're learning alone. You'll receive personalized audio feedback from your tutor on every dog training assignment you submit. Use this feedback to improve and succeed!</p>
          </div>
          <div className="col-12 col-md-4">
            <div className="courseContentIcon"><IoMdInfinite size={iconSize} /></div>
            <h3>Lifetime{md ? <br /> : ' '}Access</h3>
            <p className="mb-0">Once you're a member of the QC family you'll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
          </div>
        </div>
      </div>
    </section>

    <div id="outline" className="sectionAnchor" />
    <section className="bg-lighter">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col12 col-lg-10 text-center">
            <h2>Dog Training Course <strong>Outline</strong></h2>
            <p className="lead mb-0">The Dog Training Course is split into four parts, each containing individual training units.</p>
          </div>
        </div>
        <Accordion>
          <AccordionItem heading="Introductory Units">
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-7">
                <p>Before you learn about how to train dogs, you have to learn about dogs. This includes breed types and characteristics, how dogs communicate with each other and with humans, what constitutes normal and abnormal canine behaviors, and&mdash;most importantly&mdash;how dogs actually learn. Once you become an expert in canine behavior and communication, you'll be in excellent shape to start working with dogs to teach new behaviors and correct unwanted behaviors!</p>
                <p>What you'll learn:</p>
                <ul>
                  <li>guiding principles of dog training</li>
                  <li>fundamentals of safe training</li>
                  <li>ethology</li>
                  <li>stages of development</li>
                  <li>socialization stages</li>
                  <li>canine communication</li>
                  <li>calming signals</li>
                  <li>fear responses</li>
                  <li>problem solving</li>
                  <li>learning theory</li>
                  <li>applying learning theory</li>
                </ul>
                <p className="mb-0"><Link href="/certification-courses/dog-training/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
              </div>
              {lgOrGreater && (
                <div className="col-6 col-xl-5">
                  <Image
                    src={IntroductoryUnitsImage}
                    alt="Dog runing"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
          </AccordionItem>
          <AccordionItem heading="Applying Training Principles">
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-7">
                <p>Now that you have a deep understanding of how dogs learn and communicate, you're ready to start applying training techniques to teach new behaviors and address unwanted behaviors. This course teaches scientifically-proven techniques and methods based on learning theory. You'll learn how to apply classical and operant conditioning principles to any type of training situation. Always remember: There is no magic formula that works for every dog, but every dog has a formula that will work for them.</p>
                <p>What you'll learn:</p>
                <ul>
                  <li>training methods
                    <ul>
                      <li>luring</li>
                      <li>shaping</li>
                      <li>targeting</li>
                      <li>modelling</li>
                      <li>capturing</li>
                      <li>mimicry</li>
                    </ul>
                  </li>
                  <li>motivations</li>
                  <li>reinforcement schedules</li>
                  <li>training tools</li>
                  <li>addressing unwanted behaviors</li>
                </ul>
                <p className="mb-0"><Link href="/certification-courses/dog-training/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
              </div>
              {lgOrGreater && (
                <div className="col-6 col-xl-5">
                  <Image
                    src={ApplyingTrainingPrinciplesImage}
                    alt="Dog learning from human"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
          </AccordionItem>
          <AccordionItem heading="Teaching People">
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-7">
                <p>A dog trainer's job isn't just to train dogs. As a trainer a big part of your job will be to teach people how to train their own dogs!  This requires a unique set of skills that you'll have to develop. You have to understand how people learn and how to communicate your expertise to dog owners who are looking for help. This part of the dog trainer course will help you learn those skills!</p>
                <p>What you'll learn:</p>
                <ul>
                  <li>how to work as a trainer
                    <ul>
                      <li>facilitating learning for clients</li>
                      <li>teaching private lessons</li>
                      <li>teaching group classes</li>
                    </ul>
                  </li>
                  <li>teaching skills
                    <ul>
                      <li>strategies for teaching people</li>
                      <li>communicating with dog owners</li>
                      <li>preparing yourself for working with clients</li>
                    </ul>
                  </li>
                </ul>
                <p className="mb-0"><Link href="/certification-courses/dog-training/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
              </div>
              {lgOrGreater && (
                <div className="col-6 col-xl-5">
                  <Image
                    src={TeachingPeopleImage}
                    alt="person training dog"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
          </AccordionItem>
          <AccordionItem heading="Starting your Dog Training Business">
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-7">
                <p>You've learned and practiced all the skills you need to successfully work as a dog trainer. Now it's time to turn your finely honed skills into a business! The business training offered in this course is optional. However, this training will be hugely beneficial to your career if you intend to start your own training business, or if you're looking to get a job working for an established trainer.</p>
                <p>What you'll learn:</p>
                <ul>
                  <li>how to get your business started</li>
                  <li>choosing a name for your business</li>
                  <li>business insurance requirements and recommendations</li>
                  <li>creating a business plan</li>
                  <li>marketing techniques</li>
                  <li>selling your services</li>
                </ul>
                <p className="mb-0"><Link href="/certification-courses/dog-training/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
              </div>
              {lgOrGreater && (
                <div className="col-6 col-xl-5">
                  <Image
                    src={DogTrainingBusinessImage}
                    alt="person working on laptop"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
          </AccordionItem>
          <AccordionItem heading="CPDT Exam Prep">
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-7">
                <p>Many professional dog trainers strive to pass the Certified Professional Dog Trainer (CPDT) exam from the Certification Council for Professional Dog Trainers. The CPDT is the gold-standard for dog trainers who have the knowledge and skills to train dogs using scientifically-proven methods. Your QC Dog training course teaches you everything you need to know to pass your CPDT exam. As an added bonus, you have access to an extra optional unit to help prepare you to write the CPDT exam! </p>
                <p>This optional unit includes:</p>
                <ul>
                  <li>Information about the Certified Professional Dog Trainers (CPDT) Exam</li>
                  <li>Useful tips to help you prepare for your exam</li>
                  <li>A practice quiz to help make sure you're ready!</li>
                </ul>
                <p className="mb-0"><Link href="/certification-courses/dog-training/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
              </div>
              {lgOrGreater && (
                <div className="col-6 col-xl-5">
                  <Image
                    src={CPDTPrepImage}
                    alt="German Shepherd puppy"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    <DTTutorSection />

    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2 className="h1">Advanced Career Path</h2>
            <h3 className="h2">Dog Behavior Certification Course</h3>
            <p>Would you like to upgrade your dog training education? Learn the behavior modification and consultation skills you need to identify and change your pup clients' most disruptive behaviors. You'll build on your foundation in dog training and learn how to deal with advanced concerns like anxiety, phobias, reactivity, and even aggression.</p>
            <p>You'll complete loads of hands-on assignments designed to enhance your training experience. You'll take the time to learn and develop a deeper understanding of dog communication so you can effectively decipher the best methods to help any dog overcome their problem behaviors.</p>
            <p className="fw-bold">Hear why instructor Kim Cooper believes the Behavior Modification course is a great way to advance your dog-training career.</p>
            <video src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/why-should-students-study-training-and-behavior-modification.mp4" poster={KimCooperImage.src} controls className="w-100 img-fluid mb-3" />
            <p>Whether your goal is to launch your own business or work for an established training school, you'll gain all the skills and knowledge you need to feel confident in your new career!  QC's advanced online dog behavior course teaches specialized behavior modification skills so you'll be ready to help any dog that comes your way.</p>
            <p className="fst-italic">Please note, Dog Behavior is an advanced certification program and requires students to have successfully completed QC's Dog Training course as a prerequisite.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="text-center">
          <h2>Dog Behavior Course <strong>Outline</strong></h2>
          <p className="lead">The Dog Behavior Course is split into five parts, each containing individual training units.</p>
          <p className="mb-4">You must complete a unit with a satisfactory grade before you can submit assignments for the next units.</p>
        </div>
        <Accordion>
          <AccordionItem heading="Introductory Units">
            <p>You have to learn about dogs and dog behavior before you can learn how to modify dog behavior. In the introductory units of this course, you'll see how dogs communicate with each other and with humans and the difference between behaviors motivated by logic and behaviors driven by emotions. Once you can identify fear-based behaviors, you'll have a foundation for learning how to change a dog's emotional reactions and behaviors.</p>
            <p>What you'll learn about:</p>
            <ul className="mb-0">
              <li>fundamentals of safe training</li>
              <li>communication signals</li>
              <li>fear responses</li>
              <li>first aid for dogs</li>
              <li>body language</li>
              <li>learning theory</li>
              <li>classical and operant conditioning</li>
            </ul>
          </AccordionItem>
          <AccordionItem heading="The Behavior Modification Process">
            <p>Consulting with clients requires you to hone your communication and listening skills. In these lessons, you'll bring your knowledge of dog body language into the context of dog assessment. QC Pet Studies expert Kim Cooper will demonstrate how a real consultation takes place, showing you how to interview clients and identify the cause of a dog's behavior. She will also discuss the basics of delivering treatment plans, so your clients can train their dogs at home.</p>
            <p>What you'll learn about:</p>
            <ul className="mb-0">
              <li>assessing dog behavior</li>
              <li>working with a dog's threshold</li>
              <li>delivering a training plan</li>
              <li>creating a written report</li>
              <li>identifying alarm barking</li>
            </ul>
          </AccordionItem>
          <AccordionItem heading="Anxiety">
            <p>You will frequently encounter dogs with behaviors that stem from anxiety. Using the information in these lessons you'll be able to identify the differences between general anxiety, stimulus anxiety and over-stimulation. You'll also learn how to develop treatment strategies for dogs suffering from obsessive-compulsive disorders and learned helplessness.</p>
            <p>What you'll learn about:</p>
            <ul className="mb-0">
              <li>dog development and anxiety</li>
              <li>the difference between fear and anxiety</li>
              <li>obsessive-compulsive disorders in dogs</li>
              <li>common phobias</li>
              <li>strategies for learned helplessness</li>
            </ul>
          </AccordionItem>
          <AccordionItem heading="Separation Anxiety">
            <p>Separation anxiety is one of the most common forms of anxiety among dogs. Separation anxiety is also one of the easiest behaviors to identify. This part of the course will help you identify separation anxiety from simply hearing the client's description of the behavior, allowing you to move on to strategize solutions.</p>
            <p>What you'll learn about:</p>
            <ul className="mb-0">
              <li>documenting separation anxiety</li>
              <li>misconceptions about separation anxiety</li>
              <li>medical intervention</li>
            </ul>
          </AccordionItem>
          <AccordionItem heading="Aggression">
            <p>In this unit, you'll have the opportunity to watch QC Pet Studies expert Kim Cooper interview dog owners and assesses dogs struggling with reactivity and aggression. You'll watch dogs displaying common signs of reactivity, conflict aggression and anxiety. Kim Cooper will show you how to talk with clients and gather information through a consultation.</p>
            <p>What you'll learn about:</p>
            <ul className="mb-0">
              <li>how to identify dogs with
                <ul>
                  <li>dog reactivity</li>
                  <li>conflict aggression</li>
                  <li>anxiety</li>
                  <li>alarm barking</li>
                </ul>
              </li>
              <li>How to safely assess dogs that show aggression</li>
            </ul>
          </AccordionItem>
          <AccordionItem heading="Teaching Clients">
            <p>Behavior consultants do not modify dog behavior—consultants give their clients the tools to modify the behavior of their dogs at home. This part of the course helps you demonstrate what you've learned about a dog's behavioral issues to potential clients. You'll also have an opportunity to practice the consultation process on your own with a practice client and dog.</p>
            <p>What you'll learn about:</p>
            <ul className="mb-0">
              <li>different learning styles</li>
              <li>problem-solving</li>
              <li>how to deal with challenges clients</li>
              <li>creating a secure consulting environment</li>
              <li>working safely with dogs</li>
              <li>assessing dogs at the client's home</li>
            </ul>
          </AccordionItem>
          <AccordionItem heading="Business Unit">
            <p>You have learned and practiced the skills you need to offer behavior consultations! This optional business unit aims to provide you with a general foundation to launch your own business or work with an established consultant.</p>
            <p>What you'll learn about:</p>
            <ul className="mb-0">
              <li>how to get your business started</li>
              <li>choosing a name for your business</li>
              <li>business insurance requirements and recommendations</li>
              <li>creating a business plan</li>
              <li>marketing techniques</li>
              <li>selling your services</li>
            </ul>
          </AccordionItem>
        </Accordion>
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2 className="h3">Double Certification</h2>
            <p>Upon graduation, you'll receive the International Dog Training Professional&trade; (IDTP&trade;) and the International Dog Behavior Specialist&trade; (IDBS&trade;) certifications. With your dual certifications, you'll be ready to start your own business working in specialized training and behavior management.</p>
          </div>
        </div>
      </div>
    </section>

    <GuaranteeSection className="bg-light" />
  </>;
};

const FooterCTA: FC = () => (
  <>
    <div className="row align-items-center">
      <div className="col-12 col-lg-9 col-xl-8 mb-4 mb-lg-0 text-center text-lg-start">
        <h2>Ready to Launch Your <strong>Training Career?</strong></h2>
        <p className="lead mb-0">Get 50% off the Dog Behavior course when you enroll in Dog Training.</p>
      </div>
      <div className="col-12 col-lg-3 text-center text-lg-end text-xl-center">
        <a href="https://enroll.qcpetstudies.com/?c=dt&c=ds"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
      </div>
    </div>
  </>
);

DogTrainingPage.getLayout = page => <DefaultLayout footerCTA={<FooterCTA />}>{page}</DefaultLayout>;

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const location = await getLocation(context);
  const price = await lookupPrices(courseCodes, location.countryCode, location.provinceCode);
  return { props: { location, price } };
};

export default DogTrainingPage;
