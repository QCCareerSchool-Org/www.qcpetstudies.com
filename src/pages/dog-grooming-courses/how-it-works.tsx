import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { DefaultLayout } from '../../components/DefaultLayout';
import { SEO } from '../../components/SEO';
import assignment from '../../images/assignment.svg';
import checked from '../../images/checked.svg';
import direction from '../../images/direction.svg';
import enrollNow from '../../images/enroll-now-bg.jpg';
import feedback from '../../images/feedback.svg';
import findTheDog from '../../images/find-dog-bg.jpg';
import find from '../../images/find.svg';
import graduateBg from '../../images/graduate-bg-1.jpg';
import studentExperiance from '../../images/student-experience-btn-1.jpg';
import stopwatch from '../../images/time.svg';
import tutorButton from '../../images/tutor-btn.jpg';
import whereTogroom from '../../images/where-groom-bg-1.jpg';

const DogGroomingHowItWorksPage: NextPage = () => {
  return (
    <DefaultLayout>
      <SEO
        title="How Does Online Dog Groomer Training Work?"
        description=""
        canonical="/dog-grooming-courses/how-it-works"
      />

      <section id="firstSection">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h1>How QC&apos;s Online Dog<br />
                Groomer Training Works</h1>
              <p>Online dog groomer training can be just as effective as in-className training. QC has over 30 years of experience in online education, and has now applied that expertise to the&nbsp;
                <a className="text-primary text-decoration-none" href="/online-courses/dog-grooming/">online dog grooming course</a>! The key is to provide students with plenty of hands-on training and feedback every step of the way. Remember,
                just because you&apos;re learning dog grooming online doesn&apos;t mean you&apos;re learning alone!</p>
              <p>Wondering exactly how your online dog groomer education will unfold? Here&apos;s a detailed overview of how your course, assignments, grades, and graduation will work.</p>
            </div>
          </div>
        </div>

        <section>
          <div className="container text-center">
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <Image src={stopwatch} width={50} height={50} alt="timer" />
                <h2>Starting the Dog Grooming Course</h2>
                <p>The first thing you&apos;ll do after enrolling is log in to your personal account in the Online Student Center. From there you&apos;ll be able to access your dog grooming course guides,
                  lesson texts, assignment templates and video tutorials. Within 7-10 business days of enrolling, you&apos;ll also receive hard copy versions of your course materials along with your grooming tools.</p>
                <h4>View a <a className="text-primary text-decoration-none" href="https://www.doggroomingcourse.com/online-courses/dog-grooming/course-outline/">detailed&nbsp;course outline</a> to learn more about your dog groomer training.</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light bg-gradient">
          <div className="container text-center">
            <Image src={assignment} width={50} height={50} alt="assignment" />
            <h2 className="mb-5">Your Dog Grooming Assignments</h2>
            <div className="d-flex justify-content-center col-12 col-lg-8 offset-lg-2">
              <p>Throughout your course, you&apos;ll complete a variety of theoretical and practical assignments that are&nbsp;designed to test your knowledge and develop your dog grooming techniques.</p>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 mb-5 mb-lg-0 d-flex flex-column align-items-center">
                <h2>Theory-Based Assignments</h2>
                <div className="dropdown-divider bg-primary border-top p-1 col-1"></div>
                <div className="text-center col-lg-8">
                  <p>In order to be a qualified professional groomer, you need to master dog grooming theory. Throughout your online grooming course you&apos;ll learn&nbsp;everything from grooming&nbsp;tools, to dog behavior and temperaments, to the unique challenges of working with puppies, seniors, and other dogs who have special needs, and <a className="text-primary text-decoration-none" href="https://www.doggroomingcourse.com/online-courses/dog-grooming/">much more</a>.</p>
                  <p>Your knowledge in these areas will be tested with quizzes, case studies and other theoretical assignments, which will all be graded by your personal tutor. As you progress through the course, you&apos;ll become more and more comfortable with dog grooming theory, and you&apos;ll shift your focus&nbsp;to your practical grooming assignments.</p>
                </div>
              </div>
              <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                <h2>Practical Assignments</h2>
                <div className="dropdown-divider bg-primary border-top p-1 col-1"></div>
                <div className="text-center col-lg-8">
                  <p>Getting a chance to practice your skills on real dogs is an essential part of any good dog grooming program, and QC&apos;s online course is no exception. At the start of your course, practical assignments will focus on getting comfortable with dogs and the grooming environment, and you&apos;ll progress to completing partial grooms focusing on specific elements. During&nbsp;your
                    <a className="text-primary text-decoration-none" href="https://www.doggroomingcourse.com/online-courses/dog-grooming/#outline">practicum units</a>,&nbsp;you&apos;ll be&nbsp;completing several start-to-finish breed standard grooms.</p>
                  <p>you&apos;ll take step-by-step&nbsp;pictures or videos of your work as you go, and upload them to your online student center. Your tutor will evaluate your work and provide you with detailed feedback on what you did well and where you could improve.</p>
                </div>
              </div>
            </div>
            <h3 className="mt-5">View sample assignments from QC&apos;s dog grooming course!</h3>
            <a className="btn mt-4 bg-primary btn-lg text-white" href="/your-grooming-assignments/"><span>VIEW ASSIGNMENTS</span></a>
          </div>
        </section>

        <section>
          <Image src={findTheDog} layout="fill" objectFit="cover" objectPosition="center" alt="find the dog" />
          <div className="container text-center">
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <Image src={find} width={50} height={50} alt="assignment" />
                <h2 className="pt-4">Finding Dogs for Grooming Assignments</h2>
                <div className="d-flex mt-5 justify-content-center col-12 col-lg-8 offset-lg-2">
                  <p>
                    Throughout your dog groomer training you&apos;ll have the chance to work with many different dogs. You can work with your own dog, your friends&apos; or family members&apos; dogs, or you can reach out to your local animal shelter or a nearby rescue. After all, it&apos;s never too hard to find people who will be happy to have their dogs groomed for free! If you get stuck, just contact the student support team:<br />
                    <b>they&apos;re ready to provide you with additional suggestions.</b>
                  </p>
                </div>
                <h3 className="text-center">Wondering how online dog grooming schools<br />
                  differ from in-className programs? <a className="text-primary text-decoration-none" href="https://www.doggroomingcourse.com/learning-online/className-vs-online-dog-grooming-schools/">Find out here</a>!
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light bg-gradient">
          <div className="container text-center">
            <div className="row">
              <div className="col-12 mb-5 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <Image src={direction} width={50} height={50} alt="direction" />
                <h2>Where to Groom Dogs for Assignments</h2>
                <p>You will need to set up an at-home workspace to groom dogs and develop your practical skills. Your course materials include step-by-step instructions for setting up a safe and functional grooming workspace at home. You will submit a photograph of your workspace so your tutor can provide you with feedback and ensure your setup is secure before starting practical assignments.</p>
                <p>You will also need an area to bathe dogs before you groom them. Students typically use their own bathtub or shower, work outside, or visit a self-serve wash station. Your tutor will work with you to ensure your setup is safe and practical.</p>
                <a className="btn mt-4 bg-primary btn-lg text-white" target="_blank" href="/wp-content/uploads/2017/03/What-You-Need-to-Get-Started.pdf">
                  <span>DOWNLOAD YOUR GUIDE TO GETTING STARTED</span></a>
              </div>
              <Image src={whereTogroom} objectFit="contain" alt="direction" />
            </div>
          </div>
        </section>

        <section>
          <div className="container text-center">
            <div className="row">
              <div className="col-12 mb-5 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <Image src={feedback} width={50} height={50} alt="assignment" />
                <h2>Receiving Feedback from your Tutor</h2>
                <h4 className="mt-4 mb-4">You&apos;ll receive advice and detailed feedback from your tutor after every unit you complete.</h4>
                <p>Your tutor truly cares about your success and will encourage you to submit your very best work. After each unit of the dog grooming course, you&apos;ll receive an audio file where your tutor explains what you did well, and where you should focus to improve your skills even further. See how your skills and confidence improve as you work your way through the course!</p>
                <a className="btn mt-4 bg-primary btn-lg text-white" href="/tutors/"><span>MEET QC&apos;S TUTORS</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light bg-gradient">
          <Image src={graduateBg} layout="fill" objectFit="cover" objectPosition="center" alt="graduate" />
          <div className="container text-center">
            <div className="row">
              <div className="col-12 mb-5 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <Image src={checked} width={50} height={50} alt="graduation" />
                <h2 className="mt-4 mb-4">Graduation</h2>
                <p>Once you&apos;ve completed your dog groomer training and your tuition has been paid in full, you&apos;ll be all set to graduate. Your professional dog groomer certificate of completion will be sent straight to your home.</p>
                <h4 className="mt-4">Please keep in touch, we&apos;d love to hear how you&apos;re doing!</h4>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container text-center">
            <div className="row justify-content-around">
              <div className="col-sm-3 col-10 p-5 position-relative mb-4 mb-lg-0">
                <Image src={studentExperiance} alt="student Experiance" objectFit="cover" layout="fill" />
                <div className="position-relative">
                  <h2 className="text-white">Student<br />Experience</h2>
                  <p className="text-white">Find out what it&apos;s like to be a student at QC Pet Studies. You may be learning from home, but you won&apos;t be learning alone!</p>
                  <a className="btn mt-4 bg-transparent border-2 border-white btn-lg text-white" href="/student-experience/">
                    <span className="text-white">LEARN MORE</span>
                  </a>
                </div>
              </div>
              <div className="col-sm-3 col-10 p-5 position-relative mb-4 mb-lg-0">
                <Image src={tutorButton} alt="student Experiance" objectFit="cover" layout="fill" />
                <div className="position-relative">
                  <h2 className="text-white">Meet QC&apos;s<br />Tutors</h2>
                  <p className="text-white">Learn about QC&apos;s tutors, Certified Master Groomers Paddy Gaffney and Lisa Day. They will guide you through the course!</p>
                  <a className="btn mt-4 bg-transparent border-2 border-white btn-lg text-white" href="/tutors">
                    <span className="text-white">LEARN MORE</span>
                  </a>
                </div>
              </div>
              <div className="col-sm-3 col-10 p-5 position-relative mb-4 mb-lg-0">
                <Image src={enrollNow} alt="student Experiance" objectFit="cover" layout="fill" />
                <div className="position-relative">
                  <h2 className="text-white"><b>Enroll</b><br />Now</h2>
                  <p className="text-white">Join QC Pet Studies and take the first step towards a career you&apos;ll love. QC accepts new students 365 days a year!</p>
                  <a className="btn mt-4 bg-transparent border-2 border-white btn-lg text-white" href="https://enroll.doggroomingcourse.com/course.php?c%5B%5D=dg&amp;c%5B%5D=fa">
                    <span className="text-white">ENROLL ONLINE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </DefaultLayout>
  );

};

export default DogGroomingHowItWorksPage;
