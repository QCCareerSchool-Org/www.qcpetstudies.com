import { NextPage } from 'next';
import Image from 'next/image';
import { Accordion } from 'react-bootstrap';
import { BsBookHalf, BsPencilSquare, BsPlayCircle } from 'react-icons/bs';
import { AccordionSection } from '../../../components/AccordionSection';
import { AccordionToggle } from '../../../components/AccordionToggle';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { SEO } from '../../../components/SEO';
import CourseOutlineBackground from '../../../images/backgrounds/aki-with-man.jpg';
import calendarIcon from '../../../images/calendar.svg';
import IconTime from '../../../images/clock.svg';
import UnitAImage from '../../../images/unit-image-1.jpg';
import UnitBImage from '../../../images/unit-image-2.jpg';
import UnitCImage from '../../../images/unit-image-3.jpg';
import UnitDImage from '../../../images/unit-image-4.jpg';
import UnitEImage from '../../../images/unit-image-5.jpg';
import UnitFImage from '../../../images/unit-image-6.jpg';
import UnitGImage from '../../../images/unit-image-7.jpg';
import UnitHImage from '../../../images/unit-image-8.jpg';

const iconSize = 40;

const CourseOutlinePage: NextPage = () => (

  <DefaultLayout>
    <SEO
      title="Course Outline"
      description=""
      canonical="/dog-training-courses/dog-training/course-outline"
    />

    <section id="firstSection" className="bg-dark">
      <Image src={CourseOutlineBackground} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="Dog Training Course Outline Background" />
      <div className="image-overlay-gradient" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 className="text-uppercase">Dog Training<br /><strong>Course Outline</strong></h2>
          </div>
        </div>

      </div>
    </section>

    <section className="pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <p>Here&apos;s a detailed outline of the entire online dog training course offered by QC Pet Studies, including the length of each unit and any special considerations you&apos;ll need to complete each unit&apos;s assignments.</p>
          </div>
        </div>

      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="w-100 text-center">
                  <div className="mb-3">
                    <Image src={calendarIcon} width={iconSize} height={iconSize} alt="Calendar Icon" />
                  </div>
                  <p>The course should take about 30 hours to study and complete assignments from start to finish. This time does not include the time you will take to practice and develop your skills before you complete an assignment.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="w-100 text-center">
                  <div className="mb-3">
                    <Image src={IconTime} width={iconSize} height={iconSize} alt="Clock Icon" />
                  </div>
                  <p>On average, most QC Students work on their course for a few hours per week, and complete the online dog training course within 3 to 6 months. You&apos;ll have up to two years to complete the program – lots of time!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 justify-content-center text-center">
            <h2 className="mb-4">Unit-by-Unit Breakdown</h2>
            <p className="lead">Below is an outline of each unit of the online dog training course.</p>
            <p className="">Expand each section to find out what you&apos;ll learn in each unit, along with each unit&apos;s expected length and the required dogs to complete your assignments.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 d-flex">
            <h3 className="mb-3">Unit A</h3>
            <a><button className="btn btn-outline-primary btn-sm mx-3">Unit Total:</button></a>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-12 col-lg-6">
            <div className="row mb-2">
              <p className="col-4"><BsPencilSquare />&nbsp; 5 (1 hour)</p>
              <p className="col-4"><BsBookHalf />&nbsp; 1-2 hours</p>
              <p className="col-4"><BsPlayCircle />&nbsp; 3 Videos (15 minutes)</p>
            </div>
            <p>In the first unit of the dog training course, you&apos;ll meet your tutor and learn about the fundamentals of dog training. This introductory unit includes an overview of the dog training industry and a background in the fundamentals of ethical and safe training. </p>
            <p><em>You&apos;ll have the option to tell your tutor about your dog, or a dog you&apos;ll be working with to complete your course work! Then you can practice a safe dog introduction. </em></p>
          </div>
          <div className="col-12 col-lg-6">
            <Image src={UnitAImage} alt="Unit A Image" height="230" width="400" />
          </div>
        </div>

        <Accordion className="mb-5">
          <AccordionToggle title="View Full Unit Overview" eventKey="0" variant="primary" />
          <AccordionSection eventKey="0">
            <div className="mb-4">
              <p>Unit A will introduce you to the world of dog training and the many career paths available to you.</p>
              <p>You&apos;ll learn about what it means to work as a dog trainer. This unit will delve into the foundational principles of training that guide this course and will help you to build a successful career.</p>
            </div>
            <p><strong>Introduction to Dog Training</strong></p>
            <div className="mb-4">
              <p>Learn about the evolution of dog training and the relationship between canines and humans. Discover how dog training developed into the high-demand, lucrative industry it is today. Explore the many services you can provide as a dog trainer and the paths you might take to expand your career down the road.</p>
            </div>
            <p><strong>Guiding Principles of Dog Training</strong></p>
            <div className="mb-4">
              <p>QC&apos;s online dog training course follows a set of core values that guide our training methods. You&apos;ll study these values to build the foundation of your career in training. Follow these principles to ensure that your training methods are ethical, effective, safe and, of course, fun!</p>
            </div>
            <p><strong>Fundamentals of Safe Training</strong></p>
            <div className="mb-5">
              <p>Study the precautions you&apos;ll take to ensure your training services are safe for you, your clients and their canine companions. Learn how to setup and maintain a safe training space. Discover the basics of canine first aid and prepare yourself to handle emergency situations that could arise during a training session.</p>
            </div>
            <p><strong>Unit A Assignments</strong></p>
            <p>Your dog training assignments in Unit A will prepare you to safely and responsibly work with dogs. You&apos;ll practice meeting a new dog and preparing your space for training. These assignments will test you on key, foundational aspects of working as a dog trainer.</p>
          </AccordionSection>
        </Accordion>

        <div className="row">
          <div className="col-12 col-lg-6 d-flex">
            <h3 className="mb-3">Unit B</h3>
            <a><button className="btn btn-outline-primary btn-sm mx-3">Unit Total:</button></a>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-12 col-lg-6">
            <div className="row mb-2">
              <p className="col-4"><BsPencilSquare />&nbsp; 5 (1 hour)</p>
              <p className="col-6"><BsBookHalf />&nbsp; 2 hours</p>
              <p className="col-6"><BsPlayCircle />&nbsp; 3 Videos(25 minutes)</p>
            </div>
            <p>In this unit, you&apos;ll begin to learn about canine behavior. Unit B will introduce you to canine ethology – the study of natural canine behavior. You&apos;ll discover how a dog&apos;s breeding history and stage of development will affect his behavior. In particular, you&apos;ll learn about how effective socialization as a puppy can impact a dog&apos;s behavior throughout his whole life.</p>
            <p><em>You&apos;ll have the chance to research your own dog, or a friend or family member&apos;s dog to learn about its breed characteristics!</em></p>
          </div>
          <div className="col-12 col-lg-6">
            <Image src={UnitBImage} alt="Unit B Image" height="225" width="400" />
          </div>
        </div>

        <Accordion defaultActiveKey="0" className="mb-5">
          <AccordionToggle title="View Full Unit Overview" eventKey="1" variant="primary" />
          <AccordionSection eventKey="1">
            <div className="mb-4">
              <p>In Unit B, you&apos;ll learn all about canine behavior. You&apos;ll discover why dogs do the things they do by examining characteristics and canine development.</p>
              <p>We&apos;ll cover important factors that affect canine behavior and explain how you can influence this behavior through training.</p>
            </div>
            <p><strong>Introduction to Ethology</strong></p>
            <div className="mb-4">
              <p>Learn about the scientific study of animal behavior. Discover which canine behaviors are normal and which ones are abnormal. Many behaviors that seem problematic to dog owners are actually normal and healthy for dogs. You&apos;ll learn to help your clients understand their dogs&apos; behavior. You&apos;ll also learn to identify abnormal dog behaviors that could indicate a medical condition.</p>
            </div>
            <p><strong>Breed Groups</strong></p>
            <div className="mb-4">
              <p>Discover how a dog&apos;s breeding history can influence his behavior. Learn how to use a dog&apos;s natural instincts and breed to develop the best possible training program for that individual dog. Explore the common traits of the seven breed groups identified by the American Kennel Club.</p>
            </div>
            <p><strong>Stages of Development</strong></p>
            <div className="mb-4">
              <p>Learn about the different stages of a dog&apos;s physical and mental development. Discover how a dog&apos;s behavior will change from puppyhood into adulthood, and how that development will affect his training needs.</p>
            </div>
            <p><strong>Socialization Stages</strong></p>
            <div className="mb-4">
              <p>Discover why the socialization stages of a puppy&apos;s life are so important to the dog&apos;s wellbeing into adulthood. Learn about the effects of poor socialization on a dog&apos;s life and explore how you, as a trainer, can help to ensure that a puppy is well socialized.</p>
            </div>
            <p><strong>Unit B Assignments</strong></p>
            <p>In Unit B of your online dog training course, you&apos;ll find assignments that test your knowledge of dog behavior, development and socialization. You&apos;ll practice analyzing a dog&apos;s behavior based on his breeding history and stage of development. With guidance from your tutor, you&apos;ll learn to use these factors to explain a dog&apos;s behavior to his owner. You&apos;ll even try your hand at designing a socialization activity to help your puppy students grow into well-adjusted dogs.</p>
          </AccordionSection>
        </Accordion>

        <div className="row">
          <div className="col-12 col-lg-6 d-flex">
            <h3 className="mb-3">Unit C</h3>
            <a><button className="btn btn-outline-primary btn-sm mx-3">Unit Total:</button></a>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-12 col-lg-6">
            <div className="row mb-2">
              <p className="col-4"><BsPencilSquare />&nbsp; 5 (x hours)</p>
              <p className="col-4"><BsBookHalf />&nbsp; 1 hours</p>
              <p className="col-4"><BsPlayCircle />&nbsp; 2 Videos (25 minutes)</p>
            </div>
            <p>Unit C of your dog training course focuses on canine communication. You&apos;ll learn all about the signals that dogs use to communicate. Explore how you can use these signals to improve your training methods and provide a safe, comfortable training space for dogs. This unit will also each you how to use canine communication to improve the relationships between dogs and their owners.</p>
            <p><em>Spend some quality time with your own dog, or a friend or family member&apos;s dog to practice reading canine communication!</em></p>
          </div>
          <div className="col-12 col-lg-6">
            <Image src={UnitCImage} alt="Unit C Image" height="225" width="400" />
          </div>
        </div>

        <Accordion defaultActiveKey="0" className="mb-5">
          <AccordionToggle title="View Full Unit Overview" eventKey="2" variant="primary" />
          <AccordionSection eventKey="2">
            <div className="mb-4">
              <p>The third unit of Dog Training will explore canine communication.</p>
              <p>You&apos;ll learn about the signals that dogs use to communicate, and how interpreting those signals correctly will improve the training experience for you, your clients and their dogs.</p>
            </div>
            <p><strong>Canine Communication</strong></p>
            <div className="mb-4">
              <p>This text will cover how dogs use sounds, facial expressions and body language to express themselves. You&apos;ll learn the signals that dogs use to express excitement, fear, contentment, discomfort and more. You&apos;ll even discover and dispel the many misconceptions that humans have about canine communication.</p>
            </div>
            <p><strong>Calming Signals and Fear Responses</strong></p>
            <div className="mb-4">
              <p>Once you&apos;ve learned to recognize the signals that dogs use to communicate, you&apos;ll be able to read when dogs are showing their discomfort. In this text, you&apos;ll explore the ways that dogs attempt to calm themselves and others in tense or worrying situations. You&apos;ll learn to interpret a dog&apos;s fear response when these tense situations escalate.</p>
            </div>
            <p><strong>Problem Solving with Communication</strong></p>
            <div className="mb-4">
              <p>In this text, you&apos;ll learn how to apply your understanding of canine communication to dog training. You&apos;ll discover how interpreting a dog&apos;s communication signals can help you to identify and resolve training challenges and advocate for a dog&apos;s wellbeing. You&apos;ll consider how your client&apos;s ability to understand her dog, and the dog&apos;s ability to understand his owner will impact the results of training.</p>
            </div>
            <p><strong>Unit C Assignments</strong></p>
            <p>Your assignments in Unit C will ask you to practice looking for canine communication signals when you&apos;re working with dogs. Through scenario-based questions, you&apos;ll also practice advocating for the dog&apos;s wellbeing and helping your clients understand their dogs by interpreting canine communication.</p>
          </AccordionSection>
        </Accordion>

        <div className="row">
          <div className="col-12 col-lg-6 d-flex">
            <h3 className="mb-3">Unit D</h3>
            <a><button className="btn btn-outline-primary btn-sm mx-3">Unit Total:</button></a>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-12 col-lg-6">
            <div className="row mb-2">
              <p className="col-6"><BsPencilSquare />&nbsp; 5 (x hours)</p>
              <p className="col-6"><BsPlayCircle />&nbsp; 11 Videos (100 minutes)</p>
            </div>
            <p>In Unit D of your dog training course, you&apos;ll learn about the learning theory behind effective dog training methods. You&apos;ll discover how dogs learn by making associations between different stimuli and by understanding the consequences associated with their own actions. Then you&apos;ll explore how to apply this learning theory to your training programs. You&apos;ll learn positive reinforcement methods, clicker training and much more!</p>
          </div>
          <div className="col-12 col-lg-6">
            <Image src={UnitDImage} alt="Unit D Image" height="225" width="400" />
          </div>
        </div>

        <Accordion defaultActiveKey="0" className="mb-5">
          <AccordionToggle title="View Full Unit Overview" eventKey="3" variant="primary" />
          <AccordionSection eventKey="3">
            <div className="mb-4">
              <p>Unit D will introduce you to the learning theories that explain how dogs learn, and why our training methods work.</p>
              <p>By studying learning theory, you&apos;ll discover how you can teach dogs new behaviors and how to discourage undesirably behaviors with effective, dog-friendly training methods.</p>
            </div>
            <p><strong>Learning Theory</strong></p>
            <div className="mb-4">
              <p>This text will explain how dogs learn by making associations and understanding consequences. You&apos;ll learn about classical conditioning – also known as associative learning. Then you&apos;ll learn about operant condition, which is how dogs learn that their behaviors have consequences. Discover how you can use consequences in the form of reinforcement, reward markers and punishment to change a dog&apos;s behavior.</p>
            </div>
            <p><strong>Applying Learning Theory</strong></p>
            <div className="mb-5">
              <p>In this text, you&apos;ll learn how to put learning theory into practice to teach dogs cues for their new behaviors. You&apos;ll discover how to teach a dog when to perform a new behavior once he&apos;s learned how to do it. You&apos;ll also learn about obstacles dogs might face when learning new behaviors.</p>
            </div>
            <p><strong>Unit D Assignments</strong></p>
            <p>In Unit D, your course work will test your understanding of how dogs learn. You&apos;ll practice using reward markers and clicker training to put reinforcement into action to teach dogs new behaviors. You&apos;ll be asked how to safely and effectively use punishment to discourage undesirable behavior.</p>
          </AccordionSection>
        </Accordion>

        <div className="row">
          <div className="col-12 col-lg-6 d-flex">
            <h3 className="mb-3">Unit E</h3>
            <a><button className="btn btn-outline-primary btn-sm mx-3">Unit Total:</button></a>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-12 col-lg-6">
            <div className="row mb-2">
              <p className="col-6"><BsPencilSquare />&nbsp; 5 (x hours)</p>
              <p className="col-6"><BsPlayCircle />&nbsp; 8 Videos (75 minutes)</p>
            </div>
            <p>Once you reach Unit E of your online dog training course, you&apos;re ready to put everything you&apos;ve learned into action. You&apos;ll learn about the six training methods, all based in positive reinforcement, you can use to teach dogs new behaviors. Discover how to effectively motivate dogs to perform these behaviors and how to use reinforcement schedules in dog training.</p>
          </div>
          <div className="col-12 col-lg-6">
            <Image src={UnitEImage} alt="Unit E Image" height="225" width="400" />
          </div>
        </div>

        <Accordion defaultActiveKey="0" className="mb-5">
          <AccordionToggle title="View Full Unit Overview" eventKey="4" variant="primary" />
          <AccordionSection eventKey="4">
            <div className="mb-4">
              <p>In Unit E, you&apos;ll put everything you&apos;ve learned into practice and begin working with dogs to teach them new behaviors.</p>
              <p>You&apos;ll learn about the six training methods you can use to teach dogs new behaviors and how to motivate and reinforce those behaviors.</p>
            </div>
            <p><strong>Training Methods</strong></p>
            <div className="mb-4">
              <p>In this text, you&apos;ll learn about the six methods that trainers use to teach dogs new behaviors. You&apos;ll discover how to use luring, shaping, targeting, modelling, capturing and mimicry in different training contexts. We&apos;ll cover common canine behaviors and the best training method for each one.</p>
            </div>
            <p><strong>Motivations and Reinforcement</strong></p>
            <div className="mb-4">
              <p>Discover the tools you&apos;ll use for reinforcement: motivators and reinforcement schedules. In this text, you&apos;ll learn about why dogs choose to perform a behavior – their motivation – and when they should be rewarded for it – the reinforcement schedules.</p>
            </div>
            <p><strong>Unit E Assignments</strong></p>
            <p>It&apos;s time to start training! In Unit E you&apos;ll practice using the six training methods to teach dogs new behaviors. You&apos;ll record training videos for your tutor to examine your technique and provide feedback to help you improve. You&apos;ll use different motivators and consider reinforcement schedules to learn how these factors affect training.</p>
          </AccordionSection>
        </Accordion>

        <div className="row">
          <div className="col-12 col-lg-6 d-flex">
            <h3 className="mb-3">Unit F</h3>
            <a><button className="btn btn-outline-primary btn-sm mx-3">Unit Total:</button></a>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-12 col-lg-6">
            <div className="row mb-2">
              <p className="col-6"><BsPencilSquare />&nbsp; 5 (x hours)</p>
              <p className="col-6"><BsPlayCircle />&nbsp; 5 Videos (50 minutes)</p>
            </div>
            <p>In Unit F, you&apos;ll learn how to safely use common training tools when you work with dogs. You&apos;ll discover common tools to help with leash training and crate training and learn how to teach your clients to use these tools at home. You&apos;ll also learn how experienced trainers use these tools and other techniques to change a dog&apos;s unwanted behaviors.</p>
          </div>
          <div className="col-12 col-lg-6">
            <Image src={UnitFImage} alt="Unit F Image" height="225" width="400" />
          </div>
        </div>

        <Accordion defaultActiveKey="0" className="mb-5">
          <AccordionToggle title="View Full Unit Overview" eventKey="5" variant="primary" />
          <AccordionSection eventKey="5">
            <div className="mb-4">
              <p>Unit F will teach you how to safely use common training tools, and how to use effectively and ethically use punishment to change a dog&apos;s behavior.</p>
              <p>With help from your tutor, you&apos;ll learn important information to help you keep dogs safe in your training sessions. The ability to safely, effectively and appropriately use training tools and punishment in dog training is essential to your work.</p>
            </div>
            <p><strong>Training Tools</strong></p>
            <div className="mb-4">
              <p>Discover the common tools, such as leashes, collars and crates, that you can recommend to clients to aid in dog training. You&apos;ll learn to safely and effectively use these tools to make training effective and fun for your clients and their dogs. You&apos;ll also learn about the safe use of aversive tools and their limited place in training.</p>
            </div>
            <p><strong>Addressing Unwanted Behaviors</strong></p>
            <div className="mb-4">
              <p>Learn how to identify problem behaviors that your clients might need help with, such as barking or destructive behavior. You&apos;ll discover how to address these problem behaviors through training. Importantly, you&apos;ll also learn when a dog&apos;s behavior requires attention from a behavior expert or veterinarian.</p>
            </div>
            <p><strong>Unit F Assignments</strong></p>
            <p>The assignments in Unit F will ask you to practice using training tools in appropriate and safe ways. You&apos;ll design training programs in scenario-based questions that use training tools and safe, ethical punishments to change a dog&apos;s behavior.</p>
          </AccordionSection>
        </Accordion>

        <div className="row">
          <div className="col-12 col-lg-6 d-flex">
            <h3 className="mb-3">Unit G</h3>
            <a><button className="btn btn-outline-primary btn-sm mx-3">Unit Total:</button></a>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-12 col-lg-6">
            <div className="row mb-2">
              <p className="col-6"><BsPencilSquare />&nbsp; 5 (x hours)</p>
              <p className="col-6"><BsPlayCircle />&nbsp; 3 Videos (25 minutes)</p>
            </div>
            <p>You&apos;ve learned all about training dogs. Now in Unit G you&apos;ll learn to teach dog owners. You&apos;ll discover what it takes to develop a training program and setup a safe training space to facilitate learning in your training sessions. You&apos;ll learn essential teaching skills to help your students work effectively to train their dogs.</p>
          </div>
          <div className="col-12 col-lg-6">
            <Image src={UnitGImage} alt="Unit G Image" height="225" width="400" />
          </div>
        </div>

        <Accordion defaultActiveKey="0" className="mb-5">
          <AccordionToggle title="View Full Unit Overview" eventKey="6" variant="primary" />
          <AccordionSection eventKey="6">
            <div className="mb-4">
              <p>Working as a dog trainer requires you to teach people as well as dogs. In this unit of your online course, you&apos;ll focus on working with clients to teach them how to train their dogs.</p>
              <p>You&apos;ll learn how to develop effective training programs for different types of classes and study keys skills for teaching people.</p>
            </div>
            <p><strong>Working as a Trainer</strong></p>
            <div className="mb-4">
              <p>In this text, you&apos;ll study the day-to-day tasks of a dog trainer. You&apos;ll learn the steps you&apos;ll take to facilitate learning for your clients, whether you&apos;re teaching a group class or a private session. You&apos;ll study how to develop a training program and create a safe training space.</p>
            </div>
            <p><strong>Teaching Skills</strong></p>
            <div className="mb-4">
              <p>This course text will cover strategies for teaching people. You&apos;ll learn to communicate with dog owners in ways that help them retain the information you share with them. Study the different ways that people learn to prepare yourself to work with clients.</p>
            </div>
            <p><strong>Unit G Assignments</strong></p>
            <p>You&apos;ll practice your teaching skills as you complete your Unit G assignments. You&apos;ll try your hand at developing training programs that accommodate your clients&apos; goals and learning needs. These assignments require to prioritize the needs of both your human and canine students.</p>
          </AccordionSection>
        </Accordion>

        <div className="row">
          <div className="col-12 col-lg-6 d-flex">
            <h3 className="mb-3">Unit H – Optional</h3>
            <a><button className="btn btn-outline-primary btn-sm mx-3">Unit Total:</button></a>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-12 col-lg-6">
            <div className="row mb-2">
              <p className="col-6"><BsPencilSquare />&nbsp; 5 (x hours)</p>
              <p className="col-6"><BsPlayCircle />&nbsp; 3 Videos (20 minutes)</p>
            </div>
            <p>You&apos;ve learned and practiced all the skills you need to successfully work as a dog trainer. Now it&apos;s time to turn your finely honed skills into a business! The business training offered in this course is optional. However, this training will be hugely beneficial to your career if you intend to start your own training business, or if you&apos;re looking to get a job working for an established trainer.</p>
            <p>In this unit, you&apos;ll learn to get your business off the ground. We&apos;ll cover important first steps, such as naming your business, finding insurance and creating a business plan. You&apos;ll learn all about different marketing techniques and how to use them effectively. You&apos;ll read up on essential skills for working with clients and selling your services. Even if launching your business isn&apos;t in your immediate future, take advantage of wonderful opportunity to kickstart your business when you&apos;re ready to take that step.</p>
          </div>
          <div className="col-12 col-lg-6">
            <Image src={UnitHImage} alt="Unit H Image" height="225" width="400" />
          </div>
        </div>

        <Accordion defaultActiveKey="0" className="mb-5">
          <AccordionToggle title="View Full Unit Overview" eventKey="7" variant="primary" />
          <AccordionSection eventKey="7">
            <div className="mb-4">
              <p>This online business unit is optional for those who want to start and run a successful dog training business.</p>
              <p>You&apos;ll learn how to kickstart your business and promote your training services, and study the ins and outs of developing positive client relationships.</p>
            </div>
            <p><strong>Starting Your Own Business</strong></p>
            <div className="mb-4">
              <p>Prepare to launch a successful dog training business. This text will guide you through the initial stages of setting up your business, from choosing a name to registering your business. You&apos;ll learn about the different types of business structures and regulations. You&apos;ll also learn helpful tips to help you manage your finances and develop a business plan.</p>
            </div>
            <p><strong>Marketing and Promotion</strong></p>
            <div className="mb-4">
              <p>Learn how to find new clients by marketing and promoting your dog training business. Develop important skills, including building an effective website and managing your social media. Explore these essential skills to reach out to new clients.</p>
            </div>
            <p><strong>Working with Clients</strong></p>
            <div className="mb-5">
              <p>Turn every client into a repeat customer. Learn how communicate professionally and respectfully with clients to create a positive relationship. Study different techniques for selling your services and learn how to deal with unhappy clients in a professional and resourceful manner.</p>
            </div>
            <p><strong>Unit H Assignments</strong></p>
            <p>In the business portion of your dog training course work, you&apos;ll learn how to evaluate your business and optimize your plan to suit your career goals. With your tutor&apos;s guidance, you&apos;ll develop an ideal business scenario suitable for your aspirations.</p>
          </AccordionSection>
        </Accordion>
      </div>
    </section>

  </DefaultLayout>

);

export default CourseOutlinePage;
