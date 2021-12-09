import { NextPage } from 'next';
import Image from 'next/image';
import { ReactElement } from 'react';
import { BsBook } from 'react-icons/bs';
import { FaBars, FaPlay } from 'react-icons/fa';

import { Bar } from '../../../components/Bar';
import { DefaultLayout } from '../../../components/DefaultLayout';
import { DGTutorSection } from '../../../components/DGTutorSection';
import { PriceSection } from '../../../components/PriceSection';
import { SEO } from '../../../components/SEO';
import { TabGroup } from '../../../components/TabGroup';
import AssignmentBackground from '../../../images/backgrounds/golden-retriever-sitting-next-to-computer.jpg';
import IDTPCertificationLogo from '../../../images/IDTP-certification-gold.svg';

const courseCodes = [ 'dt' ];

const GroomingAssignment: NextPage = () => {
  return (
    <DefaultLayout>
      <SEO
        title="Professional Dog Trainer Course"
        description=""
        canonical="/dog-training-courses/dog-training/course-preview"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={AssignmentBackground} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="dog getting a haircut" />
        <div className="image-overlay-gradient" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <BsBook className="h1 mb-3" />
              <h1 className="mb-4">Dog Training Certification Course</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h2>Congratulations on Choosing to Explore a Career as a <strong>Professional Dog Trainer</strong>!</h2>
              <p>There&apos;s never been a better time to become a professional dog trainer! All over, training schools are booked to capacity and clients are being put on waiting lists. Entering the market as a qualified professional dog groomer is almost a guaranteed stable income!</p>
              <p>Do you have what it takes to become a professional dog trainer? Does this sound like you?</p>
              <ul>
                <li>You love all dogs, big and small</li>
                <li>You&apos;re able to interacti with all types of dogs calmly and carefully</li>
                <li>You&apos;re agile and are able to stand on your feet for hours at a time</li>
                <li>You understand that dogs are individuals with their own needs and wants, and are willing to learn how to work with them</li>
                <li>You&apos;re good with people too, and are eager to teach people as well as dogs</li>
              </ul>
              <p className="lead mb-0">If this list describes you in a nutshell, then you&apos;re in the right place!</p>
            </div>
            <div className="col-12 col-md-6">
              <div className="card bg-lighter border-lighter">
                <div className="card-body">
                  <p className="card-text">QC&apos;s online dog training course will prepare you in every way for a successful career as a professional dog trainer.  You&apos;ll learn everything from dog behavior and communication to scientifically-proven training methods to addressing unwanted behaviors in dogs.</p>
                  <p className="card-text">This is not a paint-by-numbers course.  You will take the time to learn and understand how dogs learn so that you can then decipher the best method to teach any dog.  Using a Least Intrusive, Minimally Aversive (LIMA) approach, you&apos;ll become an expert problem solver who can handle any training situation.</p>
                  <p className="card-text">Whether your goal is to launch your own dog training business, work for an established training school, freelance your services, or simply become an expert to train your own dog(s), you&apos;ll gain all the skills to achieve your goals.</p>
                  <p className="card-text">Even though this is an online course, you&apos;ll complete tons of hands-on assignments designed to enhance your training experience. Don&apos;t miss out on this amazing opportunity to work with an expert to develop your skills!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-contents-center align-items-center">
            <div className="flex-shrink-0 mb-4 mb-md-0 me-md-4">
              <Image src={IDTPCertificationLogo} alt="IDTP International Dog Grooming Professional logo" />
            </div>
            <div className="text-center text-md-start">
              <h2>Your <strong>Certification</strong></h2>
              <p className="lead mb-0">Upon graduation, you&apos;ll receive the International Dog Training Professional&trade; (IDTP&trade;) Certification. With your certification and professional title, you&apos;ll be ready to start your own business or work for an established training school right away!</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <div className="text-center">
                <h2>Course <strong>Syllabus</strong></h2>
                <p className="lead">The Dog Training Course is split into five parts, each containing individual learning units.</p>
                <p className="mb-4">You must complete a unit with a satisfactory grade before you can submit assignments for the next unit.</p>
              </div>
              <div className="card bg-lighter border-lighter">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <h3 className="fw-normal"><strong>Part 1:</strong> Units A&ndash;D</h3>
                      <p>The first part of the dog training course is largely theory-based.  Before you start learning specific training methods and techniques, you must first become an expert in canine behavior, communication, and learning theory.  In these first four units you&apos;ll build those foundations with your tutor.</p>
                      <p>Once you have a fundamental understanding of how dogs learn, why dogs do the things they do, and what behaviors are normal/abnormal, you&apos;ll be able to better understand and appreciate the training techniques and methods in Part 2 of the course!</p>
                      <p className="mb-0">Even though these units deal in theory, don&apos;t worry! You&apos;ll have plenty of video content and fun hands-on assignments along the way!</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <Preview
                        videoContent={(
                          <div className="ratio ratio-16x9">
                            <video controls preload="metadata" poster="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/unit-screenshots-a.jpg">
                              <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/unit-a.mp4" type="video/mp4" />
                            </video>
                          </div>
                        )}
                        assignmentContent={(
                          <>
                            <h4>Assignment C1</h4>
                            <p className="lead">Reading Signals</p>
                            <p className="mb-4">View the assignment sample below to discover more about what you&apos;ll learn in Part 1 of the course. Click on the labels to see how you&apos;ll complete your assignments online.</p>
                            <a href="" className="btn btn-primary">View Assignment</a>
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <Bar variant="primary" align="start" />
              <h4>Unit A</h4>
              <p className="mb-0">In the first unit of the dog training course, you&apos;ll meet your tutor and learn about the fundamentals of dog training. This introductory unit includes on overview of the dog training industry and a background in the fundamentals of ethical and safe training. </p>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <Bar variant="primary" align="start" />
              <h4>Unit B</h4>
              <p className="mb-0">In this unit, you&apos;ll begin to learn about canine behavior. Unit B will introduce you to canine ethology – the study of natural canine behavior. You&apos;ll discover how a dog&apos;s breeding history and stage of development will affect his behavior. In particular, you&apos;ll learn about how effective socialization as a puppy can impact a dog&apos;s behavior throughout his whole life.</p>
            </div>
            <div className="col-12 col-lg-6">
              <Bar variant="primary" align="start" />
              <h4>Unit C</h4>
              <p className="mb-0">Unit C of your dog training course focuses on canine communication. You&apos;ll learn all about the signals that dogs use to communicate. Explore how you can use these signals to improve your training methods and provide a safe, comfortable training space for dogs. This unit will also each you how to use canine communication to improve the relationships between dogs and their owners. </p>
            </div>
            <div className="col-12 col-lg-6">
              <Bar variant="primary" align="start" />
              <h4>Unit D</h4>
              <p className="mb-0">In Unit D of your dog training course, you&apos;ll learn about the learning theory behind effective dog training methods. You&apos;ll discover how dogs learn by making associations between different stimuli and by understanding the consequences associated with their own actions. Then you&apos;ll explore how to apply this learning theory to your training programs. You&apos;ll learn positive reinforcement methods, clicker training and much more!</p>
            </div>

            <div className="col-12">
              <hr className="my-5" />
            </div>

            <div className="col-12">
              <div className="card bg-lighter border-lighter">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <h3 className="fw-normal"><strong>Part 2:</strong> Units E-F</h3>
                      <p>Now that you understand the fundamentals of dog communication and learning theory, you&apos;re ready to learn all about training principles.  In this section of the course you&apos;ll learn the six core training methods used to create new behaviors: luring, targeting, shaping, modeling, capturing, and mimicry.  You&apos;ll discover how different types of dogs can react to different methods, and how it&apos;ll be your job to utilize the best method to suit each dog.</p>
                      <p>You&apos;ll learn about how to motivate dogs to learn, and how to properly use reinforcement schedules to achieve the best (and quickest) outcome.  You&apos;ll also get a crash course in different training tools and how to use them safely.</p>
                      <p>In the last section of the course you&apos;ll learn methods and techniques you can use to address unwanted behaviors.  Always remember, the goal in any situation is to use tools and techniques designed to encourage a dog to make good choices!</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <Preview
                        videoContent={(
                          <div className="ratio ratio-16x9">
                            <video controls preload="auto">
                              <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/interview-paddy.mp4" type="video/mp4" />
                            </video>
                          </div>
                        )}
                        assignmentContent={(
                          <>
                            <h4>Assignment XX</h4>
                            <p className="lead">something something unwanted behaviors</p>
                            <p className="mb-4">View the assignment sample below to see how you&apos;ll practice training methods in this part of the course.</p>
                            <a href="" className="btn btn-primary">View Assignment</a>
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <Bar variant="primary" align="start" />
              <h4>Unit E</h4>
              <p className="mb-0">Once you reach Unit E of your online dog training course, you&apos;re ready to put everything you&apos;ve learned into action. You&apos;ll learn about the six training methods, all based in positive reinforcement, you can use to teach dogs new behaviors. Discover how to effectively motivate dogs to perform these behaviors and how to use reinforcement schedules in dog training. </p>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <Bar variant="primary" align="start" />
              <h4>Unit F</h4>
              <p className="mb-0">In Unit F, you&apos;ll learn how to safely use common training tools when you work with dogs. You&apos;ll discover common tools to help with leash training and crate training and learn how to teach your clients to use these tools at home. You&apos;ll also learn how experienced trainers use these tools and other techniques to change a dog&apos;s unwanted behaviors. </p>
            </div>

            <div className="col-12">
              <hr className="my-5" />
            </div>

            <div className="col-12 mb-5">
              <div className="card bg-lighter border-lighter">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <h3 className="fw-normal"><strong>Part 3:</strong> Unit G</h3>
                      <p>Once you&apos;ve mastered how to train dogs, you have to start thinking about how to teach people.  As a professional dog trainer, this will often be your biggest challenge.  Being an expert in dog behavior and training isn&apos;t enough: You have to teach people how to use your methods to train their own dogs!</p>
                      <p>In this part of the course you&apos;ll learn about how to effectively work with different types of clients, and how to run group training classes.  You&apos;ll receive tips on how to develop training plans, and how to avoid common training pitfalls.</p>
                      <p>This part of the course will transform you from a great dog trainer into a great teacher!</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <Preview
                        videoContent={(
                          <div className="ratio ratio-16x9">
                            <video controls preload="auto">
                              <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/interview-paddy.mp4" type="video/mp4" />
                            </video>
                          </div>
                        )}
                        assignmentContent={(
                          <>
                            <h4>Assignment G???</h4>
                            <p className="lead">Teaching a Group Class</p>
                            <p className="mb-4">View the assignment sample below to find out how you&apos;ll be assessed in your abilities to teach people to train their own dogs.</p>
                            <a href="" className="btn btn-primary">View Assignment</a>
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <hr className="my-5" />
            </div>

            <div className="col-12 mb-5">
              <div className="card bg-lighter border-lighter">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <h3 className="fw-normal"><strong>Part 4:</strong> Business Essentials (Optional)</h3>
                      <p>You&apos;ve learned and practiced all the skills you need to successfully work as a dog trainer. Now it&apos;s time to turn your finely honed skills into a business! The business training offered in this course is optional. However, this training will be hugely beneficial to your career if you intend to start your own training business, or if you&apos;re looking to get a job working for an established trainer.</p>
                      <p className="mb-0">In this unit, you&apos;ll learn to get your business off the ground. You&apos;ll cover important first steps, such as naming your business, finding insurance and creating a business plan. You&apos;ll learn all about different marketing techniques and how to use them effectively. You&apos;ll read up on essential skills for working with clients and selling your services. Even if launching your business isn&apos;t in your immediate future, take advantage of wonderful opportunity to kickstart your business when you&apos;re ready to take that step.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <Preview
                        videoContent={(
                          <div className="ratio ratio-16x9">
                            <video controls preload="auto">
                              <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/interview-paddy.mp4" type="video/mp4" />
                            </video>
                          </div>
                        )}
                        assignmentContent={(
                          <>
                            <h4>Assignment H???</h4>
                            <p className="lead">Creating a Business Plan</p>
                            <p className="mb-4">View the assignment sample below to see how the course will help you answer key questions before launching your dog training business.</p>
                            <a href="" className="btn btn-primary">View Assignment</a>
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <hr className="my-5" />
            </div>

            <div className="col-12">
              <div className="card bg-lighter border-lighter">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                      <h3 className="fw-normal"><strong>Part 5:</strong> CPDT Exam Prep (optional)</h3>
                      <p>The Certification Council of Pet Dog Trainers (CCPDT) is the gold standard organization for dog training certifications. Any dog trainer can write their exam to become a Certified Pet Dog Trainer (CPDT), and as a QC student you are greatly encouraged to pursue this certification! </p>
                      <p>In this final part of the course, you will prepare for the CPDT exam with the help of QC&apos;s tutors.  You will gain helpful tips on how to prepare for the exam, get insight on the types of exam questions you&apos;ll encounter, and even complete a handy 20-question practice quiz to make sure you&apos;re ready for your exam! </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <hr className="my-5" />
            </div>

            <div className="col-12 text-center">
              For a full course outline, including required dog breeds, tools, and completion times, please see the dog training course curriculum.
            </div>

          </div>
        </div>
      </section>

      <DGTutorSection className="bg-light" />

      <PriceSection courses={courseCodes} doubleGuarantee={true} />

    </DefaultLayout>
  );
};

const VideoTab = (): ReactElement => (
  <div className="d-flex flex-column align-items-center">
    <FaPlay size={20} className="mb-2" />
    Video Sample
  </div>
);

const AssignmentTab = (): ReactElement => (
  <div className="d-flex flex-column align-items-center">
    <FaBars size={20} className="mb-2" />
    Assignment Sample
  </div>
);

type PreviewProps = {
  videoContent: ReactElement;
  assignmentContent: ReactElement;
};

const Preview = ({ videoContent, assignmentContent }: PreviewProps): ReactElement => (
  <TabGroup
    data={[
      {
        tab: <VideoTab />,
        content: videoContent,
      },
      {
        tab: <AssignmentTab />,
        content: assignmentContent,
      },
    ]}
  />
);

export default GroomingAssignment;
