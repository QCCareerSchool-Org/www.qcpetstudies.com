import { NextPage } from 'next';
import Image from 'next/image';
import React, { ReactElement, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { FaBars, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { SEO } from '../../../components/SEO';
import CourseOutlineBackground from '../../../images/backgrounds/course-outline-background.jpg';
import FirstAidCourse from '../../../images/first-aid-for-groomers.jpg';
import IconTime from '../../../images/clock.svg';
import calendarIcon from '../../../images/calendar.svg';
import PracticumUnit5Image from '../../../images/practicum-unit-5-image.jpg';
import PracticumUnitImage from '../../../images/practicum-unit.jpg';
import UnitAImage from '../../../images/unit-a-image.jpg';
import UnitBImage from '../../../images/unit-b-image.jpg';
import UnitCImage from '../../../images/unit-c-image.jpg';
import UnitGImage from '../../../images/unit-g-image.jpg';
import UnitHImage from '../../../images/unit-h-image.jpg';
import Link from 'next/link';

const DogGroomingCourseOutlinePage: NextPage = () => {

  const iconSize = 50;

  return (
    <DefaultLayout>
      <SEO
        title="Dog Grooming Course-Outline"
        description="This is a Dog Grooming Course Outline"
        canonical="/dog-grooming-courses/dog-grooming/course-outline"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={CourseOutlineBackground} layout="fill" objectFit="cover" objectPosition="center" alt="your dog grooming course outline" />
        <div className="image-overlay-gradient"></div>
        <div className="container text-center">
          <FaBars size={iconSize} className="text-white mb-3" />
          <h1 className="mb-4">Dog Grooming Course Outline</h1>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <p className="lead text-white"><strong>Here&apos;s a detailed outline of the entire online dog grooming course offered by QC Pet Studies, <br />including the length of each unit and the materials/dogs required to complete your <br />grooming assignments.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center mb-5">
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-lg-6 px-5 mb-4 mb-lg-0">
              <div className="mb-4">
                <Image src={IconTime} width={iconSize} height={iconSize} alt="timer" />
              </div>
              <p>The course should take between <strong>80 and 130 hours</strong> to study and complete assignments from start to finish.  This time does not include the time you will take to practice and develop your skills before you complete an assignment.</p>
            </div>
            <div className="col-12 col-lg-6 mb-4 mb-lg-0 px-5">
              <div className="mb-4">
                <Image src={calendarIcon} width={iconSize} height={iconSize} alt="assignment" />
              </div>
              <p>On average, most QC students work on their course for a few hours per week, and complete the online dog grooming course within about <strong>6 months to a year.</strong>  You&apos;ll have up to two years to complete the program, so lots of time!</p>
            </div>
          </div>
          <div className="row justify-content-center">
             <div className="col-12 p-2 p-md-5 bg-light">
              <p className="m-0"><strong><i>Note:</i></strong> Course and unit times indicated on this page are approximate. Since this is a self-paced course, students take as much time as they need to practice their skills and complete each unit.</p>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container text-center">
          <h2 className="mb-4">Unit-by-Unit Breakdown</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <p><strong>Below is an outline of each unit of the online dog grooming course. Expand each section to find out what you&apos;ll learn in each unit, along with each unit&apos;s expected length and the required dogs/equipment to complete your assignments.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Accordion>
          <CustomToggle title="Unit A" eventKey="0" />
          <Accordion.Collapse eventKey="0">
            <div className="container mb-5">
              <div className="row mb-2">
                <div className="col-12 col-lg-6">
                  <Image className="mb-3" src={UnitAImage} alt="unit a image" />
                  <p>In the first unit of the dog grooming course, you&apos;ll meet your tutor and start learning about the fundamentals of dog grooming. This introductory unit includes theoretical studies on the history of dog grooming, and how to protect your health &amp; safety as a dog groomer.  You&apos;ll also learn about dog anatomy in great detail, and you&apos;ll start learning about skincare and esthetics.</p>
                </div>
                <div className="col-12 col-lg-6">
                  <a href=""><button className="btn btn-outline-secondary mb-4 btn-lg">Unit Total: 4-7 Hours</button></a>
                  <p className="lead"><strong>Readings:</strong> 1-2 hours</p>
                  <p className="lead"><strong>Video:</strong>  Videos (25 minutes)</p>
                  <p className="lead"><strong>Assignments:</strong>  10 (2-4 hours)</p>
                  <hr className="my-4" />
                  <p className="lead">Required Grooming Equipment: None</p>
                  <p className="lead">Required Dogs: One (any breed)</p>
                </div>
              </div>
            </div>
          </Accordion.Collapse>
        </Accordion>

        <Accordion>
          <CustomToggle title="Unit B" eventKey="0" />
          <Accordion.Collapse eventKey="0">
            <div className="container mb-5">
              <div className="row mb-2">
                <div className="col-12 col-lg-6">
                  <Image className="mb-3" src={UnitBImage} alt="unit b image" />
                  <p>In this second unit, you&apos;ll focus on how to work with dogs in a grooming environment.  You&apos;ll learn about dog behaviors and temperaments, and you&apos;ll find out more about how dogs learn and communicate with humans.  You&apos;ll then learn about how you can keep the dog and yourself safe during a grooming appointment, and how to conduct an effective needs analysis when meeting a dog grooming client.</p>
                </div>
                <div className="col-12 col-lg-6">
                  <a href=""><button className="btn btn-outline-secondary mb-4 btn-lg">Unit Total: 5-10 Hours</button></a>
                  <p className="lead"><strong>Readings:</strong> 1-2 hours</p>
                  <p className="lead"><strong>Video:</strong> 3 Videos (65 minutes)</p>
                  <p className="lead"><strong>Assignments:</strong>  9 (3-6 hours)</p>
                  <hr className="my-4" />
                  <p className="lead">Required Grooming Equipment: None</p>
                  <p className="lead">Required Dogs: One (any breed)</p>
                </div>
              </div>
            </div>
          </Accordion.Collapse>
        </Accordion>

        <Accordion>
          <CustomToggle title="Unit C" eventKey="0" />
          <Accordion.Collapse eventKey="0">
            <div className="container mb-5">
              <div className="row mb-2">
                <div className="col-12 col-lg-6">
                  <Image className="mb-2" src={UnitCImage} alt="unit c image" />
                  <p>The third dog grooming unit will help you become intimately familiar with your grooming tools. You&apos;ll learn all about brushes, scissors, clippers, and you&apos;ll start to practice techniques to use these tools effectively.  You&apos;ll also learn how to properly set up your grooming environment, and how to keep it clean and safe!</p>
                </div>
                <div className="col-12 col-lg-6">
                  <a href=""><button className="btn btn-outline-secondary mb-4 btn-lg">Unit Total: 5-10 Hours</button></a>
                  <p className="lead"><strong>Readings:</strong> 1-2 hours</p>
                  <p className="lead"><strong>Video:</strong> 4 Videos (1½ hours)</p>
                  <p className="lead"><strong>Assignments:</strong>  12 (3-6 hours)</p>
                  <hr className="my-4 bold" />
                  <p className="lead">Required Grooming Equipment: </p>
                  <p>Scissors, Clippers, Grooming Table with non-slip surface, Grooming Arm, Grooming loop</p>
                  <p className="lead">Required Dogs: One (any breed)</p>
                </div>
              </div>
            </div>
          </Accordion.Collapse>
        </Accordion>

        <Accordion>
          <CustomToggle title="First Aid for Groomers Course" eventKey="0" />
          <Accordion.Collapse eventKey="0">
            <div className="container mb-5">
              <div className="row mb-2">
                <div className="col-12 col-lg-6">
                  <Image className="mb-2" src={FirstAidCourse} alt="first aid for groomers course image" />
                  <p>Starting in Unit D, you&apos;ll be completing grooming assignments on dogs. Before you proceed to Unit D, however, you&apos;ll take a break and complete the full First Aid for Dog Groomers Course.  This will ensure that you are fully prepared and ready to address any type of grooming emergency.  The First Aid units will teach you how to prevent accidents and injuries, and to respond to these situations should they occur. You&apos;ll also learn to build your Groomer&apos;s First Aid Kit, assess a dog&apos;s vitals, and perform life-saving procedures.  Being able to quickly respond to these situations will make you a better and more confident groomer!</p>
                </div>
                <div className="col-12 col-lg-6">
                  <a href=""><button className="btn btn-outline-secondary mb-4 btn-lg">Unit Total: 8-15 Hours</button></a>
                  <p className="lead"><strong>Readings:</strong> 1-2 hours</p>
                  <p className="lead"><strong>Video:</strong> 9 Videos (2½ hours)</p>
                  <p className="lead"><strong>Assignments:</strong>  27 (6-12 hours)</p>
                  <hr className="my-4" />
                  <p className="lead"><strong>Required Grooming Equipment:</strong></p>
                  <p>First Aid Kit (You&apos;ll build this during the unit)</p>
                  <p className="lead"><strong>Required Dogs:</strong> One (any breed)</p>
                </div>
              </div>
            </div>
          </Accordion.Collapse>
        </Accordion>

        <Accordion>
          <CustomToggle title="Unit D" eventKey="0" />
          <Accordion.Collapse eventKey="0">
            <div className="container mb-5">
              <div className="row mb-5">
                <div className="col-12 col-lg-6">
                  <p>Now that you have basic dog grooming theory and First Aid under your belt, you&apos;re going to start working on dogs and practicing your practical dog grooming skills!</p>
                  <p>In Unit D, you&apos;ll learn about all the basic preparatory work that goes into a grooming session, from clipping nails to bathing and drying. These skills will form the foundation of all the grooming work you&apos;ll perform later in the course and in your career.</p>
                </div>
                <div className="col-12 col-lg-6">
                  <a href=""><button className="btn btn-outline-secondary mb-4 btn-lg">Unit Total: 8-15 Hours</button></a>
                  <p className="lead"><strong>Readings:</strong> 1-2 hours</p>
                  <p className="lead"><strong>Video:</strong> 8 Videos (3 hours)</p>
                  <p className="lead"><strong>Assignments:</strong>  12 (4-8 hours)</p>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-12 col-lg-6 mb-4 d-flex align-items-strech">
                  <div className="card w-100 bg-light">
                    <div className="card-body py-5">
                      <h4>Required Grooming Equipment:</h4>
                      <ul className="d-grid gap-2">
                        <li>Nail clippers &amp; nail file</li>
                        <li>Styptic powder, gel, or pencil</li>
                        <li>Clippers with #15 or #30 blade</li>
                        <li>Ear powder &amp; cleaner</li>
                        <li>Dematting tool</li>
                        <li>Dog shampoo &amp; conditioner</li>
                        <li>Bathing station* &amp; Dryer</li>
                      </ul>
                      <p>*You can set up a grooming station in your own home or go to a self-grooming station at your local pet store.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mb-4 d-flex align-items-strech">
                  <div className="card w-100 bg-light">
                    <div className="card-body py-5">
                      <h4>Required Dogs:</h4>
                      <ul>
                        <li className="mb-2">One dog with sufficient hair between pads</li>
                        <li className="mb-2">One dog with white nails in need of clipping</li>
                        <li className="mb-2">One dog with black nails in need of clipping</li>
                        <li className="mb-2">One dog with excess ear hair</li>
                        <li className="mb-2">One double-coated dog</li>
                        <li className="mb-2">Dog shampoo &amp; conditioner</li>
                        <li>A dog with at least one mat in his fur</li>
                      </ul>
                      <p>Note: You can use the same dog for many of these exercises. For example, a golden retriever in need of a good groom is a double-coated dog that will likely have hair between the pads, have black nails, and have a mat in his fur. Poodles, terriers, or bichons are also good options in this unit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Collapse>
        </Accordion>

        <Accordion>
          <CustomToggle title="Unit E" eventKey="0" />
          <Accordion.Collapse eventKey="0">
            <div className="container mb-5">
              <div className="row mb-5">
                <div className="col-12 col-lg-6">
                  <p className="mb-3">This unit is all about different coat types in dogs. You&apos;ll learn how to handle every coat type including the necessary care and maintenance of these coats.  You&apos;ll also be introduced to some indispensable pet cuts, and techniques for creating eye-catching finishing touches to top off a stylish groom in any dog!</p>
                </div>
                <div className="col-12 col-lg-6">
                  <a href=""><button className="btn btn-outline-secondary mb-4 btn-lg">Unit Total: 7-14 hours + Practice</button></a>
                  <p className="lead mb-3"><strong>Readings:</strong> 1-2 hours</p>
                  <p className="lead mb-3"><strong>Video:</strong> 2 Videos (1 hours)</p>
                  <p className="lead mb-5"><strong>Assignments:</strong>  14 (5-10 hours)</p>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-12 col-lg-6 mb-4 d-flex align-items-strech">
                  <div className="card w-100 bg-light">
                    <div className="card-body py-5">
                      <h4>Required Grooming Equipment:</h4>
                      <ul>
                        <li className="mb-2">Variety of grooming brushes &amp; combs</li>
                        <li>Accessories such as bows and bandanas</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mb-4 d-flex align-items-strech">
                  <div className="card w-100 bg-light">
                    <div className="card-body py-5">
                      <h4>Required Dogs:</h4>
                      <ul>
                        <li className="mb-2">Any dog that isn&apos;t hairless and doesn&apos;t have a short, flat coat</li>
                        <li className="mb-2">A dog with enough hair on his head for a topknot (example: Poodle,<br /> Shih Tzu)</li>
                        <li>A short-coated dog that also has a double coat (example: Lab,<br /> Australian Cattle Dog)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Collapse>
        </Accordion>

        <Accordion>
          <CustomToggle title="Unit F" eventKey="0" />
          <Accordion.Collapse eventKey="0">
            <div className="container mb-5">
              <div className="row mb-5">
                <div className="col-12 col-lg-6">
                  <p>You&apos;ll now start to work with dogs that require special accommodations or considerations when grooming. This includes introducing puppies to the grooming process, grooming seniors and other dogs who might have health issues to consider when grooming, and dogs that may have behavioral issues that make them particularly difficult to groom.</p>
                </div>
                <div className="col-12 col-lg-6">
                  <a href=""><button className="btn btn-outline-secondary mb-4 btn-lg">Unit Total: 8-16 Hours + Practice</button></a>
                  <p className="lead"><strong>Readings:</strong> 1-2 hours</p>
                  <p className="lead"><strong>Video:</strong> 3 Videos (1½ hours)</p>
                  <p className="lead"><strong>Assignments:</strong>  9 (6-12 hours)</p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-lg-6 mb-4">
                  <div className="card w-100 bg-light">
                    <div className="card-body py-5">
                      <h4>Required Grooming Equipment:</h4>
                      <ul>
                        <li>Grooming tools appropriate for the dog breed you&apos;re working with (brushes, combs, clippers, nail tools, etc.)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mb-4">
                  <div className="card w-100 bg-light">
                    <div className="card-body py-5">
                      <h4>Required Dogs:</h4>
                      <ul>
                        <li className="mb-2">A senior dog</li>
                        <li>A puppy (under 1-year-old)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Collapse>
        </Accordion>

        <Accordion>
          <CustomToggle title="Unit G" eventKey="0" />
          <Accordion.Collapse eventKey="0">
            <div className="container mb-5">
              <div className="row mb-2">
                <div className="col-12 col-lg-6">
                  <Image className="mb-2" src={UnitGImage} alt="unit g image" />
                  <p className="mb-4">In the first unit of the dog grooming course, you&apos;ll meet your tutor and start learning about the fundamentals of dog grooming. This introductory unit includes theoretical studies on the history of dog grooming, and how to protect your health &amp; safety as a dog groomer.  You&apos;ll also learn about dog anatomy in great detail, and you&apos;ll start learning about skincare and esthetics.</p>
                  <p>Note: This unit is the lead-up to your practicum, therefore there are no practical assignments in this unit.</p>
                </div>
                <div className="col-12 col-lg-6">
                  <a href=""><button className="btn btn-outline-secondary btn-lg">Unit Total: 6-8 Hours</button></a>
                  <p className="lead"><strong>Readings:</strong> 1-2 hours</p>
                  <p className="lead"><strong>Video:</strong> 9 Videos (5 hours)</p>
                  <p className="lead"><strong>Assignments:</strong>  1 (1 hours)</p>
                  <hr className="my-4" />
                  <p className="lead"><strong>Required Grooming Equipment:</strong></p>
                  <p>None until practicum units</p>
                  <p className="lead"><strong>Required Dogs:</strong> One (any breed)</p>
                </div>
              </div>
            </div>
          </Accordion.Collapse>
        </Accordion>

        <Accordion>
          <CustomToggle title="Practicum Units" eventKey="0" />
          <Accordion.Collapse eventKey="0">
            <div className="container mb-5">
              <div className="row mb-5">
                <div className="col-12 col-lg-6">
                  <p className="mb-5">In your practicum units, you&apos;ll follow a series of assignments that will have you grooming full dogs from start to finish.  This is where all your knowledge from the course will come to a head. For best results, you&apos;ll want to complete a groom on several dogs before submitting your work for grading. It&apos;s only with practice that you will truly become a competent and successful professional dog groomer!</p>
                  <div className="mb-3">
                    <a href=""><button className="btn btn-outline-secondary mb-4 btn-lg">Unit Total: 6-8 Hours</button></a>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <Image src={PracticumUnitImage} alt="practicum units image" />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-12 mb-4 mb-lg-0 col-lg-6 d-flex align-items-strech">
                  <div className="card w-100 bg-light">
                    <div className="card-body">
                      <h4 className="mb-2"><strong>Practicum Unit 1: </strong></h4>
                      <p className="lead">The Bath</p>
                      <p>In this first practicum unit, you&apos;ll bathe a dog from head to tail. This will include prepping the dog for bathing, choosing the right tools for the job, giving the dog a thorough wash, and drying the dog afterward.</p>
                      <h4>Required Equipment:</h4>
                      <ul className="d-grid gap-2">
                        <li>All appropriate equipment for prep work</li>
                        <li>Grooming tub with restraints and a water supply</li>
                        <li>Dog shampoo &amp; conditioner appropriate for the dog&apos;s fur/skin type</li>
                        <li>Towels</li>
                        <li>High-velocity dryer</li>
                      </ul>
                      <h4>Required Dog:</h4>
                      <p>Any coated dog that is in need of a bath.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-strech">
                  <div className="card w-100 bg-light">
                    <div className="card-body">
                      <h4 className="mb-2"><strong>Practicum Unit 2: </strong></h4>
                      <p className="lead">Grooming a Natural Breed</p>
                      <p>This practicum unit will have you groom a natural breed dog, such as a purebred Golden Retriever or Shetland Sheepdog. Throughout 6 individual assignments, you&apos;ll go through the process of grooming the entire dog from prep work to grooming each body part and then putting the finishing touches on the dog.</p>
                      <h4>Required Equipment:</h4>
                      <ul className="d-grid gap-2">
                        <li>Appropriate equipment for prep work</li>
                        <li>Brushes &amp; combs appropriate for the dog&apos;s coat type &amp; needs.</li>
                        <li>Clippers &amp; appropriate clipper blades</li>
                        <li>Appropriate grooming scissors</li>
                        <li>Other grooming equipment appropriate for the dog</li>
                      </ul>
                      <h4>Required Dog:</h4>
                      <p>Purebred Golden Retriever or Purebred Shetland Sheepdog.</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="row mb-4">
                <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex align-items-strech">
                  <div className="card w-100 bg-light">
                    <div className="card-body">
                      <h4 className="mb-2"><strong>Practicum Unit 3: </strong></h4>
                      <p className="lead">The Teddy Bear Cut</p>
                      <p>The teddy bear cut will be among the most popular cuts requested by your grooming clients.  This is the type of cut anyone with a cute little fluffy dog will want to have!  So you&apos;ll want to take your time and practice to get this one right.  A groomer can make a good living on the teddy bear cut alone!</p>
                      <h4>Required Equipment:</h4>
                      <ul className="d-grid gap-2">
                        <li>Appropriate equipment for prep work</li>
                        <li>Brushes &amp; combs appropriate for the dog&apos;s coat type &amp; needs.</li>
                        <li>Clippers &amp; appropriate clipper blades</li>
                        <li>Appropriate grooming scissors</li>
                        <li>Other grooming equipment appropriate for the dog</li>
                      </ul>
                      <h4>Required Dog:</h4>
                      <p>A dog suitable for a teddy bear cut (example: a miniature poodle mix,<br /> Havanese mix, etc.) whose coat is at least two inches long</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-strech">
                  <div className="card w-100 bg-light">
                    <div className="card-body">
                      <h4 className="mb-2"><strong>Practicum Unit 4: </strong></h4>
                      <p className="lead">Grooming a Terrier</p>
                      <p>The terrier group hosts a pretty specific range of dog breeds, all of whom require frequent and regular grooming not only to stay looking their best but to stay healthy as well!  In this practicum unit, you&apos;ll groom a terrier from start to finish.</p>
                      <h4>Required Equipment:</h4>
                      <ul className="d-grid gap-2">
                        <li>Appropriate equipment for prep work</li>
                        <li>Brushes &amp; combs appropriate for the dog&apos;s coat type &amp; needs.</li>
                        <li>Clippers &amp; appropriate clipper blades</li>
                        <li>Appropriate grooming scissors</li>
                        <li>Other grooming equipment appropriate for the dog</li>
                      </ul>
                      <h4>Required Dog:</h4>
                      <p>A purebred Miniature Schnauzer, Standard Schnauzer, West Highland White Terrier, or Airedale Terrier</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex align-items-strech">
                  <div className="card w-100">
                    <div className="card-body py-5 bg-light">
                      <h4><strong>Practicum Unit 5: </strong></h4>
                      <p className="lead">Grooming a Non-Sporting Breed</p>
                      <p className="mb-4">The non-sporting class of dogs is one with a wide range of breeds.  For this practicum unit, you&apos;ll focus on two non-sporting breeds that are among the most often seen in a grooming salon: the Poodle and the Bichon Frise.  You&apos;ll groom one of these breeds (or both!) from head to tail. Don&apos;t forget your finishing touches!</p>
                      <h4 className="mb-4">Required Equipment:</h4>
                      <ul className="d-grid gap-2">
                        <li>Appropriate equipment for prep work</li>
                        <li>Brushes &amp; combs appropriate for the dog&apos;s coat type &amp; needs.</li>
                        <li>Clippers &amp; appropriate clipper blades</li>
                        <li>Appropriate grooming scissors</li>
                        <li>Other grooming equipment appropriate for the dog</li>
                      </ul>
                      <h4>Required Dog:</h4>
                      <p>A purebred Poodle or Bichon Frise</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-strech">
                  <div className="card w-100">
                    <div className="card-body">
                      <Image src={PracticumUnit5Image} alt="practicum unit 5 image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Collapse>
        </Accordion>

        <Accordion>
          <CustomToggle title="Unit H - Optional" eventKey="0" />
          <Accordion.Collapse eventKey="0">
            <div className="container mb-5">
              <div className="row mb-2">
                <div className="col-12 col-lg-6">
                  <div className="mb-2">
                    <p>By this point in the dog grooming class, you&apos;ve completed all your theoretical and practical work, and are feeling pretty confident in your grooming abilities! Now it&apos;s time to use those abilities in the real-world and turn your passion into a career.  The business training offered in this course is optional, however, it will be hugely beneficial if you want to freelance your services, if you intend on starting your own dog grooming business or salon, or if you&apos;re looking to get a job in an established salon.</p>
                  </div>
                  <p className="mb-4">You&apos;ll work with your tutor to name your dog grooming business and establish a business plan.  You&apos;ll learn all about different marketing techniques and how to use them effectively. You&apos;ll also read up on the most effective networking techniques and find out how to apply them to your business or job search.  Even if launching your business isn&apos;t in your immediate future, take advantage of this wonderful opportunity, and complete this optional unit of your course!</p>
                  <div className="mb-2">
                    <a href=""><button className="btn btn-outline-secondary mb-4 btn-lg">Unit Total: 9-16 Hours</button></a>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <Image src={UnitHImage} alt="unit h image" />
                </div>
              </div>
            </div>
          </Accordion.Collapse>
        </Accordion>
        <div className="row mx-2">
          <p className="text-center lead">View<Link href=""><a className="text-primary"> Sample Assignments </a></Link>from QC&apos;s Online Dog Grooming Course</p>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default DogGroomingCourseOutlinePage;

type Props = {
  eventKey: string;
  title: string;
};

const CustomToggle = ({ title, eventKey }: Props): ReactElement => {

  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey);

  const isOpen = activeEventKey === eventKey;

  return (
    <div className="container text-center">
      <div className="row justify-content-between border-bottom pb-3 mb-5" onClick={decoratedOnClick}>
        <div className="col-6 text-start">
          <h3>{title}</h3>
        </div>
        <div className="col-6 text-end">
          {isOpen ? <FaMinusCircle className="h3 text-primary mb-3" /> : <FaPlusCircle className="h3 text-primary mb-3" />}
        </div>
      </div>
    </div>
  );
};
