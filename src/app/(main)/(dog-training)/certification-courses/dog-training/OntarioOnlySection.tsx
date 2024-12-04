import type { FC } from 'react';

import KimCooperImage from './kim-cooper.jpg';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import { getData } from '@/lib/getData';

export const OntarioOnlySection: FC = () => {
  let eventKey = 0;
  const { countryCode, provinceCode } = getData();

  if (countryCode !== 'CA' || provinceCode !== 'ON') {
    return;
  }

  return (
    <>
      <section className="bg-light" id="behavior">
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

      <section id="behaviorOutline">
        <div className="container">
          <div className="text-center">
            <h2>Dog Behavior <strong>Course Outline</strong></h2>
            <p className="lead">The Dog Behavior Course is split into five parts, each containing individual training units.</p>
            <p className="mb-4">You must complete a unit with a satisfactory grade before you can submit assignments for the next units.</p>
          </div>
          <Accordion>
            <AccordionItem eventKey={eventKey++} heading="Introductory Units">
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
            <AccordionItem eventKey={eventKey++} heading="The Behavior Modification Process">
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
            <AccordionItem eventKey={eventKey++} heading="Anxiety">
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
            <AccordionItem eventKey={eventKey++} heading="Separation Anxiety">
              <p>Separation anxiety is one of the most common forms of anxiety among dogs. Separation anxiety is also one of the easiest behaviors to identify. This part of the course will help you identify separation anxiety from simply hearing the client's description of the behavior, allowing you to move on to strategize solutions.</p>
              <p>What you'll learn about:</p>
              <ul className="mb-0">
                <li>documenting separation anxiety</li>
                <li>misconceptions about separation anxiety</li>
                <li>medical intervention</li>
              </ul>
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Aggression">
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
            <AccordionItem eventKey={eventKey++} heading="Teaching Clients">
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
            <AccordionItem eventKey={eventKey++} heading="Business Unit">
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
    </>
  );
};
