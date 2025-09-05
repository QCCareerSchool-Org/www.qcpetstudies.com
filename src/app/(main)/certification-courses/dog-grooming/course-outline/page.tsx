import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

import FirstAidCourse from './_images/first-aid-for-groomers.jpg';
import PracticumUnitImage from './_images/practicum-unit-1.jpg';
import PracticumUnit5Image from './_images/practicum-unit-5.jpg';
import UnitAImage from './_images/unit-a.jpg';
import UnitBImage from './_images/unit-b.jpg';
import UnitCImage from './_images/unit-c.jpg';
import UnitGImage from './_images/unit-g.jpg';
import UnitHImage from './_images/unit-h.jpg';
import AshliImage from './ashli.jpg';
import CourseOutlineBackground from './course-outline.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { Accordion } from '@/components/accordion';
import { AccordionItem } from '@/components/accordion/accordionItem';
import { BackgroundImage } from '@/components/backgroundImage';
import CalendarIcon from '@/images/calendar.svg';
import TimeIcon from '@/images/clock.svg';

const iconSize = 50;

export const metadata: Metadata = {
  title: 'Dog Grooming Course Outline',
  description: 'Become a certified dog grooming professional with QC\'s interactive online course. Get started today!',
  alternates: { canonical: '/certification-courses/dog-grooming/course-outline' },
};

const DogGroomingCourseOutlinePage: PageComponent = () => {
  let eventKey = 0;

  return (
    <>
      <section id="top" className="bg-dark">
        <BackgroundImage src={CourseOutlineBackground} priority />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <FaBars size={iconSize} className="mb-2" />
              <h1 className="fw-normal">Dog Grooming<br /><strong>Course Outline</strong></h1>
              <p className="lead mb-0">Here's a detailed outline of the entire online Dog Grooming course offered by QC Pet Studies, including the length of each unit and the materials/dogs required to complete your grooming assignments.</p>
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
                  <p>The course should take between <strong>80 and 130 hours</strong> to study and complete assignments from start to finish.  This time does not include the time you will take to practice and develop your skills before you complete an assignment.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex">
              <div className="card">
                <div className="card-body">
                  <div className="mb-2">
                    <CalendarIcon width={iconSize} height={iconSize} alt="calendar icon" style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                  <p>On average, most QC students work on their course for a few hours per week, and complete the online dog grooming course within about <strong>6 months to a year.</strong>  You'll have up to two years to complete the program, so lots of time!</p>
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
              <p className="mb-0">Below is an outline of each unit of the online dog grooming course. Expand each section to find out what you'll learn in each unit, along with each unit's expected length and the required dogs/equipment to complete your assignments.</p>
            </div>
            <div className="col-12 col-xl-10 col-xxl-9">
              <Accordion>
                <AccordionItem eventKey={eventKey++} heading="Introduction to Dog Grooming">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <Image src={UnitAImage} className="mb-4" alt="groomer examining a dog's coat" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                      <p className="mb-0">In the first unit of the dog grooming course, you'll meet your tutor and start learning about the fundamentals of dog grooming. This introductory unit includes theoretical studies on the history of dog grooming, and how to protect your health &amp; safety as a dog groomer.  You'll also learn about dog anatomy in great detail, and you'll start learning about skincare and esthetics.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="alert alert-primary">Unit Total: 4 to 7 Hours</div>
                      <table className="unitStatsTable">
                        <tbody>
                          <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                          <tr><th scope="row">Videos:</th><td>3 (25 minutes)</td></tr>
                          <tr><th scope="row">Assignments:</th><td>4 (2 to 4 hours)</td></tr>
                        </tbody>
                      </table>
                      <hr />
                      <p className="lead">Required Grooming Equipment: None</p>
                      <p className="lead mb-0">Required Dogs: One (any breed)</p>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Meeting and Evaluating Dogs">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <Image src={UnitBImage} className="mb-4" alt="groomer combing a dog's head" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                      <p className="mb-0">In this second unit, you'll focus on how to work with dogs in a grooming environment. You'll learn about dog behaviors and temperaments, and you'll find out more about how dogs learn and communicate with humans.  You'll then learn about how you can keep the dog and yourself safe during a grooming appointment, and how to conduct an effective needs analysis when meeting a dog grooming client.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="alert alert-primary">Unit Total: 5 to 10 Hours</div>
                      <table className="unitStatsTable">
                        <tbody>
                          <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                          <tr><th scope="row">Videos:</th><td>3 (65 minutes)</td></tr>
                          <tr><th scope="row">Assignments:</th><td>5 (3 to 6 hours)</td></tr>
                        </tbody>
                      </table>
                      <hr />
                      <p className="lead">Required Grooming Equipment: None</p>
                      <p className="lead mb-0">Required Dogs: One (any breed)</p>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Grooming Tools and Techniques">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <Image src={UnitCImage} className="mb-4" alt="assorted dog grooming tools" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                      <p className="mb-0">The third dog grooming unit will help you become intimately familiar with your grooming tools. You'll learn all about brushes, scissors, clippers, and you'll start to practice techniques to use these tools effectively.  You'll also learn how to properly set up your grooming environment, and how to keep it clean and safe!</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="alert alert-primary">Unit Total: 5 to 10 Hours</div>
                      <table className="unitStatsTable">
                        <tbody>
                          <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                          <tr><th scope="row">Videos:</th><td>4 (1½ hours)</td></tr>
                          <tr><th scope="row">Assignments:</th><td>5 (3 to 6 hours)</td></tr>
                        </tbody>
                      </table>
                      <hr />
                      <p className="lead">Required Grooming Equipment:</p>
                      <p>Scissors, clippers, grooming table with non-slip surface, grooming arm, grooming loop</p>
                      <p className="lead mb-0">Required Dogs: One (any breed)</p>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Bonus Lessons: First Aid for Groomers">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <Image src={FirstAidCourse} className="mb-4" alt="groomer bandaging a dog's paw" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                      <p className="mb-0">In the following units, you'll be completing grooming assignments on dogs. Before you proceed, however, you'll take a break and complete your full First Aid for Dog Groomers training. This will ensure that you are fully prepared and ready to address any type of grooming emergency. The First Aid lesson will teach you how to prevent accidents and injuries, and to respond to these situations should they occur. You'll also learn to build your Groomer's First Aid Kit, assess a dog's vitals, and perform life-saving procedures. Being able to quickly respond to these situations will make you a better and more confident groomer!</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="alert alert-primary">Unit Total: 8 to 15 Hours</div>
                      <table className="unitStatsTable">
                        <tbody>
                          <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                          <tr><th scope="row">Videos:</th><td>9 (2½ hours)</td></tr>
                        </tbody>
                      </table>
                      <hr />
                      <p className="lead">Required Grooming Equipment:</p>
                      <p>First aid kit (you'll build this during the unit)</p>
                      <p className="lead mb-0">Required Dogs: One (any breed)</p>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Prep Work">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4">
                      <p>Now that you have basic dog grooming theory and First Aid under your belt, you're going to start working on dogs and practicing your practical dog grooming skills!</p>
                      <p className="mb-0">In Unit D, you'll learn about all the basic preparatory work that goes into a grooming session, from clipping nails to bathing and drying. These skills will form the foundation of all the grooming work you'll perform later in the course and in your career.</p>
                    </div>
                    <div className="col-12 col-lg-6 mb-4">
                      <div className="alert alert-primary">Unit Total: 8 to 15 Hours + Practice</div>
                      <table className="unitStatsTable">
                        <tbody>
                          <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                          <tr><th scope="row">Videos:</th><td>8 (3 hours)</td></tr>
                          <tr><th scope="row">Assignments:</th><td>7 (4 to 8 hours)</td></tr>
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
                            <li>Clippers with #15 or #30 blade</li>
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
                            <li>One dog with sufficient hair between pads</li>
                            <li>One dog with white nails in need of clipping</li>
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
                <AccordionItem eventKey={eventKey++} heading="Coat Types and Cuts">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4">
                      <p className="mb-0">This unit is all about different coat types in dogs. You'll learn how to handle every coat type including the necessary care and maintenance of these coats.  You'll also be introduced to some indispensable pet cuts, and techniques for creating eye-catching finishing touches to top off a stylish groom in any dog!</p>
                    </div>
                    <div className="col-12 col-lg-6 mb-4">
                      <div className="alert alert-primary">Unit Total: 7 to 14 hours + Practice</div>
                      <table className="unitStatsTable">
                        <tbody>
                          <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                          <tr><th scope="row">Videos:</th><td>2 (1 hour)</td></tr>
                          <tr><th scope="row">Assignments:</th><td>5 (5 to 10 hours)</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex">
                      <div className="card bg-light w-100">
                        <div className="card-body">
                          <h4>Required Grooming Equipment:</h4>
                          <ul className="card-text">
                            <li>Variety of grooming brushes &amp; combs</li>
                            <li>Accessories such as bows and bandanas</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex">
                      <div className="card bg-light w-100">
                        <div className="card-body">
                          <h4>Required Dogs:</h4>
                          <ul className="card-text">
                            <li>Any dog that isn't hairless and doesn't have a short, flat coat</li>
                            <li>A dog with enough hair on his head for a topknot (example: Poodle, Shih Tzu)</li>
                            <li>A short-coated dog that also has a double coat (example: Lab, Australian Cattle Dog)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Grooming Plans">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4">
                      <p className="mb-0">You'll now start to work with dogs that require special accommodations or considerations when grooming. This includes introducing puppies to the grooming process, grooming seniors and other dogs who might have health issues to consider when grooming, and dogs that may have behavioral issues that make them particularly difficult to groom.</p>
                    </div>
                    <div className="col-12 col-lg-6 mb-4">
                      <div className="alert alert-primary">Unit Total: 8 to 16 Hours + Practice</div>
                      <table className="unitStatsTable">
                        <tbody>
                          <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                          <tr><th scope="row">Videos:</th><td>3 (1½ hours)</td></tr>
                          <tr><th scope="row">Assignments:</th><td>3 (6 to 12 hours)</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex">
                      <div className="card bg-light w-100">
                        <div className="card-body">
                          <h4>Required Grooming Equipment:</h4>
                          <ul className="mb-0">
                            <li>Grooming tools appropriate for the dog breed you're working with (brushes, combs, clippers, nail tools, etc.)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex">
                      <div className="card bg-light w-100">
                        <div className="card-body">
                          <h4>Required Dogs:</h4>
                          <ul className="mb-0">
                            <li>A senior dog</li>
                            <li>A puppy (under 1 year old)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Breed Standards">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <Image src={UnitGImage} className="mb-4" alt="longhaired dog getting a trim" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                      <p>In this final mandatory unit before your practicum, you'll learn the guidelines for styling and showing purebred dogs. These are the standards that give different dog breeds their unique looks.</p>
                      <p>Unit G guides you through the process of adapting breed standards to practical pet cuts for a number of common breeds. You'll return to the information in this unit over and over again throughout your grooming career!</p>
                      <p className="mb-0">Note: This unit is the lead-up to your practicum, therefore there are no practical assignments in this unit.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="alert alert-primary">Unit Total: 6 to 8 Hours</div>
                      <table className="unitStatsTable">
                        <tbody>
                          <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                          <tr><th scope="row">Videos:</th><td>9 (5 hours)</td></tr>
                        </tbody>
                      </table>
                      <hr />
                      <p className="lead">Required Grooming Equipment:</p>
                      <p>None until practicum units</p>
                      <p className="lead">Required Dogs:</p>
                      <p className="mb-0">None until practicum units</p>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Practicum Units">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4">
                      <p>In your practicum units, you'll follow a series of assignments that will have you grooming full dogs from start to finish.  This is where all your knowledge from the course will come to a head. For best results, you'll want to complete a groom on several dogs before submitting your work for grading. It's only with practice that you will truly become a competent and successful professional dog groomer!</p>
                      <div className="alert alert-primary mb-0">Unit Total: 11 to 20 hours + Practice</div>
                    </div>
                    <div className="col-12 col-lg-6 mb-4">
                      <Image src={PracticumUnitImage} alt="wet dog being toweled off" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="col-12 mb-4 col-lg-6 d-flex">
                      <div className="card bg-light w-100">
                        <div className="card-body">
                          <h4 className="card-title"><strong>Practicum Unit 1:</strong></h4>
                          <p className="card-text lead">The Bath</p>
                          <p className="card-text">In this first practicum unit, you'll bathe a dog from head to tail. This will include prepping the dog for bathing, choosing the right tools for the job, giving the dog a thorough wash, and drying the dog afterward.</p>
                          <h4 className="card-title">Required Equipment:</h4>
                          <ul className="card-text">
                            <li>All appropriate equipment for prep work</li>
                            <li>Grooming tub with restraints and a water supply</li>
                            <li>Dog shampoo &amp; conditioner appropriate for the dog's fur/skin type</li>
                            <li>Towels</li>
                            <li>High-velocity dryer</li>
                          </ul>
                          <h4 className="card-title">Required Dog:</h4>
                          <p className="card-text">Any coated dog that is in need of a bath.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mb-4 d-flex">
                      <div className="card bg-light w-100">
                        <div className="card-body">
                          <h4 className="card-title"><strong>Practicum Unit 2:</strong></h4>
                          <p className="card-text lead">Grooming a Natural Breed</p>
                          <p className="card-text">This practicum unit will have you groom a natural breed dog, such as a purebred Golden Retriever or Shetland Sheepdog. Throughout 6 individual assignments, you'll go through the process of grooming the entire dog from prep work to grooming each body part and then putting the finishing touches on the dog.</p>
                          <h4 className="card-title">Required Equipment:</h4>
                          <ul className="card-text">
                            <li>Appropriate equipment for prep work</li>
                            <li>Brushes &amp; combs appropriate for the dog's coat type &amp; needs.</li>
                            <li>Clippers &amp; appropriate clipper blades</li>
                            <li>Appropriate grooming scissors</li>
                            <li>Other grooming equipment appropriate for the dog</li>
                          </ul>
                          <h4 className="card-title">Required Dog:</h4>
                          <p className="card-text">Purebred Golden Retriever or Purebred Shetland Sheepdog.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mb-4 d-flex">
                      <div className="card bg-light w-100">
                        <div className="card-body">
                          <h4 className="card-title"><strong>Practicum Unit 3:</strong></h4>
                          <p className="card-text lead">The Teddy Bear Cut</p>
                          <p className="card-text">The teddy bear cut will be among the most popular cuts requested by your grooming clients.  This is the type of cut anyone with a cute little fluffy dog will want to have!  So you'll want to take your time and practice to get this one right.  A groomer can make a good living on the teddy bear cut alone!</p>
                          <h4 className="card-title">Required Equipment:</h4>
                          <ul className="card-text">
                            <li>Appropriate equipment for prep work</li>
                            <li>Brushes &amp; combs appropriate for the dog's coat type &amp; needs.</li>
                            <li>Clippers &amp; appropriate clipper blades</li>
                            <li>Appropriate grooming scissors</li>
                            <li>Other grooming equipment appropriate for the dog</li>
                          </ul>
                          <h4 className="card-title">Required Dog:</h4>
                          <p className="card-text">A dog suitable for a teddy bear cut (example: a miniature poodle mix, Havanese mix, etc.) whose coat is at least two inches long</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mb-4 d-flex">
                      <div className="card bg-light w-100">
                        <div className="card-body">
                          <h4 className="card-title"><strong>Practicum Unit 4:</strong></h4>
                          <p className="card-text lead">Grooming a Terrier</p>
                          <p className="card-text">The terrier group hosts a pretty specific range of dog breeds, all of whom require frequent and regular grooming not only to stay looking their best but to stay healthy as well!  In this practicum unit, you'll groom a terrier from start to finish.</p>
                          <h4 className="card-title">Required Equipment:</h4>
                          <ul className="card-text">
                            <li>Appropriate equipment for prep work</li>
                            <li>Brushes &amp; combs appropriate for the dog's coat type &amp; needs.</li>
                            <li>Clippers &amp; appropriate clipper blades</li>
                            <li>Appropriate grooming scissors</li>
                            <li>Other grooming equipment appropriate for the dog</li>
                          </ul>
                          <h4 className="card-title">Required Dog:</h4>
                          <p className="card-text">A purebred Miniature Schnauzer, Standard Schnauzer, West Highland White Terrier, or Airedale Terrier</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex">
                      <div className="card bg-light w-100">
                        <div className="card-body">
                          <h4 className="card-title"><strong>Practicum Unit 5:</strong></h4>
                          <p className="card-text lead">Grooming a Non-Sporting Breed</p>
                          <p className="card-text">The non-sporting class of dogs is one with a wide range of breeds. For this practicum unit, you'll focus on two non-sporting breeds that are among the most often seen in a grooming salon: the Poodle and the Bichon Frise. You'll groom one of these breeds (or both!) from head to tail. Don't forget your finishing touches!</p>
                          <h4 className="card-title">Required Equipment:</h4>
                          <ul className="card-text">
                            <li>Appropriate equipment for prep work</li>
                            <li>Brushes &amp; combs appropriate for the dog's coat type &amp; needs.</li>
                            <li>Clippers &amp; appropriate clipper blades</li>
                            <li>Appropriate grooming scissors</li>
                            <li>Other grooming equipment appropriate for the dog</li>
                          </ul>
                          <h4 className="card-title">Required Dog:</h4>
                          <p className="card-text">A purebred Poodle or Bichon Frise</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="card w-100">
                        <Image src={PracticumUnit5Image} className="card-img" alt="dog groomed with wire brush" style={{ maxWidth: '100%', height: 'auto' }} />
                      </div>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Business Training">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <p>By this point in the dog grooming class, you've completed all your theoretical and practical work, and are feeling pretty confident in your grooming abilities! Now it's time to use those abilities in the real-world and turn your passion into a career. Business training is optional for the Online Track students, but includes mandatory components for those in the Externship Track. We encourage all students to take full advantage of this training to build valuable skills for running a successful grooming business.</p>
                      <p>You'll work with your tutor to name your dog grooming business and establish a business plan. You'll learn all about different marketing techniques and how to use them effectively. You'll also read up on the most effective networking techniques and find out how to apply them to your business or job search. Even if launching your business isn't in your immediate future, take advantage of this wonderful opportunity, and complete this optional unit of your course!</p>
                      <div className="alert alert-primary mb-0">Unit Total: 9 to 16 Hours</div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <Image src={UnitHImage} className="mb-4" alt="groomer admiring groomed dog" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem eventKey={eventKey++} heading="Externship Units">
                  <p className="lead">In the Externship Track, you'll apply everything you've learned from the Online Track by completing your externship application and starting your in-person placement in a professional grooming environment. Here is a detailed breakdown of how the externship track course works.</p>
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4">
                      <h4>Submit Your Externship Application</h4>
                      <p>After completing the online training with a grade of B or higher in your practicum units and paying your course fees in full, you'll fill out an externship application. This is your opportunity to share your preferences with your facilitator, such as location or type of grooming facility.</p>
                      <h4>Placement Matching</h4>
                      <p>Your Externship Facilitator will review your application and work with you to secure the best placement for your hands-on training alongside a professional groomer.</p>
                      <h4>Receive Your Placement & Sign Documentation</h4>
                      <p>Within 14 days of application approval, you'll receive your placement details. Your facilitator will provide all required documentation, which you must sign before starting your externship.</p>
                      <h4>Begin Your Externship</h4>
                      <p>You'll complete 80 hours of unpaid, hands-on training in a real grooming environment, gaining practical experience and confidence in your skills.</p>
                      <h4>Track Your Hours & Get Evaluated</h4>
                      <p>During your externship you'll log your hours and complete an evaluation of your experience. Your grooming supervisor will also submit a final evaluation of your performance and skills.</p>
                      <h4>Receive Your Certificate of Completion</h4>
                      <p>Once all externship requirements are met—including your hours log and evaluations—you'll receive your official QC Certificate of Completion, recognizing both your coursework and real-world training.</p>
                    </div>
                    <div className="col-12 col-lg-6 mb-4">
                      <h4>Meet Ashli, Your Externship Facilitator</h4>
                      <p className="mb-5">Ashli is dedicated to ensuring every student has a smooth and successful externship experience. She'll personally guide you through the placement process, help match you with a  professional groomer, and provide ongoing support until your training is complete. With Ashli's expertise and commitment to student success, you can feel confident knowing you'll have guidance every step of the way as you transition from online learning to hands-on experience.</p>
                      <div className="text-center">
                        <Image src={AshliImage} className="img-fluid" alt="Ashli" />
                      </div>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
              <p className="text-center lead mt-4">View <Link href="/certification-courses/dog-grooming/course-preview" className="text-primary">Sample Assignments</Link> from QC's Online Dog Grooming Course</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 />

        </div>
      </section>
    </>
  );
};

export default DogGroomingCourseOutlinePage;
