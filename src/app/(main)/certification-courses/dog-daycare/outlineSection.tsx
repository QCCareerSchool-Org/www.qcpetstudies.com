import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import IntroductoryUnitsImage from './part-1.jpg';
import ActivitiesImage from './part-2.jpg';
import ServicesImage from './part-3.jpg';
import DogCareBusinessImage from './part-4.jpg';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';

export const CourseOutlineSection: FC = () => {
  let eventKey = 0;

  return (
    <section className="bg-lighter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4 text-center">
            <h2>Course <strong>Outline</strong></h2>
            <p className="lead">The Dog Daycare course is split into four main parts, each with individual training units designed to build your skills and confidence as a dog care provider.</p>
          </div>
        </div>
        <Accordion>
          <AccordionItem eventKey={eventKey++} heading="Part 1: Introductory Units">
            <div className="row">
              <div className="col-12 col-xl-8">
                <p>In the first part of your course, you&apos;ll build a foundation for your career in the pet industry. You&apos;ll discover the many opportunities available to you as a dog daycare provider. You might open a doggy daycare facility, offer dog-walking services or board dogs over night. You&apos;ll also learn all about the tools and supplies you&apos;ll need to safely provide these services. Of course, a strong understanding of the dogs themselves will be essential to your career as a dog daycare provider. In the introductory units of your course, you&apos;ll learn all about dog behavior and communication. You&apos;ll discover how a dog&apos;s breed, age and health can impact its behavior.</p>
                <p>With all this information, you&apos;ll feel confident and prepared when you care for dogs.</p>
                <p className="mb-0"><Link href="/certification-courses/dog-daycare/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
              </div>
              <div className="col-4 d-none d-xl-block">
                <Image src={IntroductoryUnitsImage} alt="two dogs sniffing each other in a park" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </AccordionItem>
          <AccordionItem eventKey={eventKey++} heading="Part 2: Activities with Dogs">
            <div className="row">
              <div className="col-12 col-xl-8">
                <p>Although caring for dogs is a big responsibility, it&apos;s also a lot of fun! You&apos;ll learn all about the activities you can perform with dogs to ensure they receive social, physical, emotional and cognitive stimulation at daycare. You&apos;ll study essential topics, from collection and drop-off services to the best locations to exercise dogs. You&apos;ll also learn how to plan fun activities that will engage your furry friends!</p>
                <p>At QC Pet Studies, the safety of dogs is of the utmost importance. You&apos;ll study the essential precautions you&apos;ll take to keep dogs safe. You&apos;ll be well prepared to provide every dog with an exciting, stimulating and safe experience as a dog daycare provider.</p>
                <p>Your clients will rest assured knowing their beloved pets will be returned happy and safe at the end of their stay with you.</p>
                <p className="mb-0"><Link href="/certification-courses/dog-daycare/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
              </div>
              <div className="col-4 d-none d-xl-block">
                <Image src={ActivitiesImage} alt="lady walking three dogs" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </AccordionItem>
          <AccordionItem eventKey={eventKey++} heading="Part 3: Developing Your Services">
            <div className="row">
              <div className="col-12 col-xl-8">
                <p>As a dog-care provider, you can offer a huge range of valuable services to pet owners. In this part of your course, you&apos;ll learn how to develop standard operating procedures to ensure that you are always providing the best care possible for your furry friends. With detailed procedures in place, you&apos;ll be prepared to handle any situation you might encounter. Every detail is important when you&apos;re caring for someone&apos;s pet. You&apos;ll also discover how you can enrich the dog daycare experience by offering supplementary services, including transportation, training or grooming.</p>
                <p>You&apos;ll stand out as the best dog daycare in town if dog owners know you can take care of all of their pets&apos; needs.</p>
                <p className="mb-0"><Link href="/certification-courses/dog-daycare/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
              </div>
              <div className="col-4 d-none d-xl-block">
                <Image src={ServicesImage} alt="lady removing a dog's collar at the beach" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </AccordionItem>
          <AccordionItem eventKey={eventKey++} heading="Part 4: Dog Daycare Business Training">
            <div className="row">
              <div className="col-12 col-xl-8">
                <p>Once you&apos;ve learned and practiced the skills you&apos;ll need to take care of dogs, you&apos;ll focus on developing your dog daycare business. In this optional part of your course, you&apos;ll learn how to turn your passion for working with dogs into a thriving career. You&apos;ll discover what it takes to start a business, from naming and registering your business, to selling your services. Honing these important business skills will help you to jumpstart your career and launch a successful business.</p>
                <p className="mb-0"><Link href="/certification-courses/dog-daycare/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
              </div>
              <div className="col-4 d-none d-xl-block">
                <Image src={DogCareBusinessImage} alt="man writing at a desk with a Jack Russel Terrier on his lap" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
