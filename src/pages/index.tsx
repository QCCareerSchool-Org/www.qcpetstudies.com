import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';
import { FaBriefcase, FaChalkboardTeacher, FaHandHoldingUsd, FaLaptopHouse, FaRegCalendarCheck } from 'react-icons/fa';
import { DefaultLayout } from '../components/DefaultLayout';
import { SEO } from '../components/SEO';
import PetStudiesHomepage from '../images/backgrounds/pet-studies-homepage-bg.jpg';
import HowItWorks from '../images/how-it-works-png.png';
import IDGPCertificationGold from '../images/IDGP-certification-gold.svg';
import IDTPCertificationGold from '../images/IDTP-certification-gold.svg';

const goldenColorFont = {
  color: '#C9952C',
};
const iconSize = 145;
const Home: NextPage = () => {

  return (
    <DefaultLayout>
      <SEO
        title="QC Pet Studies"
        description="Get the training to become a professional dog groomer with QC's affordable online dog grooming course. Learn from the experts and start your career today!"
        canonical="/"
      />

      <section id="firstSection">
        <Image src={PetStudiesHomepage} layout="fill" objectFit="cover" objectPosition="center" alt="groomer bathing a dog" />
        <div className="container text-center">
          <h1 className="text-light">Start an Exciting Career in the <strong>Pet Care Industry</strong></h1>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2 className="mb-4">Course <strong>Certifications</strong></h2>
          <p>Enroll today and start training for a career in dog grooming right away</p>
          <div className="row justify-content-evenly mb-5">
            <div className="col-10 col-lg-5 mb-5 mb-lg-0 border p-4 d-flex flex-column justify-content-between">
              <div className="mb-4">
                <Image src={IDTPCertificationGold} width={iconSize} height={iconSize} alt="21-Day Money-Back Guarantee" />
              </div>
              <h3><Badge pill bg="secondary">New</Badge> Dog Training | <span style={goldenColorFont}>IDTP</span></h3>
              <p>Dog trainers have never been in higher demand! It&apos;s the best time to launch a rewarding and lucrative career as a dog trainer. This course uses scientifically proven methods of dog training derived from learning theory and industry best practices. You&apos;ll gain a thorough understanding of how dogs learn, how to modify unwanted behaviors, and how to create new behaviors in all types of dogs. Don&apos;t miss out on your chance to learn from the best!</p>
              <Link href="#"><a className="link-primary">View Course</a></Link>
            </div>
            <div className="col-10 col-lg-5 border p-4 d-flex flex-column justify-content-between">
              <div className="mb-4">
                <Image src={IDGPCertificationGold} width={iconSize} height={iconSize} alt="1-Year Money-Back Guarantee" />
              </div>
              <h3>Dog Grooming | <span style={goldenColorFont}>IDGP</span> </h3>
              <p>In the first unit of the dog grooming course, you&apos;ll meet your tutor and start learning about the fundamentals of dog grooming. This introductory unit includes theoretical studies on the history of dog grooming, and how to protect your health &amp; safety as a dog groomer. You&apos;ll also learn about dog anatomy in great detail, and you&apos;ll start learning about skincare and esthetics.</p>
              <Link href="#"><a className="link-primary">View Course</a></Link>
            </div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-10 col-lg-5 mb-5 mb-lg-0 border p-4  d-flex flex-column justify-content-between">
              <h3>First Aid for Dog Groomers</h3>
              <p>Dog trainers have never been in higher demand! It&apos;s the best time to launch a rewarding and lucrative career as a dog trainer. This course uses scientifically proven methods of dog training derived from learning theory and industry best practices. You&apos;ll gain a thorough understanding of how dogs learn, how to modify unwanted behaviors, and how to create new behaviors in all types of dogs. Don&apos;t miss out on your chance to learn from the best!</p>
              <Link href="#"><a className="link-primary">View Course</a></Link>
            </div>
            <div className="col-10 col-lg-5 border p-4  d-flex flex-column justify-content-between">
              <h3>Breedstyling Workshop</h3>
              <p>In the first unit of the dog grooming course, you&apos;ll meet your tutor and start learning about the fundamentals of dog grooming. This introductory unit includes theoretical studies on the history of dog grooming, and how to protect your health &amp; safety as a dog groomer. You&apos;ll also learn about dog anatomy in great detail, and you&apos;ll start learning about skincare and esthetics.</p>
              <Link href="#"><a className="link-primary">View Course</a></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light pb-0">
        <div className="container">
          <div className="row mb-4 text-center">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h2>How Online <strong>Learning Works</strong></h2>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-md-6 offset-md-0 mb-4 mb-md-0">
              <Image src={HowItWorks} alt="How It Works Icons" />
            </div>
            <div className="col-12 col-md-6 offset-md-0 mb-4 mb-md-0">
              <h3>Enroll Online &amp; Access Your Course Materials</h3>
              <ul>
                <li>Enroll online at any time</li>
                <li>Receive your student center login</li>
                <li>Get started with your course</li>
              </ul>

              <h3>Study &amp; Complete Assignments</h3>
              <ul>
                <li>Receive your Certificate of Completion in the mail</li>
                <li>Get lifetime access to course materials and updated content</li>
                <li>Enjoy a 50% discount on all additional courses you take with QC</li>
              </ul>

              <h3>Graduate &amp; Receive your Certificationf</h3>
              <ul>
                <li>Read course texts and watch instructional videos</li>
                <li>Complete theoretical and practical assignments</li>
                <li>Get personalized feedback from your tutor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ">
          <div className="row text-center mb-4">
            <h2 className="mb-4">Why Choose <strong>QC</strong></h2>
            <p>When choosing to attend an online school, it can be difficult to separate legitimate educational institutions from less-than-reputable companies that are looking to make a quick buck. You want to choose a school you&apos;ll be proud to attend. One that will help you meet your career goals.</p>
          </div>
          <div className="row mb-4">
            <div className="col-2 col-md-3 d-flex align-items-center justify-content-end">
              <FaRegCalendarCheck className="h1 text-secondary mb-3" />
            </div>
            <div className="col-9">
              <h3>Proven Track Record</h3>
              <p>Enroll in a school with a 35-year track record of quality distance education, an A+ rating from the Better Business Bureau, and thousands of graduates working careers they love!</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-2 col-md-3 d-flex align-items-center justify-content-end">
              <FaLaptopHouse className="h1 text-secondary mb-3" />
            </div>
            <div className="col-9">
              <h3>A Fully Online Learning Experience</h3>
              <p>QC offers 100% online learning on all courses! There are no mandatory scheduled webinars to attend and no inconvenient classroom sessions. You work at your own pace and on your own time, with 1-on-1 guidance and support from your personal tutor and your student support advisor.</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-2 col-md-3 d-flex align-items-center justify-content-end">
              <FaChalkboardTeacher className="h1 text-secondary mb-3" />
            </div>
            <div className="col-9">
              <h3>Expert Tutors to Guide You</h3>
              <p>Your personal tutor will follow your progress through your online course, will personally grade your assignments, and provide you with individualized feedback after you ve completed each unit. These aren t paid employees of the school grading from a template; they re career professionals working in your industry, and they re focused on your success!</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-2 col-md-3 d-flex align-items-center justify-content-end">
              <FaBriefcase className="h1 text-secondary mb-3" />
            </div>
            <div className="col-9">
              <h3>Business Training You can Use</h3>
              <p>Each course comes complete with optional business training where you ll work with your tutor to come up with a business name, create a marketing strategy, start building your website, and get access to templates that will help get your career off the ground from day one!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-2 col-md-3 d-flex align-items-center justify-content-end">
              <FaHandHoldingUsd className="h1 text-secondary mb-3" />
            </div>
            <div className="col-9">
              <h3>No Additional or Hidden Fees</h3>
              <p>Your course tuition is the only fee you ll pay for your course or certification. Unlike other schools, when you graduate from QC your certificate is yours forever, and you ll have continued access to your student center at no additional cost. You ll never be asked to pay subscription fees, membership fees, or any other fees to keep your certification current or use your business materials.</p>
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

export default Home;
