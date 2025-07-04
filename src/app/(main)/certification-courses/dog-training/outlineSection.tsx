import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import CPDTPrepImage from './german-shepherd-puppy-sitting.jpg';
import IntroductoryUnitsImage from './part-1.jpg';
import ApplyingTrainingPrinciplesImage from './part-2.jpg';
import TeachingPeopleImage from './part-3.jpg';
import DogTrainingBusinessImage from './part-4.jpg';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';

type Props = {
  className?: string;
};

export const CourseOutlineSection: FC<Props> = ({ className }) => {
  let eventKey = 0;

  return (
    <section className={`bg-lighter ${className ? className : ''}`}>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col12 col-lg-10 text-center">
            <h2>Dog Training <strong>Course Outline</strong></h2>
            <p className="lead mb-0">The Dog Training Course is split into four parts, each containing individual training units.</p>
          </div>
        </div>
        <Accordion>
          <AccordionItem eventKey={eventKey++} heading="Introductory Units">
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
                <p className="mb-0"><Link href="/certification-courses/dog-training/course-outline">View a more-detailed course syllabus</Link></p>
              </div>
              <div className="col-6 col-xl-5 d-none d-lg-block">
                <Image src={IntroductoryUnitsImage} alt="Dog runing" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </AccordionItem>
          <AccordionItem eventKey={eventKey++} heading="Applying Training Principles">
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
                <p className="mb-0"><Link href="/certification-courses/dog-training/course-outline">View a more-detailed course syllabus</Link></p>
              </div>
              <div className="col-6 col-xl-5 d-none d-lg-block">
                <Image src={ApplyingTrainingPrinciplesImage} alt="Dog learning from human" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </AccordionItem>
          <AccordionItem eventKey={eventKey++} heading="Teaching People">
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
                <p className="mb-0"><Link href="/certification-courses/dog-training/course-outline">View a more-detailed course syllabus</Link></p>
              </div>
              <div className="col-6 col-xl-5 d-none d-lg-block">
                <Image src={TeachingPeopleImage} alt="person training dog" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </AccordionItem>
          <AccordionItem eventKey={eventKey++} heading="Starting your Dog Training Business">
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
                <p className="mb-0"><Link href="/certification-courses/dog-training/course-outline">View a more-detailed course syllabus</Link></p>
              </div>
              <div className="col-6 col-xl-5 d-none d-lg-block">
                <Image src={DogTrainingBusinessImage} alt="person working on laptop" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </AccordionItem>
          <AccordionItem eventKey={eventKey++} heading="CPDT Exam Prep">
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-7">
                <p>Many professional dog trainers strive to pass the Certified Professional Dog Trainer (CPDT) exam from the Certification Council for Professional Dog Trainers. The CPDT is the gold-standard for dog trainers who have the knowledge and skills to train dogs using scientifically-proven methods. Your QC Dog training course teaches you everything you need to know to pass your CPDT exam. As an added bonus, you have access to an extra optional unit to help prepare you to write the CPDT exam! </p>
                <p>This optional unit includes:</p>
                <ul>
                  <li>Information about the Certified Professional Dog Trainers (CPDT) Exam</li>
                  <li>Useful tips to help you prepare for your exam</li>
                  <li>A practice quiz to help make sure you're ready!</li>
                </ul>
                <p className="mb-0"><Link href="/certification-courses/dog-training/course-outline">View a more-detailed course syllabus</Link></p>
              </div>
              <div className="col-6 col-xl-5 d-none d-lg-block">
                <Image src={CPDTPrepImage} alt="German Shepherd puppy" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
