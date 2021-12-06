import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, Modal } from 'react-bootstrap';
import { BsCardChecklist, BsPeopleFill } from 'react-icons/bs';
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
import CertificationGoldImage from '../../../images/IDTP-certification-gold-2.svg';
import MovieClapperImage from '../../../images/movie-clapper.svg';
import OutlineImage from '../../../images/outline.svg';
import IntroductoryUnitsImage from '../../../images/part-1-image.jpg';
import ApplyingTrainingPrinciplesImage from '../../../images/part-2-image.jpg';
import TeachingPeopleImage from '../../../images/part-3-image.jpg';
import DogTrainingBusinessImage from '../../../images/part-4-image.jpg';
import PlaceHolderImage from '../../../images/placeholder.jpg';
import PlayBtnImage from '../../../images/play-btn.svg';
import { formatPrice } from '../../../lib/formatPrice';

const headerIconSize = 20;
const iconSize = 36;

const courseCodes = [ 'dt' ];

const DogTrainingPage: NextPage = () => {
  const screenWidth = useScreenWidth();
  const location = useLocation();
  const price = usePrice(courseCodes, location?.countryCode, location?.provinceCode);
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

      <section id="firstSection" className="bg-dark">
        <Image src={PlaceHolderImage} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="Dog Grooming Background" />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row mb-4">
            <div className="mb-4">
              <Image src={CertificationGoldImage} alt="International Dog Training Professional IDTP Certification" height="125" width="125" />
            </div>
            <h1>Dog Training</h1>
            {price && price.plans.part.deposit > 0 && <h4>Get Started for Only <strong>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</strong></h4>}
            <p><em><a href="#tuitionSection" className="text-white">See tuition details</a></em></p>
            <a href="https://enroll.qcpetstudies.com?c[]=dt"><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
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
                <p><strong>Guarantee</strong></p>
              </div>
            </div>
          </div>
        </div>
        <Modal show={trailerPopupVisible} onHide={trailerPopupToggle} size="lg">
          <Modal.Header closeButton>Dog Training Course</Modal.Header>
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
              <h2>Become a <strong>Certified Dog Trainer</strong></h2>
              <p className="lead"><strong>International Dog Training Professional&trade;</strong> | <i>IDTP&trade;</i></p>
              <p>Dog training is a booming industry! Owners need help to turn their dogs into well-behaved members of the family, and they want someone qualified to help them achieve this goal.  Whether you want to work in a training school, launch your own dog training business, or freelance as a private dog trainer, you&apos;ll graduate with all the knowledge and skills you need to succeed in the dog training industry!</p>
              <p className="lead mb-0">Are you ready to start an amazing career?</p>
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
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="courseContentIcon"><BsCardChecklist size={iconSize} /></div>
              <h3>Newest{md ? <br /> : ' '}Course Materials</h3>
              <p className="mb-0">Your course materials are always available online and are always being updated with the latest science-based industry standards. Refer to your updated training guides throughout your career!</p>
            </div>
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="courseContentIcon"><BsPeopleFill size={iconSize} /></div>
              <h3>Personalized{md ? <br /> : ' '}Feedback</h3>
              <p className="mb-0">Just because you&apos;re learning online doesn&apos;t mean you&apos;re learning alone. You&apos;ll receive personalized audio feedback from your tutor on every dog training assignment you submit. Use this feedback to improve and succeed!</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="courseContentIcon"><IoMdInfinite size={iconSize} /></div>
              <h3>Lifetime{md ? <br /> : ' '}Access</h3>
              <p className="mb-0">Once you&apos;re a member of the QC family you&apos;ll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="outlineSection" className="bg-light">
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
                  <p>Before you learn about how to train dogs, you have to learn about dogs. This includes breed types and characteristics, how dogs communicate with each other and with humans, what constitutes normal and abnormal canine behaviors, and&mdash;most importantly&mdash;how dogs actually learn. Once you become an expert in canine behavior and communication, you&apos;ll be in excellent shape to start working with dogs to teach new behaviors and correct unwanted behaviors!</p>
                  <p>What you&apos;ll learn:</p>
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
                    <Image src={IntroductoryUnitsImage} alt="Dog runing" layout="responsive" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Applying Training Principles" eventKey="1" />
            <AccordionSection eventKey="1">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <p>Now that you have a deep understanding of how dogs learn and communicate, you&apos;re ready to start applying training techniques to teach new behaviors and address unwanted behaviors. This course teaches scientifically-proven techniques and methods based on learning theory. You&apos;ll learn how to apply classical and operant conditioning principles to any type of training situation. Always remember: There is no magic formula that works for every dog, but every dog has a formula that will work for them.</p>
                  <p>What you&apos;ll learn:</p>
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
                    <Image src={ApplyingTrainingPrinciplesImage} alt="Dog learning from human" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Teaching People" eventKey="2" />
            <AccordionSection eventKey="2">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <p>A dog trainer&apos;s job isn&apos;t just to train dogs. As a trainer a big part of your job will be to teach people how to train their own dogs!  This requires a unique set of skills that you'll have to develop. You have to understand how people learn and how to communicate your expertise to dog owners who are looking for help. This part of the dog trainer course will help you learn those skills!</p>
                  <p>What you&apos;ll learn:</p>
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
                    <Image src={TeachingPeopleImage} alt="person training dog" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Starting your Dog Training Business" eventKey="3" />
            <AccordionSection eventKey="3">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <p>You&apos;ve learned and practiced all the skills you need to successfully work as a dog trainer. Now it&apos;s time to turn your finely honed skills into a business! The business training offered in this course is optional. However, this training will be hugely beneficial to your career if you intend to start your own training business, or if you&apos;re looking to get a job working for an established trainer.</p>
                  <p>What you&apos;ll learn:</p>
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
                    <Image src={DogTrainingBusinessImage} alt="person working on laptop" />
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
                    <Image src={IntroductoryUnitsImage} alt="Dog runing" layout="responsive" />
                  </div>
                )}
              </div>
            </AccordionSection>
          </Accordion>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2>Learn from <strong>Dog Training Experts</strong></h2>
              <p className="lead">QC&apos;s dog training course was developed with the assistance of Kim Cooper.</p>
              <p className="mb-5">Kim Cooper is the owner and senior instructor at Best Friends Dog Training. Kim pursued her passion to become a professional dog trainer after earning a degree in aerospace engineering and serving as an officer in the Air Force for fourteen successful years. Now, with 35 years of training experience, Kim competes in obedience, agility, tracking, and other sports with her own dogs&mdash;all using motivational, reward-based training methods. In particular, Kim loves to foster the special partnership that exists between a working dog and its handler, and specializes in training search-and-rescue dogs. Kim and her dogs have earned many search-and-rescue certifications as well as obedience and agility titles.</p>
              <h3 className="mb-4">Your Dog Training Tutors</h3>
            </div>
            <div className="col-12 col-lg-6 text-lg-start align-item-center mb-2">
              <div className="mb-2">
                <Image src={PlaceHolderImage} layout="responsive" placeholder="blur" alt="dog-training expert, Shannon Noonan" />
              </div>
              <p className="lead"><strong>Shannon Noonan</strong></p>
              <p>Certified Dog Trainer (CPDT-KA)<br /><em>10 Years of Experience</em></p>
              <p className="mb-0">Shannon first started working with dogs when she started fostering with Ottawa Dog Rescue. Through this organization, Shannon adopted her first dog - Blue, a Great Dane/Pointer mix. Shannon and Blue learned about formal dog training together. This pair went on to found the first official Therapy Dog program at Carleton University, a program that remains popular today. Now, Shannon is a Certified Professional Dog Trainer - Knowledge Assessed, and owns her own dog training business with her Dalmatian, Elroy. Shannon and Elroy share a passion for teaching other humans and dogs about training, obedience and agility. Shannon is excited to ignite this same passion for training in QC's dog training students.</p>
            </div>
            <div className="col-12 col-lg-6 text-lg-start">
              <div className="mb-2">
                <Image src={PlaceHolderImage} layout="responsive" placeholder="blur" alt="dog-training expert, Susan Read" />
              </div>
              <p className="lead"><strong>Susan Read</strong></p>
              <p>Certified Dog Trainer<br /><em>35 Years of Experience</em></p>
              <p className="mb-0">Susan has been training dogs for over 35 years. She specializes in Search and Rescue (SAR) work, but Susan's experience extends to competitive obedience, rally and agility training as well. Susan has been teaching tracking for many years, and conducts workshops across Ontario. She has been involved with K9 SAR since 2000, and is now the head K9 trainer and handler with Georgian Bay SAR. Susan is also the Provincial K9 Coordinator and sits on the Ontario Search and Rescue Volunteer Association (OSARVA) Board of Directors. Susan is currently the only OPP/OSARVA certified dog handler in Central Ontario with her live find dog, Zena. She has also worked with Human Remains Detection K9 with her dog, Zappa, since 2014. As a former school teacher and a highly experienced dog training instructor, Susan looks forward to using her significant teaching experience to benefit QC's dog training students.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2>21-Day<strong> Guarantee</strong></h2>
              <p>When you enroll in QC's Dog Training Course, you have 21 days to review the course and decide if it's the right program for you.  If you don't like what you see, simply contact the school to arrange a full refund of your tuition, no questions asked!</p>
              <Link href="/about/about-qc-pet-studies#guarantee"><a className="btn btn-outline-navy">Guarantee</a></Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        #outlineSection { background-color: #f7f7f7 !important; }
      `}</style>

    </DefaultLayout>
  );
};

export default DogTrainingPage;
