import Link from 'next/link';
import type { FC } from 'react';

import { ComparisonBlurb } from './comparisonBlurb';
import { ComparisonTable } from './comparisonTable';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import type { Price } from '@/domain/price';

type Props = {
  dgPrice: Price;
  gtPrice: Price;
};

export const OutlineSection: FC<Props> = ({ dgPrice, gtPrice }) => {
  let eventKey = 0;

  return (
    <>
      <div id="outline" className="sectionAnchor" />
      <section className="bg-lighter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4 text-center">
              <h2>Course <strong>Outline</strong></h2>
              <p className="lead">The Grooming Technician course is split into 3 parts, each containing individual training units.</p>
              <p>You must complete a unit with a satisfactory grade before you can submit assignments for the next unit.</p>
            </div>
          </div>
          <Accordion>
            <AccordionItem eventKey={eventKey++} heading="Becoming a Grooming Technician">
              <p>The first units in this course will introduce you to the foundational knowledge you need to successfully work with dogs. In these units, you'll cover health and safety, basic dog anatomy, skincare, behavior, the tools of the trade and more.</p>
              <p>While you complete these units, we suggest that you start considering your grooming workspace so that you are prepared for the practical assignments later in the course. Unit C will be particularly helpful in selecting appropriate tools, equipment and products.</p>
              <p>It is also recommended that you start seeking out dog owners who are willing to let you use their dogs in practical assignments later in the course.</p>
              <p className="mb-0"><Link href="/certification-courses/grooming-technician/course-outline" className="link-primary">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Dog First Aid Course">
              <p>In order to provide you with the resources to learn your craft safely, your Grooming Technician course also comes with complimentary training on dog first aid. You&apos;ll learn about emergency situations that may occur in a grooming environment so that you&apos;ll be prepared to respond calmly and effectively in any emergency.</p>
              <p className="mb-0"><Link href="/certification-courses/grooming-technician/course-outline" className="link-primary">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Bathing and Brushing">
              <p>Once you understand the basics of dog grooming and dog first aid, you will move on to units that teach you the hands-on skills involved preparing for a groom. In these units, you'll cover essential tasks, including nail trimming, ear cleaning, brushing, de-matting, bathing, and drying. You'll study coat types and learn how to work with different dog breeds to keep each and every dog looking and feeling their best. You'll complete a number of basic practical assignments that will prepare you to start your practicum.</p>
              <p className="mb-0"><Link href="/certification-courses/grooming-technician/course-outline" className="link-primary">View a more detailed course syllabus</Link></p>
            </AccordionItem>
          </Accordion>
          <div className="mt-4">
            <ComparisonBlurb>
              <ComparisonTable gtPrice={gtPrice} dgPrice={dgPrice} />
            </ComparisonBlurb>
          </div>
        </div>
      </section>
    </>
  );
};
