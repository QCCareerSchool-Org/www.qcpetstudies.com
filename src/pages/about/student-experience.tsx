import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { DefaultLayout } from '../../components/DefaultLayout';
import { SEO } from '../../components/SEO';
import StudentExperienceBackground from '../../images/backgrounds/student-experience-hero.jpg';
import CertifiedExpertImage from '../../images/certified-experts.png';
import facebookImage from '../../images/facebook.svg';
import InstagramImage from '../../images/instagram.svg';
import RssImage from '../../images/rss.svg';
import SocialCommunityImage from '../../images/social-community-bg.jpg';
import IntroImage from '../../images/student-experience-intro.jpg';
import SupportImage from '../../images/student-support-student-experience.jpg';

const StudentExperiencePage: NextPage = () => (
  <DefaultLayout>
    <SEO
      title="Student Experience"
      description="This is Student Experience page"
      canonical="/student-experience"
    />

    <section id="firstSection" className="bg-dark">
      <Image src={StudentExperienceBackground} layout="fill" objectFit="cover" objectPosition="center" alt="student experince background" />
      <div className="container">
        <div className="row">
          <h2 className="text-uppercase">Student <br /><strong>Experience</strong></h2>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center text-lg-start">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 px-5">
            <h3>As a QC Pet Studies Student, you&apos;ll get help through <strong>every step of your education.</strong></h3>
            <p>When you enroll, you gain access to QC&apos;s friendly and experienced Student Support Specialists who are ready to assist you and answer your questions. As you work through your course, you&apos;ll be guided by a certified master groomer with years of experience in the industry. Even after you graduate, you&apos;ll remain an essential member of the QC community. You&apos;ll build relationships with other groomers and be connected with business resources that will help you succeed in your dog grooming career.</p>
          </div>
          <div className="col-12 col-lg-4">
            <Image src={IntroImage} alt="student experience intro image" height="255" width="255" />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-navy py-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6" style={{ position: 'relative' }}>
            <Image src={SupportImage} layout="fill" objectFit="cover" objectPosition="center" alt="a dog sitting on a staircase" />
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start p-5">
            <h2>Get Help When <br /><strong>You Need it</strong></h2>
            <p className="lead">QCs student support team is here to help.</p>
            <p className="mb-5">Reach out as often as you need to discuss your course materials or to ask questions about your assignments. Whether you&apos;re a student, a graduate or are considering enrolling, we are always happy to hear from you. Contact QC Pet Studies by phone, email or Live Chat whichever you prefer!</p>
            <h3><u>Contact Us</u></h3>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container text-center text-lg-start">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <h2>Learn from Certified <br /><strong>Industry Experts</strong></h2>
            <p className="lead"><strong>To be the best, you need to learn from the best.</strong></p>
            <p>At QC Pet Studies, you ll be paired with a tutor who is a certified master groomer with years of industry experience. Your tutor will review your work and provide you with personalized audio feedback on your dog grooming assignments. They ll help you develop your knowledge, perfect your technique and grow your confidence as you work through your online dog grooming course. You ll benefit from your tutor s insight and experience, as well as their drive to help you succeed.</p>
          </div>
          <div className="col-12 col-lg-6">
            <Image src={CertifiedExpertImage} alt="certified expert image" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center">
        <h2>Join the <strong>Social Community</strong></h2>
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-lg-10">
            <p className="lead"><strong>We&apos;re social!</strong></p>
            <p>From the latest grooming tools to the best pet accessories, QC s online communities are a great resource to stay on top of industry trends. You can get in touch with the QC team, access career advice, network with other groomers, and get inspired by pictures of impressive grooming works. Join the conversation today:</p>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 d-flex justify-content-around">
            <Image src={facebookImage} height="33" width="43" alt="facebook image" />
            <Image src={RssImage} height="33" width="43" alt="facebook image" />
            <Image src={InstagramImage} height="33" width="43" alt="facebook image" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h3>Connect with fellow dog grooming students!</h3>
            <p className="mb-5">The Student Forum is a hub for dog grooming students to socialize and support one another.
              Ask questions about tools and techniques, swap stories about your best and worst canine clients, and be inspired by like-minded individuals.
              Education is essential to your success as a dog groomer even after you graduate. That s why you ll have lifetime access to the Online Student Center and be able to access new course texts and video tutorials as soon as they re available.
              And you can always reach out to the QC team with questions about your career or the dog grooming industry.</p>
            <p className="lead">At QC Pet Studies, <strong>we re with you for the journey</strong></p>
            <Image src={SocialCommunityImage} alt="social community covered image" />
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
);

export default StudentExperiencePage;
