import type { Metadata } from 'next';
import { FaBars } from 'react-icons/fa';

import { UnitA } from './unitA';
import { UnitB } from './unitB';
import { UnitC } from './unitC';
import { UnitD } from './unitD';
import { UnitE } from './unitE';
import { UnitF } from './unitF';
import type { PageComponent } from '@/app/serverComponent';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import { BackgroundImage } from '@/components/backgroundImage';
import CourseOutlineBackground from '@/images/backgrounds/aki-with-man.jpg';
import CalendarIcon from '@/images/calendar.svg';
import TimeIcon from '@/images/clock.svg';

const iconSize = 50;

export const metadata: Metadata = {
  title: 'Dog Daycare Course Outline',
  description: '',
  alternates: { canonical: '/certification-courses/dog-daycare/course-outline' },
};

const DDCourseOutlinePage: PageComponent = () => {
  let eventKey = 0;

  return (
    <>
      <section className="bg-dark">
        <BackgroundImage src={CourseOutlineBackground} priority />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <FaBars size={iconSize} className="mb-2" />
              <h1 className="fw-normal">Dog Care<br /><strong>Course Outline</strong></h1>
              <p className="lead mb-0">Here&apos;s a detailed outline of the entire online dog care course offered by QC Pet Studies, including the length of each unit and any special considerations you&apos;ll need to complete each unit&apos;s assignments.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex mb-4 mb-lg-0">
              <div className="card">
                <div className="card-body">
                  <div className="mb-2">
                    <TimeIcon width={iconSize} height={iconSize} alt="Clock Icon" style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                  <p className="card-text">The course should take about <strong>20 hours</strong> to study and complete assignments from start to finish. This time does not include the time you will take to practice and develop your skills before you complete an assignment.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex">
              <div className="card">
                <div className="card-body">
                  <div className="mb-2">
                    <CalendarIcon width={iconSize} height={iconSize} alt="Calendar Icon" style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                  <p className="card-text">On average, most QC Students work on their course for a few hours per week, and complete the online dog training course within <strong>three to six months</strong>. You&apos;ll have up to two years to complete the program&mdash;lots of time!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lighter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-5 text-center">
              <h2>Unit-by-Unit Breakdown</h2>
              <p className="mb-0">Below is an outline of each unit of the online dog care course. Expand each section to find out what you&apos;ll learn in each unit.</p>
            </div>
          </div>
          <Accordion>
            <AccordionItem eventKey={eventKey++} heading="Unit A">
              <UnitA />
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Unit B">
              <UnitB />
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Unit C">
              <UnitC />
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Unit D">
              <UnitD />
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Unit E">
              <UnitE />
            </AccordionItem>
            <AccordionItem eventKey={eventKey++} heading="Unit F">
              <UnitF />
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default DDCourseOutlinePage;