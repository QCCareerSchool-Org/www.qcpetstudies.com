import type { NextPage } from 'next';
import Image from 'next/image';
import { FaCheck, FaClipboardList, FaGraduationCap, FaLaptop } from 'react-icons/fa';
import { BrochureForm } from '../components/BrochureForm';

import { MinutesCounter } from '../components/counters/MinutesCounter';
import { PagesCounter } from '../components/counters/PagesCounter';
import { ToolsCounter } from '../components/counters/ToolsCounter';
import { DefaultLayout } from '../components/DefaultLayout';
import { SEO } from '../components/SEO';
import guarantee1Year from '../images/1-year-guarantee-outlined.svg';
import guarantee21Day from '../images/21-day-guarantee-outlined.svg';
import tutorBackground from '../images/backgrounds/tutor-background.jpg';
import materialsImage from '../images/dg-course-materials-manuals-e9e9e9.jpg';
import dogsLeftForm from '../images/dogs-left-form.png';
import firstAidBook from '../images/first-aid-book-white.jpg';
import firstAidLogo from '../images/first-aid-logo.svg';
import scissorsSet from '../images/scissor-set-1.jpg';
import kitImage from '../images/starter-kit-whole.png';

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <SEO
        title="QC Pet Studies"
        description="Get the training to become a professional dog groomer with QC's affordable online dog grooming course. Learn from the experts and start your career today!"
        canonical="/"
      />

      <div className="backgroundVideoWrapper">
        <video autoPlay muted loop className="backgroundVideo">
          <source src="https://www.doggroomingcourse.com/wp-content/uploads/2016/06/web-banner-intro.mp4" type="video/mp4" />
        </video>
        <div className="foregroundContent">
          <section id="firstSection" className="text-shadow">
            <div className="container text-center">
              <h1 className="text-light">Become a Professional<br />Dog Groomer</h1>
              <p className="h4 text-light">Learn Online and Get Hands-On Training</p>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-light">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h2>Start a Career in <strong>Dog Grooming</strong></h2>
              <p>Get the knowledge and practical skills you need to succeed as a professional dog groomer with QC&apos;s online dog grooming courses. Complete your training from home with practical and theoretical assignments, while receiving guidance from certified master groomers every step of the way. Graduate with a certificate of completion and begin a rewarding career as a professional dog groomer.</p>
              <button className="btn btn-outline-primary-dark">Course Overview</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2 className="mb-5">You&apos;ll Be Covered by QC&apos;s Double Guarantee</h2>
          <div className="row">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <Image src={guarantee21Day} width={165} height={165} alt="21-Day Money-Back Guarantee" />
              </div>
              <h3>The 21-Day Money Back Guarantee</h3>
              <p>Try the course risk-free for 21 days. This gives you time to receive your course materials and evaluate whether the dog grooming course is right for you.  If you decide it&apos;s not a good fit, simply contact QC to arrange a return of your course materials for a refund. It&apos;s that easy! Note: For sanitary reasons, the clippers and attachment combs provided with the course cannot be refunded (value $200 US).</p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <Image src={guarantee1Year} width={199} height={165} alt="1-Year Money-Back Guarantee" />
              </div>
              <h3>The 1-Year Money Back Guarantee</h3>
              <p>This course will pay for itself within two years. That&apos;s a promise. If after two years of receiving your certificate of completion, you haven&apos;t earned the equivalent of your tuition fees in dog grooming fees or salary, your dog grooming course tuition will be refunded in full. All you have to do is provide proof that you&apos;ve made a reasonable effort to find work as a dog groomer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light pb-0">
        <div className="container text-center">
          <div className="row mb-4">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h2>Your <strong>Course Materials</strong></h2>
              <p>You&apos;ll learn to safely and expertly groom dogs from start to finish thanks to detailed course texts and video tutorials. Get training on everything from dog grooming fundamentals like bathing, brushing, and drying to specialized breed cuts and finishing touches. These texts and videos are so useful you&apos;ll keep referring back to them throughout your dog grooming career!</p>
              <p>Before you begin your practical work in Unit C, we&apos;ll also ship you your dog grooming supplies. This includes a WAHL ARCO 5-in-1 Cordless Clipper, a stainless steel attachment guide comb kit, a set of 3 grooming scissors, and a grooming starter kit. These professional-grade tools have a $300 value!</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-6 offset-3 col-md-4 offset-md-0 mb-4 mb-md-0">
              <PagesCounter />
            </div>
            <div className="col-6 offset-3 col-md-4 offset-md-0 mb-4 mb-md-0">
              <MinutesCounter />
            </div>
            <div className="col-6 offset-3 col-md-4 offset-md-0">
              <ToolsCounter />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2" style={{ fontSize: 0 }}>
              <Image src={materialsImage} alt="Materials" width={1344} height={873} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-0 mb-2 mb-lg-0 text-lg-start">
              <Image src={firstAidLogo} alt="First Aid Course logo" width={60} height={60} />
              <h2>Get a <strong>FREE</strong> First Aid Course</h2>
              <p className="lead">Enroll in Dog Grooming &amp; receive the First Aid for Dog Groomers course to take your career to the next level!</p>
              <p>Being trained in Pet First Aid prepares you to respond to emergencies and maintain a safe grooming environment. You&apos;ll learn from dog first aid experts who will teach you what you need to know to keep yourself and your furry clients out of harm&apos;s way, and how to deal with emergency situations if they arise.</p>
            </div>
            <div className="col-12 col-lg-6" style={{ fontSize: 0, marginBottom: '-20px' }}>
              <Image src={firstAidBook} alt="First Aid book" width={504} height={385} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark pb-4">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h2>Bonus Tools for Dog Grooming Students</h2>
              <h3>Professional Grooming Scissors</h3>
              <p>Before you begin your practical work in Unit C, you&apos;ll receive three pairs of professional grooming scissors that enable you to create a variety of looks.</p>
              <Image src={scissorsSet} alt="scissors set" width={816} height={270} />
              <p><em>Product may vary based on the supplier.</em></p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h3>Dog Grooming Starter Kit</h3>
              <p>Before you begin your practical work in Unit C, you&apos;ll also receive a toolkit with the essential items you need to get started as a dog groomer, including professional-grade brushes, combs, coat tools, and nail clippers.</p>
              <p><em>$50 Value</em></p>
              <Image src={kitImage} alt="grooming kit" width={849} height={345} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <Image src={tutorBackground} layout="fill" objectFit="cover" objectPosition="center" alt="dddd" />
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h2>Learn from Certified Master Groomers</h2>
              <p className="lead">You&apos;ll receive feedback and guidance from the best in the industry!</p>
              <p>QC tutors, Lisa Day and Paddy Gaffney have a combined 57 years of experience in the dog grooming industry.</p>
              <button className="btn btn-outline-primary">Meet QC Tutors</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2 className="mb-4">Online Learning Made Easy</h2>
          <div className="row">
            <div className="col-6 col-lg-3 mb-4 mb-lg-0">
              <FaLaptop className="h1 text-secondary mb-3" />
              <h3>Enroll<br />Online</h3>
              <p>Get online access to your course right away. Receive your books and dog grooming tools in seven to ten days.</p>
            </div>
            <div className="col-6 col-lg-3 mb-4 mb-lg-0">
              <FaClipboardList className="h1 text-secondary mb-3" />
              <h3>Submit Your<br />Assignments</h3>
              <p>Use your computer, phone or tablet to upload your course work to QC&apos;s Online Student Center.</p>
            </div>
            <div className="col-6 col-lg-3">
              <FaCheck className="h1 text-secondary mb-3" />
              <h3>Review Instructor<br />Feedback</h3>
              <p>Get audio feedback from your tutor, a professional dog groomer, after each unit you submit.</p>
            </div>
            <div className="col-6 col-lg-3">
              <FaGraduationCap className="h1 text-secondary mb-3" />
              <h3>Receive Your<br />Certificate</h3>
              <p>Complete your course, receive your certificate, and begin your career as a professional dog groomer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="container-fluid bg-light">
          <div className="row d-flex align-items-center">
            <div className="d-none d-md-block col-6 py-section pe-0 text-end">
              <Image src={dogsLeftForm} alt="happy dogs" width={539} height={429} />
            </div>
            <div className="col-12 col-md-6 bg-dark col-6 py-section px-md-5">
              <h2 className="mb-4">Download the Dog Grooming Course Catalog</h2>
              <ul className="mb-5">
                <li className="mb-2">Find out if a career in dog grooming is right for you</li>
                <li className="mb-2">Learn about the many careers you can pursue as a dog groomer</li>
                <li className="mb-2">View the course curriculum, watch course videos, and look at sample assignments</li>
                <li className="mb-2">Find out about tuition information including finding a payment plan that works well for you</li>
                <li>Learn how you can&apos;t go wrong with QC&apos;s money back guarantee!</li>
              </ul>
              <BrochureForm />
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default Home;
