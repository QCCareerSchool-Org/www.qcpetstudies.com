import { NextPage } from 'next';
import Image from 'next/image';
import { ReactElement, useContext, useState } from 'react';
import { Accordion, Button, Modal, useAccordionButton } from 'react-bootstrap';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { PriceSection } from '../../../components/PriceSection';
import { SEO } from '../../../components/SEO';
import PersnolizeFeedbackImage from '../../../images/account-multiple-check-outline.svg';
import LifeTimeAccessImage from '../../../images/all-inclusive.svg';
import DogGroomingBackground from '../../../images/backgrounds/dog-grooming.jpg';
import ContentCutImage from '../../../images/content-cut.jpg';
import DogCourseMaterialsImage from '../../../images/dg-course-materials-manuals-kit-white.jpg';
import GroomingKitDetailImage from '../../../images/grooming-kit-details.jpg';
import CertificationGoldImage from '../../../images/IDGP-certification-gold.svg';
import MasterGroomerLisaImage from '../../../images/lisa-video-thumbnail.jpg';

import MovieClapperImage from '../../../images/movie-clapper.svg';
import OutlineImage from '../../../images/outline.svg';
import MasterGroomerPaddyImage from '../../../images/paddy-video-thumbnail.jpg';
import PlayBtnImage from '../../../images/play-btn.svg';

import CourseMaterialsImage from '../../../images/playlist-check.svg';

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

const DogGroomingPage: NextPage = () => {
  const headerIconSize = 20;
  const iconSize30 = 30;
  const [ show, setshow ] = useState(false);
  return (
    <DefaultLayout>
      <SEO
        title="Dog Grooming Course"
        description=""
        canonical="/dog-grooming-courses/dog-grooming"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={DogGroomingBackground} layout="fill" objectFit="cover" objectPosition="center" alt="Dog Grooming" />
        <div className="container text-center">
          <div className="row mb-4">
            <Image src={CertificationGoldImage} alt="Certification Gold" height="125" width="250" />
            <h1>Dog Grooming</h1>
            <h4>Get Started For Only <strong>$99</strong></h4>
            <i>See tuition details</i>
          </div>
          <div className="row text-center mb-4">
            <a href="#"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center gap-5">
              <div className="text-uppercase">
                <Image src={MovieClapperImage} alt="Movie Clapper" width={headerIconSize} height={headerIconSize} />
                <p><strong>Trailer</strong></p>
              </div>
              <div className="text-uppercase">
                <Image src={OutlineImage} alt="Outline" width={headerIconSize} height={headerIconSize} />
                <p><strong>Outline</strong></p>
              </div>
              <div className="text-uppercase">
                <Image src={PlayBtnImage} alt="Play Button" width={headerIconSize} height={headerIconSize} />
                <p><strong>Sample</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2>Become a <strong>Certified Dog Groomer</strong></h2>
          <p className="lead"><strong>International Dog Grooming Professional | </strong> <p className="d-inline"> <i>IDGP </i></p></p>
          <p>Get your International Dog Groomer Certification in less than a year with QC&apos;s interactive online training. Study at your own pace. Watch instructional videos and complete hands-on assignments to grow your grooming skills.  Graduate with all the knowledge and skills you need to succeed in the dog grooming industry!</p>
          <p>Are you ready to start an amazing career?</p>
        </div>
      </section>

      <PriceSection courses={[ 'dg' ]} doubleGuarantee={true} />

      <section>
        <div className="container text-center">
          <h2 className="mb-2 mb-md-4">Included in <strong>Your Course</strong></h2>
          <Image src={DogCourseMaterialsImage} width={830} height={550} alt="Dg Course Materials" />
          <div className="text-center mb-4">
            <Image src={ContentCutImage} width={iconSize30} height={iconSize30} alt="Content Cut" />
            <h3>Professional-Grade Grooming Starter Kit</h3>
            <p>When you enroll, you&apos;ll receive a kit of dog grooming tools to help you complete your studies and start your career. This kit includes cordless WAHL clippers and combs, three grooming scissors, an assortment of brushes and combs, and more!</p>
            <a onClick={() => setshow(true)} className="text-uppercase"><strong> View Kit Details </strong></a>
            <Modal show={show}>
              <Modal.Body>
                <Image src={GroomingKitDetailImage} layout="responsive" alt="Groomiing kit details" />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => setshow(false)}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="row">
            <div className="d-flex flex-column flex-md-row gap-4">
              <div>
                <div className="mb-2 mb-md-4">
                  <Image src={CourseMaterialsImage} width={iconSize30} height={iconSize30} alt="Newest Course Materials" />
                </div>
                <h3>Newest Course Materials</h3>
                <p>Your course materials are always available online and are always being updated with the latest industry standards.  Refer to your updated training guides throughout your career!</p>
              </div>
              <div>
                <div className="mb-2 mb-md-4">
                  <Image src={PersnolizeFeedbackImage} width={iconSize30} height={iconSize30} alt="Personalized Feedback" />
                </div>
                <h3>Personalized Feedback</h3>
                <p>Just because you&apos;re learning online doesn&apos;t mean you&apos;re learning alone.  You&apos;ll receive personalized audio feedback from your tutor on every dog grooming assignment you submit.</p>
              </div>
              <div>
                <div className="mb-2 mb-md-4">
                  <Image src={LifeTimeAccessImage} width={iconSize30} height={iconSize30} alt="Lifetime Access" />
                </div>
                <h3>Lifetime Access</h3>
                <p>Once you&apos;re a member of the QC family you &apos;ll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1">
              <h2>Course Outline</h2>
              <p>The Dog Grooming Course is Split into 5 parts, each containing individual training units.</p>
            </div>
          </div>

          <Accordion>
            <CustomToggle title="Part 1 – Introductory Units" eventKey="0" />
            <Accordion.Collapse eventKey="0">
              <div className="row align-items-center">
                <div className="col-12 col-lg-12 mb-4 text-start">
                  <h3 className="mb-3">Units A-C</h3>
                  <p>The first few units in this course will introduce you to the fundamental concepts of dog grooming. In these units, you’ll cover health and safety, basic dog anatomy, skincare, behavior, the tools of the trade and more.</p>
                  <p>During these units it is recommended that you start considering your grooming workspace so that you are prepared for the practical assignments later in the course. Unit C will be particularly helpful in selecting appropriate tools, equipment and products.</p>
                  <p>It is also recommended that you start seeking out dog owners who are willing to let you use their dogs in practical assignments later in the course.</p>
                </div>
              </div>
            </Accordion.Collapse>
          </Accordion>

          <Accordion>
            <CustomToggle title="Part 2 – Dog First Aid Course" eventKey="0" />
            <Accordion.Collapse eventKey="0">
              <div className="row align-items-center">
                <div className="col-12 col-lg-12 mb-4 text-start">
                  <p>In order to provide you with the resources to learn your craft safely, your grooming course also comes with a two-unit course on dog first aid. This course covers emergency situations that may occur in a grooming environment and prepares you to respond calmly and effectively in any emergency.</p>
                  <p>You must complete both units of the First Aid course before proceeding to the next unit in the dog grooming course.</p>
                </div>
              </div>
            </Accordion.Collapse>
          </Accordion>

          <Accordion>
            <CustomToggle title="Part 3 – Hands-On units" eventKey="0" />
            <Accordion.Collapse eventKey="0">
              <div className="row align-items-center">
                <div className="col-12 col-lg-12 mb-4 text-start">
                  Once you understand the basics of dog grooming and dog first aid, you will move on to units that teach you the hands-on skills involved in grooming. In these units, you’ll cover nail trimming, ear cleaning, brushing, de-matting, bathing, drying, coat types, pet cuts, breed standards and more. You’ll complete a number of basic practical assignments that will prepare you to start your practicum.
                </div>
              </div>
            </Accordion.Collapse>
          </Accordion>

          <Accordion>
            <CustomToggle title="Part 4 – Practicum" eventKey="0" />
            <Accordion.Collapse eventKey="0">
              <div className="row align-items-center">
                <div className="col-12 col-lg-12 mb-4 text-start">
                  <p>Dog grooming as a profession requires a lot of background knowledge, but ultimately your success will depend on your ability to safely and skillfully groom dogs.</p>
                  <p>Your practicum is designed to allow you to practice and receive feedback on these essential skills. The units within the practicum involve intensive practical assignments that draw on the content you’ve mastered throughout the course. You’ll have a chance to receive feedback from your tutors on your bathing and drying skills, in addition to the pet cuts and breed cuts you’ll create throughout your career.
                  </p>
                </div>
              </div>
            </Accordion.Collapse>
          </Accordion>

          <Accordion>
            <CustomToggle title="Part 5 – Dog Grooming Business Essentials" eventKey="0" />
            <Accordion.Collapse eventKey="0">
              <div className="row align-items-center">
                <div className="col-12 col-lg-12 mb-4 text-start">
                  <h3 className="mb-3">Units A-C</h3>
                  <p>Dog grooming as a profession requires a lot of background knowledge, but ultimately your success will depend on your ability to safely and skillfully groom dogs.
                  </p>
                  <p>Your practicum is designed to allow you to practice and receive feedback on these essential skills. The units within the practicum involve intensive practical assignments that draw on the content you’ve mastered throughout the course. You’ll have a chance to receive feedback from your tutors on your bathing and drying skills, in addition to the pet cuts and breed cuts you’ll create throughout your career.
                  </p>
                </div>
              </div>
            </Accordion.Collapse>
          </Accordion>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <h2>Course <strong>Outline</strong></h2>
          <p><strong>The Dog Grooming Course is Split into 5 parts, each containing individual training units.</strong></p>
          <p>You must complete a unit with a satisfactory grade before you can submit assignment for the next units.</p>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <div className="card-header d-flex justify-content-between align-items-center p-3">
              <h3 className="mb-0">Introductory Units</h3>
              <a className="btn btn-primary" data-bs-toggle="collapse" data-target="collapse1" aria-controls="collapse1" href="#collapse1" role="button" aria-expanded="true">+</a>
              <div className="collapse" id="collapse1">
                <div className="card card-body">
                  <p className="lead"><strong>Units A-C</strong></p>
                  <p>The first few units in this course will introduce you to the fundamental concepts of dog grooming. In these units, you&apos;ll cover health and safety, basic dog anatomy, skincare, behavior, the tools of the trade and more.</p>
                  <p>During these units it is recommended that you start considering your grooming workspace so that you are prepared for the practical assignments later in the course. Unit C will be particularly helpful in selecting appropriate tools, equipment and products.</p>
                  <p>It is also recommended that you start seeking out dog owners who are willing to let you use their dogs in practical assignments later in the course.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <div className="card-header d-flex justify-content-between align-items-center p-3">
              <h3 className="mb-0">Dog First Aid Course</h3>
              <a className="btn btn-primary" data-bs-togle="collapse" href="#part2" role="button" aria-expanded="false" aria-controls="collapseExample">+</a>
              <div className="collapse" id="part2">
                <div className="card card-body">
                  <p>In order to provide you with the resources to learn your craft safely, your grooming course also comes with a two-unit course on dog first aid. This course covers emergency situations that may occur in a grooming environment and prepares you to respond calmly and effectively in any emergency.</p>
                  <p>You must complete both units of the First Aid course before proceeding to the next unit in the dog grooming course.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <div className="card-header d-flex justify-content-between align-items-center p-3">
              <h3 className="mb-0">Hands-On units</h3>
              <a className="btn btn-primary" data-bs-togle="collapse" href="#part3" role="button" aria-expanded="false" aria-controls="collapseExample">+</a>
              <div className="collapse" id="part3">
                <div className="card card-body">
                  <p>Once you understand the basics of dog grooming and dog first aid, you will move on to units that teach you the hands-on skills involved in grooming. In these units, you&apos;ll cover nail trimming, ear cleaning, brushing, de-matting, bathing, drying, coat types, pet cuts, breed standards and more. You&apos;ll complete a number of basic practical assignments that will prepare you to start your practicum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <div className="card-header d-flex justify-content-between align-items-center p-3">
              <h3 className="mb-0">Practicum </h3>
              <a className="btn btn-primary" data-bs-togle="collapse" href="#part4" role="button" aria-expanded="false" aria-controls="collapseExample">+</a>
              <div className="collapse" id="part4">
                <div className="card card-body">
                  <p>Dog grooming as a profession requires a lot of background knowledge, but ultimately your success will depend on your ability to safely and skillfully groom dogs. Your practicum is designed to allow you to practice and receive feedback on these essential skills. The units within the practicum involve intensive practical assignments that draw on the content you&apos;ve mastered throughout the course. You&apos;ll have a chance to receive feedback from your tutors on your bathing and drying skills, in addition to the pet cuts and breed cuts you&apos;ll create throughout your career.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <div className="card-header d-flex justify-content-between align-items-center p-3">
              <h3 className="mb-0">Dog Grooming Business Essentials</h3>
              <a className="btn btn-primary" data-bs-togle="collapse" href="#part5" role="button" aria-expanded="false" aria-controls="collapseExample">+</a>
              <div className="collapse" id="part5">
                <div className="card card-body">
                  <p>Dog grooming as a profession requires a lot of background knowledge, but ultimately your success will depend on your ability to safely and skillfully groom dogs. Your practicum is designed to allow you to practice and receive feedback on these essential skills. The units within the practicum involve intensive practical assignments that draw on the content you&apos;ve mastered throughout the course. You&apos;ll have a chance to receive feedback from your tutors on your bathing and drying skills, in addition to the pet cuts and breed cuts you&apos;ll create throughout your career.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
              <div className="col-12 col-md-5">
                <h2>Learne from Certified <strong>Master Groomers</strong></h2>
                <p>When you enroll with QC Pet Studies, you&apos;ll be matched with an industry professional currently working in the field who will review your work and provide you with in-depth feedback and advice on every assignment. These accomplished tutors are Certified Master Groomers who have decades of experience in the grooming industry and are eager to share their professional insight to help you succeed.</p>
                <p>Your personal tutor will provide you with in-depth audio feedback on each assignment to let you know what you did well and how you could improve. Use this feedback to guide you through the next unit in your course.</p>
              </div>
              <div className="col-12 col-md-5 d-flex flex-column gap-5">
                <div className="d-flex gap-4 align-items-center">
                  <Image src={MasterGroomerLisaImage} alt="Master groomer Lisa" objectFit="contain" width="190px" height="170px" />
                  <div>
                    <h3>Lisa Day</h3>
                    <h4>Certified Master Groomer</h4>
                    <i>40+ Years of Experience</i>
                  </div>
                </div>
                <div className="d-flex gap-4 align-items-center">
                  <Image src={MasterGroomerPaddyImage} alt="Master groomer Paddy" objectFit="contain" width="190px" height="170px" />
                  <div>
                    <h3>Paddy Gaffney</h3>
                    <h4>Certified Master Groomer</h4>
                    <i>20 Years of Experience</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default DogGroomingPage;
