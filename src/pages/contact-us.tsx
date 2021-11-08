import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DefaultLayout } from '../components/DefaultLayout';
import { SEO } from '../components/SEO';
import ContactUsBackground from '../images/backgrounds/contact-us-bg.jpg';
import ContactByChatImage from '../images/chat.svg';
import ContactByEmailImage from '../images/email.svg';
import ContactByPhoneImage from '../images/headset.svg';
import ScheduleCallImage from '../images/schedule-call-contact.png';

const ContactUsPage: NextPage = () => {

  return (
    <DefaultLayout>
      <SEO
        title="Contact Us"
        description="This is Contact Us page"
        canonical="/contact-us"
      />

      <section id="firstSection" className="bg-dark text-light">
        <Image src={ContactUsBackground} layout="fill" objectFit="cover" objectPosition="center" alt="Contact us background" />
        <div className="container">
          <h2 className="text-uppercase">Contact<br /><strong>QC Pet<br />Studies</strong></h2>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2 className="mb-4">Contact <strong>Us</strong></h2>
          <p className="lead">We want to hear from you!</p>
          <p>Whether you are a prospective student wondering about QC&apos;s courses or tuition, or a current student with questions about an assignment, we&apos;re here to help you in any way we can. Contact QC&apos;s Student Support Specialists by phone, email, or Live Chat!</p>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-4 d-flex">
              <div className="w-100">
                <div className="card-body">
                  <Image height="80px" width="64px" src={ContactByPhoneImage} alt="contact by phone" />
                  <h3>By Phone</h3>
                  <div className="mb-3">
                    <Link href=""><a className="link-primary">1-833 600-3751</a></Link>
                  </div>
                  <p>Speak with a student advisor about enrolling with QC or for assistance with your courses and assignments.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-lg-4 d-flex">
              <div className="w-100">
                <div className="card-body">
                  <Image height="80px" width="64px" src={ContactByEmailImage} alt="contact by phone" />
                  <h3>By Email</h3>
                  <div className="mb-3">
                    <Link href=""><a className="link-primary">info@qcpetstudies.com</a></Link>
                  </div>
                  <p>Send us an email at any time and we&apos;ll get back to you as soon as possible!</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-lg-4 d-flex">
              <div className="w-100">
                <div className="card-body">
                  <Image height="80px" width="64px" src={ContactByChatImage} alt="contact by phone" />
                  <h3>LiveChat</h3>
                  <div className="mb-3">
                    <Link href=""><a className="link-primary">Click here to chat</a></Link>
                  </div>
                  <p>Do you have a question you want to be answered right away? Our Student Support Specialists are ready to chat!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container text-lg-start text-center">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h2>Schedule a Call with<br /><strong>a Student Advisor</strong></h2>
              <p className="lead"><strong>Would you like to speak to a student advisor <br /> about your options with QC Pet Studies?</strong></p>
              <p>Please note: QC&apos;s offices are not open 24/7. We&apos;ll do our best to call you at the specific times you request, but if our offices will be closed at the time you request, we&apos;ll contact you via email to reschedule!</p>
              <a href=""><button className="btn btn-outline-secondary mb-4 mb-lg-0">Schedule a Call</button></a>
            </div>
            <div className="col-12 col-lg-6">
              <Image src={ScheduleCallImage} alt="dog looking to the left" objectFit="contain" />
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default ContactUsPage;
