import Link from 'next/link';
import { FC, MouseEventHandler } from 'react';
import { Modal } from 'react-bootstrap';

import { Accordion } from '../../../components/accordion';
import { AccordionItem } from '../../../components/accordion/AccordionItem';
import { useToggle } from '../../../hooks/useToggle';
import { PriceResult } from '../../../models/price';
import { ComparisonTable } from './comparisonTable';

type Props = {
  dgPrice: PriceResult;
  gtPrice: PriceResult;
};

export const GroomingTechOutlineSection: FC<Props> = ({ dgPrice, gtPrice }) => {
  const [ popup, togglePopup ] = useToggle();

  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    togglePopup();
  };

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
          <Accordion className="mb-4">
            <AccordionItem heading="Introductory Units">
              <h4>Becoming a Grooming Technician</h4>
              <p>The first units in this course will introduce you to the foundational knowledge you need to successfully work with dogs. In these units, you'll cover health and safety, basic dog anatomy, skincare, behavior, the tools of the trade and more.</p>
              <p>While you complete these units, we suggest that you start considering your grooming workspace so that you are prepared for the practical assignments later in the course. Unit C will be particularly helpful in selecting appropriate tools, equipment and products.</p>
              <p>It is also recommended that you start seeking out dog owners who are willing to let you use their dogs in practical assignments later in the course.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem heading="Dog First Aid Course">
              <p>In order to provide you with the resources to learn your craft safely, your Grooming Technician course also comes with complimentary training on dog first aid. You&apos;ll learn about emergency situations that may occur in a grooming environment so that you&apos;ll be prepared to respond calmly and effectively in any emergency.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem heading="Bathing and Brushing">
              <p>Once you understand the basics of dog grooming and dog first aid, you will move on to units that teach you the hands-on skills involved preparing for a groom. In these units, you'll cover essential tasks, including nail trimming, ear cleaning, brushing, de-matting, bathing, and drying. You'll study coat types and learn how to work with different dog breeds to keep each and every dog looking and feeling their best. You'll complete a number of basic practical assignments that will prepare you to start your practicum.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem heading="Pet Cuts and Advanced Breed Styling">
              <p>Dog grooming as a profession requires a lot of background knowledge, but ultimately your success will depend on your ability to safely and skillfully groom dogs. You'll learn to complete the most popular pet cuts and advanced breed styles through a series of detailed instructional videos with certified Master Groomers.</p>
              <p>You'll complete practicum units designed to help you hone your technique and receive feedback on these essential skills. The units within the practicum involve practical assignments that draw on the content you've mastered throughout the course.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more detailed course syllabus</Link></p>
            </AccordionItem>
            <AccordionItem heading="Dog Grooming Business Essentials">
              <h4>(Optional Unit)</h4>
              <p>After completing your practicum you can choose to complete the optional Business Essentials unit. This unit will help you develop the skills you need to run your own successful dog grooming business, from building your brand to constructing a business plan to setting your prices.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more detailed course syllabus</Link></p>
            </AccordionItem>
          </Accordion>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 text-center">
              <p className="lead">Do you need help deciding between the Grooming Technician and Dog Grooming courses? View the benefits of each in the <a onClick={handleClick} href="#" className="link-primary">comparison chart</a>.</p>
              <button onClick={handleClick} className="btn btn-primary btn-lg">View Comparison Chart</button>
            </div>
          </div>
        </div>
      </section>
      <Modal size="xl" show={popup} onHide={togglePopup}>
        <Modal.Header closeButton>Comparison Chart</Modal.Header>
        <Modal.Body>
          <ComparisonTable gtPrice={gtPrice} dgPrice={dgPrice} />
        </Modal.Body>
      </Modal>
    </>
  );
};
