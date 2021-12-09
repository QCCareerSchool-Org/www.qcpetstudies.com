import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaBriefcase, FaChalkboardTeacher, FaHandHoldingUsd, FaLaptopHouse, FaRegCalendarCheck } from 'react-icons/fa';

import { DefaultLayout } from '../components/DefaultLayout';
import { SEO } from '../components/SEO';
import HappyPuppyRunning from '../images/backgrounds/happy-puppy-running.jpg';
import HowItWorks from '../images/how-it-works.png';
import IDGPCertificationGold from '../images/IDGP-certification-gold.svg';
import IDTPCertificationGold from '../images/IDTP-certification-gold.svg';

const iconSize = 145;

const HomePage: NextPage = () => (
  <DefaultLayout>
    <SEO
      title="Become a Pet Care Professional"
      description="Start an exciting career in the pet care industry! Become a certified dog groomer or certified dog trainer with QC’s Internationally-recognized online courses!"
      canonical="/"
    />

    <section id="top" className="bg-dark">
      <Image src={HappyPuppyRunning} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" alt="happy puppy running" />
      <div className="container text-center text-shadow">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <h1 className="fw-normal">Start an Exciting Career in the <strong>Pet Care Industry</strong></h1>
            <p className="lead">Whether you want to become a dog groomer, trainer, or both, you'll gain the certification needed to become successful in your chosen career. Enroll with QC and get an internationally-recognized certification. Start your new career in no time!</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <h2 className="mb-3">Course <strong>Certifications</strong></h2>
        <p className="lead mb-5">Enroll today and start training for your new career right away!</p>
        <div id="cardRow" className="row align-items-stretch">
          <div className="col-10 offset-1 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 col-xxl-4 offset-xxl-2 d-flex align-items-stretch">
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <Image src={IDTPCertificationGold} width={iconSize} height={iconSize} alt="21-Day Money-Back Guarantee" />
                </div>
                <h3><span className="badge rounded-pill bg-secondary">New</span> Dog Training | <em className="gold">IDTP</em></h3>
                <p>Dog trainers have never been in higher demand! It's the best time to launch a rewarding and lucrative career as a dog trainer. This course uses scientifically proven methods of dog training derived from learning theory and industry best practices. You'll gain a thorough understanding of how dogs learn, how to modify unwanted behaviors, and how to create new behaviors in all types of dogs. Don't miss out on your chance to learn from the best!</p>
                <Link href="/dog-training-courses/dog-training"><a className="link-primary">View Course</a></Link>
              </div>
            </div>
          </div>
          <div className="col-10 offset-1 col-lg-6 offset-lg-0 col-xl-5 col-xxl-4 d-flex align-items-stretch">
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <Image src={IDGPCertificationGold} width={iconSize} height={iconSize} alt="1-Year Money-Back Guarantee" />
                </div>
                <h3>Dog Grooming | <em className="gold">IDGP</em></h3>
                <p>Become a professional dog groomer. There's more to grooming than just bathing and brushing dogs! In this course you'll learn all about dog anatomy and behavior, how to use grooming tools safely and effectively, and how to competently groom any breed of dog. You'll also get a chance to launch your dog grooming business if that's your goal! Get plenty of hands-on groomer training without ever leaving your home. Start today!</p>
                <Link href="/dog-grooming-courses/dog-grooming"><a className="link-primary">View Course</a></Link>
              </div>
            </div>
          </div>
          <div className="col-10 offset-1 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 col-xxl-4 offset-xxl-2 mb-lg-0 d-flex align-items-stretch">
            <div className="card">
              <div className="card-body">
                <h3>First Aid for Dog Groomers</h3>
                <p>A well-educated dog groomer is trained to prevent most emergency situations, but accidents still happen sometimes. The First Aid for Groomers course will give you the skills and confidence to address medical emergencies in the grooming salon if and when they arise. This course is offered for FREE with QC's dog grooming course.</p>
                <Link href="/dog-grooming-courses/first-aid"><a className="link-primary">View Course</a></Link>
              </div>
            </div>
          </div>
          <div className="col-10 offset-1 col-lg-6 offset-lg-0 col-xl-5 col-xxl-4 mb-0 d-flex align-items-stretch">
            <div className="card">
              <div className="card-body">
                <h3>Breed Styling Workshop</h3>
                <p>An advanced workshop for experienced grooming professionals. This course skips the basic skills training and goes straight into developing additional skills in styling specific dog breeds including poodles, terriers, non-sporting breeds and more.</p>
                <Link href="/dog-grooming-courses/breed-styling"><a className="link-primary">View Course</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1 mb-md-4 text-center">
            <h2>How Online <strong>Learning Works</strong></h2>
          </div>
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <Image src={HowItWorks} alt="Dog looking at tablet" />
          </div>
          <div className="col-12 col-md-6">
            <h3>Enroll Online &amp; Access Your Course Materials</h3>
            <ul>
              <li>Enroll online at any time</li>
              <li>Receive your student center login</li>
              <li>Get started with your course</li>
            </ul>
            <h3>Study &amp; Complete Assignments</h3>
            <ul>
              <li>Read course texts and watch instructional videos</li>
              <li>Complete theoretical and practical assignments</li>
              <li>Get personalized feedback from your tutor</li>
            </ul>
            <h3>Graduate &amp; Receive your Certification</h3>
            <ul>
              <li>Receive your Certificate of Completion in the mail</li>
              <li>Get lifetime access to course materials and updated content</li>
              <li>Enjoy a 50% discount on all additional courses you take with QC</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 text-center">
            <h2 className="mb-4">Why Choose <strong>QC</strong></h2>
            <p className="mb-5">When choosing to attend an online school, it can be difficult to separate legitimate educational institutions from less-than-reputable companies that are looking to make a quick buck. You want to choose a school you'll be proud to attend. One that will help you meet your career goals. Welcome to QC!</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-2 d-flex align-items-center justify-content-end">
            <FaRegCalendarCheck className="h1 text-secondary mb-3" />
          </div>
          <div className="col-9">
            <h3>Proven Track Record</h3>
            <p>Enroll in a school with a 35-year track record of quality distance education, an A+ rating from the Better Business Bureau, and thousands of graduates working careers they love!</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-2 d-flex align-items-center justify-content-end">
            <FaLaptopHouse className="h1 text-secondary mb-3" />
          </div>
          <div className="col-9">
            <h3>A Fully Online Learning Experience</h3>
            <p>QC offers 100% online learning on all courses! There are no mandatory scheduled webinars to attend and no inconvenient classroom sessions. You work at your own pace and on your own time, with 1-on-1 guidance and support from your personal tutor and your student support advisor.</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-2 d-flex align-items-center justify-content-end">
            <FaChalkboardTeacher className="h1 text-secondary mb-3" />
          </div>
          <div className="col-9">
            <h3>Expert Tutors to Guide You</h3>
            <p>Your personal tutor will follow your progress through your online course, will personally grade your assignments, and provide you with individualized feedback after you ve completed each unit. These aren't paid employees of the school grading from a template; they're career professionals working in your industry, and they're focused on your success!</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-2 d-flex align-items-center justify-content-end">
            <FaBriefcase className="h1 text-secondary mb-3" />
          </div>
          <div className="col-9">
            <h3>Business Training You Can Use</h3>
            <p>Each course comes complete with optional business training where you'll work with your tutor to come up with a business name, create a marketing strategy, start building your website, and get access to templates that will help get your career off the ground from day one!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2 d-flex align-items-center justify-content-end">
            <FaHandHoldingUsd className="h1 text-secondary mb-3" />
          </div>
          <div className="col-9">
            <h3>No Additional or Hidden Fees</h3>
            <p>Your course tuition is the only fee you'll pay for your course or certification. Unlike other schools, when you graduate from QC your certificate is yours forever, and you'll have continued access to your student center at no additional cost. you'll never be asked to pay subscription fees, membership fees, or any other fees to keep your certification current or use your business materials.</p>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      .gold { color: #C9952C; }
      #cardRow {
        margin-right: -1.5rem;
        margin-left: -1.5rem;
      }
      #cardRow > .col, #cardRow > [class*="col-"] {
        padding-right: 1.5rem;
        padding-left: 1.5rem;
        margin-bottom: 3rem;
      }
    `}</style>

  </DefaultLayout>
);

export default HomePage;
