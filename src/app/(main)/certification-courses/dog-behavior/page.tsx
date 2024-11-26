import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import DCBackgroundImage from './hero.jpg';
import { NewestCourseMaterialsSection } from './NewestCourseMaterialsSection';
import { PageComponent } from '@/app/serverComponent';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/AccordionItem';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { PriceSection } from '@/components/PriceSection';
import { SEO } from '@/components/SEO';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import GuaranteeIcon from '@/images/course-overview-icons/guarantee.svg';
import OutlineIcon from '@/images/course-overview-icons/outline.svg';
import TutorIcon from '@/images/course-overview-icons/tutor.svg';
import CertificationGoldImage from '@/images/IDBS-certification-gold.svg';
import ShannonNoonanImage from '@/images/shannon-noonan.jpg';
import SusanReadImage from '@/images/susan-read.jpg';
import { formatPrice } from '@/lib/formatPrice';
import { lookupPrices } from '@/lib/lookupPrices';

const headerIconSize = 20;

const courseCodes = [ 'dc' ];
const linkCourseCodes = [ 'dt', 'dc' ];

const DogBehaviorPage: PageComponent = async () => {

  const price = await lookupPrices(courseCodes);

  return <>
    <SEO
      title="Dog Behaviour Course"
      description="Become a Professional Dog Behavior Specialist with QC's online dog behavior course. Study online with hands-on learning!"
      canonical="/certification-courses/dog-training"
    />

    <section id="top" className="bg-dark">
      <Image
        src={DCBackgroundImage}
        placeholder="blur"
        alt=""
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
              src={CertificationGoldImage as StaticImageData}
              alt="International Dog Behavior Specialist IDBS Certification"
              height="125"
              width="125"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <h1>Dog Behavior Course</h1>
          {price && price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
          <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
          <a href="https://enroll.qcpetstudies.com?c=dt&c=dc"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-6 d-flex">
            <div className="col text-uppercase">
              <a href="#outline"><Image
                src={OutlineIcon as StaticImageData}
                alt="outline"
                width={headerIconSize}
                height={headerIconSize}
                style={{ maxWidth: '100%', height: 'auto' }}
              /></a>
              <p><strong>Outline</strong></p>
            </div>
            <div className="col text-uppercase">
              <a href="#guarantee"><Image
                src={GuaranteeIcon as StaticImageData}
                alt="play button"
                width={headerIconSize}
                height={headerIconSize}
                style={{ maxWidth: '100%', height: 'auto' }}
              /></a>
              <p><strong>Guarantee</strong></p>
            </div>
            <div className="col text-uppercase">
              <a href="#tutors"><Image
                src={TutorIcon as StaticImageData}
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
          <div className="col-12 col-lg-10">
            <h2>Become a <strong>Certified Dog Behavior Specialist</strong></h2>
            <p className="lead"><strong>International Dog Behavior Specialist&trade;</strong> | <i>IDBS&trade;</i></p>
            <p>There's never been a better time to become a behavior specialist and help dogs conquer some of their most troubling behaviors! Pet parents are desperate for specialized trainers who can help them overcome specific challenges and concerns with their pups. Whether it's helping a pup with separation anxiety or curbing leash reactivity on walks, you can be the specialist that helps dogs transition into the happy, fun loving family members they were meant to be!</p>
            <p>Get your International Dog Behavior Specialist Certification in less than a year with QC's interactive online training. Study at your own pace. Watch instructional videos and complete hands-on assignments to hone your behavior modification skills. Graduate with all the knowledge and skills you need to succeed in the pet industry!</p>
            <p>Please note, Dog Behavior is an advanced certification program and requires students to have successfully completed <Link className="link-primary" href="/certification-courses/dog-training">QC's Dog Training course</Link> or similar training as a prerequisite. </p>
            <p className="lead mb-0">Are you ready to start an amazing career?</p>
          </div>
        </div>
      </div>
    </section>

    <PriceSection courses={linkCourseCodes} price={price} doubleGuarantee={true} />

    <NewestCourseMaterialsSection />

    <div id="outline" className="sectionAnchor" />
    <section className="bg-lighter">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col12 col-lg-10 text-center">
            <h2>Dog Behavior <strong>Course Outline</strong></h2>
            <p className="lead mb-0">The Dog Behavior Course is divided into seven parts, each containing individual training units. You must complete a unit with a satisfactory grade before you can submit assignments for the next units.</p>
          </div>
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
      </div>
    </section>

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
              <Image
                src={ShannonNoonanImage}
                placeholder="blur"
                alt="dog-training expert, Shannon Noonan"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <p className="lead"><strong>Shannon Noonan</strong></p>
            <p>Certified Dog Trainer (KPA-CTP, CPDT-KA)<br /><em>10 Years of Experience</em></p>
            <p className="mb-0">Shannon first started working with dogs when she started fostering with Ottawa Dog Rescue. Through this organization, Shannon adopted her first dog, Blue, a Great Dane/pointer mix. Shannon and Blue learned about formal dog training together. This pair went on to found the first official Therapy Dog program at Carleton University, a program that remains popular today. Now, Shannon is a Certified Professional Dog Trainer-Knowledge Assessed, and owns her own dog training business with her Dalmatian, Elroy. Shannon and Elroy share a passion for teaching other humans and dogs about training, and how to overcome canine behavioral issues. Shannon is excited to ignite this same passion for working with dogs in QC's dog training and behavior students.</p>
          </div>
          <div className="col-12 col-lg-6 text-lg-start">
            <div className="mb-2">
              <Image
                src={SusanReadImage}
                placeholder="blur"
                alt="dog-training expert, Susan Read"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <p className="lead"><strong>Susan Read</strong></p>
            <p>Certified Dog Trainer<br /><em>35 Years of Experience</em></p>
            <p className="mb-0">Susan has been training dogs for over 35 years. She specializes in Search and Rescue (SAR) work, but Susan's experience extends to consultations, competitive obedience, rally and agility training as well. Susan has been teaching tracking for many years, and conducts workshops across Ontario. She has been involved with K9 SAR since 2000, and is now the head K9 trainer and handler with Georgian Bay SAR. Susan is also the Provincial K9 Coordinator and sits on the Ontario Search and Rescue Volunteer Association (OSARVA) Board of Directors. Susan is currently the only OPP/OSARVA certified dog handler in Central Ontario with her live find dog, Zena. She has also worked with Human Remains Detection K9 with her dog, Zappa, since 2014. As a former school teacher and a highly experienced dog training instructor, Susan looks forward to using her significant teaching experience to benefit QC's dog training and behavior students.</p>
          </div>
        </div>
      </div>
    </section>

    <GuaranteeSection className="bg-light" />

    <VirtualCommunitySection />
  </>;
};

export default DogBehaviorPage;
