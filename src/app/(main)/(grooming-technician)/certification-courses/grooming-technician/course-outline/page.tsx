import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

import FirstAidCourse from './_images/first-aid-for-groomers.jpg';
import UnitAImage from './_images/unit-a.jpg';
import UnitBImage from './_images/unit-b.jpg';
import UnitCImage from './_images/unit-c.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import { BackgroundImage } from '@/components/backgroundImage';
import CourseOutlineBackground from '@/images/backgrounds/course-outline.jpg';
import CalendarIcon from '@/images/calendar.svg';
import TimeIcon from '@/images/clock.svg';

const iconSize = 50;

export const metadata: Metadata = {
  title: 'Grooming Technician Course Outline',
  alternates: { canonical: '/certification-courses/grooming-technician/course-outline' },
  description: 'Become a certified grooming technician with QC\'s interactive online course. Get started today!',
};

const GroomingTechCourseOutlinePage: PageComponent = () => {
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
              <h1 className="fw-normal">Grooming Technician<br /><strong>Course Outline</strong></h1>
              <p className="lead mb-0">Here's a detailed outline of the entire online Grooming Technician course offered by QC Pet Studies, including the length of each unit and the materials/dogs required to complete your assignments.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex mb-4 mb-lg-0">
              <div className="card">
                <div className="card-body">
                  <div className="mb-2">
                    <TimeIcon width={iconSize} height={iconSize} alt="clock icon" style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                  <p>The course should take between <strong>45 and 80 hours</strong> to study and complete assignments from start to finish. This time does not include the time you will take to practice and develop your skills before you complete an assignment.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex">
              <div className="card">
                <div className="card-body">
                  <div className="mb-2">
                    <CalendarIcon width={iconSize} height={iconSize} alt="calendar icon" style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                  <p>On average, most QC students work on their course for a few hours per week, and complete the online Grooming Tech course within about <strong>6 months.</strong>  You'll have up to two years to complete the program, so lots of time!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="alert alert-primary mb-0">
            <strong><i>Note:</i></strong> Course and unit times indicated on this page are approximate. Since this is a self-paced course, students take as much time as they need to practice their skills and complete each unit.
          </div>
        </div>
      </section>

      <section className="bg-lighter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4 text-center">
              <h2 className="mb-4">Unit-by-Unit Breakdown</h2>
              <p className="mb-0">Below is an outline of each unit of the online Grooming Technician course. Expand each section to find out what you'll learn in each unit, along with each unit's expected length and the required dogs/equipment to complete your assignments.</p>
            </div>
            <div className="col-12 col-xl-10 col-xxl-9">
              <Accordion>
                <AccordionItem eventKey={eventKey++} heading="Unit A">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <Image
                        src={UnitAImage}
                        className="mb-4"
                        alt="groomer examining a dog's coat"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <p className="mb-0">In the first unit of the Grooming Technician course, you'll meet your tutor and start learning about the fundamentals of the grooming industry. This introductory unit includes theoretical studies on the history of dog grooming, and how to protect your health & safety when you work with dogs. You'll also learn about dog anatomy in great detail, and you'll start learning about skincare and esthetics.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="alert alert-primary">Unit Total: 2 to 4 Hours</div>
                      <table className="unitStatsTable">
                        <tbody>
                          <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                          <tr><th scope="row">Videos:</th><td>2 (15 minutes)</td></tr>
                          <tr><th scope="row">Assignments:</th><td>4 (1 to 2 hours)</td></tr>
                        </tbody>
                      </table>
                      <hr />
                      <p className="lead">Required Grooming Equipment: None</p>
                      <p className="lead mb-0">Required Dogs: One (any breed)</p>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit B">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <Image
                        src={UnitBImage}
                        className="mb-4"
                        alt="groomer combing a dog's head"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <p className="mb-0">In this second unit, you'll focus on how to work with dogs in a grooming environment. You'll learn about dog behaviors and temperaments, and you'll find out more about how dogs learn and communicate with humans. You'll then learn about how you can keep the dog and yourself safe during a grooming appointment.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="alert alert-primary">Unit Total: 2 to 5 Hours</div>
                      <table className="unitStatsTable">
                        <tbody>
                          <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                          <tr><th scope="row">Videos:</th><td>2 (45 minutes)</td></tr>
                          <tr><th scope="row">Assignments:</th><td>4 (1 to 3 hours)</td></tr>
                        </tbody>
                      </table>
                      <hr />
                      <p className="lead">Required Grooming Equipment: None</p>
                      <p className="lead mb-0">Required Dogs: One (any breed)</p>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit C">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <Image
                        src={UnitCImage}
                        className="mb-4"
                        alt="assorted dog grooming tools"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <p className="mb-0">The third unit will help you become intimately familiar with your grooming tools. You'll learn all about brushes, combs and nail clippers and begin to familiarize yourself with clippers. In this unit, you'll start to practice techniques to use these tools effectively. You'll also learn how to properly set up your grooming environment, and how to keep it clean and safe!</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="alert alert-primary">Unit Total: 1 to 2 Hours</div>
                      <table className="unitStatsTable">
                        <tbody>
                          <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                          <tr><th scope="row">Videos:</th><td>2 (1 hour)</td></tr>
                          <tr><th scope="row">Assignments:</th><td>4 (1 to 2 hours)</td></tr>
                        </tbody>
                      </table>
                      <hr />
                      <p className="lead">Required Grooming Equipment:</p>
                      <p>Grooming table with non-slip surface, grooming arm, grooming loop</p>
                      <p className="lead mb-0">Required Dogs: None</p>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="First Aid for Grooming Technicians">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <Image
                        src={FirstAidCourse}
                        className="mb-4"
                        alt="groomer bandaging a dog's paw"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <p className="mb-0">This part of the course includes canine first aid training to ensure that you are fully prepared and ready to address any type of grooming emergency. The First Aid lessons will teach you how to prevent accidents and injuries, and to respond to these situations should they occur. You'll also learn to assess a dog's vitals and perform life-saving procedures. Being able to quickly respond to these situations will make you more confident when you work with dogs!</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="alert alert-primary">Unit Total: 3 to 5 Hours</div>
                      <table className="unitStatsTable">
                        <tbody>
                          <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                          <tr><th scope="row">Videos:</th><td>7 (2 hours)</td></tr>
                          <tr><th scope="row">Assignments:</th><td>N/A</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit D">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4">
                      <p className="mb-0">Now that you have the fundamentals and First Aid under your belt, you're going to start working on dogs and practicing your practical skills! In Unit D, you'll learn about all the basic preparatory work that goes into a grooming session, from clipping nails to bathing and drying. These skills will form the foundation of a grooming technician&apos;s responsibilities in the salon.</p>
                    </div>
                    <div className="col-12 col-lg-6 mb-4">
                      <div className="alert alert-primary">Unit Total: 6 to 9 Hours + Practice</div>
                      <table className="unitStatsTable">
                        <tbody>
                          <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                          <tr><th scope="row">Videos:</th><td>8 (3 hours)</td></tr>
                          <tr><th scope="row">Assignments:</th><td>6 (2 to 4 hours)</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex">
                      <div className="card bg-light w-100">
                        <div className="card-body">
                          <h4>Required Grooming Equipment:</h4>
                          <ul className="card-text">
                            <li>Nail clippers &amp; nail file</li>
                            <li>Styptic powder, gel, or pencil</li>
                            <li>Ear powder &amp; cleaner</li>
                            <li>Dematting tool</li>
                            <li>Dog shampoo &amp; conditioner</li>
                            <li>Bathing station* &amp; dryer</li>
                          </ul>
                          <p className="card-text">* You can set up a grooming station in your own home or go to a self-grooming station at your local pet store.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex">
                      <div className="card bg-light w-100">
                        <div className="card-body">
                          <h4>Required Dogs:</h4>
                          <ul className="card-text">
                            <li>One dog with sufficient hair between pads (optional)</li>
                            <li>One dog with black nails in need of clipping</li>
                            <li>One dog with excess ear hair</li>
                            <li>One double-coated dog</li>
                            <li>A dog with at least one mat in his fur</li>
                          </ul>
                          <p className="card-text">Note: You can use the same dog for many of these exercises. For example, a golden retriever in need of a good groom is a double-coated dog that will likely have hair between the pads, have black nails, and have a mat in his fur. Poodles, terriers, or bichons are also good options in this unit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Unit E">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4">
                      <p className="mb-0">This unit is all about how to customize your services for different dogs. You'll learn how to handle every coat type including the necessary care and maintenance of these coats. You'll also learn about dogs that require special accommodations or considerations when grooming. This includes introducing puppies to the grooming process, grooming seniors and other dogs who might have health issues to consider when grooming, and dogs that may have behavioral issues that make them particularly difficult to groom.</p>
                    </div>
                    <div className="col-12 col-lg-6 mb-4">
                      <div className="alert alert-primary">Unit Total: 5 to 7 hours</div>
                      <table className="unitStatsTable">
                        <tbody>
                          <tr><th scope="row">Readings:</th><td>2 to 3 hours</td></tr>
                          <tr><th scope="row">Videos:</th><td>4 (2 hours)</td></tr>
                          <tr><th scope="row">Assignments:</th><td>3 (1 to 2 hours)</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
              <p className="text-center lead mt-4">View <Link href="/certification-courses/dog-grooming/course-preview" className="text-primary">Sample Assignments</Link> from QC's Online Grooming Technician Course</p>
            </div>
          </div>
        </div>
      </section>

      {/* <style jsx>{`

      .unitStatsTable {
        font-size: 1.25rem;
      }
      .unitStatsTable th {
        font-weight: bold;
        padding-right: 0.5rem;
      }
      .unitStatsTable tr > td, .unitStatsTable tr > th {
        padding-bottom: 0.75rem;
      }
      .unitStatsTable tr:last-of-type > td, .unitStatsTable tr:last-of-type > th {
        padding-bottom: 0.25rem;
      }
    `}</style> */}
    </>
  );
};

export default GroomingTechCourseOutlinePage;
