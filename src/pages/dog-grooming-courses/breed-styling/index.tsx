import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';

import { AccordionSection } from '../../../components/AccordionSection';
import { AccordionToggle } from '../../../components/AccordionToggle';
import { Bar } from '../../../components/Bar';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { PriceSection } from '../../../components/PriceSection';
import { SEO } from '../../../components/SEO';
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import Guarantee21DayImage from '../../../images/21-day-guarantee-outlined.svg';
import StylingBackground from '../../../images/backgrounds/black-medium-size-poodle.jpg';
import BreedStandardsBook from '../../../images/books/breed-standards.jpg';
import BreedStylingCertificateImage from '../../../images/breed-styling-certificate.png';
import CourseIconBadge from '../../../images/course-icon-badge.svg';
import OutlinePart1 from '../../../images/ds-outlline-part-1-anatomy.jpg';
import OutlinePart2 from '../../../images/ds-outlline-part-2-first-aid.jpg';
import OutlinePart3 from '../../../images/ds-outlline-part-3-grooming.jpg';
import { getLocation } from '../../../lib/getLocation';
import { lookupPrices } from '../../../lib/lookupPrices';
import type { Location } from '../../../models/location';
import type { PriceResult } from '../../../models/price';
import type { NextPageWithLayout } from '../../_app';

const courseCodes = [ 'ds' ];

type Props = {
  location: Location;
  price: PriceResult;
};

const BreedStylingPage: NextPageWithLayout<Props> = ({ price }) => {
  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;

  return (
    <>
      <SEO
        title="Breed Styling Workshop"
        description="If you're already a professional dog groomer, the breed styling workshop will take your grooming skills to the next level. Start today!"
        canonical="/dog-grooming-courses/breed-styling"
      />

      <section id="top" className="bg-dark">
        <Image src={StylingBackground} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="dog getting a haircut" priority />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <Image src={CourseIconBadge} alt="Cource Icon Badge" />
          <h1>Breed Styling Workshop</h1>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <p>Do you already have some grooming experience? If you want to upgrade your professional skillset and learn how to groom every breed, the Breed Styling Workshop is an excellent fit for you. Learn advanced styling techniques for purebred breeds without having to relearn the basics like grooming preparation, and scissor and clipper techniques.</p>
              <p>The Breed Styling Workshop starts with the fundamentals of dog anatomy and behavior. You'll learn professional grooming practices before moving on to your practical units where you'll groom a terrier, a non-sporting breed, a mixed breed, and a breed of your choice!</p>
              <p>Learn from certified master groomers who have over five decades of combined grooming experience. Our expert tutors will give you professional insight and feedback on your work to ensure your success in the workshop. Upon graduation, you'll receive the Breed Styling Workshop certificate of completion as well as the International Dog Grooming Professional&trade; (IDGP&trade;) designation. Your qualifications prove to clients and employers that you've completed professional training.</p>
              <p className="mb-0">This workshop prepares students to take the optional NDGAA or Canadian Pet Stylists certification exams. Earn additional accreditations and advance your career!</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-start">
              <h2>QC's Breed Styling Workshop Includes</h2>
              <ul>
                <li>9 online course texts covering essential information regarding dog anatomy and grooming procedures</li>
                <li>5 hours of video tutorials featuring <Link href="/tutors/"><a className="link-primary">Certified Master Groomers</a></Link> working on numerous breeds</li>
                <li>4 practicum units that enable you to complete a number of breed cuts from start to finish</li>
                <li>Free first aid training that provides you with the knowledge to prevent and respond to emergency situations</li>
              </ul>
            </div>
            <div className="col-12 col-lg-6">
              <Image src={BreedStandardsBook} alt="Breed Standards course text" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-start">
              <h2 className="mb-3">Who Will Benefit from This Workshop?</h2>
              <ul>
                <li>Grooming assistants who want to expand their skillset into styling services</li>
                <li>Dog groomers who are comfortable with basic services but want to enter conformation grooming competitions</li>
                <li>Experienced dog groomers who have never received professional education on interpreting and implementing breed standards</li>
              </ul>
              <p className="mb-0">Fundamental pet service knowledge is a prerequisite for this workshop. You won't spend time reviewing grooming tools, hair clipping, bathing, drying, and brushing. Instead, skip right to grooming techniques for a variety of breeds. If you'd like a refresher in these areas, we recommend the <Link href="/dog-grooming-courses/dog-grooming"><a className="link-primary"> Dog Grooming course </a></Link> which covers the fundamentals and everything included in the Breed Styling Workshop.</p>
            </div>
          </div>
        </div>
      </section>

      <PriceSection courses={courseCodes} price={price} doubleGuarantee={true} />

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <h2 className="mb-4">You'll Be Covered by QC's <strong>Money-Back Guarantee</strong></h2>
              <Image src={Guarantee21DayImage} alt="21 Day Money Back Guarantee" />
            </div>
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h3>The 21-Day Money Back Guarantee</h3>
              <p className="mb-0">Try the course risk-free for 21 days. This gives you time to receive your course materials and evaluate whether the Breed Styling Workshop is right for you.  If you decide it's not a good fit, simply contact QC to arrange a return of your course materials for a refund. It's that easy! Note: All materials must be returned unused and in their original condition in order to get a full refund. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray pb-0">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="mb-2">Your Certificate of Completion</h2>
              <p className="mb-4">Upon graduation, you'll receive your Breed Styling Workshop certificate. You'll also receive the International Dog Grooming Professional (IDGP) designation. These qualifications attest to your success in learning how to expertly groom a dog of any breed.</p>
            </div>
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <Image src={BreedStylingCertificateImage} layout="responsive" alt="Breed Styling Workshop certificate" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2>Tools to succeed</h2>
              <p>To complete the assignments in the course, you'll need the following tools:</p>
            </div>
            {lgOrGreater
              ? ( // display in two columns in cards
                <>
                  <div className="col-12 col-lg-4 text-start mb-4 d-flex">
                    <div className="card">
                      <div className="card-body">
                        <ul className="no-indent mb-0">
                          <li>A selection of grooming brushes and combs</li>
                          <li>Dematting tools</li>
                          <li>Nail clippers</li>
                          <li>Styptic product</li>
                          <li>Hemostats</li>
                          <li>A selection of professional scissors</li>
                          <li>Professional clippers with a selection of blades or blade settings</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 text-start mb-4 d-flex">
                    <div className="card">
                      <div className="card-body">
                        <ul className="no-indent mb-0">
                          <li>Shampoos and conditioners</li>
                          <li>Ear powder</li>
                          <li>Restraints</li>
                          <li>Grooming table</li>
                          <li>Bathing setup</li>
                          <li>High-velocity dryer and/or stand dryer</li>
                          <li>Towels</li>
                          <li>Face mask</li>
                          <li>Ear protection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )
              : ( // display in a single column
                <div className="col-10 col-sm-8 text-start mb-4">
                  <ul className="mb-0">
                    <li>A selection of grooming brushes and combs</li>
                    <li>Dematting tools</li>
                    <li>Nail clippers</li>
                    <li>Styptic product</li>
                    <li>Hemostats</li>
                    <li>A selection of professional scissors</li>
                    <li>Professional clippers with a selection of blades or blade settings</li>
                    <li>Shampoos and conditioners</li>
                    <li>Ear powder</li>
                    <li>Restraints</li>
                    <li>Grooming table</li>
                    <li>Bathing setup</li>
                    <li>High-velocity dryer and/or stand dryer</li>
                    <li>Towels</li>
                    <li>Face mask</li>
                    <li>Ear protection</li>
                  </ul>
                </div>
              )
            }
            <div className="col-12 col-lg-10">
              <p className="fst-italic">Please note that you'll need to purchase these tools yourself if you don't already own them. As a student of QC Pet Studies, take advantage of discounts from established dog grooming brands.</p>
              <Link href="/about/student-discounts"><a className="link-primary">See the list here!</a></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lighter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-10-lg mb-4 text-center">
              <h2>Course <strong>Outline</strong></h2>
              <p className="lead">The Breed Styling Wokshop is split into three parts, each containing individual training units.</p>
              <p>You must complete a unit with a satisfactory grade before you can submit assignments for the next units.</p>
            </div>
          </div>
          <Accordion defaultActiveKey="0">
            <AccordionToggle title="Part 1: Theoretical Foundations" eventKey="0" />
            <AccordionSection eventKey="0">
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
                {lgOrGreater && (
                  <div className="col-lg-4">
                    <Image src={OutlinePart1} alt="Dog Anatomy" layout="responsive" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Part 2: Dog First Aid Course" eventKey="1" />
            <AccordionSection eventKey="1">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <p className="lead">The second part of the course covers foundational dog first aid training. Understand how to prevent illness and accidents and treat basic injuries in this condensed version of QC's Dog First Aid course.</p>
                  <Bar variant="primary" align="start" />
                  <h4>Safety Assessment and First Aid</h4>
                  <p className="mb-0">Learn about pet afflictions and assessing symptoms. Then, learn how to properly check vitals, treat wounds, and perform rescue procedures.</p>
                </div>
                {lgOrGreater && (
                  <div className="col-lg-4">
                    <Image src={OutlinePart2} alt="Safety Assessment and First Aid" layout="responsive" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Part 3: Practicum" eventKey="2" />
            <AccordionSection eventKey="2">
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
                {lgOrGreater && (
                  <div className="col-lg-4">
                    <Image src={OutlinePart3} alt="Practicum" layout="responsive" />
                  </div>
                )}
              </div>
            </AccordionSection>
          </Accordion>
        </div>
      </section>
    </>
  );
};

BreedStylingPage.getLayout = page => <DefaultLayout footerCTAType="grooming">{page}</DefaultLayout>;

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const location = await getLocation(context);
  const price = await lookupPrices(courseCodes, location.countryCode, location.provinceCode);
  return { props: { location, price } };
};

export default BreedStylingPage;
