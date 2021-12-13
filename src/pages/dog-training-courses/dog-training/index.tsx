import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, Modal } from 'react-bootstrap';
import { BsCardChecklist, BsPeopleFill } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';

import { AccordionSection } from '../../../components/AccordionSection';
import { AccordionToggle } from '../../../components/AccordionToggle';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { DTTutorSection } from '../../../components/DTTutorSection';
import { GuaranteeSection } from '../../../components/GuaranteeSection';
import { PriceSection } from '../../../components/PriceSection';
import { SEO } from '../../../components/SEO';
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import { useToggle } from '../../../hooks/useToggle';
import DTBackgroundImage from '../../../images/backgrounds/australian-shepherd-attentive.jpg';
import GuaranteeIcon from '../../../images/course-overview-icons/guarantee.svg';
import MovieClapperIcon from '../../../images/course-overview-icons/movie-clapper.svg';
import OutlineIcon from '../../../images/course-overview-icons/outline.svg';
import TutorIcon from '../../../images/course-overview-icons/tutor.svg';
import IntroductoryUnitsImage from '../../../images/dt-outline-part-1-image.jpg';
import ApplyingTrainingPrinciplesImage from '../../../images/dt-outline-part-2-image.jpg';
import TeachingPeopleImage from '../../../images/dt-outline-part-3-image.jpg';
import DogTrainingBusinessImage from '../../../images/dt-outline-part-4-image.jpg';
import CPDTPrepImage from '../../../images/german-shepherd-puppy-sitting.jpg';
import CertificationGoldImage from '../../../images/IDTP-certification-gold-2.svg';
import { formatPrice } from '../../../lib/formatPrice';
import { getLocation } from '../../../lib/getLocation';
import { lookupPrices } from '../../../lib/lookupPrices';
import type { Location } from '../../../models/location';
import type { PriceResult } from '../../../models/price';

const headerIconSize = 20;
const iconSize = 36;

const courseCodes = [ 'dt' ];

type Props = {
  location: Location;
  price: PriceResult;
};

const DogTrainingPage: NextPage<Props> = ({ price }) => {
  const screenWidth = useScreenWidth();
  const [ trailerPopupVisible, trailerPopupToggle ] = useToggle();

  const mdOrGreater = screenWidth >= 768;
  const lgOrGreater = screenWidth >= 992;

  const md = mdOrGreater && !lgOrGreater;

  return (
    <DefaultLayout secondaryTitle="Dog Training Course">
      <SEO
        title="Dog Training Course"
        description="Become a Professional Dog Trainer with QC's online dog training course. Study Online with Hands-On Learning!"
        canonical="/dog-training-courses/dog-training"
      />

      <section id="top" className="bg-dark">
        <Image src={DTBackgroundImage} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="Attentive Australian Shepherd Dog" />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row mb-4">
            <div className="mb-4">
              <Image src={CertificationGoldImage} alt="International Dog Training Professional IDTP Certification" height="125" width="125" />
            </div>
            <h1>Dog Training Course</h1>
            {price && price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
            <p><em><a href="#tuition" className="text-white">See tuition details</a></em></p>
            <a href="https://enroll.qcpetstudies.com?c[]=dt"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 d-flex">
              <div className="col text-uppercase">
                <button onClick={trailerPopupToggle} className="btn btn-link"><Image src={MovieClapperIcon} alt="movie clapper" width={headerIconSize} height={headerIconSize} /></button>
                <p><strong>Trailer</strong></p>
              </div>
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
        <Modal show={trailerPopupVisible} onHide={trailerPopupToggle} size="lg">
          <Modal.Header closeButton>Dog Training Course</Modal.Header>
          <Modal.Body>
            <div className="ratio ratio-16x9">
              <video controls autoPlay>
                <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/dog-training-trailer.mp4" type="video/mp4" />
              </video>
            </div>
          </Modal.Body>
        </Modal>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2>Become a <strong>Certified Dog Trainer</strong></h2>
              <p className="lead"><strong>International Dog Training Professional&trade;</strong> | <i>IDTP&trade;</i></p>
              <p>Dog training is a booming industry! Owners need help to turn their dogs into well-behaved members of the family, and they want someone qualified to help them achieve this goal.  Whether you want to work in a training school, launch your own dog training business, or freelance as a private dog trainer, you'll graduate with all the knowledge and skills you need to succeed in the dog training industry!</p>
              <p className="lead mb-0">Are you ready to start an amazing career?</p>
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
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="courseContentIcon"><BsCardChecklist size={iconSize} /></div>
              <h3>Newest{md ? <br /> : ' '}Course Materials</h3>
              <p className="mb-0">Your course materials are always available online and are always being updated with the latest science-based industry standards. Refer to your updated training guides throughout your career!</p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="courseContentIcon"><BsPeopleFill size={iconSize} /></div>
              <h3>Personalized{md ? <br /> : ' '}Feedback</h3>
              <p className="mb-0">Just because you're learning online doesn't mean you're learning alone. You'll receive personalized audio feedback from your tutor on every dog training assignment you submit. Use this feedback to improve and succeed!</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="courseContentIcon"><IoMdInfinite size={iconSize} /></div>
              <h3>Lifetime{md ? <br /> : ' '}Access</h3>
              <p className="mb-0">Once you're a member of the QC family you'll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
            </div>
          </div>
        </div>
      </section>

      <div id="outline" className="sectionAnchor" />
      <section className="bg-lighter">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col12 col-lg-10 text-center">
              <h2>Course <strong>Outline</strong></h2>
              <p className="lead mb-0">The Dog training Course is split into four parts, each containing individual training units.</p>
            </div>
          </div>
          <Accordion defaultActiveKey="0">
            <AccordionToggle title="Introductory Units" eventKey="0" />
            <AccordionSection eventKey="0">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <p>Before you learn about how to train dogs, you have to learn about dogs. This includes breed types and characteristics, how dogs communicate with each other and with humans, what constitutes normal and abnormal canine behaviors, and&mdash;most importantly&mdash;how dogs actually learn. Once you become an expert in canine behavior and communication, you'll be in excellent shape to start working with dogs to teach new behaviors and correct unwanted behaviors!</p>
                  <p>What you'll learn:</p>
                  <ul>
                    <li>guiding principles of dog training</li>
                    <li>fundamentals of safe training</li>
                    <li>ethology</li>
                    <li>stages of development</li>
                    <li>socialization stages</li>
                    <li>canine communication</li>
                    <li>calming signals</li>
                    <li>fear responses</li>
                    <li>problem solving</li>
                    <li>learning theory</li>
                    <li>applying learning theory</li>
                  </ul>
                  <p className="mb-0"><Link href="/dog-training-courses/dog-training/course-outline"><a className="link-primary">View a more-detailed course syllabus</a></Link></p>
                </div>
                {lgOrGreater && (
                  <div className="col-6 col-xl-5">
                    <Image src={IntroductoryUnitsImage} layout="responsive" alt="Dog runing" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Applying Training Principles" eventKey="1" />
            <AccordionSection eventKey="1">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <p>Now that you have a deep understanding of how dogs learn and communicate, you're ready to start applying training techniques to teach new behaviors and address unwanted behaviors. This course teaches scientifically-proven techniques and methods based on learning theory. You'll learn how to apply classical and operant conditioning principles to any type of training situation. Always remember: There is no magic formula that works for every dog, but every dog has a formula that will work for them.</p>
                  <p>What you'll learn:</p>
                  <ul>
                    <li>training methods
                      <ul>
                        <li>luring</li>
                        <li>shaping</li>
                        <li>targeting</li>
                        <li>modelling</li>
                        <li>capturing</li>
                        <li>mimicry</li>
                      </ul>
                    </li>
                    <li>motivations</li>
                    <li>reinforcement schedules</li>
                    <li>training tools</li>
                    <li>addressing unwanted behaviors</li>
                  </ul>
                  <p className="mb-0"><Link href="/dog-training-courses/dog-training/course-outline"><a className="link-primary">View a more-detailed course syllabus</a></Link></p>
                </div>
                {lgOrGreater && (
                  <div className="col-6 col-xl-5">
                    <Image src={ApplyingTrainingPrinciplesImage} layout="responsive" alt="Dog learning from human" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Teaching People" eventKey="2" />
            <AccordionSection eventKey="2">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <p>A dog trainer's job isn't just to train dogs. As a trainer a big part of your job will be to teach people how to train their own dogs!  This requires a unique set of skills that you'll have to develop. You have to understand how people learn and how to communicate your expertise to dog owners who are looking for help. This part of the dog trainer course will help you learn those skills!</p>
                  <p>What you'll learn:</p>
                  <ul>
                    <li>how to work as a trainer
                      <ul>
                        <li>facilitating learning for clients</li>
                        <li>teaching private lessons</li>
                        <li>teaching group classes</li>
                      </ul>
                    </li>
                    <li>teaching skills
                      <ul>
                        <li>strategies for teaching people</li>
                        <li>communicating with dog owners</li>
                        <li>preparing yourself for working with clients</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-0"><Link href="/dog-training-courses/dog-training/course-outline"><a className="link-primary">View a more-detailed course syllabus</a></Link></p>
                </div>
                {lgOrGreater && (
                  <div className="col-6 col-xl-5">
                    <Image src={TeachingPeopleImage} layout="responsive" alt="person training dog" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Starting your Dog Training Business" eventKey="3" />
            <AccordionSection eventKey="3">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <p>You've learned and practiced all the skills you need to successfully work as a dog trainer. Now it's time to turn your finely honed skills into a business! The business training offered in this course is optional. However, this training will be hugely beneficial to your career if you intend to start your own training business, or if you're looking to get a job working for an established trainer.</p>
                  <p>What you'll learn:</p>
                  <ul>
                    <li>how to get your business started</li>
                    <li>choosing a name for your business</li>
                    <li>business insurance requirements and recommendations</li>
                    <li>creating a business plan</li>
                    <li>marketing techniques</li>
                    <li>selling your services</li>
                  </ul>
                  <p className="mb-0"><Link href="/dog-training-courses/dog-training/course-outline"><a className="link-primary">View a more-detailed course syllabus</a></Link></p>
                </div>
                {lgOrGreater && (
                  <div className="col-6 col-xl-5">
                    <Image src={DogTrainingBusinessImage} layout="responsive" alt="person working on laptop" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="CPDT Exam Prep" eventKey="4" />
            <AccordionSection eventKey="4">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <p>Many profeeional dog trainers strive to pass the Certified Professional Dog Trainer (CPDT) exam from the Certification Council for Professional Dog Trainers.  The CPDT is the gold-standard for dog trainers who have the knowledge and skills to train dogs using scientifically-proven methods. Your QC Dog training course teaches you everything you need to know to pass your CPDT exam. As an added bonus, you have access to an extra optional unit to help prepare you to write the CPDT exam! </p>
                  <p>This optional unit includes:</p>
                  <ul>
                    <li>Information about the Certified Proessional Dog Trainers (CPDT) Exam</li>
                    <li>Useful tips to help you prepare for your exam</li>
                    <li>A practice quiz to help make sure you're ready!</li>
                  </ul>
                  <p className="mb-0"><Link href="/dog-training-courses/dog-training/course-outline"><a className="link-primary">View a more-detailed course syllabus</a></Link></p>
                </div>
                {lgOrGreater && (
                  <div className="col-6 col-xl-5">
                    <Image src={CPDTPrepImage} layout="responsive" alt="German Shepherd puppy" />
                  </div>
                )}
              </div>
            </AccordionSection>
          </Accordion>
        </div>
      </section>

      <DTTutorSection />

      <GuaranteeSection className="bg-light" />

    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const location = await getLocation(context);
  const price = await lookupPrices(courseCodes, location.countryCode, location.provinceCode);
  return { props: { location, price } };
};

export default DogTrainingPage;
