import { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import { BsBook } from 'react-icons/bs';

import { PageComponent } from '@/app/serverComponent';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/AccordionItem';
import { PriceSectionWithDiscount } from '@/components/PriceSectionWithDiscount';
import AssignmentBackground from '@/images/backgrounds/your-career-bg.jpg';
import IDGPCertificationLogo from '@/images/IDGP-certification-gold.svg';
import { lookupPrices } from '@/lib/lookupPrices';
import { Location } from '@/models/location';
import { Price } from '@/models/price';

export const courseCodes = [ 'dc' ];

export type Props = {
  location: Location;
  price: Price;
  enrollPath: string;
};

export const metadata: Metadata = {
  title: 'Dog Behavior Certification Course',
  description: '',
  alternates: {
    canonical: '/certification-courses/dog-behavior/course-preview',
  },
};

const BehaviorCoursePreviewPage: PageComponent = async () => {

  const price = await lookupPrices(courseCodes);

  return <>

    <section id="top" className="bg-dark">
      <Image
        src={AssignmentBackground}
        placeholder="blur"
        alt="dog getting a haircut"
        priority
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <BsBook className="h1 mb-3" />
            <h1 className="mb-4">Dog Behavior Certification Course</h1>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2>Congratulations on Choosing to Explore a Career as a <strong>Dog Behavior Specialist!</strong></h2>
            <p>There's never been a better time to become a behavior specialist and help dogs conquer some of their most troubling behaviors! Pet parents are desperate for specialized trainers who can <strong>use dog behavior modification strategies to</strong> help them overcome specific challenges and concerns with their pups. Whether it's helping a pup with separation anxiety or curbing leash reactivity on walks, you can be the specialist that helps dogs transition into the happy, fun loving family members they were meant to be!</p>
            <p>Are you ready to take your dog training skills to the next level? Does this sound like you?</p>
            <ul>
              <li>You love all dogs and already have some experience in training</li>
              <li>You're patient and work confidently under pressure</li>
              <li>You're able to interact with all types of dogs calmly and carefully</li>
              <li>You understand that dogs are individuals with their own needs and wants, and are willing to learn how to work with them</li>
              <li>ou're good with people too, and are eager to teach people how to communicate with their dogs</li>
            </ul>
            <p className="lead mb-0">If this list describes you in a nutshell, then you're in the right place!</p>
          </div>
          <div className="col-12 col-md-6">
            <div className="card bg-lighter border-lighter">
              <div className="card-body">
                <p className="card-text">QC's online <strong>dog behavior course</strong> will help you develop the <strong>specialized behavior modification and consultation</strong> skills you need to identify and change some of your pup clients' most disruptive behaviors. Developing your skills beyond dog training, you'll learn the entire behavior modification process from start to finish including how to deal with common concerns like anxiety, phobias, reactivity, and even aggression.</p>
                <p className="card-text">Even though this is an online course, you'll complete tons of hands-on assignments designed to enhance your training experience. You'll take the time to learn and develop a deep understanding of dog communication so you can then decipher the best methods to help any dog overcome their problem behaviors.</p>
                <p className="card-text">Whether your goal is to launch your own specialized dog training business or work for an established training school, you'll gain all the skills and knowledge you need to feel confident in your new career! QC's online dog training course will prepare you in every way for a successful career as a professional dog behavior specialist.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-navy">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-contents-center align-items-center">
          <div className="flex-shrink-0 mb-4 mb-md-0 me-md-4">
            <Image
              src={IDGPCertificationLogo as StaticImageData}
              width={200}
              height={200}
              alt="IDGP International Dog Grooming Professional logo"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div className="text-center text-md-start">
            <h2>Your <strong>Certification</strong></h2>
            <p className="lead mb-0">Upon graduation, you'll receive the International Dog Behavior Specialist™ (IDBS™) Certification. With your certification and professional title, you'll be ready to start your own business working in specialized training and behavior management!</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="text-center">
          <h2>Course <strong>Syllabus</strong></h2>
          <p className="lead">The Dog Grooming Course is split into five parts, each containing individual training units.</p>
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
      </div>
    </section>

    <PriceSectionWithDiscount courses={courseCodes} price={price} doubleGuarantee={true} />

    <section>
      <div className="container">
        <h2>Learn from Dog Training Experts</h2>
        <p>QC's behavior modification course was developed with the assistance of Kim Cooper.</p>
        <p>Kim Cooper is the owner and senior instructor at Best Friends Dog Training. Kim pursued her passion to become a professional dog trainer after earning a degree in aerospace engineering and serving as an officer in the Air Force for fourteen successful years. Now, with 35 years of training experience, Kim competes in obedience, agility, tracking, and other sports with her own dogs&mdash;all using motivational, reward-based training methods. In particular, Kim loves to foster the special partnership that exists between a working dog and its handler, and specializes in training search-and-rescue dogs. Kim and her dogs have earned many search-and-rescue certifications as well as obedience and agility titles.</p>
      </div>
    </section>
  </>;
};

export default BehaviorCoursePreviewPage;
