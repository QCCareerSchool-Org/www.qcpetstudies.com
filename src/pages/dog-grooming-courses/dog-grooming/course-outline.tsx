import Image from 'next/image';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import { FaBars } from 'react-icons/fa';

import { AccordionSection } from '../../../components/AccordionSection';
import { AccordionToggle } from '../../../components/AccordionToggle';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { SEO } from '../../../components/SEO';
import CourseOutlineBackground from '../../../images/backgrounds/course-outline.jpg';
import calendarIcon from '../../../images/calendar.svg';
import IconTime from '../../../images/clock.svg';
import FirstAidCourse from '../../../images/dg-full-outline-first-aid-for-groomers.jpg';
import PracticumUnit5Image from '../../../images/dg-full-outline-practicum-unit-5-image.jpg';
import PracticumUnitImage from '../../../images/dg-full-outline-practicum-unit.jpg';
import UnitAImage from '../../../images/dg-full-outline-unit-a-image.jpg';
import UnitBImage from '../../../images/dg-full-outline-unit-b-image.jpg';
import UnitCImage from '../../../images/dg-full-outline-unit-c-image.jpg';
import UnitGImage from '../../../images/dg-full-outline-unit-g-image.jpg';
import UnitHImage from '../../../images/dg-full-outline-unit-h-image.jpg';
import type { NextPageWithLayout } from '../../_app';

const iconSize = 50;

const DogGroomingCourseOutlinePage: NextPageWithLayout = () => (
  <>
    <SEO
      title="Dog Grooming Course Outline"
      description="Become a certified dog grooming professional with QC's interactive online course. Get started today!"
      canonical="/dog-grooming-courses/dog-grooming/course-outline"
    />

    <section id="top" className="bg-dark">
      <Image src={CourseOutlineBackground} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="dog getting a haircut" priority />
      <div className="image-overlay-gradient" />
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <FaBars size={iconSize} className="mb-2" />
            <h1 className="fw-normal">Dog Grooming<br /><strong>Course Outline</strong></h1>
            <p className="lead mb-0">Here's a detailed outline of the entire online dog grooming course offered by QC Pet Studies, including the length of each unit and the materials/dogs required to complete your grooming assignments.</p>
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
                  <Image src={IconTime as StaticImageData} width={iconSize} height={iconSize} alt="clock icon" />
                </div>
                <p>The course should take between <strong>80 and 130 hours</strong> to study and complete assignments from start to finish.  This time does not include the time you will take to practice and develop your skills before you complete an assignment.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex">
            <div className="card">
              <div className="card-body">
                <div className="mb-2">
                  <Image src={calendarIcon as StaticImageData} width={iconSize} height={iconSize} alt="calendar icon" />
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

    <section id="outlineSection" className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4 text-center">
            <h2 className="mb-4">Unit-by-Unit Breakdown</h2>
            <p className="mb-0">Below is an outline of each unit of the online dog grooming course. Expand each section to find out what you'll learn in each unit, along with each unit's expected length and the required dogs/equipment to complete your assignments.</p>
          </div>
          <div className="col-12 col-xl-10 col-xxl-9">
            <Accordion defaultActiveKey="0" className="mb-4">
              <AccordionToggle title="Unit A" eventKey="0" variant="primary" />
              <AccordionSection eventKey="0">
                <div className="row">
                  <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <Image src={UnitAImage} className="mb-4" layout="responsive" alt="groomer examining a dog's coat" />
                    <p className="mb-0">In the first unit of the dog grooming course, you'll meet your tutor and start learning about the fundamentals of dog grooming. This introductory unit includes theoretical studies on the history of dog grooming, and how to protect your health &amp; safety as a dog groomer.  You'll also learn about dog anatomy in great detail, and you'll start learning about skincare and esthetics.</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="alert alert-primary">Unit Total: 4 to 7 Hours</div>
                    <table className="unitStatsTable">
                      <tbody>
                        <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                        <tr><th scope="row">Videos:</th><td>3 (25 minutes)</td></tr>
                        <tr><th scope="row">Assignments:</th><td>10 (2 to 4 hours)</td></tr>
                      </tbody>
                    </table>
                    <hr />
                    <p className="lead">Required Grooming Equipment: None</p>
                    <p className="lead mb-0">Required Dogs: One (any breed)</p>
                  </div>
                </div>
              </AccordionSection>
              <AccordionToggle title="Unit B" eventKey="1" variant="primary" />
              <AccordionSection eventKey="1">
                <div className="row">
                  <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <Image src={UnitBImage} className="mb-4" layout="responsive" alt="groomer combing a dog's head" />
                    <p className="mb-0">In this second unit, you'll focus on how to work with dogs in a grooming environment. You'll learn about dog behaviors and temperaments, and you'll find out more about how dogs learn and communicate with humans.  You'll then learn about how you can keep the dog and yourself safe during a grooming appointment, and how to conduct an effective needs analysis when meeting a dog grooming client.</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="alert alert-primary">Unit Total: 5 to 10 Hours</div>
                    <table className="unitStatsTable">
                      <tbody>
                        <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                        <tr><th scope="row">Videos:</th><td>3 (65 minutes)</td></tr>
                        <tr><th scope="row">Assignments:</th><td>9 (3 to 6 hours)</td></tr>
                      </tbody>
                    </table>
                    <hr />
                    <p className="lead">Required Grooming Equipment: None</p>
                    <p className="lead mb-0">Required Dogs: One (any breed)</p>
                  </div>
                </div>
              </AccordionSection>
              <AccordionToggle title="Unit C" eventKey="2" variant="primary" />
              <AccordionSection eventKey="2">
                <div className="row">
                  <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <Image src={UnitCImage} className="mb-4" layout="responsive" alt="assorted dog grooming tools" />
                    <p className="mb-0">The third dog grooming unit will help you become intimately familiar with your grooming tools. You'll learn all about brushes, scissors, clippers, and you'll start to practice techniques to use these tools effectively.  You'll also learn how to properly set up your grooming environment, and how to keep it clean and safe!</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="alert alert-primary">Unit Total: 5 to 10 Hours</div>
                    <table className="unitStatsTable">
                      <tbody>
                        <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                        <tr><th scope="row">Videos:</th><td>4 (1½ hours)</td></tr>
                        <tr><th scope="row">Assignments:</th><td>12 (3 to 6 hours)</td></tr>
                      </tbody>
                    </table>
                    <hr />
                    <p className="lead">Required Grooming Equipment:</p>
                    <p>Scissors, clippers, grooming table with non-slip surface, grooming arm, grooming loop</p>
                    <p className="lead mb-0">Required Dogs: One (any breed)</p>
                  </div>
                </div>
              </AccordionSection>
              <AccordionToggle title="First Aid for Groomers Course" eventKey="3" variant="primary" />
              <AccordionSection eventKey="3">
                <div className="row">
                  <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <Image src={FirstAidCourse} className="mb-4" layout="responsive" alt="groomer bandaging a dog's paw" />
                    <p className="mb-0">Starting in Unit D, you'll be completing grooming assignments on dogs. Before you proceed to Unit D, however, you'll take a break and complete the full First Aid for Dog Groomers Course.  This will ensure that you are fully prepared and ready to address any type of grooming emergency.  The First Aid units will teach you how to prevent accidents and injuries, and to respond to these situations should they occur. You'll also learn to build your Groomer's First Aid Kit, assess a dog's vitals, and perform life-saving procedures.  Being able to quickly respond to these situations will make you a better and more confident groomer!</p>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="alert alert-primary">Unit Total: 8 to 15 Hours</div>
                    <table className="unitStatsTable">
                      <tbody>
                        <tr><th scope="row">Readings:</th><td>1 to 2 hours</td></tr>
                        <tr><th scope="row">Videos:</th><td>9 (2½ hours)</td></tr>
                        <tr><th scope="row">Assignments:</th><td>27 (6 to 12 hours)</td></tr>
                      </tbody>
                    </table>
                    <hr />
                    <p className="lead">Required Grooming Equipment:</p>
                    <p>First aid kit (you'll build this during the unit)</p>
                    <p className="lead mb-0">Required Dogs: One (any breed)</p>
                  </div>
                </div>
              </AccordionSection>
              <AccordionToggle title="Unit D" eventKey="4" variant="primary" />
              <AccordionSection eventKey="4">
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
                        <tr><th scope="row">Assignments:</th><td>12 (4 to 8 hours)</td></tr>
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
              </AccordionSection>
              <AccordionToggle title="Unit E" eventKey="5" variant="primary" />
              <AccordionSection eventKey="5">
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
                        <tr><th scope="row">Assignments:</th><td>14 (5 to 10 hours)</td></tr>
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
              </AccordionSection>
              <AccordionToggle title="Unit F" eventKey="6" variant="primary" />
              <AccordionSection eventKey="6">
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
                        <tr><th scope="row">Assignments:</th><td>9 (6 to 12 hours)</td></tr>
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
              </AccordionSection>
              <AccordionToggle title="Unit G" eventKey="7" variant="primary" />
              <AccordionSection eventKey="7">
                <div className="row">
                  <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <Image src={UnitGImage} className="mb-4" layout="responsive" alt="longhaired dog getting a trim" />
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
                        <tr><th scope="row">Assignments:</th><td>1 (1 hour)</td></tr>
                      </tbody>
                    </table>
                    <hr />
                    <p className="lead">Required Grooming Equipment:</p>
                    <p>None until practicum units</p>
                    <p className="lead">Required Dogs:</p>
                    <p className="mb-0">None until practicum units</p>
                  </div>
                </div>
              </AccordionSection>
              <AccordionToggle title="Practicum Units" eventKey="8" variant="primary" />
              <AccordionSection eventKey="8">
                <div className="row">
                  <div className="col-12 col-lg-6 mb-4">
                    <p>In your practicum units, you'll follow a series of assignments that will have you grooming full dogs from start to finish.  This is where all your knowledge from the course will come to a head. For best results, you'll want to complete a groom on several dogs before submitting your work for grading. It's only with practice that you will truly become a competent and successful professional dog groomer!</p>
                    <div className="alert alert-primary mb-0">Unit Total: 11 to 20 hours + Practice</div>
                  </div>
                  <div className="col-12 col-lg-6 mb-4">
                    <Image src={PracticumUnitImage} layout="responsive" alt="wet dog being toweled off" />
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
                      <Image src={PracticumUnit5Image} className="card-img" alt="dog groomed with wire brush" />
                    </div>
                  </div>
                </div>
              </AccordionSection>
              <AccordionToggle title="Unit H (Optional)" eventKey="9" variant="primary" />
              <AccordionSection eventKey="9">
                <div className="row">
                  <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <p>By this point in the dog grooming class, you've completed all your theoretical and practical work, and are feeling pretty confident in your grooming abilities! Now it's time to use those abilities in the real-world and turn your passion into a career.  The business training offered in this course is optional, however, it will be hugely beneficial if you want to freelance your services, if you intend on starting your own dog grooming business or salon, or if you're looking to get a job in an established salon.</p>
                    <p>You'll work with your tutor to name your dog grooming business and establish a business plan.  You'll learn all about different marketing techniques and how to use them effectively. You'll also read up on the most effective networking techniques and find out how to apply them to your business or job search.  Even if launching your business isn't in your immediate future, take advantage of this wonderful opportunity, and complete this optional unit of your course!</p>
                    <div className="alert alert-primary mb-0">Unit Total: 9 to 16 Hours</div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <Image src={UnitHImage} className="mb-4" layout="responsive" alt="groomer admiring groomed dog" />
                  </div>
                </div>
              </AccordionSection>
            </Accordion>
            <p className="text-center lead">View <Link href="/dog-grooming-courses/dog-grooming/course-preview"><a className="text-primary">Sample Assignments</a></Link> from QC's Online Dog Grooming Course</p>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      #outlineSection {
        background-color: #f7f7f7 !important;
      }
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
    `}</style>
  </>
);

DogGroomingCourseOutlinePage.getLayout = page => <DefaultLayout footerCTAType="grooming">{page}</DefaultLayout>;

export default DogGroomingCourseOutlinePage;
