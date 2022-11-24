import Image from 'next/image';
import { FC, useState } from 'react';
import { Accordion, Modal } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

import { AccordionSection } from '../../../components/AccordionSection';
import { AccordionToggle } from '../../../components/AccordionToggle';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { SEO } from '../../../components/SEO';
import { UnitStats } from '../../../components/UnitStats';
import { useScreenWidth } from '../../../hooks/useScreenWidth';
import CourseOutlineBackground from '../../../images/backgrounds/aki-with-man.jpg';
import calendarIcon from '../../../images/calendar.svg';
import IconTime from '../../../images/clock.svg';
import UnitAImage from '../../../images/dt-full-outline-unit-a.jpg';
import UnitBImage from '../../../images/dt-full-outline-unit-b.jpg';
import UnitCImage from '../../../images/dt-full-outline-unit-c.jpg';
import UnitDImage from '../../../images/dt-full-outline-unit-d.jpg';
import UnitEImage from '../../../images/dt-full-outline-unit-e.jpg';
import UnitFImage from '../../../images/dt-full-outline-unit-f.jpg';
import UnitGImage from '../../../images/dt-full-outline-unit-g.jpg';
import UnitHImage from '../../../images/dt-full-outline-unit-h.jpg';
import type { NextPageWithLayout } from '../../_app';

const iconSize = 50;

const DDCourseOutlinePage: NextPageWithLayout = () => {
  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;

  const [ unit, setUnit ] = useState<string | null>(null);
  const closeModal = (): void => setUnit(null);

  return (
    <>
      <SEO
        title="Course Outline"
        description=""
        canonical="/certification-courses/dog-care/course-outline"
      />

      <section id="top" className="bg-dark">
        <Image src={CourseOutlineBackground} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="Dog with man" priority />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <FaBars size={iconSize} className="mb-2" />
              <h1 className="fw-normal">Dog Care<br /><strong>Course Outline</strong></h1>
              <p className="lead mb-0">Here&apos;s a detailed outline of the entire online dog care course offered by QC Pet Studies, including the length of each unit and any special considerations you&apos;ll need to complete each unit&apos;s assignments.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex mb-4 mb-lg-0">
              <div className="card">
                <div className="card-body">
                  <div className="mb-2">
                    <Image src={IconTime} width={iconSize} height={iconSize} alt="Clock Icon" />
                  </div>
                  <p className="card-text">The course should take about <strong>30 to 35 hours</strong> to study and complete assignments from start to finish. This time does not include the time you will take to practice and develop your skills before you complete an assignment.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-flex">
              <div className="card">
                <div className="card-body">
                  <div className="mb-2">
                    <Image src={calendarIcon} width={iconSize} height={iconSize} alt="Calendar Icon" />
                  </div>
                  <p className="card-text">On average, most QC Students work on their course for a few hours per week, and complete the online dog training course within <strong>three to six months</strong>. You&apos;ll have up to two years to complete the program&mdash;lots of time!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="outlineSection" className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-5 text-center">
              <h2>Unit-by-Unit Breakdown</h2>
              <p className="mb-0">Below is an outline of each unit of the online dog care course. Expand each section to find out what you&apos;ll learn in each unit.</p>
            </div>
          </div>
          <Accordion defaultActiveKey="0">
            <AccordionToggle title="Unit A" eventKey="0" variant="primary" />
            <AccordionSection eventKey="0">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="alert alert-primary mb-4">Unit Total: 3 hours</div>
                  <UnitStats assignmentsCount={4} assignmentsTime="1 hour" readingsTime="2 hours" videosCount={2} />
                  <p>In the first unit of your Dog Daycare course, you&apos;ll introduce yourself to your expert tutor and learn about the fundamentals of professionally caring for dogs. You&apos;ll dive into an overview of the dog daycare industry, study different types of dog-care locations and learn about the tools and equipment you&apos;ll need as you begin working with dogs.</p>
                  <button onClick={() => setUnit('A')} className="btn btn-primary">View Details</button>
                  <Modal show={unit === 'A'} onHide={closeModal} size="lg">
                    <Modal.Header closeButton>Unit A Details</Modal.Header>
                    <Modal.Body>
                      <UnitADetails />
                    </Modal.Body>
                  </Modal>
                </div>
                {lgOrGreater && (
                  <div className="col-12 col-lg-6 col-xl-5">
                    <Image src={UnitAImage} layout="responsive" alt="two dogs running in a field" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Unit B" eventKey="1" variant="primary" />
            <AccordionSection eventKey="1">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="alert alert-primary mb-4">Unit Total: 4 hours</div>
                  <UnitStats assignmentsCount={5} assignmentsTime="2 hours" readingsTime="2 hours" videosCount={3} />
                  <p>In Unit B, you&apos;ll learn all about dogs. You&apos;ll study canine communication signals so that you can identify potential problems that may arise when you care for dogs. You&apos;ll also learn how a dog&apos;s background, including its age and breed, can affect behavior.</p>
                  <button onClick={() => setUnit('B')} className="btn btn-primary">View Details</button>
                  <Modal show={unit === 'B'} onHide={closeModal} size="lg">
                    <Modal.Header closeButton>Unit B Details</Modal.Header>
                    <Modal.Body>
                      <UnitBDetails />
                    </Modal.Body>
                  </Modal>
                </div>
                {lgOrGreater && (
                  <div className="col-12 col-lg-6 col-xl-5">
                    <Image src={UnitBImage} layout="responsive" alt="a leashed dog and a man going for a walk" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Unit C" eventKey="2" variant="primary" />
            <AccordionSection eventKey="2">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="alert alert-primary mb-4">Unit Total: 3 hours</div>
                  <UnitStats assignmentsCount={999} assignmentsTime="2 hours" readingsTime="1 hour" videosCount={2} />
                  <p>Unit C of your dog training course focuses on canine communication. You'll learn all about the signals that dogs use to communicate. Explore how you can use these signals to improve your training methods and provide a safe, comfortable training space for dogs. This unit will also each you how to use canine communication to improve the relationships between dogs and their owners.</p>
                  <p><em>Spend some quality time with your own dog, or a friend or family member's dog to practice reading canine communication!</em></p>
                  <button onClick={() => setUnit('C')} className="btn btn-primary">View Details</button>
                  <Modal show={unit === 'C'} onHide={closeModal} size="lg">
                    <Modal.Header closeButton>Unit C Details</Modal.Header>
                    <Modal.Body>
                      <UnitCDetails />
                    </Modal.Body>
                  </Modal>
                </div>
                {lgOrGreater && (
                  <div className="col-12 col-lg-6 col-xl-5">
                    <Image src={UnitCImage} layout="responsive" alt="white puppy with a toy lying on a dog bed" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Unit D" eventKey="3" variant="primary" />
            <AccordionSection eventKey="3">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="alert alert-primary mb-4">Unit Total: 5 hours</div>
                  <UnitStats assignmentsCount={999} assignmentsTime="2 hours" readingsTime="1 hour" videosCount={11} />
                  <p>In Unit D of your dog training course, you'll learn about the learning theory behind effective dog training methods. You'll discover how dogs learn by making associations between different stimuli and by understanding the consequences associated with their own actions. Then you'll explore how to apply this learning theory to your training programs. You'll learn positive reinforcement methods, clicker training and much more!</p>
                  <button onClick={() => setUnit('D')} className="btn btn-primary">View Details</button>
                  <Modal show={unit === 'D'} onHide={closeModal} size="lg">
                    <Modal.Header closeButton>Unit D Details</Modal.Header>
                    <Modal.Body>
                      <UnitDDetails />
                    </Modal.Body>
                  </Modal>
                </div>
                {lgOrGreater && (
                  <div className="col-12 col-lg-6 col-xl-5">
                    <Image src={UnitDImage} layout="responsive" alt="trainer using a clicker and treat to reward a German Shepherd puppy" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Unit E" eventKey="4" variant="primary" />
            <AccordionSection eventKey="4">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="alert alert-primary mb-4">Unit Total: 5 hours</div>
                  <UnitStats assignmentsCount={999} assignmentsTime="2 hours" readingsTime="1 hour" videosCount={8} />
                  <p>Once you reach Unit E of your online dog training course, you're ready to put everything you've learned into action. You'll learn about the six training methods, all based in positive reinforcement, you can use to teach dogs new behaviors. Discover how to effectively motivate dogs to perform these behaviors and how to use reinforcement schedules in dog training.</p>
                  <button onClick={() => setUnit('E')} className="btn btn-primary">View Details</button>
                  <Modal show={unit === 'E'} onHide={closeModal} size="lg">
                    <Modal.Header closeButton>Unit E Details</Modal.Header>
                    <Modal.Body>
                      <UnitEDetails />
                    </Modal.Body>
                  </Modal>
                </div>
                {lgOrGreater && (
                  <div className="col-12 col-lg-6 col-xl-5">
                    <Image src={UnitEImage} layout="responsive" alt="trainer and a dog practicing for an obstacle course" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Unit F" eventKey="5" variant="primary" />
            <AccordionSection eventKey="5">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="alert alert-primary mb-4">Unit Total: 5 hours</div>
                  <UnitStats assignmentsCount={999} assignmentsTime="2 hours" readingsTime="1 hour" videosCount={5} />
                  <p>In Unit F, you'll learn how to safely use common training tools when you work with dogs. You'll discover common tools to help with leash training and crate training and learn how to teach your clients to use these tools at home. You'll also learn how experienced trainers use these tools and other techniques to change a dog's unwanted behaviors.</p>
                  <button onClick={() => setUnit('F')} className="btn btn-primary">View Details</button>
                  <Modal show={unit === 'F'} onHide={closeModal} size="lg">
                    <Modal.Header closeButton>Unit F Details</Modal.Header>
                    <Modal.Body>
                      <UnitFDetails />
                    </Modal.Body>
                  </Modal>
                </div>
                {lgOrGreater && (
                  <div className="col-12 col-lg-6 col-xl-5">
                    <Image src={UnitFImage} layout="responsive" alt="dog snarling at another dog" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Unit G" eventKey="6" variant="primary" />
            <AccordionSection eventKey="6">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="alert alert-primary mb-4">Unit Total: 4 hours</div>
                  <UnitStats assignmentsCount={999} assignmentsTime="2 hours" readingsTime="1 hour" videosCount={3} />
                  <p>You've learned all about training dogs. Now in Unit G you'll learn to teach dog owners. You'll discover what it takes to develop a training program and set up a safe training space to facilitate learning in your training sessions. You'll learn essential teaching skills to help your students work effectively to train their dogs.</p>
                  <button onClick={() => setUnit('G')} className="btn btn-primary">View Details</button>
                  <Modal show={unit === 'G'} onHide={closeModal} size="lg">
                    <Modal.Header closeButton>Unit G Details</Modal.Header>
                    <Modal.Body>
                      <UnitGDetails />
                    </Modal.Body>
                  </Modal>
                </div>
                {lgOrGreater && (
                  <div className="col-12 col-lg-6 col-xl-5">
                    <Image src={UnitGImage} layout="responsive" alt="white dog sitting next to a dog trainer" />
                  </div>
                )}
              </div>
            </AccordionSection>
            <AccordionToggle title="Unit H (Optional)" eventKey="7" variant="primary" />
            <AccordionSection eventKey="7">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="alert alert-primary mb-4">Unit Total: 3 hours</div>
                  <UnitStats assignmentsCount={999} assignmentsTime="2 hours" readingsTime="1 hour" videosCount={3} />
                  <p>You've learned and practiced all the skills you need to successfully work as a dog trainer. Now it's time to turn your finely honed skills into a business! The business training offered in this course is optional. However, this training will be hugely beneficial to your career if you intend to start your own training business, or if you're looking to get a job working for an established trainer.</p>
                  <p>In this unit, you'll learn to get your business off the ground. We'll cover important first steps, such as naming your business, finding insurance and creating a business plan. You'll learn all about different marketing techniques and how to use them effectively. You'll read up on essential skills for working with clients and selling your services. Even if launching your business isn't in your immediate future, take advantage of wonderful opportunity to kickstart your business when you're ready to take that step.</p>
                  <button onClick={() => setUnit('H')} className="btn btn-primary">View Details</button>
                  <Modal show={unit === 'H'} onHide={closeModal} size="lg">
                    <Modal.Header closeButton>Unit H Details</Modal.Header>
                    <Modal.Body>
                      <UnitHDetails />
                    </Modal.Body>
                  </Modal>
                </div>
                {lgOrGreater && (
                  <div className="col-12 col-lg-6 col-xl-5">
                    <Image src={UnitHImage} layout="responsive" alt="dog and a trainer shaking hands" />
                  </div>
                )}
              </div>
            </AccordionSection>
          </Accordion>
        </div>
      </section>

      <style jsx>{`
        #outlineSection {
          background-color: #f7f7f7 !important;
        }
      `}</style>
    </>
  );
};

DDCourseOutlinePage.getLayout = page => <DefaultLayout footerCTAType="training">{page}</DefaultLayout>;

export default DDCourseOutlinePage;

const UnitADetails: FC = () => (
  <>
    <p className="lead">When you complete your course work in Unit A, you&apos;ll introduce yourself to your tutor, who is a successful pet-industry professional.</p>
    <p>You&apos;ll have the opportunity to get your tutor&apos;s feedback as you practice planning your dog-care services, considering important factors including safe locations and dog-walking equipment.</p>
    <p><strong>Introduction to Dog Daycare</strong></p>
    <p>In this lesson, you&apos;ll learn about the dog daycare industry. You'll discover the different types of dog daycare and begin to think about what your own career might look like.</p>
    <p><strong>Dog-Care Locations</strong></p>
    <p>Next, you&apos;ll learn about the different settings in which a dog daycare can be established and the necessary safety considerations for each one.</p>
    <p className="mb-0"><strong>Tools, Equipment and Supplies</strong></p>
  </>
);

const UnitBDetails: FC = () => (
  <>
    <p className="lead">With expert advice from your tutor, you&apos;ll practice interpreting canine behavior in your Unit B assignments.</p>
    <p>You&apos;ll examine canine communication signals and scenarios to prepare you for situations you might encounter while caring for dogs.</p>
    <p><strong>Understanding Dog Behavior and Communication</strong></p>
    <p>Discover the normal and abnormal behaviors a dog may display so that you&apos;ll be prepared to address any situation at daycare. You'll learn how a dog uses signals to calm other dogs and communicate fear to help you understand the animals in your care.</p>
    <p><strong>Triggers and Incidents</strong></p>
    <p>In this lesson, you'll learn from the experience of a professional dog daycare provider. Read about the different events and incidents that can trigger reactions in dogs at a daycare and learn how to address these scenarios.</p>
    <p><strong>Development and Breeds</strong></p>
    <p className="mb-0">Learn how to provide customized care for each of your client&apos;s dogs. Discover a wide range of activities, exercise and care for dogs of all ages and breeds.</p>
  </>
);

const UnitCDetails: FC = () => (
  <>
    <p className="lead">The third unit of Dog Training will explore canine communication.</p>
    <p>You'll learn about the signals that dogs use to communicate, and how interpreting those signals correctly will improve the training experience for you, your clients and their dogs.</p>
    <p><strong>Canine Communication</strong></p>
    <p>This text will cover how dogs use sounds, facial expressions and body language to express themselves. You'll learn the signals that dogs use to express excitement, fear, contentment, discomfort and more. You'll even discover and dispel the many misconceptions that humans have about canine communication.</p>
    <p><strong>Calming Signals and Fear Responses</strong></p>
    <p>Once you've learned to recognize the signals that dogs use to communicate, you'll be able to read when dogs are showing their discomfort. In this text, you'll explore the ways that dogs attempt to calm themselves and others in tense or worrying situations. You'll learn to interpret a dog's fear response when these tense situations escalate.</p>
    <p><strong>Problem Solving with Communication</strong></p>
    <p>In this text, you'll learn how to apply your understanding of canine communication to dog training. You'll discover how interpreting a dog's communication signals can help you to identify and resolve training challenges and advocate for a dog's wellbeing. You'll consider how your client's ability to understand her dog, and the dog's ability to understand his owner will impact the results of training.</p>
    <p><strong>Unit C Assignments</strong></p>
    <p className="mb-0">Your assignments in Unit C will ask you to practice looking for canine communication signals when you're working with dogs. Through scenario-based questions, you'll also practice advocating for the dog's wellbeing and helping your clients understand their dogs by interpreting canine communication.</p>
  </>
);

const UnitDDetails: FC = () => (
  <>
    <p className="lead">Unit D will introduce you to the learning theories that explain how dogs learn, and why our training methods work.</p>
    <p>By studying learning theory, you'll discover how you can teach dogs new behaviors and how to discourage undesirable behaviors with effective, dog-friendly training methods.</p>
    <p><strong>Learning Theory</strong></p>
    <p>This text will explain how dogs learn by making associations and understanding consequences. You'll learn about classical conditioning&mdash;also known as associative learning. Then you'll learn about operant condition, which is how dogs learn that their behaviors have consequences. Discover how you can use consequences in the form of reinforcement, reward markers and punishment to change a dog's behavior.</p>
    <p><strong>Applying Learning Theory</strong></p>
    <p>In this text, you'll learn how to put learning theory into practice to teach dogs cues for their new behaviors. You'll discover how to teach a dog when to perform a new behavior once he's learned how to do it. You'll also learn about obstacles dogs might face when learning new behaviors.</p>
    <p><strong>Unit D Assignments</strong></p>
    <p className="mb-0">In Unit D, your course work will test your understanding of how dogs learn. You'll practice using reward markers and clicker training to put reinforcement into action to teach dogs new behaviors. You'll be asked how to safely and effectively use punishment to discourage undesirable behavior.</p>
  </>
);

const UnitEDetails: FC = () => (
  <>
    <p className="lead">In Unit E, you'll put everything you've learned into practice and begin working with dogs to teach them new behaviors.</p>
    <p>You'll learn about the six training methods you can use to teach dogs new behaviors and how to motivate and reinforce those behaviors.</p>
    <p><strong>Training Methods</strong></p>
    <p>In this text, you'll learn about the six methods that trainers use to teach dogs new behaviors. You'll discover how to use luring, shaping, targeting, modelling, capturing and mimicry in different training contexts. We'll cover common canine behaviors and the best training method for each one.</p>
    <p><strong>Motivations and Reinforcement</strong></p>
    <p>Discover the tools you'll use for reinforcement: motivators and reinforcement schedules. In this text, you'll learn about why dogs choose to perform a behavior&mdash;their motivation&mdash;and when they should be rewarded for it&mdash;the reinforcement schedules.</p>
    <p><strong>Unit E Assignments</strong></p>
    <p className="mb-0">It's time to start training! In Unit E you'll practice using the six training methods to teach dogs new behaviors. You'll record training videos for your tutor to examine your technique and provide feedback to help you improve. You'll use different motivators and consider reinforcement schedules to learn how these factors affect training.</p>
  </>
);

const UnitFDetails: FC = () => (
  <>
    <p className="lead">Unit F will teach you how to safely use common training tools, and how to use effectively and ethically use punishment to change a dog's behavior.</p>
    <p>With help from your tutor, you'll learn important information to help you keep dogs safe in your training sessions. The ability to safely, effectively and appropriately use training tools and punishment in dog training is essential to your work.</p>
    <p><strong>Training Tools</strong></p>
    <p>Discover the common tools, such as leashes, collars and crates, that you can recommend to clients to aid in dog training. You'll learn to safely and effectively use these tools to make training effective and fun for your clients and their dogs. You'll also learn about the safe use of aversive tools and their limited place in training.</p>
    <p><strong>Addressing Unwanted Behaviors</strong></p>
    <p>Learn how to identify problem behaviors that your clients might need help with, such as barking or destructive behavior. You'll discover how to address these problem behaviors through training. Importantly, you'll also learn when a dog's behavior requires attention from a behavior expert or veterinarian.</p>
    <p><strong>Unit F Assignments</strong></p>
    <p className="mb-0">The assignments in Unit F will ask you to practice using training tools in appropriate and safe ways. You'll design training programs in scenario-based questions that use training tools and safe, ethical punishments to change a dog's behavior.</p>
  </>
);

const UnitGDetails: FC = () => (
  <>
    <p className="lead">Working as a dog trainer requires you to teach people as well as dogs. In this unit of your online course, you'll focus on working with clients to teach them how to train their dogs.</p>
    <p>You'll learn how to develop effective training programs for different types of classes and study keys skills for teaching people.</p>
    <p><strong>Working as a Trainer</strong></p>
    <p>In this text, you'll study the day-to-day tasks of a dog trainer. You'll learn the steps you'll take to facilitate learning for your clients, whether you're teaching a group class or a private session. You'll study how to develop a training program and create a safe training space.</p>
    <p><strong>Teaching Skills</strong></p>
    <p>This course text will cover strategies for teaching people. You'll learn to communicate with dog owners in ways that help them retain the information you share with them. Study the different ways that people learn to prepare yourself to work with clients.</p>
    <p><strong>Unit G Assignments</strong></p>
    <p className="mb-0">You'll practice your teaching skills as you complete your Unit G assignments. You'll try your hand at developing training programs that accommodate your clients' goals and learning needs. These assignments require to prioritize the needs of both your human and canine students.</p>
  </>
);

const UnitHDetails: FC = () => (
  <>
    <p className="lead">This online business unit is optional for those who want to start and run a successful dog training business.</p>
    <p>You'll learn how to kickstart your business and promote your training services, and study the ins and outs of developing positive client relationships.</p>
    <p><strong>Starting Your Own Business</strong></p>
    <p>Prepare to launch a successful dog training business. This text will guide you through the initial stages of setting up your business, from choosing a name to registering your business. You'll learn about the different types of business structures and regulations. You'll also learn helpful tips to help you manage your finances and develop a business plan.</p>
    <p><strong>Marketing and Promotion</strong></p>
    <p>Learn how to find new clients by marketing and promoting your dog training business. Develop important skills, including building an effective website and managing your social media. Explore these essential skills to reach out to new clients.</p>
    <p><strong>Working with Clients</strong></p>
    <p>Turn every client into a repeat customer. Learn how communicate professionally and respectfully with clients to create a positive relationship. Study different techniques for selling your services and learn how to deal with unhappy clients in a professional and resourceful manner.</p>
    <p><strong>Unit H Assignments</strong></p>
    <p className="mb-0">In the business portion of your dog training course work, you'll learn how to evaluate your business and optimize your plan to suit your career goals. With your tutor's guidance, you'll develop an ideal business scenario suitable for your aspirations.</p>
  </>
);
