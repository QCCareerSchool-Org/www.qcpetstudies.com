import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion } from 'react-bootstrap';
import { BsCardChecklist, BsPersonCheck } from 'react-icons/bs';
import { IoMdInfinite } from 'react-icons/io';
import { AccordionSection } from '../../../components/AccordionSection';
import { AccordionToggle } from '../../../components/AccordionToggle';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { PriceSection } from '../../../components/PriceSection';
import { SEO } from '../../../components/SEO';
import DogGroomingBackground from '../../../images/backgrounds/dog-grooming.jpg';
import CertificationGoldImage from '../../../images/IDTP-certification-gold-2.svg';
import MasterGroomerSusanImage from '../../../images/lisa-video-thumbnail.jpg';
import MovieClapperImage from '../../../images/movie-clapper.svg';
import OutlineImage from '../../../images/outline.svg';
import MasterGroomerShannonImage from '../../../images/paddy-video-thumbnail.jpg';
import IntroductoryUnitsImage from '../../../images/part-1-image.jpg';
import ApplyingTrainingPrinciplesImage from '../../../images/part-2-image.jpg';
import TeachingPeopleImage from '../../../images/part-3-image.jpg';
import DogTrainingBusinessImage from '../../../images/part-4-image.jpg';
import PlayBtnImage from '../../../images/play-btn.svg';

const HeaderIconSize = 20;
const IconSize = 36;

const DogTrainingPage: NextPage = () => {
  return (
    <DefaultLayout secondaryTitle="Dog Training Course">
      <SEO
        title="Dog Training Course"
        description=""
        canonical="/dog-training-courses/dog-training"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={DogGroomingBackground} layout="fill" objectFit="cover" objectPosition="center" alt="Dog Grooming Background" />
        <div className="container text-center">
          <div className="row mb-4">
            <div className="mb-4">
              <Image src={CertificationGoldImage} alt="International Dog Grooming Professional IDGP Certification" height="125" width="125" />
            </div>
            <h1>Dog Training</h1>
            <h4>get started for $99</h4>
            <em className="mb-4">See tuition details</em>
            <a href=""><button className="btn btn-secondary btn-lg">Enroll Online</button></a>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 d-flex">
              <div className="col">
                <Image src={MovieClapperImage} alt="Dog Training Trailer" width={HeaderIconSize} height={HeaderIconSize} />
                <p><strong className="text-uppercase">Trailer</strong></p>
              </div>
              <div className="col">
                <Image src={OutlineImage} alt="Dog Training Outline" width={HeaderIconSize} height={HeaderIconSize} />
                <p><strong className="text-uppercase">Outline</strong></p>
              </div>
              <div className="col">
                <Image src={PlayBtnImage} alt="watch training sample" width={HeaderIconSize} height={HeaderIconSize} />
                <p><strong className="text-uppercase">Sample</strong></p>
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
              <p className="lead"><strong>International Dog Grooming Professional</strong> | <em style={{ color: 'gold' }}>IDGP</em></p>
              <p>Dog training is a booming industry! Owners need help more than ever in working with their dogs to become members of the family, and they want someone qualified to help them achieve this task.  Whether you want to work in a training school, launch your own dog training business, or freelance as a private dog trainer, you&apos;ll graduate with all the knowledge and skills you need to succeed in the dog training industry!</p>
              <p>Are you ready to start an amazing career?</p>
            </div>
          </div>
        </div>
      </section>

      <PriceSection courses={[ 'dg' ]} doubleGuarantee={true} />

      <section>
        <div className="container text-center">
          <h2 className="mb-5">Included in <strong>Your Course</strong></h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4">
              <BsCardChecklist size={IconSize} className="mb-4" />
              <h3 className="mb-3">Newest Course<br />Materials</h3>
              <p>Your course materials are always available online and are always being updated with the latest science-based industry standards.  Refer to your updated training guides throughout your career!</p>
            </div>
            <div className="col-12 col-md-4">
              <BsPersonCheck size={IconSize} className="mb-4" />
              <h3 className="mb-3">Personalized<br />Feedback</h3>
              <p>Just because you&apos;re learning online doesn&apos;t mean you&apos;re learning alone.  You&apos;ll receive personalized audio feedback from your tutor on every dog training assignment you submit. Use this feedback to improve and succeed!</p>
            </div>
            <div className="col-12 col-md-4">
              <IoMdInfinite size={IconSize} className="mb-4" />
              <h3 className="mb-3">Lifetime<br />Access</h3>
              <p>Once you&apos;re a member of the QC family you&apos;ll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <h2>Course <strong>Outline</strong></h2>
          <div className="row justify-content-center mb-5">
            <div className="col12 col-lg-9">
              <p className="lead"><strong>The Dog training Course is split into 4 parts, each containing individual training units.</strong></p>
            </div>
          </div>
          <Accordion defaultActiveKey="0">
            <AccordionToggle title="Introductory Units" eventKey="0" />
            <AccordionSection eventKey="0">
              <h4 className="mb-4"><strong>Units A&ndash;D</strong></h4>
              <div className="row">
                <div className="col-12 col-lg-6 text-start mb-4 mb-lg-0">
                  <p>Before you learn about how to train dogs, you have to learn about dogs. This includes breed types and characteristics, how dogs communicate with each other and with humans, what constitutes normal and abnormal canine behaviors, and most importantly, how dogs actually learn. Once you become an expert in canine behavior and communication, you&apos;ll be in excellent shape to start working with dogs to teach new behaviors and correct unwanted behaviors!</p>
                  <hr />
                  <p>What you&apos;ll learn:</p>
                  <ul>
                    <li>Guiding Principles of Dog Training</li>
                    <li>Fundamentals of Safe Training</li>
                    <li>Ethology</li>
                    <li>Stages of Development</li>
                    <li>Socialization Stages</li>
                    <li>Canine Communication</li>
                    <li>Calming Signals</li>
                    <li>Fear Responses</li>
                    <li>Problem Solving</li>
                    <li>Learning Theory</li>
                    <li>Applying Learning Theory</li>
                  </ul>
                  <Link href=""><a className="link-primary">View a more detailed course syllabus here</a></Link>
                </div>
                <div className="col-12 col-lg-6 justify-content-center">
                  <Image src={IntroductoryUnitsImage} alt="Dog runing" />
                </div>
              </div>
            </AccordionSection>

            <AccordionToggle title="Applying Training Principles " eventKey="1" />
            <AccordionSection eventKey="1">
              <h4 className="mb-4"><strong>Units E&ndash;F</strong></h4>
              <div className="row">
                <div className="col-12 col-lg-6 text-start mb-4 mb-lg-0">
                  <p>Now that you have a deep understanding of how dogs learn and communicate, you&apos;re ready to start applying training techniques to teach new behaviors and address unwanted behaviors. This course teaches scientifically-proven techniques and methods based on learning theory. You&apos;ll learn how to apply classical and operant conditioning principles to any type of training situation. Always remember: There is no magic formula that works for every dog, but every dog has a formula that will work for them.</p>
                  <hr />
                  <p>What you&apos;ll learn:</p>
                  <ul>
                    <li>Training Methods
                      <ul>
                        <li>Luring</li>
                        <li>Shaping</li>
                        <li>Targeting</li>
                        <li>Modelling</li>
                        <li>Capturing</li>
                        <li>Mimicry</li>
                      </ul>
                    </li>
                    <li>Motivations</li>
                    <li>Reinforcement Schedules</li>
                    <li>Training Tools</li>
                    <li>Addressing Unwanted Behaviors</li>
                  </ul>
                  <Link href=""><a className="link-primary">View a more detailed course syllabus here</a></Link>
                </div>
                <div className="col-12 col-lg-6 justify-content-center">
                  <Image src={ApplyingTrainingPrinciplesImage} alt="Dog learning from human" />
                </div>
              </div>
            </AccordionSection>

            <AccordionToggle title="Teaching People" eventKey="2" />
            <AccordionSection eventKey="2">
              <h4 className="mb-4"><strong>Units G</strong></h4>
              <div className="row">
                <div className="col-12 col-lg-6 text-start mb-4 mb-lg-0">
                  <p>A dog trainer&apos;s job isn&apos;t just to train dogs. As a trainer a big part of your job will be to teach people how to train their own dogs!  This requires a whole set of skills in their own rights. You have to understand how people learn and how to communicate your expertise to dog owners who are looking for help. This part of the dog trainer course will help you learn those skills!</p>
                  <hr />
                  <p>What you&apos;ll learn:</p>
                  <ul>
                    <li>How to work as a trainer
                      <ul>
                        <li>Facilitating learning for clients</li>
                        <li>Teaching private lessons</li>
                        <li>Teaching group classes</li>
                      </ul>
                    </li>
                    <li>Teaching skills
                      <ul>
                        <li>Strategies for teaching people</li>
                        <li>Communicating with dog owners</li>
                        <li>Preparing yourself for working with clients</li>
                      </ul>
                    </li>
                  </ul>
                  <Link href=""><a className="link-primary">View a more detailed course syllabus here</a></Link>
                </div>
                <div className="col-12 col-lg-6 justify-content-center">
                  <Image src={TeachingPeopleImage} alt="person training dog" />
                </div>
              </div>
            </AccordionSection>

            <AccordionToggle title="Starting your Dog Training Business" eventKey="3" />
            <AccordionSection eventKey="3">
              <h4 className="mb-4"><strong>Units H</strong></h4>
              <div className="row">
                <div className="col-12 col-lg-6 text-start mb-4 mb-lg-0">
                  <p>You&apos;ve learned and practiced all the skills you need to successfully work as a dog trainer. Now it&apos;s time to turn your finely honed skills into a business! The business training offered in this course is optional. However, this training will be hugely beneficial to your career if you intend to start your own training business, or if you&apos;re looking to get a job working for an established trainer.</p>
                  <hr />
                  <p>What you&apos;ll learn:</p>
                  <ul>
                    <li>How to get your business started</li>
                    <li>Choosing a name for your business</li>
                    <li>Business insurance requirements and recommendations</li>
                    <li>Creating a business plan</li>
                    <li>Marketing techniques</li>
                    <li>Selling your services</li>
                  </ul>
                  <Link href=""><a className="link-primary">View a more detailed course syllabus here</a></Link>
                </div>
                <div className="col-12 col-lg-6 justify-content-center">
                  <Image src={DogTrainingBusinessImage} alt="person working on laptop" />
                </div>
              </div>
            </AccordionSection>
          </Accordion>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2 className="mb-4">Learn from <strong>Dog Training Experts</strong></h2>
          <div className="row justify-content-center mb-3">
            <div className="col-12 col-lg-8">
              <p><strong>QC&apos;s dog training course was developed with the assistance of Kim Cooper.</strong></p>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-10">
              <div className="mb-5">
                <p>Kim Cooper is the owner and senior instructor at Best Friends Dog Training. Kim pursued her passion to become a professional dog trainer after earning a degree in Aerospace Engineering and serving as an officer in the Air Force for fourteen successful years. Now, with 35 years of training experience, Kim competes in obedience, agility, tracking and other sports with her own dogs - all using motivational, reward-based training methods. In particular, Kim loves to foster the special partnership that exists between a working dog and its handler, and specializes in training search and rescue dogs. Kim and her dogs have earned many Search and Rescue certifications as well as obedience and agility titles.</p>
              </div>
              <h3 className="mb-4">Your Dog Training Tutors</h3>
              <div className="row justify-content-center">
                <div className="col-12 col-lg-6 text-lg-start align-item-center mb-2">
                  <Image src={MasterGroomerShannonImage} alt="Expert 1 Shannon Noonan" width="366" height="192" />
                  <p className="lead"><strong>Shannon Noonan</strong></p>
                  <p>Certified Dog Trainer</p>
                  <em>20 Years of Experience</em>
                  <p>[!! This is placeholder text!] Shannon is the owner and senior instructor at Best Friends Dog Training. Kim pursued her passion to become a professional dog trainer after earning a degree in Aerospace Engineering and serving as an officer in the Air Force for fourteen successful years. Now, with 35 years of training experience, Kim competes in obedience, agility, tracking and other sports with her own dogs - all using motivational, reward-based training methods.</p>
                </div>
                <div className="col-12 col-lg-6 text-lg-start">
                  <Image src={MasterGroomerSusanImage} alt="Expert 2 Susan Read" width="366" height="192" />
                  <p className="lead"><strong>Susan Read</strong></p>
                  <p>Certified Dog Trainer</p>
                  <em>20 Years of Experience</em>
                  <p>[!! This is placeholder text!] Susan is the owner and senior instructor at Best Friends Dog Training. Kim pursued her passion to become a professional dog trainer after earning a degree in Aerospace Engineering and serving as an officer in the Air Force for fourteen successful years. Now, with 35 years of training experience, Kim competes in obedience, agility, tracking and other sports with her own dogs - all using motivational, reward-based training methods.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <h2><strong>Preview</strong> the Course for Free</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <p>If you&apos;d like to see a more detailed course outline, sample videos and examples of assignments, you can preview the dog training course for free at any time!</p>
            </div>
            <a href=""><button className="btn btn-light border-3 border-navy">Course Preview</button></a>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default DogTrainingPage;
