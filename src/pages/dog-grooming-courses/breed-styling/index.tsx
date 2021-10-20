import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ReactElement, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { FaAngleDown, FaMinusCircle, FaPlusCircle, FaSearch } from 'react-icons/fa';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { PriceSection } from '../../../components/PriceSection';
import { SEO } from '../../../components/SEO';

import Guarantee21Day from '../../../images/21-day-guarantee-outlined.svg';

import BreedStandards from '../../../images/backgrounds/breed-standards.jpg';
import BreedStylingCertificate from '../../../images/breed-styling-certificate.png';
import CourseIconBadge from '../../../images/course-icon-badge.svg';
import Part1 from '../../../images/part-1.jpg';
import Part2 from '../../../images/part-2.jpg';
import Part3 from '../../../images/part-3.jpg';

type Props = {
  eventKey: string;
  title: string;
};

const CustomToggle = ({ title, eventKey }: Props): ReactElement => {

  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey);

  const isOpen = activeEventKey === eventKey;

  return (

    <div className="row justify-content-between border-bottom pb-3 mb-3" onClick={decoratedOnClick}>
      <div className="col-6 text-start">
        <h3>{title}</h3>
      </div>
      <div className="col-6 text-end">
        {isOpen ? <FaMinusCircle /> : <FaPlusCircle />}
      </div>
    </div>

  );
};

const BreedStylingPage: NextPage = () => {
  return (
    <DefaultLayout secondaryTitle="Breed Styling Course">
      <SEO
        title="Breed Styling Course"
        description=""
        canonical="/dog-grooming-courses/breed-styling"
      />

      <section id="firstSection" className="bg-dark">
        <div className="container text-center">
          <Image src={CourseIconBadge} alt="Cource Icon Badge" width={60} height={60} />
          <h1><strong>BREED STYLING WORKSHOP</strong></h1>
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <p>Do you already have some grooming experience? If you want to upgrade your professional skillset and learn how to groom every breed, the Breed Styling Workshop is an excellent fit for you. Learn advanced styling techniques for purebred breeds without having to relearn the basics like grooming preparation, and scissor and clipper techniques.</p>
              <p>The Breed Styling Workshop starts with the fundamentals of dog anatomy and behavior. You&apos;ll learn professional grooming practices before moving on to your practical units where you&apos;ll groom a terrier, a non-sporting breed, a mixed breed, and a breed of your choice!</p>
              <p>Learn from certified master groomers who have over five decades of combined grooming experience. Our expert tutors will give you professional insight and feedback on your work to ensure your success in the workshop. Upon graduation, you&apos;ll receive the Breed Styling Workshop certificate of completion as well as the International Dog Grooming Professional (IDGP) designation. Your qualifications prove to clients and employers that you&apos;ve completed professional training.</p>
              <p>This workshop prepares students to take the optional NDGAA or Canadian Pet Stylists certification exams. Earn additional accreditations and advance your career!</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-start">
              <h2>QC&apos;s Breed Styling Workshop Includes:</h2>
              <ul>
                <li>1 manual consisting of 9 course texts covering essential information regarding dog anatomy and grooming procedures </li>
                <li>5 hours of video tutorials featuring Certified Master Groomers working on numerous breeds </li>
                <li>4 practicum units that enable you to complete a number of breed cuts from start to finish </li>
                <li>Free first aid training that provides you with the knowledge to prevent and respond to emergency situations </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6">
              <Image src={BreedStandards} alt="First Aid book" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <h2 className="mb-3">Who will benefit from this workshop?</h2>
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-start">
              <p>&#8212; Grooming assistants who want to expand their skillset into styling services</p>
              <p>&#8212; Dog groomers who are comfortable with basic services but want to enter conformation grooming competitions</p>
              <p>&#8212; Experienced dog groomers who have never received professional education on interpreting and implementing breed standards</p>
              <p>Fundamental pet service knowledge is a prerequisite for this workshop. You won&apos;t spend time reviewing grooming tools, hair clipping, bathing, drying, and brushing. Instead, skip right to grooming techniques for a variety of breeds. If you&apos;d like a refresher in these areas, we recommend the Dog Grooming course which covers the fundamentals and everything included in the Breed Styling Workshop.</p>
            </div>
          </div>
        </div>
      </section>

      <PriceSection courses={[ 'ds' ]} doubleGuarantee={false} />

      <section>
        <div className="container text-center">
          <h2>You&apos;ll Be Covered by QC&apos;s Money-Back Guarantee</h2>
          <Image src={Guarantee21Day} alt="First Aid book" />
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <strong><h2>The 21-Day Money Back Guarantee</h2></strong>
              <p>Try the course risk-free for 21 days. This gives you time to receive your course materials and evaluate whether the Breed Styling Workshop is right for you.  If you decide it&apos;s not a good fit, simply contact QC to arrange a return of your course materials for a refund. It&apos;s that easy! Note: All materials must be returned unused and in their original condition in order to get a full refund. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray pb-0">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h2>Your Certificate of Completion</h2>
              <p>Upon graduation, you&apos;ll receive your Breed Styling Workshop certificate. You&apos;ll also receive the International Dog Grooming Professional (IDGP) designation. These qualifications attest to your success in learning how to expertly groom a dog of any breed.</p>
              <Image src={BreedStylingCertificate} layout="responsive" alt="Breed Styling certification" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2>Tools to succeed</h2>
          <p> To complete the assignments in the course, you&apos;ll need the following tools:</p>
          <div className="row justify-content-evenly">
            <div className="col-4 text-lg-start">
              <ul>
                <li>A selection of grooming brushes and combs </li>
                <li>Dematting tools </li>
                <li>Nail clippers </li>
                <li>Styptic product </li>
                <li>Hemostats </li>
                <li>A selection of professional scissors </li>
                <li>Professional clippers with a selection of blades or blade settings </li>
                <li>Shampoos and conditioners </li>
              </ul>
            </div>

            <div className="col-4  text-lg-start">
              <ul>
                <li>Ear powder </li>
                <li>Restraints </li>
                <li>Grooming table </li>
                <li>Bathing setup </li>
                <li>High-velocity dryer and/or stand dryer </li>
                <li>Towels </li>
                <li>Face mask </li>
                <li>Ear protection </li>
              </ul>
            </div>
          </div>
          <p className="fst-italic">*Please note that you&apos;ll need to purchase these tools yourself if you don&apos;t already own them. As a student of QC Pet Studies, take advantage of discounts from established dog grooming brands.</p>
          <Link href="/your-dog-grooming-career/discounts-for-grooming-students"><a className="link-primary">See the list here!</a></Link>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container text-center">
          <FaSearch className="h1 text-primary mb-3" />
          <h2>Breed Styling Course At-A-Glance</h2>
          <p>Click on each part below for a quick overview of QC Pet Studies&apos; Breed Styling Workshop.</p>
          <FaAngleDown className="h1 text-primary" />
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">

          <Accordion>
            <CustomToggle title="Part 1 – Theoretical Foundations" eventKey="0" />
            <Accordion.Collapse eventKey="0">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-start">
                  <p>In the first part of the course, you&apos;ll review your knowledge of dog anatomy, skincare, and dog behavior. You&apos;ll learn all about the basics of working with canines and keeping yourself safe in the grooming environment.</p>
                  <h3>Dog Anatomy</h3>
                  <ul>
                    <li>Learn how a dog&apos;s skeletal and muscular structure informs you on interpreting grooming patterns. You&apos;ll also discover the physical variations between breeds that define appropriate cut and styling options.</li>
                  </ul>

                  <h3>Dog Skincare and Esthetics</h3>
                  <ul>
                    <li>Examine hair types and learn how to work with owners to maintain healthy skin and hair. You&apos;ll also touch on skin condition symptoms, causes, and treatments. You can&apos;t diagnose skin conditions (that&apos;s left to veterinarians), but groomers play a role in identifying potential abnormalities during appointments.</li>
                  </ul>

                  <h3>Dog Behavior</h3>
                  <ul>
                    <li>Focus on dog behavior as well as understanding dog temperaments. You&apos;ll learn about reading physical distress signals and how to adapt your own behavior to ease them into the grooming procedure.</li>
                  </ul>

                  <h3>Personal Health and Safety</h3>
                  <ul>
                    <li>Prevent illness and injury to yourself by learning all about handling grooming tools, preventing muscle strain, and maintaining a clean workspace.</li>
                  </ul>
                </div>
                <div className="col-12 col-lg-6">
                  <Image src={Part1} alt="First Aid book" />
                </div>
              </div>
            </Accordion.Collapse>
          </Accordion>

          <Accordion>
            <CustomToggle title="Part 2 – Dog First Aid Course" eventKey="0" />
            <Accordion.Collapse eventKey="0">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-start">
                  <p>The second part of the course covers foundational dog first aid training. Understand how to prevent illness and accidents and treat basic injuries in this condensed version of QC&apos;s Dog First Aid course.</p>
                  <h3>Safety Assessment and First Aid</h3>
                  <ul>
                    <li>Learn about pet afflictions and assessing symptoms. Then, learn how to properly check vitals, treat wounds, and perform rescue procedures.</li>
                  </ul>
                </div>
                <div className="col-12 col-lg-6">
                  <Image src={Part2} alt="First Aid book" />
                </div>
              </div>
            </Accordion.Collapse>
          </Accordion>

          <Accordion>
            <CustomToggle title="Part 3 – Practicum" eventKey="0" />
            <Accordion.Collapse eventKey="0">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-start">
                  <p>The last third of the course is broken up into four units. Learn all about interpreting breed standards and applying them to a variety of breeds. You&apos;ll complete a series of practical assignments grooming each dog from start to finish. Be tested on how well you adhere to official breed standards to bring out a dog&apos;s best features.</p>
                  <h3>Groom a different dog for each unit</h3>
                  <ul>
                    <li>Prepare and groom the head, body, limbs, rear, and tail of a variety of breeds most often tested in a certification exam.
                      <ul>
                        <li>Terrier</li>
                        <li>Non-sporting breed</li>
                        <li>Mixed breed</li>
                      </ul>
                    </li>
                    <li>Complete the course by researching and grooming a breed of your own choice</li>
                  </ul>
                </div>
                <div className="col-12 col-lg-6">
                  <Image src={Part3} alt="First Aid book" />
                </div>
              </div>
            </Accordion.Collapse>
          </Accordion>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default BreedStylingPage;
