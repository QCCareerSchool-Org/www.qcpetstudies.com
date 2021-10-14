import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { DefaultLayout } from '../../components/DefaultLayout';
import { SEO } from '../../components/SEO';
import { useScreenWidth } from '../../hooks/useScreenWidth';

import GraduateBackground from '../../images/backgrounds/dog-in-graduatation-cap.jpg';
import DogOnGroomingTableBackground from '../../images/backgrounds/dog-on-grooming-table.jpg';
import YorkieBackground from '../../images/backgrounds/yorkie-on-left-looking-up.jpg';

import EnrollNowCardBackground from '../../images/cards/enroll-now.jpg';
import StudentExperienceCardBackground from '../../images/cards/student-experience.jpg';
import TutorCardBackground from '../../images/cards/tutor.jpg';

import IconAssignment from '../../images/icon-assignment.svg';
import IconChecked from '../../images/icon-checked.svg';
import IconCompass from '../../images/icon-compass.svg';
import IconMagnifyingGlass from '../../images/icon-magnifying-glass.svg';
import IconMegaphone from '../../images/icon-megaphone.svg';
import IconTime from '../../images/icon-time.svg';

const iconSize = 50;

const DogGroomingHowItWorksPage: NextPage = () => {
  const screenWidth = useScreenWidth();

  const lgOrGreater = screenWidth >= 992;

  return (
    <DefaultLayout>
      <SEO
        title="How Does Online Dog Groomer Training Work?"
        description="It's easy to learn dog grooming online! Find out how QC's Online Dog Groomer Training works, from course books to practical assignments and tutor feedback!"
        canonical="/dog-grooming-courses/how-it-works"
      />

      <section id="firstSection" className="bg-dark">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h1>How QC&apos;s Online Dog<br />Groomer Training Works</h1>
              <p>Online dog groomer training can be just as effective as in-class training. QC has over 30 years of experience in online education, and has now applied that expertise to the <Link href="/dog-grooming-courses/dog-grooming"><a className="link-primary">online dog grooming course</a></Link>! The key is to provide students with plenty of hands-on training and feedback every step of the way. Remember, just because you&apos;re learning dog grooming online doesn&apos;t mean you&apos;re learning alone!</p>
              <p>Wondering exactly how your online dog groomer education will unfold? Here&apos;s a detailed overview of how your course, assignments, grades, and graduation will work.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <div className="mb-2">
                <Image src={IconTime} width={iconSize} height={iconSize} alt="timer" />
              </div>
              <h2>Starting the Dog Grooming Course</h2>
              <p>The first thing you&apos;ll do after enrolling is log in to your personal account in the Online Student Center. From there you&apos;ll be able to access your dog grooming course guides, lesson texts, assignment templates and video tutorials. Within 7-10 business days of enrolling, you&apos;ll also receive hard copy versions of your course materials along with your grooming tools.</p>
              <p className="lead">View a <Link href="/dog-grooming-courses/dog-grooming#course-outline"><a className="link-primary">detailed course outline</a></Link> to learn more about your dog groomer training.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <div className="row mb-5">
            <div className="col-12 col-lg-10 offset-lg-1">
              <div className="mb-2">
                <Image src={IconAssignment} width={iconSize} height={iconSize} alt="assignment" />
              </div>
              <h2 className="mb-4">Your Dog Grooming Assignments</h2>
              <p>Throughout your course, you&apos;ll complete a variety of theoretical and practical assignments that are designed to test your knowledge and develop your dog grooming techniques.</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-lg-6 col-xl-5 offset-xl-1 mb-4 mb-lg-0">
              <h3 className="mb-4">Theory-Based Assignments</h3>
              <p>In order to be a qualified professional groomer, you need to master dog grooming theory. Throughout your online grooming course you&apos;ll learn everything from grooming tools, to dog behavior and temperaments, to the unique challenges of working with puppies, seniors, and other dogs who have special needs, and <Link href="/dog-grooming-courses"><a className="link-primary">much more</a></Link>.</p>
              <p>Your knowledge in these areas will be tested with quizzes, case studies and other theoretical assignments, which will all be graded by your personal tutor. As you progress through the course, you&apos;ll become more and more comfortable with dog grooming theory, and you&apos;ll shift your focus to your practical grooming assignments.</p>
            </div>
            <div className="col-12 col-lg-6 col-xl-5">
              <h3 className="mb-4">Practical Assignments</h3>
              <p>Getting a chance to practice your skills on real dogs is an essential part of any good dog grooming program, and QC&apos;s online course is no exception. At the start of your course, practical assignments will focus on getting comfortable with dogs and the grooming environment, and you&apos;ll progress to completing partial grooms focusing on specific elements. During your <Link href="/dog-grooming-courses/dog-grooming#course-outline"><a className="link-primary">practicum units</a></Link>, you&apos;ll be completing several start-to-finish breed standard grooms.</p>
              <p>you&apos;ll take step-by-step pictures or videos of your work as you go, and upload them to your online student center. Your tutor will evaluate your work and provide you with detailed feedback on what you did well and where you could improve.</p>
            </div>
          </div>
          <p className="lead">View sample assignments from QC&apos;s dog grooming course!</p>
          <Link href="/dog-grooming-courses/dog-grooming/your-grooming-assignments"><a className="btn btn-primary">View Assignments</a></Link>
        </div>
      </section>

      <section>
        {lgOrGreater && <Image src={YorkieBackground} layout="fill" objectFit="cover" objectPosition="center" alt="find the dog" />}
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
              <div className="mb-2">
                <Image src={IconMagnifyingGlass} width={iconSize} height={iconSize} alt="magnifying glass" />
              </div>
              <h2 className="pt-4">Finding Dogs for Grooming Assignments</h2>
              <p>Throughout your dog groomer training you&apos;ll have the chance to work with many different dogs. You can work with your own dog, your friends&apos; or family members&apos; dogs, or you can reach out to your local animal shelter or a nearby rescue. After all, it&apos;s never too hard to find people who will be happy to have their dogs groomed for free! If you get stuck, just contact the student support team: <strong>they&apos;re ready to provide you with additional suggestions.</strong></p>
              <p className="lead">Wondering how online dog grooming schools differ from in-class programs? <Link href="/dog-grooming-courses/resources#online-vs-in-class"><a className="link-primary">Find out here</a></Link>!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light pb-0">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <div className="mb-2">
                <Image src={IconCompass} width={iconSize} height={iconSize} alt="compass" />
              </div>
              <h2>Where to Groom Dogs for Assignments</h2>
              <p>You will need to set up an at-home workspace to groom dogs and develop your practical skills. Your course materials include step-by-step instructions for setting up a safe and functional grooming workspace at home. You will submit a photograph of your workspace so your tutor can provide you with feedback and ensure your setup is secure before starting practical assignments.</p>
              <p>You will also need an area to bathe dogs before you groom them. Students typically use their own bathtub or shower, work outside, or visit a self-serve wash station. Your tutor will work with you to ensure your setup is safe and practical.</p>
              <a className="btn btn-primary" target="_blank" href="/grooming-what-you-need-to-get-started.pdf">Download Your Guide to Getting Started</a>
            </div>
          </div>
        </div>
      </section>
      <Image src={DogOnGroomingTableBackground} layout="responsive" alt="Dog ready to be groomed" />

      <section>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <div className="mb-2">
                <Image src={IconMegaphone} width={iconSize} height={iconSize} alt="megaphone" />
              </div>
              <h2>Receiving Feedback from your Tutor</h2>
              <p className="lead">You&apos;ll receive advice and detailed feedback from your tutor after every unit you complete.</p>
              <p>Your tutor truly cares about your success and will encourage you to submit your very best work. After each unit of the dog grooming course, you&apos;ll receive an audio file where your tutor explains what you did well, and where you should focus to improve your skills even further. See how your skills and confidence improve as you work your way through the course!</p>
              <Link href="/dog-grooming-courses/dog-grooming#tutors"><a className="btn btn-primary">Meet QC&apos;s Tutors</a></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        {lgOrGreater && <Image src={GraduateBackground} layout="fill" objectFit="cover" objectPosition="center" alt="dog wearing a graduation cap" />}
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-3">
              <div className="mb-2">
                <Image src={IconChecked} width={iconSize} height={iconSize} alt="checkmark" />
              </div>
              <h2 className="mb-4">Graduation</h2>
              <p>Once you&apos;ve completed your dog groomer training and your tuition has been paid in full, you&apos;ll be all set to graduate. Your professional dog groomer certificate of completion will be sent straight to your home.</p>
              <p className="lead">Please keep in touch, we&apos;d love to hear how you&apos;re doing!</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row">
            <div className="col-10 offset-2 col-md-4 offset-md-0 mb-4 mb-lg-0">
              <div className="p-4 position-relative">
                <Image src={StudentExperienceCardBackground} alt="Student Experience" objectFit="cover" layout="fill" />
                <div className="position-relative">
                  <h3 className="text-white">Student<br />Experience</h3>
                  <p className="text-white">Find out what it&apos;s like to be a student at QC Pet Studies. You may be learning from home, but you won&apos;t be learning alone!</p>
                  <Link href="/dog-grooming-courses/resources#student-experience"><a className="btn btn-outline-light">Learn More</a></Link>
                </div>
              </div>
            </div>
            <div className="col-10 offset-2 col-md-4 offset-md-0 mb-4 mb-lg-0">
              <div className="p-4 position-relative">
                <Image src={TutorCardBackground} alt="Meet QC's Tutors" objectFit="cover" layout="fill" />
                <div className="position-relative">
                  <h3 className="text-white">Meet QC&apos;s<br />Tutors</h3>
                  <p className="text-white">Learn about QC&apos;s tutors, Certified Master Groomers Paddy Gaffney and Lisa Day. They will guide you through the course!</p>
                  <Link href="/dog-grooming-courses/dog-grooming#tutors"><a className="btn btn-outline-light">Learn More</a></Link>
                </div>
              </div>
            </div>
            <div className="col-10 offset-2 col-md-4 offset-md-0">
              <div className="p-4 position-relative">
                <Image src={EnrollNowCardBackground} alt="Enroll Now" objectFit="cover" layout="fill" />
                <div className="position-relative">
                  <h3 className="text-white">Enroll<br />Now</h3>
                  <p className="text-white">Join QC Pet Studies and take the first step towards a career you&apos;ll love. QC accepts new students 365 days a year!</p>
                  <Link href="https://enroll.qcpetstudies.com?c[]=dg&c[]=fa"><a className="btn btn-outline-light">Learn More</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default DogGroomingHowItWorksPage;
