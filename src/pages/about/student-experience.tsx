import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaRss } from 'react-icons/fa';

import { DefaultLayout } from '../../components/DefaultLayout';
import { SEO } from '../../components/SEO';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import StudentExperienceBackground from '../../images/backgrounds/student-experience-hero.jpg';
import CertifiedExpertImage from '../../images/certified-experts-collage.png';
import LineOfDogsImage from '../../images/line-of-dogs.jpg';
import ManOnPhoneImage from '../../images/man-on-phone-holding-dog.jpg';
import WomanUsingLaptopImage from '../../images/woman-using-laptop-with-dog-on-lap.jpg';

const StudentExperiencePage: NextPage = () => {
  const screenWidth = useScreenWidth();
  const xlOrGreater = screenWidth >= 1200;

  return (
    <DefaultLayout>
      <SEO
        title="Student Experience"
        description="This is Student Experience page"
        canonical="/about/student-experience"
      />

      <section id="firstSection" className="bg-dark">
        <Image src={StudentExperienceBackground} layout="fill" objectFit="cover" objectPosition="center" alt="dog" />
        <div className="container text-center">
          <div className="row">
            <h1>Student Experience</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center text-lg-start text-xl-center">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 mb-4 mb-lg-0">
              <h2>Setting You Up for Success</h2>
              <p className="lead">As a QC Pet Studies Student, you&apos;ll get help through <strong>every step of your education.</strong></p>
              <p className="mb-0">When you enroll, you gain access to QC&apos;s friendly and experienced Student Support Specialists who are ready to assist you and answer your questions. As you work through your course, you&apos;ll be guided by a certified master groomer with years of experience in the industry. Even after you graduate, you&apos;ll remain an essential member of the QC community. You&apos;ll build relationships with other groomers and be connected with business resources that will help you succeed in your dog grooming career.</p>
            </div>
            {!xlOrGreater && (
              <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                <Image src={ManOnPhoneImage} layout="responsive" alt="man on the phone holding a dog" />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-navy py-0">
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-12 col-lg-6" style={{ position: 'relative' }}>
              <Image src={WomanUsingLaptopImage} layout="fill" objectFit="cover" objectPosition="center" alt="woman using a laptop with a Chihuahua on her lap" />
            </div>
            <div className="col-12 col-lg-6 text-lg-start">
              <div className="section px-lg-5">
                <h2>Get Help When <strong>You Need it</strong></h2>
                <p className="lead">QCs student support team is here to help.</p>
                <p className="mb-4">Reach out as often as you need to discuss your course materials or to ask questions about your assignments. Whether you&apos;re a student, a graduate or are considering enrolling, we are always happy to hear from you. Contact QC Pet Studies by phone, email or Live Chat whichever you prefer!</p>
                <p className="mb-0"><Link href="/contact"><a className="btn btn-outline-secondary">Contact Us</a></Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-center text-lg-start">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-lg-6 col-xl-8 col-xxl-9 mb-4 mb-lg-0">
              <h2>Learn from Certified<br /><strong>Industry Experts</strong></h2>
              <p className="lead">To be the best, you need to learn from the best.</p>
              <p className="mb-0">At QC Pet Studies, you ll be paired with a tutor who is a certified master groomer with years of industry experience. Your tutor will review your work and provide you with personalized audio feedback on your dog grooming assignments. They ll help you develop your knowledge, perfect your technique and grow your confidence as you work through your online dog grooming course. You ll benefit from your tutor&apos;s insight and experience, as well as their drive to help you succeed.</p>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xxl-3">
              <Image src={CertifiedExpertImage} layout="responsive" alt="collage of dogs" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2 className="mb-4">Join the <strong>Social Community</strong></h2>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 mb-5">
              <h3>We&apos;re social!</h3>
              <p className="mb-0">From the latest grooming tools to the best pet accessories, QC&apos;s online communities are a great resource to stay on top of industry trends. You can get in touch with the QC team, access career advice, network with other groomers, and get inspired by pictures of impressive grooming works. Join the conversation today:</p>
            </div>
            <div className="col-12 col-md-10 col-lg-8 mb-5">
              <div className="d-flex justify-content-around text-secondary">
                <FaFacebookF size={44} />
                <FaRss size={44} />
                <FaInstagram size={44} />
              </div>
            </div>
            <div className="col-12 col-lg-10">
              <h3>Connect with fellow dog grooming students!</h3>
              <p className="mb-5">The Student Forum is a hub for dog grooming students to socialize and support one another. Ask questions about tools and techniques, swap stories about your best and worst canine clients, and be inspired by like-minded individuals. Education is essential to your success as a dog groomer even after you graduate. That&apos;s why you ll have lifetime access to the Online Student Center and be able to access new course texts and video tutorials as soon as they&apos;re available. And you can always reach out to the QC team with questions about your career or the dog grooming industry.</p>
              <p className="lead">At QC Pet Studies, <strong>we&apos;re with you for the journey</strong></p>
              <Image src={LineOfDogsImage} alt="a line of nine dogs standing side to side" />
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default StudentExperiencePage;
