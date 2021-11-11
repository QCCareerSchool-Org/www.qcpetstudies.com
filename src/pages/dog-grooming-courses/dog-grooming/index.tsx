import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, Modal } from 'react-bootstrap';
import { BsCardChecklist, BsPeopleFill, BsScissors } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import { AccordionSection } from '../../../components/AccordionSection';
import { AccordionToggle } from '../../../components/AccordionToggle';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { PriceSection } from '../../../components/PriceSection';
import { SEO } from '../../../components/SEO';
import { useLocation } from '../../../hooks/useLocation';
import { usePrice } from '../../../hooks/usePrice';
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import { useToggle } from '../../../hooks/useToggle';

import DogGroomingBackground from '../../../images/backgrounds/dog-grooming.jpg';
import DogCourseMaterialsImage from '../../../images/dg-course-materials-manuals-kit-white.jpg';
import GroomingKitDetailImage from '../../../images/grooming-kit-details.jpg';
import CertificationGoldImage from '../../../images/IDGP-certification-gold.svg';
import MasterGroomerLisaImage from '../../../images/lisa-video-thumbnail.jpg';
import MovieClapperImage from '../../../images/movie-clapper.svg';
import OutlineImage from '../../../images/outline.svg';
import MasterGroomerPaddyImage from '../../../images/paddy-video-thumbnail.jpg';
import PlayBtnImage from '../../../images/play-btn.svg';
import { formatPrice } from '../../../lib/formatPrice';

const headerIconSize = 20;
const iconSize = 36;

const courseCodes = [ 'dg' ];

const DogGroomingPage: NextPage = () => {
  const screenWidth = useScreenWidth();
  const location = useLocation();
  const price = usePrice(courseCodes, location?.countryCode, location?.provinceCode);
  const [ kitPopupVisible, kitPopupToggle ] = useToggle();
  const [ trailerPopupVisible, trailerPopupToggle ] = useToggle();
  const [ lisaPopupVisible, lisaPopupToggle ] = useToggle();
  const [ paddyPopupVisible, paddyPopupToggle ] = useToggle();

  const mdOrGreater = screenWidth >= 768;
  const lgOrGreater = screenWidth >= 992;

  const md = mdOrGreater && !lgOrGreater;

  return (
    <DefaultLayout>
      <SEO
        title="Dog Grooming Course"
        description=""
        canonical="/dog-grooming-courses/dog-grooming"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={DogGroomingBackground} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="Bichon Frisee getting a haircut" />
        <div className="container text-center">
          <div className="row mb-4">
            <div className="mb-4">
              <Image src={CertificationGoldImage} alt="International Dog Grooming Professional IDGP certification" height="125" width="125" />
            </div>
            <h1>Dog Grooming</h1>
            {price && price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
            <p><em><a href="#tuitionSection" className="text-white">See tuition details</a></em></p>
            <a href="https://enroll.qcpetstudies.com?c[]=dg"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 d-flex">
              <div className="col text-uppercase">
                <button onClick={trailerPopupToggle} className="btn btn-link"><Image src={MovieClapperImage} alt="movie clapper" width={headerIconSize} height={headerIconSize} /></button>
                <p><strong>Trailer</strong></p>
              </div>
              <div className="col text-uppercase">
                <a href="#outlineSection"><Image src={OutlineImage} alt="outline" width={headerIconSize} height={headerIconSize} /></a>
                <p><strong>Outline</strong></p>
              </div>
              <div className="col text-uppercase">
                <a href="#sampleSection"><Image src={PlayBtnImage} alt="play button" width={headerIconSize} height={headerIconSize} /></a>
                <p><strong>Sample</strong></p>
              </div>
            </div>
          </div>
        </div>
        <Modal show={trailerPopupVisible} onHide={trailerPopupToggle} size="lg">
          <Modal.Header closeButton>Dog Grooming Course</Modal.Header>
          <Modal.Body>
            <div className="ratio ratio-16x9">
              <video controls autoPlay>
                <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/interview-paddy.mp4" type="video/mp4" />
              </video>
            </div>
          </Modal.Body>
        </Modal>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2>Become a <strong>Certified Dog Groomer</strong></h2>
              <p className="lead"><strong>International Dog Grooming Professional&trade;</strong> | <i>IDGP&trade;</i></p>
              <p>Get your International Dog Groomer Certification in less than a year with QC&apos;s interactive online training. Study at your own pace. Watch instructional videos and complete hands-on assignments to grow your grooming skills.  Graduate with all the knowledge and skills you need to succeed in the dog grooming industry!</p>
              <p className="mb-0">Are you ready to start an amazing career?</p>
            </div>
          </div>
        </div>
      </section>

      <PriceSection courses={courseCodes} doubleGuarantee={true} />

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-4">
              <h2 className="mb-2 mb-md-4">Included in <strong>Your Course</strong></h2>
              <Image src={DogCourseMaterialsImage} width={830} height={550} alt="course materials" />
              <div className="courseContentIcon"><BsScissors size={iconSize} /></div>
              <h3>Professional-Grade Grooming Starter Kit</h3>
              <p>When you enroll, you&apos;ll receive a kit of dog grooming tools to help you complete your studies and start your career. This kit includes cordless WAHL clippers and combs, three grooming scissors, an assortment of brushes and combs, and more!</p>
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
              <p className="mb-0">Just because you&apos;re learning online doesn&apos;t mean you&apos;re learning alone. You&apos;ll receive personalized audio feedback from your tutor on every dog grooming assignment you submit.</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="courseContentIcon"><IoMdInfinite size={iconSize} /></div>
              <h3>Lifetime{md ? <br /> : ' '}Access</h3>
              <p className="mb-0">Once you&apos;re a member of the QC family you &apos;ll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
            </div>
          </div>
        </div>
        <Modal show={kitPopupVisible} onHide={kitPopupToggle}>
          <Modal.Header closeButton>Dog Grooming Kit</Modal.Header>
          <Modal.Body>
            <Image src={GroomingKitDetailImage} layout="responsive" alt="groomiing kit details" />
          </Modal.Body>
        </Modal>
      </section>

      <section id="outlineSection" className="bg-light">
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
              <p>The first few units in this course will introduce you to the fundamental concepts of dog grooming. In these units, you&apos;ll cover health and safety, basic dog anatomy, skincare, behavior, the tools of the trade and more.</p>
              <p>During these units it is recommended that you start considering your grooming workspace so that you are prepared for the practical assignments later in the course. Unit C will be particularly helpful in selecting appropriate tools, equipment and products.</p>
              <p className="mb-0">It is also recommended that you start seeking out dog owners who are willing to let you use their dogs in practical assignments later in the course.</p>
            </AccordionSection>
            <AccordionToggle title="Dog First Aid Course" eventKey="1" />
            <AccordionSection eventKey="1">
              <p>In order to provide you with the resources to learn your craft safely, your grooming course also comes with a two-unit course on dog first aid. This course covers emergency situations that may occur in a grooming environment and prepares you to respond calmly and effectively in any emergency.</p>
              <p className="mb-0">You must complete both units of the First Aid course before proceeding to the next unit in the dog grooming course.</p>
            </AccordionSection>
            <AccordionToggle title="Hands-On units" eventKey="2" />
            <AccordionSection eventKey="2">
              <p className="mb-0">Once you understand the basics of dog grooming and dog first aid, you will move on to units that teach you the hands-on skills involved in grooming. In these units, you&apos;ll cover nail trimming, ear cleaning, brushing, de-matting, bathing, drying, coat types, pet cuts, breed standards and more. You&apos;ll complete a number of basic practical assignments that will prepare you to start your practicum.</p>
            </AccordionSection>
            <AccordionToggle title="Practicum" eventKey="3" />
            <AccordionSection eventKey="3">
              <p>Dog grooming as a profession requires a lot of background knowledge, but ultimately your success will depend on your ability to safely and skillfully groom dogs.</p>
              <p className="mb-0">Your practicum is designed to allow you to practice and receive feedback on these essential skills. The units within the practicum involve intensive practical assignments that draw on the content you&apos;ve mastered throughout the course. You&apos;ll have a chance to receive feedback from your tutors on your bathing and drying skills, in addition to the pet cuts and breed cuts you&apos;ll create throughout your career.</p>
            </AccordionSection>
            <AccordionToggle title="Dog Grooming Business Essentials" eventKey="4" />
            <AccordionSection eventKey="4">
              <h4>Units A&ndash;C</h4>
              <p>Dog grooming as a profession requires a lot of background knowledge, but ultimately your success will depend on your ability to safely and skillfully groom dogs.</p>
              <p className="mb-0">Your practicum is designed to allow you to practice and receive feedback on these essential skills. The units within the practicum involve intensive practical assignments that draw on the content you&apos;ve mastered throughout the course. You&apos;ll have a chance to receive feedback from your tutors on your bathing and drying skills, in addition to the pet cuts and breed cuts you&apos;ll create throughout your career.</p>
            </AccordionSection>
          </Accordion>
        </div>
      </section>

      <section id="sampleSection" className="bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h2>Free Course Preview</h2>
              <p>If you&apos;d like to see a more detailed course syllabus, view sample videos and download assignment examples, you can preview the dog grooming course for free!</p>
              <Link href="/dog-grooming-courses/dog-grooming/preview"><a className="btn btn-secondary">Preview the Course</a></Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <div className="pe-lg-4">
                <h2>Learn from Certified <strong>Master Groomers</strong></h2>
                <p>When you enroll with QC Pet Studies, you&apos;ll be matched with an industry professional currently working in the field who will review your work and provide you with in-depth feedback and advice on every assignment. These accomplished tutors are Certified Master Groomers who have decades of experience in the grooming industry and are eager to share their professional insight to help you succeed.</p>
                <p className="mb-0">Your personal tutor will provide you with in-depth audio feedback on each assignment to let you know what you did well and how you could improve. Use this feedback to guide you through the next unit in your course.</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-around">
              <div className="d-flex align-items-center mb-lg-4">
                <div className="me-4">
                  <button onClick={lisaPopupToggle} className="btn btn-link"><div className="imageShadowWrapper"><Image src={MasterGroomerLisaImage} alt="Master Groomer Lisa" width="250" height="166" placeholder="blur" /></div></button>
                </div>
                <div className="d-flex flex-column">
                  <h3>Lisa Day</h3>
                  <h4>Certified Master Groomer</h4>
                  <i>40+ Years of Experience</i>
                </div>
              </div>
              {!lgOrGreater && <div className="mb-4" />}
              <div className="d-flex align-items-center">
                <div className="me-4">
                  <button onClick={paddyPopupToggle} className="btn btn-link"><div className="imageShadowWrapper"><Image src={MasterGroomerPaddyImage} alt="Master Groomer Paddy" width="250" height="166" placeholder="blur" /></div></button>
                </div>
                <div className="d-flex flex-column">
                  <h3>Paddy Gaffney</h3>
                  <h4>Certified Master Groomer</h4>
                  <i>20 Years of Experience</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={lisaPopupVisible} onHide={lisaPopupToggle} size="lg">
          <Modal.Header closeButton>Lisa Day</Modal.Header>
          <Modal.Body>
            <div className="ratio ratio-16x9">
              <video controls autoPlay>
                <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/interview-lisa.mp4" type="video/mp4" />
              </video>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={paddyPopupVisible} onHide={paddyPopupToggle} size="lg">
          <Modal.Header closeButton>Paddy Gaffney</Modal.Header>
          <Modal.Body>
            <div className="ratio ratio-16x9">
              <video controls autoPlay>
                <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/interview-paddy.mp4" type="video/mp4" />
              </video>
            </div>
          </Modal.Body>
        </Modal>
      </section>

      <style jsx>{`
        .tutionButton { padding: 0; border: none; margin: 0 0 1rem; font-style: italic; background: none; color: white; font-weight: 300; }
        #outlineSection { background-color: #f7f7f7 !important; }
        .courseContentIcon { color: #ccc; margin-bottom: 0.5rem; }
        .imageShadowWrapper {
          padding-right: 12px; // to offset the shadow
        }
      `}</style>

    </DefaultLayout>
  );
};

export default DogGroomingPage;
