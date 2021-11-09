import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BsBook, BsCalendarCheck, BsCheckCircle, BsFillCloudArrowDownFill, BsPencilSquare, BsPlayCircle } from 'react-icons/bs';
import { DefaultLayout } from '../components/DefaultLayout';
import { SEO } from '../components/SEO';
import OneYearMoneyGuaranteeImage from '../images/1-year-guarantee-outlined.svg';
import MoneyGuaranteeImage from '../images/21-day-guarantee-outlined.svg';
import TutorBackground from '../images/backgrounds/tutor-background.jpg';
import CourseMaterialsImage from '../images/dg-course-materials-manuals.jpg';
import DogFormImage from '../images/dogs-left-form.png';
import firstAidBook from '../images/first-aid-book-white.jpg';
import FirstAidLogo from '../images/first-aid-logo.svg';
import MagnifyingGLassImage from '../images/icon-magnifying-glass-2.svg';
import ScissorSetImage from '../images/scissor-set-1.jpg';
import SPCAIImage from '../images/spcai-logo.png';
import StarterKitmage from '../images/starter-kit-whole.png';

const InternalWelcomePage: NextPage = () => {

  return (
    <DefaultLayout>
      <SEO
        title="Become a Professional Dog Groomer"
        description="Become a Professional Dog Groomer"
        canonical="/internal-welcome"
      />

      <div className="backgroundVideoWrapper bg-dark">
        <video autoPlay muted loop className="backgroundVideo">
          <source src="https://89b45d42c17e11dd3d57-62a1fc0bf60a98e1d5e980348a7de3b7.ssl.cf1.rackcdn.com/web-banner-intro-3.mp4" type="video/mp4" />
        </video>
        <div className="foregroundContent">
          <section id="firstSection">
            <div className="container text-center">
              <h1 className="text-uppercase">Become a Professional<br />Dog Groomer</h1>
              <h4>Learn online AND get hands-on training</h4>
            </div>
          </section>
        </div>
      </div>

      <section>
        <div className="container text-center">
          <h2 className="mb-4">Start a Career in <strong>Dog Grooming</strong></h2>
          <div className="row justify-content-center mb-3">
            <div className="col-12 col-lg-10">
              <p>Get the knowledge and practical skills you need to succeed as a professional dog groomer with QC&apos;s <Link href=""><a className="link-primary">online dog grooming courses.</a></Link> Complete your training from home with practical and theoretical assignments, while receiving guidance from certified master groomers every step of the way. Graduate with a certificate of completion and begin a rewarding career as a professional dog groomer.</p>
            </div>
          </div>
          <a href=""><button className="btn btn-outline-primary btn-lg mb-4">Course Overview</button></a>
          <p><i>In partnership with <Link href=""><a className="link-primary">SPCAI</a></Link></i></p>
          <div className="mb-4">
            <Image src={SPCAIImage} alt="Spcai Image" />
          </div>
          <h3 className="mb-5">You&apos;ll Be Covered by QC&apos;s Double Guarantee</h3>
          <div className="row">
            <div className="col-12 col-lg-6 d-flex mb-lg-0 mb-4">
              <div className="card bg-light">
                <div className="card-body">
                  <div className="w-100">
                    <Image src={MoneyGuaranteeImage} alt="21 Day Money Back Guarantee" />
                    <p className="lead"><strong>The 21-Day Money Back Guarantee</strong></p>
                    <p>Try the course risk-free for 21 days.  This gives you time to receive your course materials and evaluate whether the dog grooming course is right for you.  If you decide it&apos;s not a good fit, simply contact QC to arrange a return of your course materials for a refund. It&apos;s that easy!<strong> Note: For sanitary reasons, the clippers and attachment combs provided with the course cannot be refunded (value $200 US)</strong></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex">
              <div className="card bg-light">
                <div className="card-body">
                  <div className="w-100">
                    <Image src={OneYearMoneyGuaranteeImage} alt="1 Year Money Back Guarantee" />
                    <p className="lead"><strong>The 1-Year Money Back Guarantee</strong></p>
                    <p><em>This course will pay for itself within two years, that&apos;s a promise.</em><br /> That&apos;s right.  If after two years of receiving your certificate of completion, you haven&apos;t earned the equivalent of your tuition fees in dog grooming fees or salary, your dog grooming course tuition will be refunded in full. All you have to do is provide proof that you&apos;ve made a reasonable effort to find work as a dog groomer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Your <strong>Course Materials</strong></h2>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <p>You&apos;ll learn to safely and expertly groom dogs from start to finish thanks to detailed course texts and video tutorials. Get training on everything from dog grooming fundamentals like bathing, brushing, and drying to specialized breed cuts and finishing touches. These texts and videos are so useful you&apos;ll keep referring back to them throughout your dog grooming career!</p>
            </div>
          </div>
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-lg-8">
              <p>Before you begin your practical work in Unit C, we&apos;ll also ship you your dog grooming supplies. This includes a WAHL ARCO 5-in-1 Cordless Clipper, a stainless steel attachment guide comb kit, a set of 3 grooming scissors, and a grooming starter kit. These professional-grade tools have a $300 value!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <BsBook className="h2 text-primary" />
              <h2><strong>650+</strong></h2>
              <p className="lead text-uppercase">Pages Of Course Content</p>
            </div>
            <div className="col-12 col-lg-4">
              <BsPlayCircle className="h2 text-primary" />
              <h2><strong>900+</strong></h2>
              <p className="lead text-uppercase">Minutes Of Instructional Video</p>
            </div>
            <div className="col-12 col-lg-4">
              <BsCheckCircle className="h2 text-primary" />
              <h2><strong>22</strong></h2>
              <p className="lead text-uppercase">Professional Grooming Tools</p>
            </div>
          </div>
          <Image src={CourseMaterialsImage} alt="Dog Course Materials kit" />
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 text-lg-start">
              <div className="text-center mb-4">
                <Image src={FirstAidLogo} alt="First Aid Logo" />
              </div>
              <h2>Get a <strong>FREE</strong> First Aid Course</h2>
              <p className="lead">Enroll in Dog Grooming &amp; receive the First Aid for Dog Groomers course to take your career to the next level!</p>
              <p>Being trained in Pet First Aid prepares you to respond to emergencies and maintain a safe grooming environment. You&apos;ll learn from dog first aid experts who will teach you what you need to know to keep yourself and your furry clients out of harm&apso;s way, and how to deal with emergency situations if they arise.</p>
            </div>
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <Image src={firstAidBook} alt="First Aid Book" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container text-center">
          <h2 className="mb-4">Bonus Tools for Dog Grooming Students</h2>
          <h3 className="mb-4"><strong>Professional Grooming Scissors</strong></h3>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 mb-2">
              <p><strong>Before you begin your practical work in Unit C, you&apos;ll receive three pairs of professional grooming scissors that enable you to create a variety of looks.</strong></p>
            </div>
          </div>
          <Image src={ScissorSetImage} alt="Scissor Set" />
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center">
          <h3 className="mb-3">Dog Grooming Starter Kit</h3>
          <div className="row justify-content-center mb-3">
            <div className="col-12 col-lg-8">
              <p>Before you begin your practical work in Unit C, you&apos;ll also receive a toolkit with the essential items you need to get started as a dog groomer, including professional-grade brushes, combs, coat tools, and nail clippers.</p>
            </div>
          </div>
          <p><i>$50 Value</i></p>
          <Image src={StarterKitmage} objectFit="cover" alt="Starter Kit Image" />
        </div>
      </section>

      <section className="bg-dark">
        <Image src={TutorBackground} layout="fill" objectFit="cover" objectPosition="center" alt="Learning During Covid" />
        <div className="container text-center">
          <BsPencilSquare className="h2" />
          <h2>Learn from Certified Master Groomers</h2>
          <p className="lead"><strong>You&apos;ll receive feedback and guidance from the best in the industry!</strong></p>
          <p><strong>QC tutors, Lisa Day and Paddy Gaffney have a combined 57 years of experience in the dog grooming industry</strong></p>
          <a href=""><button className="btn btn-outline-light btn-lg">Meet Qc Tutors</button></a>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2 className="mb-5">Online Learning Made Easy</h2>
          <div className="row">
            <div className="col-12 col-lg-3">
              <BsCalendarCheck className="h2 text-secondary mb-4" />
              <h3>Enroll<br />Online</h3>
              <p>Get online access to your course right away. Receive your books, and dog grooming tools in 7-10 days.</p>
            </div>
            <div className="col-12 col-lg-3">
              <BsFillCloudArrowDownFill className="h2 text-secondary mb-4" />
              <h3>Submit Your<br /><strong>Assignments</strong></h3>
              <p>Use your computer, phone or tablet to upload your course work to QC&apos;s Online Student Center.</p>
            </div>
            <div className="col-12 col-lg-3">
              <div className="mb-4">
                <Image src={MagnifyingGLassImage} alt="Magnifying Glass Icon" height="50px" width="50px" />
              </div>
              <h3>Review Instructor<br /><strong>Feedback</strong></h3>
              <p>Get audio feedback from your tutor, a professional dog groomer, after each unit you submit.</p>
            </div>
            <div className="col-12 col-lg-3">
              <BsCheckCircle className="h2 text-secondary mb-4" />
              <h3>Receive your<br /><strong>Certificate</strong></h3>
              <p>Complete your course, receive your certificate, and begin your career as a professional dog groomer.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="row">
          <div className="col-12 col-lg-6 bg-light">
            <div className="d-flex align-items-center h-100">
              <Image src={DogFormImage} alt="Dog playing" />
            </div>
          </div>
          <div className="col-12 col-lg-6 text-lg-start bg-dark p-5">
            <div className="d-flex flex-column justify-content-center h-100">
              <h3>Download the Dog Grooming Course Catalog</h3>
              <ul className="d-grid gap-1">
                <li>Find out if a career in dog grooming is right for you</li>
                <li>Learn about the many careers you can pursue as a dog groomer</li>
                <li>View the course curriculum, watch course videos, and look at sample assignments</li>
                <li>Find out about tuition information including finding a payment plan that works well for you</li>
                <li>Learn how you can&apos;t go wrong with QC&apos;s money back guarantee!</li>
              </ul>
              <form className="mx-2 d-grid gap-3">
                <div>
                  <label htmlFor="fname" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="fname" />
                </div>
                <div>
                  <label htmlFor="lname" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="lname" />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Email*</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div>
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="text" className="form-control" id="phone" />
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="teem1">I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="term2">I agree to receive phone calls and/or text messages from a QC student advisor. Standard rates apply.</label>
                </div>
                <div>
                  <button type="submit" className="btn btn-outline-primary mb-5">Get The Catalog</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default InternalWelcomePage;
