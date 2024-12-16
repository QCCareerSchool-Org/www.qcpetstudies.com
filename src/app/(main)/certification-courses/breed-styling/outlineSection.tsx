import Image from 'next/image';
import type { FC } from 'react';

import OutlinePart1 from './part-1-anatomy.jpg';
import OutlinePart2 from './part-2-first-aid.jpg';
import OutlinePart3 from './part-3-grooming.jpg';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import { Bar } from '@/components/bar';

export const OutlineSection: FC = () => {
  let eventKey = 0;

  return (
    <section className="bg-lighter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-10-lg mb-4 text-center">
            <h2>Course <strong>Outline</strong></h2>
            <p className="lead">The Breed Styling Wokshop is split into three parts, each containing individual training units.</p>
            <p>You must complete a unit with a satisfactory grade before you can submit assignments for the next units.</p>
          </div>
        </div>
        <Accordion>
          <AccordionItem eventKey={eventKey++} heading="Part 1: Theoretical Foundations">
            <div className="row">
              <div className="col-12 col-lg-8">
                <p className="lead">In the first part of the course, you'll review your knowledge of dog anatomy, skincare, and dog behavior. You'll learn all about the basics of working with canines and keeping yourself safe in the grooming environment.</p>
                <Bar variant="primary" align="start" />
                <h4>Dog Anatomy</h4>
                <p>Learn how a dog's skeletal and muscular structure informs you on interpreting grooming patterns. You'll also discover the physical variations between breeds that define appropriate cut and styling options.</p>
                <h4>Dog Skincare and Esthetics</h4>
                <p>Examine hair types and learn how to work with owners to maintain healthy skin and hair. You'll also touch on skin condition symptoms, causes, and treatments. You can't diagnose skin conditions (that's left to veterinarians), but groomers play a role in identifying potential abnormalities during appointments.</p>
                <h4>Dog Behavior</h4>
                <p>Focus on dog behavior as well as understanding dog temperaments. You'll learn about reading physical distress signals and how to adapt your own behavior to ease them into the grooming procedure.</p>
                <h4>Personal Health and Safety</h4>
                <p className="mb-0">Prevent illness and injury to yourself by learning all about handling grooming tools, preventing muscle strain, and maintaining a clean workspace.</p>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <Image src={OutlinePart1} alt="Dog Anatomy" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </AccordionItem>
          <AccordionItem eventKey={eventKey++} heading="Part 2: Dog First Aid Course">
            <div className="row">
              <div className="col-12 col-lg-8">
                <p className="lead">The second part of the course covers foundational dog first aid training. Understand how to prevent illness and accidents and treat basic injuries in this condensed version of QC's Dog First Aid course.</p>
                <Bar variant="primary" align="start" />
                <h4>Safety Assessment and First Aid</h4>
                <p className="mb-0">Learn about pet afflictions and assessing symptoms. Then, learn how to properly check vitals, treat wounds, and perform rescue procedures.</p>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <Image src={OutlinePart2} alt="Safety Assessment and First Aid" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </AccordionItem>
          <AccordionItem eventKey={eventKey++} heading="Part 3: Practicum">
            <div className="row">
              <div className="col-12 col-lg-8">
                <p className="lead">The last third of the course is broken up into four units. Learn all about interpreting breed standards and applying them to a variety of breeds. You'll complete a series of practical assignments grooming each dog from start to finish. Be tested on how well you adhere to official breed standards to bring out a dog's best features.</p>
                <Bar variant="primary" align="start" />
                <h4>Groom a different dog for each unit</h4>
                <p>Prepare and groom the head, body, limbs, rear, and tail of a variety of breeds most often tested in a certification exam.</p>
                <ul>
                  <li>Terrier</li>
                  <li>Non-sporting breed</li>
                  <li>Mixed breed</li>
                </ul>
                <p className="mb-0">Complete the course by researching and grooming a breed of your own choice.</p>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <Image src={OutlinePart3} alt="Practicum" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
