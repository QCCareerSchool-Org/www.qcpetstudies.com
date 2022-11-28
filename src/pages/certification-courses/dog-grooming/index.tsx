import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, Modal } from 'react-bootstrap';
import { BsCardChecklist, BsPeopleFill, BsScissors } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import { AccordionSection } from '../../../components/AccordionSection';
import { AccordionToggle } from '../../../components/AccordionToggle';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { DGTutorSection } from '../../../components/DGTutorSection';
import { GuaranteeSection } from '../../../components/GuaranteeSection';
import { PriceSection } from '../../../components/PriceSection';
import { SEO } from '../../../components/SEO';
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import { useToggle } from '../../../hooks/useToggle';
import DogGroomingBackground from '../../../images/backgrounds/bichon-frise-getting-haircut.jpg';
import GuaranteeIcon from '../../../images/course-overview-icons/guarantee.svg';
import OutlineIcon from '../../../images/course-overview-icons/outline.svg';
import TutorIcon from '../../../images/course-overview-icons/tutor.svg';
import DogCourseMaterialsImage from '../../../images/dg-course-materials-manuals-kit-white.jpg';
import GroomingKitDetailImage from '../../../images/grooming-kit-details.jpg';
import CertificationGoldImage from '../../../images/IDGP-certification-gold.svg';
import { formatPrice } from '../../../lib/formatPrice';
import { getLocation } from '../../../lib/getLocation';
import { lookupPrices } from '../../../lib/lookupPrices';
import type { Location } from '../../../models/location';
import type { PriceResult } from '../../../models/price';
import type { NextPageWithLayout } from '../../_app';

const headerIconSize = 20;
const iconSize = 36;

const courseCodes = [ 'dg' ];

type Props = {
  location: Location;
  price: PriceResult;
};

const DogGroomingPage: NextPageWithLayout<Props> = ({ price }) => {
  const screenWidth = useScreenWidth();
  const [ kitPopupVisible, kitPopupToggle ] = useToggle();

  const mdOrGreater = screenWidth >= 768;
  const lgOrGreater = screenWidth >= 992;

  const md = mdOrGreater && !lgOrGreater;

  return (
    <>
      <SEO
        title="Dog Grooming Course"
        description="Become a Certified Dog Groomer with Interactive Online Training!"
        canonical="/certification-courses/dog-grooming"
      />

      <section id="top" className="bg-dark">
        <Image src={DogGroomingBackground} layout="fill" objectFit="cover" objectPosition="right" placeholder="blur" alt="Bichon Frise getting a haircut" priority />
        <div className="container text-center">
          <div className="row mb-4">
            <div className="mb-4">
              <Image src={CertificationGoldImage} alt="International Dog Grooming Professional IDGP certification" height="125" width="125" />
            </div>
            <h1>Dog Grooming Course</h1>
            {price && price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
            <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
            <a href="https://enroll.qcpetstudies.com?c[]=dg"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 d-flex">
              <div className="col text-uppercase">
                <a href="#outline"><Image src={OutlineIcon} alt="outline" width={headerIconSize} height={headerIconSize} /></a>
                <p><strong>Outline</strong></p>
              </div>
              <div className="col text-uppercase">
                <a href="#guarantee"><Image src={GuaranteeIcon} alt="play button" width={headerIconSize} height={headerIconSize} /></a>
                <p><strong>Guarantee</strong></p>
              </div>
              <div className="col text-uppercase">
                <a href="#tutors"><Image src={TutorIcon} alt="play button" width={headerIconSize} height={headerIconSize} /></a>
                <p><strong>Tutors</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2>Become a <strong>Certified Dog Groomer</strong></h2>
              <p className="lead"><strong>International Dog Grooming Professional&trade;</strong> | <i>IDGP&trade;</i></p>
              <p>There's never been a better time to start a career as a dog groomer. Groomers all over the country have waiting lists or are simply refusing new clients. What an amazing opportunity to start a new and lucrative career!</p>
              <p>Get your International Dog Groomer Certification in less than a year with QC's interactive online training. Study at your own pace. Watch instructional videos and complete hands-on assignments to grow your grooming skills.  Graduate with all the knowledge and skills you need to succeed in the dog grooming industry!</p>
              <p className="mb-0">Are you ready to start an amazing career?</p>
            </div>
          </div>
        </div>
      </section>

      <PriceSection courses={courseCodes} price={price} doubleGuarantee={true} />

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <h2 className="mb-2 mb-md-4">Included in <strong>Your Course</strong></h2>
              <Image src={DogCourseMaterialsImage} layout="responsive" alt="course materials" />
              <div className="courseContentIcon"><BsScissors size={iconSize} /></div>
              <h3>Professional-Grade Grooming Starter Kit</h3>
              <p>When you enroll, you'll receive a kit of dog grooming tools to help you complete your studies and start your career. This kit includes cordless WAHL clippers and combs, three grooming scissors, an assortment of brushes and combs, and more!</p>
              <button onClick={kitPopupToggle} className="btn btn-link link-primary">View Kit Details</button>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="courseContentIcon"><BsCardChecklist size={iconSize} /></div>
              <h3>Newest{md ? <br /> : ' '}Course Materials</h3>
              <p className="mb-0">Your course materials are always available online and are always being updated with the latest industry standards.  Refer to your updated training guides throughout your career!</p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="courseContentIcon"><BsPeopleFill size={iconSize} /></div>
              <h3>Personalized{md ? <br /> : ' '}Feedback</h3>
              <p className="mb-0">Just because you're learning online doesn't mean you're learning alone. You'll receive personalized audio feedback from your tutor on every dog grooming assignment you submit.</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="courseContentIcon"><IoMdInfinite size={iconSize} /></div>
              <h3>Lifetime{md ? <br /> : ' '}Access</h3>
              <p className="mb-0">Once you're a member of the QC family you 'll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
            </div>
          </div>
        </div>
        <Modal show={kitPopupVisible} onHide={kitPopupToggle}>
          <Modal.Header closeButton>Dog Grooming Kit</Modal.Header>
          <Modal.Body>
            <Image src={GroomingKitDetailImage} layout="responsive" alt="grooming kit details" />
          </Modal.Body>
        </Modal>
      </section>

      <div id="outline" className="sectionAnchor" />
      <section className="bg-lighter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4 text-center">
              <h2>Course <strong>Outline</strong></h2>
              <p className="lead">The Dog Grooming Course is split into 5 parts, each containing individual training units.</p>
              <p>You must complete a unit with a satisfactory grade before you can submit assignment for the next units.</p>
            </div>
          </div>
          <Accordion defaultActiveKey="0">
            <AccordionToggle title="Introductory Units" eventKey="0" />
            <AccordionSection eventKey="0">
              <h4>Units A&ndash;C</h4>
              <p>The first few units in this course will introduce you to the fundamental concepts of dog grooming. In these units, you'll cover health and safety, basic dog anatomy, skincare, behavior, the tools of the trade and more.</p>
              <p>During these units it is recommended that you start considering your grooming workspace so that you are prepared for the practical assignments later in the course. Unit C will be particularly helpful in selecting appropriate tools, equipment and products.</p>
              <p>It is also recommended that you start seeking out dog owners who are willing to let you use their dogs in practical assignments later in the course.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
            </AccordionSection>
            <AccordionToggle title="Dog First Aid Course" eventKey="1" />
            <AccordionSection eventKey="1">
              <p>In order to provide you with the resources to learn your craft safely, your grooming course also comes with a two-unit course on dog first aid. This course covers emergency situations that may occur in a grooming environment and prepares you to respond calmly and effectively in any emergency.</p>
              <p>You must complete both units of the First Aid course before proceeding to the next unit in the dog grooming course.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
            </AccordionSection>
            <AccordionToggle title="Hands-On units" eventKey="2" />
            <AccordionSection eventKey="2">
              <p>Once you understand the basics of dog grooming and dog first aid, you will move on to units that teach you the hands-on skills involved in grooming. In these units, you'll cover nail trimming, ear cleaning, brushing, de-matting, bathing, drying, coat types, pet cuts, breed standards and more. You'll complete a number of basic practical assignments that will prepare you to start your practicum.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
            </AccordionSection>
            <AccordionToggle title="Practicum" eventKey="3" />
            <AccordionSection eventKey="3">
              <p>Dog grooming as a profession requires a lot of background knowledge, but ultimately your success will depend on your ability to safely and skillfully groom dogs.</p>
              <p>Your practicum is designed to allow you to practice and receive feedback on these essential skills. The units within the practicum involve intensive practical assignments that draw on the content you've mastered throughout the course. You'll have a chance to receive feedback from your tutors on your bathing and drying skills, in addition to the pet cuts and breed cuts you'll create throughout your career.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
            </AccordionSection>
            <AccordionToggle title="Dog Grooming Business Essentials" eventKey="4" />
            <AccordionSection eventKey="4">
              <h4>(Optional Unit)</h4>
              <p>Dog grooming is a creative career, but it's also a business. After completing your practicum you can choose to complete the optional Business Essentials unit. This unit will help you develop the skills you need to run your own successful dog grooming business, from building your brand to constructing a business plan to setting your prices.</p>
              <p className="mb-0"><Link href="/certification-courses/dog-grooming/course-outline" className="link-primary">View a more-detailed course syllabus</Link></p>
            </AccordionSection>
          </Accordion>
        </div>
      </section>

      <GuaranteeSection className="bg-light" double={true} />

      <DGTutorSection />

      <style jsx>{`
        .courseContentIcon { color: #ccc; margin-bottom: 0.5rem; }
      `}</style>
    </>
  );
};

DogGroomingPage.getLayout = page => <DefaultLayout footerCTAType="grooming">{page}</DefaultLayout>;

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const location = await getLocation(context);
  const price = await lookupPrices(courseCodes, location.countryCode, location.provinceCode);
  return { props: { location, price } };
};

export default DogGroomingPage;
