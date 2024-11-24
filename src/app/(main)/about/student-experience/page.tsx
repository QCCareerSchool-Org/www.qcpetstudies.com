import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import { SettingUpForSuccessSection } from './SettingUpForSuccessSection';
import { PageComponent } from '@/app/serverComponent';
import { SectionBackground } from '@/components/SectionBackground';
import { SEO } from '@/components/SEO';
import StudentExperienceBackground from '@/images/backgrounds/student-experience-hero.jpg';
import CertifiedExpertImage from '@/images/certified-experts-collage.png';
import LineOfDogsImage from '@/images/line-of-dogs.jpg';
import WomanUsingLaptopImage from '@/images/woman-using-laptop-with-dog-on-lap.jpg';

const StudentExperiencePage: PageComponent = () => {

  return <>
    <SEO
      title="Student Experience"
      description="As a QC Pet Studies Student, you'll get help through every step of your education. As you work through your course, you'll be guided by our team of teaching assistants, as well as top-notch industry experts with years of professional experience. Even after you graduate, you'll remain an essential member of the QC community."
      canonical="/about/student-experience"
    />

    <section id="top" className="bg-dark">
      <SectionBackground src={StudentExperienceBackground} priority />
      <div className="container text-center">
        <div className="row">
          <h1>Student Experience</h1>
        </div>
      </div>
    </section>

    <SettingUpForSuccessSection />

    <section className="bg-navy py-0">
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-12 col-lg-6" style={{ position: 'relative' }}>
            <Image
              src={WomanUsingLaptopImage}
              placeholder="blur"
              alt="woman using a laptop with a Chihuahua on her lap"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="col-12 col-lg-6 text-lg-start">
            <div className="section px-lg-5">
              <h2>Get Help When <strong>You Need It</strong></h2>
              <p className="lead">QC's student support team is here to help.</p>
              <p className="mb-4">Reach out as often as you need to discuss your course materials or to ask questions about your assignments. Whether you're a student, a graduate or are considering enrolling, we are always happy to hear from you. Contact QC Pet Studies by phone, email or Live Chat&mdash;whichever you prefer!</p>
              <p className="mb-0"><Link href="/contact-us" className="btn btn-outline-secondary">Contact Us</Link></p>
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
            <p className="mb-0">At QC Pet Studies, you'll be paired with a tutor who is an industry expert with years of experience. Our roster of Master groomers, dog training specialists and pet-care providers are ready to support you in your learning journey. Your tutor will review your work and provide you with personalized audio feedback on your assignments. They'll help you develop your knowledge, perfect your technique and grow your confidence as you work through your online grooming, training, or daycare course. You'll benefit from your tutor's insight and experience, as well as their drive to help you succeed.</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xxl-3">
            <Image
              src={CertifiedExpertImage}
              alt="collage of dogs"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <h2 className="mb-4">Join the <strong>Social Community</strong></h2>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-5">
            <h3>We're social!</h3>
            <p className="mb-0">From the latest training and grooming techniques to the best resources for your pets, QC's online communities are a great resource to stay on top of industry trends. You can get in touch with the QC team, access career advice, network with other dog groomers and dog trainers, and get inspired by pictures of impressive grooming work. Join the conversation today:</p>
          </div>
          <div className="col-12 col-md-10 col-lg-8 mb-5">
            <div className="d-flex justify-content-around text-secondary">
              <a href="https://www.facebook.com/qcpetstudies" target="_blank" rel="noopener noreferrer" className="link-secondary"><FaFacebookF size={44} /></a>
              <a href="https://twitter.com/qcpetstudies" target="_blank" rel="noopener noreferrer" className="link-secondary"><FaTwitter size={44} /></a>
              <a href="https://www.instagram.com/qcpetstudies" target="_blank" rel="noopener noreferrer" className="link-secondary"><FaInstagram size={44} /></a>
            </div>
          </div>
          <div className="col-12 col-lg-10">
            <h3>Connect with fellow QC Pet Studies students!</h3>
            <p className="mb-5">The Virtual Community is a hub for QC Pet Studies students to socialize and support one another. Ask questions about tools and techniques, swap stories about your best and worst canine clients, and be inspired by like-minded individuals. Education is essential to your success in the pet industry even after you graduate. That's why you'll have lifetime access to the Online Student Center and be able to access new course lessons and video tutorials as soon as they're available. You can always reach out to the QC team with questions about your career or the pet care industry.</p>
            <p className="lead">At QC Pet Studies, <strong>we're with you for the journey.</strong></p>
            <Image
              src={LineOfDogsImage}
              alt="a line of nine dogs standing side to side"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default StudentExperiencePage;
